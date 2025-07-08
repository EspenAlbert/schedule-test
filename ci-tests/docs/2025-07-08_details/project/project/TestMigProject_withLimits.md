# project/project/TestMigProject_withLimits Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 11 seconds
```
2025-07-01T08:36:27.6779549Z === RUN   TestMigProject_withLimits
2025-07-01T08:36:27.6780023Z --- PASS: TestMigProject_withLimits (11.68s)
```
### 2025-07-02
#### PASS 17 seconds
```
2025-07-02T00:32:47.2495939Z === RUN   TestMigProject_withLimits
2025-07-02T00:32:47.2496421Z --- PASS: TestMigProject_withLimits (17.05s)
```
### 2025-07-03
#### PASS 12 seconds
```
2025-07-03T00:32:13.2677004Z === RUN   TestMigProject_withLimits
2025-07-03T00:32:13.2677303Z --- PASS: TestMigProject_withLimits (12.67s)
```
### 2025-07-04
#### PASS 11 seconds
```
2025-07-04T00:31:54.7076971Z === RUN   TestMigProject_withLimits
2025-07-04T00:31:54.7077411Z --- PASS: TestMigProject_withLimits (11.45s)
```
### 2025-07-05
#### PASS 11 seconds
```
2025-07-05T00:30:58.9935272Z === RUN   TestMigProject_withLimits
2025-07-05T00:30:58.9935764Z --- PASS: TestMigProject_withLimits (11.73s)
```
### 2025-07-06
#### FAIL 44 seconds
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
### 2025-07-07
#### PASS 11 seconds
```
2025-07-07T00:34:47.5643679Z === RUN   TestMigProject_withLimits
2025-07-07T00:34:47.5644011Z --- PASS: TestMigProject_withLimits (11.99s)
```
### 2025-07-08
#### PASS 12 seconds
```
2025-07-08T00:32:04.0790430Z === RUN   TestMigProject_withLimits
2025-07-08T00:32:04.0790731Z --- PASS: TestMigProject_withLimits (12.43s)
```