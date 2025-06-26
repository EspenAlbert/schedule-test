# stream/TestAccStreamRSStreamConnection_sample Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 6 seconds
```
2025-06-20T00:45:53.6819970Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-20T00:45:53.6828145Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-20T00:45:53.6835256Z --- PASS: TestAccStreamRSStreamConnection_sample (6.08s)
```
### 2025-06-21
#### PASS 6 seconds
```
2025-06-21T00:43:49.5375060Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-21T00:43:49.5383182Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-21T00:43:49.5416548Z --- PASS: TestAccStreamRSStreamConnection_sample (6.09s)
```
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
```
2025-06-23T00:45:53.8803249Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-23T00:45:53.8817369Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-23T00:45:53.8820827Z --- PASS: TestAccStreamRSStreamConnection_sample (6.94s)
```
### 2025-06-24
#### PASS 5 seconds
```
2025-06-24T00:45:42.3192483Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-24T00:45:42.3213519Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-24T00:45:42.3219630Z --- PASS: TestAccStreamRSStreamConnection_sample (5.90s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6045249Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-25T00:45:03.6059608Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-25T00:45:03.6061694Z --- PASS: TestAccStreamRSStreamConnection_sample (6.06s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8266868Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-25T06:57:33.8272547Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-25T06:57:33.8277971Z --- PASS: TestAccStreamRSStreamConnection_sample (6.04s)
```
### 2025-06-26
#### PASS 6 seconds
```
2025-06-26T00:44:37.3154289Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-26T00:44:37.3162905Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-26T00:44:37.3167606Z --- PASS: TestAccStreamRSStreamConnection_sample (6.13s)
```
#### PASS 5 seconds
```
2025-06-26T04:28:17.6351361Z === RUN   TestAccStreamRSStreamConnection_sample
2025-06-26T04:28:17.6375939Z === CONT  TestAccStreamRSStreamConnection_sample
2025-06-26T04:28:17.6379628Z --- PASS: TestAccStreamRSStreamConnection_sample (5.88s)
```