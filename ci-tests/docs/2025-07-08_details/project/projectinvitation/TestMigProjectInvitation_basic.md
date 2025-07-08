# project/projectinvitation/TestMigProjectInvitation_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 9 seconds
```
2025-07-01T08:36:27.6837368Z === RUN   TestMigProjectInvitation_basic
2025-07-01T08:36:27.6837688Z --- PASS: TestMigProjectInvitation_basic (9.59s)
```
### 2025-07-02
#### PASS 12 seconds
```
2025-07-02T00:32:47.2557328Z === RUN   TestMigProjectInvitation_basic
2025-07-02T00:32:47.2557644Z --- PASS: TestMigProjectInvitation_basic (12.63s)
```
### 2025-07-03
#### PASS 9 seconds
```
2025-07-03T00:32:13.2731757Z === RUN   TestMigProjectInvitation_basic
2025-07-03T00:32:13.2732077Z --- PASS: TestMigProjectInvitation_basic (9.33s)
```
### 2025-07-04
#### PASS 8 seconds
```
2025-07-04T00:31:54.7140034Z === RUN   TestMigProjectInvitation_basic
2025-07-04T00:31:54.7140356Z --- PASS: TestMigProjectInvitation_basic (8.92s)
```
### 2025-07-05
#### PASS 8 seconds
```
2025-07-05T00:30:58.9993044Z === RUN   TestMigProjectInvitation_basic
2025-07-05T00:30:58.9993365Z --- PASS: TestMigProjectInvitation_basic (8.81s)
```
### 2025-07-06
#### FAIL 33 seconds
```
2025-07-06T00:37:51.5603223Z === RUN   TestMigProjectInvitation_basic
2025-07-06T00:37:51.5610524Z   
2025-07-06T00:37:51.5611028Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:37:51.5611476Z         
2025-07-06T00:37:51.5611838Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5612160Z         
2025-07-06T00:37:51.5612441Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5613020Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5613649Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5613932Z         
2025-07-06T00:37:51.5614352Z         error getting project (6869c42c690ae45e168be017): error getting project's
2025-07-06T00:37:51.5614788Z         limits (6869c42c690ae45e168be017):
2025-07-06T00:37:51.5615552Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c42c690ae45e168be017/limits
2025-07-06T00:37:51.5616387Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5616965Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5617345Z         BadRequestDetail: 
2025-07-06T00:37:51.5617638Z --- FAIL: TestMigProjectInvitation_basic (33.94s)
```
### 2025-07-07
#### PASS 8 seconds
```
2025-07-07T00:34:47.5699782Z === RUN   TestMigProjectInvitation_basic
2025-07-07T00:34:47.5700093Z --- PASS: TestMigProjectInvitation_basic (8.69s)
```
### 2025-07-08
#### PASS 10 seconds
```
2025-07-08T00:32:04.0844853Z === RUN   TestMigProjectInvitation_basic
2025-07-08T00:32:04.0845170Z --- PASS: TestMigProjectInvitation_basic (10.60s)
```