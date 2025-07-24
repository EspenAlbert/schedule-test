# project/project/TestAccProject_withTags Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089f756291349dce6e311/limits | qa | flaky_500 | 59.02s
[2025-07-13 00:39](#error-2025-07-13t0039280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872ff09207f4561710427cc/limits | qa | flaky_500 | 79.03s
[2025-07-20 00:38](#error-2025-07-20t0038280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3993426db7026b5b2e7a/limits | qa | flaky_500 | 38.07s
[2025-07-23 08:21](#error-2025-07-23t0821360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a5adafa37582cecfcf8/limits | qa | flaky_500 | 44.03s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 58 seconds
- 2025-06-26 PASS 53 seconds
- 2025-06-27 PASS 37 seconds
- 2025-06-28 PASS 30 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9493600Z === RUN   TestAccProject_withTags
2025-06-29T00:43:46.9514228Z === CONT  TestAccProject_withTags
2025-06-29T00:43:46.9616427Z === NAME  TestAccProject_withTags
2025-06-29T00:43:46.9617105Z     resource_project_test.go:1016: Step 2/8, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-29T00:43:46.9617841Z         
2025-06-29T00:43:46.9618211Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9618535Z         
2025-06-29T00:43:46.9618822Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9619397Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9619927Z           12: resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9620203Z         
2025-06-29T00:43:46.9620630Z         error getting project (686089f756291349dce6e311): error getting project's
2025-06-29T00:43:46.9621071Z         limits (686089f756291349dce6e311):
2025-06-29T00:43:46.9621631Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f756291349dce6e311/limits
2025-06-29T00:43:46.9622291Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9622855Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9623239Z         BadRequestDetail: 
2025-06-29T00:43:46.9623509Z --- FAIL: TestAccProject_withTags (59.18s)
```

- 2025-06-30 PASS 56 seconds
- 2025-07-01
  - PASS 36 seconds
  - PASS 39 seconds
  - PASS 56 seconds
  - PASS 33 seconds
  - PASS 31 seconds
  - PASS 28 seconds
- 2025-07-02 PASS 40 seconds
- 2025-07-03 PASS 32 seconds
- 2025-07-04 PASS 32 seconds
- 2025-07-05 PASS 26 seconds
- 2025-07-06 PASS 29 seconds
- 2025-07-07 PASS 28 seconds
- 2025-07-08 PASS 29 seconds
- 2025-07-09 PASS 34 seconds
- 2025-07-10
  - PASS 56 seconds
  - PASS a minute
- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13

### Error 2025-07-13T00:39:28+00:00
```
2025-07-13T00:39:28.2929187Z === RUN   TestAccProject_withTags
2025-07-13T00:39:28.2934238Z === CONT  TestAccProject_withTags
2025-07-13T00:39:28.2986283Z === NAME  TestAccProject_withTags
2025-07-13T00:39:28.2986781Z     resource_project_test.go:1016: Step 8/8 error running import: exit status 1
2025-07-13T00:39:28.2987170Z         
2025-07-13T00:39:28.2987547Z         Error: error when getting project properties after create
2025-07-13T00:39:28.2987873Z         
2025-07-13T00:39:28.2988351Z         error getting project (6872ff09207f4561710427cc): error getting project's
2025-07-13T00:39:28.2988805Z         limits (6872ff09207f4561710427cc):
2025-07-13T00:39:28.2989383Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872ff09207f4561710427cc/limits
2025-07-13T00:39:28.2990186Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:39:28.2990771Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:39:28.2991174Z         BadRequestDetail: 
2025-07-13T00:39:28.2991413Z         
2025-07-13T00:39:28.2991635Z --- FAIL: TestAccProject_withTags (79.32s)
```

- 2025-07-14 PASS 56 seconds
- 2025-07-15 PASS 31 seconds
- 2025-07-16 PASS 43 seconds
- 2025-07-17 PASS 56 seconds
- 2025-07-18 PASS 55 seconds
- 2025-07-19 PASS 36 seconds
- 2025-07-20

### Error 2025-07-20T00:38:28+00:00
```
2025-07-20T00:38:28.9963328Z === RUN   TestAccProject_withTags
2025-07-20T00:38:28.9966523Z === CONT  TestAccProject_withTags
2025-07-20T00:38:29.0037349Z === NAME  TestAccProject_withTags
2025-07-20T00:38:29.0037869Z     resource_project_test.go:1016: Step 4/8 error: Error running pre-apply plan: exit status 1
2025-07-20T00:38:29.0038276Z         
2025-07-20T00:38:29.0038646Z         Error: error when getting project properties after create
2025-07-20T00:38:29.0038963Z         
2025-07-20T00:38:29.0039248Z           with mongodbatlas_project.test,
2025-07-20T00:38:29.0039827Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:38:29.0040575Z           12: resource "mongodbatlas_project" "test" {
2025-07-20T00:38:29.0040867Z         
2025-07-20T00:38:29.0041296Z         error getting project (687c3993426db7026b5b2e7a): error getting project's
2025-07-20T00:38:29.0041740Z         limits (687c3993426db7026b5b2e7a):
2025-07-20T00:38:29.0042296Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3993426db7026b5b2e7a/limits
2025-07-20T00:38:29.0042939Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:38:29.0043499Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:38:29.0043881Z         BadRequestDetail: 
2025-07-20T00:38:29.0056041Z   
2025-07-20T00:38:29.0063414Z --- FAIL: TestAccProject_withTags (38.69s)
```

- 2025-07-21 PASS 55 seconds
- 2025-07-22 PASS 43 seconds
- 2025-07-23
  - PASS 28 seconds
  - FAIL 44 seconds

### Error 2025-07-23T08:21:36+00:00
```
2025-07-23T08:21:36.8705749Z === RUN   TestAccProject_withTags
2025-07-23T08:21:36.8708743Z === CONT  TestAccProject_withTags
2025-07-23T08:21:36.8839850Z === NAME  TestAccProject_withTags
2025-07-23T08:21:36.8840348Z     resource_project_test.go:1016: Step 5/8 error: Error running apply: exit status 1
2025-07-23T08:21:36.8840756Z         
2025-07-23T08:21:36.8841074Z         Error: error when getting project properties
2025-07-23T08:21:36.8841359Z         
2025-07-23T08:21:36.8841663Z           with data.mongodbatlas_project.test,
2025-07-23T08:21:36.8842234Z           on terraform_plugin_test.tf line 22, in data "mongodbatlas_project" "test":
2025-07-23T08:21:36.8842720Z           22: data "mongodbatlas_project" "test" {
2025-07-23T08:21:36.8842990Z         
2025-07-23T08:21:36.8843419Z         error getting project (68809a5adafa37582cecfcf8): error getting project's
2025-07-23T08:21:36.8843874Z         limits (68809a5adafa37582cecfcf8):
2025-07-23T08:21:36.8844562Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a5adafa37582cecfcf8/limits
2025-07-23T08:21:36.8845223Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T08:21:36.8845791Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T08:21:36.8846181Z         BadRequestDetail: 
2025-07-23T08:21:36.8846448Z --- FAIL: TestAccProject_withTags (44.33s)
```

  - PASS a minute
- 2025-07-24 PASS 53 seconds