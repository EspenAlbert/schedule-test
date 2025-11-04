# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 10 seconds
- 2025-10-07 PASS 10 seconds
- 2025-10-08 PASS 11 seconds
- 2025-10-09 PASS 10 seconds
- 2025-10-10 PASS 11 seconds
- 2025-10-11 PASS 11 seconds
- 2025-10-12 PASS 9 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2992403Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.2993280Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-13T01:24:12.2995789Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.3055306Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.3055963Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3056370Z         
2025-10-13T01:24:12.3056729Z         Error: error creating resource
2025-10-13T01:24:12.3057035Z         
2025-10-13T01:24:12.3057482Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3058520Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3059339Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3059716Z         
2025-10-13T01:24:12.3060296Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3066784Z   
2025-10-13T01:24:12.3091187Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (300.79s)
```

- 2025-10-14 PASS 12 seconds
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