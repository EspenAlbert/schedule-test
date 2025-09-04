# config/maintenancewindow/TestMigConfigMaintenanceWindow_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:35](#error-2025-08-10t0035100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8f0dacc1950586dd7dd/limits | qa | flaky_500 | 48.07s
[2025-08-20 14:01](#error-2025-08-20t1401040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4be5734606989a354f7/limits | qa | flaky_500 | 44.05s
[2025-08-24 00:32](#error-2025-08-24t0032340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d814192cd1cc589f18c/limits | qa | flaky_500 | 35.10s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.06s
[2025-09-01 05:59](#error-2025-09-01t0559570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 8.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 25 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 19 seconds
- 2025-08-09 PASS 24 seconds
- 2025-08-10

### Error 2025-08-10T00:35:10+00:00
```
2025-08-10T00:35:10.2591960Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-08-10T00:35:10.2597549Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-08-10T00:35:10.2622630Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-08-10T00:35:10.2623995Z     resource_maintenance_window_migration_test.go:23: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-10T00:35:10.2624859Z         
2025-08-10T00:35:10.2625719Z         Error: error when getting project properties after create
2025-08-10T00:35:10.2626296Z         
2025-08-10T00:35:10.2626806Z           with mongodbatlas_project.test,
2025-08-10T00:35:10.2627857Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-10T00:35:10.2628804Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-10T00:35:10.2629288Z         
2025-08-10T00:35:10.2630056Z         error getting project (6897e8f0dacc1950586dd7dd): error getting project's
2025-08-10T00:35:10.2630825Z         limits (6897e8f0dacc1950586dd7dd):
2025-08-10T00:35:10.2631791Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8f0dacc1950586dd7dd/limits
2025-08-10T00:35:10.2632919Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T00:35:10.2633886Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T00:35:10.2634542Z         BadRequestDetail: 
2025-08-10T00:35:10.2635263Z --- FAIL: TestMigConfigMaintenanceWindow_basic (48.74s)
```

- 2025-08-11 PASS 24 seconds
- 2025-08-12 PASS 25 seconds
- 2025-08-13 PASS 23 seconds
- 2025-08-14 PASS 24 seconds
- 2025-08-15 PASS 18 seconds
- 2025-08-16 PASS 25 seconds
- 2025-08-17 PASS 52 seconds
- 2025-08-18 PASS 24 seconds
- 2025-08-19 PASS 26 seconds
- 2025-08-20
  - PASS 24 seconds
  - FAIL 44 seconds

### Error 2025-08-20T14:01:04+00:00
```
2025-08-20T14:01:04.5181991Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-08-20T14:01:04.5189745Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-08-20T14:01:04.5289570Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-08-20T14:01:04.5290911Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:01:04.5291865Z         
2025-08-20T14:01:04.5292592Z         Error: error when getting project properties after create
2025-08-20T14:01:04.5306072Z         
2025-08-20T14:01:04.5306704Z           with mongodbatlas_project.test,
2025-08-20T14:01:04.5307822Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-20T14:01:04.5309082Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-20T14:01:04.5309626Z         
2025-08-20T14:01:04.5310463Z         error getting project (68a5d4be5734606989a354f7): error getting project's
2025-08-20T14:01:04.5311324Z         limits (68a5d4be5734606989a354f7):
2025-08-20T14:01:04.5312392Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4be5734606989a354f7/limits
2025-08-20T14:01:04.5313804Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:01:04.5314879Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:01:04.5315594Z         BadRequestDetail: 
2025-08-20T14:01:04.5316135Z --- FAIL: TestMigConfigMaintenanceWindow_basic (44.53s)
```

- 2025-08-21 PASS 25 seconds
- 2025-08-22 PASS 22 seconds
- 2025-08-23 PASS 25 seconds
- 2025-08-24

### Error 2025-08-24T00:32:34+00:00
```
2025-08-24T00:32:34.9037451Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-08-24T00:32:34.9052128Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-08-24T00:32:34.9137582Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-08-24T00:32:34.9138193Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:34.9138644Z         
2025-08-24T00:32:34.9139018Z         Error: error when getting project properties after create
2025-08-24T00:32:34.9139352Z         
2025-08-24T00:32:34.9139642Z           with mongodbatlas_project.test,
2025-08-24T00:32:34.9140656Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:34.9141632Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:34.9142148Z         
2025-08-24T00:32:34.9142962Z         error getting project (68aa5d814192cd1cc589f18c): error getting project's
2025-08-24T00:32:34.9143784Z         limits (68aa5d814192cd1cc589f18c):
2025-08-24T00:32:34.9144976Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d814192cd1cc589f18c/limits
2025-08-24T00:32:34.9146196Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:34.9147262Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:34.9147947Z         BadRequestDetail: 
2025-08-24T00:32:34.9148474Z --- FAIL: TestMigConfigMaintenanceWindow_basic (35.99s)
```

- 2025-08-25 PASS 25 seconds
- 2025-08-26 PASS 21 seconds
- 2025-08-27 PASS 17 seconds
- 2025-08-28 PASS 15 seconds
- 2025-08-29 PASS 25 seconds
- 2025-08-30 PASS 25 seconds
- 2025-08-31 PASS 37 seconds
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1914949Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-09-01T00:31:13.1922521Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-09-01T00:31:13.2025061Z   
2025-09-01T00:31:13.2595522Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-09-01T00:31:13.2596658Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:31:13.2597493Z         
2025-09-01T00:31:13.2598244Z         Error: error creating project: test-acc-tf-p-2351119617725193655
2025-09-01T00:31:13.2598911Z         
2025-09-01T00:31:13.2599421Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.2690844Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.2691883Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.2692444Z         
2025-09-01T00:31:13.2693373Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.2694650Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.2695862Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.2697092Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.2697846Z         BadRequestDetail: 
2025-09-01T00:31:13.2698402Z --- FAIL: TestMigConfigMaintenanceWindow_basic (2.58s)
```

  - FAIL 8 seconds

### Error 2025-09-01T05:59:57+00:00
```
2025-09-01T05:59:57.8584906Z === RUN   TestMigConfigMaintenanceWindow_basic
2025-09-01T05:59:57.8589508Z === CONT  TestMigConfigMaintenanceWindow_basic
2025-09-01T05:59:57.8601474Z    test_step_number=1
2025-09-01T05:59:57.8615763Z === NAME  TestMigConfigMaintenanceWindow_basic
2025-09-01T05:59:57.8616350Z     resource_maintenance_window_migration_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-09-01T05:59:57.8616797Z         
2025-09-01T05:59:57.8617319Z         Error: error creating project: test-acc-tf-p-4345346588817786182
2025-09-01T05:59:57.8617662Z         
2025-09-01T05:59:57.8617951Z           with mongodbatlas_project.test,
2025-09-01T05:59:57.8618533Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T05:59:57.8619074Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T05:59:57.8619358Z         
2025-09-01T05:59:57.8619823Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T05:59:57.8620458Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T05:59:57.8621185Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T05:59:57.8621780Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T05:59:57.8622183Z         BadRequestDetail: 
2025-09-01T05:59:57.8622482Z --- FAIL: TestMigConfigMaintenanceWindow_basic (8.89s)
```

  - PASS 28 seconds
  - PASS 27 seconds
  - PASS 24 seconds
  - PASS 19 seconds
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-09-02 PASS 24 seconds
- 2025-09-03 PASS 17 seconds
- 2025-09-04 PASS 25 seconds