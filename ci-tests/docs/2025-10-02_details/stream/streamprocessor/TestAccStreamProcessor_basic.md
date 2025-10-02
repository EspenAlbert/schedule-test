# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar | qa |  | 0.05s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor/new-processor72uqk | qa |  | 54.08s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections/sample_stream_solar | qa |  | 0.04s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections/sample_stream_solar | qa | flaky_500 | 0.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05 PASS 12 seconds
- 2025-09-06 PASS 10 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2433646Z === RUN   TestAccStreamProcessor_basic
2025-09-07T01:03:05.2820836Z === CONT  TestAccStreamProcessor_basic
2025-09-07T01:03:05.2863782Z === NAME  TestAccStreamProcessor_basic
2025-09-07T01:03:05.2864272Z     resource_test.go:43: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-09-07T01:03:05.2864663Z         
2025-09-07T01:03:05.2864937Z         Error: error fetching resource
2025-09-07T01:03:05.2865203Z         
2025-09-07T01:03:05.2865574Z           with data.mongodbatlas_stream_connection.sample,
2025-09-07T01:03:05.2866355Z           on terraform_plugin_test.tf line 23, in data "mongodbatlas_stream_connection" "sample":
2025-09-07T01:03:05.2866968Z           23:             data "mongodbatlas_stream_connection" "sample" {
2025-09-07T01:03:05.2867277Z         
2025-09-07T01:03:05.2868144Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar
2025-09-07T01:03:05.2869039Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-07T01:03:05.2869634Z         Detail: Stream connection with name sample_stream_solar for project
2025-09-07T01:03:05.2870235Z         68bcd1d68704811492b53e30 and name test-acc-tf-s-8008636377946794826 not
2025-09-07T01:03:05.2870771Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-09-07T01:03:05.2871274Z         68bcd1d68704811492b53e30 test-acc-tf-s-8008636377946794826],
2025-09-07T01:03:05.2871662Z         BadRequestDetail: 
2025-09-07T01:03:05.2872368Z --- FAIL: TestAccStreamProcessor_basic (0.49s)
```

- 2025-09-08
  - PASS 10 seconds
  - FAIL 54 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.4003447Z === RUN   TestAccStreamProcessor_basic
2025-09-08T09:53:42.4170390Z === CONT  TestAccStreamProcessor_basic
2025-09-08T09:53:42.4192841Z === NAME  TestAccStreamProcessor_basic
2025-09-08T09:53:42.4193286Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2025-09-08T09:53:42.4193641Z         
2025-09-08T09:53:42.4194053Z         Error: Error modifying stream processor
2025-09-08T09:53:42.4194338Z         
2025-09-08T09:53:42.4194682Z           with mongodbatlas_stream_processor.processor,
2025-09-08T09:53:42.4195360Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-08T09:53:42.4196257Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-09-08T09:53:42.4196614Z         
2025-09-08T09:53:42.4197628Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor/new-processor72uqk
2025-09-08T09:53:42.4198805Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-09-08T09:53:42.4199523Z         Detail: Streams Processor with this name (test-acc-tf-s-2541198098558336914)
2025-09-08T09:53:42.4200219Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-09-08T09:53:42.4200937Z         [test-acc-tf-s-2541198098558336914 new-processor72uqk], BadRequestDetail: 
2025-09-08T09:53:42.4201472Z --- FAIL: TestAccStreamProcessor_basic (54.75s)
```

  - PASS 7 seconds
- 2025-09-09 PASS 8 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 9 seconds
- 2025-09-12
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-09-13 PASS 10 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8191542Z === RUN   TestAccStreamProcessor_basic
2025-09-14T00:45:38.8519938Z === CONT  TestAccStreamProcessor_basic
2025-09-14T00:45:38.8532747Z === NAME  TestAccStreamProcessor_basic
2025-09-14T00:45:38.8533055Z     resource_test.go:43: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-09-14T00:45:38.8533150Z         
2025-09-14T00:45:38.8533312Z         Error: error fetching resource
2025-09-14T00:45:38.8533403Z         
2025-09-14T00:45:38.8533662Z           with data.mongodbatlas_stream_connection.sample,
2025-09-14T00:45:38.8534086Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-09-14T00:45:38.8534376Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-09-14T00:45:38.8534584Z         
2025-09-14T00:45:38.8535324Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections/sample_stream_solar
2025-09-14T00:45:38.8535653Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8535964Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8536386Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8536658Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8536796Z         BadRequestDetail: 
2025-09-14T00:45:38.8536927Z --- FAIL: TestAccStreamProcessor_basic (0.40s)
```

- 2025-09-15
  - PASS 8 seconds
  - PASS 12 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0396847Z === RUN   TestAccStreamProcessor_basic
2025-09-15T06:36:28.0732696Z === CONT  TestAccStreamProcessor_basic
2025-09-15T06:36:28.0749280Z === NAME  TestAccStreamProcessor_basic
2025-09-15T06:36:28.0749605Z     resource_test.go:43: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-09-15T06:36:28.0749810Z         
2025-09-15T06:36:28.0749985Z         Error: error fetching resource
2025-09-15T06:36:28.0750082Z         
2025-09-15T06:36:28.0750358Z           with data.mongodbatlas_stream_connection.sample,
2025-09-15T06:36:28.0750820Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-09-15T06:36:28.0751132Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-09-15T06:36:28.0751234Z         
2025-09-15T06:36:28.0752021Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections/sample_stream_solar
2025-09-15T06:36:28.0752373Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0752704Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0753044Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0753338Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0753487Z         BadRequestDetail: 
2025-09-15T06:36:28.0757678Z   
2025-09-15T06:36:28.0762449Z --- FAIL: TestAccStreamProcessor_basic (0.45s)
```

- 2025-09-16 PASS 8 seconds
- 2025-09-17 PASS 10 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 9 seconds
- 2025-09-20 PASS 7 seconds
- 2025-09-21 PASS 9 seconds
- 2025-09-22 PASS 10 seconds
- 2025-09-23 PASS 8 seconds
- 2025-09-24 PASS 7 seconds
- 2025-09-25 PASS 11 seconds
- 2025-09-26 PASS 9 seconds
- 2025-09-27 PASS 15 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-09-30
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-10-01
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 9 seconds