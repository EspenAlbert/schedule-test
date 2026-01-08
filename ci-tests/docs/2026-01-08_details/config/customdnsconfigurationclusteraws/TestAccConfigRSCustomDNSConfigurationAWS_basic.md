# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da935d59b8466ea726b57 | dev | flaky_500 | 2.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 seconds
  - PASS 15 seconds
- 2025-12-11 PASS 18 seconds
- 2025-12-12 PASS 23 seconds
- 2025-12-13 PASS 16 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 seconds
- 2025-12-16 PASS 17 seconds
- 2025-12-17 PASS 13 seconds
- 2025-12-18 PASS 19 seconds
- 2025-12-19 PASS 10 seconds
- 2025-12-20 PASS 17 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 seconds
- 2025-12-23 PASS 15 seconds
- 2025-12-24 PASS 21 seconds
- 2025-12-25 PASS 16 seconds
- 2025-12-26 PASS 19 seconds
- 2025-12-27 PASS 16 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 16 seconds
- 2025-12-31 PASS 11 seconds
- 2026-01-01 PASS 16 seconds
- 2026-01-02 PASS 11 seconds
- 2026-01-03 PASS 17 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 seconds
- 2026-01-06 PASS 20 seconds
- 2026-01-07

### Error 2026-01-07T00:33:25+00:00
```
2026-01-07T00:33:25.9449428Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-01-07T00:33:25.9452163Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-01-07T00:33:25.9468990Z   
2026-01-07T00:33:25.9499184Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-01-07T00:33:25.9500330Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:33:25.9501138Z         
2026-01-07T00:33:25.9501685Z         Error: error when getting project after create
2026-01-07T00:33:25.9502192Z         
2026-01-07T00:33:25.9502665Z           with mongodbatlas_project.test,
2026-01-07T00:33:25.9503662Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:25.9504751Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:25.9505232Z         
2026-01-07T00:33:25.9505781Z         error getting project (695da935d59b8466ea726b57):
2026-01-07T00:33:25.9506886Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da935d59b8466ea726b57
2026-01-07T00:33:25.9508127Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:25.9509109Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:25.9509762Z         BadRequestDetail: 
2026-01-07T00:33:25.9510342Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (2.82s)
```

- 2026-01-08 PASS 16 seconds

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
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 8 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 seconds
