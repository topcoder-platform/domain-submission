/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest, ScanResult } from "../../../common/common";
import { CreateReviewInput, Review, ReviewList, UpdateReviewInput } from "../review";

export type ReviewService = typeof ReviewService;
export const ReviewService = {
  scan: {
    path: "/topcoder.domain.service.review.Review/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.review.Review/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Review) => Buffer.from(Review.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Review.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.review.Review/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateReviewInput) => Buffer.from(CreateReviewInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateReviewInput.decode(value),
    responseSerialize: (value: Review) => Buffer.from(Review.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Review.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.review.Review/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateReviewInput) => Buffer.from(UpdateReviewInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateReviewInput.decode(value),
    responseSerialize: (value: ReviewList) => Buffer.from(ReviewList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReviewList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.review.Review/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ReviewList) => Buffer.from(ReviewList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReviewList.decode(value),
  },
} as const;

export interface ReviewServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Review>;
  create: handleUnaryCall<CreateReviewInput, Review>;
  update: handleUnaryCall<UpdateReviewInput, ReviewList>;
  delete: handleUnaryCall<LookupCriteria, ReviewList>;
}
