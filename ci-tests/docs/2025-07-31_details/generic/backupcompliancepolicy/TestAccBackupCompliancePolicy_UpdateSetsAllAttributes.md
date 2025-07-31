# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c402690ae45e168bcdfe/limits | qa | flaky_500 | 33.04s
[2025-07-10 13:08](#error-2025-07-10t1308520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafffd583001f9eeb3c6/limits | qa | flaky_500 | 34.03s
[2025-07-13 00:45](#error-2025-07-13t0045420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe89207f4561710408e6/limits | qa | flaky_500 | 65.01s
[2025-07-14 03:31](#error-2025-07-14t0331030000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68744fc2d81a2d4bb4ea37de/backupCompliancePolicy | dev |  | 37.04s
[2025-07-20 00:34](#error-2025-07-20t0034050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3935426db7026b5b158f/limits | qa | flaky_500 | 65.07s
[2025-07-27 00:48](#error-2025-07-27t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d8ef1f7377717a88e6/limits | qa | flaky_500 | 34.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
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

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL 34 seconds

### Error 2025-07-10T13:08:52+00:00
```
2025-07-10T13:08:52.8112413Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-10T13:08:52.8114868Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-10T13:08:52.8181370Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-10T13:08:52.8182085Z     resource_backup_compliance_policy_test.go:128: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:08:52.8182590Z         
2025-07-10T13:08:52.8183027Z         Error: error when getting project properties after create
2025-07-10T13:08:52.8183423Z         
2025-07-10T13:08:52.8183784Z           with mongodbatlas_project.test,
2025-07-10T13:08:52.8184453Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:52.8185065Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:52.8185430Z         
2025-07-10T13:08:52.8186166Z         error getting project (686fbafffd583001f9eeb3c6): error getting project's
2025-07-10T13:08:52.8186704Z         limits (686fbafffd583001f9eeb3c6):
2025-07-10T13:08:52.8187347Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafffd583001f9eeb3c6/limits
2025-07-10T13:08:52.8188084Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:52.8188729Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:52.8189185Z         BadRequestDetail: 
2025-07-10T13:08:52.8189632Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (34.32s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13

### Error 2025-07-13T00:45:42+00:00
```
2025-07-13T00:45:42.5545515Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-13T00:45:42.5548437Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-13T00:45:42.5565281Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-13T00:45:42.5566116Z     resource_backup_compliance_policy_test.go:128: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:45:42.5566683Z         
2025-07-13T00:45:42.5567132Z         Error: error when getting project properties after create
2025-07-13T00:45:42.5567537Z         
2025-07-13T00:45:42.5568060Z           with mongodbatlas_project.test,
2025-07-13T00:45:42.5568737Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:45:42.5569349Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:45:42.5569712Z         
2025-07-13T00:45:42.5570219Z         error getting project (6872fe89207f4561710408e6): error getting project's
2025-07-13T00:45:42.5570738Z         limits (6872fe89207f4561710408e6):
2025-07-13T00:45:42.5571379Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe89207f4561710408e6/limits
2025-07-13T00:45:42.5572113Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:45:42.5572756Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:45:42.5573213Z         BadRequestDetail: 
2025-07-13T00:45:42.5573662Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (65.11s)
```

- 2025-07-14

### Error 2025-07-14T03:31:03+00:00
```
2025-07-14T03:31:03.4563861Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-14T03:31:03.4567235Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-14T03:31:03.4596733Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-14T03:31:03.4598146Z     resource_backup_compliance_policy_test.go:128: Step 2/2 error: Error running apply: exit status 1
2025-07-14T03:31:03.4599054Z         
2025-07-14T03:31:03.4603654Z         Error: error updating a Backup Compliance Policy: 68744fc2d81a2d4bb4ea37de: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc2d81a2d4bb4ea37de/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T03:31:03.4606559Z         
2025-07-14T03:31:03.4607452Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2025-07-14T03:31:03.4609067Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2025-07-14T03:31:03.4610741Z           24: 	resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2025-07-14T03:31:03.4611535Z         
2025-07-14T03:31:03.4634854Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:03.4635745Z         
2025-07-14T03:31:03.4640062Z         Error: error disabling the Backup Compliance Policy: 68744fc2d81a2d4bb4ea37de: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc2d81a2d4bb4ea37de/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T03:31:03.4643203Z         
2025-07-14T03:31:03.4643932Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (37.40s)
```

- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20

### Error 2025-07-20T00:34:05+00:00
```
2025-07-20T00:34:05.9417723Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-20T00:34:05.9421779Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-20T00:34:05.9554011Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-20T00:34:05.9555280Z     resource_backup_compliance_policy_test.go:128: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-20T00:34:05.9556419Z         
2025-07-20T00:34:05.9557168Z         Error: error when getting project properties after create
2025-07-20T00:34:05.9557599Z         
2025-07-20T00:34:05.9557982Z           with mongodbatlas_project.test,
2025-07-20T00:34:05.9558688Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:34:05.9559318Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:34:05.9559703Z         
2025-07-20T00:34:05.9560229Z         error getting project (687c3935426db7026b5b158f): error getting project's
2025-07-20T00:34:05.9560772Z         limits (687c3935426db7026b5b158f):
2025-07-20T00:34:05.9561448Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3935426db7026b5b158f/limits
2025-07-20T00:34:05.9562203Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:34:05.9562867Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:34:05.9563342Z         BadRequestDetail: 
2025-07-20T00:34:05.9564280Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (65.68s)
```

- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27

### Error 2025-07-27T00:48:43+00:00
```
2025-07-27T00:48:43.7216759Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-27T00:48:43.7221283Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-27T00:48:43.7292213Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-27T00:48:43.7293693Z     resource_backup_compliance_policy_test.go:128: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:48:43.7294647Z         
2025-07-27T00:48:43.7295474Z         Error: error when getting project properties after create
2025-07-27T00:48:43.7296183Z         
2025-07-27T00:48:43.7296839Z           with mongodbatlas_project.test,
2025-07-27T00:48:43.7298062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:48:43.7299196Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:48:43.7299873Z         
2025-07-27T00:48:43.7300994Z         error getting project (688573d8ef1f7377717a88e6): error getting project's
2025-07-27T00:48:43.7301967Z         limits (688573d8ef1f7377717a88e6):
2025-07-27T00:48:43.7303141Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d8ef1f7377717a88e6/limits
2025-07-27T00:48:43.7304504Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:48:43.7305894Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:48:43.7306776Z         BadRequestDetail: 
2025-07-27T00:48:43.7307583Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (34.11s)
```

- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS a minute
- 2025-07-31 PASS a minute