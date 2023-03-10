import { SubmissionStatus, SubmissionTypes, UploadStatus } from "../common/Constants"

class LegacyMapper {
  public createLegacySubmissionCreateInput = (submissionId:number, uploadId:number, submissionType: string) => {
    return {
      submissionId,
      uploadId,
      submissionStatusId: SubmissionStatus.Active,
      submissionTypeId: SubmissionTypes[submissionType].id,
    }
  }

  public createLegacyUploadCreateInput = (uploadId:number, challengeId:string, phaseId:number, resourceId:number, uploadType:number, url:string) => {
    return {
      uploadId,
      challengeId,
      phaseId,
      resourceId,
      uploadType,
      url,
      uploadStatusId: UploadStatus.Active,
      parameter: 'N/A',
    }
  }

  public createLegacyResourceSubmissionCreateInput = (resourceId:number, submissionId:number, submissionType:string) => {
    return {
      resourceId,
      submissionId,
      submissionStatusId: SubmissionStatus.Active,
      submissionTypeId: SubmissionTypes[submissionType].id,
    }
  }
}

export default LegacyMapper
