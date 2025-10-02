# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa | 1.07s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa | 0.05s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa | 0.05s
[2025-09-21 00:49](#error-2025-09-21t0049240000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68cf46f35ccc8c441718a14e/streams/test-acc-tf-s-243573250589559974/processor/processor-started-to- | qa | 59.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 11 seconds
- 2025-09-06 PASS 11 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2633266Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-07T01:03:05.2634209Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-09-07T01:03:05.2638547Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-07T01:03:05.2654274Z   
2025-09-07T01:03:05.2679396Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-07T01:03:05.2680087Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2680708Z         
2025-09-07T01:03:05.2681019Z         Error: error creating resource
2025-09-07T01:03:05.2681287Z         
2025-09-07T01:03:05.2681771Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2682592Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2683356Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2683686Z         
2025-09-07T01:03:05.2684572Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2685569Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2686457Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-09-07T01:03:05.2687143Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2687918Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2688713Z         [processor-started-to- connection named sample_stream_solar does not exist.
2025-09-07T01:03:05.2689479Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2025-09-07T01:03:05.2708016Z   
2025-09-07T01:03:05.2720331Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.66s)
```

- 2025-09-08
  - PASS 11 seconds
  - PASS 49 seconds
  - PASS 9 seconds
- 2025-09-09 PASS 9 seconds
- 2025-09-10 PASS 10 seconds
- 2025-09-11 PASS 11 seconds
- 2025-09-12
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8349309Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-14T00:45:38.8350271Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-09-14T00:45:38.8355197Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-14T00:45:38.8378071Z    test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_working_directory=/tmp/plugintest1120889872 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-14T00:45:38.8404197Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-14T00:45:38.8404867Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8405315Z         
2025-09-14T00:45:38.8405612Z         Error: error creating resource
2025-09-14T00:45:38.8405881Z         
2025-09-14T00:45:38.8406362Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8407167Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8407915Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8408426Z         
2025-09-14T00:45:38.8409287Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8410293Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8410967Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8411666Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8412333Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8412731Z         BadRequestDetail: 
2025-09-14T00:45:38.8428192Z    test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_working_directory=/tmp/plugintest3322879211 test_step_number=1
2025-09-14T00:45:38.8439411Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.48s)
```

- 2025-09-15
  - PASS 9 seconds
  - PASS 11 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0579381Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-15T06:36:28.0580233Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-09-15T06:36:28.0584432Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-15T06:36:28.0604186Z   
2025-09-15T06:36:28.0621232Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-15T06:36:28.0621792Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0622163Z         
2025-09-15T06:36:28.0622450Z         Error: error creating resource
2025-09-15T06:36:28.0622718Z         
2025-09-15T06:36:28.0623081Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0623784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0624426Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0624753Z         
2025-09-15T06:36:28.0625739Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0626591Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0627201Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0627818Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0628386Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0628780Z         BadRequestDetail: 
2025-09-15T06:36:28.0643054Z   
2025-09-15T06:36:28.0651801Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.51s)
```

- 2025-09-16 PASS 9 seconds
- 2025-09-17 PASS 11 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 10 seconds
- 2025-09-20 PASS 9 seconds
- 2025-09-21

### Error 2025-09-21T00:49:24+00:00
```
2025-09-21T00:49:24.9724712Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-21T00:49:24.9725547Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-09-21T00:49:24.9729982Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-21T00:49:24.9751933Z   
2025-09-21T00:49:24.9779975Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-21T00:49:24.9780548Z     resource_test.go:218: Step 2/2 error: Error running apply: exit status 1
2025-09-21T00:49:24.9780955Z         
2025-09-21T00:49:24.9781299Z         Error: Error modifying stream processor
2025-09-21T00:49:24.9781614Z         
2025-09-21T00:49:24.9782015Z           with mongodbatlas_stream_processor.processor,
2025-09-21T00:49:24.9782976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-21T00:49:24.9783636Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-21T00:49:24.9783978Z         
2025-09-21T00:49:24.9784879Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46f35ccc8c441718a14e/streams/test-acc-tf-s-243573250589559974/processor/processor-started-to-
2025-09-21T00:49:24.9785806Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-09-21T00:49:24.9786715Z         Detail: Streams Processor with this name (test-acc-tf-s-243573250589559974)
2025-09-21T00:49:24.9787377Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-09-21T00:49:24.9788022Z         [test-acc-tf-s-243573250589559974 processor-started-to-], BadRequestDetail: 
2025-09-21T00:49:24.9790357Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (59.78s)
```

- 2025-09-22 PASS 11 seconds
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