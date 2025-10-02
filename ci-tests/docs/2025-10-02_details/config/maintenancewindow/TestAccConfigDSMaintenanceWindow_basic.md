# config/maintenancewindow/TestAccConfigDSMaintenanceWindow_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c7e1411d835e95b4d06/limits | qa | flaky_500 | 32.09s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b084fe60767b7f9b2b87/limits | qa | flaky_500 | 34.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 12 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 10 seconds
- 2025-09-07 PASS 7 seconds
- 2025-09-08
  - PASS 12 seconds
  - PASS 37 seconds
  - PASS 13 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 11 seconds
- 2025-09-11 PASS 10 seconds
- 2025-09-12 PASS 9 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4613892Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-09-14T00:31:20.4616729Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-09-14T00:31:20.4630530Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-09-14T00:31:20.4631404Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:31:20.4632251Z         
2025-09-14T00:31:20.4632690Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4633015Z         
2025-09-14T00:31:20.4633304Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4633878Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4634402Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4634795Z         
2025-09-14T00:31:20.4635307Z         error getting project (68c60c7e1411d835e95b4d06): error getting project's
2025-09-14T00:31:20.4635749Z         limits (68c60c7e1411d835e95b4d06):
2025-09-14T00:31:20.4636309Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c7e1411d835e95b4d06/limits
2025-09-14T00:31:20.4636956Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4637638Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4638024Z         BadRequestDetail: 
2025-09-14T00:31:20.4638335Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (32.94s)
```

- 2025-09-15
  - PASS 9 seconds
  - FAIL 34 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2186684Z === RUN   TestAccConfigDSMaintenanceWindow_basic
2025-09-15T06:23:28.2189570Z === CONT  TestAccConfigDSMaintenanceWindow_basic
2025-09-15T06:23:28.2244165Z === NAME  TestAccConfigDSMaintenanceWindow_basic
2025-09-15T06:23:28.2244836Z     data_source_maintenance_window_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:23:28.2245267Z         
2025-09-15T06:23:28.2245647Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2245966Z         
2025-09-15T06:23:28.2246260Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2246852Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2247385Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2247672Z         
2025-09-15T06:23:28.2248113Z         error getting project (68c7b084fe60767b7f9b2b87): error getting project's
2025-09-15T06:23:28.2248572Z         limits (68c7b084fe60767b7f9b2b87):
2025-09-15T06:23:28.2249139Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b084fe60767b7f9b2b87/limits
2025-09-15T06:23:28.2249797Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2250381Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2250773Z         BadRequestDetail: 
2025-09-15T06:23:28.2251092Z --- FAIL: TestAccConfigDSMaintenanceWindow_basic (34.28s)
```

- 2025-09-16 PASS 11 seconds
- 2025-09-17 PASS 15 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 13 seconds
- 2025-09-21 PASS 9 seconds
- 2025-09-22 PASS 11 seconds
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 11 seconds
- 2025-09-26 PASS 11 seconds
- 2025-09-27 PASS 14 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29 PASS 10 seconds
- 2025-09-30
  - PASS 8 seconds
  - PASS 14 seconds
  - PASS 8 seconds
- 2025-10-01
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-10-02 PASS 13 seconds