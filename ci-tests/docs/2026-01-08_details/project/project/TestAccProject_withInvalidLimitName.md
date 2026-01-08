# project/project/TestAccProject_withInvalidLimitName Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 1.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-12-11 PASS 4 seconds
- 2025-12-12 PASS 5 seconds
- 2025-12-13 PASS 5 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 seconds
- 2025-12-16 PASS 5 seconds
- 2025-12-17 PASS 7 seconds
- 2025-12-18 PASS 6 seconds
- 2025-12-19 PASS 6 seconds
- 2025-12-20 PASS 7 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 6 seconds
- 2025-12-23 PASS 4 seconds
- 2025-12-24 PASS 5 seconds
- 2025-12-25 PASS 5 seconds
- 2025-12-26 PASS 6 seconds
- 2025-12-27 PASS 4 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 5 seconds
- 2025-12-31 PASS 5 seconds
- 2026-01-01 PASS 5 seconds
- 2026-01-02 PASS 6 seconds
- 2026-01-03 PASS 6 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 5 seconds
- 2026-01-06 PASS 5 seconds
- 2026-01-07 PASS 4 seconds
- 2026-01-08
  - PASS 6 seconds
  - FAIL a second

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7587886Z === RUN   TestAccProject_withInvalidLimitName
2026-01-08T07:59:10.7594180Z === CONT  TestAccProject_withInvalidLimitName
2026-01-08T07:59:10.7622306Z === NAME  TestAccProject_withInvalidLimitName
2026-01-08T07:59:10.7623023Z     resource_project_test.go:988: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-08T07:59:10.7623561Z         
2026-01-08T07:59:10.7624090Z         Error: error creating project: test-acc-tf-p-3514568744981539020
2026-01-08T07:59:10.7624732Z         
2026-01-08T07:59:10.7625045Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7625673Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7626251Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7626553Z         
2026-01-08T07:59:10.7627050Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7627686Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7649594Z   
2026-01-08T07:59:10.7704597Z --- FAIL: TestAccProject_withInvalidLimitName (1.92s)
```

  - PASS 5 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 4 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 4 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 4 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 seconds
