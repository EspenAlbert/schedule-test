# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 14 seconds
```
2025-06-20T00:31:00.4532815Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-20T00:31:00.4536392Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-20T00:31:00.4548327Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.84s)
```
### 2025-06-21
#### PASS 10 seconds
```
2025-06-21T00:30:24.1486497Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-21T00:30:24.1490390Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-21T00:30:24.1510675Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.65s)
```
### 2025-06-22
#### FAIL 7 seconds
```
2025-06-22T00:33:39.3835821Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.3842353Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.4082482Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.4083412Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.4084063Z         
2025-06-22T00:33:39.4084900Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4085558Z         
2025-06-22T00:33:39.4086069Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.4087088Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.4088034Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.4088523Z         
2025-06-22T00:33:39.4098260Z    test_step_number=1 test_name=TestAccProjectAPIKey_changingSingleProject test_terraform_path=/home/runner/work/_temp/deff8d4d-a237-4a7d-b7cc-d8fd6946c8bb/terraform test_working_directory=/tmp/plugintest3718775578
2025-06-22T00:33:39.4116344Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.4117437Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.4118222Z         
2025-06-22T00:33:39.4119351Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4121004Z         
2025-06-22T00:33:39.4121804Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (7.03s)
```
### 2025-06-23
#### PASS 13 seconds
```
2025-06-23T00:33:10.6559266Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-23T00:33:10.6561821Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-23T00:33:10.6571632Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (13.68s)
```
### 2025-06-24
#### PASS 10 seconds
```
2025-06-24T00:30:45.8930910Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-24T00:30:45.8936711Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-24T00:30:45.8955001Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.87s)
```
### 2025-06-25
#### PASS 11 seconds
```
2025-06-25T00:31:06.5832759Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-25T00:31:06.5836391Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-25T00:31:06.5856874Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.96s)
```
### 2025-06-26
#### PASS 11 seconds
```
2025-06-26T00:31:01.9569880Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-26T00:31:01.9574226Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-26T00:31:01.9591551Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.03s)
```