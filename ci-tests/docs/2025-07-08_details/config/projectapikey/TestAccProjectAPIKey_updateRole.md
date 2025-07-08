# config/projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### PASS 21 seconds
### 2025-07-04
#### PASS 14 seconds
### 2025-07-05
#### PASS 24 seconds
### 2025-07-06
#### FAIL 2 seconds
```
2025-07-06T00:34:00.2824930Z === RUN   TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2829702Z === CONT  TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2872527Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2873040Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2873428Z         
2025-07-06T00:34:00.2873928Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2874324Z         
2025-07-06T00:34:00.2874642Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2875496Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2876069Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2876366Z         
2025-07-06T00:34:00.2903974Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2904509Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2904920Z         
2025-07-06T00:34:00.2905844Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2906242Z         
2025-07-06T00:34:00.2906469Z --- FAIL: TestAccProjectAPIKey_updateRole (2.73s)
```
### 2025-07-07
#### PASS 10 seconds
### 2025-07-08
#### PASS 24 seconds