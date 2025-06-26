# project/TestMigProject_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 10 seconds
```
2025-06-20T00:32:00.0159821Z === RUN   TestMigProject_basic
2025-06-20T00:32:00.0160246Z --- PASS: TestMigProject_basic (10.42s)
```
### 2025-06-21
#### PASS 14 seconds
```
2025-06-21T00:34:00.9719610Z === RUN   TestMigProject_basic
2025-06-21T00:34:00.9720054Z --- PASS: TestMigProject_basic (14.01s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:36:57.8952638Z === RUN   TestMigProject_basic
2025-06-22T00:36:57.8960883Z   
2025-06-22T00:36:57.8961455Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:36:57.8961871Z         
2025-06-22T00:36:57.8962251Z         Error: error when getting project properties after create
2025-06-22T00:36:57.8962573Z         
2025-06-22T00:36:57.8962858Z           with mongodbatlas_project.test,
2025-06-22T00:36:57.8963429Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-22T00:36:57.8963962Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:36:57.8964241Z         
2025-06-22T00:36:57.8964936Z         error getting project (68574efdab82446d9bfb0f99): error getting project's
2025-06-22T00:36:57.8965525Z         limits (68574efdab82446d9bfb0f99):
2025-06-22T00:36:57.8966091Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efdab82446d9bfb0f99/limits
2025-06-22T00:36:57.8966942Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:36:57.8967509Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:36:57.8967903Z         BadRequestDetail: 
2025-06-22T00:36:57.8968175Z --- FAIL: TestMigProject_basic (34.63s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:33:38.2214923Z === RUN   TestMigProject_basic
2025-06-23T00:33:38.2215337Z --- PASS: TestMigProject_basic (8.74s)
```
### 2025-06-24
#### PASS 14 seconds
```
2025-06-24T00:34:16.6760042Z === RUN   TestMigProject_basic
2025-06-24T00:34:16.6760581Z --- PASS: TestMigProject_basic (14.82s)
```
### 2025-06-25
#### PASS 13 seconds
```
2025-06-25T00:34:38.2611900Z === RUN   TestMigProject_basic
2025-06-25T00:34:38.2612284Z --- PASS: TestMigProject_basic (13.68s)
```
### 2025-06-26
#### PASS 13 seconds
```
2025-06-26T00:33:55.7997896Z === RUN   TestMigProject_basic
2025-06-26T00:33:55.7998271Z --- PASS: TestMigProject_basic (13.41s)
```