# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa | flaky_500 | 3.00s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor | qa |  | 33.04s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa |  | 0.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa |  | 0.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 12 seconds
- 2025-09-05 PASS 12 seconds
- 2025-09-06 PASS 12 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2462467Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-07T01:03:05.2463419Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-09-07T01:03:05.2469725Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-07T01:03:05.2591492Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-07T01:03:05.2592072Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2592438Z         
2025-09-07T01:03:05.2592714Z         Error: error creating resource
2025-09-07T01:03:05.2592985Z         
2025-09-07T01:03:05.2593347Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2594041Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2594681Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2595008Z         
2025-09-07T01:03:05.2596066Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2596894Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2597537Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-09-07T01:03:05.2598187Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2598837Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2599495Z         [processor-started-to-started connection named sample_stream_solar does not
2025-09-07T01:03:05.2600094Z         exist. Check sp.listConnections() for available connections],
2025-09-07T01:03:05.2600490Z         BadRequestDetail: 
2025-09-07T01:03:05.2616193Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_step_number=1 test_working_directory=/tmp/plugintest4228026039 test_terraform_path=/home/runner/work/_temp/4f895247-4d79-45c5-ba85-d71e6b632802/terraform
2025-09-07T01:03:05.2629599Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (3.04s)
```

- 2025-09-08
  - PASS 11 seconds
  - FAIL 33 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.4017544Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-08T09:53:42.4018406Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-09-08T09:53:42.4023503Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-08T09:53:42.4039535Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-08T09:53:42.4040088Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:53:42.4040438Z         
2025-09-08T09:53:42.4040711Z         Error: error creating resource
2025-09-08T09:53:42.4040971Z         
2025-09-08T09:53:42.4041319Z           with mongodbatlas_stream_processor.processor,
2025-09-08T09:53:42.4041991Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-08T09:53:42.4042613Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-08T09:53:42.4042961Z         
2025-09-08T09:53:42.4043693Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor
2025-09-08T09:53:42.4044496Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-08T09:53:42.4045136Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2025-09-08T09:53:42.4045760Z         problem occur: An internal error occurred. Reason: Bad Request. Params:
2025-09-08T09:53:42.4046400Z         [processor-started-to-started An internal error occurred], BadRequestDetail: 
2025-09-08T09:53:42.4059971Z    test_working_directory=/tmp/plugintest259266117
2025-09-08T09:53:42.4135896Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (33.36s)
```

  - PASS 11 seconds
- 2025-09-09 PASS 10 seconds
- 2025-09-10 PASS 12 seconds
- 2025-09-11 PASS 12 seconds
- 2025-09-12
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-09-13 PASS 12 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8204232Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-14T00:45:38.8204953Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-09-14T00:45:38.8210230Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-14T00:45:38.8333750Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-14T00:45:38.8334320Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8334673Z         
2025-09-14T00:45:38.8334945Z         Error: error creating resource
2025-09-14T00:45:38.8335210Z         
2025-09-14T00:45:38.8335707Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8336401Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8337035Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8337361Z         
2025-09-14T00:45:38.8338219Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8339195Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8339781Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8340380Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8340933Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8341309Z         BadRequestDetail: 
2025-09-14T00:45:38.8345745Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.91s)
```

- 2025-09-15
  - PASS 10 seconds
  - PASS 12 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0409372Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-15T06:36:28.0410101Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-09-15T06:36:28.0415344Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-15T06:36:28.0564285Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-15T06:36:28.0564867Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0565235Z         
2025-09-15T06:36:28.0565746Z         Error: error creating resource
2025-09-15T06:36:28.0566034Z         
2025-09-15T06:36:28.0566405Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0567250Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0567911Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0568246Z         
2025-09-15T06:36:28.0569001Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0569942Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0570546Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0571157Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0571723Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0572109Z         BadRequestDetail: 
2025-09-15T06:36:28.0576419Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.92s)
```

- 2025-09-16 PASS 11 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 12 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 10 seconds
- 2025-09-21 PASS 11 seconds
- 2025-09-22 PASS 12 seconds
- 2025-09-23 PASS 10 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 14 seconds
- 2025-09-26 PASS 14 seconds
- 2025-09-27 PASS 16 seconds
- 2025-09-28 PASS 12 seconds
- 2025-09-29
  - PASS 14 seconds
  - PASS 15 seconds
- 2025-09-30
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 14 seconds
  - PASS 13 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-10-02 PASS 13 seconds