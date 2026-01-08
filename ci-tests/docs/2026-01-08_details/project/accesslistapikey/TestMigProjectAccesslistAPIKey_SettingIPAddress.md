# project/accesslistapikey/TestMigProjectAccesslistAPIKey_SettingIPAddress Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:58](#error-2026-01-08t0758250000) |  | dev | 2.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 8 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 8 seconds
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
- 2026-01-02 PASS 8 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 8 seconds
- 2026-01-06: MISSING
- 2026-01-07 PASS 8 seconds
- 2026-01-08

### Error 2026-01-08T07:58:25+00:00
```
2026-01-08T07:58:25.1418363Z === RUN   TestMigProjectAccesslistAPIKey_SettingIPAddress
2026-01-08T07:58:25.1430224Z   
2026-01-08T07:58:25.1431335Z     resource_access_list_api_key_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:58:25.1432279Z         
2026-01-08T07:58:25.1434694Z         Error: error create API key: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1436341Z         
2026-01-08T07:58:25.1436904Z           with mongodbatlas_api_key.test,
2026-01-08T07:58:25.1438067Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_api_key" "test":
2026-01-08T07:58:25.1439189Z           15: 	   resource "mongodbatlas_api_key" "test" {
2026-01-08T07:58:25.1439761Z         
2026-01-08T07:58:25.1440348Z --- FAIL: TestMigProjectAccesslistAPIKey_SettingIPAddress (2.78s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 8 seconds
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
- 2026-01-08 PASS 5 seconds
