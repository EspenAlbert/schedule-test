# project/accesslistapikey/TestMigProjectAccesslistAPIKey_SettingCIDRBlock Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:58](#error-2026-01-08t0758250000) |  | dev | 9.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 8 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 7 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 7 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 8 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 8 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 6 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 8 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 8 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 7 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 8 seconds
- 2026-01-06: MISSING
- 2026-01-07 PASS 8 seconds
- 2026-01-08

### Error 2026-01-08T07:58:25+00:00
```
2026-01-08T07:58:25.1441222Z === RUN   TestMigProjectAccesslistAPIKey_SettingCIDRBlock
2026-01-08T07:58:25.1464912Z   
2026-01-08T07:58:25.1466003Z     resource_access_list_api_key_migration_test.go:50: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2026-01-08T07:58:25.1467077Z         
2026-01-08T07:58:25.1468920Z         Error: error getting api key information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys/695f6394aa2a8443b4900e00/accessList/179.154.226.15 GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1470194Z         
2026-01-08T07:58:25.1470564Z           with mongodbatlas_access_list_api_key.test,
2026-01-08T07:58:25.1471278Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_access_list_api_key" "test":
2026-01-08T07:58:25.1471967Z           19: 		resource "mongodbatlas_access_list_api_key" "test" {
2026-01-08T07:58:25.1472315Z         
2026-01-08T07:58:25.1482229Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-08T07:58:25.1482706Z         
2026-01-08T07:58:25.1483974Z         Error: error API Key: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys/695f6394aa2a8443b4900e00 DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1485084Z         
2026-01-08T07:58:25.1485399Z --- FAIL: TestMigProjectAccesslistAPIKey_SettingCIDRBlock (9.04s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 7 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 6 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 7 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 7 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 seconds
