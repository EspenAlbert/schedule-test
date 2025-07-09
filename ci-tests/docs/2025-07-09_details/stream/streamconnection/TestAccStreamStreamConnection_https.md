# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 5.08s
2025-04-16 12:49 | qa | 6.04s
2025-04-16 14:37 | dev | 6.04s
2025-04-17 00:44 | dev | 5.07s
2025-05-11 00:29 | qa | 0.00s
2025-06-22 00:49 | qa | 62.05s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 8 seconds
### 2025-04-12
#### PASS 9 seconds
### 2025-04-13
#### PASS 9 seconds
### 2025-04-14
#### PASS 12 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### FAIL 5 seconds
```
2025-04-16T00:45:12.2948805Z === RUN   TestAccStreamStreamConnection_https
2025-04-16T00:45:12.2953332Z === CONT  TestAccStreamStreamConnection_https
2025-04-16T00:45:12.3121343Z === NAME  TestAccStreamStreamConnection_https
2025-04-16T00:45:12.3121915Z     resource_stream_connection_test.go:207: Step 2/4 error: Error running apply: exit status 1
2025-04-16T00:45:12.3122337Z         
2025-04-16T00:45:12.3122626Z         Error: error updating resource
2025-04-16T00:45:12.3122897Z         
2025-04-16T00:45:12.3123252Z           with mongodbatlas_stream_connection.test,
2025-04-16T00:45:12.3124109Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_stream_connection" "test":
2025-04-16T00:45:12.3124739Z           21: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-16T00:45:12.3125062Z         
2025-04-16T00:45:12.3125956Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-2950875636848642465/connections/ConnectionNameHttps
2025-04-16T00:45:12.3126854Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3127474Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3127896Z         BadRequestDetail: 
2025-04-16T00:45:12.3138430Z   
2025-04-16T00:45:12.3220267Z === NAME  TestAccStreamStreamConnection_https
2025-04-16T00:45:12.3220849Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3221276Z         
2025-04-16T00:45:12.3221551Z         Error: error deleting resource
2025-04-16T00:45:12.3221826Z         
2025-04-16T00:45:12.3222714Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-2950875636848642465/connections/ConnectionNameHttps
2025-04-16T00:45:12.3223627Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3224465Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3224877Z         BadRequestDetail: 
2025-04-16T00:45:12.3225186Z --- FAIL: TestAccStreamStreamConnection_https (5.84s)
```
#### FAIL 6 seconds
```
2025-04-16T12:49:32.7993925Z === RUN   TestAccStreamStreamConnection_https
2025-04-16T12:49:32.8000315Z === CONT  TestAccStreamStreamConnection_https
2025-04-16T12:49:32.8222946Z === NAME  TestAccStreamStreamConnection_https
2025-04-16T12:49:32.8223633Z     resource_stream_connection_test.go:207: Step 2/4 error: Error running apply: exit status 1
2025-04-16T12:49:32.8224060Z         
2025-04-16T12:49:32.8224439Z         Error: error updating resource
2025-04-16T12:49:32.8224703Z         
2025-04-16T12:49:32.8225140Z           with mongodbatlas_stream_connection.test,
2025-04-16T12:49:32.8225872Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_stream_connection" "test":
2025-04-16T12:49:32.8226522Z           21: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-16T12:49:32.8226951Z         
2025-04-16T12:49:32.8227933Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-1646641737561203066/connections/ConnectionNameHttps
2025-04-16T12:49:32.8228948Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8229752Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8230281Z         BadRequestDetail: 
2025-04-16T12:49:32.8242479Z   
2025-04-16T12:49:32.8276411Z === NAME  TestAccStreamStreamConnection_https
2025-04-16T12:49:32.8276990Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8277423Z         
2025-04-16T12:49:32.8277702Z         Error: error deleting resource
2025-04-16T12:49:32.8277967Z         
2025-04-16T12:49:32.8278831Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-1646641737561203066/connections/ConnectionNameHttps
2025-04-16T12:49:32.8279846Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8280449Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8280868Z         BadRequestDetail: 
2025-04-16T12:49:32.8281170Z --- FAIL: TestAccStreamStreamConnection_https (6.45s)
```
#### FAIL 6 seconds
```
2025-04-16T14:37:26.9971379Z === RUN   TestAccStreamStreamConnection_https
2025-04-16T14:37:26.9977750Z === CONT  TestAccStreamStreamConnection_https
2025-04-16T14:37:27.0232045Z === NAME  TestAccStreamStreamConnection_https
2025-04-16T14:37:27.0232621Z     resource_stream_connection_test.go:207: Step 2/4 error: Error running apply: exit status 1
2025-04-16T14:37:27.0233044Z         
2025-04-16T14:37:27.0233622Z         Error: error updating resource
2025-04-16T14:37:27.0233940Z         
2025-04-16T14:37:27.0234282Z           with mongodbatlas_stream_connection.test,
2025-04-16T14:37:27.0235100Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_stream_connection" "test":
2025-04-16T14:37:27.0235719Z           21: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-16T14:37:27.0236036Z         
2025-04-16T14:37:27.0236906Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-63653987280207895/connections/ConnectionNameHttps
2025-04-16T14:37:27.0237811Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0238414Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0238825Z         BadRequestDetail: 
2025-04-16T14:37:27.0250344Z   
2025-04-16T14:37:27.0266925Z === NAME  TestAccStreamStreamConnection_https
2025-04-16T14:37:27.0267495Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0267949Z         
2025-04-16T14:37:27.0268219Z         Error: error deleting resource
2025-04-16T14:37:27.0268485Z         
2025-04-16T14:37:27.0269344Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-63653987280207895/connections/ConnectionNameHttps
2025-04-16T14:37:27.0270250Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0270860Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0271282Z         BadRequestDetail: 
2025-04-16T14:37:27.0271593Z --- FAIL: TestAccStreamStreamConnection_https (6.37s)
```
### 2025-04-17
#### FAIL 5 seconds
```
2025-04-17T00:44:44.8911128Z === RUN   TestAccStreamStreamConnection_https
2025-04-17T00:44:44.8920471Z === CONT  TestAccStreamStreamConnection_https
2025-04-17T00:44:44.9128250Z === NAME  TestAccStreamStreamConnection_https
2025-04-17T00:44:44.9128842Z     resource_stream_connection_test.go:207: Step 2/4 error: Error running apply: exit status 1
2025-04-17T00:44:44.9129260Z         
2025-04-17T00:44:44.9129544Z         Error: error updating resource
2025-04-17T00:44:44.9129812Z         
2025-04-17T00:44:44.9130154Z           with mongodbatlas_stream_connection.test,
2025-04-17T00:44:44.9130832Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_stream_connection" "test":
2025-04-17T00:44:44.9131442Z           21: 		resource "mongodbatlas_stream_connection" "test" {
2025-04-17T00:44:44.9131758Z         
2025-04-17T00:44:44.9132650Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-8040238377075266012/connections/ConnectionNameHttps
2025-04-17T00:44:44.9133556Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9134159Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9134582Z         BadRequestDetail: 
2025-04-17T00:44:44.9145496Z   
2025-04-17T00:44:44.9251952Z === NAME  TestAccStreamStreamConnection_https
2025-04-17T00:44:44.9252912Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9253598Z         
2025-04-17T00:44:44.9254063Z         Error: error deleting resource
2025-04-17T00:44:44.9254488Z         
2025-04-17T00:44:44.9255963Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-8040238377075266012/connections/ConnectionNameHttps
2025-04-17T00:44:44.9257509Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9258691Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9259366Z         BadRequestDetail: 
2025-04-17T00:44:44.9259846Z --- FAIL: TestAccStreamStreamConnection_https (5.73s)
```
### 2025-04-18
#### PASS 12 seconds
### 2025-04-19
#### PASS 9 seconds
### 2025-04-20
#### PASS 9 seconds
### 2025-04-21
#### PASS 12 seconds
### 2025-04-22
#### PASS 11 seconds
### 2025-04-23
#### PASS 9 seconds
### 2025-04-24
#### PASS 13 seconds
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 9 seconds
### 2025-04-27
#### PASS 10 seconds
### 2025-04-28
#### PASS 9 seconds
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-01
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 11 seconds
#### PASS 8 seconds
#### PASS 13 seconds
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-05-02
#### PASS 9 seconds
### 2025-05-03
#### PASS 9 seconds
### 2025-05-04
#### PASS 11 seconds
### 2025-05-05
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-05-06
#### PASS 10 seconds
### 2025-05-07
#### PASS 12 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-05-08
#### PASS 11 seconds
### 2025-05-09
#### PASS 10 seconds
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:58.6309372Z === RUN   TestAccStreamStreamConnection_https
2025-05-11T00:29:58.6310492Z     resource_stream_connection_test.go:194: Creating execution project: test-acc-tf-p-1350661605629904023
2025-05-11T00:29:58.6311488Z     resource_stream_connection_test.go:194: 
2025-05-11T00:29:58.6313354Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6317048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6320902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:194
2025-05-11T00:29:58.6322632Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6324266Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6325294Z         	Test:       	TestAccStreamStreamConnection_https
2025-05-11T00:29:58.6327184Z         	Messages:   	Project creation failed: test-acc-tf-p-1350661605629904023, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6328448Z --- FAIL: TestAccStreamStreamConnection_https (0.02s)
```
### 2025-05-12
#### PASS 12 seconds
### 2025-05-13
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-05-14
#### PASS 9 seconds
### 2025-05-15
#### PASS 9 seconds
### 2025-05-16
#### PASS 8 seconds
### 2025-05-17
#### PASS 9 seconds
### 2025-05-18
#### PASS 11 seconds
### 2025-05-19
#### PASS 12 seconds
### 2025-05-20
#### PASS 9 seconds
#### PASS 11 seconds
### 2025-05-21
#### PASS 12 seconds
### 2025-05-22
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 9 seconds
### 2025-05-23
#### PASS 12 seconds
### 2025-05-24
#### PASS 9 seconds
### 2025-05-25
#### PASS 9 seconds
### 2025-05-26
#### PASS 12 seconds
### 2025-05-27
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-28
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-05-30
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-31
#### PASS 9 seconds
### 2025-06-01
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-06-02
#### PASS 12 seconds
#### PASS 13 seconds
#### PASS 12 seconds
### 2025-06-03
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-06-04
#### PASS 12 seconds
### 2025-06-05
#### PASS 7 seconds
### 2025-06-06
#### PASS 9 seconds
### 2025-06-07
#### PASS 8 seconds
### 2025-06-08
#### PASS 9 seconds
### 2025-06-09
#### PASS 9 seconds
### 2025-06-10
#### PASS 12 seconds
### 2025-06-11
#### PASS 8 seconds
#### PASS 11 seconds
### 2025-06-12
#### PASS 10 seconds
### 2025-06-13
#### PASS 12 seconds
### 2025-06-14
#### PASS 10 seconds
### 2025-06-15
#### PASS 12 seconds
### 2025-06-16
#### PASS 9 seconds
### 2025-06-17
#### PASS 9 seconds
### 2025-06-18
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 9 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### FAIL a minute
```
2025-06-22T00:49:55.7953854Z === RUN   TestAccStreamStreamConnection_https
2025-06-22T00:49:55.7958210Z === CONT  TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8081437Z === NAME  TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8082181Z     resource_stream_connection_test.go:207: Step 1/4 error: Error running apply: exit status 1
2025-06-22T00:49:55.8082638Z         
2025-06-22T00:49:55.8082956Z         Error: error creating resource
2025-06-22T00:49:55.8083271Z         
2025-06-22T00:49:55.8083600Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8084366Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8085078Z           21: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8085465Z         
2025-06-22T00:49:55.8086338Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-8036604075840678755/connections
2025-06-22T00:49:55.8087305Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8087984Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8088370Z         BadRequestDetail: 
2025-06-22T00:49:55.8100195Z    test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_step_number=1
2025-06-22T00:49:55.8210718Z === NAME  TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8211273Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8211686Z         
2025-06-22T00:49:55.8212176Z         Error: error during resource delete
2025-06-22T00:49:55.8212456Z         
2025-06-22T00:49:55.8213114Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-8036604075840678755
2025-06-22T00:49:55.8213869Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8214456Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8214853Z         BadRequestDetail: 
2025-06-22T00:49:55.8215147Z --- FAIL: TestAccStreamStreamConnection_https (62.52s)
```
### 2025-06-23
#### PASS 12 seconds
### 2025-06-24
#### PASS 9 seconds
### 2025-06-25
#### PASS 10 seconds
#### PASS 9 seconds
### 2025-06-26
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 13 seconds
### 2025-06-29
#### PASS 10 seconds
### 2025-06-30
#### PASS 11 seconds
### 2025-07-01
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 13 seconds
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 10 seconds
### 2025-07-04
#### PASS 8 seconds
### 2025-07-05
#### PASS 11 seconds
### 2025-07-06
#### PASS 14 seconds
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 9 seconds
### 2025-07-09
#### PASS 9 seconds