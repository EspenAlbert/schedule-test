# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | flaky_500 | 0.06s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev |  | 0.05s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-23 PASS 7 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 7 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 7 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 6 seconds
- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03 PASS 6 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1397028Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-11-06T00:51:58.1397859Z     resource_test.go:238: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-11-06T00:51:58.1399659Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-11-06T00:51:58.1454855Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-11-06T00:51:58.1455424Z     resource_test.go:239: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1455793Z         
2025-11-06T00:51:58.1456083Z         Error: error creating resource
2025-11-06T00:51:58.1456354Z         
2025-11-06T00:51:58.1456717Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1457416Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1458061Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1458396Z         
2025-11-06T00:51:58.1459148Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1459985Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1460801Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-11-06T00:51:58.1461406Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1461981Z         [processor-started-to- no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1466530Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.52s)
```

- 2025-11-07 PASS 6 seconds
- 2025-11-08 PASS 7 seconds
- 2025-11-09 PASS 5 seconds
- 2025-11-10 PASS 7 seconds
- 2025-11-11 PASS 7 seconds
- 2025-11-12 PASS 7 seconds
- 2025-11-13
  - PASS 6 seconds
  - PASS 6 seconds