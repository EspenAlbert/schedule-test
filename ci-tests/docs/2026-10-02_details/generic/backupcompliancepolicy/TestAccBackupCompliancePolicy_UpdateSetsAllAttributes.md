# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:06](#error-2026-09-04t0106240000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6a9a138232dbcfd886f3b3f5/backupCompliancePolicy | dev | 37.01s
[2026-09-18 01:00](#error-2026-09-18t0100320000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6aac88d71bd5f998a1451c54/backupCompliancePolicy | dev | 41.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS a minute
- 2026-09-03
  - PASS a minute
  - PASS a minute
- 2026-09-04
  - FAIL 37 seconds

### Error 2026-09-04T01:06:24+00:00
```
2026-09-04T01:06:24.3128473Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-09-04T01:06:24.3133325Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-09-04T01:06:24.3162916Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-09-04T01:06:24.3164373Z     resource_backup_compliance_policy_test.go:129: Step 2/2 error: Error running apply: exit status 1
2026-09-04T01:06:24.3165336Z         
2026-09-04T01:06:24.3169685Z         Error: error updating a Backup Compliance Policy: 6a9a138232dbcfd886f3b3f5: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138232dbcfd886f3b3f5/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-04T01:06:24.3172547Z         
2026-09-04T01:06:24.3173449Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2026-09-04T01:06:24.3175085Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2026-09-04T01:06:24.3176660Z           18: 		resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2026-09-04T01:06:24.3177492Z         
2026-09-04T01:06:24.3200939Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-04T01:06:24.3201826Z         
2026-09-04T01:06:24.3206026Z         Error: error disabling the Backup Compliance Policy: 6a9a138232dbcfd886f3b3f5: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138232dbcfd886f3b3f5/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-04T01:06:24.3209121Z         
2026-09-04T01:06:24.3209832Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (37.08s)
```

  - PASS a minute
- 2026-09-05 PASS a minute
- 2026-09-06: MISSING
- 2026-09-07 PASS a minute
- 2026-09-08 PASS a minute
- 2026-09-09 PASS a minute
- 2026-09-10 PASS a minute
- 2026-09-11 PASS a minute
- 2026-09-12 PASS a minute
- 2026-09-13: MISSING
- 2026-09-14 PASS a minute
- 2026-09-15 PASS a minute
- 2026-09-16 PASS a minute
- 2026-09-17 PASS a minute
- 2026-09-18

### Error 2026-09-18T01:00:32+00:00
```
2026-09-18T01:00:32.1982341Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-09-18T01:00:32.1984004Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-09-18T01:00:32.2014579Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-09-18T01:00:32.2015213Z     resource_backup_compliance_policy_test.go:129: Step 2/2 error: Error running apply: exit status 1
2026-09-18T01:00:32.2015653Z         
2026-09-18T01:00:32.2017514Z         Error: error updating a Backup Compliance Policy: 6aac88d71bd5f998a1451c54: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aac88d71bd5f998a1451c54/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-18T01:00:32.2018787Z         
2026-09-18T01:00:32.2019219Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2026-09-18T01:00:32.2019966Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2026-09-18T01:00:32.2020683Z           18: 		resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2026-09-18T01:00:32.2021334Z         
2026-09-18T01:00:32.2032158Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-18T01:00:32.2032715Z         
2026-09-18T01:00:32.2034616Z         Error: error disabling the Backup Compliance Policy: 6aac88d71bd5f998a1451c54: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aac88d71bd5f998a1451c54/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-18T01:00:32.2035916Z         
2026-09-18T01:00:32.2036261Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (41.37s)
```

- 2026-09-19 PASS a minute
- 2026-09-20: MISSING
- 2026-09-21 PASS a minute
- 2026-09-22 PASS a minute
- 2026-09-23
  - PASS a minute
  - PASS a minute
- 2026-09-24 PASS a minute
- 2026-09-25 PASS a minute
- 2026-09-26 PASS a minute
- 2026-09-27: MISSING
- 2026-09-28 PASS a minute
- 2026-09-29 PASS a minute
- 2026-09-30 PASS a minute
- 2026-10-01 PASS a minute
- 2026-10-02 PASS a minute

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS a minute
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS a minute
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS a minute
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS a minute
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS a minute
- 2026-09-28: MISSING
- 2026-09-29 PASS a minute
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
