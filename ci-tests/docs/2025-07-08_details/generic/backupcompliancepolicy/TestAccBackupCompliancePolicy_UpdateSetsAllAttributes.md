# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:46:21.8502140Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-01T08:46:21.8505843Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-01T08:46:21.8512635Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (67.96s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:42:41.6686678Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-02T00:42:41.6689648Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-02T00:42:41.6694046Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (72.91s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:43:41.3466569Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-03T00:43:41.3471451Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-03T00:43:41.3477301Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (70.48s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:45:35.9913760Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-04T00:45:35.9920820Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-04T00:45:35.9924887Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (72.79s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:38:37.6789301Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-05T00:38:37.6792666Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-05T00:38:37.6798264Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (66.60s)
```
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
```
2025-07-07T00:43:47.0843268Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-07T00:43:47.0845906Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-07T00:43:47.0848611Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (67.58s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:43:11.4298248Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-08T00:43:11.4301605Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-08T00:43:11.4307649Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (72.60s)
```