# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089f756291349dce6e315/limits | qa | flaky_500 | 55.05s
[2025-07-23 08:21](#error-2025-07-23t0821360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a5adafa37582cecfcf6/limits | qa | flaky_500 | 39.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 19 seconds
- 2025-06-26 PASS 19 seconds
- 2025-06-27 PASS 12 seconds
- 2025-06-28 PASS 13 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9489135Z === RUN   TestAccProject_withUpdatedSettings
2025-06-29T00:43:46.9495519Z === CONT  TestAccProject_withUpdatedSettings
2025-06-29T00:43:46.9561083Z === NAME  TestAccProject_withUpdatedSettings
2025-06-29T00:43:46.9561678Z     resource_project_test.go:679: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:43:46.9562120Z         
2025-06-29T00:43:46.9562491Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9562809Z         
2025-06-29T00:43:46.9563097Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9563685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9564217Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9564504Z         
2025-06-29T00:43:46.9565064Z         error getting project (686089f756291349dce6e315): error getting project's
2025-06-29T00:43:46.9565526Z         limits (686089f756291349dce6e315):
2025-06-29T00:43:46.9566092Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f756291349dce6e315/limits
2025-06-29T00:43:46.9566747Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9567486Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9567880Z         BadRequestDetail: 
2025-06-29T00:43:46.9568535Z --- FAIL: TestAccProject_withUpdatedSettings (55.53s)
```

- 2025-06-30 PASS 18 seconds
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