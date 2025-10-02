# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa | 21.06s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa | 0.05s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa | 0.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 3 seconds
- 2025-09-04 PASS 3 seconds
- 2025-09-05 PASS 4 seconds
- 2025-09-06 PASS 3 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2722274Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-07T01:03:05.2723110Z     resource_test.go:258: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-09-07T01:03:05.2728831Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-07T01:03:05.2806478Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-07T01:03:05.2807105Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2807473Z         
2025-09-07T01:03:05.2807755Z         Error: error creating resource
2025-09-07T01:03:05.2808039Z         
2025-09-07T01:03:05.2808404Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2809099Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2809742Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2810073Z         
2025-09-07T01:03:05.2810822Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2811636Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2812476Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-09-07T01:03:05.2813137Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2813776Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2814443Z         [processor-created-to-stopped connection named sample_stream_solar does not
2025-09-07T01:03:05.2815039Z         exist. Check sp.listConnections() for available connections],
2025-09-07T01:03:05.2815552Z         BadRequestDetail: 
2025-09-07T01:03:05.2818057Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (21.59s)
```

- 2025-09-08
  - PASS 4 seconds
  - PASS 14 seconds
  - PASS 4 seconds
- 2025-09-09 PASS 3 seconds
- 2025-09-10 PASS 4 seconds
- 2025-09-11 PASS 4 seconds
- 2025-09-12
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-09-13 PASS 4 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8441219Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-14T00:45:38.8442074Z     resource_test.go:258: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-09-14T00:45:38.8447774Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-14T00:45:38.8507199Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-14T00:45:38.8507783Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8508251Z         
2025-09-14T00:45:38.8508528Z         Error: error creating resource
2025-09-14T00:45:38.8508800Z         
2025-09-14T00:45:38.8509155Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8509836Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8510465Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8510790Z         
2025-09-14T00:45:38.8511521Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8512342Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8512922Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8513507Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8514057Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8514428Z         BadRequestDetail: 
2025-09-14T00:45:38.8516797Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.49s)
```

- 2025-09-15
  - PASS 3 seconds
  - PASS 4 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0654064Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-15T06:36:28.0654786Z     resource_test.go:258: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-09-15T06:36:28.0659910Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-15T06:36:28.0697492Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-09-15T06:36:28.0698098Z     resource_test.go:259: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0698464Z         
2025-09-15T06:36:28.0698755Z         Error: error creating resource
2025-09-15T06:36:28.0699034Z         
2025-09-15T06:36:28.0699402Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0700113Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0700774Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0701107Z         
2025-09-15T06:36:28.0701863Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0702694Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0703296Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0703908Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0704472Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0704866Z         BadRequestDetail: 
2025-09-15T06:36:28.0719349Z   
2025-09-15T06:36:28.0728933Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.52s)
```

- 2025-09-16 PASS 3 seconds
- 2025-09-17 PASS 4 seconds
- 2025-09-18 PASS 4 seconds
- 2025-09-19 PASS 3 seconds
- 2025-09-20 PASS 3 seconds
- 2025-09-21 PASS 4 seconds
- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 3 seconds
- 2025-09-25 PASS 4 seconds
- 2025-09-26 PASS 3 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-09-30
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-10-02 PASS 4 seconds