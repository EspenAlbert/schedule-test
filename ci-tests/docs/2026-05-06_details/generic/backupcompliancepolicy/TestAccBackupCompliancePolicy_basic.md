# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 01:44](#error-2026-04-22t0144310000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/69e81a4fa8d803e1612f84cb/backupCompliancePolicy | dev |  | 69.04s
[2026-05-05 01:17](#error-2026-05-05t0117250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS a minute
- 2026-04-09 PASS 2 minutes
- 2026-04-10 PASS a minute
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16 PASS a minute
- 2026-04-17 PASS a minute
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22
  - FAIL a minute

### Error 2026-04-22T01:44:31+00:00
```
2026-04-22T01:44:31.2843527Z === RUN   TestAccBackupCompliancePolicy_basic
2026-04-22T01:44:31.2850932Z === CONT  TestAccBackupCompliancePolicy_basic
2026-04-22T01:44:31.2863581Z   
2026-04-22T01:44:31.2936940Z === NAME  TestAccBackupCompliancePolicy_basic
2026-04-22T01:44:31.2937935Z     resource_backup_compliance_policy_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-22T01:44:31.2938606Z         
2026-04-22T01:44:31.2941315Z         Error: error disabling the Backup Compliance Policy: 69e81a4fa8d803e1612f84cb: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a4fa8d803e1612f84cb/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-22T01:44:31.2943108Z         
2026-04-22T01:44:31.2943460Z --- FAIL: TestAccBackupCompliancePolicy_basic (69.39s)
```

  - PASS a minute
- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25 PASS 2 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS a minute
- 2026-04-29 PASS a minute
- 2026-04-30 PASS a minute
- 2026-05-01 PASS a minute
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05

### Error 2026-05-05T01:17:25+00:00
```
2026-05-05T01:17:25.8585626Z === RUN   TestAccBackupCompliancePolicy_basic
2026-05-05T01:17:25.8594817Z === CONT  TestAccBackupCompliancePolicy_basic
2026-05-05T01:17:25.8652358Z === NAME  TestAccBackupCompliancePolicy_basic
2026-05-05T01:17:25.8653094Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-05-05T01:17:25.8653652Z         
2026-05-05T01:17:25.8654358Z         Error: error creating project: test-acc-tf-p-3102825363252774071
2026-05-05T01:17:25.8654816Z         
2026-05-05T01:17:25.8655193Z           with mongodbatlas_project.test,
2026-05-05T01:17:25.8655916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T01:17:25.8656618Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T01:17:25.8657830Z         
2026-05-05T01:17:25.8658421Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T01:17:25.8659179Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T01:17:25.8659875Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:17:25.8660389Z --- FAIL: TestAccBackupCompliancePolicy_basic (87.30s)
```

- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
