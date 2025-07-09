# stream/streamconnection/TestAccStreamDSStreamConnection_kafkaPlaintext Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 8.06s
2025-04-16 12:49 | qa | 8.05s
2025-04-16 14:37 | dev | 8.01s
2025-04-17 00:44 | dev | 7.01s
2025-05-11 00:29 | qa | 0.03s
2025-06-22 00:49 | qa | 33.09s

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
#### PASS 7 seconds
### 2025-04-12
#### PASS 8 seconds
### 2025-04-13
#### PASS 10 seconds
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### FAIL 8 seconds
```
2025-04-16T00:45:12.2876629Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.2893993Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-2094067244871155634
2025-04-16T00:45:12.2951610Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.3036419Z === NAME  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T00:45:12.3037137Z     data_source_stream_connection_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3037643Z         
2025-04-16T00:45:12.3037921Z         Error: error deleting resource
2025-04-16T00:45:12.3038364Z         
2025-04-16T00:45:12.3039307Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-1597994979351728392/connections/test-acc-tf-1597994979351728392
2025-04-16T00:45:12.3040239Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3040835Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3041243Z         BadRequestDetail: 
2025-04-16T00:45:12.3041584Z --- FAIL: TestAccStreamDSStreamConnection_kafkaPlaintext (8.63s)
```
#### FAIL 8 seconds
```
2025-04-16T12:49:32.7918685Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.7920280Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-4648557590255855882
2025-04-16T12:49:32.7996716Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.8202657Z === NAME  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T12:49:32.8203484Z     data_source_stream_connection_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8204037Z         
2025-04-16T12:49:32.8204388Z         Error: error deleting resource
2025-04-16T12:49:32.8204661Z         
2025-04-16T12:49:32.8205787Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-8988601882728924630/connections/test-acc-tf-8988601882728924630
2025-04-16T12:49:32.8206843Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8207556Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8207981Z         BadRequestDetail: 
2025-04-16T12:49:32.8208420Z --- FAIL: TestAccStreamDSStreamConnection_kafkaPlaintext (8.53s)
```
#### FAIL 8 seconds
```
2025-04-16T14:37:26.9909235Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T14:37:26.9911101Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-1223202158903192100
2025-04-16T14:37:26.9974454Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T14:37:27.0122204Z === NAME  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-16T14:37:27.0122936Z     data_source_stream_connection_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0123641Z         
2025-04-16T14:37:27.0123944Z         Error: error deleting resource
2025-04-16T14:37:27.0124209Z         
2025-04-16T14:37:27.0125143Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-7130898396232830809/connections/test-acc-tf-7130898396232830809
2025-04-16T14:37:27.0126098Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0126705Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0127129Z         BadRequestDetail: 
2025-04-16T14:37:27.0127597Z --- FAIL: TestAccStreamDSStreamConnection_kafkaPlaintext (8.13s)
```
### 2025-04-17
#### FAIL 7 seconds
```
2025-04-17T00:44:44.8818387Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.8819683Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-370174123340370791
2025-04-17T00:44:44.8916105Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.9050478Z === NAME  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-04-17T00:44:44.9051204Z     data_source_stream_connection_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9051717Z         
2025-04-17T00:44:44.9052009Z         Error: error deleting resource
2025-04-17T00:44:44.9052275Z         
2025-04-17T00:44:44.9053231Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-8295770677005692996/connections/test-acc-tf-8295770677005692996
2025-04-17T00:44:44.9054320Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9054942Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9055370Z         BadRequestDetail: 
2025-04-17T00:44:44.9055711Z --- FAIL: TestAccStreamDSStreamConnection_kafkaPlaintext (7.06s)
```
### 2025-04-18
#### PASS 10 seconds
### 2025-04-19
#### PASS 8 seconds
### 2025-04-20
#### PASS 7 seconds
### 2025-04-21
#### PASS 9 seconds
### 2025-04-22
#### PASS 8 seconds
### 2025-04-23
#### PASS 8 seconds
### 2025-04-24
#### PASS 9 seconds
### 2025-04-25
#### PASS 8 seconds
### 2025-04-26
#### PASS 7 seconds
### 2025-04-27
#### PASS 8 seconds
### 2025-04-28
#### PASS 8 seconds
### 2025-04-29
#### PASS 7 seconds
### 2025-04-30
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-01
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-05-02
#### PASS 11 seconds
### 2025-05-03
#### PASS 9 seconds
### 2025-05-04
#### PASS 8 seconds
### 2025-05-05
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-05-06
#### PASS 8 seconds
### 2025-05-07
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 11 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 8 seconds
### 2025-05-10
#### PASS 8 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:58.5977021Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-05-11T00:29:58.5983366Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-6362945577522485312
2025-05-11T00:29:58.5986750Z     data_source_stream_connection_test.go:14: 
2025-05-11T00:29:58.5988854Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.5992273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.5996017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/data_source_stream_connection_test.go:14
2025-05-11T00:29:58.5997534Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.5999112Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6000181Z         	Test:       	TestAccStreamDSStreamConnection_kafkaPlaintext
2025-05-11T00:29:58.6002198Z         	Messages:   	Project creation failed: test-acc-tf-p-6362945577522485312, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6003508Z --- FAIL: TestAccStreamDSStreamConnection_kafkaPlaintext (0.25s)
```
### 2025-05-12
#### PASS 9 seconds
### 2025-05-13
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-05-14
#### PASS 7 seconds
### 2025-05-15
#### PASS 8 seconds
### 2025-05-16
#### PASS 7 seconds
### 2025-05-17
#### PASS 7 seconds
### 2025-05-18
#### PASS 8 seconds
### 2025-05-19
#### PASS 8 seconds
### 2025-05-20
#### PASS 7 seconds
#### PASS 10 seconds
### 2025-05-21
#### PASS 9 seconds
### 2025-05-22
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-05-23
#### PASS 9 seconds
### 2025-05-24
#### PASS 7 seconds
### 2025-05-25
#### PASS 7 seconds
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-28
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-05-29
#### PASS 8 seconds
#### PASS 10 seconds
### 2025-05-30
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-31
#### PASS 8 seconds
### 2025-06-01
#### PASS 10 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-03
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-04
#### PASS 9 seconds
### 2025-06-05
#### PASS 6 seconds
### 2025-06-06
#### PASS 7 seconds
### 2025-06-07
#### PASS 8 seconds
### 2025-06-08
#### PASS 8 seconds
### 2025-06-09
#### PASS 8 seconds
### 2025-06-10
#### PASS 9 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-12
#### PASS 8 seconds
### 2025-06-13
#### PASS 9 seconds
### 2025-06-14
#### PASS 8 seconds
### 2025-06-15
#### PASS 8 seconds
### 2025-06-16
#### PASS 7 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 11 seconds
### 2025-06-21
#### PASS 8 seconds
### 2025-06-22
#### FAIL 33 seconds
```
2025-06-22T00:49:55.7934458Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7935887Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-5680356356714215735
2025-06-22T00:49:55.7956492Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7972915Z === NAME  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7973697Z     data_source_stream_connection_test.go:17: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.7974120Z         
2025-06-22T00:49:55.7974389Z         Error: error creating resource
2025-06-22T00:49:55.7974757Z         
2025-06-22T00:49:55.7975079Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.7975704Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.7976276Z           14: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.7976577Z         
2025-06-22T00:49:55.7977072Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.7977738Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.7978309Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.7978689Z         BadRequestDetail: 
2025-06-22T00:49:55.7989194Z   
2025-06-22T00:49:55.8044921Z --- FAIL: TestAccStreamDSStreamConnection_kafkaPlaintext (33.85s)
```
### 2025-06-23
#### PASS 11 seconds
### 2025-06-24
#### PASS 8 seconds
### 2025-06-25
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-06-26
#### PASS 12 seconds
#### PASS 7 seconds
### 2025-06-27
#### PASS 8 seconds
### 2025-06-28
#### PASS 10 seconds
### 2025-06-29
#### PASS 8 seconds
### 2025-06-30
#### PASS 8 seconds
### 2025-07-01
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-07-02
#### PASS 8 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 7 seconds
### 2025-07-05
#### PASS 10 seconds
### 2025-07-06
#### PASS 11 seconds
### 2025-07-07
#### PASS 7 seconds
### 2025-07-08
#### PASS 8 seconds
### 2025-07-09
#### PASS 10 seconds