# project/project/TestMigProject_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 9 seconds
```
2025-07-01T08:36:27.6777181Z === RUN   TestMigProject_basic
2025-07-01T08:36:27.6777536Z --- PASS: TestMigProject_basic (9.06s)
```
### 2025-07-02
#### PASS 12 seconds
```
2025-07-02T00:32:47.2493163Z === RUN   TestMigProject_basic
2025-07-02T00:32:47.2493533Z --- PASS: TestMigProject_basic (12.41s)
```
### 2025-07-03
#### PASS 9 seconds
```
2025-07-03T00:32:13.2674895Z === RUN   TestMigProject_basic
2025-07-03T00:32:13.2675307Z --- PASS: TestMigProject_basic (9.29s)
```
### 2025-07-04
#### PASS 8 seconds
```
2025-07-04T00:31:54.7074593Z === RUN   TestMigProject_basic
2025-07-04T00:31:54.7074959Z --- PASS: TestMigProject_basic (8.60s)
```
### 2025-07-05
#### PASS 8 seconds
```
2025-07-05T00:30:58.9931906Z === RUN   TestMigProject_basic
2025-07-05T00:30:58.9932466Z --- PASS: TestMigProject_basic (8.35s)
```
### 2025-07-06
#### FAIL 37 seconds
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
### 2025-07-07
#### PASS 7 seconds
```
2025-07-07T00:34:47.5640258Z === RUN   TestMigProject_basic
2025-07-07T00:34:47.5640919Z --- PASS: TestMigProject_basic (7.80s)
```
### 2025-07-08
#### PASS 9 seconds
```
2025-07-08T00:32:04.0787366Z === RUN   TestMigProject_basic
2025-07-08T00:32:04.0787896Z --- PASS: TestMigProject_basic (9.60s)
```