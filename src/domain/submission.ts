import { Value } from './../dal/models/nosql/parti_ql';
import CoreOperations from '../common/CoreOperations';
import { SubmissionSchema } from '../schema/Submission';
import {
  CreateSubmissionInput, Submission, SubmissionList,
  UpdateSubmissionInput_UpdateInput
} from '../models/domain-layer/submission/submission';
import IdGenerator from '../helpers/IdGenerator';
import { LookupCriteria, Operator, ScanCriteria } from '../models/common/common';
import { isUuid, getPhaseName, getChallengePhaseId } from '../utils/utils';
import {
  LegacyUploadDomain,
  LegacySubmissionDomain,
} from "@topcoder-framework/domain-acl";
import { SubmissionStatus, UploadStatus } from '../common/Constants';
import { GRPC_ACL_SERVER_HOST, GRPC_ACL_SERVER_PORT } from '../config';
import { CreateResult } from '../models/common/common';

const legacyUploadDomain = new LegacyUploadDomain(
  GRPC_ACL_SERVER_HOST,
  GRPC_ACL_SERVER_PORT
);

const legacySubmissionDomain = new LegacySubmissionDomain(
  GRPC_ACL_SERVER_HOST,
  GRPC_ACL_SERVER_PORT
);


class SubmissionDomain extends CoreOperations<Submission, CreateSubmissionInput> {
  protected toEntity(item: { [key: string]: Value }): Submission {
    return Submission.fromJSON(item);
  }

  public async create(input: CreateSubmissionInput): Promise<Submission> {
    //Create submission

    const now = new Date().getTime();
    const id = IdGenerator.generateUUID();
    const tracingInfo = {
      createdBy: "tcwebservice", // TODO: extract from JWT
      updatedBy: "tcwebservice", // TODO: extract from JWT
      created: now,
      updated: now
    }
    //First Let's do legacy
    const legacySubmissionInput = {
      ...input,
      ...tracingInfo
    }
    if (input.submissionPhaseId && isUuid(input.submissionPhaseId)) {
      const phaseName = await getPhaseName(input.challengeId, input.submissionPhaseId)
      if (phaseName) {
        legacySubmissionInput.submissionPhaseId = (await getChallengePhaseId(phaseName))?.toString()
      }
    }
    // In case phaseId is undefined
    if (legacySubmissionInput.submissionPhaseId === undefined) {
      legacySubmissionInput.submissionPhaseId = input.submissionPhaseId
    }
    //Move the rest to ACL
    const legacySubmissionResult: CreateResult = await legacySubmissionDomain.create(legacySubmissionInput)
    // End Legacy
    // Get information for legacy submission
    if (legacySubmissionResult.kind?.$case === "stringId") {
      //TODO: submission already exists in legacy we need to update it with upload id
      //This case should not really happen

      const results = await this.scan([{
        key: "id",
        operator: Operator.OPERATOR_EQUAL,
        value: id
      }], undefined)
      return results.items[0] as Submission
    } else {
      const submission: Submission = {
        id,
        challengeId: input.challengeId,
        fileType: input.fileType,
        legacyChallengeId: input.legacyChallengeId,
        legacySubmissionId: (legacySubmissionResult.kind as any).integerId, //TODO: ask for better type
        memberId: input.memberId,
        submissionPhaseId: input.submissionPhaseId,
        submittedDate: input.submittedDate,
        type: input.type,
        url: input.url,
        ...tracingInfo
      }
      const result = await super.create(submission);
      return result;
    }

  }

  public async update(filterCriteria: ScanCriteria[], updateInput: UpdateSubmissionInput_UpdateInput): Promise<SubmissionList> {
    // Begin Anti-Corruption Layer
    await legacyUploadDomain.update({
      uploadId: updateInput.submissionUploadId,
      url: updateInput.url, // Only update of the URL is supported
    })
    // End Anti-Corruption Layer
    return super.update(filterCriteria, updateInput);
  }

  public async delete(filterCriteria: LookupCriteria): Promise<SubmissionList> {
    // Begin Anti-Corruption Layer
    const submission = await legacySubmissionDomain.lookup(filterCriteria)
    // Mark upload as deleted
    await legacyUploadDomain.update({
      uploadId: submission.submissionUploadId,
      uploadStatusId: UploadStatus.Deleted,
    })
    await legacySubmissionDomain.update({
      submissionId: submission.submissionId,
      submissionStatusId: SubmissionStatus.Deleted
    })
    // End Anti-Corruption Layer
    return super.delete(filterCriteria);
  }
}

export default new SubmissionDomain(
  SubmissionSchema.tableName,
  SubmissionSchema.attributes,
  SubmissionSchema.indices
);
