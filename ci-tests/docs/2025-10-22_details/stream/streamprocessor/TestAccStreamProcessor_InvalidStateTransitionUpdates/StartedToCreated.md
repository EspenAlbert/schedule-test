# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 6 seconds
- 2025-09-24 PASS 5 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 7 seconds
- 2025-09-27 PASS 7 seconds
- 2025-09-28 PASS 6 seconds
- 2025-09-29
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-09-30
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-01
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-10-02 PASS 6 seconds
- 2025-10-03 PASS 7 seconds
- 2025-10-04 PASS 8 seconds
- 2025-10-05 PASS 7 seconds
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 4 seconds
- 2025-10-08 PASS 5 seconds
- 2025-10-09 PASS 5 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12 PASS 5 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3153853Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-10-13T01:24:12.3154647Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-10-13T01:24:12.3156513Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-10-13T01:24:12.3166986Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-10-13T01:24:12.3167788Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3168200Z         
2025-10-13T01:24:12.3168640Z         Error: error creating resource
2025-10-13T01:24:12.3168948Z         
2025-10-13T01:24:12.3169393Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3170242Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3170994Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3171486Z         
2025-10-13T01:24:12.3172060Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3184503Z   
2025-10-13T01:24:12.3203580Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (300.44s)
```

- 2025-10-14 PASS 6 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 5 seconds
- 2025-10-17 PASS 3 seconds
- 2025-10-18 PASS 5 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.2065138Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-10-19T00:50:12.2065823Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-10-19T00:50:12.2067661Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-10-19T00:50:12.2093238Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-10-19T00:50:12.2093835Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.2094195Z         
2025-10-19T00:50:12.2094486Z         Error: error creating resource
2025-10-19T00:50:12.2094756Z         
2025-10-19T00:50:12.2095120Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2095813Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2096449Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2096881Z         
2025-10-19T00:50:12.2097624Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2098453Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2099044Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2099655Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2100215Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2100607Z         BadRequestDetail: 
2025-10-19T00:50:12.2108840Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform test_working_directory=/tmp/plugintest3325449875 test_step_number=1
2025-10-19T00:50:12.2125573Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.60s)
```

- 2025-10-20
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-10-21 PASS 4 seconds
- 2025-10-22
  - PASS 4 seconds
  - PASS 5 seconds