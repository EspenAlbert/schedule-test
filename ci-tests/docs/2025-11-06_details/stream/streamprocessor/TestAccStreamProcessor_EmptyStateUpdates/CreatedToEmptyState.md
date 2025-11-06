# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.05s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 5 seconds
- 2025-10-09 PASS 3 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 4 seconds
- 2025-10-12 PASS 3 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3093064Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-10-13T01:24:12.3094049Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-10-13T01:24:12.3100297Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-10-13T01:24:12.3111232Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-10-13T01:24:12.3111874Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3112276Z         
2025-10-13T01:24:12.3112613Z         Error: error creating resource
2025-10-13T01:24:12.3112914Z         
2025-10-13T01:24:12.3113361Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3114221Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3114974Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3115348Z         
2025-10-13T01:24:12.3115913Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3128591Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-10-13T01:24:12.3146975Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (300.42s)
```

- 2025-10-14 PASS 4 seconds
- 2025-10-15 PASS 3 seconds
- 2025-10-16 PASS 6 seconds
- 2025-10-17 PASS 4 seconds
- 2025-10-18 PASS 6 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1974483Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-10-19T00:50:12.1975510Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-10-19T00:50:12.1981018Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-10-19T00:50:12.2050810Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-10-19T00:50:12.2051375Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.2051746Z         
2025-10-19T00:50:12.2052019Z         Error: error creating resource
2025-10-19T00:50:12.2052288Z         
2025-10-19T00:50:12.2052644Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2053335Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2053969Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2054303Z         
2025-10-19T00:50:12.2055047Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2055868Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2056458Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2057290Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2057861Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2058250Z         BadRequestDetail: 
2025-10-19T00:50:12.2059131Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.59s)
```

- 2025-10-20
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 4 seconds
- 2025-10-22
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-10-23 PASS 4 seconds
- 2025-10-24 PASS 4 seconds
- 2025-10-25 PASS 3 seconds
- 2025-10-26 PASS 3 seconds
- 2025-10-27 PASS 4 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 4 seconds
- 2025-10-31 PASS 5 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 seconds
- 2025-11-03 PASS 4 seconds
- 2025-11-04 PASS 3 seconds
- 2025-11-05
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1394849Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-11-06T00:51:58.1395818Z     resource_test.go:238: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-11-06T00:51:58.1400137Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-11-06T00:51:58.1413981Z   
2025-11-06T00:51:58.1414376Z     resource_test.go:239: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1414754Z         
2025-11-06T00:51:58.1415037Z         Error: error creating resource
2025-11-06T00:51:58.1415322Z         
2025-11-06T00:51:58.1415690Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1416398Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1417075Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1417414Z         
2025-11-06T00:51:58.1418172Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1419145Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1419790Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-11-06T00:51:58.1420387Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1421206Z         [processor-created-to- no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1440024Z   
2025-11-06T00:51:58.1448101Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform
2025-11-06T00:51:58.1465285Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.51s)
```
