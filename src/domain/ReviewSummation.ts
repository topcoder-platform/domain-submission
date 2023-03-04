import { Value } from '../dal/models/nosql/parti_ql';
import CoreOperations from '../common/CoreOperations';
import { ReviewSummation, CreateReviewSummationInput } from '../models/domain-layer/submission/review_summation';
import IdGenerator from '../helpers/IdGenerator';
import { ReviewSummationSchema } from '../schema/ReviewSummation';

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
    return super.create(review);
  }
}

export default new ReviewSummationDomain(
  ReviewSummationSchema.tableName,
  ReviewSummationSchema.attributes,
  ReviewSummationSchema.indices
);
