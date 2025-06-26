# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS a minute
```
2025-06-20T00:43:25.4034542Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-20T00:43:25.4043112Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-20T00:43:25.4049275Z --- PASS: TestAccBackupCompliancePolicy_update (68.86s)
```
### 2025-06-21
#### PASS a minute
```
2025-06-21T00:43:03.0715501Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-21T00:43:03.0729075Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-21T00:43:03.0735430Z --- PASS: TestAccBackupCompliancePolicy_update (73.29s)
```
### 2025-06-22
#### FAIL 33 seconds
```
2025-06-22T00:44:34.6641837Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-22T00:44:34.6648829Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-22T00:44:34.6687573Z === NAME  TestAccBackupCompliancePolicy_update
2025-06-22T00:44:34.6688288Z     resource_backup_compliance_policy_test.go:34: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:34.6688795Z         
2025-06-22T00:44:34.6689231Z         Error: error when getting project properties after create
2025-06-22T00:44:34.6689625Z         
2025-06-22T00:44:34.6689975Z           with mongodbatlas_project.test,
2025-06-22T00:44:34.6690624Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:44:34.6691229Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:44:34.6691586Z         
2025-06-22T00:44:34.6692086Z         error getting project (68574eebab82446d9bfb061b): error getting project's
2025-06-22T00:44:34.6692608Z         limits (68574eebab82446d9bfb061b):
2025-06-22T00:44:34.6693484Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eebab82446d9bfb061b/limits
2025-06-22T00:44:34.6694223Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:34.6695008Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:34.6695565Z         BadRequestDetail: 
2025-06-22T00:44:34.6695935Z --- FAIL: TestAccBackupCompliancePolicy_update (33.05s)
```
### 2025-06-23
#### PASS a minute
```
2025-06-23T00:43:16.3451854Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-23T00:43:16.3458894Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-23T00:43:16.3461260Z --- PASS: TestAccBackupCompliancePolicy_update (67.48s)
```
### 2025-06-24
#### PASS a minute
```
2025-06-24T00:41:14.0040639Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-24T00:41:14.0049801Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-24T00:41:14.0055497Z --- PASS: TestAccBackupCompliancePolicy_update (68.10s)
```
### 2025-06-25
#### PASS a minute
```
2025-06-25T00:41:42.6365070Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-25T00:41:42.6376110Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-25T00:41:42.6382083Z --- PASS: TestAccBackupCompliancePolicy_update (68.58s)
```
### 2025-06-26
#### PASS a minute
```
2025-06-26T00:41:37.1529036Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-26T00:41:37.1537312Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-26T00:41:37.1544540Z --- PASS: TestAccBackupCompliancePolicy_update (68.64s)
```