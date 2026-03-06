# project/project/TestAccProject_withTags Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 00:44](#error-2026-03-03t0044420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 50 seconds
- 2026-02-06 PASS 42 seconds
- 2026-02-07 PASS a minute
- 2026-02-08: MISSING
- 2026-02-09 PASS 39 seconds
- 2026-02-10 PASS 58 seconds
- 2026-02-11 PASS a minute
- 2026-02-12 PASS a minute
- 2026-02-13 PASS a minute
- 2026-02-14 PASS 48 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS a minute
- 2026-02-17 PASS a minute
- 2026-02-18 PASS 41 seconds
- 2026-02-19 PASS a minute
- 2026-02-20 PASS 54 seconds
- 2026-02-21 PASS 50 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 59 seconds
- 2026-02-24 PASS 50 seconds
- 2026-02-25 PASS 46 seconds
- 2026-02-26 PASS a minute
- 2026-02-27 PASS 54 seconds
- 2026-02-28 PASS 59 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 59 seconds
- 2026-03-03

### Error 2026-03-03T00:44:42+00:00
```
2026-03-03T00:44:42.7582936Z === RUN   TestAccProject_withTags
2026-03-03T00:44:42.7587172Z === CONT  TestAccProject_withTags
2026-03-03T00:44:42.7615188Z === NAME  TestAccProject_withTags
2026-03-03T00:44:42.7615795Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-03-03T00:44:42.7616224Z         
2026-03-03T00:44:42.7616653Z         Error: error creating project: test-acc-tf-p-3140813760859513919
2026-03-03T00:44:42.7617025Z         
2026-03-03T00:44:42.7617335Z           with mongodbatlas_project.test,
2026-03-03T00:44:42.7617957Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-03-03T00:44:42.7618528Z           12: resource "mongodbatlas_project" "test" {
2026-03-03T00:44:42.7618847Z         
2026-03-03T00:44:42.7619316Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-03T00:44:42.7619977Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-03T00:44:42.7620570Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:44:42.7620977Z --- FAIL: TestAccProject_withTags (67.18s)
```

- 2026-03-04 PASS a minute
- 2026-03-05 PASS a minute
- 2026-03-06 PASS a minute

## QA Environment
### Timeline
- 2026-02-04 PASS 49 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 55 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 32 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 29 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 46 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 39 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
