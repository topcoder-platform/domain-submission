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
  ReviewSummationServer,
  ReviewSummationService,
} from "../models/domain-layer/submission/service/review_summation";

import {
  CreateReviewSummationInput,
  ReviewSummation,
  ReviewSummationList,
  UpdateReviewSummationInput,
} from "../models/domain-layer/submission/review_summation";

import Domain from "../domain/ReviewSummation";

class ReviewSummationServerImp implements ReviewSummationServer {
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<CreateReviewSummationInput, ReviewSummation> = async (
    call: ServerUnaryCall<CreateReviewSummationInput, ReviewSummation>,
    callback: sendUnaryData<ReviewSummation>
  ): Promise<void> => {
    const { request: CreateReviewSummationInput } = call;
    Domain.create(CreateReviewSummationInput)
      .then((result) => callback(null, result))
      .catch((error: Error) => callback(error, null));
  };

  lookup: handleUnaryCall<LookupCriteria, ReviewSummation> = async (
    call: ServerUnaryCall<LookupCriteria, ReviewSummation>,
    callback: sendUnaryData<ReviewSummation>
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

  update: handleUnaryCall<UpdateReviewSummationInput, ReviewSummationList> = async (
    call: ServerUnaryCall<UpdateReviewSummationInput, ReviewSummationList>,
    callback: sendUnaryData<ReviewSummationList>
  ): Promise<void> => {
    const { request: { filterCriteria, updateInput } } = call;

    const result = await Domain.update(filterCriteria, updateInput);

    callback(null, result);
  };

  delete: handleUnaryCall<LookupCriteria, ReviewSummationList> = async (
    call: ServerUnaryCall<LookupCriteria, ReviewSummationList>,
    callback: sendUnaryData<ReviewSummationList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const result = await Domain.delete(lookupCriteria);

    callback(null, result);
  };
}

export { ReviewSummationServerImp as ReviewSummationServer, ReviewSummationService };
