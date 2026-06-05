# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_autoDeferActivated Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-05-16 01:00](#error-2026-05-16t0100420000) |  | dev | flaky_500 | 75.03s
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.07s
[2026-05-21 01:09](#error-2026-05-21t0109260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-05-23 01:05](#error-2026-05-23t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.08s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.07s
[2026-06-02 01:12](#error-2026-06-02t0112090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 21 seconds
  - PASS 12 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T01:02:11+00:00
```
2026-05-09T01:02:11.9246610Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-09T01:02:11.9248164Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-09T01:02:11.9297818Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-09T01:02:11.9298651Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-09T01:02:11.9299231Z         
2026-05-09T01:02:11.9299777Z         Error: error creating project: test-acc-tf-p-3234650225552564790
2026-05-09T01:02:11.9300248Z         
2026-05-09T01:02:11.9300637Z           with mongodbatlas_project.test,
2026-05-09T01:02:11.9301441Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T01:02:11.9302188Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T01:02:11.9302581Z         
2026-05-09T01:02:11.9303203Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:02:11.9304189Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:02:11.9304975Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9305603Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (64.25s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 11 seconds
- 2026-05-12 PASS 22 seconds
- 2026-05-13 PASS 13 seconds
- 2026-05-14 PASS 30 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5811112Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-16T01:00:42.5812845Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-16T01:00:42.5824287Z   
2026-05-16T01:00:42.5851437Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-16T01:00:42.5852879Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-16T01:00:42.5853861Z         
2026-05-16T01:00:42.5854757Z         Error: error creating project: test-acc-tf-p-8447182370889433448
2026-05-16T01:00:42.5855975Z         
2026-05-16T01:00:42.5856671Z           with mongodbatlas_project.test,
2026-05-16T01:00:42.5858097Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:00:42.5920148Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:00:42.5920786Z         
2026-05-16T01:00:42.5921920Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-05-16T01:00:42.5922762Z         type
2026-05-16T01:00:42.5923384Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (75.34s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 13 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.9201575Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-19T01:08:20.9204646Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-19T01:08:20.9262170Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-19T01:08:20.9263279Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-19T01:08:20.9290605Z         
2026-05-19T01:08:20.9405443Z         Error: error creating project: test-acc-tf-p-6004043046703026742
2026-05-19T01:08:20.9406222Z         
2026-05-19T01:08:20.9406821Z           with mongodbatlas_project.test,
2026-05-19T01:08:20.9408037Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:20.9409173Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:20.9409797Z         
2026-05-19T01:08:20.9410737Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:20.9412002Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:20.9413029Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.9413853Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (88.70s)
```

- 2026-05-20 PASS 13 seconds
- 2026-05-21

### Error 2026-05-21T01:09:26+00:00
```
2026-05-21T01:09:26.8481777Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-21T01:09:26.8483146Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-21T01:09:26.8495704Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-21T01:09:26.8496367Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:09:26.8496851Z         
2026-05-21T01:09:26.8497295Z         Error: error creating project: test-acc-tf-p-5279053241857050403
2026-05-21T01:09:26.8497678Z         
2026-05-21T01:09:26.8497998Z           with mongodbatlas_project.test,
2026-05-21T01:09:26.8498635Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:09:26.8499257Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:09:26.8499579Z         
2026-05-21T01:09:26.8500344Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:09:26.8501027Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:09:26.8501654Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:26.8502161Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (62.44s)
```

- 2026-05-22 PASS 10 seconds
- 2026-05-23

### Error 2026-05-23T01:05:11+00:00
```
2026-05-23T01:05:11.5666345Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-23T01:05:11.5667271Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-23T01:05:11.5677407Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-23T01:05:11.5677896Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-23T01:05:11.5678247Z         
2026-05-23T01:05:11.5678590Z         Error: error creating project: test-acc-tf-p-5551002473626098343
2026-05-23T01:05:11.5678876Z         
2026-05-23T01:05:11.5679115Z           with mongodbatlas_project.test,
2026-05-23T01:05:11.5679594Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:05:11.5680035Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:05:11.5680272Z         
2026-05-23T01:05:11.5681013Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:05:11.5681534Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:05:11.5681996Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5682373Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (63.79s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0328095Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-26T02:14:46.0329298Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-26T02:14:46.0389553Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-26T02:14:46.0390204Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:14:46.0390670Z         
2026-05-26T02:14:46.0391096Z         Error: error creating project: test-acc-tf-p-5039620453602347407
2026-05-26T02:14:46.0391465Z         
2026-05-26T02:14:46.0391765Z           with mongodbatlas_project.test,
2026-05-26T02:14:46.0392377Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:14:46.0392957Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:14:46.0393410Z         
2026-05-26T02:14:46.0393874Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:46.0394520Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:46.0395113Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0395776Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (77.76s)
```

- 2026-05-27 PASS 12 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6247377Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-28T01:02:57.6248612Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-28T01:02:57.6301806Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-28T01:02:57.6302441Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:02:57.6302891Z         
2026-05-28T01:02:57.6303312Z         Error: error creating project: test-acc-tf-p-1039544051763184301
2026-05-28T01:02:57.6303677Z         
2026-05-28T01:02:57.6303979Z           with mongodbatlas_project.test,
2026-05-28T01:02:57.6304607Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:02:57.6305189Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:02:57.6305501Z         
2026-05-28T01:02:57.6305989Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:57.6306671Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:57.6307330Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:57.6307965Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:57.6308400Z         BadRequestDetail: 
2026-05-28T01:02:57.6309196Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (1.60s)
```

- 2026-05-29 PASS 7 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0341509Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-30T01:08:14.0342791Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-30T01:08:14.0390978Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-05-30T01:08:14.0391640Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:08:14.0392124Z         
2026-05-30T01:08:14.0392577Z         Error: error creating project: test-acc-tf-p-6587517483723822683
2026-05-30T01:08:14.0392982Z         
2026-05-30T01:08:14.0393315Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0394091Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0394704Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0395040Z         
2026-05-30T01:08:14.0395543Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0396224Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0396843Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0397471Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (103.74s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02

### Error 2026-06-02T01:12:09+00:00
```
2026-06-02T01:12:09.7262905Z === RUN   TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-06-02T01:12:09.7263946Z === CONT  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-06-02T01:12:09.7296409Z === NAME  TestAccConfigRSMaintenanceWindow_autoDeferActivated
2026-06-02T01:12:09.7297023Z     resource_maintenance_window_test.go:80: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:12:09.7297462Z         
2026-06-02T01:12:09.7297820Z         Error: error creating project: test-acc-tf-p-951792897628897057
2026-06-02T01:12:09.7298136Z         
2026-06-02T01:12:09.7298410Z           with mongodbatlas_project.test,
2026-06-02T01:12:09.7298930Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:09.7299411Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:09.7299674Z         
2026-06-02T01:12:09.7300067Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:09.7300594Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:09.7301074Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:09.7301628Z --- FAIL: TestAccConfigRSMaintenanceWindow_autoDeferActivated (63.09s)
```

- 2026-06-03 PASS 11 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 11 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 10 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 9 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
