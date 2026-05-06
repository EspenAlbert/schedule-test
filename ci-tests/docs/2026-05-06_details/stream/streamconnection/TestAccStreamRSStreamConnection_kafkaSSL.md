# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-16 00:56](#error-2026-04-16t0056520000) | NO_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295aa/containers | dev | 7.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 minutes
- 2026-04-08 PASS 4 minutes
- 2026-04-09 PASS 2 minutes
- 2026-04-10 PASS 2 minutes
- 2026-04-11 PASS 2 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 minutes
- 2026-04-14 PASS 2 minutes
- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T00:56:52+00:00
```
2026-04-16T00:56:52.0180985Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-04-16T00:56:52.0205585Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-04-16T00:56:52.0224330Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-04-16T00:56:52.0224936Z     resource_stream_connection_test.go:263: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T00:56:52.0225385Z         
2026-04-16T00:56:52.0226852Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295aa/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 69e032b21ec945fedc7295aa. Reason: Conflict. Params: [AWS 69e032b21ec945fedc7295aa], BadRequestDetail: 
2026-04-16T00:56:52.0227846Z         
2026-04-16T00:56:52.0228271Z           with mongodbatlas_network_container.test,
2026-04-16T00:56:52.0228828Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-16T00:56:52.0229349Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-04-16T00:56:52.0229636Z         
2026-04-16T00:56:52.0230701Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (7.89s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 2 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 3 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30
  - PASS 4 minutes
  - PASS 2 minutes
- 2026-05-01 PASS 2 minutes
- 2026-05-02 PASS 2 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 3 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-12 01:27](#error-2026-04-12t0127030000) |  | qa |  | 358.02s
[2026-05-04 17:36](#error-2026-05-04t1736300000) |  | qa | timeout | 1202.09s
[2026-05-06 07:47](#error-2026-05-06t0747380000) |  | qa | timeout | 1202.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 2 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T01:27:03+00:00
```
2026-04-12T01:27:03.0404912Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-04-12T01:27:03.0416876Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-04-12T01:27:03.0465077Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-04-12T01:27:03.0465854Z     resource_stream_connection_test.go:263: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-12T01:27:03.0466429Z         
2026-04-12T01:27:03.0468231Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69daebd2abb831662d2a200a/peers/69daf32e97e3b71a7067c052 GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-04-12T01:27:03.0469451Z         
2026-04-12T01:27:03.0469796Z           with mongodbatlas_network_peering.test,
2026-04-12T01:27:03.0470714Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-04-12T01:27:03.0471379Z           19: 	resource "mongodbatlas_network_peering" "test" {
2026-04-12T01:27:03.0471720Z         
2026-04-12T01:27:03.0481266Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-04-12T01:27:03.0481906Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-12T01:27:03.0482382Z         
2026-04-12T01:27:03.0483110Z         Error: error deleting MongoDB Network Peering Container (69daf32d97e3b71a7067c03b): couldn't find resource (21 retries)
2026-04-12T01:27:03.0483947Z         
2026-04-12T01:27:03.0484340Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (358.22s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 minutes
- 2026-05-04
  - FAIL 20 minutes

### Error 2026-05-04T17:36:30+00:00
```
2026-05-04T17:36:30.4676660Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-05-04T17:36:30.4710355Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-05-04T17:36:30.4906412Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-05-04T17:36:30.4907550Z     resource_stream_connection_test.go:263: Step 1/3 error: Error running apply: exit status 1
2026-05-04T17:36:30.4908358Z         
2026-05-04T17:36:30.4909053Z         Error: error waiting for stream connection to be ready
2026-05-04T17:36:30.4909663Z         
2026-05-04T17:36:30.4910326Z           with mongodbatlas_stream_connection.test,
2026-05-04T17:36:30.4912106Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-05-04T17:36:30.4913347Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-04T17:36:30.4913971Z         
2026-05-04T17:36:30.4914835Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-04T17:36:30.4915672Z         'NOT_FOUND', timeout: 20m0s)
2026-05-04T17:36:30.4916331Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1202.93s)
```

  - PASS 3 minutes
- 2026-05-05 PASS 3 minutes
- 2026-05-06

### Error 2026-05-06T07:47:38+00:00
```
2026-05-06T07:47:38.5908471Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-05-06T07:47:38.5937019Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-05-06T07:47:38.6031821Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-05-06T07:47:38.6032440Z     resource_stream_connection_test.go:263: Step 1/3 error: Error running apply: exit status 1
2026-05-06T07:47:38.6032891Z         
2026-05-06T07:47:38.6033280Z         Error: error waiting for stream connection to be ready
2026-05-06T07:47:38.6033613Z         
2026-05-06T07:47:38.6033967Z           with mongodbatlas_stream_connection.test,
2026-05-06T07:47:38.6034796Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-05-06T07:47:38.6035460Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-06T07:47:38.6035798Z         
2026-05-06T07:47:38.6036245Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-06T07:47:38.6036706Z         'NOT_FOUND', timeout: 20m0s)
2026-05-06T07:47:38.6037080Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1202.87s)
```

