# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:58](#error-2026-09-04t0058030000) | INVALID_AZURE_CREDENTIALS /api/atlas/v2/groups/6a9a138b54d9d7aa80058101/encryptionAtRest | dev | 21.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes
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
- 2026-08-28 PASS 3 minutes
- 2026-08-29 PASS 3 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 3 minutes
- 2026-09-01 PASS 3 minutes
- 2026-09-02 PASS 3 minutes
- 2026-09-03 PASS 4 minutes
- 2026-09-04
  - FAIL 21 seconds

### Error 2026-09-04T00:58:03+00:00
```
2026-09-04T00:58:03.0537014Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-09-04T00:58:03.0549855Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/caab653a-f169-4fdd-ace0-eb997b5e7eab/terraform test_working_directory=/tmp/plugintest1448947772 test_step_number=1
2026-09-04T00:58:03.0551047Z     resource_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-09-04T00:58:03.0551488Z         
2026-09-04T00:58:03.0551987Z         Error: error creating Encryption At Rest: 6a9a138b54d9d7aa80058101
2026-09-04T00:58:03.0552404Z         
2026-09-04T00:58:03.0552812Z           with mongodbatlas_encryption_at_rest.test,
2026-09-04T00:58:03.0553569Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2026-09-04T00:58:03.0554289Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2026-09-04T00:58:03.0554671Z         
2026-09-04T00:58:03.0555295Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138b54d9d7aa80058101/encryptionAtRest
2026-09-04T00:58:03.0556086Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_AZURE_CREDENTIALS") Detail:
2026-09-04T00:58:03.0556817Z         Invalid Azure credentials. Reason: Bad Request. Params: [], BadRequestDetail:
2026-09-04T00:58:03.0557563Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (21.89s)
```

  - PASS 3 minutes

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
- 2026-08-30 PASS 3 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
