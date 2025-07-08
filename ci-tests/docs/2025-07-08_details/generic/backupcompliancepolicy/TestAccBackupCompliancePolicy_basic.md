# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
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
#### FAIL 35 seconds
```
2025-07-06T00:46:50.0772214Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0785147Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0874555Z === NAME  TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0875776Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:50.0876697Z         
2025-07-06T00:46:50.0877473Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0878160Z         
2025-07-06T00:46:50.0878770Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0880014Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0881105Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0881725Z         
2025-07-06T00:46:50.0882632Z         error getting project (6869c402690ae45e168bce00): error getting project's
2025-07-06T00:46:50.0883719Z         limits (6869c402690ae45e168bce00):
2025-07-06T00:46:50.0884860Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bce00/limits
2025-07-06T00:46:50.0886177Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0887533Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0888368Z         BadRequestDetail: 
2025-07-06T00:46:50.0888998Z --- FAIL: TestAccBackupCompliancePolicy_basic (35.20s)
```
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### PASS a minute