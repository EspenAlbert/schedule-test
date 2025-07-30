# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c402690ae45e168bcdfc/limits | qa | flaky_500 | 67.05s
[2025-07-10 13:08](#error-2025-07-10t1308520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbaff006d8d55bb9e65de/limits | qa | flaky_500 | 66.07s
[2025-07-13 00:45](#error-2025-07-13t0045420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe89006d8d55bbaa1e09/limits | qa | flaky_500 | 97.07s
[2025-07-14 03:31](#error-2025-07-14t0331030000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68744fc252cba864e5f0fa7b/backupCompliancePolicy | dev | flaky_500 | 68.03s
[2025-07-20 00:34](#error-2025-07-20t0034050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3935823af9166ef91096/limits | qa | flaky_500 | 65.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
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

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL a minute

### Error 2025-07-10T13:08:52+00:00
```
2025-07-10T13:08:52.8106626Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-10T13:08:52.8115389Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-10T13:08:52.8204188Z === NAME  TestAccBackupCompliancePolicy_update
2025-07-10T13:08:52.8204918Z     resource_backup_compliance_policy_test.go:34: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:08:52.8205548Z         
2025-07-10T13:08:52.8206261Z         Error: error when getting project properties after create
2025-07-10T13:08:52.8206669Z         
2025-07-10T13:08:52.8207025Z           with mongodbatlas_project.test,
2025-07-10T13:08:52.8207688Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:52.8208294Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:52.8208652Z         
2025-07-10T13:08:52.8209163Z         error getting project (686fbaff006d8d55bb9e65de): error getting project's
2025-07-10T13:08:52.8209705Z         limits (686fbaff006d8d55bb9e65de):
2025-07-10T13:08:52.8210363Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbaff006d8d55bb9e65de/limits
2025-07-10T13:08:52.8211101Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:52.8211751Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:52.8212208Z         BadRequestDetail: 
2025-07-10T13:08:52.8212579Z --- FAIL: TestAccBackupCompliancePolicy_update (66.66s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13

### Error 2025-07-13T00:45:42+00:00
```
2025-07-13T00:45:42.5541439Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-13T00:45:42.5547528Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-13T00:45:42.5611390Z === NAME  TestAccBackupCompliancePolicy_update
2025-07-13T00:45:42.5628281Z     resource_backup_compliance_policy_test.go:34: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:45:42.5629193Z         
2025-07-13T00:45:42.5629667Z         Error: error when getting project properties after create
2025-07-13T00:45:42.5630088Z         
2025-07-13T00:45:42.5630460Z           with mongodbatlas_project.test,
2025-07-13T00:45:42.5631131Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:45:42.5631750Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:45:42.5632121Z         
2025-07-13T00:45:42.5632645Z         error getting project (6872fe89006d8d55bbaa1e09): error getting project's
2025-07-13T00:45:42.5633180Z         limits (6872fe89006d8d55bbaa1e09):
2025-07-13T00:45:42.5633837Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe89006d8d55bbaa1e09/limits
2025-07-13T00:45:42.5634859Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:45:42.5635519Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:45:42.5635991Z         BadRequestDetail: 
2025-07-13T00:45:42.5636555Z --- FAIL: TestAccBackupCompliancePolicy_update (97.73s)
```

- 2025-07-14

### Error 2025-07-14T03:31:03+00:00
```
2025-07-14T03:31:03.4550073Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-14T03:31:03.4569122Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-14T03:31:03.4702786Z === NAME  TestAccBackupCompliancePolicy_update
2025-07-14T03:31:03.4703657Z     resource_backup_compliance_policy_test.go:34: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:03.4704256Z         
2025-07-14T03:31:03.4706762Z         Error: error disabling the Backup Compliance Policy: 68744fc252cba864e5f0fa7b: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc252cba864e5f0fa7b/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T03:31:03.4708438Z         
2025-07-14T03:31:03.4708772Z --- FAIL: TestAccBackupCompliancePolicy_update (68.27s)
```

- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20

### Error 2025-07-20T00:34:05+00:00
```
2025-07-20T00:34:05.9410585Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-20T00:34:05.9422629Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-20T00:34:05.9529714Z === NAME  TestAccBackupCompliancePolicy_update
2025-07-20T00:34:05.9530467Z     resource_backup_compliance_policy_test.go:34: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-20T00:34:05.9531054Z         
2025-07-20T00:34:05.9531506Z         Error: error when getting project properties after create
2025-07-20T00:34:05.9531925Z         
2025-07-20T00:34:05.9532289Z           with mongodbatlas_project.test,
2025-07-20T00:34:05.9533693Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:34:05.9534702Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:34:05.9535094Z         
2025-07-20T00:34:05.9535628Z         error getting project (687c3935823af9166ef91096): error getting project's
2025-07-20T00:34:05.9536169Z         limits (687c3935823af9166ef91096):
2025-07-20T00:34:05.9537035Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3935823af9166ef91096/limits
2025-07-20T00:34:05.9537796Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:34:05.9538458Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:34:05.9538932Z         BadRequestDetail: 
2025-07-20T00:34:05.9553648Z   
2025-07-20T00:34:05.9563739Z --- FAIL: TestAccBackupCompliancePolicy_update (65.42s)
```

- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27 PASS a minute
- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS a minute