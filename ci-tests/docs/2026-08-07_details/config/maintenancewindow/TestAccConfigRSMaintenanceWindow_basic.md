# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 118.05s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 117.06s
[2026-07-16 00:49](#error-2026-07-16t0049020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.10s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2261278Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-07-09T00:59:33.2263776Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-07-09T00:59:33.2275643Z   
2026-07-09T00:59:33.2294173Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-07-09T00:59:33.2294781Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-07-09T00:59:33.2295358Z         
2026-07-09T00:59:33.2295806Z         Error: error creating project: test-acc-tf-p-1182132778459610880
2026-07-09T00:59:33.2296194Z         
2026-07-09T00:59:33.2296518Z           with mongodbatlas_project.test,
2026-07-09T00:59:33.2297168Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:59:33.2297771Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:59:33.2298095Z         
2026-07-09T00:59:33.2298588Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:59:33.2299272Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:59:33.2300023Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2300488Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (118.49s)
```

- 2026-07-10 PASS 25 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5994365Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-07-11T00:55:51.5997020Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-07-11T00:55:51.6009424Z    test_name=TestAccConfigDSMaintenanceWindow_basic test_terraform_path=/home/runner/work/_temp/6bfb0cbb-6316-410c-9d2e-a1b3dac4e565/terraform
2026-07-11T00:55:51.6053744Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-07-11T00:55:51.6054733Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-07-11T00:55:51.6055268Z         
2026-07-11T00:55:51.6055857Z         Error: error creating project: test-acc-tf-p-5837831711243670010
2026-07-11T00:55:51.6056252Z         
2026-07-11T00:55:51.6056730Z           with mongodbatlas_project.test,
2026-07-11T00:55:51.6057433Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:55:51.6058343Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:55:51.6058669Z         
2026-07-11T00:55:51.6059344Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:55:51.6060042Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:55:51.6060846Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6061326Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (117.60s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 22 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 19 seconds
- 2026-07-16

### Error 2026-07-16T00:49:02+00:00
```
2026-07-16T00:49:02.2745882Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-07-16T00:49:02.2750067Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-07-16T00:49:02.2801988Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-07-16T00:49:02.2803012Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-07-16T00:49:02.2803772Z         
2026-07-16T00:49:02.2804483Z         Error: error creating project: test-acc-tf-p-718951239250941731
2026-07-16T00:49:02.2805114Z         
2026-07-16T00:49:02.2805613Z           with mongodbatlas_project.test,
2026-07-16T00:49:02.2806676Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:49:02.2807680Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:49:02.2808220Z         
2026-07-16T00:49:02.2809240Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:49:02.2810430Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:49:02.2811640Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:02.2812430Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (88.97s)
```

- 2026-07-17 PASS 20 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8325415Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-07-18T00:51:48.8329881Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-07-18T00:51:48.8346409Z    test_terraform_path=/home/runner/work/_temp/d22df8ed-6efb-48c5-939a-9fa3d9587ee5/terraform test_working_directory=/tmp/plugintest2245150467 test_step_number=1
2026-07-18T00:51:48.8367544Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-07-18T00:51:48.8368688Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-07-18T00:51:48.8369562Z         
2026-07-18T00:51:48.8370393Z         Error: error creating project: test-acc-tf-p-6056884691537519010
2026-07-18T00:51:48.8371097Z         
2026-07-18T00:51:48.8371692Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8373025Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8374125Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8374749Z         
2026-07-18T00:51:48.8375673Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8376869Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8377827Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8378445Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (62.99s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4138977Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-07-21T00:53:42.4140421Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-07-21T00:53:42.4148480Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-07-21T00:53:42.4148895Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-07-21T00:53:42.4149203Z         
2026-07-21T00:53:42.4149508Z         Error: error creating project: test-acc-tf-p-1374516138167335263
2026-07-21T00:53:42.4149776Z         
2026-07-21T00:53:42.4150014Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.4150437Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.4150838Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.4151065Z         
2026-07-21T00:53:42.4151406Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.4151902Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.4152302Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4152612Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (63.24s)
```

- 2026-07-22 PASS 20 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4621282Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-07-23T00:49:05.4624086Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-07-23T00:49:05.4635239Z   
2026-07-23T00:49:05.4671054Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-07-23T00:49:05.4671676Z     resource_maintenance_window_test.go:41: Step 1/5 error: Error running apply: exit status 1
2026-07-23T00:49:05.4672187Z         
2026-07-23T00:49:05.4672692Z         Error: error creating project: test-acc-tf-p-4386145636574797558
2026-07-23T00:49:05.4673132Z         
2026-07-23T00:49:05.4673539Z           with mongodbatlas_project.test,
2026-07-23T00:49:05.4674240Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:49:05.4674833Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:49:05.4675229Z         
2026-07-23T00:49:05.4675762Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:49:05.4676423Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:49:05.4676985Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:05.4677479Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (69.26s)
```

- 2026-07-24 PASS 24 seconds
- 2026-07-25 PASS 17 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 18 seconds
- 2026-07-29 PASS 19 seconds
- 2026-07-30 PASS 15 seconds
- 2026-07-31 PASS 21 seconds
- 2026-08-01 PASS 13 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 seconds
- 2026-08-04 PASS 20 seconds
- 2026-08-05 PASS 16 seconds
- 2026-08-06 PASS 13 seconds
- 2026-08-07 PASS 26 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 18 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 18 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 14 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 23 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
