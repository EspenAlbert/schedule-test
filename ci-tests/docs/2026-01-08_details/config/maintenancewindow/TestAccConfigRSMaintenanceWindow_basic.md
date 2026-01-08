# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 17 seconds
  - PASS 22 seconds
- 2025-12-11 PASS 19 seconds
- 2025-12-12 PASS 30 seconds
- 2025-12-13 PASS 20 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 29 seconds
- 2025-12-16 PASS 21 seconds
- 2025-12-17 PASS 19 seconds
- 2025-12-18 PASS 20 seconds
- 2025-12-19 PASS 14 seconds
- 2025-12-20 PASS 18 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 29 seconds
- 2025-12-23 PASS 16 seconds
- 2025-12-24 PASS 28 seconds
- 2025-12-25 PASS 18 seconds
- 2025-12-26 PASS 26 seconds
- 2025-12-27 PASS 17 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 seconds
- 2025-12-31 PASS 17 seconds
- 2026-01-01 PASS 17 seconds
- 2026-01-02 PASS 14 seconds
- 2026-01-03 PASS 18 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 20 seconds
- 2026-01-06 PASS 22 seconds
- 2026-01-07

### Error 2026-01-07T00:33:25+00:00
```
2026-01-07T00:33:25.9586314Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-01-07T00:33:25.9589754Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-01-07T00:33:25.9662607Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-01-07T00:33:25.9663614Z     resource_maintenance_window_test.go:42: Step 1/5 error: Error running apply: exit status 1
2026-01-07T00:33:25.9664344Z         
2026-01-07T00:33:25.9665074Z         Error: error creating project: test-acc-tf-p-6712072358204664279
2026-01-07T00:33:25.9665664Z         
2026-01-07T00:33:25.9666176Z           with mongodbatlas_project.test,
2026-01-07T00:33:25.9667369Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:25.9668316Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:25.9668818Z         
2026-01-07T00:33:25.9669622Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:25.9670710Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:25.9671700Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:25.9672600Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (4.81s)
```

- 2026-01-08 PASS 16 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 14 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 26 seconds
