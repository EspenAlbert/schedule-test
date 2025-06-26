# stream/streamconnection/TestAccStreamDSStreamConnections_withPageConfig Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 5 seconds
```
2025-06-20T00:45:53.6809484Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-20T00:45:53.6832599Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-20T00:45:53.6833417Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (5.76s)
```
### 2025-06-21
#### PASS 6 seconds
```
2025-06-21T00:43:49.5365055Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-21T00:43:49.5386458Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-21T00:43:49.5417263Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (6.10s)
```
### 2025-06-22
#### FAIL a minute
```
2025-06-22T00:49:55.7947235Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.7958566Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.8060524Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.8061237Z     data_source_stream_connections_test.go:37: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.8061765Z         
2025-06-22T00:49:55.8062201Z         Error: error creating resource
2025-06-22T00:49:55.8062584Z         
2025-06-22T00:49:55.8062909Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8063671Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8064381Z           24: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8064685Z         
2025-06-22T00:49:55.8065537Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-5862052779183285930/connections
2025-06-22T00:49:55.8066752Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8067431Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8067846Z         BadRequestDetail: 
2025-06-22T00:49:55.8080988Z    test_name=TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8196226Z === NAME  TestAccStreamDSStreamConnections_withPageConfig
2025-06-22T00:49:55.8196821Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8197239Z         
2025-06-22T00:49:55.8197523Z         Error: error during resource delete
2025-06-22T00:49:55.8197784Z         
2025-06-22T00:49:55.8198446Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-5862052779183285930
2025-06-22T00:49:55.8199212Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8199796Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8200192Z         BadRequestDetail: 
2025-06-22T00:49:55.8200539Z --- FAIL: TestAccStreamDSStreamConnections_withPageConfig (62.38s)
```
### 2025-06-23
#### PASS 6 seconds
```
2025-06-23T00:45:53.8793722Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-23T00:45:53.8812870Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-23T00:45:53.8818056Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (6.59s)
```
### 2025-06-24
#### PASS 5 seconds
```
2025-06-24T00:45:42.3183055Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-24T00:45:42.3216031Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-24T00:45:42.3217819Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (5.86s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6036274Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-25T00:45:03.6054079Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-25T00:45:03.6060971Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (6.03s)
```
#### PASS 5 seconds
```
2025-06-25T06:57:33.8260529Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-25T06:57:33.8275702Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-25T06:57:33.8277522Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (5.97s)
```
### 2025-06-26
#### PASS 5 seconds
```
2025-06-26T00:44:37.3148177Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-26T00:44:37.3162507Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-26T00:44:37.3164076Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (5.07s)
```
#### PASS 5 seconds
```
2025-06-26T04:28:17.6341646Z === RUN   TestAccStreamDSStreamConnections_withPageConfig
2025-06-26T04:28:17.6375210Z === CONT  TestAccStreamDSStreamConnections_withPageConfig
2025-06-26T04:28:17.6378569Z --- PASS: TestAccStreamDSStreamConnections_withPageConfig (5.81s)
```