# stream/streamconnection/TestAccStreamDSStreamConnection_kafkaSSL Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 6 seconds
```
2025-06-20T00:45:53.6777296Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-20T00:45:53.6831506Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-20T00:45:53.6836871Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (6.23s)
```
### 2025-06-21
#### PASS 6 seconds
```
2025-06-21T00:43:49.5352464Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-21T00:43:49.5389758Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-21T00:43:49.5420338Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (6.23s)
```
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
```
2025-06-23T00:45:53.8780078Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-23T00:45:53.8816782Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-23T00:45:53.8823933Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (7.16s)
```
### 2025-06-24
#### PASS 5 seconds
```
2025-06-24T00:45:42.3168510Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-24T00:45:42.3216745Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-24T00:45:42.3220015Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (5.90s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6000492Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-25T00:45:03.6055298Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-25T00:45:03.6064473Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (6.33s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8250783Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-25T06:57:33.8276907Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-25T06:57:33.8279209Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (6.11s)
```
### 2025-06-26
#### PASS 5 seconds
```
2025-06-26T00:44:37.3122905Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-26T00:44:37.3160141Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-26T00:44:37.3164976Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (5.69s)
```
#### PASS 6 seconds
```
2025-06-26T04:28:17.6327280Z === RUN   TestAccStreamDSStreamConnection_kafkaSSL
2025-06-26T04:28:17.6375588Z === CONT  TestAccStreamDSStreamConnection_kafkaSSL
2025-06-26T04:28:17.6380879Z --- PASS: TestAccStreamDSStreamConnection_kafkaSSL (6.03s)
```