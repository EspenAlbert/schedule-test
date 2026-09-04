# stream/streamconnection/TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 9) FAIL(x 2)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-01 02:26](#error-2026-09-01t0226560000) | VALIDATION_ERROR /api/atlas/v2/groups/6a9621483c42a24cfacc9082/streams/test-acc-tf-s-1273339161252609647/connections | dev | 0.04s
[2026-09-02 02:49](#error-2026-09-02t0249340000) | VALIDATION_ERROR /api/atlas/v2/groups/6a97711f7f32ed5349f8fae9/streams/test-acc-tf-s-2456258715157009127/connections | dev | 0.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 4 seconds
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28
  - PASS 2 seconds
  - PASS 4 seconds
- 2026-08-29 PASS 3 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 2 seconds
- 2026-09-01

### Error 2026-09-01T02:26:56+00:00
```
2026-09-01T02:26:56.7474723Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-09-01T02:26:56.7495604Z    test_name=TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit test_terraform_path=/home/runner/work/_temp/1a1c378e-3267-410a-86af-f1bacc537b9a/terraform test_step_number=1 test_working_directory=/tmp/plugintest349859943
2026-09-01T02:26:56.7497655Z     resource_stream_connection_test.go:845: Step 1/2 error: Error running apply: exit status 1
2026-09-01T02:26:56.7498430Z         
2026-09-01T02:26:56.7498922Z         Error: error creating resource
2026-09-01T02:26:56.7499401Z         
2026-09-01T02:26:56.7499979Z           with mongodbatlas_stream_connection.test,
2026-09-01T02:26:56.7501066Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-09-01T02:26:56.7502141Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-01T02:26:56.7502712Z         
2026-09-01T02:26:56.7504037Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9621483c42a24cfacc9082/streams/test-acc-tf-s-1273339161252609647/connections
2026-09-01T02:26:56.7505572Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-01T02:26:56.7506622Z         request content produced the validation error: Invalid url. Reason: Bad
2026-09-01T02:26:56.7507532Z         Request. Params: [Invalid url], BadRequestDetail: 
2026-09-01T02:26:56.7508335Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit (0.41s)
```

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

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 3 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
