
export const CancelledPaymentFailed = "Cancelled - Payment Failed";
export const CancelledFailedScreening = "Cancelled - Failed Screening";
export const prizeSetTypes = {
  ChallengePrizes: "placement",
  CopilotPayment: "copilot",
  ReviewerPayment: "reviewer",
  CheckPoint: "checkpoint",
};

export const SubmissionTypes: any = {
  'Contest Submission': { id: 1, roleId: 1 },
  'Specification Submission': { id: 2, roleId: 17 },
  'Checkpoint Submission': { id: 3, roleId: 1 },
  'Studio Final Fix Submission': { id: 4, roleId: 1 }
}

export const SubmissionStatus: any = {
  'Active': 1,
  'Deleted': 5
}

export const UploadStatus: any = {
  'Active': 1,
  'Deleted': 2
}
