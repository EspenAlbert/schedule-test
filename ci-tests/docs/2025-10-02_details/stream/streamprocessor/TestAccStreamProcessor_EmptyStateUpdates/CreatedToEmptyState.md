# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa |  | 1.06s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa |  | 0.05s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa |  | 0.05s
[2025-09-21 00:49](#error-2025-09-21t0049240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68cf46f35ccc8c441718a14e/streams/test-acc-tf-s-243573250589559974/processor/processor-created-to- | qa | flaky_500 | 17.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 4 seconds
- 2025-09-05 PASS 5 seconds
- 2025-09-06 PASS 4 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2631236Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-07T01:03:05.2632084Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-09-07T01:03:05.2637605Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-07T01:03:05.2654593Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-07T01:03:05.2655139Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2655494Z         
2025-09-07T01:03:05.2655877Z         Error: error creating resource
2025-09-07T01:03:05.2656139Z         
2025-09-07T01:03:05.2656621Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2657304Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2657939Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2658256Z         
2025-09-07T01:03:05.2659003Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2659825Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2660439Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-09-07T01:03:05.2661062Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2661709Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2662363Z         [processor-created-to- connection named sample_stream_solar does not exist.
2025-09-07T01:03:05.2663009Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2025-09-07T01:03:05.2679069Z   
2025-09-07T01:03:05.2719624Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.64s)
```

- 2025-09-08
  - PASS 6 seconds
  - PASS 17 seconds
  - PASS 4 seconds
- 2025-09-09 PASS 3 seconds
- 2025-09-10 PASS 5 seconds
- 2025-09-11 PASS 4 seconds
- 2025-09-12
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-09-13 PASS 6 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8346764Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-14T00:45:38.8347779Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-09-14T00:45:38.8354107Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-14T00:45:38.8429092Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-14T00:45:38.8429781Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8430215Z         
2025-09-14T00:45:38.8430531Z         Error: error creating resource
2025-09-14T00:45:38.8430811Z         
2025-09-14T00:45:38.8431302Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8432103Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8432847Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8433182Z         
2025-09-14T00:45:38.8434044Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8434968Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8435662Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8436375Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8437057Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8437442Z         BadRequestDetail: 
2025-09-14T00:45:38.8440063Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.49s)
```

- 2025-09-15
  - PASS 4 seconds
  - PASS 5 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0577315Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-15T06:36:28.0578181Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-09-15T06:36:28.0583460Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-15T06:36:28.0604508Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-15T06:36:28.0605077Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0605619Z         
2025-09-15T06:36:28.0605984Z         Error: error creating resource
2025-09-15T06:36:28.0606259Z         
2025-09-15T06:36:28.0606628Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0607323Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0607974Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0608309Z         
2025-09-15T06:36:28.0609067Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0609899Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0610498Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0611111Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0611677Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0612067Z         BadRequestDetail: 
2025-09-15T06:36:28.0620916Z   
2025-09-15T06:36:28.0652428Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.51s)
```

- 2025-09-16 PASS 4 seconds
- 2025-09-17 PASS 5 seconds
- 2025-09-18 PASS 5 seconds
- 2025-09-19 PASS 4 seconds
- 2025-09-20 PASS 4 seconds
- 2025-09-21

### Error 2025-09-21T00:49:24+00:00
```
2025-09-21T00:49:24.9722551Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-21T00:49:24.9723450Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-09-21T00:49:24.9729020Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-21T00:49:24.9752336Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-21T00:49:24.9752897Z     resource_test.go:218: Step 2/2 error: Error running apply: exit status 1
2025-09-21T00:49:24.9753277Z         
2025-09-21T00:49:24.9753604Z         Error: Error modifying stream processor
2025-09-21T00:49:24.9753891Z         
2025-09-21T00:49:24.9754307Z           with mongodbatlas_stream_processor.processor,
2025-09-21T00:49:24.9755306Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-21T00:49:24.9756152Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-21T00:49:24.9756539Z         
2025-09-21T00:49:24.9757451Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46f35ccc8c441718a14e/streams/test-acc-tf-s-243573250589559974/processor/processor-created-to-
2025-09-21T00:49:24.9758500Z         PATCH: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-21T00:49:24.9759127Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-09-21T00:49:24.9759740Z         problem occur: failed to get storage config: failed getting storage:
2025-09-21T00:49:24.9760449Z         connection pool for atlas-data-lake-qa-shard-00-01-ij2a0.mongodb.net:27016
2025-09-21T00:49:24.9761145Z         was cleared because another operation failed with: connection() error
2025-09-21T00:49:24.9761759Z         occurred during connection handshake: dial tcp 89.194.22.173:27016: i/o
2025-09-21T00:49:24.9762535Z         timeout. Reason: Bad Request. Params: [processor-created-to- failed to get
2025-09-21T00:49:24.9763143Z         storage config: failed getting storage: connection pool for
2025-09-21T00:49:24.9763768Z         atlas-data-lake-qa-shard-00-01-ij2a0.mongodb.net:27016 was cleared because
2025-09-21T00:49:24.9764483Z         another operation failed with: connection() error occurred during connection
2025-09-21T00:49:24.9765151Z         handshake: dial tcp 89.194.22.173:27016: i/o timeout], BadRequestDetail: 
2025-09-21T00:49:24.9779331Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-21T00:49:24.9789087Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (17.27s)
```

- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 4 seconds
- 2025-09-25 PASS 6 seconds
- 2025-09-26 PASS 5 seconds
- 2025-09-27 PASS 6 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-09-30
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-10-02 PASS 5 seconds