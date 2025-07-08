# config/projectapikey/TestAccProjectAPIKey_updateDescription Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 12 seconds
### 2025-07-03
#### PASS 21 seconds
### 2025-07-04
#### PASS 14 seconds
### 2025-07-05
#### PASS 24 seconds
### 2025-07-06
#### FAIL 2 seconds
```
2025-07-06T00:34:00.2824171Z === RUN   TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2828726Z === CONT  TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2884885Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2885530Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2885930Z         
2025-07-06T00:34:00.2886429Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2886830Z         
2025-07-06T00:34:00.2887139Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2887754Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2888317Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2888609Z         
2025-07-06T00:34:00.2945811Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2946828Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2947540Z         
2025-07-06T00:34:00.2948431Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2949106Z         
2025-07-06T00:34:00.2949542Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.78s)
```
### 2025-07-07
#### PASS 11 seconds
### 2025-07-08
#### PASS 24 seconds