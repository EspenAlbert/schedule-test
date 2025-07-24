# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 31) FAIL(x 10)
Success rate: 75.61%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 00:45](#error-2025-07-04t0045550000) |  | dev | real_test_failure | 172.07s
[2025-07-05 00:44](#error-2025-07-05t0044070000) |  | dev |  | 165.01s
[2025-07-06 00:48](#error-2025-07-06t0048420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44e/streams | qa | flaky_500 | 161.06s
[2025-07-07 00:48](#error-2025-07-07t0048050000) |  | dev |  | 172.09s
[2025-07-08 00:45](#error-2025-07-08t0045560000) |  | dev | real_test_failure | 162.09s
[2025-07-09 01:00](#error-2025-07-09t0100070000) |  | dev | real_test_failure | 172.08s
[2025-07-10 00:43](#error-2025-07-10t0043190000) |  | dev | real_test_failure | 176.05s
[2025-07-11 01:28](#error-2025-07-11t0128090000) |  | dev |  | 163.06s
[2025-07-13 00:52](#error-2025-07-13t0052140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe95006d8d55bbaa28b2/streams/test-acc-tf-3021213904466828823/connections/test-acc-tf-3021213904466828823 | qa | flaky_500 | 191.07s
[2025-07-14 04:02](#error-2025-07-14t0402140000) |  | dev |  | 1800.06s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-26
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-06-27 PASS 2 minutes
- 2025-06-28 PASS 2 minutes
- 2025-06-29 PASS 3 minutes
- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-02 PASS 2 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04

### Error 2025-07-04T00:45:55+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-04T00:45:55.541000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='20 days ago')

```
2025-07-04T00:45:55.5414087Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-04T00:45:55.5429247Z    test_terraform_path=/home/runner/work/_temp/c3d41cd1-2970-494b-9abe-ad1b88c82e94/terraform test_working_directory=/tmp/plugintest1841757214 test_step_number=2
2025-07-04T00:45:55.5430193Z     resource_stream_connection_test.go:86: Step 2/3 error: Error running apply: exit status 1
2025-07-04T00:45:55.5430634Z         
2025-07-04T00:45:55.5430927Z         Error: error updating resource
2025-07-04T00:45:55.5431210Z         
2025-07-04T00:45:55.5431558Z           with mongodbatlas_stream_connection.test,
2025-07-04T00:45:55.5432243Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-04T00:45:55.5432861Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-04T00:45:55.5433181Z         
2025-07-04T00:45:55.5434125Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204a579d4c1b1e7ac945/streams/test-acc-tf-6690252890074077348/connections/test-acc-tf-6690252890074077348
2025-07-04T00:45:55.5434960Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-04T00:45:55.5435529Z         "STREAM_NETWORKING_ACCESS_TYPE_CANNOT_BE_MODIFIED") Detail: Stream networking
2025-07-04T00:45:55.5436133Z         access type cannot be modified. Reason: Bad Request. Params:
2025-07-04T00:45:55.5436702Z         [test-acc-tf-6690252890074077348 test-acc-tf-6690252890074077348],
2025-07-04T00:45:55.5437111Z         BadRequestDetail: 
2025-07-04T00:45:55.5437483Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (172.67s)
```

- 2025-07-05

### Error 2025-07-05T00:44:07+00:00
```
2025-07-05T00:44:07.5777514Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-05T00:44:07.5802083Z   
2025-07-05T00:44:07.5802877Z     resource_stream_connection_test.go:86: Step 2/3 error: Error running apply: exit status 1
2025-07-05T00:44:07.5803600Z         
2025-07-05T00:44:07.5804232Z         Error: error updating resource
2025-07-05T00:44:07.5804686Z         
2025-07-05T00:44:07.5805266Z           with mongodbatlas_stream_connection.test,
2025-07-05T00:44:07.5806414Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-05T00:44:07.5807464Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-05T00:44:07.5808041Z         
2025-07-05T00:44:07.5809722Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719a37c6036ffcf44bad/streams/test-acc-tf-4266725352564933304/connections/test-acc-tf-4266725352564933304
2025-07-05T00:44:07.5811167Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-05T00:44:07.5812134Z         "STREAM_NETWORKING_ACCESS_TYPE_CANNOT_BE_MODIFIED") Detail: Stream networking
2025-07-05T00:44:07.5813153Z         access type cannot be modified. Reason: Bad Request. Params:
2025-07-05T00:44:07.5814244Z         [test-acc-tf-4266725352564933304 test-acc-tf-4266725352564933304],
2025-07-05T00:44:07.5814921Z         BadRequestDetail: 
2025-07-05T00:44:07.5815551Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (165.15s)
```

- 2025-07-06

### Error 2025-07-06T00:48:42+00:00
```
2025-07-06T00:48:42.9980179Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-06T00:48:42.9991176Z    test_step_number=1 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-06T00:48:42.9991850Z     resource_stream_connection_test.go:86: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:42.9992263Z         
2025-07-06T00:48:42.9992536Z         Error: error creating resource
2025-07-06T00:48:42.9992799Z         
2025-07-06T00:48:42.9993112Z           with mongodbatlas_stream_instance.test,
2025-07-06T00:48:42.9993727Z           on terraform_plugin_test.tf line 30, in resource "mongodbatlas_stream_instance" "test":
2025-07-06T00:48:42.9994303Z           30: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-06T00:48:42.9994603Z         
2025-07-06T00:48:42.9995102Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44e/streams
2025-07-06T00:48:42.9995770Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:42.9996344Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:42.9996731Z         BadRequestDetail: 
2025-07-06T00:48:42.9997091Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.65s)
```

- 2025-07-07

### Error 2025-07-07T00:48:05+00:00
```
2025-07-07T00:48:05.7758600Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-07T00:48:05.7772721Z   
2025-07-07T00:48:05.7773194Z     resource_stream_connection_test.go:86: Step 2/3 error: Error running apply: exit status 1
2025-07-07T00:48:05.7773614Z         
2025-07-07T00:48:05.7773886Z         Error: error updating resource
2025-07-07T00:48:05.7774158Z         
2025-07-07T00:48:05.7774485Z           with mongodbatlas_stream_connection.test,
2025-07-07T00:48:05.7775124Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-07T00:48:05.7775892Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-07T00:48:05.7776205Z         
2025-07-07T00:48:05.7777125Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156a0aabd25fc85daf7c/streams/test-acc-tf-1445924918452045189/connections/test-acc-tf-1445924918452045189
2025-07-07T00:48:05.7777927Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-07T00:48:05.7778478Z         "STREAM_NETWORKING_ACCESS_TYPE_CANNOT_BE_MODIFIED") Detail: Stream networking
2025-07-07T00:48:05.7779055Z         access type cannot be modified. Reason: Bad Request. Params:
2025-07-07T00:48:05.7779596Z         [test-acc-tf-1445924918452045189 test-acc-tf-1445924918452045189],
2025-07-07T00:48:05.7779992Z         BadRequestDetail: 
2025-07-07T00:48:05.7780363Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (172.89s)
```

- 2025-07-08

### Error 2025-07-08T00:45:56+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-08T00:45:56.107000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='16 days ago')

```
2025-07-08T00:45:56.1072861Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-08T00:45:56.1097128Z    test_terraform_path=/home/runner/work/_temp/1fd0e57d-d705-4557-8dc9-2e57738caee5/terraform
2025-07-08T00:45:56.1098342Z     resource_stream_connection_test.go:86: Step 2/3 error: Error running apply: exit status 1
2025-07-08T00:45:56.1099070Z         
2025-07-08T00:45:56.1099549Z         Error: error updating resource
2025-07-08T00:45:56.1099999Z         
2025-07-08T00:45:56.1100603Z           with mongodbatlas_stream_connection.test,
2025-07-08T00:45:56.1101779Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-08T00:45:56.1102854Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-08T00:45:56.1103401Z         
2025-07-08T00:45:56.1105284Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6667cf503214420ed053/streams/test-acc-tf-4080142503108633912/connections/test-acc-tf-4080142503108633912
2025-07-08T00:45:56.1106771Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-08T00:45:56.1107788Z         "STREAM_NETWORKING_ACCESS_TYPE_CANNOT_BE_MODIFIED") Detail: Stream networking
2025-07-08T00:45:56.1108851Z         access type cannot be modified. Reason: Bad Request. Params:
2025-07-08T00:45:56.1109835Z         [test-acc-tf-4080142503108633912 test-acc-tf-4080142503108633912],
2025-07-08T00:45:56.1110528Z         BadRequestDetail: 
2025-07-08T00:45:56.1111179Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (162.91s)
```

- 2025-07-09

### Error 2025-07-09T01:00:07+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-09T01:00:07.374000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='15 days ago')

```
2025-07-09T01:00:07.3741956Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-09T01:00:07.3756463Z   
2025-07-09T01:00:07.3756913Z     resource_stream_connection_test.go:86: Step 2/3 error: Error running apply: exit status 1
2025-07-09T01:00:07.3757335Z         
2025-07-09T01:00:07.3757742Z         Error: error updating resource
2025-07-09T01:00:07.3758013Z         
2025-07-09T01:00:07.3758342Z           with mongodbatlas_stream_connection.test,
2025-07-09T01:00:07.3758979Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-09T01:00:07.3759574Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-09T01:00:07.3759877Z         
2025-07-09T01:00:07.3760776Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7fe72415e231233c4b4/streams/test-acc-tf-413253756483961652/connections/test-acc-tf-413253756483961652
2025-07-09T01:00:07.3761568Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-09T01:00:07.3762118Z         "STREAM_NETWORKING_ACCESS_TYPE_CANNOT_BE_MODIFIED") Detail: Stream networking
2025-07-09T01:00:07.3762701Z         access type cannot be modified. Reason: Bad Request. Params:
2025-07-09T01:00:07.3763228Z         [test-acc-tf-413253756483961652 test-acc-tf-413253756483961652],
2025-07-09T01:00:07.3763619Z         BadRequestDetail: 
2025-07-09T01:00:07.3763978Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (172.77s)
```

- 2025-07-10
  - FAIL 2 minutes

### Error 2025-07-10T00:43:19+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T00:43:19.368000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='14 days ago')

```
2025-07-10T00:43:19.3688321Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-10T00:43:19.3702801Z   
2025-07-10T00:43:19.3703279Z     resource_stream_connection_test.go:86: Step 2/3 error: Error running apply: exit status 1
2025-07-10T00:43:19.3703713Z         
2025-07-10T00:43:19.3703994Z         Error: error updating resource
2025-07-10T00:43:19.3704261Z         
2025-07-10T00:43:19.3704600Z           with mongodbatlas_stream_connection.test,
2025-07-10T00:43:19.3705266Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-10T00:43:19.3705881Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-10T00:43:19.3706198Z         
2025-07-10T00:43:19.3707381Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f09697e468865807981f0/streams/test-acc-tf-7382148404574086884/connections/test-acc-tf-7382148404574086884
2025-07-10T00:43:19.3708189Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-10T00:43:19.3708745Z         "STREAM_NETWORKING_ACCESS_TYPE_CANNOT_BE_MODIFIED") Detail: Stream networking
2025-07-10T00:43:19.3709352Z         access type cannot be modified. Reason: Bad Request. Params:
2025-07-10T00:43:19.3709911Z         [test-acc-tf-7382148404574086884 test-acc-tf-7382148404574086884],
2025-07-10T00:43:19.3710316Z         BadRequestDetail: 
2025-07-10T00:43:19.3710691Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (176.46s)
```

  - PASS 3 minutes
- 2025-07-11

### Error 2025-07-11T01:28:09+00:00
```
2025-07-11T01:28:09.2374115Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-11T01:28:09.2388032Z   
2025-07-11T01:28:09.2388488Z     resource_stream_connection_test.go:86: Step 2/3 error: Error running apply: exit status 1
2025-07-11T01:28:09.2388909Z         
2025-07-11T01:28:09.2389182Z         Error: error updating resource
2025-07-11T01:28:09.2389443Z         
2025-07-11T01:28:09.2389987Z           with mongodbatlas_stream_connection.test,
2025-07-11T01:28:09.2390696Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-11T01:28:09.2391308Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-11T01:28:09.2391625Z         
2025-07-11T01:28:09.2392548Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705aff0642f25f3ba0860a/streams/test-acc-tf-2634518760261428328/connections/test-acc-tf-2634518760261428328
2025-07-11T01:28:09.2393349Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-11T01:28:09.2393902Z         "STREAM_NETWORKING_ACCESS_TYPE_CANNOT_BE_MODIFIED") Detail: Stream networking
2025-07-11T01:28:09.2394484Z         access type cannot be modified. Reason: Bad Request. Params:
2025-07-11T01:28:09.2395025Z         [test-acc-tf-2634518760261428328 test-acc-tf-2634518760261428328],
2025-07-11T01:28:09.2395423Z         BadRequestDetail: 
2025-07-11T01:28:09.2395791Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.60s)
```

- 2025-07-12 PASS 2 minutes
- 2025-07-13

### Error 2025-07-13T00:52:14+00:00
```
2025-07-13T00:52:14.2604891Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-13T00:52:14.2617402Z   
2025-07-13T00:52:14.2617930Z     resource_stream_connection_test.go:87: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:52:14.2618395Z         
2025-07-13T00:52:14.2618680Z         Error: error fetching resource
2025-07-13T00:52:14.2618952Z         
2025-07-13T00:52:14.2619286Z           with mongodbatlas_stream_connection.test,
2025-07-13T00:52:14.2619949Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_connection" "test":
2025-07-13T00:52:14.2620569Z           40: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-13T00:52:14.2620887Z         
2025-07-13T00:52:14.2622044Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe95006d8d55bbaa28b2/streams/test-acc-tf-3021213904466828823/connections/test-acc-tf-3021213904466828823
2025-07-13T00:52:14.2623001Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:52:14.2623585Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:52:14.2623971Z         BadRequestDetail: 
2025-07-13T00:52:14.2634904Z   
2025-07-13T00:52:14.2635396Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:52:14.2635827Z         
2025-07-13T00:52:14.2636099Z         Error: error deleting resource
2025-07-13T00:52:14.2636365Z         
2025-07-13T00:52:14.2637301Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe95006d8d55bbaa28b2/streams/test-acc-tf-3021213904466828823/connections/test-acc-tf-3021213904466828823
2025-07-13T00:52:14.2638247Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-13T00:52:14.2638847Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:52:14.2639390Z         BadRequestDetail: 
2025-07-13T00:52:14.2639762Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (191.73s)
```

- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.0948920Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-07-14T04:02:14.0963456Z   
2025-07-14T04:02:14.0964241Z     resource_stream_connection_test.go:87: Step 1/2 error: Error running apply: exit status 1
2025-07-14T04:02:14.0964970Z         
2025-07-14T04:02:14.0965855Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T04:02:14.0966564Z         
2025-07-14T04:02:14.0967132Z           with mongodbatlas_network_peering.test,
2025-07-14T04:02:14.0968264Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-07-14T04:02:14.0969302Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-07-14T04:02:14.0969823Z         
2025-07-14T04:02:14.1000661Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T04:02:14.1001397Z         
2025-07-14T04:02:14.1002615Z         Error: error deleting MongoDB Network Peering Container (68746c01d81a2d4bb4ea6365): couldn't find resource (21 retries)
2025-07-14T04:02:14.1003724Z         
2025-07-14T04:02:14.1004519Z         Error: error deleting resource
2025-07-14T04:02:14.1004967Z         
2025-07-14T04:02:14.1006657Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fded81a2d4bb4ea4a0d/streams/test-acc-tf-6907915060401848420/connections/test-acc-tf-6907915060401848420
2025-07-14T04:02:14.1008100Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T04:02:14.1009026Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-07-14T04:02:14.1010133Z         test-acc-tf-6907915060401848420 is currently deploying. Please retry the
2025-07-14T04:02:14.1011270Z         request later. Reason: Conflict. Params: [test-acc-tf-6907915060401848420],
2025-07-14T04:02:14.1012002Z         BadRequestDetail: 
2025-07-14T04:02:14.1012648Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1800.57s)
```

- 2025-07-15 PASS 2 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 2 minutes
- 2025-07-18 PASS 2 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20 PASS 2 minutes
- 2025-07-21 PASS 2 minutes
- 2025-07-22 PASS 2 minutes
- 2025-07-23
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-24 PASS 2 minutes