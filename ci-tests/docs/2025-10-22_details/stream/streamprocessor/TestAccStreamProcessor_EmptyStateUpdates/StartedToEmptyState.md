# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-10 00:53](#error-2025-10-10t0053580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68e8530d1a9c5e5749c14eb0/streams/test-acc-tf-s-5613067548248512506/processor/processor-started-to- | dev |  | 7.06s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | flaky_500 | 0.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 8 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 13 seconds
- 2025-09-27 PASS 14 seconds
- 2025-09-28 PASS 10 seconds
- 2025-09-29
  - PASS 14 seconds
  - PASS 14 seconds
- 2025-09-30
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 11 seconds
- 2025-10-01
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 12 seconds
- 2025-10-03 PASS 12 seconds
- 2025-10-04 PASS 14 seconds
- 2025-10-05 PASS 14 seconds
- 2025-10-06 PASS 11 seconds
- 2025-10-07 PASS 8 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10

### Error 2025-10-10T00:53:58+00:00
```
2025-10-10T00:53:58.7087802Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-10T00:53:58.7088788Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-10-10T00:53:58.7093141Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-10T00:53:58.7108232Z   
2025-10-10T00:53:58.7108720Z     resource_test.go:218: Step 2/2 error: Error running apply: exit status 1
2025-10-10T00:53:58.7109096Z         
2025-10-10T00:53:58.7109414Z         Error: Error modifying stream processor
2025-10-10T00:53:58.7109708Z         
2025-10-10T00:53:58.7110078Z           with mongodbatlas_stream_processor.processor,
2025-10-10T00:53:58.7110780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-10T00:53:58.7111422Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-10T00:53:58.7111756Z         
2025-10-10T00:53:58.7112872Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e8530d1a9c5e5749c14eb0/streams/test-acc-tf-s-5613067548248512506/processor/processor-started-to-
2025-10-10T00:53:58.7114407Z         PATCH: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-10-10T00:53:58.7115542Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-10-10T00:53:58.7117050Z         problem occur: stream processor doesn't exist. Reason: Bad Request. Params:
2025-10-10T00:53:58.7117901Z         [processor-started-to- stream processor doesn't exist], BadRequestDetail: 
2025-10-10T00:53:58.7132568Z   
2025-10-10T00:53:58.7142769Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (7.61s)
```

- 2025-10-11 PASS 10 seconds
- 2025-10-12 PASS 10 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3095473Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-13T01:24:12.3096438Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-10-13T01:24:12.3101365Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-13T01:24:12.3110881Z   
2025-10-13T01:24:12.3129154Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-13T01:24:12.3129811Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3130273Z         
2025-10-13T01:24:12.3130613Z         Error: error creating resource
2025-10-13T01:24:12.3130925Z         
2025-10-13T01:24:12.3131371Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3132221Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3132970Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3133338Z         
2025-10-13T01:24:12.3133919Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3139797Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform test_working_directory=/tmp/plugintest1510750365
2025-10-13T01:24:12.3147710Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (300.44s)
```

- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 11 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1976838Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-19T00:50:12.1977687Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-10-19T00:50:12.1982317Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-19T00:50:12.2012127Z    test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-19T00:50:12.2034535Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-19T00:50:12.2035102Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.2035466Z         
2025-10-19T00:50:12.2035755Z         Error: error creating resource
2025-10-19T00:50:12.2036026Z         
2025-10-19T00:50:12.2036390Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2037451Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2038103Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2038431Z         
2025-10-19T00:50:12.2039187Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2040012Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2040621Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2041250Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2041820Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2042215Z         BadRequestDetail: 
2025-10-19T00:50:12.2050382Z    test_working_directory=/tmp/plugintest4134595003
2025-10-19T00:50:12.2059749Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.60s)
```

- 2025-10-20
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 7 seconds
  - PASS 10 seconds