# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAzure Test Details
# Found 7 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:43](#error-2026-09-04t0043560000) | INVALID_AZURE_CREDENTIALS /api/atlas/v2/groups/6a9a138a45c4d5f3e09e2a6d/encryptionAtRest | dev | 23.08s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 7 seconds
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
- 2026-08-28 PASS 8 seconds
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 7 seconds
- 2026-09-01: MISSING
- 2026-09-02 PASS 9 seconds
- 2026-09-03: MISSING
- 2026-09-04
  - FAIL 23 seconds

### Error 2026-09-04T00:43:56+00:00
```
2026-09-04T00:43:56.0627383Z === RUN   TestMigEncryptionAtRest_basicAzure
2026-09-04T00:43:56.0635834Z   
2026-09-04T00:43:56.0636357Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2026-09-04T00:43:56.0636830Z         
2026-09-04T00:43:56.0637326Z         Error: error creating Encryption At Rest: 6a9a138a45c4d5f3e09e2a6d
2026-09-04T00:43:56.0638315Z         
2026-09-04T00:43:56.0638726Z           with mongodbatlas_encryption_at_rest.test,
2026-09-04T00:43:56.0639487Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2026-09-04T00:43:56.0640207Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2026-09-04T00:43:56.0640597Z         
2026-09-04T00:43:56.0641216Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138a45c4d5f3e09e2a6d/encryptionAtRest
2026-09-04T00:43:56.0642013Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_AZURE_CREDENTIALS") Detail:
2026-09-04T00:43:56.0642746Z         Invalid Azure credentials. Reason: Bad Request. Params: [], BadRequestDetail:
2026-09-04T00:43:56.0643270Z --- FAIL: TestMigEncryptionAtRest_basicAzure (23.77s)
```

  - PASS 6 seconds

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
- 2026-08-30 PASS 6 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
