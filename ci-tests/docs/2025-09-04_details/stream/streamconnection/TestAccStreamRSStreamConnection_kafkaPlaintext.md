# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 6)
Success rate: 85.71%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:15](#error-2025-08-10t0115050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections | qa | flaky_500 | 54.02s
[2025-08-17 01:18](#error-2025-08-17t0118020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections | qa | flaky_500 | 31.01s
[2025-08-21 00:52](#error-2025-08-21t0052160000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68a667ca0ed8ff152ac7859c/streams/test-acc-tf-s-2971053143950957837/connections/kafka-conn-plaintext | dev |  | 1.09s
[2025-08-27 01:03](#error-2025-08-27t0103430000) | API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName} | dev | unknown | 2.02s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 14:03](#error-2025-09-01t1403520000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68b5a29d172c12661186f5a0/streams/test-acc-tf-s-1814453974044427563/connections/kafka-conn-plaintext | dev |  | 1.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07
  - PASS a minute
  - PASS 11 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6140781Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-10T01:15:05.6184014Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-10T01:15:05.6283221Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-10T01:15:05.6284268Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-08-10T01:15:05.6284991Z         
2025-08-10T01:15:05.6285463Z         Error: error creating resource
2025-08-10T01:15:05.6285923Z         
2025-08-10T01:15:05.6286504Z           with mongodbatlas_stream_connection.test,
2025-08-10T01:15:05.6287652Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-08-10T01:15:05.6288866Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-10T01:15:05.6289423Z         
2025-08-10T01:15:05.6290832Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections
2025-08-10T01:15:05.6292393Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:15:05.6293431Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6294111Z         BadRequestDetail: 
2025-08-10T01:15:05.6305484Z    test_terraform_path=/home/runner/work/_temp/945fba31-6596-40e5-8558-a2b7f202f1ac/terraform test_working_directory=/tmp/plugintest245102389 test_name=TestAccStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6337462Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (54.16s)
```

- 2025-08-11 PASS 5 seconds
- 2025-08-12
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6230873Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-17T01:18:02.6275225Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-17T01:18:02.6407877Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-17T01:18:02.6409082Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-08-17T01:18:02.6409821Z         
2025-08-17T01:18:02.6410290Z         Error: error creating resource
2025-08-17T01:18:02.6410742Z         
2025-08-17T01:18:02.6411329Z           with mongodbatlas_stream_connection.test,
2025-08-17T01:18:02.6412506Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-08-17T01:18:02.6413581Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-17T01:18:02.6414121Z         
2025-08-17T01:18:02.6415523Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections
2025-08-17T01:18:02.6417092Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:18:02.6418131Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:18:02.6419165Z         BadRequestDetail: 
2025-08-17T01:18:02.6421221Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (31.10s)
```

- 2025-08-18
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 19 seconds
- 2025-08-21

### Error 2025-08-21T00:52:16+00:00
```
2025-08-21T00:52:16.9317095Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-21T00:52:16.9330476Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-21T00:52:16.9361928Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-21T00:52:16.9362998Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-08-21T00:52:16.9363788Z         
2025-08-21T00:52:16.9364270Z         Error: error fetching resource
2025-08-21T00:52:16.9364743Z         
2025-08-21T00:52:16.9365400Z           with data.mongodbatlas_stream_connection.test,
2025-08-21T00:52:16.9366589Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-08-21T00:52:16.9367799Z           12: data "mongodbatlas_stream_connection" "test" {
2025-08-21T00:52:16.9368325Z         
2025-08-21T00:52:16.9370177Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a667ca0ed8ff152ac7859c/streams/test-acc-tf-s-2971053143950957837/connections/kafka-conn-plaintext
2025-08-21T00:52:16.9371968Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-08-21T00:52:16.9373089Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-08-21T00:52:16.9374218Z         68a667ca0ed8ff152ac7859c and name test-acc-tf-s-2971053143950957837 not
2025-08-21T00:52:16.9375234Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-08-21T00:52:16.9376195Z         68a667ca0ed8ff152ac7859c test-acc-tf-s-2971053143950957837],
2025-08-21T00:52:16.9376910Z         BadRequestDetail: 
2025-08-21T00:52:16.9377699Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1.91s)
```

- 2025-08-22 PASS 9 seconds
- 2025-08-23 PASS 5 seconds
- 2025-08-24 PASS 7 seconds
- 2025-08-25 PASS 7 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27

### Error 2025-08-27T01:03:43+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-27T01:03:43.775000+00:00-TestAccStreamRSStreamConnection_kafkaPlaintext',confidence=1.0,ts_when='8 days ago')
API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName}
```
2025-08-27T01:03:43.7759796Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-27T01:03:43.7774505Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-27T01:03:43.7795674Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-08-27T01:03:43.7796272Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-08-27T01:03:43.7796694Z         
2025-08-27T01:03:43.7796976Z         Error: error fetching resource
2025-08-27T01:03:43.7797243Z         
2025-08-27T01:03:43.7797595Z           with data.mongodbatlas_stream_connection.test,
2025-08-27T01:03:43.7798425Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-08-27T01:03:43.7799034Z           12: data "mongodbatlas_stream_connection" "test" {
2025-08-27T01:03:43.7799329Z         
2025-08-27T01:03:43.7800224Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae50f7aa49ce49aab86608/streams/test-acc-tf-s-4709250715214117656/connections/kafka-conn-plaintext
2025-08-27T01:03:43.7801148Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-08-27T01:03:43.7802428Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-08-27T01:03:43.7803524Z         68ae50f7aa49ce49aab86608 and name test-acc-tf-s-4709250715214117656 not
2025-08-27T01:03:43.7804093Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-08-27T01:03:43.7804617Z         68ae50f7aa49ce49aab86608 test-acc-tf-s-4709250715214117656],
2025-08-27T01:03:43.7805211Z         BadRequestDetail: 
2025-08-27T01:03:43.7805572Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (2.25s)
```

- 2025-08-28 PASS 6 seconds
- 2025-08-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8495101Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-01T00:30:38.8496288Z     resource_stream_connection_test.go:68: Creating execution project: test-acc-tf-p-6660290463215068534
2025-09-01T00:30:38.8497373Z     resource_stream_connection_test.go:68: 
2025-09-01T00:30:38.8498988Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8502035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8505090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.8508866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:75
2025-09-01T00:30:38.8512916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:68
2025-09-01T00:30:38.8515099Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.8515882Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8520724Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8523064Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-01T00:30:38.8527106Z         	Messages:   	Project creation failed: test-acc-tf-p-6660290463215068534, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8529886Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (0.15s)
```

  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - FAIL a second

### Error 2025-09-01T14:03:52+00:00
```
2025-09-01T14:03:52.5302408Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-01T14:03:52.5315634Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-01T14:03:52.5332133Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-09-01T14:03:52.5332892Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-09-01T14:03:52.5333328Z         
2025-09-01T14:03:52.5333617Z         Error: error fetching resource
2025-09-01T14:03:52.5333888Z         
2025-09-01T14:03:52.5334248Z           with data.mongodbatlas_stream_connection.test,
2025-09-01T14:03:52.5334914Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-09-01T14:03:52.5335486Z           12: data "mongodbatlas_stream_connection" "test" {
2025-09-01T14:03:52.5335785Z         
2025-09-01T14:03:52.5336988Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5a29d172c12661186f5a0/streams/test-acc-tf-s-1814453974044427563/connections/kafka-conn-plaintext
2025-09-01T14:03:52.5337936Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-01T14:03:52.5338558Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-09-01T14:03:52.5339164Z         68b5a29d172c12661186f5a0 and name test-acc-tf-s-1814453974044427563 not
2025-09-01T14:03:52.5339761Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-09-01T14:03:52.5340359Z         68b5a29d172c12661186f5a0 test-acc-tf-s-1814453974044427563],
2025-09-01T14:03:52.5340743Z         BadRequestDetail: 
2025-09-01T14:03:52.5341103Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1.98s)
```

  - PASS 5 seconds
  - PASS 4 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 6 seconds