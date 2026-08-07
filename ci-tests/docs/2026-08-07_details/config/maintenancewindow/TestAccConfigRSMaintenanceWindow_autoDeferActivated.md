# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.09s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.09s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2262065Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-09T00:59:33.2263365Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-09T00:59:33.2275947Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-09T00:59:33.2276614Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-07-09T00:59:33.2277090Z         
2026-07-09T00:59:33.2277540Z         Error: error creating project: test-acc-tf-p-7606250278455790941
2026-07-09T00:59:33.2277929Z         
2026-07-09T00:59:33.2278250Z           with mongodbatlas_project.test,
2026-07-09T00:59:33.2279015Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:59:33.2279632Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:59:33.2279962Z         
2026-07-09T00:59:33.2280461Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:59:33.2281154Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:59:33.2281777Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2282287Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (65.29s)
```

- 2026-07-10 PASS 10 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5995168Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-11T00:55:51.5996609Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-11T00:55:51.6032225Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-11T00:55:51.6033005Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:55:51.6033669Z         
2026-07-11T00:55:51.6034125Z         Error: error creating project: test-acc-tf-p-365672339151517222
2026-07-11T00:55:51.6034606Z         
2026-07-11T00:55:51.6035021Z           with mongodbatlas_project.test,
2026-07-11T00:55:51.6035684Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:55:51.6036473Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:55:51.6036805Z         
2026-07-11T00:55:51.6037502Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:55:51.6038551Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:55:51.6039194Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6039900Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (89.93s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 36 seconds
- 2026-07-15 PASS 9 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 9 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8326754Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-18T00:51:48.8328967Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-18T00:51:48.8391058Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-18T00:51:48.8391746Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-07-18T00:51:48.8392241Z         
2026-07-18T00:51:48.8392997Z         Error: error creating project: test-acc-tf-p-4052904878857868597
2026-07-18T00:51:48.8393421Z         
2026-07-18T00:51:48.8393756Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8394589Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8395746Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8396349Z         
2026-07-18T00:51:48.8397095Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8398339Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8399451Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8400316Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (81.90s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4139534Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-21T00:53:42.4140712Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-21T00:53:42.4148214Z   
2026-07-21T00:53:42.4160425Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-21T00:53:42.4160854Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:53:42.4161162Z         
2026-07-21T00:53:42.4161455Z         Error: error creating project: test-acc-tf-p-1073434131314911410
2026-07-21T00:53:42.4161714Z         
2026-07-21T00:53:42.4161945Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.4162424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.4162822Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.4163050Z         
2026-07-21T00:53:42.4163380Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.4163829Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.4164243Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4164590Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (65.28s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4622203Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-23T00:49:05.4623605Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-23T00:49:05.4635635Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-07-23T00:49:05.4636268Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:49:05.4636792Z         
2026-07-23T00:49:05.4637242Z         Error: error creating project: test-acc-tf-p-5109743161267997693
2026-07-23T00:49:05.4637687Z         
2026-07-23T00:49:05.4638073Z           with mongodbatlas_project.test,
2026-07-23T00:49:05.4638733Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:49:05.4639328Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:49:05.4639742Z         
2026-07-23T00:49:05.4640254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:49:05.4641098Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:49:05.4641739Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:05.4642268Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (62.15s)
```

- 2026-07-24 PASS 10 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 14 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 11 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 7 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 10 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
