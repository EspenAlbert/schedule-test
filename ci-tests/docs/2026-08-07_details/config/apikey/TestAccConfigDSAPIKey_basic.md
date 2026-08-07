# config/apikey/TestAccConfigDSAPIKey_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-10 00:52](#error-2026-07-10t0052460000) |  | dev | 4.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 12 seconds
- 2026-07-10

### Error 2026-07-10T00:52:46+00:00
```
2026-07-10T00:52:46.4229545Z === RUN   TestAccConfigDSAPIKey_basic
2026-07-10T00:52:46.4234344Z === CONT  TestAccConfigDSAPIKey_basic
2026-07-10T00:52:46.4257665Z === NAME  TestAccConfigDSAPIKey_basic
2026-07-10T00:52:46.4258851Z     data_source_api_key_test.go:21: Step 1/1 error: Error running post-apply non-refresh plan: exit status 1
2026-07-10T00:52:46.4259774Z         
2026-07-10T00:52:46.4262611Z         Error: error getting api key information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys/6a504207e2d93fff09dd0d25 GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-07-10T00:52:46.4264479Z         
2026-07-10T00:52:46.4265092Z           with data.mongodbatlas_api_key.test,
2026-07-10T00:52:46.4266261Z           on terraform_plugin_test.tf line 18, in data "mongodbatlas_api_key" "test":
2026-07-10T00:52:46.4267306Z           18: 		data "mongodbatlas_api_key" "test" {
2026-07-10T00:52:46.4267859Z         
2026-07-10T00:52:46.4268296Z --- FAIL: TestAccConfigDSAPIKey_basic (4.60s)
```

- 2026-07-11 PASS 11 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 2 seconds
- 2026-07-14 PASS 3 seconds
- 2026-07-15 PASS 2 seconds
- 2026-07-16 PASS 9 seconds
- 2026-07-17 PASS 3 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 8 seconds
- 2026-07-22 PASS 3 seconds
- 2026-07-23 PASS 30 seconds
- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS a second
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 3 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
