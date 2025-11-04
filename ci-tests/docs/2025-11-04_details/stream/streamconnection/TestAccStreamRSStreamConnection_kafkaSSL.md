# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:28](#error-2025-10-07t0328020000) |  | dev | timeout | 3724.07s
[2025-10-09 02:51](#error-2025-10-09t0251320000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/68e70164c2a3cd1693043b7b/containers | dev |  | 4.06s
[2025-10-11 00:47](#error-2025-10-11t0047430000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68e9a412e5f7141b76c016c6/streams/test-acc-tf-s-6205360719618264765/connections/kafka-conn-ssl | dev |  | 2.01s
[2025-10-12 02:46](#error-2025-10-12t0246540000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/68eaf645bae6807c7549827a/containers | qa |  | 31.07s
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.05s
[2025-10-20 10:49](#error-2025-10-20t1049140000) |  | dev |  | 418.06s
[2025-10-30 02:52](#error-2025-10-30t0252360000) |  | dev | timeout | 3933.09s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 5 minutes
- 2025-10-07

### Error 2025-10-07T03:28:02+00:00
```
2025-10-07T03:28:02.2692162Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-07T03:28:02.2701602Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-07T03:28:02.2723774Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-07T03:28:02.2724555Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-07T03:28:02.2725328Z         
2025-10-07T03:28:02.2726376Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T03:28:02.2727764Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T03:28:02.2728397Z         
2025-10-07T03:28:02.2728782Z           with mongodbatlas_network_peering.test,
2025-10-07T03:28:02.2729473Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-07T03:28:02.2730110Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-10-07T03:28:02.2730473Z         
2025-10-07T03:28:02.2730806Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (3724.68s)
```

- 2025-10-08 PASS 4 minutes
- 2025-10-09

### Error 2025-10-09T02:51:32+00:00
```
2025-10-09T02:51:32.9787897Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-09T02:51:32.9794280Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-09T02:51:32.9812420Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-09T02:51:32.9813171Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-09T02:51:32.9813762Z         
2025-10-09T02:51:32.9815598Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70164c2a3cd1693043b7b/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 68e70164c2a3cd1693043b7b. Reason: Conflict. Params: [68e70164c2a3cd1693043b7b], BadRequestDetail: 
2025-10-09T02:51:32.9816877Z         
2025-10-09T02:51:32.9817233Z           with mongodbatlas_network_container.test,
2025-10-09T02:51:32.9817890Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2025-10-09T02:51:32.9818501Z           12: 	resource "mongodbatlas_network_container" "test" {
2025-10-09T02:51:32.9818828Z         
2025-10-09T02:51:32.9819121Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (4.57s)
```

- 2025-10-10 PASS 4 minutes
- 2025-10-11

### Error 2025-10-11T00:47:43+00:00
```
2025-10-11T00:47:43.3000834Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-11T00:47:43.3012867Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-11T00:47:43.3041785Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-11T00:47:43.3043026Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-10-11T00:47:43.3043822Z         
2025-10-11T00:47:43.3044342Z         Error: error fetching resource
2025-10-11T00:47:43.3044832Z         
2025-10-11T00:47:43.3045503Z           with data.mongodbatlas_stream_connection.test,
2025-10-11T00:47:43.3046892Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2025-10-11T00:47:43.3047978Z           39: data "mongodbatlas_stream_connection" "test" {
2025-10-11T00:47:43.3048530Z         
2025-10-11T00:47:43.3050135Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e9a412e5f7141b76c016c6/streams/test-acc-tf-s-6205360719618264765/connections/kafka-conn-ssl
2025-10-11T00:47:43.3051984Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-11T00:47:43.3053232Z         Detail: Stream connection with name kafka-conn-ssl for project
2025-10-11T00:47:43.3054330Z         68e9a412e5f7141b76c016c6 and name test-acc-tf-s-6205360719618264765 not
2025-10-11T00:47:43.3055489Z         found. Reason: Not Found. Params: [kafka-conn-ssl 68e9a412e5f7141b76c016c6
2025-10-11T00:47:43.3056466Z         test-acc-tf-s-6205360719618264765], BadRequestDetail: 
2025-10-11T00:47:43.3057188Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2.06s)
```

- 2025-10-12

### Error 2025-10-12T02:46:54+00:00
```
2025-10-12T02:46:54.3460148Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-12T02:46:54.3468531Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-12T02:46:54.3480137Z    test_name=TestAccStreamRSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/70fb9e8d-1575-45bc-ad16-1e16fa65f090/terraform test_working_directory=/tmp/plugintest221540032 test_step_number=1
2025-10-12T02:46:54.3519541Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-12T02:46:54.3520276Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-12T02:46:54.3520822Z         
2025-10-12T02:46:54.3523162Z         Error: error creating MongoDB Network Peering Container: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf645bae6807c7549827a/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 68eaf645bae6807c7549827a. Reason: Conflict. Params: [68eaf645bae6807c7549827a], BadRequestDetail: 
2025-10-12T02:46:54.3524882Z         
2025-10-12T02:46:54.3525311Z           with mongodbatlas_network_container.test,
2025-10-12T02:46:54.3525998Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2025-10-12T02:46:54.3526635Z           12: 	resource "mongodbatlas_network_container" "test" {
2025-10-12T02:46:54.3526970Z         
2025-10-12T02:46:54.3527271Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (31.65s)
```

- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5430896Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-13T01:00:44.5437262Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-13T01:00:44.5466740Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-13T01:00:44.5467373Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:00:44.5467819Z         
2025-10-13T01:00:44.5468142Z         Error: error creating resource
2025-10-13T01:00:44.5468613Z         
2025-10-13T01:00:44.5469020Z           with mongodbatlas_stream_connection.test,
2025-10-13T01:00:44.5469788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-13T01:00:44.5470486Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-13T01:00:44.5470818Z         
2025-10-13T01:00:44.5471373Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5472316Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (300.81s)
```

- 2025-10-14 PASS 4 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 2 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 2 minutes
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1472420Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-19T00:50:12.1480247Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-19T00:50:12.1553725Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-19T00:50:12.1554313Z     resource_stream_connection_test.go:256: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1554737Z         
2025-10-19T00:50:12.1555019Z         Error: error creating resource
2025-10-19T00:50:12.1555286Z         
2025-10-19T00:50:12.1555627Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1556276Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1557226Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1557546Z         
2025-10-19T00:50:12.1558316Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1559142Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1559746Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1560354Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1560924Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1561317Z         BadRequestDetail: 
2025-10-19T00:50:12.1569519Z   
2025-10-19T00:50:12.1632279Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1.53s)
```

- 2025-10-20
  - PASS 2 minutes
  - FAIL 6 minutes

### Error 2025-10-20T10:49:14+00:00
```
2025-10-20T10:49:14.1997937Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-20T10:49:14.2018335Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-20T10:49:14.2079706Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-20T10:49:14.2081127Z     resource_stream_connection_test.go:256: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-20T10:49:14.2082023Z         
2025-10-20T10:49:14.2083247Z         Error: error deleting MongoDB Network Peering Container (68f6117cde46041f566ad4d2): couldn't find resource (21 retries)
2025-10-20T10:49:14.2084188Z         
2025-10-20T10:49:14.2084690Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (418.64s)
```

- 2025-10-21 PASS 2 minutes
- 2025-10-22
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-10-23 PASS 12 minutes
- 2025-10-24 PASS 5 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26 PASS 2 minutes
- 2025-10-27 PASS 3 minutes
- 2025-10-28 PASS 2 minutes
- 2025-10-29 PASS 3 minutes
- 2025-10-30

### Error 2025-10-30T02:52:36+00:00
```
2025-10-30T02:52:36.2008423Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-30T02:52:36.2022855Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-30T02:52:36.2056184Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-30T02:52:36.2057192Z     resource_stream_connection_test.go:261: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-30T02:52:36.2057754Z         
2025-10-30T02:52:36.2058828Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-30T02:52:36.2060247Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-30T02:52:36.2060871Z         
2025-10-30T02:52:36.2061226Z           with mongodbatlas_network_peering.test,
2025-10-30T02:52:36.2061908Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-30T02:52:36.2062540Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-10-30T02:52:36.2062875Z         
2025-10-30T02:52:36.2070961Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T02:52:36.2071420Z         
2025-10-30T02:52:36.2072140Z         Error: error deleting MongoDB Network Peering Container (6902b56aabf4374f329c0548): couldn't find resource (21 retries)
2025-10-30T02:52:36.2072696Z         
2025-10-30T02:52:36.2072993Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (3933.88s)
```

- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 minutes
- 2025-11-03 PASS 3 minutes
- 2025-11-04 PASS 3 minutes