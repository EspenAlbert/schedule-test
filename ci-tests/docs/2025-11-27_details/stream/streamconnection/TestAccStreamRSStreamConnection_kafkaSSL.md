# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 02:52](#error-2025-10-30t0252360000) |  | dev | timeout | 3933.09s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 1.02s
[2025-11-15 00:49](#error-2025-11-15t0049570000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6917c8e55b452e273f38bbfa/streams/test-acc-tf-s-8160660117636163264/connections/kafka-conn-ssl | dev |  | 2.03s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 3 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 5 minutes
  - PASS 2 minutes
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0853275Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-11-06T00:51:58.0868122Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-11-06T00:51:58.0938266Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-11-06T00:51:58.0939322Z     resource_stream_connection_test.go:261: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.0940102Z         
2025-11-06T00:51:58.0940760Z         Error: error creating resource
2025-11-06T00:51:58.0941257Z         
2025-11-06T00:51:58.0941870Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.0943062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.0944137Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.0944773Z         
2025-11-06T00:51:58.0946185Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.0947779Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.0948831Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.0949523Z         BadRequestDetail: 
2025-11-06T00:51:58.0976952Z    test_working_directory=/tmp/plugintest274622852 test_name=TestAccStreamRSStreamConnection_instanceName test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform test_step_number=1
2025-11-06T00:51:58.1042713Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1.17s)
```

- 2025-11-07 PASS 5 minutes
- 2025-11-08 PASS 3 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 5 minutes
- 2025-11-11 PASS 2 minutes
- 2025-11-12 PASS 4 minutes
- 2025-11-13 PASS 2 minutes
- 2025-11-14 PASS 4 minutes
- 2025-11-15

### Error 2025-11-15T00:49:57+00:00
```
2025-11-15T00:49:57.6379966Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-11-15T00:49:57.6392944Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-11-15T00:49:57.6458125Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-11-15T00:49:57.6458875Z     resource_stream_connection_test.go:261: Step 1/3 error: Error running apply: exit status 1
2025-11-15T00:49:57.6459326Z         
2025-11-15T00:49:57.6459621Z         Error: error fetching resource
2025-11-15T00:49:57.6459897Z         
2025-11-15T00:49:57.6460269Z           with data.mongodbatlas_stream_connection.test,
2025-11-15T00:49:57.6460927Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2025-11-15T00:49:57.6461699Z           39: data "mongodbatlas_stream_connection" "test" {
2025-11-15T00:49:57.6462013Z         
2025-11-15T00:49:57.6462877Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6917c8e55b452e273f38bbfa/streams/test-acc-tf-s-8160660117636163264/connections/kafka-conn-ssl
2025-11-15T00:49:57.6463941Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-15T00:49:57.6464533Z         Detail: Stream connection with name kafka-conn-ssl for project
2025-11-15T00:49:57.6465144Z         6917c8e55b452e273f38bbfa and name test-acc-tf-s-8160660117636163264 not
2025-11-15T00:49:57.6465782Z         found. Reason: Not Found. Params: [kafka-conn-ssl 6917c8e55b452e273f38bbfa
2025-11-15T00:49:57.6466363Z         test-acc-tf-s-8160660117636163264], BadRequestDetail: 
2025-11-15T00:49:57.6466770Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2.32s)
```

- 2025-11-16: MISSING
- 2025-11-17 PASS 2 minutes
- 2025-11-18 PASS 3 minutes
- 2025-11-19 PASS 5 minutes
- 2025-11-20 PASS 3 minutes
- 2025-11-21 PASS 4 minutes
- 2025-11-22 PASS 2 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 2 minutes
- 2025-11-25 PASS 3 minutes
- 2025-11-26 PASS 4 minutes
- 2025-11-27 PASS 2 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 2 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 2 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 5 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 2 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
