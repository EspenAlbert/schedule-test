# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 4 seconds
- 2025-10-31 PASS 5 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
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

- 2025-11-07 PASS 3 seconds
- 2025-11-08 PASS 3 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 4 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 4 seconds
- 2025-11-13 PASS 3 seconds
- 2025-11-14 PASS 5 seconds
- 2025-11-15 PASS 4 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 5 seconds
- 2025-11-18 PASS 4 seconds
- 2025-11-19 PASS 4 seconds
- 2025-11-20 PASS 3 seconds
- 2025-11-21 PASS 4 seconds
- 2025-11-22 PASS 3 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 5 seconds
- 2025-11-25 PASS 5 seconds
- 2025-11-26 PASS 3 seconds
- 2025-11-27 PASS 4 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 3 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 3 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 4 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 3 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
