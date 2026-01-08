# project/project/TestAccProject_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 116.00s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 37.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 6 minutes
  - PASS 2 minutes
- 2025-12-11 PASS 3 minutes
- 2025-12-12 PASS 6 minutes
- 2025-12-13 PASS 4 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 minutes
- 2025-12-16 PASS 4 minutes
- 2025-12-17 PASS 6 minutes
- 2025-12-18 PASS 5 minutes
- 2025-12-19 PASS 6 minutes
- 2025-12-20 PASS 4 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 5 minutes
- 2025-12-23 PASS 4 minutes
- 2025-12-24 PASS 3 minutes
- 2025-12-25 PASS 3 minutes
- 2025-12-26 PASS 6 minutes
- 2025-12-27 PASS 3 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 5 minutes
- 2025-12-31 PASS 6 minutes
- 2026-01-01 PASS 5 minutes
- 2026-01-02 PASS 6 minutes
- 2026-01-03 PASS 5 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 6 minutes
- 2026-01-06 PASS 4 minutes
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2825399Z === RUN   TestAccProject_basic
2026-01-07T00:33:18.2836601Z === CONT  TestAccProject_basic
2026-01-07T00:33:18.3025569Z === NAME  TestAccProject_basic
2026-01-07T00:33:18.3026041Z     resource_project_test.go:558: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:33:18.3026440Z         
2026-01-07T00:33:18.3026846Z         Error: error creating project: test-acc-tf-p-1431065537060827934
2026-01-07T00:33:18.3027191Z         
2026-01-07T00:33:18.3027505Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.3028091Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.3028632Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.3028929Z         
2026-01-07T00:33:18.3029391Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:18.3030018Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:18.3030580Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:18.3030956Z --- FAIL: TestAccProject_basic (116.05s)
```

- 2026-01-08
  - PASS 6 minutes
  - FAIL 37 seconds

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7582455Z === RUN   TestAccProject_basic
2026-01-08T07:59:10.7591258Z === CONT  TestAccProject_basic
2026-01-08T07:59:10.7797646Z === NAME  TestAccProject_basic
2026-01-08T07:59:10.7798144Z     resource_project_test.go:558: Step 1/4 error: Error running apply: exit status 1
2026-01-08T07:59:10.7798553Z         
2026-01-08T07:59:10.7798990Z         Error: error during project deletion when getting project settings
2026-01-08T07:59:10.7799358Z         
2026-01-08T07:59:10.7799659Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7800285Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7800864Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7801182Z         
2026-01-08T07:59:10.7801533Z         error deleting project (695f63cbaa2a8443b49026fe):
2026-01-08T07:59:10.7802181Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f63cbaa2a8443b49026fe/settings
2026-01-08T07:59:10.7802902Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T07:59:10.7803558Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7803984Z --- FAIL: TestAccProject_basic (37.79s)
```

  - PASS 5 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 4 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 4 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 4 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
