import { Value } from './../dal/models/nosql/parti_ql';
import CoreOperations from '../common/CoreOperations';
import { SubmissionSchema } from '../schema/Submission';
import { CreateSubmissionInput, Submission } from '../models/domain-layer/submission/submission';
import IdGenerator from '../helpers/IdGenerator';


class SubmissionDomain extends CoreOperations<Submission, CreateSubmissionInput> {
  protected toEntity(item: { [key: string]: Value }): Submission {
    return Submission.fromJSON(item);
  }

  public async create(input: CreateSubmissionInput): Promise<Submission> {
    const now = new Date().getTime();
    const submission: Submission = {
      id: IdGenerator.generateUUID(),
      challengeId: input.challengeId,
      created: input.created || now,
      createdBy: "tcwebservice", // TODO: extract from JWT
      fileType: input.fileType,
      legacyChallengeId: input.legacyChallengeId,
      legacySubmissionId: input.legacySubmissionId,
      memberId: input.memberId,
      submissionPhaseId: input.submissionPhaseId,
      submittedDate: input.submittedDate,
      type: input.type,
      updated: input.updated || now,
      updatedBy: "tcwebservice", // TODO: extract from JWT
      url: input.url,
    }
    return super.create(submission);
  }
}

export default new SubmissionDomain(
  SubmissionSchema.tableName,
  SubmissionSchema.attributes,
  SubmissionSchema.indices
);
