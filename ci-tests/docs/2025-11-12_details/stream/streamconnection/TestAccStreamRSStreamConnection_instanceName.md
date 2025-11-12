# stream/streamconnection/TestAccStreamRSStreamConnection_instanceName Test Details
# Found 29 TestRuns in dev, qa from 2025-10-17 to 2025-11-12 from master branch: 1 unique tests, PASS(x 26) FAIL(x 3)
Success rate: 89.66%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.06s
[2025-10-28 00:50](#error-2025-10-28t0050530000) | Step 1 1 | dev |  | 1.07s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 1.02s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07: MISSING
- 2025-10-08: MISSING
- 2025-10-09: MISSING
- 2025-10-10: MISSING
- 2025-10-11: MISSING
- 2025-10-12: MISSING
- 2025-10-13: MISSING
- 2025-10-14: MISSING
- 2025-10-15: MISSING
- 2025-10-16: MISSING
- 2025-10-17 PASS 3 seconds
- 2025-10-18 PASS 4 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1477856Z === RUN   TestAccStreamRSStreamConnection_instanceName
2025-10-19T00:50:12.1480757Z === CONT  TestAccStreamRSStreamConnection_instanceName
2025-10-19T00:50:12.1613299Z === NAME  TestAccStreamRSStreamConnection_instanceName
2025-10-19T00:50:12.1614090Z     resource_stream_connection_test.go:502: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1614651Z         
2025-10-19T00:50:12.1615057Z         Error: error creating resource
2025-10-19T00:50:12.1615482Z         
2025-10-19T00:50:12.1625726Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1626507Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1627290Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1627635Z         
2025-10-19T00:50:12.1628427Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1629279Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1629890Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1630497Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1631071Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1631464Z         BadRequestDetail: 
2025-10-19T00:50:12.1633557Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (1.59s)
```

- 2025-10-20
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 3 seconds
- 2025-10-22
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-10-23 PASS 3 seconds
- 2025-10-24 PASS 3 seconds
- 2025-10-25 PASS 4 seconds
- 2025-10-26 PASS 3 seconds
- 2025-10-27 PASS 3 seconds
- 2025-10-28

### Error 2025-10-28T00:50:53+00:00
```
2025-10-28T00:50:53.9712674Z === RUN   TestAccStreamRSStreamConnection_instanceName
2025-10-28T00:50:53.9715090Z === CONT  TestAccStreamRSStreamConnection_instanceName
2025-10-28T00:50:53.9729054Z === NAME  TestAccStreamRSStreamConnection_instanceName
2025-10-28T00:50:53.9730130Z     resource_stream_connection_test.go:507: Step 1/2 error: Check failed: Check 1/5 error: stream connection (69000dec39dc62531d7216e2:test-acc-tf-s-3794566387456669232:test-acc-tf-1956034046353764703) does not exist
2025-10-28T00:50:53.9731001Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (1.73s)
```

- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 3 seconds
- 2025-10-31 PASS 4 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 4 seconds
- 2025-11-03 PASS 3 seconds
- 2025-11-04 PASS 2 seconds
- 2025-11-05
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0863351Z === RUN   TestAccStreamRSStreamConnection_instanceName
2025-11-06T00:51:58.0870058Z === CONT  TestAccStreamRSStreamConnection_instanceName
2025-11-06T00:51:58.0978570Z === NAME  TestAccStreamRSStreamConnection_instanceName
2025-11-06T00:51:58.0979654Z     resource_stream_connection_test.go:507: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.0980406Z         
2025-11-06T00:51:58.0981067Z         Error: error creating resource
2025-11-06T00:51:58.0981522Z         
2025-11-06T00:51:58.0982122Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.0983246Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.0984314Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.0984881Z         
2025-11-06T00:51:58.0986331Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.0987921Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.0988986Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.0989698Z         BadRequestDetail: 
2025-11-06T00:51:58.1002138Z    test_name=TestAccStreamRSStreamConnection_kafkaOAuthBearer test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform
2025-11-06T00:51:58.1043162Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (1.23s)
```

- 2025-11-07 PASS 4 seconds
- 2025-11-08 PASS 2 seconds
- 2025-11-09 PASS 4 seconds
- 2025-11-10 PASS 4 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 3 seconds