# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 6 seconds
```
2025-06-20T00:45:53.6818458Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-20T00:45:53.6829995Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-20T00:45:53.6836090Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.19s)
```
### 2025-06-21
#### PASS 6 seconds
```
2025-06-21T00:43:49.5373773Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-21T00:43:49.5387117Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-21T00:43:49.5419613Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.17s)
```
### 2025-06-22
#### FAIL 31 seconds
```
2025-06-22T00:49:55.7952338Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-22T00:49:55.7959928Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8009976Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8010530Z     resource_stream_connection_test.go:139: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8010934Z         
2025-06-22T00:49:55.8011202Z         Error: error creating resource
2025-06-22T00:49:55.8011464Z         
2025-06-22T00:49:55.8011771Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8012638Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8013262Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8013566Z         
2025-06-22T00:49:55.8014064Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.8014741Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8015312Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8015689Z         BadRequestDetail: 
2025-06-22T00:49:55.8022184Z    test_step_number=1 test_name=TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8045762Z --- FAIL: TestAccStreamRSStreamConnection_cluster (31.86s)
```
### 2025-06-23
#### PASS 6 seconds
```
2025-06-23T00:45:53.8801935Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-23T00:45:53.8813731Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-23T00:45:53.8822262Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.96s)
```
### 2025-06-24
#### PASS 6 seconds
```
2025-06-24T00:45:42.3191375Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-24T00:45:42.3215286Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-24T00:45:42.3220835Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.07s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6044086Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-25T00:45:03.6057789Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-25T00:45:03.6065149Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.33s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8266043Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-25T06:57:33.8272928Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-25T06:57:33.8281049Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.23s)
```
### 2025-06-26
#### PASS 6 seconds
```
2025-06-26T00:44:37.3153521Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-26T00:44:37.3163638Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-26T00:44:37.3168024Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.14s)
```
#### PASS 6 seconds
```
2025-06-26T04:28:17.6350644Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-26T04:28:17.6377757Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-26T04:28:17.6381669Z --- PASS: TestAccStreamRSStreamConnection_cluster (6.17s)
```