# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 172.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 3 minutes
- 2025-10-30 PASS 3 minutes
- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
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
- 2025-11-09: MISSING
- 2025-11-10 PASS 3 minutes
- 2025-11-11 PASS 3 minutes
- 2025-11-12 PASS 3 minutes
- 2025-11-13 PASS 6 minutes
- 2025-11-14 PASS 3 minutes
- 2025-11-15 PASS 3 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 3 minutes
- 2025-11-18 PASS 3 minutes
- 2025-11-19 PASS 2 minutes
- 2025-11-20 PASS 2 minutes
- 2025-11-21 PASS 4 minutes
- 2025-11-22 PASS 2 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 2 minutes
- 2025-11-25 PASS 3 minutes
- 2025-11-26 PASS 2 minutes
- 2025-11-27 PASS 2 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 3 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 3 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 2 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 3 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
