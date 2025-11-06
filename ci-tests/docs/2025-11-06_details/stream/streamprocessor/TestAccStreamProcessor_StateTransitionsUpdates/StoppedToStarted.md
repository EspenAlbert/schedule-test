# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.00s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.09s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 12 seconds
- 2025-10-09 PASS 12 seconds
- 2025-10-10 PASS 12 seconds
- 2025-10-11 PASS 12 seconds
- 2025-10-12 PASS 12 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2990079Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-13T01:24:12.2990933Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-13T01:24:12.2996347Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-13T01:24:12.3037080Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-13T01:24:12.3037737Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3038138Z         
2025-10-13T01:24:12.3038655Z         Error: error creating resource
2025-10-13T01:24:12.3038959Z         
2025-10-13T01:24:12.3039407Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3040449Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3041217Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3041583Z         
2025-10-13T01:24:12.3042156Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3054714Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.3090442Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (300.79s)
```

- 2025-10-14 PASS 14 seconds
- 2025-10-15 PASS 13 seconds
- 2025-10-16 PASS 11 seconds
- 2025-10-17 PASS 9 seconds
- 2025-10-18 PASS 11 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1827901Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-19T00:50:12.1828558Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-19T00:50:12.1834231Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-19T00:50:12.1848238Z   
2025-10-19T00:50:12.1869946Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-19T00:50:12.1870518Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1870877Z         
2025-10-19T00:50:12.1871161Z         Error: error creating resource
2025-10-19T00:50:12.1871427Z         
2025-10-19T00:50:12.1871791Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1872473Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1873117Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1873442Z         
2025-10-19T00:50:12.1874193Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1875135Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1875733Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1876342Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1877171Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1877579Z         BadRequestDetail: 
2025-10-19T00:50:12.1905830Z   
2025-10-19T00:50:12.1971002Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.03s)
```

- 2025-10-20
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 10 seconds
- 2025-10-22
  - PASS 10 seconds
  - PASS 14 seconds
- 2025-10-23 PASS 11 seconds
- 2025-10-24 PASS 10 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27 PASS 8 seconds
- 2025-10-28 PASS 9 seconds
- 2025-10-29 PASS 11 seconds
- 2025-10-30 PASS 10 seconds
- 2025-10-31 PASS 12 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 seconds
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 10 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1252160Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-11-06T00:51:58.1252825Z     resource_test.go:204: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-11-06T00:51:58.1255037Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-11-06T00:51:58.1314680Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-11-06T00:51:58.1315264Z     resource_test.go:205: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.1315640Z         
2025-11-06T00:51:58.1315924Z         Error: error creating resource
2025-11-06T00:51:58.1316206Z         
2025-11-06T00:51:58.1316576Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1317285Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1317935Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1318268Z         
2025-11-06T00:51:58.1319034Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1319869Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1320748Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2025-11-06T00:51:58.1321380Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1321996Z         [processor-stopped-to-started no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1336105Z   
2025-11-06T00:51:58.1389726Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.86s)
```
