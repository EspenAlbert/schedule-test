# config/thirdpartyintegration/TestMigThirdPartyIntegration_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 11 seconds
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 8 seconds
- 2026-08-11: MISSING
- 2026-08-12 PASS 9 seconds
- 2026-08-13: MISSING
- 2026-08-14 PASS 8 seconds
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 9 seconds
- 2026-08-18: MISSING
- 2026-08-19 PASS 12 seconds
- 2026-08-20: MISSING
- 2026-08-21 PASS 8 seconds
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 8 seconds
- 2026-08-25: MISSING
- 2026-08-26 PASS 11 seconds
- 2026-08-27: MISSING
- 2026-08-28 PASS 15 seconds
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 12 seconds
- 2026-09-01: MISSING
- 2026-09-02 PASS 12 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 10 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 07:38](#error-2026-08-13t0738410000) |  | qa | provider_download | 25.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 7 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T07:38:41+00:00
```
2026-08-13T07:38:41.0014840Z === RUN   TestMigThirdPartyIntegration_basic
2026-08-13T07:38:41.0015792Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-8234522819839626897
2026-08-13T07:38:41.0027333Z    test_terraform_path=/home/runner/work/_temp/96f64ed9-9f1d-4229-8eb5-0dbeee0edd28/terraform test_working_directory=/tmp/plugintest1792435745
2026-08-13T07:38:41.0028707Z     resource_migration_test.go:11: TestStep 1/2 running init: exit status 1
2026-08-13T07:38:41.0029348Z         
2026-08-13T07:38:41.0029843Z         Error: Failed to install provider
2026-08-13T07:38:41.0030313Z         
2026-08-13T07:38:41.0031125Z         Error while installing mongodb/mongodbatlas v2.15.0: could not query provider
2026-08-13T07:38:41.0032286Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2026-08-13T07:38:41.0033591Z         authentication checksums for provider: the request failed after 2 attempts,
2026-08-13T07:38:41.0034399Z         please try again later: Get
2026-08-13T07:38:41.0035914Z         "https://github.com/mongodb/terraform-provider-mongodbatlas/releases/download/v2.15.0/terraform-provider-mongodbatlas_2.15.0_SHA256SUMS":
2026-08-13T07:38:41.0037395Z         context deadline exceeded (Client.Timeout exceeded while awaiting headers)
2026-08-13T07:38:41.0038131Z --- FAIL: TestMigThirdPartyIntegration_basic (25.06s)
```

- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 10 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 9 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 8 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 9 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
