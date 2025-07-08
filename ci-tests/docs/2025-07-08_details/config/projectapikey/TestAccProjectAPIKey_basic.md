# config/projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 15 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 18 seconds
### 2025-07-06
#### FAIL 2 seconds
```
2025-07-06T00:34:00.2822907Z === RUN   TestAccProjectAPIKey_basic
2025-07-06T00:34:00.2831035Z === CONT  TestAccProjectAPIKey_basic
2025-07-06T00:34:00.2850387Z    test_name=TestAccProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/f4a4173d-86e1-4089-95dd-38ad7426626e/terraform
2025-07-06T00:34:00.2851159Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2851553Z         
2025-07-06T00:34:00.2852062Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2852461Z         
2025-07-06T00:34:00.2852770Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2853393Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2853964Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2854256Z         
2025-07-06T00:34:00.2895275Z === NAME  TestAccProjectAPIKey_basic
2025-07-06T00:34:00.2895873Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2896283Z         
2025-07-06T00:34:00.2896780Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2897179Z         
2025-07-06T00:34:00.2897399Z --- FAIL: TestAccProjectAPIKey_basic (2.62s)
```
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 18 seconds