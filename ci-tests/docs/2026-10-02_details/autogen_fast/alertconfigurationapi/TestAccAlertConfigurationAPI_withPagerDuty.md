# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withPagerDuty Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-29 00:47](#error-2026-09-29t0047580000) | RATE_LIMITED_TOKEN_BUCKET /api/atlas/v2/groups/6abb0aac4c7c90ca62ed9c23/alertConfigs | dev | flaky_500 | 2.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 6 seconds
- 2026-09-03 PASS 7 seconds
- 2026-09-04
  - PASS 7 seconds
  - PASS 8 seconds
- 2026-09-05 PASS 8 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 6 seconds
- 2026-09-08 PASS 7 seconds
- 2026-09-09 PASS 7 seconds
- 2026-09-10 PASS 7 seconds
- 2026-09-11 PASS 8 seconds
- 2026-09-12 PASS 7 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 8 seconds
- 2026-09-15 PASS 9 seconds
- 2026-09-16 PASS 8 seconds
- 2026-09-17 PASS 8 seconds
- 2026-09-18 PASS 8 seconds
- 2026-09-19 PASS 7 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 8 seconds
- 2026-09-22 PASS 6 seconds
- 2026-09-23
  - PASS 8 seconds
  - PASS 6 seconds
- 2026-09-24 PASS 8 seconds
- 2026-09-25 PASS 7 seconds
- 2026-09-26 PASS 6 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 7 seconds
- 2026-09-29
  - FAIL 2 seconds

### Error 2026-09-29T00:47:58+00:00
```
2026-09-29T00:47:58.3847968Z === RUN   TestAccAlertConfigurationAPI_withPagerDuty
2026-09-29T00:47:58.3852888Z === CONT  TestAccAlertConfigurationAPI_withPagerDuty
2026-09-29T00:47:58.3876371Z === NAME  TestAccAlertConfigurationAPI_withPagerDuty
2026-09-29T00:47:58.3876956Z     resource_test.go:281: Step 1/2 error: Error running apply: exit status 1
2026-09-29T00:47:58.3877376Z         
2026-09-29T00:47:58.3877690Z         Error: Error calling API in Create
2026-09-29T00:47:58.3877984Z         
2026-09-29T00:47:58.3878352Z           with mongodbatlas_alert_configuration_api.test,
2026-09-29T00:47:58.3879141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration_api" "test":
2026-09-29T00:47:58.3879783Z           12: 		resource "mongodbatlas_alert_configuration_api" "test" {
2026-09-29T00:47:58.3880200Z         
2026-09-29T00:47:58.3880771Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb0aac4c7c90ca62ed9c23/alertConfigs
2026-09-29T00:47:58.3881415Z         POST: HTTP 429 Too Many Requests (Error code: "RATE_LIMITED_TOKEN_BUCKET")
2026-09-29T00:47:58.3882099Z         Detail: Rate limit exceeded for
2026-09-29T00:47:58.3882635Z         api/atlas/v2/groups/6abb0aac4c7c90ca62ed9c23/alertConfigs. Please retry after
2026-09-29T00:47:58.3883270Z         0 seconds. Request capacity: 1200. Refill rate: 500 per 60 seconds. For more
2026-09-29T00:47:58.3883989Z         information, see: http://dochub.mongodb.org/core/atlas-api-rate-limit.
2026-09-29T00:47:58.3884451Z         Reason: Too Many Requests. Params:
2026-09-29T00:47:58.3884970Z         [api/atlas/v2/groups/6abb0aac4c7c90ca62ed9c23/alertConfigs 0 1200 500 60],
2026-09-29T00:47:58.3885519Z         BadRequestDetail: 
2026-09-29T00:47:58.3885877Z --- FAIL: TestAccAlertConfigurationAPI_withPagerDuty (2.46s)
```

  - PASS 8 seconds
- 2026-09-30 PASS 6 seconds
- 2026-10-01 PASS 6 seconds
- 2026-10-02 PASS 8 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 8 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 6 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 6 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 8 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 6 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
