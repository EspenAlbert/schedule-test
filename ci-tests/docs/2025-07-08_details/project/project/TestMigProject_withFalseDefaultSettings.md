# project/project/TestMigProject_withFalseDefaultSettings Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 8 seconds
```
2025-07-01T08:36:27.6778503Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-01T08:36:27.6778949Z --- PASS: TestMigProject_withFalseDefaultSettings (8.65s)
```
### 2025-07-02
#### PASS 10 seconds
```
2025-07-02T00:32:47.2494555Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-02T00:32:47.2495384Z --- PASS: TestMigProject_withFalseDefaultSettings (10.79s)
```
### 2025-07-03
#### PASS 7 seconds
```
2025-07-03T00:32:13.2676272Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-03T00:32:13.2676658Z --- PASS: TestMigProject_withFalseDefaultSettings (7.41s)
```
### 2025-07-04
#### PASS 7 seconds
```
2025-07-04T00:31:54.7075948Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-04T00:31:54.7076548Z --- PASS: TestMigProject_withFalseDefaultSettings (7.88s)
```
### 2025-07-05
#### PASS 6 seconds
```
2025-07-05T00:30:58.9934071Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-05T00:30:58.9934698Z --- PASS: TestMigProject_withFalseDefaultSettings (6.68s)
```
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:37:51.5485498Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-06T00:37:51.5492414Z    test_name=TestMigProject_withFalseDefaultSettings test_terraform_path=/home/runner/work/_temp/b4e56d1c-4b8c-4350-92f8-b71e14a8de1b/terraform test_working_directory=/tmp/plugintest561222977 test_step_number=1
2025-07-06T00:37:51.5493823Z     resource_project_migration_test.go:90: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:37:51.5494437Z         
2025-07-06T00:37:51.5494806Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5495120Z         
2025-07-06T00:37:51.5495400Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5495971Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5496502Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5496785Z         
2025-07-06T00:37:51.5497225Z         error getting project (6869c452690ae45e168be395): error getting project's
2025-07-06T00:37:51.5497656Z         limits (6869c452690ae45e168be395):
2025-07-06T00:37:51.5498210Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c452690ae45e168be395/limits
2025-07-06T00:37:51.5498853Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5499404Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5499786Z         BadRequestDetail: 
2025-07-06T00:37:51.5500089Z --- FAIL: TestMigProject_withFalseDefaultSettings (35.28s)
```
### 2025-07-07
#### PASS 8 seconds
```
2025-07-07T00:34:47.5642594Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-07T00:34:47.5643229Z --- PASS: TestMigProject_withFalseDefaultSettings (8.06s)
```
### 2025-07-08
#### PASS 7 seconds
```
2025-07-08T00:32:04.0789302Z === RUN   TestMigProject_withFalseDefaultSettings
2025-07-08T00:32:04.0789942Z --- PASS: TestMigProject_withFalseDefaultSettings (7.52s)
```