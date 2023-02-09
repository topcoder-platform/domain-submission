import { DataType } from "../dal/models/nosql/parti_ql";

export const SubmissionSchema = {
  tableName: "Submission",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "challengeId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "created",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "createdBy",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "fileType",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "legacyChallengeId",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "legacySubmissionId",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "memberId",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "submissionPhaseId",
      type: DataType.DATA_TYPE_STRING,

    },
    {
      name: "submittedDate",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "type",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "updated",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "updatedBy",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "url",
      type: DataType.DATA_TYPE_STRING,
    }

  ],
  indices: {}
};