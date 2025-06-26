# config/TestAccProjectAPIKey_updateDescription Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 24 seconds
```
2025-06-20T00:31:00.4527133Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-20T00:31:00.4537508Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-20T00:31:00.4550329Z --- PASS: TestAccProjectAPIKey_updateDescription (24.63s)
```
### 2025-06-21
#### PASS 11 seconds
```
2025-06-21T00:30:24.1480336Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-21T00:30:24.1492316Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-21T00:30:24.1511476Z --- PASS: TestAccProjectAPIKey_updateDescription (11.39s)
```
### 2025-06-22
#### FAIL a second
```
2025-06-22T00:33:39.3830751Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3841217Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3872625Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3873579Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3874511Z         
2025-06-22T00:33:39.3875454Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3876178Z         
2025-06-22T00:33:39.3876742Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.3877872Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.3878916Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.3879443Z         
2025-06-22T00:33:39.3955899Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3956915Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.3957664Z         
2025-06-22T00:33:39.3958582Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3959304Z         
2025-06-22T00:33:39.3959751Z --- FAIL: TestAccProjectAPIKey_updateDescription (1.78s)
```
### 2025-06-23
#### PASS 23 seconds
```
2025-06-23T00:33:10.6555998Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-23T00:33:10.6562589Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-23T00:33:10.6572864Z --- PASS: TestAccProjectAPIKey_updateDescription (23.49s)
```
### 2025-06-24
#### PASS 14 seconds
```
2025-06-24T00:30:45.8924588Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-24T00:30:45.8936086Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-24T00:30:45.8956563Z --- PASS: TestAccProjectAPIKey_updateDescription (14.23s)
```
### 2025-06-25
#### PASS 14 seconds
```
2025-06-25T00:31:06.5827473Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-25T00:31:06.5837779Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-25T00:31:06.5857631Z --- PASS: TestAccProjectAPIKey_updateDescription (14.47s)
```
### 2025-06-26
#### PASS 13 seconds
```
2025-06-26T00:31:01.9565418Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-26T00:31:01.9573167Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-26T00:31:01.9592376Z --- PASS: TestAccProjectAPIKey_updateDescription (13.10s)
```