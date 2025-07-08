# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:46:21.8494255Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-01T08:46:21.8507386Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-01T08:46:21.8510587Z --- PASS: TestAccBackupCompliancePolicy_basic (65.76s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:42:41.6680603Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-02T00:42:41.6691228Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-02T00:42:41.6692676Z --- PASS: TestAccBackupCompliancePolicy_basic (70.54s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:43:41.3456948Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-03T00:43:41.3470457Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-03T00:43:41.3475496Z --- PASS: TestAccBackupCompliancePolicy_basic (68.30s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:45:35.9905723Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-04T00:45:35.9918767Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-04T00:45:35.9923254Z --- PASS: TestAccBackupCompliancePolicy_basic (71.60s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:38:37.6781771Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-05T00:38:37.6795235Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-05T00:38:37.6797361Z --- PASS: TestAccBackupCompliancePolicy_basic (65.88s)
```
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
```
2025-07-07T00:43:47.0838599Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-07T00:43:47.0846960Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-07T00:43:47.0848095Z --- PASS: TestAccBackupCompliancePolicy_basic (66.23s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:43:11.4290509Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-08T00:43:11.4304530Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-08T00:43:11.4306749Z --- PASS: TestAccBackupCompliancePolicy_basic (71.04s)
```