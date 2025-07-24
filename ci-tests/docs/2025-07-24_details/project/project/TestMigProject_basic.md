# project/project/TestMigProject_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40c690ae45e168bd5f6/limits | qa | flaky_500 | 37.01s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 13 seconds
- 2025-06-26 PASS 13 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 20 seconds
- 2025-06-30 PASS 16 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06

### Error 2025-07-06T00:37:51+00:00
```
2025-07-06T00:37:51.5447766Z === RUN   TestMigProject_basic
2025-07-06T00:37:51.5462606Z   
2025-07-06T00:37:51.5463294Z     resource_project_migration_test.go:24: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-06T00:37:51.5464211Z         
2025-07-06T00:37:51.5464593Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5464912Z         
2025-07-06T00:37:51.5465194Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5465800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5466333Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5466613Z         
2025-07-06T00:37:51.5467041Z         error getting project (6869c40c690ae45e168bd5f6): error getting project's
2025-07-06T00:37:51.5467482Z         limits (6869c40c690ae45e168bd5f6):
2025-07-06T00:37:51.5468035Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40c690ae45e168bd5f6/limits
2025-07-06T00:37:51.5468684Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5469244Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5469617Z         BadRequestDetail: 
2025-07-06T00:37:51.5469873Z --- FAIL: TestMigProject_basic (37.08s)
```

- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-07-11 PASS 13 seconds
- 2025-07-12 PASS 12 seconds
- 2025-07-13 PASS 12 seconds
- 2025-07-14 PASS 13 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 10 seconds
- 2025-07-17 PASS 14 seconds
- 2025-07-18 PASS 13 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20 PASS 31 seconds
- 2025-07-21 PASS 12 seconds
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 12 seconds
- 2025-07-24 PASS 13 seconds