# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAzure Test Details
# Found 21 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:43](#error-2026-09-04t0043560000) | INVALID_AZURE_CREDENTIALS /api/atlas/v2/groups/6a9a138a45c4d5f3e09e2a6d/encryptionAtRest | dev | 23.08s

### Timeline
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
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 8 seconds
- 2026-09-08: MISSING
- 2026-09-09 PASS 11 seconds
- 2026-09-10: MISSING
- 2026-09-11 PASS 9 seconds
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 7 seconds
- 2026-09-15: MISSING
- 2026-09-16 PASS 8 seconds
- 2026-09-17: MISSING
- 2026-09-18 PASS 13 seconds
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 8 seconds
- 2026-09-22: MISSING
- 2026-09-23 PASS 8 seconds
- 2026-09-24: MISSING
- 2026-09-25 PASS 7 seconds
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 9 seconds
- 2026-09-29: MISSING
- 2026-09-30 PASS 7 seconds
- 2026-10-01: MISSING
- 2026-10-02 PASS 6 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 9 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 9 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 8 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 7 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 8 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 9 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
