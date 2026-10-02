# stream/streamconnection/TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-02 02:49](#error-2026-09-02t0249340000) | VALIDATION_ERROR /api/atlas/v2/groups/6a97711f7f32ed5349f8fae9/streams/test-acc-tf-s-2456258715157009127/connections | dev | 0.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T02:49:34+00:00
```
2026-09-02T02:49:34.6118772Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-09-02T02:49:34.6139543Z    test_name=TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit test_terraform_path=/home/runner/work/_temp/c07b50af-a7d1-4530-9044-4d2066b578cf/terraform test_working_directory=/tmp/plugintest1796083484
2026-09-02T02:49:34.6141492Z     resource_stream_connection_test.go:845: Step 1/2 error: Error running apply: exit status 1
2026-09-02T02:49:34.6142250Z         
2026-09-02T02:49:34.6142886Z         Error: error creating resource
2026-09-02T02:49:34.6143381Z         
2026-09-02T02:49:34.6144005Z           with mongodbatlas_stream_connection.test,
2026-09-02T02:49:34.6145171Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-09-02T02:49:34.6146261Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-02T02:49:34.6146836Z         
2026-09-02T02:49:34.6148176Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a97711f7f32ed5349f8fae9/streams/test-acc-tf-s-2456258715157009127/connections
2026-09-02T02:49:34.6149603Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-02T02:49:34.6150688Z         request content produced the validation error: Invalid url. Reason: Bad
2026-09-02T02:49:34.6151726Z         Request. Params: [Invalid url], BadRequestDetail: 
2026-09-02T02:49:34.6152536Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit (0.45s)
```

- 2026-09-03 PASS 3 seconds
- 2026-09-04 PASS 2 seconds
- 2026-09-05 PASS 3 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 13 seconds
- 2026-09-08 PASS 2 seconds
- 2026-09-09 PASS 3 seconds
- 2026-09-10 PASS 2 seconds
- 2026-09-11
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-09-12 PASS 3 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 3 seconds
- 2026-09-15 PASS 2 seconds
- 2026-09-16 PASS 2 seconds
- 2026-09-17 PASS 3 seconds
- 2026-09-18 PASS 2 seconds
- 2026-09-19 PASS 2 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 3 seconds
- 2026-09-22 PASS 2 seconds
- 2026-09-23 PASS 4 seconds
- 2026-09-24 PASS 3 seconds
- 2026-09-25 PASS 2 seconds
- 2026-09-26 PASS 2 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 3 seconds
- 2026-09-29
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-09-30
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-10-01 PASS 3 seconds
- 2026-10-02 PASS 3 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 2 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 3 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 3 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 4 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 4 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 3 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
