# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 7)
Success rate: 85.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections | qa |  | 1.00s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections/kafka-conn-plaintext | qa | flaky_500 | 37.05s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections | qa |  | 0.09s
[2025-09-15 00:55](#error-2025-09-15t0055510000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c75dd23176ce321a9645d6/streams/test-acc-tf-s-2662992153812109448/connections/kafka-conn-plaintext | dev |  | 1.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections | qa | flaky_500 | 1.00s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev |  | 5.03s
[2025-10-02 01:34](#error-2025-10-02t0134200000) | Step 1 1,1,1,2 | dev |  | 2.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 6 seconds
- 2025-09-05 PASS 8 seconds
- 2025-09-06 PASS 8 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0108436Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-07T00:50:49.0138855Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-07T00:50:49.0218298Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-07T00:50:49.0218949Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-09-07T00:50:49.0219362Z         
2025-09-07T00:50:49.0219645Z         Error: error creating resource
2025-09-07T00:50:49.0219914Z         
2025-09-07T00:50:49.0220249Z           with mongodbatlas_stream_connection.test,
2025-09-07T00:50:49.0220910Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-07T00:50:49.0221515Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-07T00:50:49.0221829Z         
2025-09-07T00:50:49.0222604Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections
2025-09-07T00:50:49.0223725Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-07T00:50:49.0224348Z         Detail: Stream instance for project 68bcd1d5df5af52d2d4d5831 and name
2025-09-07T00:50:49.0224953Z         test-acc-tf-s-4047930990064627307 not found. Reason: Not Found. Params:
2025-09-07T00:50:49.0225522Z         [68bcd1d5df5af52d2d4d5831 test-acc-tf-s-4047930990064627307],
2025-09-07T00:50:49.0226066Z         BadRequestDetail: 
2025-09-07T00:50:49.0227753Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1.00s)
```

- 2025-09-08
  - PASS 7 seconds
  - FAIL 37 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.3751910Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-08T09:53:42.3767127Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-08T09:53:42.3934894Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-08T09:53:42.3935918Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-09-08T09:53:42.3936632Z         
2025-09-08T09:53:42.3937093Z         Error: error fetching resource
2025-09-08T09:53:42.3937543Z         
2025-09-08T09:53:42.3938345Z           with data.mongodbatlas_stream_connection.test,
2025-09-08T09:53:42.3939494Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-09-08T09:53:42.3940480Z           12: data "mongodbatlas_stream_connection" "test" {
2025-09-08T09:53:42.3940989Z         
2025-09-08T09:53:42.3942538Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections/kafka-conn-plaintext
2025-09-08T09:53:42.3944142Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:53:42.3945127Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.3945794Z         BadRequestDetail: 
2025-09-08T09:53:42.3966047Z   
2025-09-08T09:53:42.3977580Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (37.46s)
```

  - PASS 5 seconds
- 2025-09-09 PASS 5 seconds
- 2025-09-10 PASS 7 seconds
- 2025-09-11 PASS 7 seconds
- 2025-09-12
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-09-13 PASS 8 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7870167Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-14T00:45:38.7902759Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-14T00:45:38.7921816Z   
2025-09-14T00:45:38.7999996Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-14T00:45:38.8000635Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:45:38.8001059Z         
2025-09-14T00:45:38.8001334Z         Error: error creating resource
2025-09-14T00:45:38.8001605Z         
2025-09-14T00:45:38.8001933Z           with mongodbatlas_stream_connection.test,
2025-09-14T00:45:38.8002581Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-14T00:45:38.8003183Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-14T00:45:38.8003496Z         
2025-09-14T00:45:38.8004249Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections
2025-09-14T00:45:38.8005066Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8005655Z         Detail: Stream instance for project 68c60c43d444485797b214ed and name
2025-09-14T00:45:38.8006499Z         test-acc-tf-s-1571941844326212806 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8007089Z         [68c60c43d444485797b214ed test-acc-tf-s-1571941844326212806],
2025-09-14T00:45:38.8007476Z         BadRequestDetail: 
2025-09-14T00:45:38.8008332Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (0.94s)
```

- 2025-09-15
  - FAIL a second

### Error 2025-09-15T00:55:51+00:00
```
2025-09-15T00:55:51.6160246Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-15T00:55:51.6190814Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-15T00:55:51.6208189Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-15T00:55:51.6209085Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-09-15T00:55:51.6209901Z         
2025-09-15T00:55:51.6210226Z         Error: error fetching resource
2025-09-15T00:55:51.6210492Z         
2025-09-15T00:55:51.6210851Z           with data.mongodbatlas_stream_connection.test,
2025-09-15T00:55:51.6211491Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-09-15T00:55:51.6212070Z           12: data "mongodbatlas_stream_connection" "test" {
2025-09-15T00:55:51.6212374Z         
2025-09-15T00:55:51.6213274Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c75dd23176ce321a9645d6/streams/test-acc-tf-s-2662992153812109448/connections/kafka-conn-plaintext
2025-09-15T00:55:51.6214208Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-15T00:55:51.6214816Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-09-15T00:55:51.6215427Z         68c75dd23176ce321a9645d6 and name test-acc-tf-s-2662992153812109448 not
2025-09-15T00:55:51.6216192Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-09-15T00:55:51.6216704Z         68c75dd23176ce321a9645d6 test-acc-tf-s-2662992153812109448],
2025-09-15T00:55:51.6217097Z         BadRequestDetail: 
2025-09-15T00:55:51.6217442Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1.92s)
```

  - PASS 8 seconds
  - FAIL a second

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0002844Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-15T06:36:28.0056278Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-15T06:36:28.0162540Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-15T06:36:28.0163632Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:36:28.0164408Z         
2025-09-15T06:36:28.0164908Z         Error: error creating resource
2025-09-15T06:36:28.0165388Z         
2025-09-15T06:36:28.0166162Z           with mongodbatlas_stream_connection.test,
2025-09-15T06:36:28.0167397Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-15T06:36:28.0168527Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-15T06:36:28.0169111Z         
2025-09-15T06:36:28.0170560Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections
2025-09-15T06:36:28.0172299Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0173429Z         Detail: Stream instance for project 68c7b04bfe60767b7f9b139f and name
2025-09-15T06:36:28.0174572Z         test-acc-tf-s-5005804337291291222 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0176325Z         [68c7b04bfe60767b7f9b139f test-acc-tf-s-5005804337291291222],
2025-09-15T06:36:28.0176948Z         BadRequestDetail: 
2025-09-15T06:36:28.0195002Z   
2025-09-15T06:36:28.0204694Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1.03s)
```

