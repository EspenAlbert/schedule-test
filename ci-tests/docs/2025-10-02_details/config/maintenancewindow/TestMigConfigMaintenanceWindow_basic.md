# config/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1ef8704811492b55c37/limits | qa | flaky_500 | 34.09s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c7f1411d835e95b4efc/limits | qa | flaky_500 | 34.02s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b086d444485797b5f766/limits | qa | flaky_500 | 35.09s
[2025-09-21 00:32](#error-2025-09-21t0032220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf472e5ccc8c441718bbdc/limits | qa | flaky_500 | 38.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 17 seconds
- 2025-09-04 PASS 25 seconds
- 2025-09-05 PASS 26 seconds
- 2025-09-06 PASS 22 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3753579Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-09-07T00:31:52.3758109Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-09-07T00:31:52.3767360Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-09-07T00:31:52.3768080Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:31:52.3768661Z         
2025-09-07T00:31:52.3769036Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3769359Z         
2025-09-07T00:31:52.3769648Z           with mongodbatlas_project.test,
2025-09-07T00:31:52.3770221Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-07T00:31:52.3770753Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:31:52.3771036Z         
2025-09-07T00:31:52.3771465Z         error getting project (68bcd1ef8704811492b55c37): error getting project's
2025-09-07T00:31:52.3772029Z         limits (68bcd1ef8704811492b55c37):
2025-09-07T00:31:52.3772581Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1ef8704811492b55c37/limits
2025-09-07T00:31:52.3773240Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3773798Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3774184Z         BadRequestDetail: 
2025-09-07T00:31:52.3774487Z --- FAIL: TestMigConfigMaintenanceWindow_basic (34.92s)
```

- 2025-09-08
  - PASS 23 seconds
  - PASS 36 seconds
  - PASS 25 seconds
- 2025-09-09 PASS 26 seconds
- 2025-09-10 PASS 24 seconds
- 2025-09-11 PASS 24 seconds
- 2025-09-12 PASS 19 seconds
- 2025-09-13 PASS 26 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4614566Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-09-14T00:31:20.4617893Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-09-14T00:31:20.4630181Z    test_name=TestAccConfigDSMaintenanceWindow_basic
2025-09-14T00:31:20.4645948Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-09-14T00:31:20.4646700Z     resource_maintenance_window_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:31:20.4647157Z         
2025-09-14T00:31:20.4647614Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4647936Z         
2025-09-14T00:31:20.4648221Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4648900Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4649422Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4649701Z         
2025-09-14T00:31:20.4650125Z         error getting project (68c60c7f1411d835e95b4efc): error getting project's
2025-09-14T00:31:20.4650576Z         limits (68c60c7f1411d835e95b4efc):
2025-09-14T00:31:20.4651132Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c7f1411d835e95b4efc/limits
2025-09-14T00:31:20.4651773Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4652334Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4652707Z         BadRequestDetail: 
2025-09-14T00:31:20.4664952Z   
2025-09-14T00:31:20.4672912Z --- FAIL: TestMigConfigMaintenanceWindow_basic (34.24s)
```

- 2025-09-15
  - PASS 22 seconds
  - FAIL 35 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2187379Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-09-15T06:23:28.2190666Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-09-15T06:23:28.2203152Z    test_name=TestAccConfigRSMaintenanceWindow_basic test_terraform_path=/home/runner/work/_temp/daaaf918-dc0f-4c8a-9f19-644c2f5cfb8b/terraform
2025-09-15T06:23:28.2258842Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-09-15T06:23:28.2259446Z     resource_maintenance_window_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:23:28.2259896Z         
2025-09-15T06:23:28.2260277Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2260602Z         
2025-09-15T06:23:28.2260900Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2261490Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2262026Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2262404Z         
2025-09-15T06:23:28.2262842Z         error getting project (68c7b086d444485797b5f766): error getting project's
2025-09-15T06:23:28.2263295Z         limits (68c7b086d444485797b5f766):
2025-09-15T06:23:28.2263856Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b086d444485797b5f766/limits
2025-09-15T06:23:28.2264515Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2265204Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2265603Z         BadRequestDetail: 
2025-09-15T06:23:28.2265912Z --- FAIL: TestMigConfigMaintenanceWindow_basic (35.87s)
```

- 2025-09-16 PASS 26 seconds
- 2025-09-17 PASS 27 seconds
- 2025-09-18 PASS 24 seconds
- 2025-09-19 PASS 26 seconds
- 2025-09-20 PASS 24 seconds
- 2025-09-21

### Error 2025-09-21T00:32:22+00:00
```
2025-09-21T00:32:22.2219049Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-09-21T00:32:22.2222081Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-09-21T00:32:22.2274676Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-09-21T00:32:22.2275355Z     resource_maintenance_window_migration_test.go:22: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:32:22.2275966Z         
2025-09-21T00:32:22.2276339Z         Error: error when getting project properties after create
2025-09-21T00:32:22.2276668Z         
2025-09-21T00:32:22.2276960Z           with mongodbatlas_project.test,
2025-09-21T00:32:22.2277556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:32:22.2278093Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:32:22.2278384Z         
2025-09-21T00:32:22.2278826Z         error getting project (68cf472e5ccc8c441718bbdc): error getting project's
2025-09-21T00:32:22.2279276Z         limits (68cf472e5ccc8c441718bbdc):
2025-09-21T00:32:22.2279839Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf472e5ccc8c441718bbdc/limits
2025-09-21T00:32:22.2280505Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:32:22.2281076Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:32:22.2281459Z         BadRequestDetail: 
2025-09-21T00:32:22.2282662Z --- FAIL: TestMigConfigMaintenanceWindow_basic (38.09s)
```

- 2025-09-22 PASS 28 seconds
- 2025-09-23 PASS 23 seconds
- 2025-09-24 PASS 26 seconds
- 2025-09-25 PASS 24 seconds
- 2025-09-26 PASS 25 seconds
- 2025-09-27 PASS 24 seconds
- 2025-09-28 PASS 24 seconds
- 2025-09-29 PASS 25 seconds
- 2025-09-30
  - PASS 24 seconds
  - PASS 26 seconds
  - PASS 22 seconds
- 2025-10-01
  - PASS 24 seconds
  - PASS 24 seconds
  - PASS 27 seconds
  - PASS 25 seconds
  - PASS 25 seconds
  - PASS 19 seconds
  - PASS 17 seconds
  - PASS 15 seconds
  - PASS 26 seconds
- 2025-10-02 PASS 26 seconds