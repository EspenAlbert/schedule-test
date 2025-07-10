# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 20)
Success rate: 84.85%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-13 01:10](#error-2025-04-13t0110380000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-864335704228620223--CREATED-/processor | qa |  | 4.06s
[2025-04-16 00:45](#error-2025-04-16t0045120000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-6615842558262530846--CREATED-/processor | dev | flaky_500 | 1.01s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2673106094978490188--CREATED-/processor | qa | flaky_500 | 3.04s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-415622053534889678--CREATED-/processor | dev | flaky_500 | 1.06s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-3439666875068736725--CREATED-/processor | dev | flaky_500 | 1.01s
[2025-04-20 00:49](#error-2025-04-20t0049060000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-1894770884412951386--CREATED-/processor | qa |  | 5.04s
[2025-04-24 00:43](#error-2025-04-24t0043210000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-3416013407117141550--CREATED-/processor | dev |  | 6.04s
[2025-04-25 00:44](#error-2025-04-25t0044590000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-8141697684687277985--CREATED-/processor | dev |  | 3.03s
[2025-04-27 00:47](#error-2025-04-27t0047250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-4972684386381878716--CREATED-/processor | qa |  | 3.06s
[2025-04-30 09:23](#error-2025-04-30t0923010000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5611218889129581494--CREATED-/processor | qa |  | 3.10s
[2025-05-03 00:44](#error-2025-05-03t0044490000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-5498951046657509586--CREATED-/processor | dev |  | 3.10s
[2025-05-04 00:47](#error-2025-05-04t0047220000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-3765186414800086427--CREATED-/processor | qa |  | 4.00s
[2025-05-05 00:44](#error-2025-05-05t0044150000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-8012427230781074419--CREATED-/processor | dev |  | 2.06s
[2025-05-05 10:43](#error-2025-05-05t1043530000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-6945434717258396998--CREATED-/processor | qa |  | 4.02s
[2025-05-11 00:30](#error-2025-05-11t0030000000) |  | qa |  | 0.00s
[2025-05-23 00:49](#error-2025-05-23t0049480000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-4884973592290109012--CREATED-/processor | dev |  | 3.04s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efbaf7a0954e84ae563/streams | qa | flaky_500 | 30.08s
[2025-07-04 00:51](#error-2025-07-04t0051070000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.01s
[2025-07-05 00:44](#error-2025-07-05t0044070000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5368064871211553951--CREATED-/processor | dev |  | 31.05s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-8328272463840259236--CREATED-/connections | qa | flaky_500 | 61.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 seconds
- 2025-04-13

### Error 2025-04-13T01:10:38+00:00
```
2025-04-13T01:10:38.7870162Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-13T01:10:38.7871037Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-13T01:10:38.7876311Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-13T01:10:38.7939170Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-13T01:10:38.7939746Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-13T01:10:38.7940451Z         
2025-04-13T01:10:38.7940740Z         Error: error creating resource
2025-04-13T01:10:38.7941027Z         
2025-04-13T01:10:38.7941402Z           with mongodbatlas_stream_processor.processor,
2025-04-13T01:10:38.7942111Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-13T01:10:38.7942786Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-13T01:10:38.7943130Z         
2025-04-13T01:10:38.7943958Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-864335704228620223--CREATED-/processor
2025-04-13T01:10:38.7944836Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-13T01:10:38.7945470Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-13T01:10:38.7946134Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-13T01:10:38.7946801Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-13T01:10:38.7947462Z         [processor-created-to- failed to acquire resources for stream processor
2025-04-13T01:10:38.7948134Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-13T01:10:38.7978151Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-13T01:10:38.7979312Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-13T01:10:38.7980193Z         
2025-04-13T01:10:38.7980667Z         Error: error deleting resource
2025-04-13T01:10:38.7981106Z         
2025-04-13T01:10:38.7982665Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-864335704228620223--CREATED-/connections/sample_stream_solar
2025-04-13T01:10:38.7983973Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-13T01:10:38.7985035Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-13T01:10:38.7986119Z         name test-acc-tf-864335704228620223--CREATED- has active processors, and
2025-04-13T01:10:38.7986822Z         cannot be changed. Reason: Forbidden. Params:
2025-04-13T01:10:38.7987355Z         [test-acc-tf-864335704228620223--CREATED-], BadRequestDetail: 
2025-04-13T01:10:38.8003711Z   
2025-04-13T01:10:38.8033475Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (4.57s)
```

- 2025-04-14 PASS 10 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - FAIL a second

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.3621009Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T00:45:12.3621593Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-16T00:45:12.3624337Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T00:45:12.3642163Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T00:45:12.3642559Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3642660Z         
2025-04-16T00:45:12.3642836Z         Error: error creating resource
2025-04-16T00:45:12.3642937Z         
2025-04-16T00:45:12.3643191Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3643670Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3644237Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3644332Z         
2025-04-16T00:45:12.3645046Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-6615842558262530846--CREATED-/processor
2025-04-16T00:45:12.3645392Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3645763Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-16T00:45:12.3646070Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3646382Z         [processor-created-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3653046Z   
2025-04-16T00:45:12.3671642Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T00:45:12.3672020Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3672225Z         
2025-04-16T00:45:12.3672405Z         Error: error deleting resource
2025-04-16T00:45:12.3672500Z         
2025-04-16T00:45:12.3673330Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-6615842558262530846--CREATED-/connections/sample_stream_solar
2025-04-16T00:45:12.3673663Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3674217Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3674372Z         BadRequestDetail: 
2025-04-16T00:45:12.3679707Z   
2025-04-16T00:45:12.3683309Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.12s)
```

  - FAIL 3 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8688747Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T12:49:32.8689553Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-16T12:49:32.8691977Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T12:49:32.8704788Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T12:49:32.8705066Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8705162Z         
2025-04-16T12:49:32.8705331Z         Error: error creating resource
2025-04-16T12:49:32.8705424Z         
2025-04-16T12:49:32.8705686Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8706163Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8706475Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8706572Z         
2025-04-16T12:49:32.8707280Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2673106094978490188--CREATED-/processor
2025-04-16T12:49:32.8707726Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8708074Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-16T12:49:32.8708384Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8708696Z         [processor-created-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8712731Z    test_working_directory=/tmp/plugintest553281641 test_step_number=1 test_terraform_path=/home/runner/work/_temp/c09527d7-de0c-4201-9826-27350f0a89ff/terraform
2025-04-16T12:49:32.8747482Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T12:49:32.8747851Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8747950Z         
2025-04-16T12:49:32.8748118Z         Error: error deleting resource
2025-04-16T12:49:32.8748323Z         
2025-04-16T12:49:32.8749249Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-2673106094978490188--CREATED-/connections/sample_stream_solar
2025-04-16T12:49:32.8749584Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8749905Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8750047Z         BadRequestDetail: 
2025-04-16T12:49:32.8751164Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (3.42s)
```

  - FAIL a second

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0683282Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T14:37:27.0684070Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-16T14:37:27.0686608Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T14:37:27.0694085Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T14:37:27.0694378Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0694478Z         
2025-04-16T14:37:27.0694657Z         Error: error creating resource
2025-04-16T14:37:27.0694752Z         
2025-04-16T14:37:27.0695015Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0695508Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0695821Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0695911Z         
2025-04-16T14:37:27.0696632Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-415622053534889678--CREATED-/processor
2025-04-16T14:37:27.0697094Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0697440Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-16T14:37:27.0697747Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0698067Z         [processor-created-to- RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0704774Z   
2025-04-16T14:37:27.0725694Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-16T14:37:27.0726067Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0726157Z         
2025-04-16T14:37:27.0726330Z         Error: error deleting resource
2025-04-16T14:37:27.0726423Z         
2025-04-16T14:37:27.0727254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-415622053534889678--CREATED-/connections/sample_stream_solar
2025-04-16T14:37:27.0727593Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0727926Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0728080Z         BadRequestDetail: 
2025-04-16T14:37:27.0733687Z    test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_working_directory=/tmp/plugintest715771122
2025-04-16T14:37:27.0745046Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.58s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9649624Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-17T00:44:44.9650210Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-17T00:44:44.9652740Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-17T00:44:44.9689619Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-17T00:44:44.9689913Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9690010Z         
2025-04-17T00:44:44.9690190Z         Error: error creating resource
2025-04-17T00:44:44.9690281Z         
2025-04-17T00:44:44.9690549Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9691056Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9691490Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9691583Z         
2025-04-17T00:44:44.9692312Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-3439666875068736725--CREATED-/processor
2025-04-17T00:44:44.9692664Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9693016Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-17T00:44:44.9693341Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9693665Z         [processor-created-to- RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9699385Z   
2025-04-17T00:44:44.9707619Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-17T00:44:44.9708003Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9708301Z         
2025-04-17T00:44:44.9708493Z         Error: error deleting resource
2025-04-17T00:44:44.9708722Z         
2025-04-17T00:44:44.9709579Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-3439666875068736725--CREATED-/connections/sample_stream_solar
2025-04-17T00:44:44.9709920Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9710255Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9710402Z         BadRequestDetail: 
2025-04-17T00:44:44.9715716Z    test_working_directory=/tmp/plugintest83470338 test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-04-17T00:44:44.9719428Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.06s)
```

- 2025-04-18 PASS 11 seconds
- 2025-04-19 PASS 9 seconds
- 2025-04-20

### Error 2025-04-20T00:49:06+00:00
```
2025-04-20T00:49:06.9950809Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-20T00:49:06.9952544Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-20T00:49:06.9962370Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-20T00:49:07.0038744Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-20T00:49:07.0039765Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-20T00:49:07.0040408Z         
2025-04-20T00:49:07.0040894Z         Error: error creating resource
2025-04-20T00:49:07.0041366Z         
2025-04-20T00:49:07.0042005Z           with mongodbatlas_stream_processor.processor,
2025-04-20T00:49:07.0043465Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-20T00:49:07.0044637Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-20T00:49:07.0045212Z         
2025-04-20T00:49:07.0046700Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-1894770884412951386--CREATED-/processor
2025-04-20T00:49:07.0048442Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-20T00:49:07.0049571Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-20T00:49:07.0050739Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-20T00:49:07.0051929Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-20T00:49:07.0053268Z         [processor-created-to- failed to acquire resources for stream processor
2025-04-20T00:49:07.0054479Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-20T00:49:07.0083720Z   
2025-04-20T00:49:07.0125593Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-20T00:49:07.0126248Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-20T00:49:07.0126677Z         
2025-04-20T00:49:07.0126965Z         Error: error deleting resource
2025-04-20T00:49:07.0127226Z         
2025-04-20T00:49:07.0128163Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-1894770884412951386--CREATED-/connections/sample_stream_solar
2025-04-20T00:49:07.0128969Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-20T00:49:07.0129510Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-20T00:49:07.0130142Z         name test-acc-tf-1894770884412951386--CREATED- has active processors, and
2025-04-20T00:49:07.0130656Z         cannot be changed. Reason: Forbidden. Params:
2025-04-20T00:49:07.0131166Z         [test-acc-tf-1894770884412951386--CREATED-], BadRequestDetail: 
2025-04-20T00:49:07.0144681Z   
2025-04-20T00:49:07.0152708Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (5.38s)
```

- 2025-04-21 PASS 11 seconds
- 2025-04-22 PASS 10 seconds
- 2025-04-23 PASS 8 seconds
- 2025-04-24

### Error 2025-04-24T00:43:21+00:00
```
2025-04-24T00:43:21.1323465Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-24T00:43:21.1324312Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-24T00:43:21.1329618Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-24T00:43:21.1346969Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-24T00:43:21.1347515Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-24T00:43:21.1347866Z         
2025-04-24T00:43:21.1348139Z         Error: error creating resource
2025-04-24T00:43:21.1348401Z         
2025-04-24T00:43:21.1348753Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1349557Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1350198Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1350525Z         
2025-04-24T00:43:21.1351319Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-3416013407117141550--CREATED-/processor
2025-04-24T00:43:21.1352372Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1352988Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-24T00:43:21.1353622Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1354273Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1354909Z         [processor-created-to- failed to acquire resources for stream processor
2025-04-24T00:43:21.1355565Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-24T00:43:21.1368333Z   
2025-04-24T00:43:21.1368793Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1369229Z         
2025-04-24T00:43:21.1369496Z         Error: error deleting resource
2025-04-24T00:43:21.1369765Z         
2025-04-24T00:43:21.1370684Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-3416013407117141550--CREATED-/connections/sample_stream_solar
2025-04-24T00:43:21.1371469Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1372110Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1372866Z         name test-acc-tf-3416013407117141550--CREATED- has active processors, and
2025-04-24T00:43:21.1373376Z         cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1373879Z         [test-acc-tf-3416013407117141550--CREATED-], BadRequestDetail: 
2025-04-24T00:43:21.1389373Z    test_working_directory=/tmp/plugintest2206420263 test_step_number=1 test_terraform_path=/home/runner/work/_temp/5edcbd20-a505-4ac5-832d-94520538c2a4/terraform
2025-04-24T00:43:21.1463080Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (6.39s)
```

- 2025-04-25

### Error 2025-04-25T00:44:59+00:00
```
2025-04-25T00:44:59.2432781Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-25T00:44:59.2433656Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-25T00:44:59.2439322Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-25T00:44:59.2458152Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-25T00:44:59.2458723Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-25T00:44:59.2459107Z         
2025-04-25T00:44:59.2459402Z         Error: error creating resource
2025-04-25T00:44:59.2459682Z         
2025-04-25T00:44:59.2460052Z           with mongodbatlas_stream_processor.processor,
2025-04-25T00:44:59.2460947Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-25T00:44:59.2461601Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-25T00:44:59.2461935Z         
2025-04-25T00:44:59.2462745Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-8141697684687277985--CREATED-/processor
2025-04-25T00:44:59.2463615Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-25T00:44:59.2464242Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-25T00:44:59.2464930Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-25T00:44:59.2465841Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-25T00:44:59.2466509Z         [processor-created-to- failed to acquire resources for stream processor
2025-04-25T00:44:59.2467191Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-25T00:44:59.2479808Z    test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_terraform_path=/home/runner/work/_temp/97b16c68-53af-415f-bd2a-579359186db8/terraform
2025-04-25T00:44:59.2480842Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-25T00:44:59.2481285Z         
2025-04-25T00:44:59.2481574Z         Error: error deleting resource
2025-04-25T00:44:59.2481857Z         
2025-04-25T00:44:59.2482794Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-8141697684687277985--CREATED-/connections/sample_stream_solar
2025-04-25T00:44:59.2483609Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-25T00:44:59.2484156Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-25T00:44:59.2484938Z         name test-acc-tf-8141697684687277985--CREATED- has active processors, and
2025-04-25T00:44:59.2485594Z         cannot be changed. Reason: Forbidden. Params:
2025-04-25T00:44:59.2486337Z         [test-acc-tf-8141697684687277985--CREATED-], BadRequestDetail: 
2025-04-25T00:44:59.2501777Z    test_terraform_path=/home/runner/work/_temp/97b16c68-53af-415f-bd2a-579359186db8/terraform test_working_directory=/tmp/plugintest3453616683 test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-25T00:44:59.2531336Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (3.29s)
```

- 2025-04-26 PASS 20 seconds
- 2025-04-27

### Error 2025-04-27T00:47:25+00:00
```
2025-04-27T00:47:25.4516116Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-27T00:47:25.4516973Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-27T00:47:25.4522484Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-27T00:47:25.4564677Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-27T00:47:25.4565238Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-27T00:47:25.4565610Z         
2025-04-27T00:47:25.4565890Z         Error: error creating resource
2025-04-27T00:47:25.4566163Z         
2025-04-27T00:47:25.4566524Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4567222Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4567988Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4568554Z         
2025-04-27T00:47:25.4569375Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-4972684386381878716--CREATED-/processor
2025-04-27T00:47:25.4570242Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4570858Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-27T00:47:25.4571501Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4572154Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4572797Z         [processor-created-to- failed to acquire resources for stream processor
2025-04-27T00:47:25.4573467Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-27T00:47:25.4586069Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-04-27T00:47:25.4605535Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-27T00:47:25.4606179Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4606610Z         
2025-04-27T00:47:25.4606885Z         Error: error deleting resource
2025-04-27T00:47:25.4607152Z         
2025-04-27T00:47:25.4608290Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-4972684386381878716--CREATED-/connections/sample_stream_solar
2025-04-27T00:47:25.4609114Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4609644Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4610291Z         name test-acc-tf-4972684386381878716--CREATED- has active processors, and
2025-04-27T00:47:25.4610807Z         cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4611304Z         [test-acc-tf-4972684386381878716--CREATED-], BadRequestDetail: 
2025-04-27T00:47:25.4627283Z   
2025-04-27T00:47:25.4657755Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (3.56s)
```

- 2025-04-28 PASS 6 seconds
- 2025-04-29 PASS 5 seconds
- 2025-04-30
  - PASS 9 seconds
  - FAIL 3 seconds

### Error 2025-04-30T09:23:01+00:00
```
2025-04-30T09:23:01.8312915Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-30T09:23:01.8314074Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-04-30T09:23:01.8319742Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-30T09:23:01.8362675Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-30T09:23:01.8363332Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-04-30T09:23:01.8363690Z         
2025-04-30T09:23:01.8363963Z         Error: error creating resource
2025-04-30T09:23:01.8364221Z         
2025-04-30T09:23:01.8364576Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8365260Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8365892Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8366213Z         
2025-04-30T09:23:01.8367005Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5611218889129581494--CREATED-/processor
2025-04-30T09:23:01.8367846Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8368452Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-04-30T09:23:01.8369087Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8369730Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8370367Z         [processor-created-to- failed to acquire resources for stream processor
2025-04-30T09:23:01.8371161Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-04-30T09:23:01.8386924Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform
2025-04-30T09:23:01.8428634Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-04-30T09:23:01.8429288Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8429717Z         
2025-04-30T09:23:01.8429988Z         Error: error deleting resource
2025-04-30T09:23:01.8430251Z         
2025-04-30T09:23:01.8431174Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-5611218889129581494--CREATED-/connections/sample_stream_solar
2025-04-30T09:23:01.8431970Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8432495Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8433340Z         name test-acc-tf-5611218889129581494--CREATED- has active processors, and
2025-04-30T09:23:01.8433852Z         cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8434348Z         [test-acc-tf-5611218889129581494--CREATED-], BadRequestDetail: 
2025-04-30T09:23:01.8446379Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform
2025-04-30T09:23:01.8454649Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (3.96s)
```

- 2025-05-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 9 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 5 seconds
- 2025-05-03

### Error 2025-05-03T00:44:49+00:00
```
2025-05-03T00:44:49.1462660Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-03T00:44:49.1463532Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-05-03T00:44:49.1469010Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-03T00:44:49.1489016Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-03T00:44:49.1489629Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-03T00:44:49.1490116Z         
2025-05-03T00:44:49.1490392Z         Error: error creating resource
2025-05-03T00:44:49.1490767Z         
2025-05-03T00:44:49.1491132Z           with mongodbatlas_stream_processor.processor,
2025-05-03T00:44:49.1491955Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-03T00:44:49.1492712Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-03T00:44:49.1493091Z         
2025-05-03T00:44:49.1494067Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-5498951046657509586--CREATED-/processor
2025-05-03T00:44:49.1495071Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-03T00:44:49.1495811Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-05-03T00:44:49.1496570Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-03T00:44:49.1497335Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-03T00:44:49.1498291Z         [processor-created-to- failed to acquire resources for stream processor
2025-05-03T00:44:49.1499100Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-03T00:44:49.1514217Z    test_step_number=1
2025-05-03T00:44:49.1514837Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-03T00:44:49.1515372Z         
2025-05-03T00:44:49.1515816Z         Error: error deleting resource
2025-05-03T00:44:49.1516209Z         
2025-05-03T00:44:49.1517326Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-5498951046657509586--CREATED-/connections/sample_stream_solar
2025-05-03T00:44:49.1518369Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-03T00:44:49.1519029Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-03T00:44:49.1519802Z         name test-acc-tf-5498951046657509586--CREATED- has active processors, and
2025-05-03T00:44:49.1520475Z         cannot be changed. Reason: Forbidden. Params:
2025-05-03T00:44:49.1521048Z         [test-acc-tf-5498951046657509586--CREATED-], BadRequestDetail: 
2025-05-03T00:44:49.1522214Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (3.95s)
```

- 2025-05-04

### Error 2025-05-04T00:47:22+00:00
```
2025-05-04T00:47:22.2166112Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-04T00:47:22.2166957Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-05-04T00:47:22.2172525Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-04T00:47:22.2189365Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-04T00:47:22.2189916Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-04T00:47:22.2190270Z         
2025-05-04T00:47:22.2190534Z         Error: error creating resource
2025-05-04T00:47:22.2190796Z         
2025-05-04T00:47:22.2191145Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2191940Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2192561Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2192874Z         
2025-05-04T00:47:22.2193652Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-3765186414800086427--CREATED-/processor
2025-05-04T00:47:22.2194603Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2195212Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-05-04T00:47:22.2195833Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2196460Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2197111Z         [processor-created-to- failed to acquire resources for stream processor
2025-05-04T00:47:22.2197914Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-04T00:47:22.2213139Z    test_working_directory=/tmp/plugintest946590025 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_step_number=1 test_terraform_path=/home/runner/work/_temp/2e875f25-0b50-4e0c-86b1-13eb71f11cba/terraform
2025-05-04T00:47:22.2235653Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-04T00:47:22.2236282Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2236709Z         
2025-05-04T00:47:22.2236975Z         Error: error deleting resource
2025-05-04T00:47:22.2237232Z         
2025-05-04T00:47:22.2238137Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-3765186414800086427--CREATED-/connections/sample_stream_solar
2025-05-04T00:47:22.2238938Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2239469Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2240085Z         name test-acc-tf-3765186414800086427--CREATED- has active processors, and
2025-05-04T00:47:22.2240586Z         cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2241098Z         [test-acc-tf-3765186414800086427--CREATED-], BadRequestDetail: 
2025-05-04T00:47:22.2254126Z    test_working_directory=/tmp/plugintest946590025
2025-05-04T00:47:22.2326285Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (4.05s)
```

- 2025-05-05
  - FAIL 2 seconds

### Error 2025-05-05T00:44:15+00:00
```
2025-05-05T00:44:15.7504584Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-05T00:44:15.7505458Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-05-05T00:44:15.7527212Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-05T00:44:15.7557315Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-05T00:44:15.7558268Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-05T00:44:15.7558865Z         
2025-05-05T00:44:15.7559319Z         Error: error creating resource
2025-05-05T00:44:15.7559750Z         
2025-05-05T00:44:15.7560335Z           with mongodbatlas_stream_processor.processor,
2025-05-05T00:44:15.7561640Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T00:44:15.7562900Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T00:44:15.7563440Z         
2025-05-05T00:44:15.7564635Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-8012427230781074419--CREATED-/processor
2025-05-05T00:44:15.7565518Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T00:44:15.7566137Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-05-05T00:44:15.7566779Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T00:44:15.7567425Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T00:44:15.7568059Z         [processor-created-to- failed to acquire resources for stream processor
2025-05-05T00:44:15.7568709Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-05T00:44:15.7581360Z    test_working_directory=/tmp/plugintest2784259098 test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_terraform_path=/home/runner/work/_temp/f4ca3d7f-04d2-457f-82a1-28d798808c42/terraform
2025-05-05T00:44:15.7582498Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T00:44:15.7582930Z         
2025-05-05T00:44:15.7583215Z         Error: error deleting resource
2025-05-05T00:44:15.7583489Z         
2025-05-05T00:44:15.7584425Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-8012427230781074419--CREATED-/connections/sample_stream_solar
2025-05-05T00:44:15.7585234Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T00:44:15.7585770Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T00:44:15.7586407Z         name test-acc-tf-8012427230781074419--CREATED- has active processors, and
2025-05-05T00:44:15.7586923Z         cannot be changed. Reason: Forbidden. Params:
2025-05-05T00:44:15.7587565Z         [test-acc-tf-8012427230781074419--CREATED-], BadRequestDetail: 
2025-05-05T00:44:15.7588553Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (2.55s)
```

  - FAIL 4 seconds

### Error 2025-05-05T10:43:53+00:00
```
2025-05-05T10:43:53.8703924Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-05T10:43:53.8704775Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-05-05T10:43:53.8710134Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-05T10:43:53.8770067Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-05T10:43:53.8770622Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-05T10:43:53.8770978Z         
2025-05-05T10:43:53.8771247Z         Error: error creating resource
2025-05-05T10:43:53.8771505Z         
2025-05-05T10:43:53.8771867Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8772568Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8773216Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8773541Z         
2025-05-05T10:43:53.8774331Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-6945434717258396998--CREATED-/processor
2025-05-05T10:43:53.8775190Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8775796Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-05-05T10:43:53.8776534Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8777168Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8777799Z         [processor-created-to- failed to acquire resources for stream processor
2025-05-05T10:43:53.8778453Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-05T10:43:53.8790802Z    test_terraform_path=/home/runner/work/_temp/505e3c05-4642-40db-925f-06835467fcdd/terraform test_working_directory=/tmp/plugintest582856655 test_step_number=1
2025-05-05T10:43:53.8791726Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8792148Z         
2025-05-05T10:43:53.8792417Z         Error: error deleting resource
2025-05-05T10:43:53.8792690Z         
2025-05-05T10:43:53.8793591Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-6945434717258396998--CREATED-/connections/sample_stream_solar
2025-05-05T10:43:53.8794383Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8794907Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8795524Z         name test-acc-tf-6945434717258396998--CREATED- has active processors, and
2025-05-05T10:43:53.8796140Z         cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8796642Z         [test-acc-tf-6945434717258396998--CREATED-], BadRequestDetail: 
2025-05-05T10:43:53.8812802Z   
2025-05-05T10:43:53.8860911Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (4.22s)
```

- 2025-05-06 PASS 6 seconds
- 2025-05-07
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 10 seconds
- 2025-05-08 PASS 7 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 5 seconds
- 2025-05-11

### Error 2025-05-11T00:30:00+00:00
```
2025-05-11T00:30:00.1047715Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-11T00:30:00.1049393Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-05-11T00:30:00.1050991Z     resource_test.go:210: Creating execution project: test-acc-tf-p-2283422202182484685
2025-05-11T00:30:00.1052220Z     resource_test.go:210: 
2025-05-11T00:30:00.1053959Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1057461Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1061149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1064962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:210
2025-05-11T00:30:00.1066453Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1068182Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1069524Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-11T00:30:00.1071550Z         	Messages:   	Project creation failed: test-acc-tf-p-2283422202182484685, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1107479Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.02s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 6 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 8 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-05-23

### Error 2025-05-23T00:49:48+00:00
```
2025-05-23T00:49:48.7821088Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-23T00:49:48.7821948Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-05-23T00:49:48.7827342Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-23T00:49:48.7845003Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-05-23T00:49:48.7845563Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.7845940Z         
2025-05-23T00:49:48.7846220Z         Error: error creating resource
2025-05-23T00:49:48.7846495Z         
2025-05-23T00:49:48.7846860Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7847548Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7848190Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7848521Z         
2025-05-23T00:49:48.7849329Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-4884973592290109012--CREATED-/processor
2025-05-23T00:49:48.7850187Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7850806Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-05-23T00:49:48.7851448Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7852102Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7852863Z         [processor-created-to- failed to acquire resources for stream processor
2025-05-23T00:49:48.7853646Z         validation: global resource manager returned no resources], BadRequestDetail:
2025-05-23T00:49:48.7866664Z   
2025-05-23T00:49:48.7867133Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.7867567Z         
2025-05-23T00:49:48.7867848Z         Error: error deleting resource
2025-05-23T00:49:48.7868119Z         
2025-05-23T00:49:48.7869044Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-4884973592290109012--CREATED-/connections/sample_stream_solar
2025-05-23T00:49:48.7869845Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.7870389Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.7871030Z         name test-acc-tf-4884973592290109012--CREATED- has active processors, and
2025-05-23T00:49:48.7871543Z         cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.7872049Z         [test-acc-tf-4884973592290109012--CREATED-], BadRequestDetail: 
2025-05-23T00:49:48.7888018Z    test_working_directory=/tmp/plugintest913117154 test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-05-23T00:49:48.7962444Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (3.43s)
```

- 2025-05-24 PASS 7 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 8 seconds
- 2025-05-27
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-05-29
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-05-30
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-05-31 PASS 7 seconds
- 2025-06-01
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-06-03
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-06-04 PASS 8 seconds
- 2025-06-05 PASS 5 seconds
- 2025-06-06 PASS 6 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 6 seconds
- 2025-06-10 PASS 8 seconds
- 2025-06-11
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 8 seconds
- 2025-06-14 PASS 7 seconds
- 2025-06-15 PASS 8 seconds
- 2025-06-16 PASS 5 seconds
- 2025-06-17 PASS 6 seconds
- 2025-06-18
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 6 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.8389324Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-22T00:49:55.8390156Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-22T00:49:55.8395675Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-22T00:49:55.8424684Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-22T00:49:55.8425229Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8425577Z         
2025-06-22T00:49:55.8425840Z         Error: error creating resource
2025-06-22T00:49:55.8426096Z         
2025-06-22T00:49:55.8426421Z           with mongodbatlas_stream_instance.instance,
2025-06-22T00:49:55.8427069Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-06-22T00:49:55.8427667Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-06-22T00:49:55.8427970Z         
2025-06-22T00:49:55.8428458Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efbaf7a0954e84ae563/streams
2025-06-22T00:49:55.8429118Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8429686Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8430058Z         BadRequestDetail: 
2025-06-22T00:49:55.8442998Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest733097844 test_step_number=1
2025-06-22T00:49:55.8452803Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (30.76s)
```

- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-26
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 8 seconds
- 2025-07-01
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04

### Error 2025-07-04T00:51:07+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-04T00:51:07.708000+00:00-TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-04T00:51:07.7084999Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-04T00:51:07.7085854Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-04T00:51:07.7091275Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-04T00:51:07.7110941Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-04T00:51:07.7111502Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-04T00:51:07.7111886Z         
2025-07-04T00:51:07.7112173Z         Error: error creating resource
2025-07-04T00:51:07.7112446Z         
2025-07-04T00:51:07.7112819Z           with mongodbatlas_stream_processor.processor,
2025-07-04T00:51:07.7113515Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-07-04T00:51:07.7114166Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-04T00:51:07.7114505Z         
2025-07-04T00:51:07.7115319Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-7540327099908465412--CREATED-/processor
2025-07-04T00:51:07.7116185Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-04T00:51:07.7116804Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-07-04T00:51:07.7117451Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-04T00:51:07.7118098Z         internal error while provisioning resource from global resource manager.
2025-07-04T00:51:07.7119278Z         Reason: Bad Request. Params: [processor-created-to- failed to acquire
2025-07-04T00:51:07.7119999Z         resources for stream processor validation: internal error while provisioning
2025-07-04T00:51:07.7120598Z         resource from global resource manager], BadRequestDetail: 
2025-07-04T00:51:07.7133118Z    test_terraform_path=/home/runner/work/_temp/c3d41cd1-2970-494b-9abe-ad1b88c82e94/terraform test_working_directory=/tmp/plugintest898226313 test_step_number=1
2025-07-04T00:51:07.7134055Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T00:51:07.7134491Z         
2025-07-04T00:51:07.7134778Z         Error: error deleting resource
2025-07-04T00:51:07.7135055Z         
2025-07-04T00:51:07.7135986Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-7540327099908465412--CREATED-/connections/sample_stream_solar
2025-07-04T00:51:07.7136803Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-04T00:51:07.7137350Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-04T00:51:07.7137986Z         name test-acc-tf-7540327099908465412--CREATED- has active processors, and
2025-07-04T00:51:07.7138754Z         cannot be changed. Reason: Forbidden. Params:
2025-07-04T00:51:07.7139281Z         [test-acc-tf-7540327099908465412--CREATED-], BadRequestDetail: 
2025-07-04T00:51:07.7141561Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (31.07s)
```

- 2025-07-05

### Error 2025-07-05T00:44:07+00:00
```
2025-07-05T00:44:07.5913639Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-05T00:44:07.5915350Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-05T00:44:07.5924744Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-05T00:44:07.5956953Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-05T00:44:07.5957929Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-05T00:44:07.5958550Z         
2025-07-05T00:44:07.5959006Z         Error: error creating resource
2025-07-05T00:44:07.5959453Z         
2025-07-05T00:44:07.5960056Z           with mongodbatlas_stream_processor.processor,
2025-07-05T00:44:07.5961262Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-05T00:44:07.5962386Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-05T00:44:07.5962936Z         
2025-07-05T00:44:07.5964647Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5368064871211553951--CREATED-/processor
2025-07-05T00:44:07.5966197Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-05T00:44:07.5967276Z         Detail: Streams Processor with this name (processor-created-to-) had a
2025-07-05T00:44:07.5968384Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-05T00:44:07.5969494Z         internal error while provisioning resource from global resource manager.
2025-07-05T00:44:07.5970562Z         Reason: Bad Request. Params: [processor-created-to- failed to acquire
2025-07-05T00:44:07.5971841Z         resources for stream processor validation: internal error while provisioning
2025-07-05T00:44:07.5972857Z         resource from global resource manager], BadRequestDetail: 
2025-07-05T00:44:07.5994592Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/503c00e9-2f1d-4f06-8735-86b25f02f37b/terraform test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_working_directory=/tmp/plugintest611322819
2025-07-05T00:44:07.5996747Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T00:44:07.5997497Z         
2025-07-05T00:44:07.5997958Z         Error: error deleting resource
2025-07-05T00:44:07.5998400Z         
2025-07-05T00:44:07.6000065Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5368064871211553951--CREATED-/connections/sample_stream_solar
2025-07-05T00:44:07.6001511Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-05T00:44:07.6002443Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-05T00:44:07.6003553Z         name test-acc-tf-5368064871211553951--CREATED- has active processors, and
2025-07-05T00:44:07.6004618Z         cannot be changed. Reason: Forbidden. Params:
2025-07-05T00:44:07.6005484Z         [test-acc-tf-5368064871211553951--CREATED-], BadRequestDetail: 
2025-07-05T00:44:07.6009397Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (31.47s)
```

- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0205681Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0206521Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-07-06T00:48:43.0211848Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0240757Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0241295Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0241653Z         
2025-07-06T00:48:43.0241917Z         Error: error creating resource
2025-07-06T00:48:43.0242168Z         
2025-07-06T00:48:43.0242502Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0243150Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0243755Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0244062Z         
2025-07-06T00:48:43.0244849Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-8328272463840259236--CREATED-/connections
2025-07-06T00:48:43.0245715Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0246275Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0246654Z         BadRequestDetail: 
2025-07-06T00:48:43.0258666Z    test_working_directory=/tmp/plugintest2938323192
2025-07-06T00:48:43.0275507Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0276142Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0276564Z         
2025-07-06T00:48:43.0276844Z         Error: error during resource delete
2025-07-06T00:48:43.0277108Z         
2025-07-06T00:48:43.0277953Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-8328272463840259236--CREATED-
2025-07-06T00:48:43.0278746Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0279334Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0279731Z         BadRequestDetail: 
2025-07-06T00:48:43.0281964Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (61.00s)
```

- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10 PASS 9 seconds