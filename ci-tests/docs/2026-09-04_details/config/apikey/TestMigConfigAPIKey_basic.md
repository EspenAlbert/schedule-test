# config/apikey/TestMigConfigAPIKey_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 6 seconds
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 6 seconds
- 2026-08-11: MISSING
- 2026-08-12 PASS 6 seconds
- 2026-08-13: MISSING
- 2026-08-14 PASS 6 seconds
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 6 seconds
- 2026-08-18: MISSING
- 2026-08-19 PASS 9 seconds
- 2026-08-20: MISSING
- 2026-08-21 PASS 6 seconds
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 6 seconds
- 2026-08-25: MISSING
- 2026-08-26 PASS 8 seconds
- 2026-08-27: MISSING
- 2026-08-28 PASS 9 seconds
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 8 seconds
- 2026-09-01: MISSING
- 2026-09-02 PASS 6 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 5 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 07:38](#error-2026-08-13t0738030000) |  | qa | provider_download | 21.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 6 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T07:38:03+00:00
```
2026-08-13T07:38:03.0640067Z === RUN   TestMigConfigAPIKey_basic
2026-08-13T07:38:03.0641591Z === CONT  TestMigConfigAPIKey_basic
2026-08-13T07:38:03.0650941Z === NAME  TestMigConfigAPIKey_basic
2026-08-13T07:38:03.0651466Z     resource_api_key_migration_test.go:21: TestStep 1/2 running init: exit status 1
2026-08-13T07:38:03.0651897Z         
2026-08-13T07:38:03.0652223Z         Error: Failed to install provider
2026-08-13T07:38:03.0652532Z         
2026-08-13T07:38:03.0653040Z         Error while installing mongodb/mongodbatlas v2.15.0: could not query provider
2026-08-13T07:38:03.0653873Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2026-08-13T07:38:03.0654575Z         authentication checksums for provider: the request failed after 2 attempts,
2026-08-13T07:38:03.0655073Z         please try again later: Get
2026-08-13T07:38:03.0655987Z         "https://github.com/mongodb/terraform-provider-mongodbatlas/releases/download/v2.15.0/terraform-provider-mongodbatlas_2.15.0_SHA256SUMS":
2026-08-13T07:38:03.0656904Z         context deadline exceeded (Client.Timeout exceeded while awaiting headers)
2026-08-13T07:38:03.0657374Z --- FAIL: TestMigConfigAPIKey_basic (21.32s)
```

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
- 2026-08-30 PASS 7 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
