# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 24 TestRuns in dev, qa from 2025-10-16 to 2025-11-06 from master branch: 1 unique tests, PASS(x 21) FAIL(x 3)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.05s
[2025-10-26 00:50](#error-2025-10-26t0050160000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | qa |  | 7.01s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 1.02s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08: MISSING
- 2025-10-09: MISSING
- 2025-10-10: MISSING
- 2025-10-11: MISSING
- 2025-10-12: MISSING
- 2025-10-13: MISSING
- 2025-10-14: MISSING
- 2025-10-15: MISSING
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 9 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1446470Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-19T00:50:12.1481155Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-19T00:50:12.1504758Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-19T00:50:12.1505363Z     resource_stream_connection_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1505787Z         
2025-10-19T00:50:12.1506065Z         Error: error creating resource
2025-10-19T00:50:12.1506336Z         
2025-10-19T00:50:12.1506879Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1507551Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1508282Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1508604Z         
2025-10-19T00:50:12.1509370Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1510197Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1510800Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1511404Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1511973Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1512431Z         BadRequestDetail: 
2025-10-19T00:50:12.1525652Z    test_name=TestAccStreamRSStreamConnection_cluster test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform
2025-10-19T00:50:12.1631838Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.51s)
```

- 2025-10-20
  - PASS 9 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 7 seconds
- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26

### Error 2025-10-26T00:50:16+00:00
```
2025-10-26T00:50:16.3396392Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-26T00:50:16.3408212Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-26T00:50:16.3425949Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-26T00:50:16.3427216Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-10-26T00:50:16.3428338Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (7.11s)
```

- 2025-10-27 PASS 7 seconds
- 2025-10-28 PASS 7 seconds
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 11 seconds
- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 6 seconds
- 2025-11-05
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0816951Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-06T00:51:58.0869397Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-06T00:51:58.1002856Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-06T00:51:58.1003493Z     resource_stream_connection_test.go:215: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.1003928Z         
2025-11-06T00:51:58.1004361Z         Error: error creating resource
2025-11-06T00:51:58.1004638Z         
2025-11-06T00:51:58.1004988Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.1005662Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.1006289Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.1006625Z         
2025-11-06T00:51:58.1007414Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.1008297Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1008907Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1009317Z         BadRequestDetail: 
2025-11-06T00:51:58.1016294Z    test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform test_working_directory=/tmp/plugintest3172593378
2025-11-06T00:51:58.1044504Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.25s)
```
