# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 6 seconds
```
2025-06-20T00:45:53.6817221Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-20T00:45:53.6830410Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-20T00:45:53.6834224Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.04s)
```
### 2025-06-21
#### PASS 6 seconds
```
2025-06-21T00:43:49.5372347Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-21T00:43:49.5383808Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-21T00:43:49.5421049Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.24s)
```
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
```
2025-06-23T00:45:53.8800452Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-23T00:45:53.8814319Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-23T00:45:53.8821493Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.95s)
```
### 2025-06-24
#### PASS 6 seconds
```
2025-06-24T00:45:42.3190540Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-24T00:45:42.3213864Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-24T00:45:42.3221220Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.32s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6042901Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-25T00:45:03.6058372Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-25T00:45:03.6065974Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.35s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8265194Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-25T06:57:33.8273298Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-25T06:57:33.8280627Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.23s)
```
### 2025-06-26
#### PASS 6 seconds
```
2025-06-26T00:44:37.3152739Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-26T00:44:37.3161326Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-26T00:44:37.3167189Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.08s)
```
#### PASS 6 seconds
```
2025-06-26T04:28:17.6349413Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-06-26T04:28:17.6376288Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-06-26T04:28:17.6381275Z --- PASS: TestAccStreamRSStreamConnection_kafkaSSL (6.08s)
```