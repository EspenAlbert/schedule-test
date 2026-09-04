# config/projectapikey/TestMigProjectAPIKey_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 29 seconds
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 18 seconds
- 2026-08-11: MISSING
- 2026-08-12 PASS 19 seconds
- 2026-08-13: MISSING
- 2026-08-14 PASS 18 seconds
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 20 seconds
- 2026-08-18: MISSING
- 2026-08-19 PASS 29 seconds
- 2026-08-20: MISSING
- 2026-08-21 PASS 20 seconds
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 16 seconds
- 2026-08-25: MISSING
- 2026-08-26 PASS 28 seconds
- 2026-08-27: MISSING
- 2026-08-28 PASS 27 seconds
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 27 seconds
- 2026-09-01: MISSING
- 2026-09-02 PASS 26 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 22 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 07:38](#error-2026-08-13t0738030000) |  | qa | provider_download | 23.10s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 14 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T07:38:03+00:00
```
2026-08-13T07:38:03.0597673Z === RUN   TestMigProjectAPIKey_basic
2026-08-13T07:38:03.0598362Z     resource_project_api_key_migration_test.go:10: Creating execution project (1): test-acc-tf-p-4174703470791489767
2026-08-13T07:38:03.0605386Z === CONT  TestMigProjectAPIKey_basic
2026-08-13T07:38:03.0627112Z === NAME  TestMigProjectAPIKey_basic
2026-08-13T07:38:03.0627696Z     resource_project_api_key_migration_test.go:10: TestStep 1/2 running init: exit status 1
2026-08-13T07:38:03.0628173Z         
2026-08-13T07:38:03.0628491Z         Error: Failed to install provider
2026-08-13T07:38:03.0628801Z         
2026-08-13T07:38:03.0629317Z         Error while installing mongodb/mongodbatlas v2.15.0: could not query provider
2026-08-13T07:38:03.0630028Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2026-08-13T07:38:03.0630731Z         authentication checksums for provider: the request failed after 2 attempts,
2026-08-13T07:38:03.0631229Z         please try again later: Get
2026-08-13T07:38:03.0632159Z         "https://github.com/mongodb/terraform-provider-mongodbatlas/releases/download/v2.15.0/terraform-provider-mongodbatlas_2.15.0_SHA256SUMS":
2026-08-13T07:38:03.0633083Z         context deadline exceeded (Client.Timeout exceeded while awaiting headers)
2026-08-13T07:38:03.0633653Z --- FAIL: TestMigProjectAPIKey_basic (23.98s)
```

- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 26 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 23 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 13 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 15 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
