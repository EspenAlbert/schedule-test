# stream/streamconnection/TestAccStreamDSStreamConnection_sample Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 5 seconds
```
2025-06-20T00:45:53.6806862Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-20T00:45:53.6831845Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-20T00:45:53.6833836Z --- PASS: TestAccStreamDSStreamConnection_sample (5.93s)
```
### 2025-06-21
#### PASS 5 seconds
```
2025-06-21T00:43:49.5362587Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-21T00:43:49.5388351Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-21T00:43:49.5415123Z --- PASS: TestAccStreamDSStreamConnection_sample (5.88s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:49:55.7945781Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-22T00:49:55.7957534Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-22T00:49:55.8151590Z === NAME  TestAccStreamDSStreamConnection_sample
2025-06-22T00:49:55.8152456Z     data_source_stream_connection_test.go:75: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8152968Z         
2025-06-22T00:49:55.8153229Z         Error: error deleting resource
2025-06-22T00:49:55.8153483Z         
2025-06-22T00:49:55.8154327Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-6440201554514361281/connections/sample_stream_solar
2025-06-22T00:49:55.8155207Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8155791Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8156187Z         BadRequestDetail: 
2025-06-22T00:49:55.8156500Z --- FAIL: TestAccStreamDSStreamConnection_sample (34.19s)
```
### 2025-06-23
#### PASS 7 seconds
```
2025-06-23T00:45:53.8791189Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-23T00:45:53.8816205Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-23T00:45:53.8824616Z --- PASS: TestAccStreamDSStreamConnection_sample (7.25s)
```
### 2025-06-24
#### PASS 5 seconds
```
2025-06-24T00:45:42.3180533Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-24T00:45:42.3217088Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-24T00:45:42.3218245Z --- PASS: TestAccStreamDSStreamConnection_sample (5.87s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6033764Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-25T00:45:03.6056654Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-25T00:45:03.6060226Z --- PASS: TestAccStreamDSStreamConnection_sample (6.02s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8258861Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-25T06:57:33.8275308Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-25T06:57:33.8278788Z --- PASS: TestAccStreamDSStreamConnection_sample (6.09s)
```
### 2025-06-26
#### PASS 5 seconds
```
2025-06-26T00:44:37.3129727Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-26T00:44:37.3163273Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-26T00:44:37.3164539Z --- PASS: TestAccStreamDSStreamConnection_sample (5.10s)
```
#### PASS 5 seconds
```
2025-06-26T04:28:17.6338992Z === RUN   TestAccStreamDSStreamConnection_sample
2025-06-26T04:28:17.6374444Z === CONT  TestAccStreamDSStreamConnection_sample
2025-06-26T04:28:17.6379244Z --- PASS: TestAccStreamDSStreamConnection_sample (5.88s)
```