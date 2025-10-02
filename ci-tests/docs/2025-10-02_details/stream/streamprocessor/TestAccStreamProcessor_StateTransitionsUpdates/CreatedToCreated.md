# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa | 2.04s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor/processor-created-to-created | qa | 43.09s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa | 0.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa | 0.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 5 seconds
- 2025-09-05 PASS 7 seconds
- 2025-09-06 PASS 5 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2456059Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-07T01:03:05.2456921Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-09-07T01:03:05.2469222Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-07T01:03:05.2489200Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-07T01:03:05.2489765Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2490236Z         
2025-09-07T01:03:05.2490523Z         Error: error creating resource
2025-09-07T01:03:05.2490792Z         
2025-09-07T01:03:05.2491152Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2491844Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2492476Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2492802Z         
2025-09-07T01:03:05.2493554Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2494374Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2495015Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2025-09-07T01:03:05.2495663Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2496507Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2497173Z         [processor-created-to-created connection named sample_stream_solar does not
2025-09-07T01:03:05.2497769Z         exist. Check sp.listConnections() for available connections],
2025-09-07T01:03:05.2498167Z         BadRequestDetail: 
2025-09-07T01:03:05.2513968Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-07T01:03:05.2627055Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (2.45s)
```

- 2025-09-08
  - PASS 6 seconds
  - FAIL 43 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.4012195Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-08T09:53:42.4012938Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-09-08T09:53:42.4023025Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-08T09:53:42.4127348Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-08T09:53:42.4128004Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-08T09:53:42.4128366Z         
2025-09-08T09:53:42.4128779Z         Error: Error modifying stream processor
2025-09-08T09:53:42.4129059Z         
2025-09-08T09:53:42.4129402Z           with mongodbatlas_stream_processor.processor,
2025-09-08T09:53:42.4130075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-08T09:53:42.4130703Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-08T09:53:42.4131017Z         
2025-09-08T09:53:42.4131927Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor/processor-created-to-created
2025-09-08T09:53:42.4132853Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-09-08T09:53:42.4133477Z         Detail: Streams Processor with this name (test-acc-tf-s-2541198098558336914)
2025-09-08T09:53:42.4134040Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-09-08T09:53:42.4134582Z         [test-acc-tf-s-2541198098558336914 processor-created-to-created],
2025-09-08T09:53:42.4134980Z         BadRequestDetail: 
2025-09-08T09:53:42.4138515Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (43.89s)
```

  - PASS 5 seconds
- 2025-09-09 PASS 4 seconds
- 2025-09-10 PASS 5 seconds
- 2025-09-11 PASS 6 seconds
- 2025-09-12
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-09-13 PASS 6 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8198687Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-14T00:45:38.8199667Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-09-14T00:45:38.8209731Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-14T00:45:38.8317714Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-14T00:45:38.8318406Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8318765Z         
2025-09-14T00:45:38.8319039Z         Error: error creating resource
2025-09-14T00:45:38.8319303Z         
2025-09-14T00:45:38.8319652Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8320335Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8320966Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8321291Z         
2025-09-14T00:45:38.8322029Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8322839Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8323424Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8324024Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8324586Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8324967Z         BadRequestDetail: 
2025-09-14T00:45:38.8332678Z    test_working_directory=/tmp/plugintest842479044 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_step_number=1
2025-09-14T00:45:38.8344988Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.90s)
```

- 2025-09-15
  - PASS 5 seconds
  - PASS 7 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0403868Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-15T06:36:28.0404626Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-09-15T06:36:28.0414842Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-15T06:36:28.0523318Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-15T06:36:28.0524006Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0524375Z         
2025-09-15T06:36:28.0524763Z         Error: error creating resource
2025-09-15T06:36:28.0525062Z         
2025-09-15T06:36:28.0525673Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0526529Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0527313Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0527646Z         
2025-09-15T06:36:28.0528532Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0529550Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0530222Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0530967Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0531651Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0532160Z         BadRequestDetail: 
2025-09-15T06:36:28.0540587Z    test_working_directory=/tmp/plugintest319324069 test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/3cb86fb6-c69c-49a7-873f-7dee73528b05/terraform
2025-09-15T06:36:28.0573727Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.90s)
```

- 2025-09-16 PASS 5 seconds
- 2025-09-17 PASS 6 seconds
- 2025-09-18 PASS 6 seconds
- 2025-09-19 PASS 5 seconds
- 2025-09-20 PASS 5 seconds
- 2025-09-21 PASS 6 seconds
- 2025-09-22 PASS 6 seconds
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 5 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 6 seconds
- 2025-09-27 PASS 8 seconds
- 2025-09-28 PASS 5 seconds
- 2025-09-29
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-09-30
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-02 PASS 5 seconds