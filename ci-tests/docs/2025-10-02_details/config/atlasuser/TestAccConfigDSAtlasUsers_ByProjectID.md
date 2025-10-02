# config/atlasuser/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c7df5af52d2d4d457a/limits | qa | flaky_500 | 32.09s
[2025-09-14 00:29](#error-2025-09-14t0029400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3f1411d835e95b2ea5/limits | qa | flaky_500 | 35.07s
[2025-09-15 06:21](#error-2025-09-15t0621470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b046fe60767b7f9b0bee/limits | qa | flaky_500 | 33.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 8 seconds
- 2025-09-05 PASS 7 seconds
- 2025-09-06 PASS 6 seconds
- 2025-09-07

### Error 2025-09-07T00:29:28+00:00
```
2025-09-07T00:29:28.2020200Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-09-07T00:29:28.2115412Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-09-07T00:29:28.2153360Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-09-07T00:29:28.2154385Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-09-07T00:29:28.2155120Z         
2025-09-07T00:29:28.2155811Z         Error: error when getting project properties after create
2025-09-07T00:29:28.2156395Z         
2025-09-07T00:29:28.2156911Z           with mongodbatlas_project.test,
2025-09-07T00:29:28.2158150Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:29:28.2159119Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:29:28.2159625Z         
2025-09-07T00:29:28.2160434Z         error getting project (68bcd1c7df5af52d2d4d457a): error getting project's
2025-09-07T00:29:28.2161271Z         limits (68bcd1c7df5af52d2d4d457a):
2025-09-07T00:29:28.2162316Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c7df5af52d2d4d457a/limits
2025-09-07T00:29:28.2163538Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:29:28.2164590Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:29:28.2165289Z         BadRequestDetail: 
2025-09-07T00:29:28.2165831Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (32.88s)
```

- 2025-09-08
  - PASS 8 seconds
  - PASS a minute
  - PASS 6 seconds
- 2025-09-09 PASS 9 seconds
- 2025-09-10 PASS 5 seconds
- 2025-09-11 PASS 8 seconds
- 2025-09-12 PASS 6 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:29:40+00:00
```
2025-09-14T00:29:40.2720418Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-09-14T00:29:40.3377028Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-09-14T00:29:40.3638395Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-09-14T00:29:40.3639439Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:29:40.3640170Z         
2025-09-14T00:29:40.3640851Z         Error: error when getting project properties after create
2025-09-14T00:29:40.3641449Z         
2025-09-14T00:29:40.3641975Z           with mongodbatlas_project.test,
2025-09-14T00:29:40.3643056Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:40.3644039Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:40.3644557Z         
2025-09-14T00:29:40.3645374Z         error getting project (68c60c3f1411d835e95b2ea5): error getting project's
2025-09-14T00:29:40.3646199Z         limits (68c60c3f1411d835e95b2ea5):
2025-09-14T00:29:40.3647230Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3f1411d835e95b2ea5/limits
2025-09-14T00:29:40.3648632Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:40.3649675Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:40.3650339Z         BadRequestDetail: 
2025-09-14T00:29:40.3650893Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (35.74s)
```

- 2025-09-15
  - PASS 6 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:21:47+00:00
```
2025-09-15T06:21:47.3767882Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-09-15T06:21:47.4349837Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-09-15T06:21:47.4585869Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-09-15T06:21:47.4587006Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:21:47.4588234Z         
2025-09-15T06:21:47.4589001Z         Error: error when getting project properties after create
2025-09-15T06:21:47.4589524Z         
2025-09-15T06:21:47.4604380Z           with mongodbatlas_project.test,
2025-09-15T06:21:47.4606559Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:47.4607594Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:47.4740084Z         
2025-09-15T06:21:47.4741052Z         error getting project (68c7b046fe60767b7f9b0bee): error getting project's
2025-09-15T06:21:47.4741807Z         limits (68c7b046fe60767b7f9b0bee):
2025-09-15T06:21:47.4757773Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b046fe60767b7f9b0bee/limits
2025-09-15T06:21:47.4759135Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:47.4760152Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:47.4760812Z         BadRequestDetail: 
2025-09-15T06:21:47.4761319Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (33.34s)
```

- 2025-09-16 PASS 7 seconds
- 2025-09-17 PASS 8 seconds
- 2025-09-18 PASS 7 seconds
- 2025-09-19 PASS 9 seconds
- 2025-09-20 PASS 8 seconds
- 2025-09-21 PASS 9 seconds
- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 7 seconds
- 2025-09-25 PASS 10 seconds
- 2025-09-26 PASS 7 seconds
- 2025-09-27 PASS 9 seconds
- 2025-09-28 PASS 5 seconds
- 2025-09-29 PASS 6 seconds
- 2025-09-30
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-10-02 PASS 8 seconds