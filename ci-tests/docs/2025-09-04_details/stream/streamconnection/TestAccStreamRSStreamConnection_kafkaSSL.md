# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 7)
Success rate: 83.33%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:15](#error-2025-08-10t0115050000) | Step 1 1,1 | qa |  | 32.08s
[2025-08-11 01:57](#error-2025-08-11t0157150000) |  | dev |  | 1525.07s
[2025-08-17 01:18](#error-2025-08-17t0118020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections | qa | flaky_500 | 31.01s
[2025-08-22 00:48](#error-2025-08-22t0048290000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68a7b98d4b7d576d3f6f7ff6/streams/test-acc-tf-s-2300631672488674970/connections/kafka-conn-ssl | dev |  | 2.03s
[2025-08-24 00:52](#error-2025-08-24t0052470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d369bbb8c4ee1f82dfd/streams/test-acc-tf-s-3344321080932301602/connections/kafka-conn-ssl | qa | flaky_500 | 197.06s
[2025-08-31 01:04](#error-2025-08-31t0104350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397800a66c308153efef8/streams/test-acc-tf-s-8845739114710649075/connections/kafka-conn-ssl | qa | flaky_500 | 397.06s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 minutes
- 2025-08-07
  - PASS 4 minutes
  - PASS 3 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 2 minutes
- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6174280Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-08-10T01:15:05.6186637Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-10T01:15:05.6224604Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-10T01:15:05.6226697Z     resource_stream_connection_test.go:153: Step 1/3 error: Check failed: Check 1/2 error: Check 1/13 error: stream connection (6897e8cd39cf8e2817e3c9dc:test-acc-tf-s-2539241424947313573:kafka-conn-ssl) does not exist
2025-08-10T01:15:05.6240867Z   
2025-08-10T01:15:05.6253776Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (32.78s)
```

- 2025-08-11

### Error 2025-08-11T01:57:15+00:00
```
2025-08-11T01:57:15.0209649Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-08-11T01:57:15.0216794Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-11T01:57:15.0237111Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-11T01:57:15.0237841Z     resource_stream_connection_test.go:153: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-11T01:57:15.0238353Z         
2025-08-11T01:57:15.0239025Z         Error: error deleting MongoDB Network Peering Container (689944d9f3d97116eb662392): couldn't find resource (21 retries)
2025-08-11T01:57:15.0239671Z         
2025-08-11T01:57:15.0239956Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1525.73s)
```

- 2025-08-12
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-08-13 PASS 3 minutes
- 2025-08-14 PASS 2 minutes
- 2025-08-15 PASS 2 minutes
- 2025-08-16 PASS 2 minutes
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6264623Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-08-17T01:18:02.6274573Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-17T01:18:02.6339676Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-17T01:18:02.6340717Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-08-17T01:18:02.6341469Z         
2025-08-17T01:18:02.6341946Z         Error: error creating resource
2025-08-17T01:18:02.6342410Z         
2025-08-17T01:18:02.6342989Z           with mongodbatlas_stream_connection.test,
2025-08-17T01:18:02.6344178Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-08-17T01:18:02.6345261Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-17T01:18:02.6345982Z         
2025-08-17T01:18:02.6347516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections
2025-08-17T01:18:02.6349538Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:18:02.6350817Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:18:02.6351635Z         BadRequestDetail: 
2025-08-17T01:18:02.6375813Z   
2025-08-17T01:18:02.6419727Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (31.08s)
```

- 2025-08-18
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-19 PASS 2 minutes
- 2025-08-20
  - PASS 4 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 3 minutes
- 2025-08-22

### Error 2025-08-22T00:48:29+00:00
```
2025-08-22T00:48:29.8969262Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-08-22T00:48:29.8980865Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-22T00:48:29.9008725Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-22T00:48:29.9009765Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-08-22T00:48:29.9010506Z         
2025-08-22T00:48:29.9010991Z         Error: error fetching resource
2025-08-22T00:48:29.9011450Z         
2025-08-22T00:48:29.9012073Z           with data.mongodbatlas_stream_connection.test,
2025-08-22T00:48:29.9013201Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2025-08-22T00:48:29.9014187Z           39: data "mongodbatlas_stream_connection" "test" {
2025-08-22T00:48:29.9014707Z         
2025-08-22T00:48:29.9016235Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a7b98d4b7d576d3f6f7ff6/streams/test-acc-tf-s-2300631672488674970/connections/kafka-conn-ssl
2025-08-22T00:48:29.9018024Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-08-22T00:48:29.9019038Z         Detail: Stream connection with name kafka-conn-ssl for project
2025-08-22T00:48:29.9020245Z         68a7b98d4b7d576d3f6f7ff6 and name test-acc-tf-s-2300631672488674970 not
2025-08-22T00:48:29.9021357Z         found. Reason: Not Found. Params: [kafka-conn-ssl 68a7b98d4b7d576d3f6f7ff6
2025-08-22T00:48:29.9022299Z         test-acc-tf-s-2300631672488674970], BadRequestDetail: 
2025-08-22T00:48:29.9022999Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2.26s)
```

- 2025-08-23 PASS 3 minutes
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5500872Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-08-24T00:52:47.5507649Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-24T00:52:47.5531867Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-24T00:52:47.5532464Z     resource_stream_connection_test.go:153: Step 3/3 error running import: exit status 1
2025-08-24T00:52:47.5532891Z         
2025-08-24T00:52:47.5533204Z         Error: error fetching resource
2025-08-24T00:52:47.5533708Z         
2025-08-24T00:52:47.5534659Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d369bbb8c4ee1f82dfd/streams/test-acc-tf-s-3344321080932301602/connections/kafka-conn-ssl
2025-08-24T00:52:47.5535596Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:52:47.5536204Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:52:47.5536617Z         BadRequestDetail: 
2025-08-24T00:52:47.5536884Z         
2025-08-24T00:52:47.5537190Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (197.62s)
```

- 2025-08-25 PASS 6 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 3 minutes
- 2025-08-28 PASS 2 minutes
- 2025-08-29
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-08-30 PASS 2 minutes
- 2025-08-31

### Error 2025-08-31T01:04:35+00:00
```
2025-08-31T01:04:35.7290542Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-08-31T01:04:35.7298383Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-31T01:04:35.7334892Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-08-31T01:04:35.7336183Z     resource_stream_connection_test.go:153: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-31T01:04:35.7337124Z         
2025-08-31T01:04:35.7337613Z         Error: error deleting resource
2025-08-31T01:04:35.7338089Z         
2025-08-31T01:04:35.7339962Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397800a66c308153efef8/streams/test-acc-tf-s-8845739114710649075/connections/kafka-conn-ssl
2025-08-31T01:04:35.7341707Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-08-31T01:04:35.7342800Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:04:35.7343549Z         BadRequestDetail: 
2025-08-31T01:04:35.7344123Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (397.58s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8561152Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-01T00:30:38.8562309Z     resource_stream_connection_test.go:144: Creating execution project: test-acc-tf-p-7895123908056761175
2025-09-01T00:30:38.8563310Z     resource_stream_connection_test.go:144: 
2025-09-01T00:30:38.8565043Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8568519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8572023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.8575838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:144
2025-09-01T00:30:38.8577587Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8582583Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8584979Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2025-09-01T00:30:38.8589331Z         	Messages:   	Project creation failed: test-acc-tf-p-7895123908056761175, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8592194Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.16s)
```

  - PASS 3 minutes
  - PASS 4 seconds
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-09-02 PASS 2 minutes
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 2 minutes