# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cbaafa9a76ca8ba28d/limits | qa | flaky_500 | 101.08s
[2025-08-24 00:32](#error-2025-08-24t0032390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d294192cd1cc589b866/limits | qa | flaky_500 | 32.06s
[2025-09-01 03:30](#error-2025-09-01t0330180000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68b4e91746ef690a79d6cda9/backupCompliancePolicy | dev |  | 66.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17

### Error 2025-08-17T01:01:40+00:00
```
2025-08-17T01:01:40.3987988Z === RUN   TestAccBackupCompliancePolicy_update
2025-08-17T01:01:40.3995617Z === CONT  TestAccBackupCompliancePolicy_update
2025-08-17T01:01:40.4061336Z === NAME  TestAccBackupCompliancePolicy_update
2025-08-17T01:01:40.4062744Z     resource_backup_compliance_policy_test.go:35: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T01:01:40.4063728Z         
2025-08-17T01:01:40.4064707Z         Error: error when getting project properties after create
2025-08-17T01:01:40.4065408Z         
2025-08-17T01:01:40.4066043Z           with mongodbatlas_project.test,
2025-08-17T01:01:40.4067225Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T01:01:40.4068293Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T01:01:40.4068916Z         
2025-08-17T01:01:40.4069831Z         error getting project (68a122cbaafa9a76ca8ba28d): error getting project's
2025-08-17T01:01:40.4070771Z         limits (68a122cbaafa9a76ca8ba28d):
2025-08-17T01:01:40.4072098Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cbaafa9a76ca8ba28d/limits
2025-08-17T01:01:40.4073436Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:01:40.4074733Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:01:40.4075544Z         BadRequestDetail: 
2025-08-17T01:01:40.4076188Z --- FAIL: TestAccBackupCompliancePolicy_update (101.81s)
```

- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T00:32:39+00:00
```
2025-08-24T00:32:39.4463594Z === RUN   TestAccBackupCompliancePolicy_update
2025-08-24T00:32:39.4470445Z === CONT  TestAccBackupCompliancePolicy_update
2025-08-24T00:32:39.4510151Z === NAME  TestAccBackupCompliancePolicy_update
2025-08-24T00:32:39.4510836Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:39.4511351Z         
2025-08-24T00:32:39.4511798Z         Error: error when getting project properties after create
2025-08-24T00:32:39.4512201Z         
2025-08-24T00:32:39.4512557Z           with mongodbatlas_project.test,
2025-08-24T00:32:39.4513221Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:39.4513834Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:39.4514200Z         
2025-08-24T00:32:39.4514715Z         error getting project (68aa5d294192cd1cc589b866): error getting project's
2025-08-24T00:32:39.4515279Z         limits (68aa5d294192cd1cc589b866):
2025-08-24T00:32:39.4515918Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d294192cd1cc589b866/limits
2025-08-24T00:32:39.4516662Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:39.4517314Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:39.4517911Z         BadRequestDetail: 
2025-08-24T00:32:39.4532059Z   
2025-08-24T00:32:39.4541081Z --- FAIL: TestAccBackupCompliancePolicy_update (32.62s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27 PASS a minute
- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a minute

### Error 2025-09-01T03:30:18+00:00
```
2025-09-01T03:30:18.2097322Z === RUN   TestAccBackupCompliancePolicy_update
2025-09-01T03:30:18.2106330Z === CONT  TestAccBackupCompliancePolicy_update
2025-09-01T03:30:18.2241656Z === NAME  TestAccBackupCompliancePolicy_update
2025-09-01T03:30:18.2243245Z     resource_backup_compliance_policy_test.go:35: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T03:30:18.2244324Z         
2025-09-01T03:30:18.2248969Z         Error: error disabling the Backup Compliance Policy: 68b4e91746ef690a79d6cda9: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e91746ef690a79d6cda9/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T03:30:18.2251966Z         
2025-09-01T03:30:18.2252530Z --- FAIL: TestAccBackupCompliancePolicy_update (66.58s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute