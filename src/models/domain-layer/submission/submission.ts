/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";

export interface Submission {
  id: string;
  challengeId: string;
  created: number;
  createdBy: string;
  fileType?: string | undefined;
  legacyChallengeId?: number | undefined;
  legacySubmissionId?: string | undefined;
  memberId: number;
  submissionPhaseId?: string | undefined;
  submittedDate?: number | undefined;
  type: string;
  updated?: number | undefined;
  updatedBy?: string | undefined;
  url?: string | undefined;
  legacyUploadId?: number | undefined;
  v5ChallengeId?: string | undefined;
}

export interface CreateSubmissionInput {
  challengeId: string;
  fileType?: string | undefined;
  memberId: number;
  type: string;
  url?: string | undefined;
  legacyChallengeId?: number | undefined;
  legacySubmissionId?: string | undefined;
  submissionPhaseId?: string | undefined;
  submittedDate?: number | undefined;
  legacyUploadId?: number | undefined;
}

export interface UpdateSubmissionInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateSubmissionInput_UpdateInput;
}

export interface UpdateSubmissionInput_UpdateInput {
  type?: string | undefined;
  url?: string | undefined;
  memberId?: number | undefined;
  challengeId?: string | undefined;
  submittedDate?: number | undefined;
  legacyChallengeId?: string | undefined;
  legacySubmissionId?: string | undefined;
  submissionUploadId?: string | undefined;
  submissionPhaseId?: string | undefined;
}

export interface SubmissionList {
  items: Submission[];
}

function createBaseSubmission(): Submission {
  return {
    id: "",
    challengeId: "",
    created: 0,
    createdBy: "",
    fileType: undefined,
    legacyChallengeId: undefined,
    legacySubmissionId: undefined,
    memberId: 0,
    submissionPhaseId: undefined,
    submittedDate: undefined,
    type: "",
    updated: undefined,
    updatedBy: undefined,
    url: undefined,
    legacyUploadId: undefined,
    v5ChallengeId: undefined,
  };
}

