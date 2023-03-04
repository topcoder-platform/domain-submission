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
  SubmissionServer,
  SubmissionService,
} from "../models/domain-layer/submission/service/submission";

import {
  CreateSubmissionInput,
  Submission,
  SubmissionList,
  UpdateSubmissionInput,
} from "../models/domain-layer/submission/submission";

import Domain from "../domain/submission";

class SubmissionServerImp implements SubmissionServer {
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<CreateSubmissionInput, Submission> = async (
    call: ServerUnaryCall<CreateSubmissionInput, Submission>,
    callback: sendUnaryData<Submission>
  ): Promise<void> => {
    const { request: CreateSubmissionInput } = call;
    Domain.create(CreateSubmissionInput)
      .then((submission: Submission) => callback(null, submission))
      .catch((error: Error) => callback(error, null));
  };

  lookup: handleUnaryCall<LookupCriteria, Submission> = async (
    call: ServerUnaryCall<LookupCriteria, Submission>,
    callback: sendUnaryData<Submission>
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

  update: handleUnaryCall<UpdateSubmissionInput, SubmissionList> = async (
    call: ServerUnaryCall<UpdateSubmissionInput, SubmissionList>,
    callback: sendUnaryData<SubmissionList>
  ): Promise<void> => {
    try {
      const { request: { filterCriteria, updateInput } } = call;

      if (!updateInput) return callback(null, { items: [] })

      const submissionList = await Domain.update(filterCriteria, updateInput);

      callback(null, submissionList);
    } catch (error:any) {
      callback(error, null);
    }
  };

  delete: handleUnaryCall<LookupCriteria, SubmissionList> = async (
    call: ServerUnaryCall<LookupCriteria, SubmissionList>,
    callback: sendUnaryData<SubmissionList>
  ): Promise<void> => { };
}

export { SubmissionServerImp as SubmissionServer, SubmissionService };
