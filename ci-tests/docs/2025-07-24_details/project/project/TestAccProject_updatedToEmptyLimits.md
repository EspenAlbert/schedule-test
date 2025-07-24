# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-20 00:38](#error-2025-07-20t0038280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3992823af9166ef92925/limits | qa | flaky_500 | 39.07s
[2025-07-23 08:21](#error-2025-07-23t0821360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a5adafa37582cecfcef/limits | qa | flaky_500 | 40.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 23 seconds
- 2025-06-26 PASS 22 seconds
- 2025-06-27 PASS 15 seconds
- 2025-06-28 PASS 13 seconds
- 2025-06-29 PASS 20 seconds
- 2025-06-30 PASS 21 seconds
- 2025-07-01
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 23 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-07-02 PASS 16 seconds
- 2025-07-03 PASS 13 seconds
- 2025-07-04 PASS 13 seconds
- 2025-07-05 PASS 11 seconds
- 2025-07-06 PASS 16 seconds
- 2025-07-07 PASS 12 seconds
- 2025-07-08 PASS 11 seconds
- 2025-07-09 PASS 14 seconds
- 2025-07-10
  - PASS 22 seconds
  - PASS 48 seconds
- 2025-07-11 PASS 22 seconds
- 2025-07-12 PASS 22 seconds
- 2025-07-13 PASS 28 seconds
- 2025-07-14 PASS 21 seconds
- 2025-07-15 PASS 14 seconds
- 2025-07-16 PASS 18 seconds
- 2025-07-17 PASS 21 seconds
- 2025-07-18 PASS 21 seconds
- 2025-07-19 PASS 14 seconds
- 2025-07-20

### Error 2025-07-20T00:38:28+00:00
```
2025-07-20T00:38:28.9961049Z === RUN   TestAccProject_updatedToEmptyLimits
2025-07-20T00:38:28.9967493Z === CONT  TestAccProject_updatedToEmptyLimits
2025-07-20T00:38:29.0094043Z === NAME  TestAccProject_updatedToEmptyLimits
2025-07-20T00:38:29.0094664Z     resource_project_test.go:910: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2025-07-20T00:38:29.0095118Z         
2025-07-20T00:38:29.0095450Z         Error: error when getting project properties
2025-07-20T00:38:29.0095743Z         
2025-07-20T00:38:29.0096049Z           with data.mongodbatlas_project.test,
2025-07-20T00:38:29.0096619Z           on terraform_plugin_test.tf line 19, in data "mongodbatlas_project" "test":
2025-07-20T00:38:29.0097115Z           19: 		data "mongodbatlas_project" "test" {
2025-07-20T00:38:29.0097384Z         
2025-07-20T00:38:29.0097808Z         error getting project (687c3992823af9166ef92925): error getting project's
2025-07-20T00:38:29.0098248Z         limits (687c3992823af9166ef92925):
2025-07-20T00:38:29.0099004Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3992823af9166ef92925/limits
2025-07-20T00:38:29.0099653Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:38:29.0100360Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:38:29.0100752Z         BadRequestDetail: 
2025-07-20T00:38:29.0112992Z   
2025-07-20T00:38:29.0119762Z --- FAIL: TestAccProject_updatedToEmptyLimits (39.73s)
```

- 2025-07-21 PASS 20 seconds
- 2025-07-22 PASS 16 seconds
- 2025-07-23
  - PASS 11 seconds
  - FAIL 40 seconds

### Error 2025-07-23T08:21:36+00:00
```
2025-07-23T08:21:36.8703277Z === RUN   TestAccProject_updatedToEmptyLimits
2025-07-23T08:21:36.8709024Z === CONT  TestAccProject_updatedToEmptyLimits
2025-07-23T08:21:36.8802566Z === NAME  TestAccProject_updatedToEmptyLimits
2025-07-23T08:21:36.8803150Z     resource_project_test.go:910: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-07-23T08:21:36.8803578Z         
2025-07-23T08:21:36.8804075Z         Error: error when getting project properties after create
2025-07-23T08:21:36.8804403Z         
2025-07-23T08:21:36.8804686Z           with mongodbatlas_project.test,
2025-07-23T08:21:36.8805251Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-23T08:21:36.8805777Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-23T08:21:36.8806061Z         
2025-07-23T08:21:36.8806488Z         error getting project (68809a5adafa37582cecfcef): error getting project's
2025-07-23T08:21:36.8806932Z         limits (68809a5adafa37582cecfcef):
2025-07-23T08:21:36.8807488Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a5adafa37582cecfcef/limits
2025-07-23T08:21:36.8808138Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T08:21:36.8826442Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T08:21:36.8826919Z         BadRequestDetail: 
2025-07-23T08:21:36.8827261Z --- FAIL: TestAccProject_updatedToEmptyLimits (40.36s)
```

  - PASS 38 seconds
- 2025-07-24 PASS 21 seconds