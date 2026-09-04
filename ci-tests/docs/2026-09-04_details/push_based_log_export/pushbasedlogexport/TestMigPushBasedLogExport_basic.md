# push_based_log_export/pushbasedlogexport/TestMigPushBasedLogExport_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS a minute
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS a minute
- 2026-08-11: MISSING
- 2026-08-12 PASS a minute
- 2026-08-13: MISSING
- 2026-08-14 PASS a minute
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS a minute
- 2026-08-18: MISSING
- 2026-08-19 PASS a minute
- 2026-08-20: MISSING
- 2026-08-21 PASS a minute
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS a minute
- 2026-08-25: MISSING
- 2026-08-26 PASS a minute
- 2026-08-27: MISSING
- 2026-08-28 PASS a minute
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS a minute
- 2026-09-01: MISSING
- 2026-09-02 PASS a minute
- 2026-09-03: MISSING
- 2026-09-04 PASS a minute

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 07:34](#error-2026-08-13t0734490000) |  | qa | provider_download | 26.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS a minute
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T07:34:49+00:00
```
2026-08-13T07:34:49.3484192Z === RUN   TestMigPushBasedLogExport_basic
2026-08-13T07:34:49.3485452Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-1702147660831468483
2026-08-13T07:35:15.7357030Z   
2026-08-13T07:35:15.7357952Z     resource_migration_test.go:11: TestStep 1/2 running init: exit status 1
2026-08-13T07:35:15.7358658Z         
2026-08-13T07:35:15.7359184Z         Error: Failed to install provider
2026-08-13T07:35:15.7359685Z         
2026-08-13T07:35:15.7360578Z         Error while installing mongodb/mongodbatlas v2.15.0: could not query provider
2026-08-13T07:35:15.7361829Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2026-08-13T07:35:15.7363132Z         authentication checksums for provider: the request failed after 2 attempts,
2026-08-13T07:35:15.7363994Z         please try again later: Get
2026-08-13T07:35:15.7365669Z         "https://github.com/mongodb/terraform-provider-mongodbatlas/releases/download/v2.15.0/terraform-provider-mongodbatlas_2.15.0_SHA256SUMS":
2026-08-13T07:35:15.7367200Z         context deadline exceeded
2026-08-13T07:35:15.7790935Z --- FAIL: TestMigPushBasedLogExport_basic (26.43s)
```

- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS a minute
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS a minute
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS a minute
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS a minute
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
