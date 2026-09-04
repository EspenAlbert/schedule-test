# stream/streamconnection/TestAccStreamRSStreamConnection_SchemaRegistry Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-01 02:26](#error-2026-09-01t0226560000) | VALIDATION_ERROR /api/atlas/v2/groups/6a9621483c42a24cfacc9082/streams/test-acc-tf-s-1273339161252609647/connections | dev | 0.04s
[2026-09-02 02:49](#error-2026-09-02t0249340000) | VALIDATION_ERROR /api/atlas/v2/groups/6a97711f7f32ed5349f8fae9/streams/test-acc-tf-s-2456258715157009127/connections | dev | 0.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 4 seconds
- 2026-08-08 PASS 2 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 3 seconds
- 2026-08-11 PASS 2 seconds
- 2026-08-12 PASS 4 seconds
- 2026-08-13 PASS 3 seconds
- 2026-08-14 PASS 4 seconds
- 2026-08-15 PASS 3 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 3 seconds
- 2026-08-18 PASS 2 seconds
- 2026-08-19 PASS 3 seconds
- 2026-08-20 PASS 2 seconds
- 2026-08-21 PASS 3 seconds
- 2026-08-22 PASS 2 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 2 seconds
- 2026-08-25 PASS 3 seconds
- 2026-08-26 PASS 4 seconds
- 2026-08-27 PASS 2 seconds
- 2026-08-28
  - PASS 2 seconds
  - PASS 4 seconds
- 2026-08-29 PASS 3 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 2 seconds
- 2026-09-01

### Error 2026-09-01T02:26:56+00:00
```
2026-09-01T02:26:56.7441038Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistry
2026-09-01T02:26:56.7462327Z   
2026-09-01T02:26:56.7463129Z     resource_stream_connection_test.go:778: Step 1/2 error: Error running apply: exit status 1
2026-09-01T02:26:56.7463854Z         
2026-09-01T02:26:56.7464352Z         Error: error creating resource
2026-09-01T02:26:56.7464848Z         
2026-09-01T02:26:56.7465633Z           with mongodbatlas_stream_connection.test,
2026-09-01T02:26:56.7466816Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-09-01T02:26:56.7467919Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-01T02:26:56.7468494Z         
2026-09-01T02:26:56.7469836Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9621483c42a24cfacc9082/streams/test-acc-tf-s-1273339161252609647/connections
2026-09-01T02:26:56.7471233Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-01T02:26:56.7472311Z         request content produced the validation error: Invalid url. Reason: Bad
2026-09-01T02:26:56.7473226Z         Request. Params: [Invalid url], BadRequestDetail: 
2026-09-01T02:26:56.7473933Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistry (0.42s)
```

- 2026-09-02

### Error 2026-09-02T02:49:34+00:00
```
2026-09-02T02:49:34.6084235Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistry
2026-09-02T02:49:34.6105480Z    test_name=TestAccStreamRSStreamConnection_SchemaRegistry
2026-09-02T02:49:34.6106578Z     resource_stream_connection_test.go:778: Step 1/2 error: Error running apply: exit status 1
2026-09-02T02:49:34.6107336Z         
2026-09-02T02:49:34.6107835Z         Error: error creating resource
2026-09-02T02:49:34.6108314Z         
2026-09-02T02:49:34.6108922Z           with mongodbatlas_stream_connection.test,
2026-09-02T02:49:34.6110165Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-09-02T02:49:34.6111257Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-02T02:49:34.6111835Z         
2026-09-02T02:49:34.6113384Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a97711f7f32ed5349f8fae9/streams/test-acc-tf-s-2456258715157009127/connections
2026-09-02T02:49:34.6114839Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-02T02:49:34.6115915Z         request content produced the validation error: Invalid url. Reason: Bad
2026-09-02T02:49:34.6117209Z         Request. Params: [Invalid url], BadRequestDetail: 
2026-09-02T02:49:34.6117951Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistry (0.46s)
```

- 2026-09-03 PASS 3 seconds
- 2026-09-04 PASS 2 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 3 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 3 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 2 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 2 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 5 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 3 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
