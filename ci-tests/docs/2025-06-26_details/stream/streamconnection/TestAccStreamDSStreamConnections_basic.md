# stream/streamconnection/TestAccStreamDSStreamConnections_basic Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 5 seconds
```
2025-06-20T00:45:53.6808157Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-20T00:45:53.6827509Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-20T00:45:53.6832988Z --- PASS: TestAccStreamDSStreamConnections_basic (5.52s)
```
### 2025-06-21
#### PASS 5 seconds
```
2025-06-21T00:43:49.5363814Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-21T00:43:49.5385121Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-21T00:43:49.5414425Z --- PASS: TestAccStreamDSStreamConnections_basic (5.70s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:49:55.7946493Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-22T00:49:55.7957200Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-22T00:49:55.8166812Z === NAME  TestAccStreamDSStreamConnections_basic
2025-06-22T00:49:55.8167499Z     data_source_stream_connections_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8168035Z         
2025-06-22T00:49:55.8168318Z         Error: error during resource delete
2025-06-22T00:49:55.8168585Z         
2025-06-22T00:49:55.8169252Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-6473342022759251841
2025-06-22T00:49:55.8170015Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8170608Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8171007Z         BadRequestDetail: 
2025-06-22T00:49:55.8171324Z --- FAIL: TestAccStreamDSStreamConnections_basic (34.52s)
```
### 2025-06-23
#### PASS 6 seconds
```
2025-06-23T00:45:53.8792357Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-23T00:45:53.8810508Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-23T00:45:53.8818785Z --- PASS: TestAccStreamDSStreamConnections_basic (6.65s)
```
### 2025-06-24
#### PASS 5 seconds
```
2025-06-24T00:45:42.3181773Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-24T00:45:42.3217421Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-24T00:45:42.3218839Z --- PASS: TestAccStreamDSStreamConnections_basic (5.87s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6034915Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-25T00:45:03.6052575Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-25T00:45:03.6063115Z --- PASS: TestAccStreamDSStreamConnections_basic (6.21s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8259674Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-25T06:57:33.8276163Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-25T06:57:33.8278377Z --- PASS: TestAccStreamDSStreamConnections_basic (6.08s)
```
### 2025-06-26
#### PASS 5 seconds
```
2025-06-26T00:44:37.3130592Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-26T00:44:37.3158975Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-26T00:44:37.3165402Z --- PASS: TestAccStreamDSStreamConnections_basic (5.71s)
```
#### PASS 5 seconds
```
2025-06-26T04:28:17.6340298Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-26T04:28:17.6374097Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-26T04:28:17.6378131Z --- PASS: TestAccStreamDSStreamConnections_basic (5.70s)
```