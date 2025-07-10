# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-8188033505318181204/connections/test-acc-tf-8188033505318181204 | dev | flaky_500 | 5.06s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-8581822739981390636/connections/test-acc-tf-8581822739981390636 | qa | flaky_500 | 6.02s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-4634574634951452639/connections/test-acc-tf-4634574634951452639 | dev | flaky_500 | 6.01s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-2460113111843605285/connections/test-acc-tf-2460113111843605285 | dev | flaky_500 | 5.06s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams | qa | flaky_500 | 31.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 7 seconds
- 2025-04-13 PASS 7 seconds
- 2025-04-14 PASS 8 seconds
- 2025-04-15 PASS 7 seconds
- 2025-04-16
  - FAIL 5 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2910674Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.2954249Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.3085993Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.3086700Z     resource_stream_connection_test.go:40: Step 2/3 error: Error running apply: exit status 1
2025-04-16T00:45:12.3087122Z         
2025-04-16T00:45:12.3087394Z         Error: error updating resource
2025-04-16T00:45:12.3087657Z         
2025-04-16T00:45:12.3088000Z           with mongodbatlas_stream_connection.test,
2025-04-16T00:45:12.3088657Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-04-16T00:45:12.3089272Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-16T00:45:12.3089579Z         
2025-04-16T00:45:12.3090511Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-8188033505318181204/connections/test-acc-tf-8188033505318181204
2025-04-16T00:45:12.3091440Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3092028Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3092438Z         BadRequestDetail: 
2025-04-16T00:45:12.3102529Z    test_name=TestAccStreamDSStreamConnection_kafkaSSL test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest712921891
2025-04-16T00:45:12.3155153Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.3155767Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3156207Z         
2025-04-16T00:45:12.3156483Z         Error: error deleting resource
2025-04-16T00:45:12.3156757Z         
2025-04-16T00:45:12.3157704Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-8188033505318181204/connections/test-acc-tf-8188033505318181204
2025-04-16T00:45:12.3158637Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3159248Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3159658Z         BadRequestDetail: 
2025-04-16T00:45:12.3160189Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (5.58s)
```

  - FAIL 6 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7940975Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.7999940Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.8100082Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.8100675Z     resource_stream_connection_test.go:40: Step 2/3 error: Error running apply: exit status 1
2025-04-16T12:49:32.8101103Z         
2025-04-16T12:49:32.8101381Z         Error: error updating resource
2025-04-16T12:49:32.8101648Z         
2025-04-16T12:49:32.8101985Z           with mongodbatlas_stream_connection.test,
2025-04-16T12:49:32.8102649Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-04-16T12:49:32.8103262Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-16T12:49:32.8103583Z         
2025-04-16T12:49:32.8104516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-8581822739981390636/connections/test-acc-tf-8581822739981390636
2025-04-16T12:49:32.8105453Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8106052Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8106465Z         BadRequestDetail: 
2025-04-16T12:49:32.8117346Z   
2025-04-16T12:49:32.8260300Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.8260913Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8261341Z         
2025-04-16T12:49:32.8261617Z         Error: error deleting resource
2025-04-16T12:49:32.8261890Z         
2025-04-16T12:49:32.8262816Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-8581822739981390636/connections/test-acc-tf-8581822739981390636
2025-04-16T12:49:32.8263759Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8264510Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8264938Z         BadRequestDetail: 
2025-04-16T12:49:32.8265289Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (6.24s)
```

  - FAIL 6 seconds

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9932103Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T14:37:26.9977388Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T14:37:27.0140231Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T14:37:27.0140830Z     resource_stream_connection_test.go:40: Step 2/3 error: Error running apply: exit status 1
2025-04-16T14:37:27.0141246Z         
2025-04-16T14:37:27.0141516Z         Error: error updating resource
2025-04-16T14:37:27.0141786Z         
2025-04-16T14:37:27.0142118Z           with mongodbatlas_stream_connection.test,
2025-04-16T14:37:27.0142772Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-04-16T14:37:27.0143395Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-16T14:37:27.0143959Z         
2025-04-16T14:37:27.0144910Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-4634574634951452639/connections/test-acc-tf-4634574634951452639
2025-04-16T14:37:27.0145880Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0146491Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0146899Z         BadRequestDetail: 
2025-04-16T14:37:27.0157312Z    test_name=TestAccStreamRSStreamConnection_AWSLambda test_terraform_path=/home/runner/work/_temp/cbd85b3d-89a9-420b-96e9-da4975fd1b27/terraform test_working_directory=/tmp/plugintest1571645078 test_step_number=2
2025-04-16T14:37:27.0250614Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-16T14:37:27.0251219Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0251656Z         
2025-04-16T14:37:27.0251932Z         Error: error deleting resource
2025-04-16T14:37:27.0252196Z         
2025-04-16T14:37:27.0253145Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-4634574634951452639/connections/test-acc-tf-4634574634951452639
2025-04-16T14:37:27.0254325Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0254935Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0255345Z         BadRequestDetail: 
2025-04-16T14:37:27.0255688Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (6.14s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8840733Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.8924354Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.9027795Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.9028550Z     resource_stream_connection_test.go:40: Step 2/3 error: Error running apply: exit status 1
2025-04-17T00:44:44.9028970Z         
2025-04-17T00:44:44.9029375Z         Error: error updating resource
2025-04-17T00:44:44.9029650Z         
2025-04-17T00:44:44.9029993Z           with mongodbatlas_stream_connection.test,
2025-04-17T00:44:44.9030672Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-04-17T00:44:44.9031286Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-17T00:44:44.9031602Z         
2025-04-17T00:44:44.9032559Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-2460113111843605285/connections/test-acc-tf-2460113111843605285
2025-04-17T00:44:44.9033500Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9034111Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9034527Z         BadRequestDetail: 
2025-04-17T00:44:44.9050207Z   
2025-04-17T00:44:44.9145759Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.9146367Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9146798Z         
2025-04-17T00:44:44.9147070Z         Error: error deleting resource
2025-04-17T00:44:44.9147336Z         
2025-04-17T00:44:44.9148450Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-2460113111843605285/connections/test-acc-tf-2460113111843605285
2025-04-17T00:44:44.9149405Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9150036Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9150451Z         BadRequestDetail: 
2025-04-17T00:44:44.9150797Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (5.56s)
```

- 2025-04-18 PASS 8 seconds
- 2025-04-19 PASS 7 seconds
- 2025-04-20 PASS 7 seconds
- 2025-04-21 PASS 8 seconds
- 2025-04-22 PASS 8 seconds
- 2025-04-23 PASS 7 seconds
- 2025-04-24 PASS 9 seconds
- 2025-04-25 PASS 7 seconds
- 2025-04-26 PASS 6 seconds
- 2025-04-27 PASS 7 seconds
- 2025-04-28 PASS 7 seconds
- 2025-04-29 PASS 7 seconds
- 2025-04-30
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-05-02 PASS 7 seconds
- 2025-05-03 PASS 7 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 7 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6196333Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-05-11T00:29:58.6197751Z     resource_stream_connection_test.go:39: Creating execution project: test-acc-tf-p-6520869275964497815
2025-05-11T00:29:58.6198762Z     resource_stream_connection_test.go:39: 
2025-05-11T00:29:58.6200493Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6204026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6207897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:46
2025-05-11T00:29:58.6212121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:39
2025-05-11T00:29:58.6213918Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6215923Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6217081Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2025-05-11T00:29:58.6219069Z         	Messages:   	Project creation failed: test-acc-tf-p-6520869275964497815, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6220675Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (0.02s)
```

- 2025-05-12 PASS 9 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-14 PASS 7 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 7 seconds
- 2025-05-18 PASS 8 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-23 PASS 8 seconds
- 2025-05-24 PASS 7 seconds
- 2025-05-25 PASS 6 seconds
- 2025-05-26 PASS 8 seconds
- 2025-05-27
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-05-29
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-05-30
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-31 PASS 7 seconds
- 2025-06-01
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-06-03
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-06-04 PASS 8 seconds
- 2025-06-05 PASS 5 seconds
- 2025-06-06 PASS 7 seconds
- 2025-06-07 PASS 7 seconds
- 2025-06-08 PASS 7 seconds
- 2025-06-09 PASS 7 seconds
- 2025-06-10 PASS 8 seconds
- 2025-06-11
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-06-12 PASS 7 seconds
- 2025-06-13 PASS 8 seconds
- 2025-06-14 PASS 8 seconds
- 2025-06-15 PASS 8 seconds
- 2025-06-16 PASS 7 seconds
- 2025-06-17 PASS 7 seconds
- 2025-06-18
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-19 PASS 7 seconds
- 2025-06-20 PASS 7 seconds
- 2025-06-21 PASS 7 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7949501Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7960995Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7971722Z    test_name=TestAccStreamDSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest2264551993 test_step_number=1
2025-06-22T00:49:55.8022642Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8023207Z     resource_stream_connection_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-22T00:49:55.8023605Z         
2025-06-22T00:49:55.8023880Z         Error: error creating resource
2025-06-22T00:49:55.8024134Z         
2025-06-22T00:49:55.8024441Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8025063Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8025640Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8025934Z         
2025-06-22T00:49:55.8026421Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.8027093Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8027662Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8028036Z         BadRequestDetail: 
2025-06-22T00:49:55.8038282Z    test_working_directory=/tmp/plugintest2884249007 test_step_number=1 test_name=TestAccStreamDSStreamConnection_kafkaSSL
2025-06-22T00:49:55.8046331Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (31.86s)
```

- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 7 seconds
- 2025-06-25
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-06-26
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-06-27 PASS 7 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 7 seconds
- 2025-06-30 PASS 8 seconds
- 2025-07-01
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 7 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 7 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10 PASS 10 seconds