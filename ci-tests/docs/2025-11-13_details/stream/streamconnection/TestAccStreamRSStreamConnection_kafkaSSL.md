# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.05s
[2025-10-20 10:49](#error-2025-10-20t1049140000) |  | dev |  | 418.06s
[2025-10-30 02:52](#error-2025-10-30t0252360000) |  | dev | timeout | 3933.09s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 1.02s

## Timeline
- 2025-10-14: MISSING
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
- 2025-11-09 PASS 2 minutes
- 2025-11-10 PASS 5 minutes
- 2025-11-11 PASS 2 minutes
- 2025-11-12 PASS 4 minutes
- 2025-11-13
  - PASS 2 minutes
  - PASS 2 minutes