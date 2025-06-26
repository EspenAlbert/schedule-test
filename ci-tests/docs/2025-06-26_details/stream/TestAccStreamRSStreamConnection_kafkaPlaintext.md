# stream/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 7 seconds
```
2025-06-20T00:45:53.6813703Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-20T00:45:53.6830783Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-20T00:45:53.6837291Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (7.47s)
```
### 2025-06-21
#### PASS 7 seconds
```
2025-06-21T00:43:49.5369357Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-21T00:43:49.5384466Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-21T00:43:49.5421802Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (7.62s)
```
### 2025-06-22
#### FAIL 31 seconds
```
2025-06-22T00:49:55.7949501Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7960995Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7971722Z    test_name=TestAccStreamDSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest2264551993 test_step_number=1
2025-06-22T00:49:55.8022642Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8023207Z     resource_stream_connection_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-22T00:49:55.8023605Z         
2025-06-22T00:49:55.8023880Z         Error: error creating resource
2025-06-22T00:49:55.8024134Z         
2025-06-22T00:49:55.8024441Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8025063Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8025640Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8025934Z         
2025-06-22T00:49:55.8026421Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.8027093Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8027662Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8028036Z         BadRequestDetail: 
2025-06-22T00:49:55.8038282Z    test_working_directory=/tmp/plugintest2884249007 test_step_number=1 test_name=TestAccStreamDSStreamConnection_kafkaSSL
2025-06-22T00:49:55.8046331Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (31.86s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:45:53.8797549Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-23T00:45:53.8815598Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-23T00:45:53.8825323Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (8.47s)
```
### 2025-06-24
#### PASS 7 seconds
```
2025-06-24T00:45:42.3187249Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-24T00:45:42.3214245Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-24T00:45:42.3222028Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (7.34s)
```
### 2025-06-25
#### PASS 7 seconds
```
2025-06-25T00:45:03.6040076Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-25T00:45:03.6058997Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-25T00:45:03.6067369Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (7.97s)
```
#### PASS 7 seconds
```
2025-06-25T06:57:33.8263204Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-25T06:57:33.8273697Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-25T06:57:33.8281914Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (7.43s)
```
### 2025-06-26
#### PASS 7 seconds
```
2025-06-26T00:44:37.3150871Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-26T00:44:37.3162084Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-26T00:44:37.3168478Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (7.19s)
```
#### PASS 7 seconds
```
2025-06-26T04:28:17.6345971Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-26T04:28:17.6377009Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-26T04:28:17.6382494Z --- PASS: TestAccStreamRSStreamConnection_kafkaPlaintext (7.38s)
```