# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089f749709c3a5a3ca50f/limits | qa | flaky_500 | 54.07s
[2025-07-20 00:38](#error-2025-07-20t0038280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3993823af9166ef9293e/limits | qa | flaky_500 | 40.03s
[2025-07-23 08:21](#error-2025-07-23t0821360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a5adafa37582cecfcf9/limits | qa | flaky_500 | 38.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 35 seconds
- 2025-06-26 PASS 31 seconds
- 2025-06-27 PASS 22 seconds
- 2025-06-28 PASS 17 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9491008Z === RUN   TestAccProject_withUpdatedLimits
2025-06-29T00:43:46.9495210Z === CONT  TestAccProject_withUpdatedLimits
2025-06-29T00:43:46.9541835Z === NAME  TestAccProject_withUpdatedLimits
2025-06-29T00:43:46.9542395Z     resource_project_test.go:825: Step 1/3 error: Error running apply: exit status 1
2025-06-29T00:43:46.9542797Z         
2025-06-29T00:43:46.9543130Z         Error: error when getting project properties
2025-06-29T00:43:46.9543420Z         
2025-06-29T00:43:46.9543730Z           with data.mongodbatlas_project.test,
2025-06-29T00:43:46.9544313Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-06-29T00:43:46.9544830Z           29: 		data "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9545107Z         
2025-06-29T00:43:46.9545555Z         error getting project (686089f749709c3a5a3ca50f): error getting project's
2025-06-29T00:43:46.9545999Z         limits (686089f749709c3a5a3ca50f):
2025-06-29T00:43:46.9546564Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f749709c3a5a3ca50f/limits
2025-06-29T00:43:46.9547219Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9547995Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9548381Z         BadRequestDetail: 
2025-06-29T00:43:46.9560827Z    test_step_number=1
2025-06-29T00:43:46.9568173Z --- FAIL: TestAccProject_withUpdatedLimits (54.71s)
```

- 2025-06-30 PASS 33 seconds
- 2025-07-01
  - PASS 22 seconds
  - PASS 22 seconds
  - PASS 32 seconds
  - PASS 20 seconds
  - PASS 18 seconds
  - PASS 18 seconds
- 2025-07-02 PASS 23 seconds
- 2025-07-03 PASS 18 seconds
- 2025-07-04 PASS 18 seconds
- 2025-07-05 PASS 15 seconds
- 2025-07-06 PASS 20 seconds
- 2025-07-07 PASS 16 seconds
- 2025-07-08 PASS 17 seconds
- 2025-07-09 PASS 19 seconds
- 2025-07-10
  - PASS 34 seconds
  - PASS 59 seconds
- 2025-07-11 PASS 35 seconds
- 2025-07-12 PASS 36 seconds
- 2025-07-13 PASS 37 seconds
- 2025-07-14 PASS 32 seconds
- 2025-07-15 PASS 18 seconds
- 2025-07-16 PASS 26 seconds
- 2025-07-17 PASS 31 seconds
- 2025-07-18 PASS 31 seconds
- 2025-07-19 PASS 20 seconds
- 2025-07-20

### Error 2025-07-20T00:38:28+00:00
```
2025-07-20T00:38:28.9960312Z === RUN   TestAccProject_withUpdatedLimits
2025-07-20T00:38:28.9964986Z === CONT  TestAccProject_withUpdatedLimits
2025-07-20T00:38:29.0113203Z === NAME  TestAccProject_withUpdatedLimits
2025-07-20T00:38:29.0113780Z     resource_project_test.go:825: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-07-20T00:38:29.0114206Z         
2025-07-20T00:38:29.0114522Z         Error: error when getting project properties
2025-07-20T00:38:29.0114805Z         
2025-07-20T00:38:29.0115117Z           with data.mongodbatlas_project.test,
2025-07-20T00:38:29.0115685Z           on terraform_plugin_test.tf line 24, in data "mongodbatlas_project" "test":
2025-07-20T00:38:29.0116185Z           24: 		data "mongodbatlas_project" "test" {
2025-07-20T00:38:29.0116459Z         
2025-07-20T00:38:29.0116893Z         error getting project (687c3993823af9166ef9293e): error getting project's
2025-07-20T00:38:29.0117330Z         limits (687c3993823af9166ef9293e):
2025-07-20T00:38:29.0117885Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3993823af9166ef9293e/limits
2025-07-20T00:38:29.0118532Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:38:29.0119091Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:38:29.0119465Z         BadRequestDetail: 
2025-07-20T00:38:29.0120217Z --- FAIL: TestAccProject_withUpdatedLimits (40.34s)
```

- 2025-07-21 PASS 31 seconds
- 2025-07-22 PASS 25 seconds
- 2025-07-23
  - PASS 16 seconds
  - FAIL 38 seconds

### Error 2025-07-23T08:21:36+00:00
```
2025-07-23T08:21:36.8702590Z === RUN   TestAccProject_withUpdatedLimits
2025-07-23T08:21:36.8707491Z === CONT  TestAccProject_withUpdatedLimits
2025-07-23T08:21:36.8763491Z === NAME  TestAccProject_withUpdatedLimits
2025-07-23T08:21:36.8764169Z     resource_project_test.go:825: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-07-23T08:21:36.8764617Z         
2025-07-23T08:21:36.8764938Z         Error: error when getting project properties
2025-07-23T08:21:36.8765235Z         
2025-07-23T08:21:36.8765541Z           with data.mongodbatlas_project.test,
2025-07-23T08:21:36.8766099Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-07-23T08:21:36.8766748Z           29: 		data "mongodbatlas_project" "test" {
2025-07-23T08:21:36.8767015Z         
2025-07-23T08:21:36.8767448Z         error getting project (68809a5adafa37582cecfcf9): error getting project's
2025-07-23T08:21:36.8767896Z         limits (68809a5adafa37582cecfcf9):
2025-07-23T08:21:36.8768459Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a5adafa37582cecfcf9/limits
2025-07-23T08:21:36.8769100Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T08:21:36.8769897Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T08:21:36.8770294Z         BadRequestDetail: 
2025-07-23T08:21:36.8770595Z --- FAIL: TestAccProject_withUpdatedLimits (38.82s)
```

  - PASS a minute
- 2025-07-24 PASS 33 seconds