- 2025-09-16 PASS 6 seconds
- 2025-09-17 PASS 8 seconds
- 2025-09-18 PASS 8 seconds
- 2025-09-19 PASS 6 seconds
- 2025-09-20 PASS 5 seconds
- 2025-09-21 PASS 7 seconds
- 2025-09-22 PASS 8 seconds
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 5 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 7 seconds
- 2025-09-27 PASS 8 seconds
- 2025-09-28 PASS 7 seconds
- 2025-09-29
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-09-30
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-10-01
  - PASS 8 seconds
  - FAIL 5 seconds

### Error 2025-10-01T03:48:33+00:00
```
2025-10-01T03:48:33.3802561Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-01T03:48:33.3811616Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-01T03:48:33.3834926Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-01T03:48:33.3835652Z     resource_stream_connection_test.go:69: Step 2/3 error: After applying this test step, the refresh plan was not empty.
2025-10-01T03:48:33.3836180Z         stdout
2025-10-01T03:48:33.3836389Z         
2025-10-01T03:48:33.3837035Z         Terraform used the selected providers to generate the following execution
2025-10-01T03:48:33.3837624Z         plan. Resource actions are indicated with the following symbols:
2025-10-01T03:48:33.3838240Z           ~ update in-place
2025-10-01T03:48:33.3838550Z          <= read (data resources)
2025-10-01T03:48:33.3838806Z         
2025-10-01T03:48:33.3839129Z         Terraform will perform the following actions:
2025-10-01T03:48:33.3839422Z         
2025-10-01T03:48:33.3839882Z           # data.mongodbatlas_stream_connection.test will be read during apply
2025-10-01T03:48:33.3840465Z           # (depends on a resource or a module with changes pending)
2025-10-01T03:48:33.3840942Z          <= data "mongodbatlas_stream_connection" "test" {
2025-10-01T03:48:33.3841427Z               + authentication     = (known after apply)
2025-10-01T03:48:33.3841879Z               + aws                = (known after apply)
2025-10-01T03:48:33.3842337Z               + bootstrap_servers  = (known after apply)
2025-10-01T03:48:33.3842782Z               + cluster_name       = (known after apply)
2025-10-01T03:48:33.3843236Z               + cluster_project_id = (known after apply)
2025-10-01T03:48:33.3843679Z               + config             = (known after apply)
2025-10-01T03:48:33.3844156Z               + connection_name    = "kafka-conn-plaintext"
2025-10-01T03:48:33.3844628Z               + db_role_to_execute = (known after apply)
2025-10-01T03:48:33.3845069Z               + headers            = (known after apply)
2025-10-01T03:48:33.3845508Z               + id                 = (known after apply)
2025-10-01T03:48:33.3846037Z               + instance_name      = "test-acc-tf-s-695294836189408348"
2025-10-01T03:48:33.3846540Z               + networking         = (known after apply)
2025-10-01T03:48:33.3847024Z               + project_id         = "68dc9e745a2f9645001e831b"
2025-10-01T03:48:33.3847567Z               + security           = (known after apply)
2025-10-01T03:48:33.3848189Z               + type               = (known after apply)
2025-10-01T03:48:33.3848632Z               + url                = (known after apply)
2025-10-01T03:48:33.3848919Z             }
2025-10-01T03:48:33.3849124Z         
2025-10-01T03:48:33.3849589Z           # data.mongodbatlas_stream_connections.test will be read during apply
2025-10-01T03:48:33.3850163Z           # (depends on a resource or a module with changes pending)
2025-10-01T03:48:33.3850641Z          <= data "mongodbatlas_stream_connections" "test" {
2025-10-01T03:48:33.3851095Z               + id             = (known after apply)
2025-10-01T03:48:33.3851614Z               + instance_name  = "test-acc-tf-s-695294836189408348"
2025-10-01T03:48:33.3852458Z               + items_per_page = 1
2025-10-01T03:48:33.3853325Z               + page_num       = 2
2025-10-01T03:48:33.3854033Z               + project_id     = "68dc9e745a2f9645001e831b"
2025-10-01T03:48:33.3854497Z               + results        = (known after apply)
2025-10-01T03:48:33.3854941Z               + total_count    = (known after apply)
2025-10-01T03:48:33.3855233Z             }
2025-10-01T03:48:33.3855439Z         
2025-10-01T03:48:33.3855881Z           # mongodbatlas_stream_connection.test will be updated in-place
2025-10-01T03:48:33.3856411Z           ~ resource "mongodbatlas_stream_connection" "test" {
2025-10-01T03:48:33.3857084Z               ~ bootstrap_servers = "localhost:9092,localhost:9092" -> "localhost:9093"
2025-10-01T03:48:33.3858219Z                 id                = "test-acc-tf-s-695294836189408348-68dc9e745a2f9645001e831b-kafka-conn-plaintext"
2025-10-01T03:48:33.3858823Z                 # (8 unchanged attributes hidden)
2025-10-01T03:48:33.3859268Z             }
2025-10-01T03:48:33.3859469Z         
2025-10-01T03:48:33.3859788Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-10-01T03:48:33.3860178Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (5.32s)
```

  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-10-02

### Error 2025-10-02T01:34:20+00:00
```
2025-10-02T01:34:20.1008327Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-02T01:34:20.1023755Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-02T01:34:20.1054512Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-02T01:34:20.1056245Z     resource_stream_connection_test.go:69: Step 1/3 error: Check failed: Check 1/3 error: Check 1/12 error: stream connection (68ddc6a2d2c00355743c1ebe:test-acc-tf-s-9153079988273370027:kafka-conn-plaintext) does not exist
2025-10-02T01:34:20.1057827Z         Check 2/3 error: Check 1/11 error: stream connection (68ddc6a2d2c00355743c1ebe:test-acc-tf-s-9153079988273370027:kafka-conn-plaintext) does not exist
2025-10-02T01:34:20.1058561Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (2.20s)
```
