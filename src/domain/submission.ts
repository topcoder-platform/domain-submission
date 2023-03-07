import { Value } from './../dal/models/nosql/parti_ql';
import CoreOperations from '../common/CoreOperations';
import { SubmissionSchema } from '../schema/Submission';
import { CreateSubmissionInput, Submission, SubmissionList, UpdateSubmissionInput_UpdateInput } from '../models/domain-layer/submission/submission';
import IdGenerator from '../helpers/IdGenerator';
import { LookupCriteria, Operator, ScanCriteria } from '../models/common/common';
import {
  LegacyUploadDomain,
  LegacySubmissionDomain,
} from "@topcoder-framework/domain-acl";
import { SubmissionStatus, UploadStatus } from '../common/Constants';

if (!process.env.GRPC_ACL_SERVER_HOST || !process.env.GRPC_ACL_SERVER_PORT) {
  throw new Error(
    "Missing required configurations GRPC_ACL_SERVER_HOST and GRPC_ACL_SERVER_PORT"
  );
}

const legacyUploadDomain = new LegacyUploadDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);

const legacySubmissionDomain = new LegacySubmissionDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);

class SubmissionDomain extends CoreOperations<Submission, CreateSubmissionInput> {
  protected toEntity(item: { [key: string]: Value }): Submission {
    return Submission.fromJSON(item);
  }

  public async create(input: CreateSubmissionInput): Promise<Submission> {
    const now = new Date().getTime();
    const submission: Submission = {
      id: IdGenerator.generateUUID(),
      challengeId: input.challengeId,
      created: now,
      createdBy: "tcwebservice", // TODO: extract from JWT
      fileType: input.fileType,
      legacyChallengeId: input.legacyChallengeId,
      legacySubmissionId: input.legacySubmissionId,
      memberId: input.memberId,
      submissionPhaseId: input.submissionPhaseId,
      submittedDate: input.submittedDate,
      type: input.type,
      updated: now,
      updatedBy: "tcwebservice", // TODO: extract from JWT
      url: input.url,
    }
    return super.create(submission);
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
