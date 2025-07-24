# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:46](#error-2025-06-29t0046260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898856291349dce6cc45/limits | qa | flaky_500 | 97.00s
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c402690ae45e168bce00/limits | qa | flaky_500 | 35.02s
[2025-07-10 13:08](#error-2025-07-10t1308520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafffd583001f9eeb3cb/limits | qa | flaky_500 | 97.06s
[2025-07-13 00:45](#error-2025-07-13t0045420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe89006d8d55bbaa1e0f/limits | qa | flaky_500 | 95.03s
[2025-07-14 03:31](#error-2025-07-14t0331030000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68744fc2d81a2d4bb4ea37df/backupCompliancePolicy | dev |  | 66.06s
[2025-07-20 00:34](#error-2025-07-20t0034050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3935823af9166ef91099/limits | qa | flaky_500 | 33.00s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29

### Error 2025-06-29T00:46:26+00:00
```
2025-06-29T00:46:26.6038650Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-29T00:46:26.6047094Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-29T00:46:26.6124949Z === NAME  TestAccBackupCompliancePolicy_basic
2025-06-29T00:46:26.6125719Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:46:26.6126580Z         
2025-06-29T00:46:26.6127036Z         Error: error when getting project properties after create
2025-06-29T00:46:26.6127437Z         
2025-06-29T00:46:26.6127802Z           with mongodbatlas_project.test,
2025-06-29T00:46:26.6128471Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:46:26.6129082Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:46:26.6129442Z         
2025-06-29T00:46:26.6129956Z         error getting project (6860898856291349dce6cc45): error getting project's
2025-06-29T00:46:26.6130475Z         limits (6860898856291349dce6cc45):
2025-06-29T00:46:26.6131117Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898856291349dce6cc45/limits
2025-06-29T00:46:26.6131851Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:46:26.6132505Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:46:26.6132965Z         BadRequestDetail: 
2025-06-29T00:46:26.6133345Z --- FAIL: TestAccBackupCompliancePolicy_basic (97.01s)
```

- 2025-06-30 PASS a minute
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
2025-07-06T00:46:50.0772214Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0785147Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0874555Z === NAME  TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0875776Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:50.0876697Z         
2025-07-06T00:46:50.0877473Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0878160Z         
2025-07-06T00:46:50.0878770Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0880014Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0881105Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0881725Z         
2025-07-06T00:46:50.0882632Z         error getting project (6869c402690ae45e168bce00): error getting project's
2025-07-06T00:46:50.0883719Z         limits (6869c402690ae45e168bce00):
2025-07-06T00:46:50.0884860Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bce00/limits
2025-07-06T00:46:50.0886177Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0887533Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0888368Z         BadRequestDetail: 
2025-07-06T00:46:50.0888998Z --- FAIL: TestAccBackupCompliancePolicy_basic (35.20s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL a minute

### Error 2025-07-10T13:08:52+00:00
```
2025-07-10T13:08:52.8104602Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-10T13:08:52.8116829Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-10T13:08:52.8228741Z === NAME  TestAccBackupCompliancePolicy_basic
2025-07-10T13:08:52.8229559Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:08:52.8230127Z         
2025-07-10T13:08:52.8230569Z         Error: error when getting project properties after create
2025-07-10T13:08:52.8230970Z         
2025-07-10T13:08:52.8231331Z           with mongodbatlas_project.test,
2025-07-10T13:08:52.8231992Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:52.8232607Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:52.8232969Z         
2025-07-10T13:08:52.8233478Z         error getting project (686fbafffd583001f9eeb3cb): error getting project's
2025-07-10T13:08:52.8234011Z         limits (686fbafffd583001f9eeb3cb):
2025-07-10T13:08:52.8234664Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafffd583001f9eeb3cb/limits
2025-07-10T13:08:52.8235407Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:52.8236197Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:52.8236659Z         BadRequestDetail: 
2025-07-10T13:08:52.8237025Z --- FAIL: TestAccBackupCompliancePolicy_basic (97.60s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13

### Error 2025-07-13T00:45:42+00:00
```
2025-07-13T00:45:42.5539670Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-13T00:45:42.5547958Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-13T00:45:42.5588420Z === NAME  TestAccBackupCompliancePolicy_basic
2025-07-13T00:45:42.5589223Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:45:42.5589780Z         
2025-07-13T00:45:42.5590223Z         Error: error when getting project properties after create
2025-07-13T00:45:42.5590619Z         
2025-07-13T00:45:42.5590980Z           with mongodbatlas_project.test,
2025-07-13T00:45:42.5591671Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:45:42.5592287Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:45:42.5592659Z         
2025-07-13T00:45:42.5593170Z         error getting project (6872fe89006d8d55bbaa1e0f): error getting project's
2025-07-13T00:45:42.5593822Z         limits (6872fe89006d8d55bbaa1e0f):
2025-07-13T00:45:42.5594700Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe89006d8d55bbaa1e0f/limits
2025-07-13T00:45:42.5595461Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:45:42.5596113Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:45:42.5596576Z         BadRequestDetail: 
2025-07-13T00:45:42.5596949Z --- FAIL: TestAccBackupCompliancePolicy_basic (95.33s)
```

- 2025-07-14

### Error 2025-07-14T03:31:03+00:00
```
2025-07-14T03:31:03.4548308Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-14T03:31:03.4569810Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-14T03:31:03.4596130Z   
2025-07-14T03:31:03.4684158Z === NAME  TestAccBackupCompliancePolicy_basic
2025-07-14T03:31:03.4684950Z     resource_backup_compliance_policy_test.go:24: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:03.4685554Z         
2025-07-14T03:31:03.4688032Z         Error: error disabling the Backup Compliance Policy: 68744fc2d81a2d4bb4ea37df: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc2d81a2d4bb4ea37df/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T03:31:03.4689670Z         
2025-07-14T03:31:03.4689993Z --- FAIL: TestAccBackupCompliancePolicy_basic (66.55s)
```

- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20

### Error 2025-07-20T00:34:05+00:00
```
2025-07-20T00:34:05.9408421Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-20T00:34:05.9424510Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-20T00:34:05.9450997Z    test_working_directory=/tmp/plugintest1338520170
2025-07-20T00:34:05.9476776Z === NAME  TestAccBackupCompliancePolicy_basic
2025-07-20T00:34:05.9477862Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:34:05.9478871Z         
2025-07-20T00:34:05.9479747Z         Error: error when getting project properties after create
2025-07-20T00:34:05.9480240Z         
2025-07-20T00:34:05.9480610Z           with mongodbatlas_project.test,
2025-07-20T00:34:05.9481301Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:34:05.9481927Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:34:05.9482303Z         
2025-07-20T00:34:05.9482827Z         error getting project (687c3935823af9166ef91099): error getting project's
2025-07-20T00:34:05.9483368Z         limits (687c3935823af9166ef91099):
2025-07-20T00:34:05.9484029Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3935823af9166ef91099/limits
2025-07-20T00:34:05.9484958Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:34:05.9485670Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:34:05.9486149Z         BadRequestDetail: 
2025-07-20T00:34:05.9486536Z --- FAIL: TestAccBackupCompliancePolicy_basic (33.04s)
```

- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute