# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-10 00:53](#error-2025-10-10t0053580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68e8530d1a9c5e5749c14eb0/streams/test-acc-tf-s-5613067548248512506/processor/processor-stopped-to- | dev | 8.04s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 9 seconds
- 2025-10-07 PASS 7 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10

### Error 2025-10-10T00:53:58+00:00
```
2025-10-10T00:53:58.7089985Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-10T00:53:58.7090937Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-10T00:53:58.7092639Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-10T00:53:58.7132902Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-10T00:53:58.7133470Z     resource_test.go:218: Step 3/3 error: Error running apply: exit status 1
2025-10-10T00:53:58.7133847Z         
2025-10-10T00:53:58.7134172Z         Error: Error modifying stream processor
2025-10-10T00:53:58.7134471Z         
2025-10-10T00:53:58.7134835Z           with mongodbatlas_stream_processor.processor,
2025-10-10T00:53:58.7135548Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-10T00:53:58.7136201Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-10T00:53:58.7136545Z         
2025-10-10T00:53:58.7137631Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e8530d1a9c5e5749c14eb0/streams/test-acc-tf-s-5613067548248512506/processor/processor-stopped-to-
2025-10-10T00:53:58.7138576Z         PATCH: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-10-10T00:53:58.7139477Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-10-10T00:53:58.7140288Z         problem occur: stream processor doesn't exist. Reason: Bad Request. Params:
2025-10-10T00:53:58.7140973Z         [processor-stopped-to- stream processor doesn't exist], BadRequestDetail: 
2025-10-10T00:53:58.7143400Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (8.42s)
```

- 2025-10-11 PASS 8 seconds
- 2025-10-12 PASS 8 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3097732Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-13T01:24:12.3098979Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-13T01:24:12.3100829Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-13T01:24:12.3140872Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-13T01:24:12.3141510Z     resource_test.go:218: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3141919Z         
2025-10-13T01:24:12.3142253Z         Error: error creating resource
2025-10-13T01:24:12.3142553Z         
2025-10-13T01:24:12.3143163Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3144009Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3144751Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3145126Z         
2025-10-13T01:24:12.3145695Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3148599Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (300.44s)
```

- 2025-10-14 PASS 9 seconds
- 2025-10-15 PASS 8 seconds
- 2025-10-16 PASS 12 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1978982Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-19T00:50:12.1979825Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-19T00:50:12.1981584Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-19T00:50:12.2012690Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-19T00:50:12.2013390Z     resource_test.go:218: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.2013775Z         
2025-10-19T00:50:12.2014061Z         Error: error creating resource
2025-10-19T00:50:12.2014342Z         
2025-10-19T00:50:12.2014703Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2015419Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2016064Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2016399Z         
2025-10-19T00:50:12.2017273Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2018102Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2018701Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2019315Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2019894Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2020285Z         BadRequestDetail: 
2025-10-19T00:50:12.2033546Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform test_working_directory=/tmp/plugintest1420108987
2025-10-19T00:50:12.2060453Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.60s)
```

- 2025-10-20
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 6 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27 PASS 6 seconds
- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 7 seconds
- 2025-10-31 PASS 7 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03 PASS 6 seconds
- 2025-11-04 PASS 6 seconds