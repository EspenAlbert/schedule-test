# project/accesslistapikey/TestAccProjectRSAccessListAPIKey_SettingCIDRBlock_WideCIDR Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:58](#error-2026-01-08t0758250000) |  | dev | 0.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 5 seconds
  - PASS 4 seconds
  - FAIL a moment

### Error 2026-01-08T07:58:25+00:00
```
2026-01-08T07:58:25.1556657Z === RUN   TestAccProjectRSAccessListAPIKey_SettingCIDRBlock_WideCIDR
2026-01-08T07:58:25.1568300Z   
2026-01-08T07:58:25.1568797Z     resource_access_list_api_key_test.go:98: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:58:25.1569253Z         
2026-01-08T07:58:25.1570430Z         Error: error create API key: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1572396Z         
2026-01-08T07:58:25.1572729Z           with mongodbatlas_api_key.test,
2026-01-08T07:58:25.1573393Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_api_key" "test":
2026-01-08T07:58:25.1573986Z           13: 	resource "mongodbatlas_api_key" "test" {
2026-01-08T07:58:25.1574931Z         
2026-01-08T07:58:25.1575373Z --- FAIL: TestAccProjectRSAccessListAPIKey_SettingCIDRBlock_WideCIDR (0.45s)
```

- 2026-01-09 PASS 3 seconds
- 2026-01-10 PASS 3 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 seconds
- 2026-01-13 PASS 3 seconds
- 2026-01-14 PASS 2 seconds
- 2026-01-15 PASS 4 seconds
- 2026-01-16 PASS 2 seconds
- 2026-01-17 PASS 4 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 seconds
- 2026-01-20 PASS 4 seconds
- 2026-01-21 PASS 3 seconds
- 2026-01-22
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-01-23 PASS 5 seconds
- 2026-01-24 PASS 4 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 5 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 3 seconds
- 2026-01-29 PASS 4 seconds
- 2026-01-30 PASS 2 seconds
- 2026-01-31 PASS 4 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 4 seconds
- 2026-02-03 PASS 5 seconds
- 2026-02-04 PASS 3 seconds
- 2026-02-05 PASS 4 seconds
- 2026-02-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 2 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 4 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
