# config/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 11 seconds
  - PASS 14 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 14 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 11 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 10 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 14 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 16 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 11 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 10 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 13 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:33:25+00:00
```
2026-01-07T00:33:25.9448058Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2026-01-07T00:33:25.9451489Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2026-01-07T00:33:25.9521993Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2026-01-07T00:33:25.9523207Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:25.9524082Z         
2026-01-07T00:33:25.9524770Z         Error: error creating project: test-acc-tf-p-2735887531252916318
2026-01-07T00:33:25.9525443Z         
2026-01-07T00:33:25.9525937Z           with mongodbatlas_project.test,
2026-01-07T00:33:25.9526940Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:25.9527993Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:25.9528477Z         
2026-01-07T00:33:25.9529243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:25.9530309Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:25.9531277Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:25.9532031Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (4.14s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 9 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 9 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 9 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 9 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 seconds
