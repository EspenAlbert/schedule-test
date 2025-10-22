# stream/streamconnection/TestAccStreamRSStreamConnection_instanceName Test Details
# Found 8 TestRuns in dev, qa from 2025-10-17 to 2025-10-22 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa | 1.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23: MISSING
- 2025-09-24: MISSING
- 2025-09-25: MISSING
- 2025-09-26: MISSING
- 2025-09-27: MISSING
- 2025-09-28: MISSING
- 2025-09-29: MISSING
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
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