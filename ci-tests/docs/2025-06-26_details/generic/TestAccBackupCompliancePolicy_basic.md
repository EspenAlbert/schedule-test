# generic/TestAccBackupCompliancePolicy_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS a minute
```
2025-06-20T00:43:25.4032876Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-20T00:43:25.4043783Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-20T00:43:25.4047531Z --- PASS: TestAccBackupCompliancePolicy_basic (65.56s)
```
### 2025-06-21
#### PASS a minute
```
2025-06-21T00:43:03.0713413Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-21T00:43:03.0732185Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-21T00:43:03.0734300Z --- PASS: TestAccBackupCompliancePolicy_basic (70.75s)
```
### 2025-06-22
#### FAIL 32 seconds
```
2025-06-22T00:44:34.6640076Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-22T00:44:34.6649966Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-22T00:44:34.6665134Z   
2025-06-22T00:44:34.6665738Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:34.6666249Z         
2025-06-22T00:44:34.6666699Z         Error: error when getting project properties after create
2025-06-22T00:44:34.6667127Z         
2025-06-22T00:44:34.6667483Z           with mongodbatlas_project.test,
2025-06-22T00:44:34.6668161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:44:34.6668943Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:44:34.6669420Z         
2025-06-22T00:44:34.6669939Z         error getting project (68574eebaf7a0954e84ad615): error getting project's
2025-06-22T00:44:34.6670466Z         limits (68574eebaf7a0954e84ad615):
2025-06-22T00:44:34.6671116Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eebaf7a0954e84ad615/limits
2025-06-22T00:44:34.6671858Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:34.6672501Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:34.6672960Z         BadRequestDetail: 
2025-06-22T00:44:34.6673520Z --- FAIL: TestAccBackupCompliancePolicy_basic (32.71s)
```
### 2025-06-23
#### PASS a minute
```
2025-06-23T00:43:16.3450140Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-23T00:43:16.3459414Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-23T00:43:16.3460727Z --- PASS: TestAccBackupCompliancePolicy_basic (66.46s)
```
### 2025-06-24
#### PASS a minute
```
2025-06-24T00:41:14.0038619Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-24T00:41:14.0050531Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-24T00:41:14.0054718Z --- PASS: TestAccBackupCompliancePolicy_basic (67.43s)
```
### 2025-06-25
#### PASS a minute
```
2025-06-25T00:41:42.6363192Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-25T00:41:42.6376824Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-25T00:41:42.6380165Z --- PASS: TestAccBackupCompliancePolicy_basic (66.39s)
```
### 2025-06-26
#### PASS a minute
```
2025-06-26T00:41:37.1527282Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-26T00:41:37.1539946Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-26T00:41:37.1542732Z --- PASS: TestAccBackupCompliancePolicy_basic (68.06s)
```