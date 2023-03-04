/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateResult, LookupCriteria, ScanRequest, ScanResult, UpdateResult } from "../../../common/common";
import {
  CreateReviewSummationInput,
  ReviewSummation,
  ReviewSummationList,
  UpdateReviewSummationInput,
} from "../review_summation";

export type ReviewSummationService = typeof ReviewSummationService;
export const ReviewSummationService = {
  scan: {
    path: "/topcoder.domain.service.review_summation.ReviewSummation/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.review_summation.ReviewSummation/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ReviewSummation) => Buffer.from(ReviewSummation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReviewSummation.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.review_summation.ReviewSummation/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateReviewSummationInput) =>
      Buffer.from(CreateReviewSummationInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateReviewSummationInput.decode(value),
    responseSerialize: (value: CreateResult) => Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.review_summation.ReviewSummation/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateReviewSummationInput) =>
      Buffer.from(UpdateReviewSummationInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateReviewSummationInput.decode(value),
    responseSerialize: (value: UpdateResult) => Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.review_summation.ReviewSummation/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ReviewSummationList) => Buffer.from(ReviewSummationList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReviewSummationList.decode(value),
  },
} as const;

export interface ReviewSummationServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, ReviewSummation>;
  create: handleUnaryCall<CreateReviewSummationInput, CreateResult>;
  update: handleUnaryCall<UpdateReviewSummationInput, UpdateResult>;
  delete: handleUnaryCall<LookupCriteria, ReviewSummationList>;
}
