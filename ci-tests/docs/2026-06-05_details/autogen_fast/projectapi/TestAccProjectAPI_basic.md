# autogen_fast/projectapi/TestAccProjectAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.01s
[2026-05-16 01:00](#error-2026-05-16t0100500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s
[2026-05-19 01:09](#error-2026-05-19t0109410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.02s
[2026-05-21 01:10](#error-2026-05-21t0110440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s
[2026-05-26 02:16](#error-2026-05-26t0216580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-05-28 01:01](#error-2026-05-28t0101530000) |  | dev | flaky_500 | 79.10s
[2026-05-30 01:11](#error-2026-05-30t0111190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.09s
[2026-06-02 01:16](#error-2026-06-02t0116400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 10 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3253558Z === RUN   TestAccProjectAPI_basic
2026-05-09T01:07:49.3254201Z === CONT  TestAccProjectAPI_basic
2026-05-09T01:07:49.3265507Z    test_step_number=1 test_name=TestAccProjectAPI_basic test_terraform_path=/home/runner/work/_temp/3e2a7894-7382-46a5-b7f2-d924f0634ca1/terraform
2026-05-09T01:07:49.3266386Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-09T01:07:49.3266813Z         
2026-05-09T01:07:49.3267150Z         Error: Error calling API in Create
2026-05-09T01:07:49.3267708Z         
2026-05-09T01:07:49.3268084Z           with mongodbatlas_project_api.test,
2026-05-09T01:07:49.3268800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-09T01:07:49.3269473Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-09T01:07:49.3269838Z         
2026-05-09T01:07:49.3270362Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:07:49.3271079Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:07:49.3271735Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3272176Z --- FAIL: TestAccProjectAPI_basic (87.12s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 9 seconds
- 2026-05-12 PASS 10 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 11 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16

### Error 2026-05-16T01:00:50+00:00
```
2026-05-16T01:00:50.9956564Z === RUN   TestAccProjectAPI_basic
2026-05-16T01:00:50.9957698Z === CONT  TestAccProjectAPI_basic
2026-05-16T01:00:50.9975694Z    test_working_directory=/tmp/plugintest1641977612 test_terraform_path=/home/runner/work/_temp/2930ce4b-c27a-4e18-9e5a-1b82387ef2af/terraform
2026-05-16T01:00:50.9976972Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-16T01:00:50.9977622Z         
2026-05-16T01:00:50.9978215Z         Error: Error calling API in Create
2026-05-16T01:00:50.9978789Z         
2026-05-16T01:00:50.9979414Z           with mongodbatlas_project_api.test,
2026-05-16T01:00:50.9980651Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-16T01:00:50.9981801Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-16T01:00:50.9982643Z         
2026-05-16T01:00:50.9983665Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:00:50.9984895Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:00:50.9985964Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:50.9986688Z --- FAIL: TestAccProjectAPI_basic (70.23s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19

### Error 2026-05-19T01:09:41+00:00
```
2026-05-19T01:09:41.8682310Z === RUN   TestAccProjectAPI_basic
2026-05-19T01:09:41.8683493Z === CONT  TestAccProjectAPI_basic
2026-05-19T01:09:41.8703914Z   
2026-05-19T01:09:41.8704697Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-19T01:09:41.8705655Z         
2026-05-19T01:09:41.8706275Z         Error: Error calling API in Create
2026-05-19T01:09:41.8706843Z         
2026-05-19T01:09:41.8707442Z           with mongodbatlas_project_api.test,
2026-05-19T01:09:41.8708636Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-19T01:09:41.8709775Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-19T01:09:41.8710401Z         
2026-05-19T01:09:41.8711332Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:09:41.8712739Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:09:41.8714093Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8714856Z --- FAIL: TestAccProjectAPI_basic (79.16s)
```

- 2026-05-20 PASS 7 seconds
- 2026-05-21

### Error 2026-05-21T01:10:44+00:00
```
2026-05-21T01:10:44.0002346Z === RUN   TestAccProjectAPI_basic
2026-05-21T01:10:44.0003515Z === CONT  TestAccProjectAPI_basic
2026-05-21T01:10:44.0023001Z    test_working_directory=/tmp/plugintest915051761
2026-05-21T01:10:44.0024016Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-21T01:10:44.0024774Z         
2026-05-21T01:10:44.0025381Z         Error: Error calling API in Create
2026-05-21T01:10:44.0025950Z         
2026-05-21T01:10:44.0026602Z           with mongodbatlas_project_api.test,
2026-05-21T01:10:44.0028112Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-21T01:10:44.0029313Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-21T01:10:44.0029900Z         
2026-05-21T01:10:44.0030762Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:10:44.0032163Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:10:44.0033286Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:10:44.0034033Z --- FAIL: TestAccProjectAPI_basic (73.23s)
```

- 2026-05-22 PASS 12 seconds
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26

### Error 2026-05-26T02:16:58+00:00
```
2026-05-26T02:16:58.2199133Z === RUN   TestAccProjectAPI_basic
2026-05-26T02:16:58.2199816Z === CONT  TestAccProjectAPI_basic
2026-05-26T02:16:58.2210352Z    test_working_directory=/tmp/plugintest1996045305 test_step_number=1 test_name=TestAccProjectAPI_basic
2026-05-26T02:16:58.2211067Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-26T02:16:58.2211481Z         
2026-05-26T02:16:58.2211814Z         Error: Error calling API in Create
2026-05-26T02:16:58.2212145Z         
2026-05-26T02:16:58.2212494Z           with mongodbatlas_project_api.test,
2026-05-26T02:16:58.2213135Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-26T02:16:58.2213762Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-26T02:16:58.2214267Z         
2026-05-26T02:16:58.2214772Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:16:58.2215451Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:16:58.2216074Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:16:58.2216637Z --- FAIL: TestAccProjectAPI_basic (65.08s)
```

- 2026-05-27 PASS 10 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8854723Z === RUN   TestAccProjectAPI_basic
2026-05-28T01:01:53.8855370Z === CONT  TestAccProjectAPI_basic
2026-05-28T01:01:53.8864528Z   
2026-05-28T01:01:53.8864951Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-28T01:01:53.8865345Z         
2026-05-28T01:01:53.8865673Z         Error: Error calling API in Create
2026-05-28T01:01:53.8865985Z         
2026-05-28T01:01:53.8866336Z           with mongodbatlas_project_api.test,
2026-05-28T01:01:53.8866975Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-28T01:01:53.8867586Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-28T01:01:53.8867927Z         
2026-05-28T01:01:53.8868417Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-05-28T01:01:53.8868857Z         type
2026-05-28T01:01:53.8869135Z --- FAIL: TestAccProjectAPI_basic (79.96s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30

### Error 2026-05-30T01:11:19+00:00
```
2026-05-30T01:11:19.0392674Z === RUN   TestAccProjectAPI_basic
2026-05-30T01:11:19.0393979Z === CONT  TestAccProjectAPI_basic
2026-05-30T01:11:19.0409959Z   
2026-05-30T01:11:19.0410472Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-30T01:11:19.0410974Z         
2026-05-30T01:11:19.0411380Z         Error: Error calling API in Create
2026-05-30T01:11:19.0411770Z         
2026-05-30T01:11:19.0412187Z           with mongodbatlas_project_api.test,
2026-05-30T01:11:19.0412945Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-30T01:11:19.0413872Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-30T01:11:19.0414283Z         
2026-05-30T01:11:19.0414860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:11:19.0415610Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:11:19.0416305Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0416791Z --- FAIL: TestAccProjectAPI_basic (80.89s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 11 seconds
- 2026-06-02

### Error 2026-06-02T01:16:40+00:00
```
2026-06-02T01:16:40.1226352Z === RUN   TestAccProjectAPI_basic
2026-06-02T01:16:40.1227101Z === CONT  TestAccProjectAPI_basic
2026-06-02T01:16:40.1238465Z    test_name=TestAccProjectAPI_basic test_terraform_path=/home/runner/work/_temp/274e0fc4-2a80-45e1-a3c5-40b3d8e2ac00/terraform test_step_number=1 test_working_directory=/tmp/plugintest1681535803
2026-06-02T01:16:40.1239541Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-06-02T01:16:40.1240018Z         
2026-06-02T01:16:40.1240416Z         Error: Error calling API in Create
2026-06-02T01:16:40.1240810Z         
2026-06-02T01:16:40.1241225Z           with mongodbatlas_project_api.test,
2026-06-02T01:16:40.1242138Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-06-02T01:16:40.1242996Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-06-02T01:16:40.1243412Z         
2026-06-02T01:16:40.1244159Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:16:40.1244924Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:16:40.1245618Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1246110Z --- FAIL: TestAccProjectAPI_basic (71.61s)
```

- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 12 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 11 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
