import { Challenge, ChallengeDomain, Challenge_Phase } from "@topcoder-framework/domain-challenge"
import { LegacyChallengePhaseDomain } from "@topcoder-framework/domain-acl"
import { DomainHelper } from "@topcoder-framework/lib-common"
import {
  GRPC_ACL_SERVER_HOST,
  GRPC_ACL_SERVER_PORT,
  GRPC_CHALLENGE_SERVER_HOST, GRPC_CHALLENGE_SERVER_PORT
} from "../config"
import { PhaseTypeList } from "@topcoder-framework/domain-acl/dist-es/models/domain-layer/legacy/challenge_phase";
const challengeDomain = new ChallengeDomain(GRPC_CHALLENGE_SERVER_HOST, GRPC_CHALLENGE_SERVER_PORT);
const legacyChallengePhaseDomain = new LegacyChallengePhaseDomain(GRPC_ACL_SERVER_HOST,
  GRPC_ACL_SERVER_PORT);

/**
 * Test if the id is UUID
 * @param {String} id the id
 * @returns {Boolean} true if it's a uuid
 */
function isUuid(id: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
}

async function getPhaseName(challengeUuid: string, submissionPhaseId: string) {
  const challenge: Challenge = await challengeDomain.lookup(DomainHelper.getLookupCriteria("id", challengeUuid))
  const phaseName: Challenge_Phase | undefined = challenge.phases.find(phase => phase.id === submissionPhaseId)
  return phaseName?.name
}

async function getChallengePhaseId(phaseName: string) {
  console.log("************ Legacy Submission Phase Name [2]************", phaseName)
  try {

    const challengePhases: PhaseTypeList = await legacyChallengePhaseDomain.getPhaseTypes({})
    console.log("************ Legacy Submission Phase Name challengePhases ************", challengePhases)
    const phase = challengePhases.items.find(phase => phase.name === phaseName)
    console.log("************ Legacy Submission Phase Name phases ************", phase)
    return phase?.phaseTypeId
  } catch (e) {
    console.log("************ Legacy Submission Phase Name Error ************", e)
  }
}


export {
  isUuid,
  getPhaseName,
  getChallengePhaseId

}