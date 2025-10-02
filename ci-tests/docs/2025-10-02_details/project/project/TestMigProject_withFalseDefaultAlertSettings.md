# project/project/TestMigProject_withFalseDefaultAlertSettings Test Details
# Found 40 TestRuns in dev, qa from 2025-09-04 to 2025-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 4)
Success rate: 90.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22cdf5af52d2d4d9054/limits | qa | flaky_500 | 35.00s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb71411d835e95b61e7/limits | qa | flaky_500 | 35.06s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0bafe60767b7f9b3b2c/limits | qa | flaky_500 | 36.04s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474abd1cb41a3e706d01/limits | qa | flaky_500 | 35.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04 PASS 10 seconds
- 2025-09-05: MISSING
- 2025-09-06 PASS 13 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4206330Z === RUN   TestMigProject_withFalseDefaultAlertSettings
2025-09-07T00:39:14.4249099Z === CONT  TestMigProject_withFalseDefaultAlertSettings
2025-09-07T00:39:14.4344437Z === NAME  TestMigProject_withFalseDefaultAlertSettings
2025-09-07T00:39:14.4344998Z     resource_project_migration_test.go:84: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:39:14.4345404Z         
2025-09-07T00:39:14.4345775Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4346101Z         
2025-09-07T00:39:14.4346391Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4347090Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4347627Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4347914Z         
2025-09-07T00:39:14.4348351Z         error getting project (68bcd22cdf5af52d2d4d9054): error getting project's
2025-09-07T00:39:14.4348799Z         limits (68bcd22cdf5af52d2d4d9054):
2025-09-07T00:39:14.4349370Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22cdf5af52d2d4d9054/limits
2025-09-07T00:39:14.4350036Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4350773Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4351151Z         BadRequestDetail: 
2025-09-07T00:39:14.4351489Z --- FAIL: TestMigProject_withFalseDefaultAlertSettings (35.03s)
```

- 2025-09-08
  - PASS 12 seconds
  - PASS 18 seconds
  - PASS 10 seconds
- 2025-09-09 PASS 13 seconds
- 2025-09-10 PASS 11 seconds
- 2025-09-11 PASS 13 seconds
- 2025-09-12 PASS 17 seconds
- 2025-09-13 PASS 12 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9725010Z === RUN   TestMigProject_withFalseDefaultAlertSettings
2025-09-14T01:13:04.9771627Z === CONT  TestMigProject_withFalseDefaultAlertSettings
2025-09-14T01:13:04.9907962Z === NAME  TestMigProject_withFalseDefaultAlertSettings
2025-09-14T01:13:04.9908569Z     resource_project_migration_test.go:84: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:04.9909012Z         
2025-09-14T01:13:04.9909406Z         Error: error when getting project properties after create
2025-09-14T01:13:04.9909749Z         
2025-09-14T01:13:04.9910045Z           with mongodbatlas_project.test,
2025-09-14T01:13:04.9910674Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:04.9911250Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:04.9911556Z         
2025-09-14T01:13:04.9912016Z         error getting project (68c60cb71411d835e95b61e7): error getting project's
2025-09-14T01:13:04.9912495Z         limits (68c60cb71411d835e95b61e7):
2025-09-14T01:13:04.9913092Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb71411d835e95b61e7/limits
2025-09-14T01:13:04.9913791Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:04.9914394Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:04.9914912Z         BadRequestDetail: 
2025-09-14T01:13:04.9923108Z   
2025-09-14T01:13:04.9986262Z --- FAIL: TestMigProject_withFalseDefaultAlertSettings (35.65s)
```

- 2025-09-15
  - PASS 12 seconds
  - FAIL 36 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6542784Z === RUN   TestMigProject_withFalseDefaultAlertSettings
2025-09-15T07:06:19.6581011Z === CONT  TestMigProject_withFalseDefaultAlertSettings
2025-09-15T07:06:19.6772872Z === NAME  TestMigProject_withFalseDefaultAlertSettings
2025-09-15T07:06:19.6773437Z     resource_project_migration_test.go:84: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6773859Z         
2025-09-15T07:06:19.6774241Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6774571Z         
2025-09-15T07:06:19.6774875Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6775464Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6776013Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6776303Z         
2025-09-15T07:06:19.6776756Z         error getting project (68c7b0bafe60767b7f9b3b2c): error getting project's
2025-09-15T07:06:19.6777216Z         limits (68c7b0bafe60767b7f9b3b2c):
2025-09-15T07:06:19.6777791Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0bafe60767b7f9b3b2c/limits
2025-09-15T07:06:19.6778457Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6779037Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6779429Z         BadRequestDetail: 
2025-09-15T07:06:19.6780214Z --- FAIL: TestMigProject_withFalseDefaultAlertSettings (36.41s)
```

- 2025-09-16 PASS 15 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 13 seconds
- 2025-09-20 PASS 12 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6451389Z === RUN   TestMigProject_withFalseDefaultAlertSettings
2025-09-21T00:45:18.6486472Z === CONT  TestMigProject_withFalseDefaultAlertSettings
2025-09-21T00:45:18.6586754Z === NAME  TestMigProject_withFalseDefaultAlertSettings
2025-09-21T00:45:18.6587313Z     resource_project_migration_test.go:84: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:45:18.6587723Z         
2025-09-21T00:45:18.6588101Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6588421Z         
2025-09-21T00:45:18.6588712Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6589294Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6589837Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6590113Z         
2025-09-21T00:45:18.6590549Z         error getting project (68cf474abd1cb41a3e706d01): error getting project's
2025-09-21T00:45:18.6591006Z         limits (68cf474abd1cb41a3e706d01):
2025-09-21T00:45:18.6591566Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474abd1cb41a3e706d01/limits
2025-09-21T00:45:18.6592222Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6592786Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6593175Z         BadRequestDetail: 
2025-09-21T00:45:18.6599976Z    test_name=TestMigProject_withTrueDefaultAlertSettings test_terraform_path=/home/runner/work/_temp/89a6487d-0ea1-444b-97d9-454f98bc7002/terraform test_working_directory=/tmp/plugintest2403605173
2025-09-21T00:45:18.6608098Z --- FAIL: TestMigProject_withFalseDefaultAlertSettings (35.40s)
```

- 2025-09-22 PASS 13 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 14 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 12 seconds
- 2025-09-27 PASS 13 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 12 seconds
- 2025-09-30
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 11 seconds
- 2025-10-01
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 14 seconds
- 2025-10-02 PASS 13 seconds