/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";
import { Struct } from "../../google/protobuf/struct";

export interface Review {
  id: string;
  score: number;
  typeId: string;
  reviewerId: string;
  scoreCardId: string;
  submissionId: string;
  status: string;
  reviewedDate?: string | undefined;
  metadata?: { [key: string]: any };
  v5ScoreCardId?: string | undefined;
  created: number;
  updated: number;
  createdBy: string;
  updatedBy: string;
}

export interface CreateReviewInput {
  score: number;
  typeId: string;
  reviewerId: string;
  scoreCardId: string;
  submissionId: string;
  status: string;
  reviewedDate?: string | undefined;
  metadata?: { [key: string]: any };
}

export interface UpdateReviewInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateReviewInput_UpdateInput;
}

export interface UpdateReviewInput_UpdateInput {
  score?: number | undefined;
  typeId?: string | undefined;
  reviewerId?: string | undefined;
  scoreCardId?: string | undefined;
  submissionId?: string | undefined;
  status?: string | undefined;
  reviewedDate?: string | undefined;
  metadata?: { [key: string]: any };
}

export interface ReviewList {
  items: Review[];
}

function createBaseReview(): Review {
  return {
    id: "",
    score: 0,
    typeId: "",
    reviewerId: "",
    scoreCardId: "",
    submissionId: "",
    status: "",
    reviewedDate: undefined,
    metadata: undefined,
    v5ScoreCardId: undefined,
    created: 0,
    updated: 0,
    createdBy: "",
    updatedBy: "",
  };
}

