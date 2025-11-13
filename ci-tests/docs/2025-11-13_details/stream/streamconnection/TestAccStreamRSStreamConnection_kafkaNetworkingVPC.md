# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 173.04s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 172.00s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 4 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1447796Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-19T00:50:12.1463470Z    test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform
2025-10-19T00:50:12.1464288Z     resource_stream_connection_test.go:225: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1464713Z         
2025-10-19T00:50:12.1465107Z         Error: error creating resource
2025-10-19T00:50:12.1465388Z         
2025-10-19T00:50:12.1465728Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1466477Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1467349Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1467672Z         
2025-10-19T00:50:12.1468442Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1469402Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1469992Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1470606Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1471170Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1471558Z         BadRequestDetail: 
2025-10-19T00:50:12.1471928Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.37s)
```

- 2025-10-20
  - PASS 5 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 4 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-23 PASS 3 minutes
- 2025-10-24 PASS 3 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 3 minutes
- 2025-10-29 PASS 3 minutes
- 2025-10-30 PASS 3 minutes
- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 minutes
- 2025-11-03 PASS 3 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0818446Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-11-06T00:51:58.0838930Z    test_working_directory=/tmp/plugintest3298438033 test_step_number=1 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-11-06T00:51:58.0840948Z     resource_stream_connection_test.go:230: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.0841757Z         
2025-11-06T00:51:58.0842262Z         Error: error creating resource
2025-11-06T00:51:58.0842981Z         
2025-11-06T00:51:58.0843599Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.0844856Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.0845952Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.0846519Z         
2025-11-06T00:51:58.0847926Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.0849880Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.0851101Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.0851824Z         BadRequestDetail: 
2025-11-06T00:51:58.0852496Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (172.03s)
```

- 2025-11-07 PASS 3 minutes
- 2025-11-08 PASS 3 minutes
- 2025-11-09 PASS 3 minutes
- 2025-11-10 PASS 3 minutes
- 2025-11-11 PASS 3 minutes
- 2025-11-12 PASS 3 minutes
- 2025-11-13
  - PASS 6 minutes
  - PASS 3 minutes