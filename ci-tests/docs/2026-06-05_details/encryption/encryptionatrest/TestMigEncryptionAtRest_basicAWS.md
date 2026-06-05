# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAWS Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS a minute
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12: MISSING
- 2026-05-13 PASS a minute
- 2026-05-14: MISSING
- 2026-05-15 PASS 54 seconds
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19: MISSING
- 2026-05-20 PASS a minute
- 2026-05-21: MISSING
- 2026-05-22 PASS 52 seconds
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 52 seconds
- 2026-05-26: MISSING
- 2026-05-27 PASS 54 seconds
- 2026-05-28: MISSING
- 2026-05-29 PASS 55 seconds
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02: MISSING
- 2026-06-03 PASS 48 seconds
- 2026-06-04: MISSING
- 2026-06-05 PASS 56 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-10 00:59](#error-2026-05-10t0059590000) |  | qa | provider_download | 4.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10

### Error 2026-05-10T00:59:59+00:00
```
2026-05-10T00:59:59.8280835Z === RUN   TestMigEncryptionAtRest_basicAWS
2026-05-10T00:59:59.8281841Z     resource_migration_test.go:21: Creating execution project (1): test-acc-tf-p-1084485784031768861
2026-05-10T00:59:59.8289513Z   
2026-05-10T00:59:59.8289978Z     resource_migration_test.go:22: TestStep 1/2 running init: exit status 1
2026-05-10T00:59:59.8290414Z         
2026-05-10T00:59:59.8290738Z         Error: Failed to install provider
2026-05-10T00:59:59.8291059Z         
2026-05-10T00:59:59.8291580Z         Error while installing mongodb/mongodbatlas v2.12.0: github.com: bad response
2026-05-10T00:59:59.8292062Z         code: 502
2026-05-10T00:59:59.8292376Z --- FAIL: TestMigEncryptionAtRest_basicAWS (4.96s)
```

- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 53 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
