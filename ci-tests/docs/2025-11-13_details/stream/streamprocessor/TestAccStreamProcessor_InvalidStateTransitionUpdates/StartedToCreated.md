# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor | dev | 0.05s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-23 PASS 4 seconds
- 2025-10-24 PASS 4 seconds
- 2025-10-25 PASS 3 seconds
- 2025-10-26 PASS 3 seconds
- 2025-10-27 PASS 3 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 5 seconds
- 2025-10-30 PASS 5 seconds
- 2025-10-31 PASS 5 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 seconds
- 2025-11-03 PASS 3 seconds
- 2025-11-04 PASS 4 seconds
- 2025-11-05
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1471759Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-11-06T00:51:58.1472459Z     resource_test.go:275: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-11-06T00:51:58.1474168Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-11-06T00:51:58.1532180Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-11-06T00:51:58.1532788Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1533161Z         
2025-11-06T00:51:58.1533446Z         Error: error creating resource
2025-11-06T00:51:58.1533724Z         
2025-11-06T00:51:58.1534088Z           with mongodbatlas_stream_processor.processor,
2025-11-06T00:51:58.1534787Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-11-06T00:51:58.1535434Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-11-06T00:51:58.1535769Z         
2025-11-06T00:51:58.1536528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/processor
2025-11-06T00:51:58.1537384Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-11-06T00:51:58.1549469Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-11-06T00:51:58.1550133Z         problem occur: no healthy upstream. Reason: Bad Request. Params:
2025-11-06T00:51:58.1551186Z         [processor-started-to-created no healthy upstream], BadRequestDetail: 
2025-11-06T00:51:58.1553776Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.54s)
```

- 2025-11-07 PASS 4 seconds
- 2025-11-08 PASS 4 seconds
- 2025-11-09 PASS 3 seconds
- 2025-11-10 PASS 4 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 4 seconds
- 2025-11-13
  - PASS 4 seconds
  - PASS 3 seconds