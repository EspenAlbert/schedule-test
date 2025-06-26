# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 4 seconds
```
2025-06-20T00:45:53.6841196Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-20T00:45:53.6841822Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-4164049922380185656
2025-06-20T00:45:53.6846464Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-20T00:45:53.6849747Z --- PASS: TestAccStreamDSStreamInstance_basic (4.56s)
```
### 2025-06-21
#### PASS 5 seconds
```
2025-06-21T00:43:49.5428539Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-21T00:43:49.5429848Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-807068894669339369
2025-06-21T00:43:49.5438018Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-21T00:43:49.5444923Z --- PASS: TestAccStreamDSStreamInstance_basic (5.49s)
```
### 2025-06-22
#### FAIL 33 seconds
```
2025-06-22T00:49:55.8273024Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-22T00:49:55.8273608Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-5691322219671736419
2025-06-22T00:49:55.8278064Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-22T00:49:55.8333642Z === NAME  TestAccStreamDSStreamInstance_basic
2025-06-22T00:49:55.8334272Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.8334767Z         
2025-06-22T00:49:55.8335030Z         Error: error creating resource
2025-06-22T00:49:55.8335347Z         
2025-06-22T00:49:55.8335687Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8336402Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8337053Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8337348Z         
2025-06-22T00:49:55.8337920Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams
2025-06-22T00:49:55.8338691Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8339292Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8339730Z         BadRequestDetail: 
2025-06-22T00:49:55.8340041Z --- FAIL: TestAccStreamDSStreamInstance_basic (33.27s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:45:53.8831755Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-23T00:45:53.8832920Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-5905833292827816574
2025-06-23T00:45:53.8840789Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-23T00:45:53.8847265Z --- PASS: TestAccStreamDSStreamInstance_basic (8.23s)
```
### 2025-06-24
#### PASS 4 seconds
```
2025-06-24T00:45:42.3225719Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-24T00:45:42.3226339Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-6752576732927152172
2025-06-24T00:45:42.3231068Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-24T00:45:42.3233945Z --- PASS: TestAccStreamDSStreamInstance_basic (4.49s)
```
### 2025-06-25
#### PASS 4 seconds
```
2025-06-25T00:45:03.6073764Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-25T00:45:03.6074830Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-8380065187447218965
2025-06-25T00:45:03.6082483Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-25T00:45:03.6087751Z --- PASS: TestAccStreamDSStreamInstance_basic (4.86s)
```
#### PASS 4 seconds
```
2025-06-25T06:57:33.8285858Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-25T06:57:33.8286501Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-6549313744790153389
2025-06-25T06:57:33.8291566Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-25T06:57:33.8295683Z --- PASS: TestAccStreamDSStreamInstance_basic (4.91s)
```
### 2025-06-26
#### PASS 4 seconds
```
2025-06-26T00:44:37.3172709Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-26T00:44:37.3173361Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-7609045416815969967
2025-06-26T00:44:37.3178143Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-26T00:44:37.3182541Z --- PASS: TestAccStreamDSStreamInstance_basic (4.44s)
```
#### PASS 5 seconds
```
2025-06-26T04:28:17.6386273Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-26T04:28:17.6386909Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-2752743582907366903
2025-06-26T04:28:17.6391598Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-26T04:28:17.6395454Z --- PASS: TestAccStreamDSStreamInstance_basic (5.23s)
```