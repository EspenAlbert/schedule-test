# project/project/TestMigProject_withTeams Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 9 seconds
```
2025-07-01T08:36:27.6777872Z === RUN   TestMigProject_withTeams
2025-07-01T08:36:27.6778169Z --- PASS: TestMigProject_withTeams (9.18s)
```
### 2025-07-02
#### PASS 12 seconds
```
2025-07-02T00:32:47.2493874Z === RUN   TestMigProject_withTeams
2025-07-02T00:32:47.2494177Z --- PASS: TestMigProject_withTeams (12.31s)
```
### 2025-07-03
#### PASS 9 seconds
```
2025-07-03T00:32:13.2675644Z === RUN   TestMigProject_withTeams
2025-07-03T00:32:13.2675940Z --- PASS: TestMigProject_withTeams (9.82s)
```
### 2025-07-04
#### PASS 10 seconds
```
2025-07-04T00:31:54.7075319Z === RUN   TestMigProject_withTeams
2025-07-04T00:31:54.7075617Z --- PASS: TestMigProject_withTeams (10.26s)
```
### 2025-07-05
#### PASS 10 seconds
```
2025-07-05T00:30:58.9932989Z === RUN   TestMigProject_withTeams
2025-07-05T00:30:58.9933512Z --- PASS: TestMigProject_withTeams (10.33s)
```
### 2025-07-06
#### FAIL 33 seconds
```
2025-07-06T00:37:51.5470163Z === RUN   TestMigProject_withTeams
2025-07-06T00:37:51.5477734Z   
2025-07-06T00:37:51.5478181Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:37:51.5478583Z         
2025-07-06T00:37:51.5478941Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5479256Z         
2025-07-06T00:37:51.5479534Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5480101Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5480617Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5480892Z         
2025-07-06T00:37:51.5481313Z         error getting project (6869c430690ae45e168be10c): error getting project's
2025-07-06T00:37:51.5481747Z         limits (6869c430690ae45e168be10c):
2025-07-06T00:37:51.5482306Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c430690ae45e168be10c/limits
2025-07-06T00:37:51.5482958Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5484371Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5484763Z         BadRequestDetail: 
2025-07-06T00:37:51.5485029Z --- FAIL: TestMigProject_withTeams (33.93s)
```
### 2025-07-07
#### PASS 8 seconds
```
2025-07-07T00:34:47.5641351Z === RUN   TestMigProject_withTeams
2025-07-07T00:34:47.5641889Z --- PASS: TestMigProject_withTeams (8.83s)
```
### 2025-07-08
#### PASS 9 seconds
```
2025-07-08T00:32:04.0788354Z === RUN   TestMigProject_withTeams
2025-07-08T00:32:04.0788725Z --- PASS: TestMigProject_withTeams (9.87s)
```