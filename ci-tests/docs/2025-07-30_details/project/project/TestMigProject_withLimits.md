# project/project/TestMigProject_withLimits Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c476690ae45e168be8ed/limits | qa | flaky_500 | 44.09s
[2025-07-23 13:29](#error-2025-07-23t1329170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880e2940afa8a5c605085ae/limits | qa | flaky_500 | 59.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 17 seconds
  - PASS 18 seconds
  - PASS 24 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 11 seconds
- 2025-07-02 PASS 17 seconds
- 2025-07-03 PASS 12 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 11 seconds
- 2025-07-06

### Error 2025-07-06T00:37:51+00:00
```
2025-07-06T00:37:51.5500425Z === RUN   TestMigProject_withLimits
2025-07-06T00:37:51.5507766Z   
2025-07-06T00:37:51.5508205Z     resource_project_migration_test.go:124: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:37:51.5508605Z         
2025-07-06T00:37:51.5508910Z         Error: error when getting project properties
2025-07-06T00:37:51.5509191Z         
2025-07-06T00:37:51.5509490Z           with data.mongodbatlas_project.test,
2025-07-06T00:37:51.5510051Z           on terraform_plugin_test.tf line 31, in data "mongodbatlas_project" "test":
2025-07-06T00:37:51.5510548Z           31: 		data "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5510815Z         
2025-07-06T00:37:51.5511236Z         error getting project (6869c476690ae45e168be8ed): error getting project's
2025-07-06T00:37:51.5511675Z         limits (6869c476690ae45e168be8ed):
2025-07-06T00:37:51.5512233Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c476690ae45e168be8ed/limits
2025-07-06T00:37:51.5512956Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5513667Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5514041Z         BadRequestDetail: 
2025-07-06T00:37:51.5514300Z --- FAIL: TestMigProject_withLimits (44.91s)
```

- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 12 seconds
- 2025-07-09 PASS 12 seconds
- 2025-07-10
  - PASS 22 seconds
  - PASS 50 seconds
- 2025-07-11 PASS 25 seconds
- 2025-07-12 PASS 23 seconds
- 2025-07-13 PASS 20 seconds
- 2025-07-14 PASS 21 seconds
- 2025-07-15 PASS 14 seconds
- 2025-07-16 PASS 18 seconds
- 2025-07-17 PASS 21 seconds
- 2025-07-18 PASS 22 seconds
- 2025-07-19 PASS 14 seconds
- 2025-07-20 PASS 10 seconds
- 2025-07-21 PASS 21 seconds
- 2025-07-22 PASS 17 seconds
- 2025-07-23
  - PASS 12 seconds
  - PASS 25 seconds
  - FAIL 59 seconds

### Error 2025-07-23T13:29:17+00:00
```
2025-07-23T13:29:17.2694858Z === RUN   TestMigProject_withLimits
2025-07-23T13:29:17.2709134Z   
2025-07-23T13:29:17.2709670Z     resource_project_migration_test.go:124: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-23T13:29:17.2710117Z         
2025-07-23T13:29:17.2710444Z         Error: error when getting project properties
2025-07-23T13:29:17.2710739Z         
2025-07-23T13:29:17.2711055Z           with data.mongodbatlas_project.test,
2025-07-23T13:29:17.2711626Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-07-23T13:29:17.2712129Z           29: 		data "mongodbatlas_project" "test" {
2025-07-23T13:29:17.2712410Z         
2025-07-23T13:29:17.2712851Z         error getting project (6880e2940afa8a5c605085ae): error getting project's
2025-07-23T13:29:17.2713454Z         limits (6880e2940afa8a5c605085ae):
2025-07-23T13:29:17.2714018Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2940afa8a5c605085ae/limits
2025-07-23T13:29:17.2714851Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T13:29:17.2715419Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T13:29:17.2715804Z         BadRequestDetail: 
2025-07-23T13:29:17.2716075Z --- FAIL: TestMigProject_withLimits (59.81s)
```

- 2025-07-24 PASS 23 seconds
- 2025-07-25 PASS 17 seconds
- 2025-07-26 PASS 14 seconds
- 2025-07-27 PASS 10 seconds
- 2025-07-28 PASS 19 seconds
- 2025-07-29 PASS 20 seconds
- 2025-07-30 PASS 14 seconds