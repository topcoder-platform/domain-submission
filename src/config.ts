import assert from "assert";
import * as dotenv from "dotenv";
dotenv.config();

export const REGISTRATION_PHASE_ID = <string>process.env.REGISTRATION_PHASE_ID;
export const SUBMISSION_PHASE_ID = <string>process.env.SUBMISSION_PHASE_ID;
export const CHECKPOINT_SUBMISSION_PHASE_ID = <string>process.env.CHECKPOINT_SUBMISSION_PHASE_ID;


/**  Auth0 information */
export const AUTH0_URL = <string>process.env.AUTH0_URL;
export const AUTH0_AUDIENCE = <string>process.env.AUTH0_AUDIENCE;
export const TOKEN_CACHE_TIME = <string>process.env.TOKEN_CACHE_TIME;
export const AUTH0_CLIENT_ID = <string>process.env.AUTH0_CLIENT_ID;
export const AUTH0_CLIENT_SECRET = <string>process.env.AUTH0_CLIENT_SECRET;


/** GRPC server information */
export const GRPC_SERVER_PORT = process.env.GRPC_SERVER_PORT || 9092;
export const GRPC_SERVER_HOST = process.env.GRPC_SERVER_HOST || "";
export const GRPC_NOSQL_SERVER_HOST = process.env.GRPC_NOSQL_SERVER_HOST;
export const GRPC_NOSQL_SERVER_PORT = process.env.GRPC_NOSQL_SERVER_PORT;

export const ENV = process.env.ENV || "local";

assert(REGISTRATION_PHASE_ID, "REGISTRATION_PHASE_ID is not defined");
assert(SUBMISSION_PHASE_ID, "SUBMISSION_PHASE_ID is not defined");
assert(CHECKPOINT_SUBMISSION_PHASE_ID, "CHECKPOINT_SUBMISSION_PHASE_ID is not defined");
assert(AUTH0_URL, "AUTH0_URL is not defined");
assert(AUTH0_AUDIENCE, "AUTH0_AUDIENCE is not defined");
assert(TOKEN_CACHE_TIME, "TOKEN_CACHE_TIME is not defined");
assert(AUTH0_CLIENT_ID, "AUTH0_CLIENT_ID is not defined");
assert(AUTH0_CLIENT_SECRET, "AUTH0_CLIENT_SECRET is not defined");
assert(GRPC_NOSQL_SERVER_HOST, "GRPC_NOSQL_SERVER_HOST is not defined");
assert(GRPC_NOSQL_SERVER_PORT, "GRPC_NOSQL_SERVER_PORT is not defined");
