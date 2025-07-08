# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS a minute
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### PASS a minute
### 2025-07-05
#### PASS a minute
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
### 2025-07-08
#### PASS a minute