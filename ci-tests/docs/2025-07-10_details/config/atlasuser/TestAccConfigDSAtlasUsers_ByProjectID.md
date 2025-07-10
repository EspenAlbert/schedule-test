# config/atlasuser/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029470000) |  | qa |  | 1.01s
[2025-06-05 00:29](#error-2025-06-05t0029560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.09s
[2025-06-22 00:32](#error-2025-06-22t0032350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574eefab82446d9bfb0749/limits | qa | flaky_500 | 34.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 6 seconds
- 2025-04-13 PASS 5 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 6 seconds
- 2025-04-16
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-04-17 PASS 5 seconds
- 2025-04-18 PASS 5 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 8 seconds
- 2025-04-22 PASS 4 seconds
- 2025-04-23 PASS 4 seconds
- 2025-04-24 PASS 8 seconds
- 2025-04-25 PASS 5 seconds
- 2025-04-26 PASS 8 seconds
- 2025-04-27 PASS 10 seconds
- 2025-04-28 PASS 8 seconds
- 2025-04-29 PASS 6 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 5 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05 PASS 9 seconds
- 2025-05-06 PASS 6 seconds
- 2025-05-07 PASS 5 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 8 seconds
- 2025-05-10 PASS 7 seconds
- 2025-05-11

### Error 2025-05-11T00:29:47+00:00
```
2025-05-11T00:29:47.3470481Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-05-11T00:29:47.3600339Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-05-11T00:29:47.3629113Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-05-11T00:29:47.3630117Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:47.3630841Z         
2025-05-11T00:29:47.3631760Z         Error: error creating project: test-acc-tf-p-2075430899973244714
2025-05-11T00:29:47.3632410Z         
2025-05-11T00:29:47.3632942Z           with mongodbatlas_project.test,
2025-05-11T00:29:47.3634022Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:47.3635004Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:47.3635528Z         
2025-05-11T00:29:47.3636385Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:47.3637099Z         type
2025-05-11T00:29:47.3652166Z   
2025-05-11T00:29:47.3660036Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (1.09s)
```

- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 8 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 9 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20 PASS 7 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22 PASS 6 seconds
- 2025-05-23 PASS 5 seconds
- 2025-05-24 PASS 6 seconds
- 2025-05-25 PASS 6 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27 PASS 7 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-29 PASS 8 seconds
- 2025-05-30 PASS 11 seconds
- 2025-05-31 PASS 8 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-06-02
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-06-03 PASS 8 seconds
- 2025-06-04 PASS 7 seconds
- 2025-06-05

### Error 2025-06-05T00:29:56+00:00
```
2025-06-05T00:29:56.1307769Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-05T00:29:56.1448034Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-05T00:29:56.1485952Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-05T00:29:56.1487070Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:29:56.1487894Z         
2025-06-05T00:29:56.1488729Z         Error: error creating project: test-acc-tf-p-7995436772695225074
2025-06-05T00:29:56.1489469Z         
2025-06-05T00:29:56.1490101Z           with mongodbatlas_project.test,
2025-06-05T00:29:56.1491255Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:56.1492322Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:56.1492926Z         
2025-06-05T00:29:56.1493861Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:56.1495194Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:56.1496343Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:56.1497235Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (2.92s)
```

- 2025-06-06 PASS 4 seconds
- 2025-06-07 PASS 8 seconds
- 2025-06-08 PASS 6 seconds
- 2025-06-09 PASS 5 seconds
- 2025-06-10 PASS 9 seconds
- 2025-06-11
  - PASS 8 seconds
  - PASS 4 seconds
- 2025-06-12 PASS 5 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 5 seconds
- 2025-06-15 PASS 5 seconds
- 2025-06-16 PASS 9 seconds
- 2025-06-17 PASS 9 seconds
- 2025-06-18
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-19 PASS 6 seconds
- 2025-06-20 PASS 9 seconds
- 2025-06-21 PASS 4 seconds
- 2025-06-22

### Error 2025-06-22T00:32:35+00:00
```
2025-06-22T00:32:35.7918821Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-22T00:32:35.8127153Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-22T00:32:35.8196879Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-22T00:32:35.8197920Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:32:35.8198648Z         
2025-06-22T00:32:35.8199331Z         Error: error when getting project properties after create
2025-06-22T00:32:35.8199899Z         
2025-06-22T00:32:35.8200402Z           with mongodbatlas_project.test,
2025-06-22T00:32:35.8201596Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:32:35.8202537Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:32:35.8203019Z         
2025-06-22T00:32:35.8203795Z         error getting project (68574eefab82446d9bfb0749): error getting project's
2025-06-22T00:32:35.8204593Z         limits (68574eefab82446d9bfb0749):
2025-06-22T00:32:35.8205591Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eefab82446d9bfb0749/limits
2025-06-22T00:32:35.8206742Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:32:35.8207746Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:32:35.8208421Z         BadRequestDetail: 
2025-06-22T00:32:35.8208942Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (34.71s)
```

- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 6 seconds
- 2025-06-25 PASS 6 seconds
- 2025-06-26 PASS 6 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 9 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 8 seconds
- 2025-07-04 PASS 7 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 6 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10 PASS 7 seconds