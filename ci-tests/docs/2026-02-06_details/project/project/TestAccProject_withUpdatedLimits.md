# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 1.09s

### Timeline
- 2026-01-07: MISSING
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
- 2026-01-09 PASS 27 seconds
- 2026-01-10 PASS 25 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 31 seconds
- 2026-01-13 PASS 25 seconds
- 2026-01-14 PASS 19 seconds
- 2026-01-15 PASS 28 seconds
- 2026-01-16 PASS 19 seconds
- 2026-01-17 PASS 34 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 22 seconds
- 2026-01-20 PASS 27 seconds
- 2026-01-21 PASS 26 seconds
- 2026-01-22
  - PASS 29 seconds
  - PASS 25 seconds
- 2026-01-23 PASS 36 seconds
- 2026-01-24 PASS 29 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 37 seconds
- 2026-01-27 PASS 36 seconds
- 2026-01-28 PASS 22 seconds
- 2026-01-29 PASS 28 seconds
- 2026-01-30 PASS 19 seconds
- 2026-01-31 PASS 31 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 36 seconds
- 2026-02-03 PASS 36 seconds
- 2026-02-04 PASS 27 seconds
- 2026-02-05 PASS 28 seconds
- 2026-02-06 PASS 25 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 17 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 16 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 20 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 32 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 29 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 31 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
