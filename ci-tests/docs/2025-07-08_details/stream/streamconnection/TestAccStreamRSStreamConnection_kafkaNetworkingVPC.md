# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## Timeline
### 2025-07-01
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-07-02
#### PASS 2 minutes
### 2025-07-03
#### PASS 2 minutes
### 2025-07-04
#### FAIL 2 minutes
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-04T00:45:55.541000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='4 days ago')

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
### 2025-07-05
#### FAIL 2 minutes
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
### 2025-07-06
#### FAIL 2 minutes
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
### 2025-07-07
#### FAIL 2 minutes
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
### 2025-07-08
#### FAIL 2 minutes
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-08T00:45:56.107000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='3 hours ago')

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