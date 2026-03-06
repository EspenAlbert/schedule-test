# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 00:44](#error-2026-03-03t0044420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 14 seconds
- 2026-02-06 PASS 12 seconds
- 2026-02-07 PASS 19 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 11 seconds
- 2026-02-10 PASS 14 seconds
- 2026-02-11 PASS 17 seconds
- 2026-02-12 PASS 15 seconds
- 2026-02-13 PASS 17 seconds
- 2026-02-14 PASS 13 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 16 seconds
- 2026-02-17 PASS 16 seconds
- 2026-02-18 PASS 14 seconds
- 2026-02-19 PASS 15 seconds
- 2026-02-20 PASS 15 seconds
- 2026-02-21 PASS 16 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 14 seconds
- 2026-02-24 PASS 14 seconds
- 2026-02-25 PASS 13 seconds
- 2026-02-26 PASS 19 seconds
- 2026-02-27 PASS 13 seconds
- 2026-02-28 PASS 15 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 15 seconds
- 2026-03-03

### Error 2026-03-03T00:44:42+00:00
```
2026-03-03T00:44:42.7582186Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-03-03T00:44:42.7586496Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-03-03T00:44:42.7633336Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-03-03T00:44:42.7633934Z     resource_project_test.go:1021: Step 1/2 error: Error running apply: exit status 1
2026-03-03T00:44:42.7634361Z         
2026-03-03T00:44:42.7634790Z         Error: error creating project: test-acc-tf-p-8412039542572529307
2026-03-03T00:44:42.7635164Z         
2026-03-03T00:44:42.7635473Z           with mongodbatlas_project.test,
2026-03-03T00:44:42.7636092Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-03-03T00:44:42.7636671Z           12: 		resource "mongodbatlas_project" "test" {
2026-03-03T00:44:42.7636977Z         
2026-03-03T00:44:42.7637464Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-03T00:44:42.7638128Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-03T00:44:42.7638720Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:44:42.7639182Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (73.05s)
```

- 2026-03-04 PASS 17 seconds
- 2026-03-05 PASS a minute
- 2026-03-06 PASS 19 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 13 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 8 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 15 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 12 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 9 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 14 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 13 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
