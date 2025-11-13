# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | flaky_500 | 0.10s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | flaky_500 | 0.08s

## Timeline
- 2025-10-14: MISSING
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

- 2025-11-07 PASS 8 seconds
- 2025-11-08 PASS 7 seconds
- 2025-11-09 PASS 7 seconds
- 2025-11-10 PASS 8 seconds
- 2025-11-11 PASS 8 seconds
- 2025-11-12 PASS 8 seconds
- 2025-11-13
  - PASS 8 seconds
  - PASS 7 seconds