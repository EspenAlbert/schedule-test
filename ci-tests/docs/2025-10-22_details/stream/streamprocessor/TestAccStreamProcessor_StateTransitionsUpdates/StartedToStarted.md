# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | flaky_500 | 0.10s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 10 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 14 seconds
- 2025-09-26 PASS 14 seconds
- 2025-09-27 PASS 16 seconds
- 2025-09-28 PASS 12 seconds
- 2025-09-29
  - PASS 14 seconds
  - PASS 15 seconds
- 2025-09-30
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 13 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-10-02 PASS 13 seconds
- 2025-10-03 PASS 13 seconds
- 2025-10-04 PASS 16 seconds
- 2025-10-05 PASS 15 seconds
- 2025-10-06 PASS 12 seconds
- 2025-10-07 PASS 9 seconds
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