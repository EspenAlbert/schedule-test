# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 5.05s
2025-04-16 12:49 | qa | 6.01s
2025-04-16 14:37 | dev | 5.09s
2025-04-17 00:44 | dev | 5.03s
2025-05-11 00:29 | qa | 0.00s
2025-06-22 00:49 | qa | 33.10s

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
#### PASS 6 seconds
### 2025-04-12
#### PASS 6 seconds
### 2025-04-13
#### PASS 6 seconds
### 2025-04-14
#### PASS 6 seconds
### 2025-04-15
#### PASS 6 seconds
### 2025-04-16
#### FAIL 5 seconds
```
2025-04-16T00:45:12.2948131Z === RUN   TestAccStreamRSStreamConnection_sample
2025-04-16T00:45:12.2952315Z === CONT  TestAccStreamRSStreamConnection_sample
2025-04-16T00:45:12.3138675Z === NAME  TestAccStreamRSStreamConnection_sample
2025-04-16T00:45:12.3139362Z     resource_stream_connection_test.go:173: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3139873Z         
2025-04-16T00:45:12.3140143Z         Error: error deleting resource
2025-04-16T00:45:12.3140404Z         
2025-04-16T00:45:12.3141274Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-5238027950562068187/connections/sample_stream_solar
2025-04-16T00:45:12.3142168Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3142765Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3143300Z         BadRequestDetail: 
2025-04-16T00:45:12.3143613Z --- FAIL: TestAccStreamRSStreamConnection_sample (5.53s)
```
#### FAIL 6 seconds
```
2025-04-16T12:49:32.7993035Z === RUN   TestAccStreamRSStreamConnection_sample
2025-04-16T12:49:32.7997456Z === CONT  TestAccStreamRSStreamConnection_sample
2025-04-16T12:49:32.8242720Z === NAME  TestAccStreamRSStreamConnection_sample
2025-04-16T12:49:32.8243513Z     resource_stream_connection_test.go:173: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8244030Z         
2025-04-16T12:49:32.8244312Z         Error: error deleting resource
2025-04-16T12:49:32.8244579Z         
2025-04-16T12:49:32.8245688Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-973308822569453361/connections/sample_stream_solar
2025-04-16T12:49:32.8246676Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8247318Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8247734Z         BadRequestDetail: 
2025-04-16T12:49:32.8248051Z --- FAIL: TestAccStreamRSStreamConnection_sample (6.12s)
```
#### FAIL 5 seconds
```
2025-04-16T14:37:26.9970693Z === RUN   TestAccStreamRSStreamConnection_sample
2025-04-16T14:37:26.9975179Z === CONT  TestAccStreamRSStreamConnection_sample
2025-04-16T14:37:27.0194280Z === NAME  TestAccStreamRSStreamConnection_sample
2025-04-16T14:37:27.0195113Z     resource_stream_connection_test.go:173: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0195748Z         
2025-04-16T14:37:27.0196024Z         Error: error deleting resource
2025-04-16T14:37:27.0196440Z         
2025-04-16T14:37:27.0197426Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-3703445057561975543/connections/sample_stream_solar
2025-04-16T14:37:27.0198460Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0199182Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0199728Z         BadRequestDetail: 
2025-04-16T14:37:27.0200049Z --- FAIL: TestAccStreamRSStreamConnection_sample (5.91s)
```
### 2025-04-17
#### FAIL 5 seconds
```
2025-04-17T00:44:44.8909857Z === RUN   TestAccStreamRSStreamConnection_sample
2025-04-17T00:44:44.8917630Z === CONT  TestAccStreamRSStreamConnection_sample
2025-04-17T00:44:44.9110734Z === NAME  TestAccStreamRSStreamConnection_sample
2025-04-17T00:44:44.9111440Z     resource_stream_connection_test.go:173: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9112075Z         
2025-04-17T00:44:44.9112358Z         Error: error deleting resource
2025-04-17T00:44:44.9112623Z         
2025-04-17T00:44:44.9113510Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-3825921497797877734/connections/sample_stream_solar
2025-04-17T00:44:44.9114405Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9115014Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9115429Z         BadRequestDetail: 
2025-04-17T00:44:44.9115749Z --- FAIL: TestAccStreamRSStreamConnection_sample (5.26s)
```
### 2025-04-18
#### PASS 6 seconds
### 2025-04-19
#### PASS 6 seconds
### 2025-04-20
#### PASS 6 seconds
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
#### PASS 6 seconds
### 2025-04-29
#### PASS 6 seconds
### 2025-04-30
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-01
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 7 seconds
### 2025-05-02
#### PASS 6 seconds
### 2025-05-03
#### PASS 6 seconds
### 2025-05-04
#### PASS 7 seconds
### 2025-05-05
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-06
#### PASS 6 seconds
### 2025-05-07
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-08
#### PASS 6 seconds
### 2025-05-09
#### PASS 6 seconds
### 2025-05-10
#### PASS 6 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:58.6289928Z === RUN   TestAccStreamRSStreamConnection_sample
2025-05-11T00:29:58.6291078Z     resource_stream_connection_test.go:169: Creating execution project: test-acc-tf-p-6346018675978874231
2025-05-11T00:29:58.6292265Z     resource_stream_connection_test.go:169: 
2025-05-11T00:29:58.6293975Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6297263Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6301079Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:169
2025-05-11T00:29:58.6302815Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6304451Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6305508Z         	Test:       	TestAccStreamRSStreamConnection_sample
2025-05-11T00:29:58.6307409Z         	Messages:   	Project creation failed: test-acc-tf-p-6346018675978874231, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6308712Z --- FAIL: TestAccStreamRSStreamConnection_sample (0.02s)
```
### 2025-05-12
#### PASS 7 seconds
### 2025-05-13
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-14
#### PASS 6 seconds
### 2025-05-15
#### PASS 6 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 6 seconds
### 2025-05-18
#### PASS 6 seconds
### 2025-05-19
#### PASS 6 seconds
### 2025-05-20
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-21
#### PASS 5 seconds
### 2025-05-22
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-23
#### PASS 6 seconds
### 2025-05-24
#### PASS 5 seconds
### 2025-05-25
#### PASS 6 seconds
### 2025-05-26
#### PASS 6 seconds
### 2025-05-27
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-28
#### PASS 6 seconds
#### PASS 6 seconds
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
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-03
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-04
#### PASS 6 seconds
### 2025-06-05
#### PASS 4 seconds
### 2025-06-06
#### PASS 6 seconds
### 2025-06-07
#### PASS 5 seconds
### 2025-06-08
#### PASS 6 seconds
### 2025-06-09
#### PASS 6 seconds
### 2025-06-10
#### PASS 6 seconds
### 2025-06-11
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-12
#### PASS 6 seconds
### 2025-06-13
#### PASS 7 seconds
### 2025-06-14
#### PASS 6 seconds
### 2025-06-15
#### PASS 6 seconds
### 2025-06-16
#### PASS 6 seconds
### 2025-06-17
#### PASS 5 seconds
### 2025-06-18
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-19
#### PASS 6 seconds
### 2025-06-20
#### PASS 6 seconds
### 2025-06-21
#### PASS 6 seconds
### 2025-06-22
#### FAIL 33 seconds
```
2025-06-22T00:49:55.7953187Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-22T00:49:55.7958921Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-22T00:49:55.8135772Z === NAME  TestAccStreamRSStreamConnection_sample
2025-06-22T00:49:55.8136457Z     resource_stream_connection_test.go:173: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8136956Z         
2025-06-22T00:49:55.8137223Z         Error: error deleting resource
2025-06-22T00:49:55.8137478Z         
2025-06-22T00:49:55.8138328Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-8853987632880202480/connections/sample_stream_solar
2025-06-22T00:49:55.8139208Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8139795Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8140322Z         BadRequestDetail: 
2025-06-22T00:49:55.8140632Z --- FAIL: TestAccStreamRSStreamConnection_sample (33.96s)
```
### 2025-06-23
#### PASS 6 seconds
### 2025-06-24
#### PASS 5 seconds
### 2025-06-25
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-26
#### PASS 6 seconds
#### PASS 5 seconds
### 2025-06-27
#### PASS 6 seconds
### 2025-06-28
#### PASS 6 seconds
### 2025-06-29
#### PASS 6 seconds
### 2025-06-30
#### PASS 6 seconds
### 2025-07-01
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 6 seconds
### 2025-07-03
#### PASS 6 seconds
### 2025-07-04
#### PASS 6 seconds
### 2025-07-05
#### PASS 6 seconds
### 2025-07-06
#### PASS 10 seconds
### 2025-07-07
#### PASS 6 seconds
### 2025-07-08
#### PASS 6 seconds
### 2025-07-09
#### PASS 6 seconds