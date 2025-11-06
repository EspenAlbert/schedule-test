# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | flaky_500 | 0.10s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | flaky_500 | 0.08s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 12 seconds
- 2025-10-09 PASS 12 seconds
- 2025-10-10 PASS 13 seconds
- 2025-10-11 PASS 10 seconds
- 2025-10-12 PASS 11 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2987523Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-10-13T01:24:12.2988671Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-10-13T01:24:12.2995146Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-10-13T01:24:12.3082120Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-10-13T01:24:12.3082776Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3083183Z         
2025-10-13T01:24:12.3083516Z         Error: error creating resource
2025-10-13T01:24:12.3083816Z         
2025-10-13T01:24:12.3084253Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3085093Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3085844Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3086215Z         
2025-10-13T01:24:12.3086790Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3092067Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (300.80s)
```

- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 10 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1825818Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-10-19T00:50:12.1826548Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-10-19T00:50:12.1832227Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-10-19T00:50:12.1848565Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-10-19T00:50:12.1849129Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1849498Z         
2025-10-19T00:50:12.1849774Z         Error: error creating resource
2025-10-19T00:50:12.1850046Z         
2025-10-19T00:50:12.1850403Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1851093Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1851857Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1852188Z         
2025-10-19T00:50:12.1852940Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1853761Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1854365Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1854969Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1855639Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1856028Z         BadRequestDetail: 
2025-10-19T00:50:12.1869504Z    test_working_directory=/tmp/plugintest1098515679
2025-10-19T00:50:12.1970345Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.98s)
```

- 2025-10-20
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 10 seconds
- 2025-10-22
  - PASS 7 seconds
  - PASS 11 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 11 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 9 seconds
- 2025-10-27 PASS 8 seconds
- 2025-10-28 PASS 7 seconds
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 10 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1250053Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-11-06T00:51:58.1251022Z     resource_test.go:204: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-11-06T00:51:58.1255540Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-11-06T00:51:58.1270894Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-11-06T00:51:58.1271482Z     resource_test.go:205: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1271854Z         
2025-11-06T00:51:58.1272137Z         Error: error creating resource
2025-11-06T00:51:58.1272421Z         
2025-11-06T00:51:58.1272791Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1273636Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1274316Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1274652Z         
2025-11-06T00:51:58.1275426Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1276266Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1276927Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-11-06T00:51:58.1277655Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1278286Z         [processor-started-to-started no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1292464Z   
2025-11-06T00:51:58.1388419Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.82s)
```
