# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 8 seconds
```
2025-06-20T00:45:53.6812417Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-20T00:45:53.6826902Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-20T00:45:53.6837700Z --- PASS: TestMigStreamRSStreamConnection_cluster (8.88s)
```
### 2025-06-21
#### PASS 8 seconds
```
2025-06-21T00:43:49.5367905Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-21T00:43:49.5382563Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-21T00:43:49.5422558Z --- PASS: TestMigStreamRSStreamConnection_cluster (8.90s)
```
### 2025-06-22
#### FAIL a minute
```
2025-06-22T00:49:55.7948816Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.7956864Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8119279Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8119881Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8120318Z         
2025-06-22T00:49:55.8120580Z         Error: error creating resource
2025-06-22T00:49:55.8120838Z         
2025-06-22T00:49:55.8121157Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8121797Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8122516Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8122824Z         
2025-06-22T00:49:55.8123562Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-892385204726615978/connections
2025-06-22T00:49:55.8124397Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8124974Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8125350Z         BadRequestDetail: 
2025-06-22T00:49:55.8135084Z    test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest2856699701 test_step_number=2
2025-06-22T00:49:55.8251482Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8252166Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8252581Z         
2025-06-22T00:49:55.8252860Z         Error: error during resource delete
2025-06-22T00:49:55.8253121Z         
2025-06-22T00:49:55.8253780Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-892385204726615978
2025-06-22T00:49:55.8254527Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8255107Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8255511Z         BadRequestDetail: 
2025-06-22T00:49:55.8255814Z --- FAIL: TestMigStreamRSStreamConnection_cluster (64.50s)
```
### 2025-06-23
#### PASS 10 seconds
```
2025-06-23T00:45:53.8796345Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-23T00:45:53.8809899Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-23T00:45:53.8826822Z --- PASS: TestMigStreamRSStreamConnection_cluster (10.29s)
```
### 2025-06-24
#### PASS 8 seconds
```
2025-06-24T00:45:42.3185901Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-24T00:45:42.3213170Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-24T00:45:42.3222431Z --- PASS: TestMigStreamRSStreamConnection_cluster (8.53s)
```
### 2025-06-25
#### PASS 9 seconds
```
2025-06-25T00:45:03.6038875Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-25T00:45:03.6051991Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-25T00:45:03.6068837Z --- PASS: TestMigStreamRSStreamConnection_cluster (9.10s)
```
#### PASS 8 seconds
```
2025-06-25T06:57:33.8262338Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-25T06:57:33.8272077Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-25T06:57:33.8282356Z --- PASS: TestMigStreamRSStreamConnection_cluster (8.75s)
```
### 2025-06-26
#### PASS 8 seconds
```
2025-06-26T00:44:37.3150086Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-26T00:44:37.3158606Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-26T00:44:37.3168925Z --- PASS: TestMigStreamRSStreamConnection_cluster (8.47s)
```
#### PASS 8 seconds
```
2025-06-26T04:28:17.6344624Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-26T04:28:17.6373224Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-26T04:28:17.6383352Z --- PASS: TestMigStreamRSStreamConnection_cluster (8.94s)
```