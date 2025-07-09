# stream/streamconnection/TestAccStreamDSStreamConnection_kafkaSSL Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 5.02s
2025-04-16 12:49 | qa | 6.00s
2025-04-16 14:37 | dev | 5.04s
2025-04-17 00:44 | dev | 5.02s
2025-05-11 00:29 | qa | 0.00s
2025-06-22 00:49 | qa | 31.09s

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
#### PASS 5 seconds
### 2025-04-12
#### PASS 5 seconds
### 2025-04-13
#### PASS 6 seconds
### 2025-04-14
#### PASS 6 seconds
### 2025-04-15
#### PASS 5 seconds
### 2025-04-16
#### FAIL 5 seconds
```
2025-04-16T00:45:12.2896328Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T00:45:12.2956354Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T00:45:12.2968027Z   
2025-04-16T00:45:12.3103349Z === NAME  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T00:45:12.3104256Z     data_source_stream_connection_test.go:36: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3104776Z         
2025-04-16T00:45:12.3105080Z         Error: error deleting resource
2025-04-16T00:45:12.3105356Z         
2025-04-16T00:45:12.3106299Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-4110728998407591895/connections/test-acc-tf-4110728998407591895
2025-04-16T00:45:12.3107252Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3107858Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3108283Z         BadRequestDetail: 
2025-04-16T00:45:12.3108608Z --- FAIL: TestAccStreamDSStreamConnection_kafkaSSL (5.17s)
```
#### FAIL 6 seconds
```
2025-04-16T12:49:32.7922467Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T12:49:32.8001376Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T12:49:32.8189330Z === NAME  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T12:49:32.8190331Z     data_source_stream_connection_test.go:36: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8190940Z         
2025-04-16T12:49:32.8191217Z         Error: error deleting resource
2025-04-16T12:49:32.8191491Z         
2025-04-16T12:49:32.8192607Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-1909162059713879583/connections/test-acc-tf-1909162059713879583
2025-04-16T12:49:32.8193643Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8194345Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8194778Z         BadRequestDetail: 
2025-04-16T12:49:32.8195186Z --- FAIL: TestAccStreamDSStreamConnection_kafkaSSL (6.04s)
```
#### FAIL 5 seconds
```
2025-04-16T14:37:26.9913943Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T14:37:26.9978789Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T14:37:27.0072942Z === NAME  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-16T14:37:27.0073778Z     data_source_stream_connection_test.go:36: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0074330Z         
2025-04-16T14:37:27.0074610Z         Error: error deleting resource
2025-04-16T14:37:27.0074882Z         
2025-04-16T14:37:27.0075832Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-3705573864950972317/connections/test-acc-tf-3705573864950972317
2025-04-16T14:37:27.0076793Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0077396Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0077963Z         BadRequestDetail: 
2025-04-16T14:37:27.0078292Z --- FAIL: TestAccStreamDSStreamConnection_kafkaSSL (5.40s)
```
### 2025-04-17
#### FAIL 5 seconds
```
2025-04-17T00:44:44.8821853Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-04-17T00:44:44.8921764Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-17T00:44:44.9094579Z === NAME  TestAccStreamDSStreamConnection_kafkaSSL
2025-04-17T00:44:44.9095287Z     data_source_stream_connection_test.go:36: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9095794Z         
2025-04-17T00:44:44.9096074Z         Error: error deleting resource
2025-04-17T00:44:44.9096338Z         
2025-04-17T00:44:44.9097290Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-1613380653433553732/connections/test-acc-tf-1613380653433553732
2025-04-17T00:44:44.9098420Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9099030Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9099452Z         BadRequestDetail: 
2025-04-17T00:44:44.9099773Z --- FAIL: TestAccStreamDSStreamConnection_kafkaSSL (5.20s)
```
### 2025-04-18
#### PASS 6 seconds
### 2025-04-19
#### PASS 6 seconds
### 2025-04-20
#### PASS 5 seconds
### 2025-04-21
#### PASS 6 seconds
### 2025-04-22
#### PASS 6 seconds
### 2025-04-23
#### PASS 5 seconds
### 2025-04-24
#### PASS 7 seconds
### 2025-04-25
#### PASS 6 seconds
### 2025-04-26
#### PASS 5 seconds
### 2025-04-27
#### PASS 6 seconds
### 2025-04-28
#### PASS 5 seconds
### 2025-04-29
#### PASS 5 seconds
### 2025-04-30
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-01
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-05-02
#### PASS 5 seconds
### 2025-05-03
#### PASS 6 seconds
### 2025-05-04
#### PASS 7 seconds
### 2025-05-05
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-05-06
#### PASS 6 seconds
### 2025-05-07
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-05-08
#### PASS 6 seconds
### 2025-05-09
#### PASS 5 seconds
### 2025-05-10
#### PASS 5 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:58.6004245Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-05-11T00:29:58.6005392Z     data_source_stream_connection_test.go:32: Creating execution project: test-acc-tf-p-2213468414165738723
2025-05-11T00:29:58.6006603Z     data_source_stream_connection_test.go:32: 
2025-05-11T00:29:58.6008249Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6011507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6015332Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/data_source_stream_connection_test.go:32
2025-05-11T00:29:58.6016848Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6018407Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6019437Z         	Test:       	TestAccStreamDSStreamConnection_kafkaSSL
2025-05-11T00:29:58.6021282Z         	Messages:   	Project creation failed: test-acc-tf-p-2213468414165738723, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6022697Z --- FAIL: TestAccStreamDSStreamConnection_kafkaSSL (0.02s)
```
### 2025-05-12
#### PASS 7 seconds
### 2025-05-13
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-05-14
#### PASS 6 seconds
### 2025-05-15
#### PASS 6 seconds
### 2025-05-16
#### PASS 5 seconds
### 2025-05-17
#### PASS 5 seconds
### 2025-05-18
#### PASS 6 seconds
### 2025-05-19
#### PASS 7 seconds
### 2025-05-20
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-05-21
#### PASS 7 seconds
### 2025-05-22
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 5 seconds
### 2025-05-23
#### PASS 6 seconds
### 2025-05-24
#### PASS 6 seconds
### 2025-05-25
#### PASS 5 seconds
### 2025-05-26
#### PASS 6 seconds
### 2025-05-27
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-28
#### PASS 7 seconds
#### PASS 5 seconds
### 2025-05-29
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-30
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-31
#### PASS 6 seconds
### 2025-06-01
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-03
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-04
#### PASS 7 seconds
### 2025-06-05
#### PASS 4 seconds
### 2025-06-06
#### PASS 5 seconds
### 2025-06-07
#### PASS 5 seconds
### 2025-06-08
#### PASS 5 seconds
### 2025-06-09
#### PASS 6 seconds
### 2025-06-10
#### PASS 6 seconds
### 2025-06-11
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-06-12
#### PASS 6 seconds
### 2025-06-13
#### PASS 6 seconds
### 2025-06-14
#### PASS 6 seconds
### 2025-06-15
#### PASS 7 seconds
### 2025-06-16
#### PASS 5 seconds
### 2025-06-17
#### PASS 5 seconds
### 2025-06-18
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-19
#### PASS 5 seconds
### 2025-06-20
#### PASS 6 seconds
### 2025-06-21
#### PASS 6 seconds
### 2025-06-22
#### FAIL 31 seconds
```
2025-06-22T00:49:55.7937619Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-22T00:49:55.7959591Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-22T00:49:55.8038851Z === NAME  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-22T00:49:55.8039411Z     data_source_stream_connection_test.go:36: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.8039819Z         
2025-06-22T00:49:55.8040080Z         Error: error creating resource
2025-06-22T00:49:55.8040337Z         
2025-06-22T00:49:55.8040790Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8041409Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8042198Z           14: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8042505Z         
2025-06-22T00:49:55.8042992Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.8043651Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8044212Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8044584Z         BadRequestDetail: 
2025-06-22T00:49:55.8046860Z --- FAIL: TestAccStreamDSStreamConnection_kafkaSSL (31.90s)
```
### 2025-06-23
#### PASS 7 seconds
### 2025-06-24
#### PASS 5 seconds
### 2025-06-25
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-26
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-06-27
#### PASS 6 seconds
### 2025-06-28
#### PASS 7 seconds
### 2025-06-29
#### PASS 6 seconds
### 2025-06-30
#### PASS 6 seconds
### 2025-07-01
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 5 seconds
### 2025-07-03
#### PASS 6 seconds
### 2025-07-04
#### PASS 5 seconds
### 2025-07-05
#### PASS 6 seconds
### 2025-07-06
#### PASS 10 seconds
### 2025-07-07
#### PASS 6 seconds
### 2025-07-08
#### PASS 6 seconds
### 2025-07-09
#### PASS 5 seconds