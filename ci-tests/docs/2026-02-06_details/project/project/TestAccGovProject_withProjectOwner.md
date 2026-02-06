# project/project/TestAccGovProject_withProjectOwner Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 21) SKIP(x 14) FAIL
Success rate: 95.45%

## DEV Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - SKIP unknown
  - PASS 9 seconds
  - SKIP unknown
- 2026-01-09 PASS 7 seconds
- 2026-01-10 SKIP unknown
- 2026-01-11: MISSING
- 2026-01-12 PASS 7 seconds
- 2026-01-13 SKIP unknown
- 2026-01-14 PASS 8 seconds
- 2026-01-15 SKIP unknown
- 2026-01-16 PASS 9 seconds
- 2026-01-17 SKIP unknown
- 2026-01-18: MISSING
- 2026-01-19 PASS 7 seconds
- 2026-01-20 SKIP unknown
- 2026-01-21 PASS 7 seconds
- 2026-01-22
  - SKIP unknown
  - PASS 12 seconds
- 2026-01-23 PASS 6 seconds
- 2026-01-24 SKIP unknown
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 SKIP unknown
- 2026-01-28 PASS 7 seconds
- 2026-01-29 SKIP unknown
- 2026-01-30 PASS 8 seconds
- 2026-01-31 SKIP unknown
- 2026-02-01: MISSING
- 2026-02-02 PASS 5 seconds
- 2026-02-03 SKIP unknown
- 2026-02-04 PASS 9 seconds
- 2026-02-05 SKIP unknown
- 2026-02-06 PASS 9 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-22 13:11](#error-2026-01-22t1311120000) |  | qa | flaky_500 | 2.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 8 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 8 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 9 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22

### Error 2026-01-22T13:11:12+00:00
```
2026-01-22T13:11:12.2122409Z === RUN   TestAccGovProject_withProjectOwner
2026-01-22T13:11:12.2135049Z === CONT  TestAccGovProject_withProjectOwner
2026-01-22T13:11:12.2152225Z === NAME  TestAccGovProject_withProjectOwner
2026-01-22T13:11:12.2152820Z     resource_project_test.go:649: Step 1/1 error: Error running apply: exit status 1
2026-01-22T13:11:12.2153249Z         
2026-01-22T13:11:12.2153677Z         Error: error creating project: test-acc-tf-p-1301422904424848897
2026-01-22T13:11:12.2154178Z         
2026-01-22T13:11:12.2154490Z           with mongodbatlas_project.test,
2026-01-22T13:11:12.2155113Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-01-22T13:11:12.2155697Z           18: 		resource "mongodbatlas_project" "test" {
2026-01-22T13:11:12.2156007Z         
2026-01-22T13:11:12.2156485Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-01-22T13:11:12.2156906Z         type
2026-01-22T13:11:12.2157189Z --- FAIL: TestAccGovProject_withProjectOwner (2.40s)
```

- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 5 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
