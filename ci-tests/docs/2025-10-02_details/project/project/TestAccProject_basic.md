# project/project/TestAccProject_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c6167f1411d835e95b829a/limits | qa | flaky_500 | 2540.00s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7bacad444485797b63a66/limits | qa | flaky_500 | 2611.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 2 minutes
- 2025-09-05 PASS a minute
- 2025-09-06 PASS 3 minutes
- 2025-09-07 PASS 8 minutes
- 2025-09-08
  - PASS 2 minutes
  - PASS 21 minutes
  - PASS 2 minutes
- 2025-09-09 PASS 5 minutes
- 2025-09-10 PASS 2 minutes
- 2025-09-11 PASS 4 minutes
- 2025-09-12 PASS 5 minutes
- 2025-09-13 PASS 3 minutes
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9756079Z === RUN   TestAccProject_basic
2025-09-14T01:13:04.9777802Z === CONT  TestAccProject_basic
2025-09-14T01:13:05.0042535Z === NAME  TestAccProject_basic
2025-09-14T01:13:05.0043033Z     resource_project_test.go:558: Step 1/4 error: Error running apply: exit status 1
2025-09-14T01:13:05.0043446Z         
2025-09-14T01:13:05.0043833Z         Error: error when getting project properties after create
2025-09-14T01:13:05.0044174Z         
2025-09-14T01:13:05.0044562Z           with mongodbatlas_project.test,
2025-09-14T01:13:05.0045192Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:05.0045753Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:05.0046051Z         
2025-09-14T01:13:05.0046507Z         error getting project (68c6167f1411d835e95b829a): error getting project's
2025-09-14T01:13:05.0046978Z         limits (68c6167f1411d835e95b829a):
2025-09-14T01:13:05.0047559Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c6167f1411d835e95b829a/limits
2025-09-14T01:13:05.0048249Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:05.0048854Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:05.0049259Z         BadRequestDetail: 
2025-09-14T01:13:05.0049535Z --- FAIL: TestAccProject_basic (2540.03s)
```

- 2025-09-15
  - PASS 2 minutes
  - FAIL 43 minutes

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6561370Z === RUN   TestAccProject_basic
2025-09-15T07:06:19.6584891Z === CONT  TestAccProject_basic
2025-09-15T07:06:19.6793094Z === NAME  TestAccProject_basic
2025-09-15T07:06:19.6793566Z     resource_project_test.go:558: Step 1/4 error: Error running apply: exit status 1
2025-09-15T07:06:19.6793955Z         
2025-09-15T07:06:19.6794337Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6794666Z         
2025-09-15T07:06:19.6794965Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6795566Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6796107Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6796398Z         
2025-09-15T07:06:19.6796843Z         error getting project (68c7bacad444485797b63a66): error getting project's
2025-09-15T07:06:19.6797306Z         limits (68c7bacad444485797b63a66):
2025-09-15T07:06:19.6797879Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7bacad444485797b63a66/limits
2025-09-15T07:06:19.6798541Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6799114Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6799504Z         BadRequestDetail: 
2025-09-15T07:06:19.6799771Z --- FAIL: TestAccProject_basic (2611.94s)
```

- 2025-09-16 PASS 4 minutes
- 2025-09-17 PASS 3 minutes
- 2025-09-18 PASS 5 minutes
- 2025-09-19 PASS 3 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 14 minutes
- 2025-09-22 PASS 4 minutes
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 4 minutes
- 2025-09-25 PASS 4 minutes
- 2025-09-26 PASS 2 minutes
- 2025-09-27 PASS 4 minutes
- 2025-09-28 PASS 4 minutes
- 2025-09-29 PASS 2 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 4 minutes
  - PASS a minute
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 5 minutes
  - PASS 2 minutes
  - PASS 4 minutes
- 2025-10-02 PASS 4 minutes