# encryption/encryptionatrestprivateendpoint/TestMigEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 12 seconds
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 12 seconds
- 2026-05-12: MISSING
- 2026-05-13 PASS 13 seconds
- 2026-05-14: MISSING
- 2026-05-15 PASS 11 seconds
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19: MISSING
- 2026-05-20 PASS 14 seconds
- 2026-05-21: MISSING
- 2026-05-22 PASS 11 seconds
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 11 seconds
- 2026-05-26: MISSING
- 2026-05-27 PASS 11 seconds
- 2026-05-28: MISSING
- 2026-05-29 PASS 10 seconds
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 11 seconds
- 2026-06-02: MISSING
- 2026-06-03 PASS 14 seconds
- 2026-06-04: MISSING
- 2026-06-05 PASS 10 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-10 01:09](#error-2026-05-10t0109590000) |  | qa | provider_download | 2.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10

### Error 2026-05-10T01:09:59+00:00
```
2026-05-10T01:09:59.6052718Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-10T01:09:59.6055087Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-3695560267561196313
2026-05-10T01:09:59.6060777Z    test_terraform_path=/home/runner/work/_temp/ff46ce19-8e5c-475c-b87f-5a25a7b2d461/terraform
2026-05-10T01:09:59.6061489Z     resource_migration_test.go:12: TestStep 1/2 running init: exit status 1
2026-05-10T01:09:59.6061923Z         
2026-05-10T01:09:59.6062247Z         Error: Failed to install provider
2026-05-10T01:09:59.6062564Z         
2026-05-10T01:09:59.6063086Z         Error while installing mongodb/mongodbatlas v2.12.0: github.com: bad response
2026-05-10T01:09:59.6063563Z         code: 502
2026-05-10T01:09:59.6063942Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (2.27s)
```

- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 11 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 10 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 13 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
