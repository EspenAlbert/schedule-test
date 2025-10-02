# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL(x 4)
Success rate: 91.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:53](#error-2025-09-08t0953420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/connections/ClusterConnectionSrcqlqxb | qa | flaky_500 | 666.04s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections | qa |  | 522.04s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections | qa |  | 522.10s
[2025-09-29 00:53](#error-2025-09-29t0053320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68d9d2d197534351000fd533/streams/test-acc-tf-s-7677435686917158706/processor | dev |  | 671.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 21 minutes
- 2025-09-04 PASS 14 minutes
- 2025-09-05 PASS 12 minutes
- 2025-09-06 PASS 13 minutes
- 2025-09-07 PASS 28 minutes
- 2025-09-08
  - PASS 14 minutes
  - FAIL 11 minutes

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.4005172Z === RUN   TestAccStreamProcessor_withOptions
2025-09-08T09:53:42.4005854Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-1004310595763679535
2025-09-08T09:53:42.4006470Z 2025/09/08 09:33:05 [DEBUG] Waiting for state to become: [IDLE]
2025-09-08T09:53:42.4006965Z 2025/09/08 09:36:06 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.4007420Z 2025/09/08 09:37:08 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.4007993Z 2025/09/08 09:37:19 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.4008441Z 2025/09/08 09:38:19 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.4008851Z 2025/09/08 09:38:30 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.4009180Z 2025/09/08 09:39:30 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.4009509Z 2025/09/08 09:39:41 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.4009842Z 2025/09/08 09:40:42 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.4010189Z 2025/09/08 09:40:53 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.4010520Z 2025/09/08 09:41:55 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.4010852Z 2025/09/08 09:42:07 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.4169474Z === CONT  TestAccStreamProcessor_withOptions
2025-09-08T09:53:42.4222927Z === NAME  TestAccStreamProcessor_withOptions
2025-09-08T09:53:42.4223537Z     resource_test.go:109: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-08T09:53:42.4224236Z         
2025-09-08T09:53:42.4224586Z         Error: error deleting resource
2025-09-08T09:53:42.4224892Z         
2025-09-08T09:53:42.4225899Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/connections/ClusterConnectionSrcqlqxb
2025-09-08T09:53:42.4226950Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-09-08T09:53:42.4227625Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.4228288Z         BadRequestDetail: 
2025-09-08T09:53:42.4228541Z         
2025-09-08T09:53:42.4228812Z         Error: error deleting resource
2025-09-08T09:53:42.4229072Z         
2025-09-08T09:53:42.4230093Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/connections/KafkaConnectionDestqlqxb
2025-09-08T09:53:42.4231170Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-09-08T09:53:42.4231881Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.4232391Z         BadRequestDetail: 
2025-09-08T09:53:42.4232693Z --- FAIL: TestAccStreamProcessor_withOptions (666.38s)
```

  - PASS 12 minutes
- 2025-09-09 PASS 18 minutes
- 2025-09-10 PASS 15 minutes
- 2025-09-11 PASS 14 minutes
- 2025-09-12
  - PASS 10 minutes
  - PASS 8 minutes
- 2025-09-13 PASS 15 minutes
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8193030Z === RUN   TestAccStreamProcessor_withOptions
2025-09-14T00:45:38.8193541Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-1255306891912666198
2025-09-14T00:45:38.8194012Z 2025/09/14 00:29:24 [DEBUG] Waiting for state to become: [IDLE]
2025-09-14T00:45:38.8194406Z 2025/09/14 00:32:24 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.8194754Z 2025/09/14 00:33:24 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.8195098Z 2025/09/14 00:33:35 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.8195444Z 2025/09/14 00:34:35 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.8195783Z 2025/09/14 00:34:45 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.8196120Z 2025/09/14 00:35:45 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.8196599Z 2025/09/14 00:35:55 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.8196948Z 2025/09/14 00:36:55 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.8197283Z 2025/09/14 00:37:05 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.8521005Z === CONT  TestAccStreamProcessor_withOptions
2025-09-14T00:45:38.8582089Z === NAME  TestAccStreamProcessor_withOptions
2025-09-14T00:45:38.8582363Z     resource_test.go:109: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8582559Z         
2025-09-14T00:45:38.8582723Z         Error: error creating resource
2025-09-14T00:45:38.8582817Z         
2025-09-14T00:45:38.8583088Z           with mongodbatlas_stream_connection.cluster_src,
2025-09-14T00:45:38.8583571Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-09-14T00:45:38.8583916Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-09-14T00:45:38.8584005Z         
2025-09-14T00:45:38.8584651Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections
2025-09-14T00:45:38.8585012Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8585334Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8585656Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8585937Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8586077Z         BadRequestDetail: 
2025-09-14T00:45:38.8586163Z         
2025-09-14T00:45:38.8586331Z         Error: error creating resource
2025-09-14T00:45:38.8586422Z         
2025-09-14T00:45:38.8586674Z           with mongodbatlas_stream_connection.kafka_dest,
2025-09-14T00:45:38.8587156Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-09-14T00:45:38.8587498Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-09-14T00:45:38.8587584Z         
2025-09-14T00:45:38.8588321Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections
2025-09-14T00:45:38.8588651Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8588956Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8589289Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8589564Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8589697Z         BadRequestDetail: 
2025-09-14T00:45:38.8590002Z --- FAIL: TestAccStreamProcessor_withOptions (522.42s)
```

- 2025-09-15
  - PASS 10 minutes
  - PASS 8 minutes
  - FAIL 8 minutes

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0398239Z === RUN   TestAccStreamProcessor_withOptions
2025-09-15T06:36:28.0398767Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-550146181825810022
2025-09-15T06:36:28.0399254Z 2025/09/15 06:21:32 [DEBUG] Waiting for state to become: [IDLE]
2025-09-15T06:36:28.0399643Z 2025/09/15 06:24:33 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:28.0400000Z 2025/09/15 06:25:33 [TRACE] Waiting 10s before next try
2025-09-15T06:36:28.0400361Z 2025/09/15 06:25:43 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:28.0400709Z 2025/09/15 06:26:43 [TRACE] Waiting 10s before next try
2025-09-15T06:36:28.0401059Z 2025/09/15 06:26:53 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:28.0401408Z 2025/09/15 06:27:54 [TRACE] Waiting 10s before next try
2025-09-15T06:36:28.0401887Z 2025/09/15 06:28:04 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:28.0402238Z 2025/09/15 06:29:04 [TRACE] Waiting 10s before next try
2025-09-15T06:36:28.0402587Z 2025/09/15 06:29:14 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:28.0733474Z === CONT  TestAccStreamProcessor_withOptions
2025-09-15T06:36:28.0786788Z === NAME  TestAccStreamProcessor_withOptions
2025-09-15T06:36:28.0787096Z     resource_test.go:109: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0787193Z         
2025-09-15T06:36:28.0787375Z         Error: error creating resource
2025-09-15T06:36:28.0787474Z         
2025-09-15T06:36:28.0787747Z           with mongodbatlas_stream_connection.cluster_src,
2025-09-15T06:36:28.0788255Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-09-15T06:36:28.0788619Z           32:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-09-15T06:36:28.0788714Z         
2025-09-15T06:36:28.0789384Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections
2025-09-15T06:36:28.0789729Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0790049Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0790393Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0790683Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0790825Z         BadRequestDetail: 
2025-09-15T06:36:28.0790920Z         
2025-09-15T06:36:28.0791100Z         Error: error creating resource
2025-09-15T06:36:28.0791191Z         
2025-09-15T06:36:28.0791459Z           with mongodbatlas_stream_connection.kafka_dest,
2025-09-15T06:36:28.0791948Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-09-15T06:36:28.0792296Z           44:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-09-15T06:36:28.0792391Z         
2025-09-15T06:36:28.0793050Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections
2025-09-15T06:36:28.0793391Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0793715Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0794052Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0794334Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0794484Z         BadRequestDetail: 
2025-09-15T06:36:28.0801463Z   
2025-09-15T06:36:28.0805878Z --- FAIL: TestAccStreamProcessor_withOptions (522.96s)
```

- 2025-09-16 PASS 10 minutes
- 2025-09-17 PASS 10 minutes
- 2025-09-18 PASS 14 minutes
- 2025-09-19 PASS 12 minutes
- 2025-09-20 PASS 12 minutes
- 2025-09-21 PASS 10 minutes
- 2025-09-22 PASS 11 minutes
- 2025-09-23 PASS 11 minutes
- 2025-09-24 PASS 11 minutes
- 2025-09-25 PASS 11 minutes
- 2025-09-26 PASS 13 minutes
- 2025-09-27 PASS 11 minutes
- 2025-09-28 PASS 13 minutes
- 2025-09-29
  - FAIL 11 minutes

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4762194Z === RUN   TestAccStreamProcessor_withOptions
2025-09-29T00:53:32.4762758Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-7459280607890958083
2025-09-29T00:53:32.4763228Z 2025/09/29 00:29:08 [DEBUG] Waiting for state to become: [IDLE]
2025-09-29T00:53:32.4763591Z 2025/09/29 00:32:08 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4763930Z 2025/09/29 00:33:08 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4764266Z 2025/09/29 00:33:19 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4764604Z 2025/09/29 00:34:19 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4764936Z 2025/09/29 00:34:29 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4765271Z 2025/09/29 00:35:30 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4765604Z 2025/09/29 00:35:40 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4765931Z 2025/09/29 00:36:40 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4766260Z 2025/09/29 00:36:50 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4766588Z 2025/09/29 00:37:51 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4766920Z 2025/09/29 00:38:01 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4767255Z 2025/09/29 00:39:01 [TRACE] Waiting 10s before next try
2025-09-29T00:53:32.4767583Z 2025/09/29 00:39:12 [TRACE] Waiting 1m0s before next try
2025-09-29T00:53:32.4881327Z === CONT  TestAccStreamProcessor_withOptions
2025-09-29T00:53:32.4908363Z === NAME  TestAccStreamProcessor_withOptions
2025-09-29T00:53:32.4909054Z     resource_test.go:109: Step 1/2 error: Error running apply: exit status 1
2025-09-29T00:53:32.4909413Z         
2025-09-29T00:53:32.4909680Z         Error: error creating resource
2025-09-29T00:53:32.4909944Z         
2025-09-29T00:53:32.4910297Z           with mongodbatlas_stream_processor.processor,
2025-09-29T00:53:32.4910982Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-29T00:53:32.4911625Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-09-29T00:53:32.4911943Z         
2025-09-29T00:53:32.4912686Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d9d2d197534351000fd533/streams/test-acc-tf-s-7677435686917158706/processor
2025-09-29T00:53:32.4913501Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-29T00:53:32.4914137Z         Detail: Streams Processor with this name (new-processorsj1jx) had a problem
2025-09-29T00:53:32.4914770Z         occur: connection named KafkaConnectionDestsj1jx does not exist. Check
2025-09-29T00:53:32.4915407Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-29T00:53:32.4916230Z         [new-processorsj1jx connection named KafkaConnectionDestsj1jx does not exist.
2025-09-29T00:53:32.4916898Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2025-09-29T00:53:32.4917339Z --- FAIL: TestAccStreamProcessor_withOptions (671.09s)
```

  - PASS 8 minutes
- 2025-09-30
  - PASS 12 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-10-01
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 8 minutes
  - PASS 9 minutes
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 10 minutes
- 2025-10-02 PASS 10 minutes