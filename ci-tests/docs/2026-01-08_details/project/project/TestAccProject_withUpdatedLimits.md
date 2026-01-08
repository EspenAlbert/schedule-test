# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | Step 1 1 | dev | 9.07s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 1.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 38 seconds
  - PASS 19 seconds
- 2025-12-11 PASS 24 seconds
- 2025-12-12 PASS 36 seconds
- 2025-12-13 PASS 27 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 30 seconds
- 2025-12-16 PASS 29 seconds
- 2025-12-17 PASS 36 seconds
- 2025-12-18 PASS 31 seconds
- 2025-12-19 PASS 36 seconds
- 2025-12-20 PASS 32 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 31 seconds
- 2025-12-23 PASS 26 seconds
- 2025-12-24 PASS 20 seconds
- 2025-12-25 PASS 27 seconds
- 2025-12-26 PASS 34 seconds
- 2025-12-27 PASS 26 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 33 seconds
- 2025-12-31 PASS 35 seconds
- 2026-01-01 PASS 31 seconds
- 2026-01-02 PASS 36 seconds
- 2026-01-03 PASS 35 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 37 seconds
- 2026-01-06 PASS 27 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2829239Z === RUN   TestAccProject_withUpdatedLimits
2026-01-07T00:33:18.2839402Z === CONT  TestAccProject_withUpdatedLimits
2026-01-07T00:33:18.2958584Z === NAME  TestAccProject_withUpdatedLimits
2026-01-07T00:33:18.2959263Z     resource_project_test.go:869: Step 1/3 error: Check failed: Check 1/6 error: project (695da95caf4f6cc389e8b6b5) does not exist
2026-01-07T00:33:18.2970587Z    test_working_directory=/tmp/plugintest1033354875
2026-01-07T00:33:18.2995925Z --- FAIL: TestAccProject_withUpdatedLimits (9.71s)
```

- 2026-01-08
  - PASS 33 seconds
  - FAIL a second

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7586568Z === RUN   TestAccProject_withUpdatedLimits
2026-01-08T07:59:10.7595105Z === CONT  TestAccProject_withUpdatedLimits
2026-01-08T07:59:10.7649926Z === NAME  TestAccProject_withUpdatedLimits
2026-01-08T07:59:10.7650462Z     resource_project_test.go:869: Step 1/3 error: Error running apply: exit status 1
2026-01-08T07:59:10.7650877Z         
2026-01-08T07:59:10.7651299Z         Error: error creating project: test-acc-tf-p-6533177581119279847
2026-01-08T07:59:10.7651664Z         
2026-01-08T07:59:10.7651972Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7652588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7653174Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7653486Z         
2026-01-08T07:59:10.7653978Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7654741Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7660546Z    test_name=TestAccProject_updatedToEmptyLimits test_working_directory=/tmp/plugintest2552049330
2026-01-08T07:59:10.7704977Z --- FAIL: TestAccProject_withUpdatedLimits (1.93s)
```

  - PASS 29 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 29 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 15 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 31 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 32 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 seconds
