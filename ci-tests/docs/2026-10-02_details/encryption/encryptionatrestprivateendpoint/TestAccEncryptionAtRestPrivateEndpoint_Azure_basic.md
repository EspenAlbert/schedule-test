# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:58](#error-2026-09-04t0058030000) | INVALID_AZURE_CREDENTIALS /api/atlas/v2/groups/6a9a138b54d9d7aa80058101/encryptionAtRest | dev | 21.09s
[2026-10-02 00:53](#error-2026-10-02t0053260000) |  | dev | 149.05s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS 3 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 3 minutes
- 2026-09-08 PASS 3 minutes
- 2026-09-09 PASS 3 minutes
- 2026-09-10 PASS 3 minutes
- 2026-09-11 PASS 3 minutes
- 2026-09-12 PASS 3 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 3 minutes
- 2026-09-15 PASS 3 minutes
- 2026-09-16 PASS 3 minutes
- 2026-09-17 PASS 3 minutes
- 2026-09-18 PASS 4 minutes
- 2026-09-19 PASS 3 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 3 minutes
- 2026-09-22 PASS 3 minutes
- 2026-09-23 PASS 3 minutes
- 2026-09-24: MISSING
- 2026-09-25 PASS 3 minutes
- 2026-09-26 PASS 3 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 3 minutes
- 2026-09-29 PASS 3 minutes
- 2026-09-30 PASS 4 minutes
- 2026-10-01 PASS 3 minutes
- 2026-10-02

### Error 2026-10-02T00:53:26+00:00
```
2026-10-02T00:53:26.9306319Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-10-02T00:53:26.9312270Z    test_step_number=3 test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/448b541f-cb54-490c-8ac9-b1331a786516/terraform test_working_directory=/tmp/plugintest578655825
2026-10-02T00:53:26.9312951Z     resource_test.go:43: Error running post-test destroy, there may be dangling resources: exit status 1
2026-10-02T00:53:26.9313237Z         
2026-10-02T00:53:26.9313473Z         Error: error when waiting for status transition in delete
2026-10-02T00:53:26.9313683Z         
2026-10-02T00:53:26.9314131Z         unexpected state 'PENDING_ACCEPTANCE', wanted target 'DELETED, FAILED'. last
2026-10-02T00:53:26.9314400Z         error: %!s(<nil>)
2026-10-02T00:53:26.9314633Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (149.50s)
```


## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 3 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 3 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 5 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 3 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 3 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 3 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
