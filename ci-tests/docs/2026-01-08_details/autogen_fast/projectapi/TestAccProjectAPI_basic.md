# autogen_fast/projectapi/TestAccProjectAPI_basic Test Details
# Found 29 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL
Success rate: 96.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:32](#error-2026-01-07t0032210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da98bd59b8466ea735f0b | dev | flaky_500 | 10.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-12-11 PASS 7 seconds
- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 7 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 seconds
- 2025-12-16 PASS 6 seconds
- 2025-12-17 PASS 5 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 7 seconds
- 2025-12-20 PASS 6 seconds
- 2025-12-21: MISSING
- 2025-12-22: MISSING
- 2025-12-23 PASS 7 seconds
- 2025-12-24 PASS 6 seconds
- 2025-12-25 PASS 6 seconds
- 2025-12-26 PASS 5 seconds
- 2025-12-27 PASS 6 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 7 seconds
- 2025-12-31 PASS 8 seconds
- 2026-01-01 PASS 7 seconds
- 2026-01-02 PASS 6 seconds
- 2026-01-03 PASS 10 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 7 seconds
- 2026-01-06 PASS 6 seconds
- 2026-01-07

### Error 2026-01-07T00:32:21+00:00
```
2026-01-07T00:32:21.1714229Z === RUN   TestAccProjectAPI_basic
2026-01-07T00:32:21.1715257Z === CONT  TestAccProjectAPI_basic
2026-01-07T00:32:21.1725925Z    test_name=TestAccProjectAPI_basic test_terraform_path=/home/runner/work/_temp/b2618c95-9e18-429e-b1a7-f5f20e9dc330/terraform
2026-01-07T00:32:21.1726793Z     resource_test.go:22: Step 2/4 error: Error running apply: exit status 1
2026-01-07T00:32:21.1727195Z         
2026-01-07T00:32:21.1727531Z         Error: Error calling API in Update
2026-01-07T00:32:21.1727815Z         
2026-01-07T00:32:21.1728128Z           with mongodbatlas_project_api.test,
2026-01-07T00:32:21.1728718Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-01-07T00:32:21.1729263Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-01-07T00:32:21.1729564Z         
2026-01-07T00:32:21.1730010Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da98bd59b8466ea735f0b
2026-01-07T00:32:21.1730603Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-01-07T00:32:21.1731167Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:21.1731562Z         BadRequestDetail: 
2026-01-07T00:32:21.1731849Z --- FAIL: TestAccProjectAPI_basic (10.58s)
```

- 2026-01-08 PASS 8 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 5 seconds
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
- 2025-12-28 PASS 6 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 5 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
