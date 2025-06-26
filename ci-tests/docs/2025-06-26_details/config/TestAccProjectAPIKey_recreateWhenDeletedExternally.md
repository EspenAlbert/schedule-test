# config/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 18 seconds
```
2025-06-20T00:31:00.4531162Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-20T00:31:00.4538104Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-20T00:31:00.4549334Z --- PASS: TestAccProjectAPIKey_recreateWhenDeletedExternally (18.13s)
```
### 2025-06-21
#### PASS 9 seconds
```
2025-06-21T00:30:24.1483817Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-21T00:30:24.1491086Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-21T00:30:24.1509783Z --- PASS: TestAccProjectAPIKey_recreateWhenDeletedExternally (9.52s)
```
### 2025-06-22
#### FAIL a second
```
2025-06-22T00:33:39.3834391Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3843064Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3894406Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3895428Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3896148Z         
2025-06-22T00:33:39.3897054Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3897952Z         
2025-06-22T00:33:39.3898527Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.3899655Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.3900714Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.3901371Z         
2025-06-22T00:33:39.3972526Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3973595Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.3974345Z         
2025-06-22T00:33:39.3975249Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3975969Z         
2025-06-22T00:33:39.3976500Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (1.83s)
```
### 2025-06-23
#### PASS 17 seconds
```
2025-06-23T00:33:10.6558314Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-23T00:33:10.6562223Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-23T00:33:10.6572106Z --- PASS: TestAccProjectAPIKey_recreateWhenDeletedExternally (17.01s)
```
### 2025-06-24
#### PASS 10 seconds
```
2025-06-24T00:30:45.8929218Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-24T00:30:45.8937560Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-24T00:30:45.8953275Z --- PASS: TestAccProjectAPIKey_recreateWhenDeletedExternally (10.42s)
```
### 2025-06-25
#### PASS 11 seconds
```
2025-06-25T00:31:06.5831271Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-25T00:31:06.5837120Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-25T00:31:06.5856015Z --- PASS: TestAccProjectAPIKey_recreateWhenDeletedExternally (11.44s)
```
### 2025-06-26
#### PASS 10 seconds
```
2025-06-26T00:31:01.9568553Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-26T00:31:01.9574862Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-26T00:31:01.9590764Z --- PASS: TestAccProjectAPIKey_recreateWhenDeletedExternally (10.15s)
```