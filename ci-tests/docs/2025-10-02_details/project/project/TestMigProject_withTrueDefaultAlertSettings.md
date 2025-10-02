# project/project/TestMigProject_withTrueDefaultAlertSettings Test Details
# Found 40 TestRuns in dev, qa from 2025-09-04 to 2025-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 4)
Success rate: 90.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22cdf5af52d2d4d9053/limits | qa | flaky_500 | 34.08s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb71411d835e95b6158/limits | qa | flaky_500 | 35.07s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0bad444485797b60c14/limits | qa | flaky_500 | 36.04s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474abd1cb41a3e706d5e/limits | qa | flaky_500 | 35.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04 PASS 11 seconds
- 2025-09-05: MISSING
- 2025-09-06 PASS 13 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4207059Z === RUN   TestMigProject_withTrueDefaultAlertSettings
2025-09-07T00:39:14.4253033Z === CONT  TestMigProject_withTrueDefaultAlertSettings
2025-09-07T00:39:14.4310498Z === NAME  TestMigProject_withTrueDefaultAlertSettings
2025-09-07T00:39:14.4311063Z     resource_project_migration_test.go:88: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:39:14.4311471Z         
2025-09-07T00:39:14.4311985Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4312305Z         
2025-09-07T00:39:14.4312605Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4313185Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4313716Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4314004Z         
2025-09-07T00:39:14.4314451Z         error getting project (68bcd22cdf5af52d2d4d9053): error getting project's
2025-09-07T00:39:14.4314902Z         limits (68bcd22cdf5af52d2d4d9053):
2025-09-07T00:39:14.4315464Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22cdf5af52d2d4d9053/limits
2025-09-07T00:39:14.4316127Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4316692Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4317073Z         BadRequestDetail: 
2025-09-07T00:39:14.4329399Z   
2025-09-07T00:39:14.4336717Z --- FAIL: TestMigProject_withTrueDefaultAlertSettings (34.77s)
```

- 2025-09-08
  - PASS 11 seconds
  - PASS 16 seconds
  - PASS 11 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 11 seconds
- 2025-09-11 PASS 13 seconds
- 2025-09-12 PASS 16 seconds
- 2025-09-13 PASS 14 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9726399Z === RUN   TestMigProject_withTrueDefaultAlertSettings
2025-09-14T01:13:04.9778887Z === CONT  TestMigProject_withTrueDefaultAlertSettings
2025-09-14T01:13:04.9923523Z === NAME  TestMigProject_withTrueDefaultAlertSettings
2025-09-14T01:13:04.9924125Z     resource_project_migration_test.go:88: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:04.9924682Z         
2025-09-14T01:13:04.9925070Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9925446Z         
2025-09-14T01:13:04.9925747Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9926358Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9926925Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9927237Z         
2025-09-14T01:13:04.9927717Z         error getting project (68c60cb71411d835e95b6158): error getting project's
2025-09-14T01:13:04.9928201Z         limits (68c60cb71411d835e95b6158):
2025-09-14T01:13:04.9928795Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb71411d835e95b6158/limits
2025-09-14T01:13:04.9929493Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9930559Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9931001Z         BadRequestDetail: 
2025-09-14T01:13:04.9946400Z   
2025-09-14T01:13:04.9986743Z --- FAIL: TestMigProject_withTrueDefaultAlertSettings (35.67s)
```

- 2025-09-15
  - PASS 10 seconds
  - FAIL 36 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6543541Z === RUN   TestMigProject_withTrueDefaultAlertSettings
2025-09-15T07:06:19.6585854Z === CONT  TestMigProject_withTrueDefaultAlertSettings
2025-09-15T07:06:19.6757968Z === NAME  TestMigProject_withTrueDefaultAlertSettings
2025-09-15T07:06:19.6758537Z     resource_project_migration_test.go:88: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6758953Z         
2025-09-15T07:06:19.6759337Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6759677Z         
2025-09-15T07:06:19.6759979Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6760569Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6761107Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6761536Z         
2025-09-15T07:06:19.6761988Z         error getting project (68c7b0bad444485797b60c14): error getting project's
2025-09-15T07:06:19.6762672Z         limits (68c7b0bad444485797b60c14):
2025-09-15T07:06:19.6763273Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0bad444485797b60c14/limits
2025-09-15T07:06:19.6764077Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6764660Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6765064Z         BadRequestDetail: 
2025-09-15T07:06:19.6772611Z   
2025-09-15T07:06:19.6779763Z --- FAIL: TestMigProject_withTrueDefaultAlertSettings (36.36s)
```

- 2025-09-16 PASS 14 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 14 seconds
- 2025-09-19 PASS 15 seconds
- 2025-09-20 PASS 13 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6452761Z === RUN   TestMigProject_withTrueDefaultAlertSettings
2025-09-21T00:45:18.6491769Z === CONT  TestMigProject_withTrueDefaultAlertSettings
2025-09-21T00:45:18.6600823Z === NAME  TestMigProject_withTrueDefaultAlertSettings
2025-09-21T00:45:18.6601397Z     resource_project_migration_test.go:88: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:45:18.6601804Z         
2025-09-21T00:45:18.6602171Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6602488Z         
2025-09-21T00:45:18.6602781Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6603361Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6603898Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6604174Z         
2025-09-21T00:45:18.6604609Z         error getting project (68cf474abd1cb41a3e706d5e): error getting project's
2025-09-21T00:45:18.6605068Z         limits (68cf474abd1cb41a3e706d5e):
2025-09-21T00:45:18.6605934Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474abd1cb41a3e706d5e/limits
2025-09-21T00:45:18.6606681Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6607376Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6607763Z         BadRequestDetail: 
2025-09-21T00:45:18.6608529Z --- FAIL: TestMigProject_withTrueDefaultAlertSettings (35.47s)
```

- 2025-09-22 PASS 14 seconds
- 2025-09-23 PASS 13 seconds
- 2025-09-24 PASS 14 seconds
- 2025-09-25 PASS 15 seconds
- 2025-09-26 PASS 12 seconds
- 2025-09-27 PASS 15 seconds
- 2025-09-28 PASS 14 seconds
- 2025-09-29 PASS 11 seconds
- 2025-09-30
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 11 seconds
- 2025-10-01
  - PASS 13 seconds
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 12 seconds
- 2025-10-02 PASS 14 seconds