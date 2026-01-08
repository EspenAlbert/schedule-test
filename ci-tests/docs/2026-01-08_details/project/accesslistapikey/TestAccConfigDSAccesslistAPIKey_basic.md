# project/accesslistapikey/TestAccConfigDSAccesslistAPIKey_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 07:58](#error-2026-01-08t0758250000) |  | dev | flaky_500 | 0.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 seconds
  - PASS a second
- 2025-12-11 PASS 3 seconds
- 2025-12-12 PASS 3 seconds
- 2025-12-13 PASS 3 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 2 seconds
- 2025-12-16 PASS 3 seconds
- 2025-12-17 PASS 3 seconds
- 2025-12-18 PASS 4 seconds
- 2025-12-19 PASS 3 seconds
- 2025-12-20 PASS 3 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 seconds
- 2025-12-23 PASS 3 seconds
- 2025-12-24 PASS a second
- 2025-12-25 PASS 3 seconds
- 2025-12-26 PASS 3 seconds
- 2025-12-27 PASS 3 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 seconds
- 2025-12-31 PASS 3 seconds
- 2026-01-01 PASS 3 seconds
- 2026-01-02 PASS 3 seconds
- 2026-01-03 PASS 3 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 seconds
- 2026-01-06 PASS 2 seconds
- 2026-01-07 PASS 3 seconds
- 2026-01-08
  - PASS 3 seconds
  - PASS 3 seconds
  - FAIL a moment

### Error 2026-01-08T07:58:25+00:00
```
2026-01-08T07:58:25.1415638Z === RUN   TestAccConfigDSAccesslistAPIKey_basic
2026-01-08T07:58:25.1575886Z === CONT  TestAccConfigDSAccesslistAPIKey_basic
2026-01-08T07:58:25.1605130Z === NAME  TestAccConfigDSAccesslistAPIKey_basic
2026-01-08T07:58:25.1605790Z     data_source_accesslist_api_key_test.go:19: Step 1/1 error: Error running apply: exit status 1
2026-01-08T07:58:25.1606272Z         
2026-01-08T07:58:25.1607454Z         Error: error create API key: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1608318Z         
2026-01-08T07:58:25.1608629Z           with mongodbatlas_api_key.test,
2026-01-08T07:58:25.1609265Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_api_key" "test":
2026-01-08T07:58:25.1609860Z           18: 	  resource "mongodbatlas_api_key" "test" {
2026-01-08T07:58:25.1610179Z         
2026-01-08T07:58:25.1627500Z --- FAIL: TestAccConfigDSAccesslistAPIKey_basic (0.58s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 2 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a second
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 3 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 3 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
