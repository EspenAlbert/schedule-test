# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c7ed444485797b22fc2/limits | qa | flaky_500 | 37.08s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b084d444485797b5f66b/limits | qa | flaky_500 | 33.01s
[2025-09-21 00:32](#error-2025-09-21t0032220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf472b5ccc8c441718b9d6/limits | qa | flaky_500 | 37.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 18 seconds
- 2025-09-04 PASS 25 seconds
- 2025-09-05 PASS 26 seconds
- 2025-09-06 PASS 25 seconds
- 2025-09-07 PASS 20 seconds
- 2025-09-08
  - PASS 28 seconds
  - PASS 59 seconds
  - PASS 25 seconds
- 2025-09-09 PASS 30 seconds
- 2025-09-10 PASS 25 seconds
- 2025-09-11 PASS 24 seconds
- 2025-09-12 PASS 19 seconds
- 2025-09-13 PASS 31 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4615227Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-09-14T00:31:20.4617062Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-09-14T00:31:20.4685406Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-09-14T00:31:20.4685957Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-09-14T00:31:20.4686367Z         
2025-09-14T00:31:20.4686729Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4687047Z         
2025-09-14T00:31:20.4687334Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4687996Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4688516Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4688800Z         
2025-09-14T00:31:20.4689222Z         error getting project (68c60c7ed444485797b22fc2): error getting project's
2025-09-14T00:31:20.4689661Z         limits (68c60c7ed444485797b22fc2):
2025-09-14T00:31:20.4690207Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c7ed444485797b22fc2/limits
2025-09-14T00:31:20.4690854Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4691519Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4691900Z         BadRequestDetail: 
2025-09-14T00:31:20.4692204Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (37.79s)
```

- 2025-09-15
  - PASS 24 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2188051Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-09-15T06:23:28.2189916Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-09-15T06:23:28.2203817Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-09-15T06:23:28.2204391Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2025-09-15T06:23:28.2204811Z         
2025-09-15T06:23:28.2205225Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2205548Z         
2025-09-15T06:23:28.2205842Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2206433Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2206976Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2207263Z         
2025-09-15T06:23:28.2207702Z         error getting project (68c7b084d444485797b5f66b): error getting project's
2025-09-15T06:23:28.2208153Z         limits (68c7b084d444485797b5f66b):
2025-09-15T06:23:28.2208732Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b084d444485797b5f66b/limits
2025-09-15T06:23:28.2209392Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2209973Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2210361Z         BadRequestDetail: 
2025-09-15T06:23:28.2210689Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (33.06s)
```

- 2025-09-16 PASS 26 seconds
- 2025-09-17 PASS 43 seconds
- 2025-09-18 PASS 27 seconds
- 2025-09-19 PASS 27 seconds
- 2025-09-20 PASS 29 seconds
- 2025-09-21

### Error 2025-09-21T00:32:22+00:00
```
2025-09-21T00:32:22.2219702Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2025-09-21T00:32:22.2221745Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2025-09-21T00:32:22.2235474Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2025-09-21T00:32:22.2236272Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:32:22.2236747Z         
2025-09-21T00:32:22.2237120Z         Error: error when getting project properties after create
2025-09-21T00:32:22.2237484Z         
2025-09-21T00:32:22.2237775Z           with mongodbatlas_project.test,
2025-09-21T00:32:22.2238363Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:32:22.2238907Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:32:22.2239192Z         
2025-09-21T00:32:22.2239630Z         error getting project (68cf472b5ccc8c441718b9d6): error getting project's
2025-09-21T00:32:22.2240084Z         limits (68cf472b5ccc8c441718b9d6):
2025-09-21T00:32:22.2240658Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf472b5ccc8c441718b9d6/limits
2025-09-21T00:32:22.2241327Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:32:22.2241897Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:32:22.2242277Z         BadRequestDetail: 
2025-09-21T00:32:22.2259958Z   
2025-09-21T00:32:22.2282270Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (37.95s)
```

- 2025-09-22 PASS 31 seconds
- 2025-09-23 PASS 22 seconds
- 2025-09-24 PASS 27 seconds
- 2025-09-25 PASS 28 seconds
- 2025-09-26 PASS 28 seconds
- 2025-09-27 PASS 29 seconds
- 2025-09-28 PASS 23 seconds
- 2025-09-29 PASS 24 seconds
- 2025-09-30
  - PASS 24 seconds
  - PASS 27 seconds
  - PASS 24 seconds
- 2025-10-01
  - PASS 25 seconds
  - PASS 24 seconds
  - PASS 28 seconds
  - PASS 24 seconds
  - PASS 24 seconds
  - PASS 19 seconds
  - PASS 17 seconds
  - PASS 18 seconds
  - PASS 24 seconds
- 2025-10-02 PASS 28 seconds