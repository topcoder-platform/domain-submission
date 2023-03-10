import "source-map-support/register";
import * as path from "path";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { addReflection } from "grpc-server-reflection";

import { ENV, GRPC_SERVER_HOST, GRPC_SERVER_PORT } from './config'

import { SubmissionServer, SubmissionService } from "./service/SubmissionService";
import { ReviewServer, ReviewService } from "./service/ReviewService";
import { ReviewSummationServer, ReviewSummationService } from "./service/ReviewSummationService";


const server = new Server({
  "grpc.max_send_message_length": -1,
  "grpc.max_receive_message_length": -1,
});

if (ENV === "local") {
  addReflection(server, path.join(__dirname, "../reflections/reflection.bin"));
}



server.addService(SubmissionService, new SubmissionServer());
server.addService(ReviewService, new ReviewServer());
server.addService(ReviewSummationService, new ReviewSummationServer());

server.bindAsync(
  `${GRPC_SERVER_HOST}:${GRPC_SERVER_PORT}`,
  ServerCredentials.createInsecure(),
  (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }

    console.info(
      `gRPC:Server running at: ${GRPC_SERVER_HOST}:${bindPort}`,
      new Date().toLocaleString()
    );
    server.start();
  }
);
