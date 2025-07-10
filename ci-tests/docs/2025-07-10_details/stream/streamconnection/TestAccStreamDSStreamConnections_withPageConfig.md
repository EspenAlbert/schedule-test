# stream/streamconnection/TestAccStreamDSStreamConnections_withPageConfig Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-5941290758369750589/connections | dev | flaky_500 | 3.02s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-4567223436599792405/connections | qa | flaky_500 | 3.02s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-5745782276419898506/connections | dev | flaky_500 | 3.03s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-378703444741402229/connections | dev | flaky_500 | 3.03s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-5862052779183285930/connections | qa | flaky_500 | 62.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 5 seconds
- 2025-04-16
  - FAIL 3 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2908240Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T00:45:12.2954974Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T00:45:12.2968287Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T00:45:12.2968901Z     data_source_stream_connections_test.go:37: Step 1/1 error: Error running apply: exit status 1
2025-04-16T00:45:12.2969408Z         
2025-04-16T00:45:12.2969694Z         Error: error fetching results
2025-04-16T00:45:12.2969954Z         
2025-04-16T00:45:12.2970319Z           with data.mongodbatlas_stream_connections.test,
2025-04-16T00:45:12.2970970Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-16T00:45:12.2971552Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-16T00:45:12.2971858Z         
2025-04-16T00:45:12.2972615Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-5941290758369750589/connections
2025-04-16T00:45:12.2973595Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-16T00:45:12.2974400Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.2974791Z         BadRequestDetail: 
2025-04-16T00:45:12.2986219Z   
2025-04-16T00:45:12.3008287Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T00:45:12.3008898Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3009323Z         
2025-04-16T00:45:12.3009595Z         Error: error deleting resource
2025-04-16T00:45:12.3009861Z         
2025-04-16T00:45:12.3010785Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-5941290758369750589/connections/test-acc-tf-5941290758369750589
2025-04-16T00:45:12.3011724Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3012326Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3012731Z         BadRequestDetail: 
2025-04-16T00:45:12.3013081Z --- FAIL: TestAccStreamDSStreamConnections_withPageConfig (3.17s)
```

  - FAIL 3 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7938301Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T12:49:32.7998944Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T12:49:32.8014060Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T12:49:32.8014690Z     data_source_stream_connections_test.go:37: Step 1/1 error: Error running apply: exit status 1
2025-04-16T12:49:32.8015133Z         
2025-04-16T12:49:32.8015412Z         Error: error fetching results
2025-04-16T12:49:32.8015805Z         
2025-04-16T12:49:32.8016174Z           with data.mongodbatlas_stream_connections.test,
2025-04-16T12:49:32.8016842Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-16T12:49:32.8017429Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-16T12:49:32.8017736Z         
2025-04-16T12:49:32.8018491Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-4567223436599792405/connections
2025-04-16T12:49:32.8019524Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-16T12:49:32.8020118Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8020521Z         BadRequestDetail: 
2025-04-16T12:49:32.8032177Z   
2025-04-16T12:49:32.8050065Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T12:49:32.8050679Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8051106Z         
2025-04-16T12:49:32.8051387Z         Error: error deleting resource
2025-04-16T12:49:32.8051659Z         
2025-04-16T12:49:32.8052585Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-4567223436599792405/connections/test-acc-tf-4567223436599792405
2025-04-16T12:49:32.8053533Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8054138Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8054551Z         BadRequestDetail: 
2025-04-16T12:49:32.8054907Z --- FAIL: TestAccStreamDSStreamConnections_withPageConfig (3.21s)
```

  - FAIL 3 seconds

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9928383Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T14:37:26.9976993Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T14:37:27.0009969Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T14:37:27.0010571Z     data_source_stream_connections_test.go:37: Step 1/1 error: Error running apply: exit status 1
2025-04-16T14:37:27.0011006Z         
2025-04-16T14:37:27.0011279Z         Error: error fetching results
2025-04-16T14:37:27.0011543Z         
2025-04-16T14:37:27.0011915Z           with data.mongodbatlas_stream_connections.test,
2025-04-16T14:37:27.0012578Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-16T14:37:27.0013179Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-16T14:37:27.0013669Z         
2025-04-16T14:37:27.0014596Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-5745782276419898506/connections
2025-04-16T14:37:27.0015465Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-16T14:37:27.0016053Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0016451Z         BadRequestDetail: 
2025-04-16T14:37:27.0026943Z    test_name=TestAccStreamDSStreamConnections_withPageConfig test_terraform_path=/home/runner/work/_temp/cbd85b3d-89a9-420b-96e9-da4975fd1b27/terraform test_working_directory=/tmp/plugintest670990459
2025-04-16T14:37:27.0028058Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0028497Z         
2025-04-16T14:37:27.0028774Z         Error: error deleting resource
2025-04-16T14:37:27.0029039Z         
2025-04-16T14:37:27.0029994Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-5745782276419898506/connections/test-acc-tf-5745782276419898506
2025-04-16T14:37:27.0030953Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0031571Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0031985Z         BadRequestDetail: 
2025-04-16T14:37:27.0032333Z --- FAIL: TestAccStreamDSStreamConnections_withPageConfig (3.34s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8836428Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-04-17T00:44:44.8925085Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-04-17T00:44:44.8946922Z    test_step_number=1
2025-04-17T00:44:44.8976162Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-04-17T00:44:44.8976786Z     data_source_stream_connections_test.go:37: Step 1/1 error: Error running apply: exit status 1
2025-04-17T00:44:44.8977216Z         
2025-04-17T00:44:44.8977503Z         Error: error fetching results
2025-04-17T00:44:44.8977774Z         
2025-04-17T00:44:44.8978327Z           with data.mongodbatlas_stream_connections.test,
2025-04-17T00:44:44.8979038Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-17T00:44:44.8979643Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-17T00:44:44.8980110Z         
2025-04-17T00:44:44.8980901Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-378703444741402229/connections
2025-04-17T00:44:44.8981756Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-17T00:44:44.8982353Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.8982764Z         BadRequestDetail: 
2025-04-17T00:44:44.8993669Z   
2025-04-17T00:44:44.9010226Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-04-17T00:44:44.9010853Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9011283Z         
2025-04-17T00:44:44.9011567Z         Error: error deleting resource
2025-04-17T00:44:44.9011832Z         
2025-04-17T00:44:44.9012779Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-378703444741402229/connections/test-acc-tf-378703444741402229
2025-04-17T00:44:44.9013840Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9014451Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9014872Z         BadRequestDetail: 
2025-04-17T00:44:44.9015221Z --- FAIL: TestAccStreamDSStreamConnections_withPageConfig (3.26s)
```

- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 6 seconds
- 2025-04-23 PASS 5 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 6 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 6 seconds
- 2025-04-28 PASS 5 seconds
- 2025-04-29 PASS 5 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 5 seconds
- 2025-05-03 PASS 5 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-06 PASS 6 seconds
- 2025-05-07
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 5 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6115288Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-05-11T00:29:58.6116562Z     data_source_stream_connections_test.go:34: Creating execution project: test-acc-tf-p-3907465686822498659
2025-05-11T00:29:58.6117800Z     data_source_stream_connections_test.go:34: 
2025-05-11T00:29:58.6119849Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6125102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6129740Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/data_source_stream_connections_test.go:34
2025-05-11T00:29:58.6131516Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6133529Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6135109Z         	Test:       	TestAccStreamDSStreamConnections_withPageConfig
2025-05-11T00:29:58.6137317Z         	Messages:   	Project creation failed: test-acc-tf-p-3907465686822498659, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6138832Z --- FAIL: TestAccStreamDSStreamConnections_withPageConfig (0.02s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 5 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-23 PASS 6 seconds
- 2025-05-24 PASS 5 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-28
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-06-02
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-06-03
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05 PASS 4 seconds
- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 5 seconds
- 2025-06-10 PASS 6 seconds
- 2025-06-11
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 5 seconds
- 2025-06-17 PASS 5 seconds
- 2025-06-18
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 5 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7947235Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.7958566Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.8060524Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.8061237Z     data_source_stream_connections_test.go:37: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.8061765Z         
2025-06-22T00:49:55.8062201Z         Error: error creating resource
2025-06-22T00:49:55.8062584Z         
2025-06-22T00:49:55.8062909Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8063671Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8064381Z           24: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8064685Z         
2025-06-22T00:49:55.8065537Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-5862052779183285930/connections
2025-06-22T00:49:55.8066752Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8067431Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8067846Z         BadRequestDetail: 
2025-06-22T00:49:55.8080988Z    test_name=TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8196226Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.8196821Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8197239Z         
2025-06-22T00:49:55.8197523Z         Error: error during resource delete
2025-06-22T00:49:55.8197784Z         
2025-06-22T00:49:55.8198446Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-5862052779183285930
2025-06-22T00:49:55.8199212Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8199796Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8200192Z         BadRequestDetail: 
2025-06-22T00:49:55.8200539Z --- FAIL: TestAccStreamDSStreamConnections_withPageConfig (62.38s)
```

- 2025-06-23 PASS 6 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-26
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10 PASS 8 seconds