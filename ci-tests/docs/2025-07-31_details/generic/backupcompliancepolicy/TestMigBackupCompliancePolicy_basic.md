# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c404690ae45e168bd02c/limits | qa | flaky_500 | 100.08s
[2025-07-10 13:08](#error-2025-07-10t1308520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb02006d8d55bb9e6884/limits | qa | flaky_500 | 101.08s
[2025-07-14 03:31](#error-2025-07-14t0331030000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68744fc352cba864e5f0fafa/backupCompliancePolicy | dev |  | 70.04s
[2025-07-27 00:48](#error-2025-07-27t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573daef1f7377717a8a08/limits | qa | flaky_500 | 35.07s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
```
2025-07-06T00:46:50.0770643Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-06T00:46:50.0781596Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-06T00:46:50.0987102Z === NAME  TestMigBackupCompliancePolicy_basic
2025-07-06T00:46:50.0988519Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:46:50.0989590Z         
2025-07-06T00:46:50.0990371Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0991054Z         
2025-07-06T00:46:50.0991670Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0993023Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0994324Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0994947Z         
2025-07-06T00:46:50.0995847Z         error getting project (6869c404690ae45e168bd02c): error getting project's
2025-07-06T00:46:50.0996771Z         limits (6869c404690ae45e168bd02c):
2025-07-06T00:46:50.0997902Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c404690ae45e168bd02c/limits
2025-07-06T00:46:50.0999226Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.1000375Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.1001180Z         BadRequestDetail: 
2025-07-06T00:46:50.1001822Z --- FAIL: TestMigBackupCompliancePolicy_basic (100.83s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL a minute

### Error 2025-07-10T13:08:52+00:00
```
2025-07-10T13:08:52.8103249Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-10T13:08:52.8114122Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-10T13:08:52.8246901Z === NAME  TestMigBackupCompliancePolicy_basic
2025-07-10T13:08:52.8247674Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:08:52.8248265Z         
2025-07-10T13:08:52.8248703Z         Error: error when getting project properties after create
2025-07-10T13:08:52.8249099Z         
2025-07-10T13:08:52.8249450Z           with mongodbatlas_project.test,
2025-07-10T13:08:52.8250107Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:52.8250877Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:52.8251268Z         
2025-07-10T13:08:52.8251862Z         error getting project (686fbb02006d8d55bb9e6884): error getting project's
2025-07-10T13:08:52.8252650Z         limits (686fbb02006d8d55bb9e6884):
2025-07-10T13:08:52.8253408Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb02006d8d55bb9e6884/limits
2025-07-10T13:08:52.8254248Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:52.8254996Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:52.8255548Z         BadRequestDetail: 
2025-07-10T13:08:52.8256178Z --- FAIL: TestMigBackupCompliancePolicy_basic (101.81s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13 PASS a minute
- 2025-07-14

### Error 2025-07-14T03:31:03+00:00
```
2025-07-14T03:31:03.4546820Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-14T03:31:03.4565555Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-14T03:31:03.4721932Z === NAME  TestMigBackupCompliancePolicy_basic
2025-07-14T03:31:03.4722838Z     resource_backup_compliance_policy_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:03.4723470Z         
2025-07-14T03:31:03.4725800Z         Error: error disabling the Backup Compliance Policy: 68744fc352cba864e5f0fafa: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc352cba864e5f0fafa/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T03:31:03.4727572Z         
2025-07-14T03:31:03.4727896Z --- FAIL: TestMigBackupCompliancePolicy_basic (70.41s)
```

- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20 PASS a minute
- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27

### Error 2025-07-27T00:48:43+00:00
```
2025-07-27T00:48:43.7207204Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-27T00:48:43.7218527Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-27T00:48:43.7324691Z === NAME  TestMigBackupCompliancePolicy_basic
2025-07-27T00:48:43.7325993Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:48:43.7326996Z         
2025-07-27T00:48:43.7327803Z         Error: error when getting project properties after create
2025-07-27T00:48:43.7328567Z         
2025-07-27T00:48:43.7329222Z           with mongodbatlas_project.test,
2025-07-27T00:48:43.7330615Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-27T00:48:43.7331750Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:48:43.7332410Z         
2025-07-27T00:48:43.7333351Z         error getting project (688573daef1f7377717a8a08): error getting project's
2025-07-27T00:48:43.7334320Z         limits (688573daef1f7377717a8a08):
2025-07-27T00:48:43.7335488Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573daef1f7377717a8a08/limits
2025-07-27T00:48:43.7336855Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:48:43.7338046Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:48:43.7338923Z         BadRequestDetail: 
2025-07-27T00:48:43.7339573Z --- FAIL: TestMigBackupCompliancePolicy_basic (35.73s)
```

- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS a minute
- 2025-07-31 PASS a minute