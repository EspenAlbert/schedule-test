# project/project/TestAccGovProject_withProjectOwner Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 18) SKIP(x 12) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-12 00:33](#error-2025-11-12t0033420000) |  | dev | flaky_500 | 16.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 8 seconds
- 2025-10-30 SKIP unknown
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 7 seconds
- 2025-11-04 SKIP unknown
- 2025-11-05
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-06 SKIP unknown
- 2025-11-07 PASS 10 seconds
- 2025-11-08 SKIP unknown
- 2025-11-09: MISSING
- 2025-11-10 PASS 7 seconds
- 2025-11-11 SKIP unknown
- 2025-11-12

### Error 2025-11-12T00:33:42+00:00
```
2025-11-12T00:33:42.4594911Z === RUN   TestAccGovProject_withProjectOwner
2025-11-12T00:33:42.4603619Z === CONT  TestAccGovProject_withProjectOwner
2025-11-12T00:33:42.4661999Z === NAME  TestAccGovProject_withProjectOwner
2025-11-12T00:33:42.4662643Z     resource_project_test.go:649: Step 1/1 error: Error running apply: exit status 1
2025-11-12T00:33:42.4663045Z         
2025-11-12T00:33:42.4663468Z         Error: error creating project: test-acc-tf-p-3339698611529466600
2025-11-12T00:33:42.4663824Z         
2025-11-12T00:33:42.4664134Z           with mongodbatlas_project.test,
2025-11-12T00:33:42.4664744Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-11-12T00:33:42.4665292Z           18: 		resource "mongodbatlas_project" "test" {
2025-11-12T00:33:42.4665592Z         
2025-11-12T00:33:42.4666076Z         https://cloud-dev.mongodbgov.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-11-12T00:33:42.4666722Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-11-12T00:33:42.4667307Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-11-12T00:33:42.4667720Z --- FAIL: TestAccGovProject_withProjectOwner (16.49s)
```

- 2025-11-13 SKIP unknown
- 2025-11-14 PASS 10 seconds
- 2025-11-15 SKIP unknown
- 2025-11-16: MISSING
- 2025-11-17 PASS 5 seconds
- 2025-11-18 SKIP unknown
- 2025-11-19 PASS 7 seconds
- 2025-11-20 SKIP unknown
- 2025-11-21 PASS 6 seconds
- 2025-11-22 SKIP unknown
- 2025-11-23: MISSING
- 2025-11-24 PASS 7 seconds
- 2025-11-25 SKIP unknown
- 2025-11-26 PASS 7 seconds
- 2025-11-27 SKIP unknown

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 8 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 8 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 6 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 7 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
