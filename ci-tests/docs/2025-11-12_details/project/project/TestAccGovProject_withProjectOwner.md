# project/project/TestAccGovProject_withProjectOwner Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 30) SKIP(x 11) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-12 00:33](#error-2025-11-12t0033420000) |  | dev | flaky_500 | 16.05s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 5 seconds
- 2025-10-05 PASS 6 seconds
- 2025-10-06 PASS 8 seconds
- 2025-10-07 PASS 7 seconds
- 2025-10-08 PASS 8 seconds
- 2025-10-09 PASS 6 seconds
- 2025-10-10 PASS 8 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12 PASS 10 seconds
- 2025-10-13 PASS 9 seconds
- 2025-10-14 PASS 5 seconds
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 7 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 SKIP unknown
- 2025-10-19 PASS 7 seconds
- 2025-10-20
  - PASS 11 seconds
  - SKIP unknown
- 2025-10-21 SKIP unknown
- 2025-10-22
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-10-23 SKIP unknown
- 2025-10-24 PASS 7 seconds
- 2025-10-25 SKIP unknown
- 2025-10-26 PASS 9 seconds
- 2025-10-27 PASS 8 seconds
- 2025-10-28 SKIP unknown
- 2025-10-29 PASS 8 seconds
- 2025-10-30 SKIP unknown
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 SKIP unknown
- 2025-11-05
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-06 SKIP unknown
- 2025-11-07 PASS 10 seconds
- 2025-11-08 SKIP unknown
- 2025-11-09 PASS 8 seconds
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
