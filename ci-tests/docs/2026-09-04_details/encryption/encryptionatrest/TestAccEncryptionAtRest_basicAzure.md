# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAzure Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-04 00:43](#error-2026-09-04t0043560000) | INVALID_AZURE_CREDENTIALS /api/atlas/v2/groups/6a9a138a45c4d5f3e09e2a6d/encryptionAtRest | dev | flaky_500 | 21.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 6 seconds
- 2026-08-08 PASS 10 seconds
- 2026-08-09: MISSING
- 2026-08-10 PASS 6 seconds
- 2026-08-11 PASS 7 seconds
- 2026-08-12 PASS 7 seconds
- 2026-08-13 PASS 4 seconds
- 2026-08-14 PASS 5 seconds
- 2026-08-15 PASS 5 seconds
- 2026-08-16: MISSING
- 2026-08-17 PASS 7 seconds
- 2026-08-18 PASS 5 seconds
- 2026-08-19 PASS 6 seconds
- 2026-08-20 PASS 5 seconds
- 2026-08-21 PASS 7 seconds
- 2026-08-22 PASS 6 seconds
- 2026-08-23: MISSING
- 2026-08-24 PASS 6 seconds
- 2026-08-25 PASS 6 seconds
- 2026-08-26 PASS 7 seconds
- 2026-08-27 PASS 5 seconds
- 2026-08-28 PASS 7 seconds
- 2026-08-29 PASS 5 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 5 seconds
- 2026-09-01 PASS 5 seconds
- 2026-09-02 PASS 11 seconds
- 2026-09-03 PASS 5 seconds
- 2026-09-04
  - FAIL 21 seconds

### Error 2026-09-04T00:43:56+00:00
```
2026-09-04T00:43:56.0650054Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-09-04T00:43:56.0662082Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/caab653a-f169-4fdd-ace0-eb997b5e7eab/terraform test_name=TestAccEncryptionAtRest_basicAzure test_working_directory=/tmp/plugintest4239960612
2026-09-04T00:43:56.0663211Z     resource_test.go:122: Step 1/3 error: Error running apply: exit status 1
2026-09-04T00:43:56.0663661Z         
2026-09-04T00:43:56.0664149Z         Error: error creating Encryption At Rest: 6a9a138a45c4d5f3e09e2a6d
2026-09-04T00:43:56.0664849Z         
2026-09-04T00:43:56.0665259Z           with mongodbatlas_encryption_at_rest.test,
2026-09-04T00:43:56.0666013Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2026-09-04T00:43:56.0666717Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2026-09-04T00:43:56.0667107Z         
2026-09-04T00:43:56.0667912Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138a45c4d5f3e09e2a6d/encryptionAtRest
2026-09-04T00:43:56.0668727Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_AZURE_CREDENTIALS") Detail:
2026-09-04T00:43:56.0669462Z         Invalid Azure credentials. Reason: Bad Request. Params: [], BadRequestDetail:
2026-09-04T00:43:56.0669997Z --- FAIL: TestAccEncryptionAtRest_basicAzure (21.70s)
```

  - PASS 4 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 6 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 4 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 6 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 6 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 6 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 5 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
