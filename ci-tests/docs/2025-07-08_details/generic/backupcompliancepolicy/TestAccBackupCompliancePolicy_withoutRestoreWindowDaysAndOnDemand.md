# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 35 seconds
```
2025-07-01T08:46:21.8499941Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-01T08:46:21.8508306Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-01T08:46:21.8509522Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (35.75s)
```
### 2025-07-02
#### PASS 38 seconds
```
2025-07-02T00:42:41.6685227Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-02T00:42:41.6690571Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-02T00:42:41.6691930Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (38.72s)
```
### 2025-07-03
#### PASS 36 seconds
```
2025-07-03T00:43:41.3464104Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-03T00:43:41.3472415Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-03T00:43:41.3474225Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (36.88s)
```
### 2025-07-04
#### PASS 38 seconds
```
2025-07-04T00:45:35.9910833Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-04T00:45:35.9919745Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-04T00:45:35.9921950Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (38.07s)
```
### 2025-07-05
#### PASS 35 seconds
```
2025-07-05T00:38:37.6787200Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-05T00:38:37.6793642Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-05T00:38:37.6796340Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (35.21s)
```
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:46:50.0777701Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-06T00:46:50.0784249Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-06T00:46:50.0915322Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-06T00:46:50.0916848Z     resource_backup_compliance_policy_test.go:104: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:46:50.0917855Z         
2025-07-06T00:46:50.0918635Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0919317Z         
2025-07-06T00:46:50.0919927Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0921098Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0922177Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0922947Z         
2025-07-06T00:46:50.0923859Z         error getting project (6869c402690ae45e168bcdff): error getting project's
2025-07-06T00:46:50.0924781Z         limits (6869c402690ae45e168bcdff):
2025-07-06T00:46:50.0925920Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bcdff/limits
2025-07-06T00:46:50.0927236Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0928390Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0929190Z         BadRequestDetail: 
2025-07-06T00:46:50.0930054Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (66.30s)
```
### 2025-07-07
#### PASS 35 seconds
```
2025-07-07T00:43:47.0842079Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-07T00:43:47.0846462Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-07T00:43:47.0847512Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (35.00s)
```
### 2025-07-08
#### PASS 38 seconds
```
2025-07-08T00:43:11.4296162Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-08T00:43:11.4302582Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-08T00:43:11.4305755Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (38.35s)
```