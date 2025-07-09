# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 5.07s
2025-04-16 12:49 | qa | 5.10s
2025-04-16 14:37 | dev | 5.09s
2025-04-17 00:44 | dev | 5.06s
2025-05-11 00:29 | qa | 0.00s
2025-06-22 00:49 | qa | 62.09s

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
#### PASS 7 seconds
### 2025-04-15
#### PASS 6 seconds
### 2025-04-16
#### FAIL 5 seconds
```
2025-04-16T00:45:12.2946746Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T00:45:12.2952991Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T00:45:12.3171317Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T00:45:12.3172041Z     resource_stream_connection_test.go:117: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3172564Z         
2025-04-16T00:45:12.3172846Z         Error: error deleting resource
2025-04-16T00:45:12.3173111Z         
2025-04-16T00:45:12.3174132Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-1361818428447625220/connections/test-acc-tf-1361818428447625220
2025-04-16T00:45:12.3175080Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3175680Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3176093Z         BadRequestDetail: 
2025-04-16T00:45:12.3176413Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.66s)
```
#### FAIL 5 seconds
```
2025-04-16T12:49:32.7991560Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T12:49:32.7997815Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T12:49:32.8138587Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T12:49:32.8140299Z     resource_stream_connection_test.go:117: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8140828Z         
2025-04-16T12:49:32.8141111Z         Error: error deleting resource
2025-04-16T12:49:32.8141390Z         
2025-04-16T12:49:32.8142319Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-6164777219248986134/connections/test-acc-tf-6164777219248986134
2025-04-16T12:49:32.8143263Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8143873Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8144294Z         BadRequestDetail: 
2025-04-16T12:49:32.8144620Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.96s)
```
#### FAIL 5 seconds
```
2025-04-16T14:37:26.9969264Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T14:37:26.9975885Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T14:37:27.0175300Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-16T14:37:27.0176107Z     resource_stream_connection_test.go:117: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0176732Z         
2025-04-16T14:37:27.0177005Z         Error: error deleting resource
2025-04-16T14:37:27.0177384Z         
2025-04-16T14:37:27.0178555Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-2878583286492159762/connections/test-acc-tf-2878583286492159762
2025-04-16T14:37:27.0179780Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0180422Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0180917Z         BadRequestDetail: 
2025-04-16T14:37:27.0181299Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.87s)
```
### 2025-04-17
#### FAIL 5 seconds
```
2025-04-17T00:44:44.8907069Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-04-17T00:44:44.8923031Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-17T00:44:44.9162163Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-04-17T00:44:44.9162881Z     resource_stream_connection_test.go:117: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9163393Z         
2025-04-17T00:44:44.9163675Z         Error: error deleting resource
2025-04-17T00:44:44.9163941Z         
2025-04-17T00:44:44.9164884Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-590075552754768009/connections/test-acc-tf-590075552754768009
2025-04-17T00:44:44.9165822Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9166430Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9166853Z         BadRequestDetail: 
2025-04-17T00:44:44.9167170Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.58s)
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
#### PASS 6 seconds
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
#### PASS 6 seconds
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
2025-05-11T00:29:58.6241559Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-05-11T00:29:58.6242883Z     resource_stream_connection_test.go:114: Creating execution project: test-acc-tf-p-5216350218184136814
2025-05-11T00:29:58.6243900Z     resource_stream_connection_test.go:114: 
2025-05-11T00:29:58.6245629Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6248966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6253005Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:114
2025-05-11T00:29:58.6254591Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6256244Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6257320Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2025-05-11T00:29:58.6259463Z         	Messages:   	Project creation failed: test-acc-tf-p-5216350218184136814, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6260800Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.02s)
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
#### PASS 5 seconds
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
#### PASS 6 seconds
### 2025-05-22
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-23
#### PASS 6 seconds
### 2025-05-24
#### PASS 6 seconds
### 2025-05-25
#### PASS 6 seconds
### 2025-05-26
#### PASS 7 seconds
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
#### PASS 5 seconds
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
#### PASS 5 seconds
### 2025-06-06
#### PASS 6 seconds
### 2025-06-07
#### PASS 6 seconds
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
#### PASS 6 seconds
### 2025-06-14
#### PASS 6 seconds
### 2025-06-15
#### PASS 6 seconds
### 2025-06-16
#### PASS 6 seconds
### 2025-06-17
#### PASS 6 seconds
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
#### FAIL a minute
```
2025-06-22T00:49:55.7951148Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-22T00:49:55.7960638Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-22T00:49:55.8110117Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-22T00:49:55.8111163Z     resource_stream_connection_test.go:117: Step 1/2 error: Check failed: Check 1/13 error: stream connection (68574efaab82446d9bfb0d5e:test-acc-tf-8738474499682036181:test-acc-tf-8738474499682036181) does not exist
2025-06-22T00:49:55.8118596Z    test_name=TestMigStreamRSStreamConnection_cluster test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform
2025-06-22T00:49:55.8241050Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-22T00:49:55.8241634Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8242164Z         
2025-06-22T00:49:55.8242428Z         Error: error deleting resource
2025-06-22T00:49:55.8242683Z         
2025-06-22T00:49:55.8243597Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-8738474499682036181/connections/test-acc-tf-8738474499682036181
2025-06-22T00:49:55.8244515Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8245099Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8245503Z         BadRequestDetail: 
2025-06-22T00:49:55.8245817Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (62.91s)
```
### 2025-06-23
#### PASS 6 seconds
### 2025-06-24
#### PASS 6 seconds
### 2025-06-25
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-26
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-27
#### PASS 6 seconds
### 2025-06-28
#### PASS 6 seconds
### 2025-06-29
#### PASS 6 seconds
### 2025-06-30
#### PASS 6 seconds
### 2025-07-01
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 5 seconds
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
#### PASS 5 seconds