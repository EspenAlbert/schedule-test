# config/maintenancewindow/TestAccConfigRSMaintenanceWindow_basic Test Details
# Found 39 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-29 10:46](#error-2026-09-29t1046430000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abb969a5195ae677923fdbf/limits | dev | flaky_500 | 14.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 24 seconds
- 2026-09-03 PASS 20 seconds
- 2026-09-04 PASS 21 seconds
- 2026-09-05 PASS 18 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 24 seconds
- 2026-09-08 PASS 14 seconds
- 2026-09-09 PASS 21 seconds
- 2026-09-10
  - PASS 13 seconds
  - PASS 17 seconds
- 2026-09-11
  - PASS 30 seconds
  - PASS 32 seconds
- 2026-09-12 PASS 17 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 18 seconds
- 2026-09-15 PASS 18 seconds
- 2026-09-16 PASS 19 seconds
- 2026-09-17 PASS 15 seconds
- 2026-09-18 PASS 27 seconds
- 2026-09-19 PASS 21 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 29 seconds
- 2026-09-22 PASS 17 seconds
- 2026-09-23 PASS 20 seconds
- 2026-09-24 PASS 17 seconds
- 2026-09-25 PASS 26 seconds
- 2026-09-26 PASS 18 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 22 seconds
- 2026-09-29
  - PASS 19 seconds
  - FAIL 14 seconds

### Error 2026-09-29T10:46:43+00:00
```
2026-09-29T10:46:43.5000031Z === RUN   TestAccConfigRSMaintenanceWindow_basic
2026-09-29T10:46:43.5004608Z === CONT  TestAccConfigRSMaintenanceWindow_basic
2026-09-29T10:46:43.5032577Z === NAME  TestAccConfigRSMaintenanceWindow_basic
2026-09-29T10:46:43.5033305Z     resource_test.go:43: Step 3/5 error: Error running post-apply refresh plan: exit status 1
2026-09-29T10:46:43.5033928Z         
2026-09-29T10:46:43.5034367Z         Error: error when getting project properties after create
2026-09-29T10:46:43.5034756Z         
2026-09-29T10:46:43.5035244Z           with mongodbatlas_project.test,
2026-09-29T10:46:43.5035910Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-09-29T10:46:43.5036838Z           12: 		resource "mongodbatlas_project" "test" {
2026-09-29T10:46:43.5037193Z         
2026-09-29T10:46:43.5037893Z         error getting project (6abb969a5195ae677923fdbf): error getting project's
2026-09-29T10:46:43.5038427Z         limits (6abb969a5195ae677923fdbf):
2026-09-29T10:46:43.5039246Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb969a5195ae677923fdbf/limits
2026-09-29T10:46:43.5040182Z         GET: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current
2026-09-29T10:46:43.5041292Z         user is not authorized to perform this action. Reason: Unauthorized. Params:
2026-09-29T10:46:43.5041817Z         [], BadRequestDetail: 
2026-09-29T10:46:43.5042280Z --- FAIL: TestAccConfigRSMaintenanceWindow_basic (14.69s)
```

  - PASS 16 seconds
- 2026-09-30 PASS 26 seconds
- 2026-10-01 PASS 19 seconds
- 2026-10-02 PASS 30 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 24 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 22 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 18 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 19 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 29 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 20 seconds
  - PASS 30 seconds
  - PASS 25 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
