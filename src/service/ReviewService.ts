import {
  UntypedHandleCall,
  handleUnaryCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "../models/common/common";

import {
  ReviewServer,
  ReviewService,
} from "../models/domain-layer/submission/service/review";

import {
  CreateReviewInput,
  Review,
  ReviewList,
  UpdateReviewInput,
} from "../models/domain-layer/submission/review";

import Domain from "../domain/Review";

class ReviewServerImp implements ReviewServer {
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<CreateReviewInput, Review> = async (
    call: ServerUnaryCall<CreateReviewInput, Review>,
    callback: sendUnaryData<Review>
  ): Promise<void> => {
    const { request: CreateReviewInput } = call;
    Domain.create(CreateReviewInput)
      .then((result) => callback(null, result))
      .catch((error: Error) => callback(error, null));
  };

  lookup: handleUnaryCall<LookupCriteria, Review> = async (
    call: ServerUnaryCall<LookupCriteria, Review>,
    callback: sendUnaryData<Review>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const submission = await Domain.lookup(lookupCriteria);

    callback(null, submission);
  };

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { criteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await Domain.scan(
      criteria,
      inputNextToken
    );

    callback(null, { items, nextToken });
  };

  update: handleUnaryCall<UpdateReviewInput, ReviewList> = async (
    call: ServerUnaryCall<UpdateReviewInput, ReviewList>,
    callback: sendUnaryData<ReviewList>
  ): Promise<void> => {
    const { request: { filterCriteria, updateInput } } = call;

    const result = await Domain.update(filterCriteria, updateInput);

    callback(null, result);
  };

  delete: handleUnaryCall<LookupCriteria, ReviewList> = async (
    call: ServerUnaryCall<LookupCriteria, ReviewList>,
    callback: sendUnaryData<ReviewList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const result = await Domain.delete(lookupCriteria);

    callback(null, result);
  };
}

export { ReviewServerImp as ReviewServer, ReviewService };
