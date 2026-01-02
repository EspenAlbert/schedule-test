# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-10 00:33](#error-2025-12-10t0033430000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6938bf81342a5d087f20c6a5/cloudProviderAccess/6938bfd4342a5d087f218a6f | dev | 26.07s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS a minute
- 2025-12-05 PASS a minute
- 2025-12-06 PASS a minute
- 2025-12-07: MISSING
- 2025-12-08 PASS a minute
- 2025-12-09 PASS a minute
- 2025-12-10
  - FAIL 26 seconds

### Error 2025-12-10T00:33:43+00:00
```
2025-12-10T00:33:43.1900646Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-12-10T00:33:43.1903080Z 2025/12/10 00:33:25 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf81342a5d087f20c6a5/cloudProviderAccess/6938bfd4342a5d087f218a6f PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2237125991369247679). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2237125991369247679], BadRequestDetail:  
2025-12-10T00:33:43.1904876Z 2025/12/10 00:33:25 retrying
2025-12-10T00:33:43.1917609Z   
2025-12-10T00:33:43.1918026Z     resource_test.go:30: Step 1/4 error: Error running apply: exit status 1
2025-12-10T00:33:43.1918415Z         
2025-12-10T00:33:43.1918861Z         Error: error creating Encryption At Rest: 6938bf81342a5d087f20c6a5
2025-12-10T00:33:43.1919235Z         
2025-12-10T00:33:43.1919604Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T00:33:43.1920301Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T00:33:43.1921067Z           77: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T00:33:43.1921411Z         
2025-12-10T00:33:43.1922000Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf81342a5d087f20c6a5/encryptionAtRest
2025-12-10T00:33:43.1922907Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-12-10T00:33:43.1923574Z         cannot assume the specified role (6938bfd4342a5d087f218a6f). Reason: Bad
2025-12-10T00:33:43.1924179Z         Request. Params: [6938bfd4342a5d087f218a6f], BadRequestDetail: 
2025-12-10T00:33:43.1924610Z --- FAIL: TestAccEncryptionAtRest_basicAWS (26.68s)
```

  - PASS a minute
- 2025-12-11 PASS a minute
- 2025-12-12 PASS a minute
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS a minute
- 2025-12-17 PASS a minute
- 2025-12-18 PASS a minute
- 2025-12-19 PASS a minute
- 2025-12-20 PASS a minute
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS a minute
- 2025-12-24 PASS a minute
- 2025-12-25 PASS a minute
- 2025-12-26 PASS a minute
- 2025-12-27 PASS a minute
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a minute
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS a minute

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS a minute
- 2025-12-08: MISSING
- 2025-12-09 PASS a minute
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a minute
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a minute
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
