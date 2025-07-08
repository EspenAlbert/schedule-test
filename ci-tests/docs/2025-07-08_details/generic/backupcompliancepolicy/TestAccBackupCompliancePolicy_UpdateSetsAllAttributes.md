# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
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
#### FAIL 33 seconds
```
2025-07-06T00:46:50.0779887Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-06T00:46:50.0785925Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-06T00:46:50.0811528Z   
2025-07-06T00:46:50.0812856Z     resource_backup_compliance_policy_test.go:128: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:50.0813802Z         
2025-07-06T00:46:50.0814588Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0815280Z         
2025-07-06T00:46:50.0815899Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0817089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0818184Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0819020Z         
2025-07-06T00:46:50.0819952Z         error getting project (6869c402690ae45e168bcdfe): error getting project's
2025-07-06T00:46:50.0820892Z         limits (6869c402690ae45e168bcdfe):
2025-07-06T00:46:50.0822033Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bcdfe/limits
2025-07-06T00:46:50.0823542Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0824715Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0825534Z         BadRequestDetail: 
2025-07-06T00:46:50.0826309Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (33.41s)
```
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### PASS a minute