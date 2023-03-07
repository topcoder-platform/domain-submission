import { Operator, Value } from '../dal/models/nosql/parti_ql';
import CoreOperations from '../common/CoreOperations';
import { ReviewSummation, CreateReviewSummationInput } from '../models/domain-layer/submission/review_summation';
import IdGenerator from '../helpers/IdGenerator';
import { ReviewSummationSchema } from '../schema/ReviewSummation';
import {
  LegacySubmissionDomain,
} from "@topcoder-framework/domain-acl";

if (!process.env.GRPC_ACL_SERVER_HOST || !process.env.GRPC_ACL_SERVER_PORT) {
  throw new Error(
    "Missing required configurations GRPC_ACL_SERVER_HOST and GRPC_ACL_SERVER_PORT"
  );
}

const legacySubmissionDomain = new LegacySubmissionDomain(
  process.env.GRPC_ACL_SERVER_HOST,
  process.env.GRPC_ACL_SERVER_PORT
);

class ReviewSummationDomain extends CoreOperations<ReviewSummation, CreateReviewSummationInput> {
  protected toEntity(item: { [key: string]: Value }): ReviewSummation {
    return ReviewSummation.fromJSON(item);
  }

  public async create(input: CreateReviewSummationInput): Promise<ReviewSummation> {
    const now = new Date().getTime()
    const review: ReviewSummation = {
      id: IdGenerator.generateUUID(),
      ...input,
      created: now,
      updated: now,
      createdBy: "tcwebservice", // TODO: extract from JWT
      updatedBy: "tcwebservice", // TODO: extract from JWT
    }
    // Begin Anti-Corruption Layer
    await legacySubmissionDomain.update({
      submissionId: input.submissionId,
      ...(input.isFinal ? { finalScore: input.aggregateScore } : { initialScore: input.aggregateScore }),
    })
    // TODO: Update marathon match tables
    // -> QUERY_UPDATE_LONG_SUBMISSION_SCORE { componentStateId, submissionNumber, reviewScore }
    // -> QUERY_UPDATE_LONG_COMPONENT_STATE_POINTS { componentStateId, reviewScore }
    // End Anti-Corruption Layer
    return super.create(review);
  }
}

export default new ReviewSummationDomain(
  ReviewSummationSchema.tableName,
  ReviewSummationSchema.attributes,
  ReviewSummationSchema.indices
);
