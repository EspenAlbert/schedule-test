# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
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
### 2025-07-08
#### PASS a minute