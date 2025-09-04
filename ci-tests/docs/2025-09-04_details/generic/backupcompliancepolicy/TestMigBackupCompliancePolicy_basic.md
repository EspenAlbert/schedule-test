# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122ccf746882a383c7622/limits | qa | flaky_500 | 110.04s
[2025-08-24 00:32](#error-2025-08-24t0032390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2a9bbb8c4ee1f81b0e/limits | qa | flaky_500 | 126.08s
[2025-09-01 03:30](#error-2025-09-01t0330180000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68b4e91746ef690a79d6d339/backupCompliancePolicy | dev |  | 70.03s

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
2025-08-17T01:01:40.3984028Z === RUN   TestMigBackupCompliancePolicy_basic
2025-08-17T01:01:40.3994060Z === CONT  TestMigBackupCompliancePolicy_basic
2025-08-17T01:01:40.4141822Z === NAME  TestMigBackupCompliancePolicy_basic
2025-08-17T01:01:40.4143123Z     resource_backup_compliance_policy_migration_test.go:11: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-17T01:01:40.4144116Z         
2025-08-17T01:01:40.4145052Z         Error: error when getting project properties after create
2025-08-17T01:01:40.4145739Z         
2025-08-17T01:01:40.4146363Z           with mongodbatlas_project.test,
2025-08-17T01:01:40.4147535Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T01:01:40.4148607Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T01:01:40.4149229Z         
2025-08-17T01:01:40.4150122Z         error getting project (68a122ccf746882a383c7622): error getting project's
2025-08-17T01:01:40.4151043Z         limits (68a122ccf746882a383c7622):
2025-08-17T01:01:40.4152190Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122ccf746882a383c7622/limits
2025-08-17T01:01:40.4153510Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:01:40.4155109Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:01:40.4155857Z         BadRequestDetail: 
2025-08-17T01:01:40.4156424Z --- FAIL: TestMigBackupCompliancePolicy_basic (110.36s)
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
2025-08-24T00:32:39.4460154Z === RUN   TestMigBackupCompliancePolicy_basic
2025-08-24T00:32:39.4469308Z === CONT  TestMigBackupCompliancePolicy_basic
2025-08-24T00:32:39.4580455Z === NAME  TestMigBackupCompliancePolicy_basic
2025-08-24T00:32:39.4581263Z     resource_backup_compliance_policy_migration_test.go:11: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:32:39.4581858Z         
2025-08-24T00:32:39.4582303Z         Error: error when getting project properties after create
2025-08-24T00:32:39.4582698Z         
2025-08-24T00:32:39.4583061Z           with mongodbatlas_project.test,
2025-08-24T00:32:39.4583728Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:39.4584337Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:39.4584692Z         
2025-08-24T00:32:39.4585207Z         error getting project (68aa5d2a9bbb8c4ee1f81b0e): error getting project's
2025-08-24T00:32:39.4585754Z         limits (68aa5d2a9bbb8c4ee1f81b0e):
2025-08-24T00:32:39.4586403Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2a9bbb8c4ee1f81b0e/limits
2025-08-24T00:32:39.4587150Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:39.4587803Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:39.4588261Z         BadRequestDetail: 
2025-08-24T00:32:39.4588855Z --- FAIL: TestMigBackupCompliancePolicy_basic (126.75s)
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
2025-09-01T03:30:18.2093983Z === RUN   TestMigBackupCompliancePolicy_basic
2025-09-01T03:30:18.2104737Z === CONT  TestMigBackupCompliancePolicy_basic
2025-09-01T03:30:18.2292035Z === NAME  TestMigBackupCompliancePolicy_basic
2025-09-01T03:30:18.2293539Z     resource_backup_compliance_policy_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T03:30:18.2294522Z         
2025-09-01T03:30:18.2296936Z         Error: error disabling the Backup Compliance Policy: 68b4e91746ef690a79d6d339: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e91746ef690a79d6d339/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T03:30:18.2298747Z         
2025-09-01T03:30:18.2299078Z --- FAIL: TestMigBackupCompliancePolicy_basic (70.29s)
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