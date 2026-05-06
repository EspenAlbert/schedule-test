# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:43](#error-2026-04-09t0043440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.00s
[2026-04-11 00:48](#error-2026-04-11t0048250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-04-30 01:01](#error-2026-04-30t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 34 seconds
- 2026-04-08 PASS 20 seconds
- 2026-04-09

### Error 2026-04-09T00:43:44+00:00
```
2026-04-09T00:43:44.7705335Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-04-09T00:43:44.7709059Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-04-09T00:43:44.7721140Z    test_name=TestAccConfigDSMaintenanceWindow_basic test_terraform_path=/home/runner/work/_temp/8524ab39-f587-4fd3-a69f-1c9e60d035be/terraform test_working_directory=/tmp/plugintest3282509511 test_step_number=1
2026-04-09T00:43:44.7780820Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-04-09T00:43:44.7781999Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-04-09T00:43:44.7782915Z         
2026-04-09T00:43:44.7783730Z         Error: error creating project: test-acc-tf-p-2021255229364415873
2026-04-09T00:43:44.7784601Z         
2026-04-09T00:43:44.7812329Z           with mongodbatlas_project.test,
2026-04-09T00:43:44.7813087Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:43:44.7815984Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:43:44.7816328Z         
2026-04-09T00:43:44.7816850Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:43:44.7817843Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:43:44.7818459Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:44.7818937Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (75.03s)
```

- 2026-04-10 PASS 18 seconds
- 2026-04-11

### Error 2026-04-11T00:48:25+00:00
```
2026-04-11T00:48:25.0685301Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-04-11T00:48:25.0688192Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-04-11T00:48:25.0701157Z   
2026-04-11T00:48:25.0701615Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-04-11T00:48:25.0702077Z         
2026-04-11T00:48:25.0702538Z         Error: error creating project: test-acc-tf-p-2014296047004608270
2026-04-11T00:48:25.0702887Z         
2026-04-11T00:48:25.0703184Z           with mongodbatlas_project.test,
2026-04-11T00:48:25.0703819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:25.0704356Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:25.0704642Z         
2026-04-11T00:48:25.0705075Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:25.0705752Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:25.0706314Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:25.0706740Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (63.46s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 18 seconds
- 2026-04-14 PASS 22 seconds
- 2026-04-15 PASS 23 seconds
- 2026-04-16 PASS 25 seconds
- 2026-04-17 PASS 27 seconds
- 2026-04-18 PASS 23 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 26 seconds
- 2026-04-21 PASS 24 seconds
- 2026-04-22 PASS 17 seconds
- 2026-04-23 PASS 27 seconds
- 2026-04-24 PASS 23 seconds
- 2026-04-25 PASS 26 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 21 seconds
- 2026-04-28 PASS 24 seconds
- 2026-04-29 PASS 31 seconds
- 2026-04-30

### Error 2026-04-30T01:01:18+00:00
```
2026-04-30T01:01:18.1153382Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-04-30T01:01:18.1156062Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-04-30T01:01:18.1233853Z   
2026-04-30T01:01:18.1276009Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-04-30T01:01:18.1277401Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-04-30T01:01:18.1278327Z         
2026-04-30T01:01:18.1279194Z         Error: error creating project: test-acc-tf-p-5408472094985550571
2026-04-30T01:01:18.1280058Z         
2026-04-30T01:01:18.1280692Z           with mongodbatlas_project.test,
2026-04-30T01:01:18.1282049Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T01:01:18.1283224Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T01:01:18.1283889Z         
2026-04-30T01:01:18.1284855Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:01:18.1286288Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:01:18.1287617Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:18.1288516Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (92.19s)
```

- 2026-05-01 PASS 19 seconds
- 2026-05-02 PASS 22 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 24 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 16 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 17 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 18 seconds
  - PASS 19 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 17 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 seconds
- 2026-05-04 PASS 20 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 25 seconds
