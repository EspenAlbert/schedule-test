# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-1315167730156375548/connections | dev | flaky_500 | 1.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 6 seconds
- 2025-10-30 PASS 5 seconds
- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 4 seconds
- 2025-11-05
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0857192Z === RUN   TestAccStreamRSStreamConnection_sample
2025-11-06T00:51:58.0868742Z === CONT  TestAccStreamRSStreamConnection_sample
2025-11-06T00:51:58.1056961Z === NAME  TestAccStreamRSStreamConnection_sample
2025-11-06T00:51:58.1057545Z     resource_stream_connection_test.go:358: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1057997Z         
2025-11-06T00:51:58.1058281Z         Error: error creating resource
2025-11-06T00:51:58.1058556Z         
2025-11-06T00:51:58.1058892Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.1059557Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.1060177Z           36: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.1060671Z         
2025-11-06T00:51:58.1061462Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-1315167730156375548/connections
2025-11-06T00:51:58.1062349Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1062941Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1063339Z         BadRequestDetail: 
2025-11-06T00:51:58.1073695Z   
2025-11-06T00:51:58.1074186Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1074634Z         
2025-11-06T00:51:58.1074931Z         Error: error during resource delete
2025-11-06T00:51:58.1075227Z         
2025-11-06T00:51:58.1075933Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-1315167730156375548
2025-11-06T00:51:58.1076941Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1077574Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1077992Z         BadRequestDetail: 
2025-11-06T00:51:58.1078326Z --- FAIL: TestAccStreamRSStreamConnection_sample (1.55s)
```

- 2025-11-07 PASS 4 seconds
- 2025-11-08 PASS 5 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 6 seconds
- 2025-11-13 PASS 4 seconds
- 2025-11-14 PASS 6 seconds
- 2025-11-15 PASS 4 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 6 seconds
- 2025-11-18 PASS 5 seconds
- 2025-11-19 PASS 6 seconds
- 2025-11-20 PASS 5 seconds
- 2025-11-21 PASS 7 seconds
- 2025-11-22 PASS 4 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 7 seconds
- 2025-11-25 PASS 6 seconds
- 2025-11-26 PASS 5 seconds
- 2025-11-27 PASS 5 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 5 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 5 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 8 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 5 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
