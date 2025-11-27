# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111abf4374f32988a26 | dev | flaky_500 | 68.06s
[2025-11-13 00:53](#error-2025-11-13t0053580000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/691525f564d8514eb7440cbb/backupCompliancePolicy | dev | flaky_500 | 37.03s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09: MISSING
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute
- 2025-11-13

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

- 2025-11-14 PASS a minute
- 2025-11-15 PASS a minute
- 2025-11-16: MISSING
- 2025-11-17 PASS a minute
- 2025-11-18 PASS a minute
- 2025-11-19 PASS a minute
- 2025-11-20 PASS a minute
- 2025-11-21 PASS a minute
- 2025-11-22 PASS a minute
- 2025-11-23: MISSING
- 2025-11-24 PASS a minute
- 2025-11-25 PASS a minute
- 2025-11-26 PASS a minute
- 2025-11-27 PASS a minute

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS a minute
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS a minute
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS a minute
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS a minute
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
