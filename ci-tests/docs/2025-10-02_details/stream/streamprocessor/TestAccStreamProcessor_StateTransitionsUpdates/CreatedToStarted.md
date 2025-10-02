# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa | 3.01s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor | qa | 33.06s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa | 0.08s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa | 0.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds
- 2025-09-05 PASS 9 seconds
- 2025-09-06 PASS 7 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2458308Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-07T01:03:05.2459077Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-09-07T01:03:05.2470930Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-07T01:03:05.2617242Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-07T01:03:05.2617808Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2618169Z         
2025-09-07T01:03:05.2618444Z         Error: error creating resource
2025-09-07T01:03:05.2618720Z         
2025-09-07T01:03:05.2619076Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2619757Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2620401Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2620730Z         
2025-09-07T01:03:05.2621473Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2622288Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2622937Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-09-07T01:03:05.2623583Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2624222Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2624895Z         [processor-created-to-started connection named sample_stream_solar does not
2025-09-07T01:03:05.2625488Z         exist. Check sp.listConnections() for available connections],
2025-09-07T01:03:05.2626118Z         BadRequestDetail: 
2025-09-07T01:03:05.2630355Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (3.08s)
```

- 2025-09-08
  - PASS 8 seconds
  - FAIL 33 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.4014161Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-08T09:53:42.4014811Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-09-08T09:53:42.4025422Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-08T09:53:42.4039028Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-08T09:53:42.4081328Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-08T09:53:42.4081986Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:53:42.4082332Z         
2025-09-08T09:53:42.4082593Z         Error: error creating resource
2025-09-08T09:53:42.4082853Z         
2025-09-08T09:53:42.4083195Z           with mongodbatlas_stream_processor.processor,
2025-09-08T09:53:42.4083868Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-08T09:53:42.4084491Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-08T09:53:42.4084803Z         
2025-09-08T09:53:42.4085541Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor
2025-09-08T09:53:42.4086342Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-08T09:53:42.4086978Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-09-08T09:53:42.4087605Z         problem occur: An internal error occurred. Reason: Bad Request. Params:
2025-09-08T09:53:42.4088348Z         [processor-created-to-started An internal error occurred], BadRequestDetail: 
2025-09-08T09:53:42.4103828Z    test_terraform_path=/home/runner/work/_temp/e92aeba1-d956-4654-83ca-65d28d0cc8d8/terraform
2025-09-08T09:53:42.4137153Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (33.63s)
```

  - PASS 6 seconds
- 2025-09-09 PASS 7 seconds
- 2025-09-10 PASS 8 seconds
- 2025-09-11 PASS 8 seconds
- 2025-09-12
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-09-13 PASS 8 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8200794Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-14T00:45:38.8201441Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-09-14T00:45:38.8211209Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-14T00:45:38.8248908Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-14T00:45:38.8249477Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8249839Z         
2025-09-14T00:45:38.8250106Z         Error: error creating resource
2025-09-14T00:45:38.8250367Z         
2025-09-14T00:45:38.8250716Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8251400Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8252027Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8252350Z         
2025-09-14T00:45:38.8253087Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8253902Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8254486Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8255076Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8255630Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8256007Z         BadRequestDetail: 
2025-09-14T00:45:38.8269787Z   
2025-09-14T00:45:38.8342890Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.83s)
```

- 2025-09-15
  - PASS 7 seconds
  - PASS 9 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0405882Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-15T06:36:28.0406554Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-09-15T06:36:28.0417206Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-15T06:36:28.0541796Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-15T06:36:28.0542567Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0542945Z         
2025-09-15T06:36:28.0543235Z         Error: error creating resource
2025-09-15T06:36:28.0543514Z         
2025-09-15T06:36:28.0543883Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0544747Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0545395Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0545999Z         
2025-09-15T06:36:28.0546768Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0547614Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0548227Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0548991Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0549564Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0549956Z         BadRequestDetail: 
2025-09-15T06:36:28.0563952Z   
2025-09-15T06:36:28.0575010Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.90s)
```

- 2025-09-16 PASS 7 seconds
- 2025-09-17 PASS 8 seconds
- 2025-09-18 PASS 8 seconds
- 2025-09-19 PASS 8 seconds
- 2025-09-20 PASS 7 seconds
- 2025-09-21 PASS 8 seconds
- 2025-09-22 PASS 8 seconds
- 2025-09-23 PASS 6 seconds
- 2025-09-24 PASS 6 seconds
- 2025-09-25 PASS 10 seconds
- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 10 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-09-30
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-10-02 PASS 9 seconds