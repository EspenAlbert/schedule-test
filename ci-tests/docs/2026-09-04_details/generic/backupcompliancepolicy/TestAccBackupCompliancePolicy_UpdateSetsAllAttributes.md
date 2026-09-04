# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 12 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 11) FAIL
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:06](#error-2026-09-04t0106240000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6a9a138232dbcfd886f3b3f5/backupCompliancePolicy | dev | 37.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS a minute
- 2026-08-29 PASS a minute
- 2026-08-30: MISSING
- 2026-08-31 PASS a minute
- 2026-09-01 PASS a minute
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

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS a minute
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
