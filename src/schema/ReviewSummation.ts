import { DataType } from "../dal/models/nosql/parti_ql";

export const ReviewSummationSchema = {
  tableName: "ReviewSummation",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "isFinal",
      type: DataType.DATA_TYPE_BOOLEAN,
    },
    {
      name: "reviewedDate",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "scorecardId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "submissionId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "aggregateScore",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "isPassing",
      type: DataType.DATA_TYPE_BOOLEAN,
    },
    {
      name: "metadata",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "created",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "updated",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "createdBy",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "updatedBy",
      type: DataType.DATA_TYPE_STRING,
    },
  ],
  indices: {}
};