export const Review = {
  encode(message: Review, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.score !== 0) {
      writer.uint32(21).float(message.score);
    }
    if (message.typeId !== "") {
      writer.uint32(26).string(message.typeId);
    }
    if (message.reviewerId !== "") {
      writer.uint32(34).string(message.reviewerId);
    }
    if (message.scoreCardId !== "") {
      writer.uint32(42).string(message.scoreCardId);
    }
    if (message.submissionId !== "") {
      writer.uint32(50).string(message.submissionId);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.reviewedDate !== undefined) {
      writer.uint32(66).string(message.reviewedDate);
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(74).fork()).ldelim();
    }
    if (message.v5ScoreCardId !== undefined) {
      writer.uint32(82).string(message.v5ScoreCardId);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.updated !== 0) {
      writer.uint32(96).int64(message.updated);
    }
    if (message.createdBy !== "") {
      writer.uint32(106).string(message.createdBy);
    }
    if (message.updatedBy !== "") {
      writer.uint32(114).string(message.updatedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Review {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.score = reader.float();
          break;
        case 3:
          message.typeId = reader.string();
          break;
        case 4:
          message.reviewerId = reader.string();
          break;
        case 5:
          message.scoreCardId = reader.string();
          break;
        case 6:
          message.submissionId = reader.string();
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.reviewedDate = reader.string();
          break;
        case 9:
          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 10:
          message.v5ScoreCardId = reader.string();
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdBy = reader.string();
          break;
        case 14:
          message.updatedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Review {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      reviewerId: isSet(object.reviewerId) ? String(object.reviewerId) : "",
      scoreCardId: isSet(object.scoreCardId) ? String(object.scoreCardId) : "",
      submissionId: isSet(object.submissionId) ? String(object.submissionId) : "",
      status: isSet(object.status) ? String(object.status) : "",
      reviewedDate: isSet(object.reviewedDate) ? String(object.reviewedDate) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      v5ScoreCardId: isSet(object.v5ScoreCardId) ? String(object.v5ScoreCardId) : undefined,
      created: isSet(object.created) ? Number(object.created) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : "",
    };
  },

  toJSON(message: Review): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.score !== undefined && (obj.score = message.score);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.reviewerId !== undefined && (obj.reviewerId = message.reviewerId);
    message.scoreCardId !== undefined && (obj.scoreCardId = message.scoreCardId);
    message.submissionId !== undefined && (obj.submissionId = message.submissionId);
    message.status !== undefined && (obj.status = message.status);
    message.reviewedDate !== undefined && (obj.reviewedDate = message.reviewedDate);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.v5ScoreCardId !== undefined && (obj.v5ScoreCardId = message.v5ScoreCardId);
    message.created !== undefined && (obj.created = Math.round(message.created));
    message.updated !== undefined && (obj.updated = Math.round(message.updated));
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    return obj;
  },

  create<I extends Exact<DeepPartial<Review>, I>>(base?: I): Review {
    return Review.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Review>, I>>(object: I): Review {
    const message = createBaseReview();
    message.id = object.id ?? "";
    message.score = object.score ?? 0;
    message.typeId = object.typeId ?? "";
    message.reviewerId = object.reviewerId ?? "";
    message.scoreCardId = object.scoreCardId ?? "";
    message.submissionId = object.submissionId ?? "";
    message.status = object.status ?? "";
    message.reviewedDate = object.reviewedDate ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.v5ScoreCardId = object.v5ScoreCardId ?? undefined;
    message.created = object.created ?? 0;
    message.updated = object.updated ?? 0;
    message.createdBy = object.createdBy ?? "";
    message.updatedBy = object.updatedBy ?? "";
    return message;
  },
};

function createBaseCreateReviewInput(): CreateReviewInput {
  return {
    score: 0,
    typeId: "",
    reviewerId: "",
    scoreCardId: "",
    submissionId: "",
    status: "",
    reviewedDate: undefined,
    metadata: undefined,
  };
}

export const CreateReviewInput = {
  encode(message: CreateReviewInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    if (message.typeId !== "") {
      writer.uint32(18).string(message.typeId);
    }
    if (message.reviewerId !== "") {
      writer.uint32(26).string(message.reviewerId);
    }
    if (message.scoreCardId !== "") {
      writer.uint32(34).string(message.scoreCardId);
    }
    if (message.submissionId !== "") {
      writer.uint32(42).string(message.submissionId);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.reviewedDate !== undefined) {
      writer.uint32(58).string(message.reviewedDate);
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReviewInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReviewInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = reader.float();
          break;
        case 2:
          message.typeId = reader.string();
          break;
        case 3:
          message.reviewerId = reader.string();
          break;
        case 4:
          message.scoreCardId = reader.string();
          break;
        case 5:
          message.submissionId = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.reviewedDate = reader.string();
          break;
        case 8:
          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReviewInput {
    return {
      score: isSet(object.score) ? Number(object.score) : 0,
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      reviewerId: isSet(object.reviewerId) ? String(object.reviewerId) : "",
      scoreCardId: isSet(object.scoreCardId) ? String(object.scoreCardId) : "",
      submissionId: isSet(object.submissionId) ? String(object.submissionId) : "",
      status: isSet(object.status) ? String(object.status) : "",
      reviewedDate: isSet(object.reviewedDate) ? String(object.reviewedDate) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: CreateReviewInput): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.reviewerId !== undefined && (obj.reviewerId = message.reviewerId);
    message.scoreCardId !== undefined && (obj.scoreCardId = message.scoreCardId);
    message.submissionId !== undefined && (obj.submissionId = message.submissionId);
    message.status !== undefined && (obj.status = message.status);
    message.reviewedDate !== undefined && (obj.reviewedDate = message.reviewedDate);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateReviewInput>, I>>(base?: I): CreateReviewInput {
    return CreateReviewInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateReviewInput>, I>>(object: I): CreateReviewInput {
    const message = createBaseCreateReviewInput();
    message.score = object.score ?? 0;
    message.typeId = object.typeId ?? "";
    message.reviewerId = object.reviewerId ?? "";
    message.scoreCardId = object.scoreCardId ?? "";
    message.submissionId = object.submissionId ?? "";
    message.status = object.status ?? "";
    message.reviewedDate = object.reviewedDate ?? undefined;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseUpdateReviewInput(): UpdateReviewInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateReviewInput = {
  encode(message: UpdateReviewInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateReviewInput_UpdateInput.encode(message.updateInput, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReviewInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateReviewInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 3:
          message.updateInput = UpdateReviewInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateReviewInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput) ? UpdateReviewInput_UpdateInput.fromJSON(object.updateInput) : undefined,
    };
  },

  toJSON(message: UpdateReviewInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined &&
      (obj.updateInput = message.updateInput ? UpdateReviewInput_UpdateInput.toJSON(message.updateInput) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateReviewInput>, I>>(base?: I): UpdateReviewInput {
    return UpdateReviewInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateReviewInput>, I>>(object: I): UpdateReviewInput {
    const message = createBaseUpdateReviewInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateReviewInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateReviewInput_UpdateInput(): UpdateReviewInput_UpdateInput {
  return {
    score: undefined,
    typeId: undefined,
    reviewerId: undefined,
    scoreCardId: undefined,
    submissionId: undefined,
    status: undefined,
    reviewedDate: undefined,
    metadata: undefined,
  };
}

export const UpdateReviewInput_UpdateInput = {
  encode(message: UpdateReviewInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== undefined) {
      writer.uint32(13).float(message.score);
    }
    if (message.typeId !== undefined) {
      writer.uint32(18).string(message.typeId);
    }
    if (message.reviewerId !== undefined) {
      writer.uint32(26).string(message.reviewerId);
    }
    if (message.scoreCardId !== undefined) {
      writer.uint32(34).string(message.scoreCardId);
    }
    if (message.submissionId !== undefined) {
      writer.uint32(42).string(message.submissionId);
    }
    if (message.status !== undefined) {
      writer.uint32(50).string(message.status);
    }
    if (message.reviewedDate !== undefined) {
      writer.uint32(58).string(message.reviewedDate);
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReviewInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateReviewInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = reader.float();
          break;
        case 2:
          message.typeId = reader.string();
          break;
        case 3:
          message.reviewerId = reader.string();
          break;
        case 4:
          message.scoreCardId = reader.string();
          break;
        case 5:
          message.submissionId = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.reviewedDate = reader.string();
          break;
        case 8:
          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateReviewInput_UpdateInput {
    return {
      score: isSet(object.score) ? Number(object.score) : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      reviewerId: isSet(object.reviewerId) ? String(object.reviewerId) : undefined,
      scoreCardId: isSet(object.scoreCardId) ? String(object.scoreCardId) : undefined,
      submissionId: isSet(object.submissionId) ? String(object.submissionId) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      reviewedDate: isSet(object.reviewedDate) ? String(object.reviewedDate) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: UpdateReviewInput_UpdateInput): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.reviewerId !== undefined && (obj.reviewerId = message.reviewerId);
    message.scoreCardId !== undefined && (obj.scoreCardId = message.scoreCardId);
    message.submissionId !== undefined && (obj.submissionId = message.submissionId);
    message.status !== undefined && (obj.status = message.status);
    message.reviewedDate !== undefined && (obj.reviewedDate = message.reviewedDate);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateReviewInput_UpdateInput>, I>>(base?: I): UpdateReviewInput_UpdateInput {
    return UpdateReviewInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateReviewInput_UpdateInput>, I>>(
    object: I,
  ): UpdateReviewInput_UpdateInput {
    const message = createBaseUpdateReviewInput_UpdateInput();
    message.score = object.score ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.reviewerId = object.reviewerId ?? undefined;
    message.scoreCardId = object.scoreCardId ?? undefined;
    message.submissionId = object.submissionId ?? undefined;
    message.status = object.status ?? undefined;
    message.reviewedDate = object.reviewedDate ?? undefined;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseReviewList(): ReviewList {
  return { items: [] };
}

export const ReviewList = {
  encode(message: ReviewList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Review.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Review.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => Review.fromJSON(e)) : [] };
  },

  toJSON(message: ReviewList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Review.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewList>, I>>(base?: I): ReviewList {
    return ReviewList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReviewList>, I>>(object: I): ReviewList {
    const message = createBaseReviewList();
    message.items = object.items?.map((e) => Review.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
