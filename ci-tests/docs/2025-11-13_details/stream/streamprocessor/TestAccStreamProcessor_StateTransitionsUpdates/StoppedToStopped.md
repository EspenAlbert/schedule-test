# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.08s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 PASS 9 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1829772Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-19T00:50:12.1830492Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-19T00:50:12.1833231Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-19T00:50:12.1962016Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-19T00:50:12.1962584Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1962949Z         
2025-10-19T00:50:12.1963228Z         Error: error creating resource
2025-10-19T00:50:12.1963499Z         
2025-10-19T00:50:12.1963857Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1964545Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1965187Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1965518Z         
2025-10-19T00:50:12.1966265Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1967233Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1967826Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1968436Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1969005Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1969397Z         BadRequestDetail: 
2025-10-19T00:50:12.1973572Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.10s)
```

- 2025-10-20
  - PASS 12 seconds
  - PASS 8 seconds
- 2025-10-21 PASS 9 seconds
- 2025-10-22
  - PASS 7 seconds
  - PASS 10 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27 PASS 8 seconds
- 2025-10-28 PASS 9 seconds
- 2025-10-29 PASS 8 seconds
- 2025-10-30 PASS 8 seconds
- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 6 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1242481Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-11-06T00:51:58.1243367Z     resource_test.go:204: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-11-06T00:51:58.1254035Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-11-06T00:51:58.1292803Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-11-06T00:51:58.1293390Z     resource_test.go:205: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.1293777Z         
2025-11-06T00:51:58.1294060Z         Error: error creating resource
2025-11-06T00:51:58.1294336Z         
2025-11-06T00:51:58.1294703Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1295409Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1296070Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1296407Z         
2025-11-06T00:51:58.1297171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1298260Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1298939Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-11-06T00:51:58.1299563Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1300185Z         [processor-stopped-to-stopped no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1314344Z   
2025-11-06T00:51:58.1389074Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.84s)
```

- 2025-11-07 PASS 7 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09 PASS 7 seconds
- 2025-11-10 PASS 8 seconds
- 2025-11-11 PASS 7 seconds
- 2025-11-12 PASS 8 seconds
- 2025-11-13
  - PASS 7 seconds
  - PASS 7 seconds