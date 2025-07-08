# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:46:21.8496411Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-01T08:46:21.8506668Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-01T08:46:21.8511678Z --- PASS: TestAccBackupCompliancePolicy_update (67.30s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:42:41.6682170Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-02T00:42:41.6689046Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-02T00:42:41.6693240Z --- PASS: TestAccBackupCompliancePolicy_update (72.52s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:43:41.3458815Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-03T00:43:41.3473314Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-03T00:43:41.3476334Z --- PASS: TestAccBackupCompliancePolicy_update (70.33s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:45:35.9907485Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-04T00:45:35.9917838Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-04T00:45:35.9924124Z --- PASS: TestAccBackupCompliancePolicy_update (72.70s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:38:37.6783549Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-05T00:38:37.6794546Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-05T00:38:37.6799418Z --- PASS: TestAccBackupCompliancePolicy_update (67.59s)
```
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:46:50.0774279Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-06T00:46:50.0783345Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-06T00:46:50.0956277Z === NAME  TestAccBackupCompliancePolicy_update
2025-07-06T00:46:50.0957590Z     resource_backup_compliance_policy_test.go:34: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:46:50.0958582Z         
2025-07-06T00:46:50.0959354Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0960046Z         
2025-07-06T00:46:50.0960664Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0961849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0963082Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0963708Z         
2025-07-06T00:46:50.0964612Z         error getting project (6869c402690ae45e168bcdfc): error getting project's
2025-07-06T00:46:50.0965541Z         limits (6869c402690ae45e168bcdfc):
2025-07-06T00:46:50.0966676Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bcdfc/limits
2025-07-06T00:46:50.0968018Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0969208Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0970020Z         BadRequestDetail: 
2025-07-06T00:46:50.0970652Z --- FAIL: TestAccBackupCompliancePolicy_update (67.48s)
```
### 2025-07-07
#### PASS a minute
```
2025-07-07T00:43:47.0840089Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-07T00:43:47.0845446Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-07T00:43:47.0849329Z --- PASS: TestAccBackupCompliancePolicy_update (67.60s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:43:11.4292363Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-08T00:43:11.4303480Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-08T00:43:11.4308547Z --- PASS: TestAccBackupCompliancePolicy_update (73.85s)
```