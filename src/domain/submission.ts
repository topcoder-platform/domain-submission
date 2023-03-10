import { Value } from './../dal/models/nosql/parti_ql';
import CoreOperations from '../common/CoreOperations';
import { SubmissionSchema } from '../schema/Submission';
import { LegacySubmissionDomain } from "@topcoder-framework/domain-acl"

import { CreateSubmissionInput, Submission } from '../models/domain-layer/submission/submission';
import IdGenerator from '../helpers/IdGenerator';
import { isUuid, getPhaseName, getChallengePhaseId } from '../utils/utils';
import { GRPC_ACL_SERVER_HOST, GRPC_ACL_SERVER_PORT } from '../config';
import { CreateResult } from '../models/common/common';


const legacySubmissionDomain = new LegacySubmissionDomain(GRPC_ACL_SERVER_HOST, GRPC_ACL_SERVER_PORT);

class SubmissionDomain extends CoreOperations<Submission, CreateSubmissionInput> {
  protected toEntity(item: { [key: string]: Value }): Submission {
    return Submission.fromJSON(item);
  }

  public async create(input: CreateSubmissionInput): Promise<Submission> {
    //Create submission

    const now = new Date().getTime();
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


    const submission: Submission = {
      id: IdGenerator.generateUUID(),
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
    console.log("************ Submission Result ************", result)
    return result;

  }
}

export default new SubmissionDomain(
  SubmissionSchema.tableName,
  SubmissionSchema.attributes,
  SubmissionSchema.indices
);
