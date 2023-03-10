import { DataType } from "../dal/models/nosql/parti_ql";

export const ReviewSchema = {
  tableName: "Review",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "score",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "typeId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "reviewerId",
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
      name: "status",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "reviewedDate",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "metadata",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "v5ScoreCardId",
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