export const Submission = {
  encode(message: Submission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.challengeId !== "") {
      writer.uint32(18).string(message.challengeId);
    }
    if (message.created !== 0) {
      writer.uint32(24).int64(message.created);
    }
    if (message.createdBy !== "") {
      writer.uint32(34).string(message.createdBy);
    }
    if (message.fileType !== undefined) {
      writer.uint32(42).string(message.fileType);
    }
    if (message.legacyChallengeId !== undefined) {
      writer.uint32(48).int64(message.legacyChallengeId);
    }
    if (message.legacySubmissionId !== undefined) {
      writer.uint32(58).string(message.legacySubmissionId);
    }
    if (message.memberId !== 0) {
      writer.uint32(64).int64(message.memberId);
    }
    if (message.submissionPhaseId !== undefined) {
      writer.uint32(74).string(message.submissionPhaseId);
    }
    if (message.submittedDate !== undefined) {
      writer.uint32(80).int64(message.submittedDate);
    }
    if (message.type !== "") {
      writer.uint32(90).string(message.type);
    }
    if (message.updated !== undefined) {
      writer.uint32(96).int64(message.updated);
    }
    if (message.updatedBy !== undefined) {
      writer.uint32(106).string(message.updatedBy);
    }
    if (message.url !== undefined) {
      writer.uint32(114).string(message.url);
    }
    if (message.legacyUploadId !== undefined) {
      writer.uint32(120).int64(message.legacyUploadId);
    }
    if (message.v5ChallengeId !== undefined) {
      writer.uint32(130).string(message.v5ChallengeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Submission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.challengeId = reader.string();
          break;
        case 3:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.createdBy = reader.string();
          break;
        case 5:
          message.fileType = reader.string();
          break;
        case 6:
          message.legacyChallengeId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.legacySubmissionId = reader.string();
          break;
        case 8:
          message.memberId = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.submissionPhaseId = reader.string();
          break;
        case 10:
          message.submittedDate = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.type = reader.string();
          break;
        case 12:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updatedBy = reader.string();
          break;
        case 14:
          message.url = reader.string();
          break;
        case 15:
          message.legacyUploadId = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.v5ChallengeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Submission {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : "",
      created: isSet(object.created) ? Number(object.created) : 0,
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      fileType: isSet(object.fileType) ? String(object.fileType) : undefined,
      legacyChallengeId: isSet(object.legacyChallengeId) ? Number(object.legacyChallengeId) : undefined,
      legacySubmissionId: isSet(object.legacySubmissionId) ? String(object.legacySubmissionId) : undefined,
      memberId: isSet(object.memberId) ? Number(object.memberId) : 0,
      submissionPhaseId: isSet(object.submissionPhaseId) ? String(object.submissionPhaseId) : undefined,
      submittedDate: isSet(object.submittedDate) ? Number(object.submittedDate) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
      updated: isSet(object.updated) ? Number(object.updated) : undefined,
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      legacyUploadId: isSet(object.legacyUploadId) ? Number(object.legacyUploadId) : undefined,
      v5ChallengeId: isSet(object.v5ChallengeId) ? String(object.v5ChallengeId) : undefined,
    };
  },

  toJSON(message: Submission): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.challengeId !== undefined && (obj.challengeId = message.challengeId);
    message.created !== undefined && (obj.created = Math.round(message.created));
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.fileType !== undefined && (obj.fileType = message.fileType);
    message.legacyChallengeId !== undefined && (obj.legacyChallengeId = Math.round(message.legacyChallengeId));
    message.legacySubmissionId !== undefined && (obj.legacySubmissionId = message.legacySubmissionId);
    message.memberId !== undefined && (obj.memberId = Math.round(message.memberId));
    message.submissionPhaseId !== undefined && (obj.submissionPhaseId = message.submissionPhaseId);
    message.submittedDate !== undefined && (obj.submittedDate = Math.round(message.submittedDate));
    message.type !== undefined && (obj.type = message.type);
    message.updated !== undefined && (obj.updated = Math.round(message.updated));
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.url !== undefined && (obj.url = message.url);
    message.legacyUploadId !== undefined && (obj.legacyUploadId = Math.round(message.legacyUploadId));
    message.v5ChallengeId !== undefined && (obj.v5ChallengeId = message.v5ChallengeId);
    return obj;
  },

  create<I extends Exact<DeepPartial<Submission>, I>>(base?: I): Submission {
    return Submission.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Submission>, I>>(object: I): Submission {
    const message = createBaseSubmission();
    message.id = object.id ?? "";
    message.challengeId = object.challengeId ?? "";
    message.created = object.created ?? 0;
    message.createdBy = object.createdBy ?? "";
    message.fileType = object.fileType ?? undefined;
    message.legacyChallengeId = object.legacyChallengeId ?? undefined;
    message.legacySubmissionId = object.legacySubmissionId ?? undefined;
    message.memberId = object.memberId ?? 0;
    message.submissionPhaseId = object.submissionPhaseId ?? undefined;
    message.submittedDate = object.submittedDate ?? undefined;
    message.type = object.type ?? "";
    message.updated = object.updated ?? undefined;
    message.updatedBy = object.updatedBy ?? undefined;
    message.url = object.url ?? undefined;
    message.legacyUploadId = object.legacyUploadId ?? undefined;
    message.v5ChallengeId = object.v5ChallengeId ?? undefined;
    return message;
  },
};

function createBaseCreateSubmissionInput(): CreateSubmissionInput {
  return {
    challengeId: "",
    fileType: undefined,
    memberId: 0,
    type: "",
    url: undefined,
    legacyChallengeId: undefined,
    legacySubmissionId: undefined,
    submissionPhaseId: undefined,
    submittedDate: undefined,
    legacyUploadId: undefined,
  };
}

export const CreateSubmissionInput = {
  encode(message: CreateSubmissionInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    if (message.fileType !== undefined) {
      writer.uint32(18).string(message.fileType);
    }
    if (message.memberId !== 0) {
      writer.uint32(24).int64(message.memberId);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.url !== undefined) {
      writer.uint32(42).string(message.url);
    }
    if (message.legacyChallengeId !== undefined) {
      writer.uint32(48).int64(message.legacyChallengeId);
    }
    if (message.legacySubmissionId !== undefined) {
      writer.uint32(58).string(message.legacySubmissionId);
    }
    if (message.submissionPhaseId !== undefined) {
      writer.uint32(66).string(message.submissionPhaseId);
    }
    if (message.submittedDate !== undefined) {
      writer.uint32(72).int64(message.submittedDate);
    }
    if (message.legacyUploadId !== undefined) {
      writer.uint32(80).int64(message.legacyUploadId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubmissionInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmissionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        case 2:
          message.fileType = reader.string();
          break;
        case 3:
          message.memberId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.legacyChallengeId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.legacySubmissionId = reader.string();
          break;
        case 8:
          message.submissionPhaseId = reader.string();
          break;
        case 9:
          message.submittedDate = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.legacyUploadId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubmissionInput {
    return {
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : "",
      fileType: isSet(object.fileType) ? String(object.fileType) : undefined,
      memberId: isSet(object.memberId) ? Number(object.memberId) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      url: isSet(object.url) ? String(object.url) : undefined,
      legacyChallengeId: isSet(object.legacyChallengeId) ? Number(object.legacyChallengeId) : undefined,
      legacySubmissionId: isSet(object.legacySubmissionId) ? String(object.legacySubmissionId) : undefined,
      submissionPhaseId: isSet(object.submissionPhaseId) ? String(object.submissionPhaseId) : undefined,
      submittedDate: isSet(object.submittedDate) ? Number(object.submittedDate) : undefined,
      legacyUploadId: isSet(object.legacyUploadId) ? Number(object.legacyUploadId) : undefined,
    };
  },

  toJSON(message: CreateSubmissionInput): unknown {
    const obj: any = {};
    message.challengeId !== undefined && (obj.challengeId = message.challengeId);
    message.fileType !== undefined && (obj.fileType = message.fileType);
    message.memberId !== undefined && (obj.memberId = Math.round(message.memberId));
    message.type !== undefined && (obj.type = message.type);
    message.url !== undefined && (obj.url = message.url);
    message.legacyChallengeId !== undefined && (obj.legacyChallengeId = Math.round(message.legacyChallengeId));
    message.legacySubmissionId !== undefined && (obj.legacySubmissionId = message.legacySubmissionId);
    message.submissionPhaseId !== undefined && (obj.submissionPhaseId = message.submissionPhaseId);
    message.submittedDate !== undefined && (obj.submittedDate = Math.round(message.submittedDate));
    message.legacyUploadId !== undefined && (obj.legacyUploadId = Math.round(message.legacyUploadId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(base?: I): CreateSubmissionInput {
    return CreateSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(object: I): CreateSubmissionInput {
    const message = createBaseCreateSubmissionInput();
    message.challengeId = object.challengeId ?? "";
    message.fileType = object.fileType ?? undefined;
    message.memberId = object.memberId ?? 0;
    message.type = object.type ?? "";
    message.url = object.url ?? undefined;
    message.legacyChallengeId = object.legacyChallengeId ?? undefined;
    message.legacySubmissionId = object.legacySubmissionId ?? undefined;
    message.submissionPhaseId = object.submissionPhaseId ?? undefined;
    message.submittedDate = object.submittedDate ?? undefined;
    message.legacyUploadId = object.legacyUploadId ?? undefined;
    return message;
  },
};

function createBaseUpdateSubmissionInput(): UpdateSubmissionInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateSubmissionInput = {
  encode(message: UpdateSubmissionInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateSubmissionInput_UpdateInput.encode(message.updateInput, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubmissionInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubmissionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 3:
          message.updateInput = UpdateSubmissionInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubmissionInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateSubmissionInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateSubmissionInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined &&
      (obj.updateInput = message.updateInput
        ? UpdateSubmissionInput_UpdateInput.toJSON(message.updateInput)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubmissionInput>, I>>(base?: I): UpdateSubmissionInput {
    return UpdateSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubmissionInput>, I>>(object: I): UpdateSubmissionInput {
    const message = createBaseUpdateSubmissionInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateSubmissionInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateSubmissionInput_UpdateInput(): UpdateSubmissionInput_UpdateInput {
  return {
    type: undefined,
    url: undefined,
    memberId: undefined,
    challengeId: undefined,
    submittedDate: undefined,
    legacyChallengeId: undefined,
    legacySubmissionId: undefined,
    submissionUploadId: undefined,
    submissionPhaseId: undefined,
  };
}

export const UpdateSubmissionInput_UpdateInput = {
  encode(message: UpdateSubmissionInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(10).string(message.type);
    }
    if (message.url !== undefined) {
      writer.uint32(18).string(message.url);
    }
    if (message.memberId !== undefined) {
      writer.uint32(24).int64(message.memberId);
    }
    if (message.challengeId !== undefined) {
      writer.uint32(34).string(message.challengeId);
    }
    if (message.submittedDate !== undefined) {
      writer.uint32(40).int64(message.submittedDate);
    }
    if (message.legacyChallengeId !== undefined) {
      writer.uint32(50).string(message.legacyChallengeId);
    }
    if (message.legacySubmissionId !== undefined) {
      writer.uint32(58).string(message.legacySubmissionId);
    }
    if (message.submissionUploadId !== undefined) {
      writer.uint32(66).string(message.submissionUploadId);
    }
    if (message.submissionPhaseId !== undefined) {
      writer.uint32(74).string(message.submissionPhaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubmissionInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubmissionInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.memberId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.challengeId = reader.string();
          break;
        case 5:
          message.submittedDate = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.legacyChallengeId = reader.string();
          break;
        case 7:
          message.legacySubmissionId = reader.string();
          break;
        case 8:
          message.submissionUploadId = reader.string();
          break;
        case 9:
          message.submissionPhaseId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubmissionInput_UpdateInput {
    return {
      type: isSet(object.type) ? String(object.type) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      memberId: isSet(object.memberId) ? Number(object.memberId) : undefined,
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : undefined,
      submittedDate: isSet(object.submittedDate) ? Number(object.submittedDate) : undefined,
      legacyChallengeId: isSet(object.legacyChallengeId) ? String(object.legacyChallengeId) : undefined,
      legacySubmissionId: isSet(object.legacySubmissionId) ? String(object.legacySubmissionId) : undefined,
      submissionUploadId: isSet(object.submissionUploadId) ? String(object.submissionUploadId) : undefined,
      submissionPhaseId: isSet(object.submissionPhaseId) ? String(object.submissionPhaseId) : undefined,
    };
  },

  toJSON(message: UpdateSubmissionInput_UpdateInput): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.url !== undefined && (obj.url = message.url);
    message.memberId !== undefined && (obj.memberId = Math.round(message.memberId));
    message.challengeId !== undefined && (obj.challengeId = message.challengeId);
    message.submittedDate !== undefined && (obj.submittedDate = Math.round(message.submittedDate));
    message.legacyChallengeId !== undefined && (obj.legacyChallengeId = message.legacyChallengeId);
    message.legacySubmissionId !== undefined && (obj.legacySubmissionId = message.legacySubmissionId);
    message.submissionUploadId !== undefined && (obj.submissionUploadId = message.submissionUploadId);
    message.submissionPhaseId !== undefined && (obj.submissionPhaseId = message.submissionPhaseId);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubmissionInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateSubmissionInput_UpdateInput {
    return UpdateSubmissionInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubmissionInput_UpdateInput>, I>>(
    object: I,
  ): UpdateSubmissionInput_UpdateInput {
    const message = createBaseUpdateSubmissionInput_UpdateInput();
    message.type = object.type ?? undefined;
    message.url = object.url ?? undefined;
    message.memberId = object.memberId ?? undefined;
    message.challengeId = object.challengeId ?? undefined;
    message.submittedDate = object.submittedDate ?? undefined;
    message.legacyChallengeId = object.legacyChallengeId ?? undefined;
    message.legacySubmissionId = object.legacySubmissionId ?? undefined;
    message.submissionUploadId = object.submissionUploadId ?? undefined;
    message.submissionPhaseId = object.submissionPhaseId ?? undefined;
    return message;
  },
};

function createBaseSubmissionList(): SubmissionList {
  return { items: [] };
}

export const SubmissionList = {
  encode(message: SubmissionList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Submission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmissionList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmissionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Submission.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmissionList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => Submission.fromJSON(e)) : [] };
  },

  toJSON(message: SubmissionList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Submission.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubmissionList>, I>>(base?: I): SubmissionList {
    return SubmissionList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubmissionList>, I>>(object: I): SubmissionList {
    const message = createBaseSubmissionList();
    message.items = object.items?.map((e) => Submission.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
