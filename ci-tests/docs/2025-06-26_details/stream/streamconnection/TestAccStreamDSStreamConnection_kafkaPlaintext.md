# stream/streamconnection/TestAccStreamDSStreamConnection_kafkaPlaintext Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 11 seconds
```
2025-06-20T00:45:53.6772772Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-20T00:45:53.6775233Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-5921752440433802239
2025-06-20T00:45:53.6826243Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-20T00:45:53.6835665Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (11.40s)
```
### 2025-06-21
#### PASS 8 seconds
```
2025-06-21T00:43:49.5346121Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-21T00:43:49.5350564Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-7417535785158593704
2025-06-21T00:43:49.5381899Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-21T00:43:49.5415835Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (8.47s)
```
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
```
2025-06-23T00:45:53.8774402Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-23T00:45:53.8778103Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-9081127615157801878
2025-06-23T00:45:53.8809267Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-23T00:45:53.8823016Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (11.13s)
```
### 2025-06-24
#### PASS 8 seconds
```
2025-06-24T00:45:42.3164879Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-24T00:45:42.3166542Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-6645331364522376515
2025-06-24T00:45:42.3212798Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-24T00:45:42.3220427Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (8.68s)
```
### 2025-06-25
#### PASS 8 seconds
```
2025-06-25T00:45:03.5996597Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-25T00:45:03.5998274Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-2547104292244212001
2025-06-25T00:45:03.6051364Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-25T00:45:03.6062398Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (8.03s)
```
#### PASS 7 seconds
```
2025-06-25T06:57:33.8228638Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-25T06:57:33.8229927Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-4243199975712046409
2025-06-25T06:57:33.8271482Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-25T06:57:33.8280183Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (7.92s)
```
### 2025-06-26
#### PASS 12 seconds
```
2025-06-26T00:44:37.3118061Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-26T00:44:37.3121370Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-1784050918509719236
2025-06-26T00:44:37.3158215Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-26T00:44:37.3166289Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (12.61s)
```
#### PASS 7 seconds
```
2025-06-26T04:28:17.6323401Z === RUN   TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-26T04:28:17.6325250Z     data_source_stream_connection_test.go:14: Creating execution project: test-acc-tf-p-8077666622244053881
2025-06-26T04:28:17.6372848Z === CONT  TestAccStreamDSStreamConnection_kafkaPlaintext
2025-06-26T04:28:17.6380038Z --- PASS: TestAccStreamDSStreamConnection_kafkaPlaintext (7.77s)
```