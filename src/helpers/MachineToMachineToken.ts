import {
  AUTH0_URL,
  AUTH0_AUDIENCE,
  TOKEN_CACHE_TIME,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
} from '../config'

import _ from "lodash";
const m2mAuth = require("tc-core-library-js").auth.m2m;

class Machine2MachineToken {
  m2m: any;

  constructor() {
    this.m2m = m2mAuth({
      AUTH0_URL,
      AUTH0_AUDIENCE,
      TOKEN_CACHE_TIME,
    });
  }

  async getM2MToken(): Promise<string> {
    return this.m2m.getMachineToken(AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET);
  }
}

export default new Machine2MachineToken();
