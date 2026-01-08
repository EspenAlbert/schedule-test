# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAzure Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 16) FAIL(x 2)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-10 00:33](#error-2025-12-10t0033430000) |  | dev | 2.01s
[2025-12-10 17:18](#error-2025-12-10t1718350000) |  | dev | 1.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - FAIL 2 seconds

### Error 2025-12-10T00:33:43+00:00
```
2025-12-10T00:33:43.1879959Z === RUN   TestMigEncryptionAtRest_basicAzure
2025-12-10T00:33:43.1890960Z   
2025-12-10T00:33:43.1891604Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2025-12-10T00:33:43.1892163Z         
2025-12-10T00:33:43.1892742Z         Error: error creating Encryption At Rest: 6938bf81342a5d087f20c6a5
2025-12-10T00:33:43.1893239Z         
2025-12-10T00:33:43.1893712Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T00:33:43.1894438Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T00:33:43.1895112Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T00:33:43.1895471Z         
2025-12-10T00:33:43.1896080Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf81342a5d087f20c6a5/encryptionAtRest
2025-12-10T00:33:43.1896700Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T00:33:43.1897563Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T00:33:43.1898205Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T00:33:43.1898745Z         Request. Params: [], BadRequestDetail: 
2025-12-10T00:33:43.1899137Z --- FAIL: TestMigEncryptionAtRest_basicAzure (2.11s)
```

  - FAIL a second

### Error 2025-12-10T17:18:35+00:00
```
2025-12-10T17:18:35.7192657Z === RUN   TestMigEncryptionAtRest_basicAzure
2025-12-10T17:18:35.7200690Z    test_name=TestMigEncryptionAtRest_basicAzure
2025-12-10T17:18:35.7201264Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2025-12-10T17:18:35.7201687Z         
2025-12-10T17:18:35.7202124Z         Error: error creating Encryption At Rest: 6939aadeb3f5ba295af898c6
2025-12-10T17:18:35.7202504Z         
2025-12-10T17:18:35.7202860Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T17:18:35.7203534Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T17:18:35.7204177Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T17:18:35.7204521Z         
2025-12-10T17:18:35.7205102Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6939aadeb3f5ba295af898c6/encryptionAtRest
2025-12-10T17:18:35.7205696Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T17:18:35.7206227Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T17:18:35.7207119Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T17:18:35.7209027Z         Request. Params: [], BadRequestDetail: 
2025-12-10T17:18:35.7209435Z --- FAIL: TestMigEncryptionAtRest_basicAzure (1.91s)
```

- 2025-12-11: MISSING
- 2025-12-12 PASS 8 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 8 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 8 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 9 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 7 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 6 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 6 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 7 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 9 seconds
- 2026-01-06: MISSING
- 2026-01-07 PASS 5 seconds
- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 7 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 7 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 5 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 6 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
