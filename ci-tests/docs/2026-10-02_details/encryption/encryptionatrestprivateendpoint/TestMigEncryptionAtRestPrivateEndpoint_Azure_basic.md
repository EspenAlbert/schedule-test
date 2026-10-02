# encryption/encryptionatrestprivateendpoint/TestMigEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 21 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:58](#error-2026-09-04t0058030000) | INVALID_AZURE_CREDENTIALS /api/atlas/v2/groups/6a9a138b54d9d7aa80058101/encryptionAtRest | dev | 29.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 15 seconds
- 2026-09-03: MISSING
- 2026-09-04
  - FAIL 29 seconds

### Error 2026-09-04T00:58:03+00:00
```
2026-09-04T00:58:03.0518268Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2026-09-04T00:58:03.0519189Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-4217507945393739259
2026-09-04T00:58:03.0528073Z   
2026-09-04T00:58:03.0528577Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2026-09-04T00:58:03.0529056Z         
2026-09-04T00:58:03.0529560Z         Error: error creating Encryption At Rest: 6a9a138b54d9d7aa80058101
2026-09-04T00:58:03.0529998Z         
2026-09-04T00:58:03.0530420Z           with mongodbatlas_encryption_at_rest.test,
2026-09-04T00:58:03.0531198Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2026-09-04T00:58:03.0531919Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2026-09-04T00:58:03.0532315Z         
2026-09-04T00:58:03.0532941Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138b54d9d7aa80058101/encryptionAtRest
2026-09-04T00:58:03.0534049Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_AZURE_CREDENTIALS") Detail:
2026-09-04T00:58:03.0534801Z         Invalid Azure credentials. Reason: Bad Request. Params: [], BadRequestDetail:
2026-09-04T00:58:03.0535403Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (29.85s)
```

  - PASS 12 seconds
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 13 seconds
- 2026-09-08: MISSING
- 2026-09-09 PASS 13 seconds
- 2026-09-10: MISSING
- 2026-09-11 PASS 15 seconds
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 seconds
- 2026-09-15: MISSING
- 2026-09-16 PASS 13 seconds
- 2026-09-17: MISSING
- 2026-09-18 PASS 11 seconds
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 13 seconds
- 2026-09-22: MISSING
- 2026-09-23 PASS 13 seconds
- 2026-09-24: MISSING
- 2026-09-25 PASS 12 seconds
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 15 seconds
- 2026-09-29: MISSING
- 2026-09-30 PASS 13 seconds
- 2026-10-01: MISSING
- 2026-10-02 PASS 14 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 13 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 12 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 15 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 13 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 12 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
