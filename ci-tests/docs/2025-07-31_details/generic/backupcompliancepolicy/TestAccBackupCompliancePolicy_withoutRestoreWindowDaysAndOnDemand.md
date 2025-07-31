# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c402690ae45e168bcdff/limits | qa | flaky_500 | 66.03s
[2025-07-10 13:08](#error-2025-07-10t1308520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafffd583001f9eeb3c7/limits | qa | flaky_500 | 33.00s
[2025-07-14 03:31](#error-2025-07-14t0331030000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68744fc252cba864e5f0fa79/backupCompliancePolicy | dev |  | 37.05s
[2025-07-20 00:34](#error-2025-07-20t0034050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3935823af9166ef9109a/limits | qa | flaky_500 | 64.05s
[2025-07-27 00:48](#error-2025-07-27t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d8ea884d723491e372/limits | qa | flaky_500 | 33.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 38 seconds
- 2025-07-03 PASS 36 seconds
- 2025-07-04 PASS 38 seconds
- 2025-07-05 PASS 35 seconds
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
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

- 2025-07-07 PASS 35 seconds
- 2025-07-08 PASS 38 seconds
- 2025-07-09 PASS 37 seconds
- 2025-07-10
  - PASS 34 seconds
  - FAIL 33 seconds

### Error 2025-07-10T13:08:52+00:00
```
2025-07-10T13:08:52.8110295Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-10T13:08:52.8116196Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-10T13:08:52.8132367Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-10T13:08:52.8133261Z     resource_backup_compliance_policy_test.go:104: Step 1/1 error: Error running apply: exit status 1
2025-07-10T13:08:52.8133786Z         
2025-07-10T13:08:52.8134239Z         Error: error when getting project properties after create
2025-07-10T13:08:52.8134638Z         
2025-07-10T13:08:52.8134999Z           with mongodbatlas_project.test,
2025-07-10T13:08:52.8136008Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:52.8136671Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:52.8137033Z         
2025-07-10T13:08:52.8137550Z         error getting project (686fbafffd583001f9eeb3c7): error getting project's
2025-07-10T13:08:52.8138099Z         limits (686fbafffd583001f9eeb3c7):
2025-07-10T13:08:52.8138749Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafffd583001f9eeb3c7/limits
2025-07-10T13:08:52.8139488Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:52.8140138Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:52.8140601Z         BadRequestDetail: 
2025-07-10T13:08:52.8141097Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (33.03s)
```

- 2025-07-11 PASS 36 seconds
- 2025-07-12 PASS 38 seconds
- 2025-07-13 PASS 35 seconds
- 2025-07-14

### Error 2025-07-14T03:31:03+00:00
```
2025-07-14T03:31:03.4561676Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-14T03:31:03.4568211Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-14T03:31:03.4664880Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-14T03:31:03.4665804Z     resource_backup_compliance_policy_test.go:104: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:03.4666420Z         
2025-07-14T03:31:03.4668761Z         Error: error disabling the Backup Compliance Policy: 68744fc252cba864e5f0fa79: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc252cba864e5f0fa79/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T03:31:03.4670825Z         
2025-07-14T03:31:03.4671502Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (37.45s)
```

- 2025-07-15 PASS 36 seconds
- 2025-07-16 PASS 38 seconds
- 2025-07-17 PASS 38 seconds
- 2025-07-18 PASS 38 seconds
- 2025-07-19 PASS 35 seconds
- 2025-07-20

### Error 2025-07-20T00:34:05+00:00
```
2025-07-20T00:34:05.9414501Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-20T00:34:05.9423552Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-20T00:34:05.9505459Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-20T00:34:05.9506338Z     resource_backup_compliance_policy_test.go:104: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-20T00:34:05.9507140Z         
2025-07-20T00:34:05.9507607Z         Error: error when getting project properties after create
2025-07-20T00:34:05.9508029Z         
2025-07-20T00:34:05.9508398Z           with mongodbatlas_project.test,
2025-07-20T00:34:05.9509090Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:34:05.9509719Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:34:05.9510091Z         
2025-07-20T00:34:05.9510611Z         error getting project (687c3935823af9166ef9109a): error getting project's
2025-07-20T00:34:05.9511154Z         limits (687c3935823af9166ef9109a):
2025-07-20T00:34:05.9511819Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3935823af9166ef9109a/limits
2025-07-20T00:34:05.9512575Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:34:05.9513241Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:34:05.9513715Z         BadRequestDetail: 
2025-07-20T00:34:05.9514226Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (64.46s)
```

- 2025-07-21 PASS 36 seconds
- 2025-07-22 PASS 37 seconds
- 2025-07-23
  - PASS 38 seconds
  - PASS 37 seconds
- 2025-07-24 PASS 37 seconds
- 2025-07-25 PASS 38 seconds
- 2025-07-26 PASS 35 seconds
- 2025-07-27

### Error 2025-07-27T00:48:43+00:00
```
2025-07-27T00:48:43.7214527Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-27T00:48:43.7223256Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-27T00:48:43.7249544Z   
2025-07-27T00:48:43.7250818Z     resource_backup_compliance_policy_test.go:104: Step 1/1 error: Error running apply: exit status 1
2025-07-27T00:48:43.7251792Z         
2025-07-27T00:48:43.7252615Z         Error: error when getting project properties after create
2025-07-27T00:48:43.7253365Z         
2025-07-27T00:48:43.7254027Z           with mongodbatlas_project.test,
2025-07-27T00:48:43.7255263Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:48:43.7256631Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:48:43.7257316Z         
2025-07-27T00:48:43.7258278Z         error getting project (688573d8ea884d723491e372): error getting project's
2025-07-27T00:48:43.7259261Z         limits (688573d8ea884d723491e372):
2025-07-27T00:48:43.7260636Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d8ea884d723491e372/limits
2025-07-27T00:48:43.7262048Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:48:43.7263260Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:48:43.7264114Z         BadRequestDetail: 
2025-07-27T00:48:43.7265016Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (33.39s)
```

- 2025-07-28 PASS 34 seconds
- 2025-07-29 PASS 35 seconds
- 2025-07-30 PASS 35 seconds
- 2025-07-31 PASS 39 seconds