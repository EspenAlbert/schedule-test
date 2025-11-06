# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.09s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 11 seconds
- 2025-10-11 PASS 9 seconds
- 2025-10-12 PASS 9 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2985165Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-13T01:24:12.2986010Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-13T01:24:12.2996904Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-13T01:24:12.3025307Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-13T01:24:12.3025976Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3026389Z         
2025-10-13T01:24:12.3026731Z         Error: error creating resource
2025-10-13T01:24:12.3027042Z         
2025-10-13T01:24:12.3027483Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3028507Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3029262Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3029633Z         
2025-10-13T01:24:12.3030208Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3035966Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform test_working_directory=/tmp/plugintest1326850331 test_step_number=1
2025-10-13T01:24:12.3088969Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (300.78s)
```

- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1823852Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-19T00:50:12.1824742Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-19T00:50:12.1832726Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-19T00:50:12.1940233Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-19T00:50:12.1940805Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1941165Z         
2025-10-19T00:50:12.1941442Z         Error: error creating resource
2025-10-19T00:50:12.1941713Z         
2025-10-19T00:50:12.1942077Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1942765Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1943413Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1943739Z         
2025-10-19T00:50:12.1944491Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1945314Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1945907Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1946517Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1947321Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1947712Z         BadRequestDetail: 
2025-10-19T00:50:12.1961686Z   
2025-10-19T00:50:12.1972914Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.10s)
```

- 2025-10-20
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-10-23 PASS 7 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 5 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27 PASS 6 seconds
- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 8 seconds
- 2025-10-30 PASS 8 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03 PASS 6 seconds
- 2025-11-04 PASS 6 seconds
- 2025-11-05
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1248164Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-11-06T00:51:58.1248816Z     resource_test.go:204: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-11-06T00:51:58.1254536Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-11-06T00:51:58.1379973Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-11-06T00:51:58.1380799Z     resource_test.go:205: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1381188Z         
2025-11-06T00:51:58.1381470Z         Error: error creating resource
2025-11-06T00:51:58.1381744Z         
2025-11-06T00:51:58.1382107Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1382810Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1383455Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1383795Z         
2025-11-06T00:51:58.1384556Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1385388Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1386044Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-11-06T00:51:58.1386673Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1387306Z         [processor-started-to-stopped no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1391869Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.91s)
```
