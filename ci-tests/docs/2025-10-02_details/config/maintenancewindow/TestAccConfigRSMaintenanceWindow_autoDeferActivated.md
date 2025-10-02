# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c7e1411d835e95b4d07/limits | qa | flaky_500 | 34.01s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b084fe60767b7f9b2b88/limits | qa | flaky_500 | 33.08s
[2025-09-21 00:32](#error-2025-09-21t0032220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf472b5ccc8c441718b9d7/limits | qa | flaky_500 | 36.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07 PASS 8 seconds
- 2025-09-08
  - PASS 13 seconds
  - PASS 38 seconds
  - PASS 10 seconds
- 2025-09-09 PASS 11 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 8 seconds
- 2025-09-12 PASS 10 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4615931Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-14T00:31:20.4617431Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-14T00:31:20.4665221Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-14T00:31:20.4665806Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:31:20.4666217Z         
2025-09-14T00:31:20.4666578Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4666900Z         
2025-09-14T00:31:20.4667186Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4667952Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4668477Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4668763Z         
2025-09-14T00:31:20.4669328Z         error getting project (68c60c7e1411d835e95b4d07): error getting project's
2025-09-14T00:31:20.4669775Z         limits (68c60c7e1411d835e95b4d07):
2025-09-14T00:31:20.4670332Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c7e1411d835e95b4d07/limits
2025-09-14T00:31:20.4671189Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4671748Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4672119Z         BadRequestDetail: 
2025-09-14T00:31:20.4672472Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (34.14s)
```

- 2025-09-15
  - PASS 8 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2188770Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-15T06:23:28.2190291Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-15T06:23:28.2224165Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-15T06:23:28.2224767Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:23:28.2225188Z         
2025-09-15T06:23:28.2225559Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2225881Z         
2025-09-15T06:23:28.2226187Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2226770Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2227305Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2227597Z         
2025-09-15T06:23:28.2228043Z         error getting project (68c7b084fe60767b7f9b2b88): error getting project's
2025-09-15T06:23:28.2228493Z         limits (68c7b084fe60767b7f9b2b88):
2025-09-15T06:23:28.2229058Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b084fe60767b7f9b2b88/limits
2025-09-15T06:23:28.2229724Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2230295Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2230679Z         BadRequestDetail: 
2025-09-15T06:23:28.2231047Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (33.79s)
```

- 2025-09-16 PASS 12 seconds
- 2025-09-17 PASS 16 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 8 seconds
- 2025-09-20 PASS 11 seconds
- 2025-09-21

### Error 2025-09-21T00:32:22+00:00
```
2025-09-21T00:32:22.2220399Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-21T00:32:22.2222456Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-21T00:32:22.2260227Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2025-09-21T00:32:22.2260838Z     resource_maintenance_window_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-09-21T00:32:22.2261258Z         
2025-09-21T00:32:22.2261645Z         Error: error when getting project properties after create
2025-09-21T00:32:22.2261970Z         
2025-09-21T00:32:22.2262261Z           with mongodbatlas_project.test,
2025-09-21T00:32:22.2262849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:32:22.2263392Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:32:22.2263675Z         
2025-09-21T00:32:22.2264116Z         error getting project (68cf472b5ccc8c441718b9d7): error getting project's
2025-09-21T00:32:22.2264566Z         limits (68cf472b5ccc8c441718b9d7):
2025-09-21T00:32:22.2265137Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf472b5ccc8c441718b9d7/limits
2025-09-21T00:32:22.2265890Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:32:22.2266581Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:32:22.2266974Z         BadRequestDetail: 
2025-09-21T00:32:22.2273869Z    test_name=TestMigConfigMaintenanceWindow_basic test_terraform_path=/home/runner/work/_temp/649c85c9-9a84-4d4b-bba1-e3f26d65ebf2/terraform test_working_directory=/tmp/plugintest377475303
2025-09-21T00:32:22.2281819Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (36.88s)
```

- 2025-09-22 PASS 9 seconds
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 11 seconds
- 2025-09-26 PASS 11 seconds
- 2025-09-27 PASS 11 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 14 seconds