# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-20 00:38](#error-2025-07-20t0038280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3993823af9166ef9293e/limits | qa | flaky_500 | 40.03s
[2025-07-23 08:21](#error-2025-07-23t0821360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a5adafa37582cecfcf9/limits | qa | flaky_500 | 38.08s
[2025-07-27 00:37](#error-2025-07-27t0037030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857424ea884d723491f802/limits | qa | flaky_500 | 37.02s

## Timeline
- 2025-07-01: MISSING
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
- 2025-07-25 PASS 26 seconds
- 2025-07-26 PASS 24 seconds
- 2025-07-27

### Error 2025-07-27T00:37:03+00:00
```
2025-07-27T00:37:03.6052629Z === RUN   TestAccProject_withUpdatedLimits
2025-07-27T00:37:03.6058651Z === CONT  TestAccProject_withUpdatedLimits
2025-07-27T00:37:03.6126821Z === NAME  TestAccProject_withUpdatedLimits
2025-07-27T00:37:03.6127360Z     resource_project_test.go:825: Step 2/3 error: Error running pre-apply plan: exit status 1
2025-07-27T00:37:03.6127761Z         
2025-07-27T00:37:03.6128131Z         Error: error when getting project properties after create
2025-07-27T00:37:03.6128446Z         
2025-07-27T00:37:03.6128728Z           with mongodbatlas_project.test,
2025-07-27T00:37:03.6129303Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:37:03.6129835Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:37:03.6130116Z         
2025-07-27T00:37:03.6130655Z         error getting project (68857424ea884d723491f802): error getting project's
2025-07-27T00:37:03.6131097Z         limits (68857424ea884d723491f802):
2025-07-27T00:37:03.6131648Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857424ea884d723491f802/limits
2025-07-27T00:37:03.6132293Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:37:03.6132858Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:37:03.6133239Z         BadRequestDetail: 
2025-07-27T00:37:03.6133884Z --- FAIL: TestAccProject_withUpdatedLimits (37.17s)
```

- 2025-07-28 PASS 27 seconds
- 2025-07-29 PASS 28 seconds
- 2025-07-30 PASS 22 seconds
- 2025-07-31 PASS 45 seconds