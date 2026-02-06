# project/project/TestAccProject_withInvalidLimitName Test Details
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
- 2026-01-09 PASS 5 seconds
- 2026-01-10 PASS 5 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 5 seconds
- 2026-01-13 PASS 5 seconds
- 2026-01-14 PASS 5 seconds
- 2026-01-15 PASS 5 seconds
- 2026-01-16 PASS 5 seconds
- 2026-01-17 PASS 6 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 5 seconds
- 2026-01-20 PASS 4 seconds
- 2026-01-21 PASS 4 seconds
- 2026-01-22
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-01-23 PASS 5 seconds
- 2026-01-24 PASS 5 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 5 seconds
- 2026-01-28 PASS 4 seconds
- 2026-01-29 PASS 4 seconds
- 2026-01-30 PASS 5 seconds
- 2026-01-31 PASS 5 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 6 seconds
- 2026-02-03 PASS 5 seconds
- 2026-02-04 PASS 4 seconds
- 2026-02-05 PASS 5 seconds
- 2026-02-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 4 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 6 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 4 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 5 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 4 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
