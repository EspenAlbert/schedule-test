# project/project/TestAccProject_withTags Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 1.10s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 57 seconds
  - FAIL a second

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7589295Z === RUN   TestAccProject_withTags
2026-01-08T07:59:10.7592597Z === CONT  TestAccProject_withTags
2026-01-08T07:59:10.7683945Z === NAME  TestAccProject_withTags
2026-01-08T07:59:10.7684633Z     resource_project_test.go:1060: Step 1/8 error: Error running apply: exit status 1
2026-01-08T07:59:10.7685043Z         
2026-01-08T07:59:10.7685461Z         Error: error creating project: test-acc-tf-p-7808646756432906142
2026-01-08T07:59:10.7685828Z         
2026-01-08T07:59:10.7686131Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7686746Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7687322Z           12: resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7687620Z         
2026-01-08T07:59:10.7688119Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7688751Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7699134Z   
2026-01-08T07:59:10.7705702Z --- FAIL: TestAccProject_withTags (1.96s)
```

  - PASS 47 seconds
- 2026-01-09 PASS 44 seconds
- 2026-01-10 PASS 44 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 53 seconds
- 2026-01-13 PASS 42 seconds
- 2026-01-14 PASS 31 seconds
- 2026-01-15 PASS 48 seconds
- 2026-01-16 PASS 32 seconds
- 2026-01-17 PASS 55 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 35 seconds
- 2026-01-20 PASS 47 seconds
- 2026-01-21 PASS 43 seconds
- 2026-01-22
  - PASS 47 seconds
  - PASS 45 seconds
- 2026-01-23 PASS a minute
- 2026-01-24 PASS 50 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS a minute
- 2026-01-27 PASS a minute
- 2026-01-28 PASS 42 seconds
- 2026-01-29 PASS 48 seconds
- 2026-01-30 PASS 31 seconds
- 2026-01-31 PASS 53 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS a minute
- 2026-02-03 PASS a minute
- 2026-02-04 PASS 42 seconds
- 2026-02-05 PASS 50 seconds
- 2026-02-06 PASS 42 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 32 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 25 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 29 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 33 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 53 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 48 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 49 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
