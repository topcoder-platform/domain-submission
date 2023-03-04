/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";
import { Struct } from "../../google/protobuf/struct";

export interface ReviewSummation {
  id: string;
  isFinal?: boolean | undefined;
  reviewedDate?: string | undefined;
  scoreCardId: string;
  submissionId: string;
  aggregateScore: number;
  isPassing: boolean;
  metadata?: { [key: string]: any };
  created: number;
  updated: number;
  createdBy: string;
  updatedBy: string;
}

export interface CreateReviewSummationInput {
  scoreCardId: string;
  submissionId: string;
  aggregateScore: number;
  isPassing: boolean;
  metadata?: { [key: string]: any };
  isFinal?: boolean | undefined;
  reviewedDate?: string | undefined;
}

export interface UpdateReviewSummationInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateReviewSummationInput_UpdateInput;
}

export interface UpdateReviewSummationInput_UpdateInput {
  scoreCardId?: string | undefined;
  submissionId?: string | undefined;
  aggregateScore?: number | undefined;
  isPassing?: boolean | undefined;
  metadata?: { [key: string]: any };
  isFinal?: boolean | undefined;
  reviewedDate?: string | undefined;
}

export interface ReviewSummationList {
  id: string[];
}

function createBaseReviewSummation(): ReviewSummation {
  return {
    id: "",
    isFinal: undefined,
    reviewedDate: undefined,
    scoreCardId: "",
    submissionId: "",
    aggregateScore: 0,
    isPassing: false,
    metadata: undefined,
    created: 0,
    updated: 0,
    createdBy: "",
    updatedBy: "",
  };
}

