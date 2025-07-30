# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-23 08:21](#error-2025-07-23t0821360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a5adafa37582cecfcf6/limits | qa | flaky_500 | 39.05s
[2025-07-27 00:37](#error-2025-07-27t0037030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857424ef1f7377717a9d78/limits | qa | flaky_500 | 38.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 18 seconds
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 11 seconds
- 2025-07-02 PASS 13 seconds
- 2025-07-03 PASS 11 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 15 seconds
- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 12 seconds
- 2025-07-09 PASS 11 seconds
- 2025-07-10
  - PASS 19 seconds
  - PASS 48 seconds
- 2025-07-11 PASS 19 seconds
- 2025-07-12 PASS 20 seconds
- 2025-07-13 PASS 22 seconds
- 2025-07-14 PASS 17 seconds
- 2025-07-15 PASS 12 seconds
- 2025-07-16 PASS 15 seconds
- 2025-07-17 PASS 18 seconds
- 2025-07-18 PASS 16 seconds
- 2025-07-19 PASS 12 seconds
- 2025-07-20 PASS 10 seconds
- 2025-07-21 PASS 18 seconds
- 2025-07-22 PASS 14 seconds
- 2025-07-23
  - PASS 11 seconds
  - FAIL 39 seconds

### Error 2025-07-23T08:21:36+00:00
```
2025-07-23T08:21:36.8700546Z === RUN   TestAccProject_withUpdatedSettings
2025-07-23T08:21:36.8710335Z === CONT  TestAccProject_withUpdatedSettings
2025-07-23T08:21:36.8783191Z === NAME  TestAccProject_withUpdatedSettings
2025-07-23T08:21:36.8783712Z     resource_project_test.go:679: Step 3/3 error: Error running apply: exit status 1
2025-07-23T08:21:36.8784087Z         
2025-07-23T08:21:36.8784458Z         Error: error when getting project properties after create
2025-07-23T08:21:36.8784778Z         
2025-07-23T08:21:36.8785067Z           with mongodbatlas_project.test,
2025-07-23T08:21:36.8785636Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-23T08:21:36.8786163Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-23T08:21:36.8786446Z         
2025-07-23T08:21:36.8786889Z         error getting project (68809a5adafa37582cecfcf6): error getting project's
2025-07-23T08:21:36.8787380Z         limits (68809a5adafa37582cecfcf6):
2025-07-23T08:21:36.8787943Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a5adafa37582cecfcf6/limits
2025-07-23T08:21:36.8788591Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T08:21:36.8789379Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T08:21:36.8789762Z         BadRequestDetail: 
2025-07-23T08:21:36.8790054Z --- FAIL: TestAccProject_withUpdatedSettings (39.53s)
```

  - PASS 45 seconds
- 2025-07-24 PASS 18 seconds
- 2025-07-25 PASS 14 seconds
- 2025-07-26 PASS 12 seconds
- 2025-07-27

### Error 2025-07-27T00:37:03+00:00
```
2025-07-27T00:37:03.6049273Z === RUN   TestAccProject_withUpdatedSettings
2025-07-27T00:37:03.6060608Z === CONT  TestAccProject_withUpdatedSettings
2025-07-27T00:37:03.6165184Z === NAME  TestAccProject_withUpdatedSettings
2025-07-27T00:37:03.6165750Z     resource_project_test.go:679: Step 3/3 error: Error running post-apply refresh plan: exit status 1
2025-07-27T00:37:03.6166176Z         
2025-07-27T00:37:03.6166540Z         Error: error when getting project properties after create
2025-07-27T00:37:03.6166861Z         
2025-07-27T00:37:03.6167147Z           with mongodbatlas_project.test,
2025-07-27T00:37:03.6167718Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:37:03.6168249Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:37:03.6168526Z         
2025-07-27T00:37:03.6168950Z         error getting project (68857424ef1f7377717a9d78): error getting project's
2025-07-27T00:37:03.6169388Z         limits (68857424ef1f7377717a9d78):
2025-07-27T00:37:03.6169936Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857424ef1f7377717a9d78/limits
2025-07-27T00:37:03.6170576Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:37:03.6171136Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:37:03.6171510Z         BadRequestDetail: 
2025-07-27T00:37:03.6209505Z --- FAIL: TestAccProject_withUpdatedSettings (38.40s)
```

- 2025-07-28 PASS 16 seconds
- 2025-07-29 PASS 16 seconds
- 2025-07-30 PASS 12 seconds