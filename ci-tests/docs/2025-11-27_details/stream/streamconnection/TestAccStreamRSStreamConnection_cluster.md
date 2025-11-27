# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 734.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 6 seconds
- 2025-10-30 PASS 14 minutes
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 14 minutes
- 2025-11-05
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0854567Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-11-06T00:51:58.0855701Z     resource_stream_connection_test.go:290: Creating execution cluster: test-acc-tf-c-7853319396483139867
2025-11-06T00:51:58.0867488Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-11-06T00:51:58.1035627Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-11-06T00:51:58.1036219Z     resource_stream_connection_test.go:291: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1036647Z         
2025-11-06T00:51:58.1036926Z         Error: error creating resource
2025-11-06T00:51:58.1037195Z         
2025-11-06T00:51:58.1037536Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.1038190Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.1038808Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.1039126Z         
2025-11-06T00:51:58.1039891Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.1040995Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1041583Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1041979Z         BadRequestDetail: 
2025-11-06T00:51:58.1043600Z --- FAIL: TestAccStreamRSStreamConnection_cluster (734.67s)
```

- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 39 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 8 minutes
- 2025-11-12 PASS 5 seconds
- 2025-11-13 PASS 21 minutes
- 2025-11-14 PASS 6 seconds
- 2025-11-15 PASS 14 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 5 seconds
- 2025-11-18 PASS 12 minutes
- 2025-11-19 PASS 7 seconds
- 2025-11-20 PASS 17 minutes
- 2025-11-21 PASS 6 seconds
- 2025-11-22 PASS 14 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 6 seconds
- 2025-11-25 PASS 10 minutes
- 2025-11-26 PASS 5 seconds
- 2025-11-27 PASS 14 minutes

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
- 2025-11-13 PASS 6 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 7 seconds
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
