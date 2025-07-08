# project/project/TestMigProject_withTeams Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 12 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 10 seconds
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
### 2025-07-08
#### PASS 9 seconds