import { Value } from './../dal/models/nosql/parti_ql';
import CoreOperations from '../common/CoreOperations';
import { Review, CreateReviewInput } from '../models/domain-layer/submission/review';
import IdGenerator from '../helpers/IdGenerator';
import { ReviewSchema } from '../schema/Review';

class ReviewDomain extends CoreOperations<Review, CreateReviewInput> {
  protected toEntity(item: { [key: string]: Value }): Review {
    return Review.fromJSON(item);
  }

  public async create(input: CreateReviewInput): Promise<Review> {
    const now = new Date().getTime()
    const review: Review = {
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

export default new ReviewDomain(
  ReviewSchema.tableName,
  ReviewSchema.attributes,
  ReviewSchema.indices
);
