# autogen_slow/streamprocessorapi/TestAccStreamProcessorAPI_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-10-07 to 2025-11-12 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:12](#error-2025-10-13t0112580000) |  | dev |  | 603.07s
[2025-11-06 01:24](#error-2025-11-06t0124230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690bec1ab0a5510b327dea89/streams/test-acc-tf-6020648438717258945/connections | dev | flaky_500 | 2.05s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07 PASS 31 seconds
- 2025-10-08 PASS 28 seconds
- 2025-10-09 PASS 28 seconds
- 2025-10-10 PASS 27 seconds
- 2025-10-11 PASS 28 seconds
- 2025-10-12 PASS 41 seconds
- 2025-10-13

### Error 2025-10-13T01:12:58+00:00
```
2025-10-13T01:12:58.1372048Z === RUN   TestAccStreamProcessorAPI_basic
2025-10-13T01:12:58.1372720Z     resource_test.go:40: Creating execution project: test-acc-tf-p-1545724781625833518
2025-10-13T01:12:58.1373594Z === CONT  TestAccStreamProcessorAPI_basic
2025-10-13T01:12:58.1383655Z   
2025-10-13T01:12:58.1391780Z     resource_test.go:45: Step 1/4 error: Error running apply: exit status 1
2025-10-13T01:12:58.1392290Z         
2025-10-13T01:12:58.1392622Z         Error: Error calling API in Create
2025-10-13T01:12:58.1393008Z         
2025-10-13T01:12:58.1393377Z           with mongodbatlas_stream_processor_api.test,
2025-10-13T01:12:58.1394602Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor_api" "test":
2025-10-13T01:12:58.1395444Z           32: 		resource "mongodbatlas_stream_processor_api" "test" {
2025-10-13T01:12:58.1395789Z         
2025-10-13T01:12:58.1396393Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:12:58.1404736Z   
2025-10-13T01:12:58.1405341Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:12:58.1405788Z         
2025-10-13T01:12:58.1406069Z         Error: error deleting resource
2025-10-13T01:12:58.1406347Z         
2025-10-13T01:12:58.1406937Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:12:58.1407387Z --- FAIL: TestAccStreamProcessorAPI_basic (603.69s)
```

- 2025-10-14 PASS 30 seconds
- 2025-10-15 PASS 31 seconds
- 2025-10-16 PASS 30 seconds
- 2025-10-17 PASS 27 seconds
- 2025-10-18 PASS 30 seconds
- 2025-10-19 PASS 29 seconds
- 2025-10-20
  - PASS 28 seconds
  - PASS 27 seconds
- 2025-10-21 PASS 27 seconds
- 2025-10-22
  - PASS 29 seconds
  - PASS 30 seconds
- 2025-10-23 PASS 29 seconds
- 2025-10-24 PASS 29 seconds
- 2025-10-25 PASS 28 seconds
- 2025-10-26 PASS 29 seconds
- 2025-10-27 PASS 30 seconds
- 2025-10-28 PASS 28 seconds
- 2025-10-29 PASS 29 seconds
- 2025-10-30 PASS 29 seconds
- 2025-10-31 PASS 28 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 29 seconds
- 2025-11-03 PASS 27 seconds
- 2025-11-04 PASS 31 seconds
- 2025-11-05
  - PASS 28 seconds
  - PASS 28 seconds
- 2025-11-06

### Error 2025-11-06T01:24:23+00:00
```
2025-11-06T01:24:23.0572980Z === RUN   TestAccStreamProcessorAPI_basic
2025-11-06T01:24:23.0573504Z     resource_test.go:40: Creating execution project: test-acc-tf-p-1414540487521414550
2025-11-06T01:24:23.0574233Z === CONT  TestAccStreamProcessorAPI_basic
2025-11-06T01:24:23.0585241Z    test_terraform_path=/home/runner/work/_temp/2d2aaba3-efa5-4a8f-a3b6-ab90f90bc1f2/terraform test_working_directory=/tmp/plugintest3627652149 test_name=TestAccStreamProcessorAPI_basic test_step_number=1
2025-11-06T01:24:23.0586299Z     resource_test.go:45: Step 1/4 error: Error running apply: exit status 1
2025-11-06T01:24:23.0586668Z         
2025-11-06T01:24:23.0586948Z         Error: error creating resource
2025-11-06T01:24:23.0587223Z         
2025-11-06T01:24:23.0587567Z           with mongodbatlas_stream_connection.test,
2025-11-06T01:24:23.0588239Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T01:24:23.0588850Z           24: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T01:24:23.0589168Z         
2025-11-06T01:24:23.0589930Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690bec1ab0a5510b327dea89/streams/test-acc-tf-6020648438717258945/connections
2025-11-06T01:24:23.0590790Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T01:24:23.0591380Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T01:24:23.0591774Z         BadRequestDetail: 
2025-11-06T01:24:23.0592080Z --- FAIL: TestAccStreamProcessorAPI_basic (2.52s)
```

- 2025-11-07 PASS 30 seconds
- 2025-11-08 PASS 28 seconds
- 2025-11-09 PASS 26 seconds
- 2025-11-10 PASS 30 seconds
- 2025-11-11 PASS 30 seconds
- 2025-11-12 PASS 27 seconds