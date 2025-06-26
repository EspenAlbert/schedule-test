# config/projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 23 seconds
```
2025-06-20T00:31:00.4528734Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-20T00:31:00.4538596Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-20T00:31:00.4549840Z --- PASS: TestAccProjectAPIKey_updateRole (23.97s)
```
### 2025-06-21
#### PASS 12 seconds
```
2025-06-21T00:30:24.1481477Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-21T00:30:24.1492895Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-21T00:30:24.1512186Z --- PASS: TestAccProjectAPIKey_updateRole (12.21s)
```
### 2025-06-22
#### FAIL a second
```
2025-06-22T00:33:39.3832078Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3839242Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3921290Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3922222Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3922925Z         
2025-06-22T00:33:39.3923835Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3924561Z         
2025-06-22T00:33:39.3925112Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.3926234Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.3927332Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.3927869Z         
2025-06-22T00:33:39.3936141Z    test_step_number=1 test_name=TestAccProjectAPIKey_basic
2025-06-22T00:33:39.3989306Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3990287Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.3991187Z         
2025-06-22T00:33:39.3992099Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3992821Z         
2025-06-22T00:33:39.3993224Z --- FAIL: TestAccProjectAPIKey_updateRole (1.89s)
```
### 2025-06-23
#### PASS 23 seconds
```
2025-06-23T00:33:10.6556653Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-23T00:33:10.6563543Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-23T00:33:10.6573355Z --- PASS: TestAccProjectAPIKey_updateRole (23.77s)
```
### 2025-06-24
#### PASS 14 seconds
```
2025-06-24T00:30:45.8925766Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-24T00:30:45.8934458Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-24T00:30:45.8955733Z --- PASS: TestAccProjectAPIKey_updateRole (14.14s)
```
### 2025-06-25
#### PASS 14 seconds
```
2025-06-25T00:31:06.5828645Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-25T00:31:06.5838988Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-25T00:31:06.5858298Z --- PASS: TestAccProjectAPIKey_updateRole (14.65s)
```
### 2025-06-26
#### PASS 13 seconds
```
2025-06-26T00:31:01.9566456Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-26T00:31:01.9576007Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-26T00:31:01.9592959Z --- PASS: TestAccProjectAPIKey_updateRole (13.73s)
```