# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 38 seconds
### 2025-07-03
#### PASS 36 seconds
### 2025-07-04
#### PASS 38 seconds
### 2025-07-05
#### PASS 35 seconds
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
### 2025-07-08
#### PASS 38 seconds