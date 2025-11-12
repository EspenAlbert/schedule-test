# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:50](#error-2025-10-09t0050280000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68e70158c2a3cd169303d685/backupCompliancePolicy | dev |  | 69.06s
[2025-10-11 00:44](#error-2025-10-11t0044050000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68e9a405e5f7141b76bf957d/backupCompliancePolicy | dev | flaky_500 | 70.04s
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111abf4374f32988a26 | dev | flaky_500 | 68.06s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS a minute
- 2025-10-05 PASS a minute
- 2025-10-06 PASS a minute
- 2025-10-07 PASS a minute
- 2025-10-08 PASS a minute
- 2025-10-09

### Error 2025-10-09T00:50:28+00:00
```
2025-10-09T00:50:28.4210049Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-09T00:50:28.4215514Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-09T00:50:28.4236008Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-09T00:50:28.4237399Z     resource_backup_compliance_policy_test.go:129: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T00:50:28.4238593Z         
2025-10-09T00:50:28.4241273Z         Error: error disabling the Backup Compliance Policy: 68e70158c2a3cd169303d685: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70158c2a3cd169303d685/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-10-09T00:50:28.4243188Z         
2025-10-09T00:50:28.4243614Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (69.55s)
```

- 2025-10-10 PASS a minute
- 2025-10-11

### Error 2025-10-11T00:44:05+00:00
```
2025-10-11T00:44:05.4392448Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-11T00:44:05.4396295Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-11T00:44:05.4413220Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-11T00:44:05.4414259Z     resource_backup_compliance_policy_test.go:129: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-11T00:44:05.4415005Z         
2025-10-11T00:44:05.4418243Z         Error: error disabling the Backup Compliance Policy: 68e9a405e5f7141b76bf957d: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e9a405e5f7141b76bf957d/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-10-11T00:44:05.4420146Z         
2025-10-11T00:44:05.4420652Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (70.38s)
```

- 2025-10-12 PASS a minute
- 2025-10-13 PASS a minute
- 2025-10-14 PASS a minute
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS 2 minutes
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS a minute
  - PASS a minute
- 2025-10-23 PASS a minute
- 2025-10-24 PASS a minute
- 2025-10-25 PASS a minute
- 2025-10-26 PASS a minute
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.3807162Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-30T00:44:19.3811365Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-30T00:44:19.3878122Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-10-30T00:44:19.3879004Z     resource_backup_compliance_policy_test.go:129: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.3879621Z         
2025-10-30T00:44:19.3880008Z         Error: error when destroying resource
2025-10-30T00:44:19.3880366Z         
2025-10-30T00:44:19.3880780Z         error deleting project (6902b111abf4374f32988a26):
2025-10-30T00:44:19.3881447Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111abf4374f32988a26
2025-10-30T00:44:19.3882170Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.3882859Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.3883527Z         BadRequestDetail: 
2025-10-30T00:44:19.3883987Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (68.58s)
```

- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09 PASS a minute
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute