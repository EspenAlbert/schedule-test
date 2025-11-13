# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111abf4374f32988a26 | dev | flaky_500 | 68.06s
[2025-11-13 00:53](#error-2025-11-13t0053580000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/691525f564d8514eb7440cbb/backupCompliancePolicy | dev | flaky_500 | 37.03s

## Timeline
- 2025-10-14: MISSING
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
- 2025-11-13
  - FAIL 37 seconds

### Error 2025-11-13T00:53:58+00:00
```
2025-11-13T00:53:58.9665511Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-11-13T00:53:58.9667663Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-11-13T00:53:58.9684559Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-11-13T00:53:58.9685425Z     resource_backup_compliance_policy_test.go:129: Step 2/2 error: Error running apply: exit status 1
2025-11-13T00:53:58.9685966Z         
2025-11-13T00:53:58.9688500Z         Error: error updating a Backup Compliance Policy: 691525f564d8514eb7440cbb: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525f564d8514eb7440cbb/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-11-13T00:53:58.9690152Z         
2025-11-13T00:53:58.9690674Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2025-11-13T00:53:58.9691702Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2025-11-13T00:53:58.9692883Z           23: 	resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2025-11-13T00:53:58.9693368Z         
2025-11-13T00:53:58.9706386Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-13T00:53:58.9706909Z         
2025-11-13T00:53:58.9709275Z         Error: error disabling the Backup Compliance Policy: 691525f564d8514eb7440cbb: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525f564d8514eb7440cbb/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-11-13T00:53:58.9710907Z         
2025-11-13T00:53:58.9711322Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (37.34s)
```

  - PASS a minute