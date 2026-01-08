# project/project/TestAccProject_withTags Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95baf4f6cc389e8b51e | dev | flaky_500 | 10.05s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 1.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a minute
  - PASS 31 seconds
- 2025-12-11 PASS 40 seconds
- 2025-12-12 PASS a minute
- 2025-12-13 PASS 44 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 47 seconds
- 2025-12-16 PASS 50 seconds
- 2025-12-17 PASS a minute
- 2025-12-18 PASS 53 seconds
- 2025-12-19 PASS a minute
- 2025-12-20 PASS 54 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 54 seconds
- 2025-12-23 PASS 44 seconds
- 2025-12-24 PASS 33 seconds
- 2025-12-25 PASS 41 seconds
- 2025-12-26 PASS a minute
- 2025-12-27 PASS 43 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 56 seconds
- 2025-12-31 PASS a minute
- 2026-01-01 PASS 54 seconds
- 2026-01-02 PASS a minute
- 2026-01-03 PASS a minute
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06 PASS 47 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2832058Z === RUN   TestAccProject_withTags
2026-01-07T00:33:18.2840006Z === CONT  TestAccProject_withTags
2026-01-07T00:33:18.2872754Z   
2026-01-07T00:33:18.2988993Z === NAME  TestAccProject_withTags
2026-01-07T00:33:18.2989557Z     resource_project_test.go:1060: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2026-01-07T00:33:18.2990004Z         
2026-01-07T00:33:18.2990339Z         Error: error when getting project from Atlas
2026-01-07T00:33:18.2990635Z         
2026-01-07T00:33:18.2990935Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.2991540Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.2992075Z           12: resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.2992370Z         
2026-01-07T00:33:18.2992706Z         error getting project (695da95baf4f6cc389e8b51e):
2026-01-07T00:33:18.2993421Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95baf4f6cc389e8b51e
2026-01-07T00:33:18.2994068Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:18.2994741Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:18.2995139Z         BadRequestDetail: 
2026-01-07T00:33:18.2996264Z --- FAIL: TestAccProject_withTags (10.53s)
```

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

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 49 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 24 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 56 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 55 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 32 seconds
