# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 7 seconds
### 2025-07-03
#### PASS 15 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 18 seconds
### 2025-07-06
#### FAIL 2 seconds
```
2025-07-06T00:34:00.2826332Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2830703Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2863260Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2864049Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2864467Z         
2025-07-06T00:34:00.2864980Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2865535Z         
2025-07-06T00:34:00.2865858Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2866476Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2867051Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2867346Z         
2025-07-06T00:34:00.2931433Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2932452Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2933149Z         
2025-07-06T00:34:00.2934200Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2934863Z         
2025-07-06T00:34:00.2935507Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.77s)
```
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 19 seconds