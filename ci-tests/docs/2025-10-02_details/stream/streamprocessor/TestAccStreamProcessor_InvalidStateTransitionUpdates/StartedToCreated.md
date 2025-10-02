# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa |  | 1.06s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa | flaky_500 | 0.05s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa |  | 0.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 6 seconds
- 2025-09-05 PASS 6 seconds
- 2025-09-06 PASS 5 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2726685Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-07T01:03:05.2727489Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-09-07T01:03:05.2729425Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-07T01:03:05.2772587Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-07T01:03:05.2773174Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2773538Z         
2025-09-07T01:03:05.2773818Z         Error: error creating resource
2025-09-07T01:03:05.2774085Z         
2025-09-07T01:03:05.2774442Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2775128Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2775925Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2776252Z         
2025-09-07T01:03:05.2776992Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2777802Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2778446Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-09-07T01:03:05.2779099Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2779949Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2780621Z         [processor-started-to-created connection named sample_stream_solar does not
2025-09-07T01:03:05.2781227Z         exist. Check sp.listConnections() for available connections],
2025-09-07T01:03:05.2781614Z         BadRequestDetail: 
2025-09-07T01:03:05.2806114Z   
2025-09-07T01:03:05.2817367Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.64s)
```

- 2025-09-08
  - PASS 6 seconds
  - PASS 18 seconds
  - PASS 5 seconds
- 2025-09-09 PASS 5 seconds
- 2025-09-10 PASS 6 seconds
- 2025-09-11 PASS 6 seconds
- 2025-09-12
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-09-13 PASS 6 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8445592Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-14T00:45:38.8446405Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-09-14T00:45:38.8448628Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-14T00:45:38.8485850Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-14T00:45:38.8486445Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8486801Z         
2025-09-14T00:45:38.8487081Z         Error: error creating resource
2025-09-14T00:45:38.8487340Z         
2025-09-14T00:45:38.8487693Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8488500Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8489137Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8489462Z         
2025-09-14T00:45:38.8490189Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8491002Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8491583Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8492176Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8492725Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8493102Z         BadRequestDetail: 
2025-09-14T00:45:38.8506390Z    test_working_directory=/tmp/plugintest1547244880 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-14T00:45:38.8516121Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.48s)
```

- 2025-09-15
  - PASS 5 seconds
  - PASS 6 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0658051Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-15T06:36:28.0658754Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-09-15T06:36:28.0660457Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-15T06:36:28.0675792Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-15T06:36:28.0676402Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0676769Z         
2025-09-15T06:36:28.0677052Z         Error: error creating resource
2025-09-15T06:36:28.0677333Z         
2025-09-15T06:36:28.0677698Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0678399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0679052Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0679380Z         
2025-09-15T06:36:28.0680138Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0680963Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0681565Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0682171Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0682734Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0683129Z         BadRequestDetail: 
2025-09-15T06:36:28.0696857Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-15T06:36:28.0728214Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.50s)
```

- 2025-09-16 PASS 6 seconds
- 2025-09-17 PASS 6 seconds
- 2025-09-18 PASS 7 seconds
- 2025-09-19 PASS 6 seconds
- 2025-09-20 PASS 6 seconds
- 2025-09-21 PASS 5 seconds
- 2025-09-22 PASS 6 seconds
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