export const ReviewSummation = {
  encode(message: ReviewSummation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.isFinal !== undefined) {
      writer.uint32(16).bool(message.isFinal);
    }
    if (message.reviewedDate !== undefined) {
      writer.uint32(26).string(message.reviewedDate);
    }
    if (message.scoreCardId !== "") {
      writer.uint32(34).string(message.scoreCardId);
    }
    if (message.submissionId !== "") {
      writer.uint32(42).string(message.submissionId);
    }
    if (message.aggregateScore !== 0) {
      writer.uint32(53).float(message.aggregateScore);
    }
    if (message.isPassing === true) {
      writer.uint32(56).bool(message.isPassing);
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(66).fork()).ldelim();
    }
    if (message.created !== 0) {
      writer.uint32(72).int64(message.created);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.createdBy !== "") {
      writer.uint32(90).string(message.createdBy);
    }
    if (message.updatedBy !== "") {
      writer.uint32(98).string(message.updatedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewSummation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewSummation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.isFinal = reader.bool();
          break;
        case 3:
          message.reviewedDate = reader.string();
          break;
        case 4:
          message.scoreCardId = reader.string();
          break;
        case 5:
          message.submissionId = reader.string();
          break;
        case 6:
          message.aggregateScore = reader.float();
          break;
        case 7:
          message.isPassing = reader.bool();
          break;
        case 8:
          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 9:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.createdBy = reader.string();
          break;
        case 12:
          message.updatedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewSummation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      isFinal: isSet(object.isFinal) ? Boolean(object.isFinal) : undefined,
      reviewedDate: isSet(object.reviewedDate) ? String(object.reviewedDate) : undefined,
      scoreCardId: isSet(object.scoreCardId) ? String(object.scoreCardId) : "",
      submissionId: isSet(object.submissionId) ? String(object.submissionId) : "",
      aggregateScore: isSet(object.aggregateScore) ? Number(object.aggregateScore) : 0,
      isPassing: isSet(object.isPassing) ? Boolean(object.isPassing) : false,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      created: isSet(object.created) ? Number(object.created) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : "",
    };
  },

  toJSON(message: ReviewSummation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.isFinal !== undefined && (obj.isFinal = message.isFinal);
    message.reviewedDate !== undefined && (obj.reviewedDate = message.reviewedDate);
    message.scoreCardId !== undefined && (obj.scoreCardId = message.scoreCardId);
    message.submissionId !== undefined && (obj.submissionId = message.submissionId);
    message.aggregateScore !== undefined && (obj.aggregateScore = message.aggregateScore);
    message.isPassing !== undefined && (obj.isPassing = message.isPassing);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.created !== undefined && (obj.created = Math.round(message.created));
    message.updated !== undefined && (obj.updated = Math.round(message.updated));
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewSummation>, I>>(base?: I): ReviewSummation {
    return ReviewSummation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReviewSummation>, I>>(object: I): ReviewSummation {
    const message = createBaseReviewSummation();
    message.id = object.id ?? "";
    message.isFinal = object.isFinal ?? undefined;
    message.reviewedDate = object.reviewedDate ?? undefined;
    message.scoreCardId = object.scoreCardId ?? "";
    message.submissionId = object.submissionId ?? "";
    message.aggregateScore = object.aggregateScore ?? 0;
    message.isPassing = object.isPassing ?? false;
    message.metadata = object.metadata ?? undefined;
    message.created = object.created ?? 0;
    message.updated = object.updated ?? 0;
    message.createdBy = object.createdBy ?? "";
    message.updatedBy = object.updatedBy ?? "";
    return message;
  },
};

function createBaseCreateReviewSummationInput(): CreateReviewSummationInput {
  return {
    scoreCardId: "",
    submissionId: "",
    aggregateScore: 0,
    isPassing: false,
    metadata: undefined,
    isFinal: undefined,
    reviewedDate: undefined,
  };
}

export const CreateReviewSummationInput = {
  encode(message: CreateReviewSummationInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scoreCardId !== "") {
      writer.uint32(10).string(message.scoreCardId);
    }
    if (message.submissionId !== "") {
      writer.uint32(18).string(message.submissionId);
    }
    if (message.aggregateScore !== 0) {
      writer.uint32(29).float(message.aggregateScore);
    }
    if (message.isPassing === true) {
      writer.uint32(32).bool(message.isPassing);
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(42).fork()).ldelim();
    }
    if (message.isFinal !== undefined) {
      writer.uint32(48).bool(message.isFinal);
    }
    if (message.reviewedDate !== undefined) {
      writer.uint32(58).string(message.reviewedDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReviewSummationInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReviewSummationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scoreCardId = reader.string();
          break;
        case 2:
          message.submissionId = reader.string();
          break;
        case 3:
          message.aggregateScore = reader.float();
          break;
        case 4:
          message.isPassing = reader.bool();
          break;
        case 5:
          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 6:
          message.isFinal = reader.bool();
          break;
        case 7:
          message.reviewedDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReviewSummationInput {
    return {
      scoreCardId: isSet(object.scoreCardId) ? String(object.scoreCardId) : "",
      submissionId: isSet(object.submissionId) ? String(object.submissionId) : "",
      aggregateScore: isSet(object.aggregateScore) ? Number(object.aggregateScore) : 0,
      isPassing: isSet(object.isPassing) ? Boolean(object.isPassing) : false,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      isFinal: isSet(object.isFinal) ? Boolean(object.isFinal) : undefined,
      reviewedDate: isSet(object.reviewedDate) ? String(object.reviewedDate) : undefined,
    };
  },

  toJSON(message: CreateReviewSummationInput): unknown {
    const obj: any = {};
    message.scoreCardId !== undefined && (obj.scoreCardId = message.scoreCardId);
    message.submissionId !== undefined && (obj.submissionId = message.submissionId);
    message.aggregateScore !== undefined && (obj.aggregateScore = message.aggregateScore);
    message.isPassing !== undefined && (obj.isPassing = message.isPassing);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.isFinal !== undefined && (obj.isFinal = message.isFinal);
    message.reviewedDate !== undefined && (obj.reviewedDate = message.reviewedDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateReviewSummationInput>, I>>(base?: I): CreateReviewSummationInput {
    return CreateReviewSummationInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateReviewSummationInput>, I>>(object: I): CreateReviewSummationInput {
    const message = createBaseCreateReviewSummationInput();
    message.scoreCardId = object.scoreCardId ?? "";
    message.submissionId = object.submissionId ?? "";
    message.aggregateScore = object.aggregateScore ?? 0;
    message.isPassing = object.isPassing ?? false;
    message.metadata = object.metadata ?? undefined;
    message.isFinal = object.isFinal ?? undefined;
    message.reviewedDate = object.reviewedDate ?? undefined;
    return message;
  },
};

function createBaseUpdateReviewSummationInput(): UpdateReviewSummationInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateReviewSummationInput = {
  encode(message: UpdateReviewSummationInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateReviewSummationInput_UpdateInput.encode(message.updateInput, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReviewSummationInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateReviewSummationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 3:
          message.updateInput = UpdateReviewSummationInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateReviewSummationInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateReviewSummationInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateReviewSummationInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined && (obj.updateInput = message.updateInput
      ? UpdateReviewSummationInput_UpdateInput.toJSON(message.updateInput)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateReviewSummationInput>, I>>(base?: I): UpdateReviewSummationInput {
    return UpdateReviewSummationInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateReviewSummationInput>, I>>(object: I): UpdateReviewSummationInput {
    const message = createBaseUpdateReviewSummationInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateReviewSummationInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateReviewSummationInput_UpdateInput(): UpdateReviewSummationInput_UpdateInput {
  return {
    scoreCardId: undefined,
    submissionId: undefined,
    aggregateScore: undefined,
    isPassing: undefined,
    metadata: undefined,
    isFinal: undefined,
    reviewedDate: undefined,
  };
}

export const UpdateReviewSummationInput_UpdateInput = {
  encode(message: UpdateReviewSummationInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scoreCardId !== undefined) {
      writer.uint32(10).string(message.scoreCardId);
    }
    if (message.submissionId !== undefined) {
      writer.uint32(18).string(message.submissionId);
    }
    if (message.aggregateScore !== undefined) {
      writer.uint32(29).float(message.aggregateScore);
    }
    if (message.isPassing !== undefined) {
      writer.uint32(32).bool(message.isPassing);
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(42).fork()).ldelim();
    }
    if (message.isFinal !== undefined) {
      writer.uint32(48).bool(message.isFinal);
    }
    if (message.reviewedDate !== undefined) {
      writer.uint32(58).string(message.reviewedDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReviewSummationInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateReviewSummationInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scoreCardId = reader.string();
          break;
        case 2:
          message.submissionId = reader.string();
          break;
        case 3:
          message.aggregateScore = reader.float();
          break;
        case 4:
          message.isPassing = reader.bool();
          break;
        case 5:
          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 6:
          message.isFinal = reader.bool();
          break;
        case 7:
          message.reviewedDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateReviewSummationInput_UpdateInput {
    return {
      scoreCardId: isSet(object.scoreCardId) ? String(object.scoreCardId) : undefined,
      submissionId: isSet(object.submissionId) ? String(object.submissionId) : undefined,
      aggregateScore: isSet(object.aggregateScore) ? Number(object.aggregateScore) : undefined,
      isPassing: isSet(object.isPassing) ? Boolean(object.isPassing) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      isFinal: isSet(object.isFinal) ? Boolean(object.isFinal) : undefined,
      reviewedDate: isSet(object.reviewedDate) ? String(object.reviewedDate) : undefined,
    };
  },

  toJSON(message: UpdateReviewSummationInput_UpdateInput): unknown {
    const obj: any = {};
    message.scoreCardId !== undefined && (obj.scoreCardId = message.scoreCardId);
    message.submissionId !== undefined && (obj.submissionId = message.submissionId);
    message.aggregateScore !== undefined && (obj.aggregateScore = message.aggregateScore);
    message.isPassing !== undefined && (obj.isPassing = message.isPassing);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.isFinal !== undefined && (obj.isFinal = message.isFinal);
    message.reviewedDate !== undefined && (obj.reviewedDate = message.reviewedDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateReviewSummationInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateReviewSummationInput_UpdateInput {
    return UpdateReviewSummationInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateReviewSummationInput_UpdateInput>, I>>(
    object: I,
  ): UpdateReviewSummationInput_UpdateInput {
    const message = createBaseUpdateReviewSummationInput_UpdateInput();
    message.scoreCardId = object.scoreCardId ?? undefined;
    message.submissionId = object.submissionId ?? undefined;
    message.aggregateScore = object.aggregateScore ?? undefined;
    message.isPassing = object.isPassing ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.isFinal = object.isFinal ?? undefined;
    message.reviewedDate = object.reviewedDate ?? undefined;
    return message;
  },
};

function createBaseReviewSummationList(): ReviewSummationList {
  return { id: [] };
}

export const ReviewSummationList = {
  encode(message: ReviewSummationList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.id) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewSummationList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewSummationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewSummationList {
    return { id: Array.isArray(object?.id) ? object.id.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ReviewSummationList): unknown {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map((e) => e);
    } else {
      obj.id = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewSummationList>, I>>(base?: I): ReviewSummationList {
    return ReviewSummationList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReviewSummationList>, I>>(object: I): ReviewSummationList {
    const message = createBaseReviewSummationList();
    message.id = object.id?.map((e) => e) || [];
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
