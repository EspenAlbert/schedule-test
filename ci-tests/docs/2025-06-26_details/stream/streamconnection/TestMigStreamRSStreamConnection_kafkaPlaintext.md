# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 8 seconds
```
2025-06-20T00:45:53.6810963Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-20T00:45:53.6832203Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-20T00:45:53.6838107Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (8.93s)
```
### 2025-06-21
#### PASS 9 seconds
```
2025-06-21T00:43:49.5366494Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-21T00:43:49.5385787Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-21T00:43:49.5423304Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (9.06s)
```
### 2025-06-22
#### FAIL a minute
```
2025-06-22T00:49:55.7948067Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.7960280Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8179077Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8179763Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:49:55.8180252Z         
2025-06-22T00:49:55.8180517Z         Error: error fetching resource
2025-06-22T00:49:55.8180778Z         
2025-06-22T00:49:55.8181107Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8181756Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8182565Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8182870Z         
2025-06-22T00:49:55.8183780Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-1792197320271371234/connections/test-acc-tf-1792197320271371234
2025-06-22T00:49:55.8184722Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8185282Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8185662Z         BadRequestDetail: 
2025-06-22T00:49:55.8195888Z    test_step_number=1
2025-06-22T00:49:55.8262473Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8263065Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8263487Z         
2025-06-22T00:49:55.8263750Z         Error: error deleting resource
2025-06-22T00:49:55.8264011Z         
2025-06-22T00:49:55.8264922Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-1792197320271371234/connections/test-acc-tf-1792197320271371234
2025-06-22T00:49:55.8265838Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8266416Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8266822Z         BadRequestDetail: 
2025-06-22T00:49:55.8267159Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (65.82s)
```
### 2025-06-23
#### PASS 10 seconds
```
2025-06-23T00:45:53.8795068Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-23T00:45:53.8814942Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-23T00:45:53.8826085Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (10.22s)
```
### 2025-06-24
#### PASS 8 seconds
```
2025-06-24T00:45:42.3184492Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-24T00:45:42.3215644Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-24T00:45:42.3222837Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (8.54s)
```
### 2025-06-25
#### PASS 8 seconds
```
2025-06-25T00:45:03.6037616Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-25T00:45:03.6053411Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-25T00:45:03.6068129Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (8.97s)
```
#### PASS 8 seconds
```
2025-06-25T06:57:33.8261457Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-25T06:57:33.8274923Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-25T06:57:33.8282783Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (8.91s)
```
### 2025-06-26
#### PASS 8 seconds
```
2025-06-26T00:44:37.3149072Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-26T00:44:37.3160926Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-26T00:44:37.3169610Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (8.69s)
```
#### PASS 8 seconds
```
2025-06-26T04:28:17.6343166Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-26T04:28:17.6374814Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-06-26T04:28:17.6382934Z --- PASS: TestMigStreamRSStreamConnection_kafkaPlaintext (8.92s)
```