# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:46:21.8492669Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-01T08:46:21.8503901Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-01T08:46:21.8513583Z --- PASS: TestMigBackupCompliancePolicy_basic (70.07s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:42:41.6678825Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-02T00:42:41.6687937Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-02T00:42:41.6694718Z --- PASS: TestMigBackupCompliancePolicy_basic (78.51s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:43:41.3455137Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-03T00:43:41.3468552Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-03T00:43:41.3478248Z --- PASS: TestMigBackupCompliancePolicy_basic (74.31s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:45:35.9904303Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-04T00:45:35.9915927Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-04T00:45:35.9925422Z --- PASS: TestMigBackupCompliancePolicy_basic (77.99s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:38:37.6780226Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-05T00:38:37.6791001Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-05T00:38:37.6800189Z --- PASS: TestMigBackupCompliancePolicy_basic (70.90s)
```
### 2025-07-06
#### FAIL a minute
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
### 2025-07-07
#### PASS a minute
```
2025-07-07T00:43:47.0837307Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-07T00:43:47.0844238Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-07T00:43:47.0849778Z --- PASS: TestMigBackupCompliancePolicy_basic (69.32s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:43:11.4288999Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-08T00:43:11.4299919Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-08T00:43:11.4309310Z --- PASS: TestMigBackupCompliancePolicy_basic (78.54s)
```