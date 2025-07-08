# config/projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 10 seconds
```
2025-07-01T08:35:29.4684853Z === RUN   TestAccProjectAPIKey_basic
2025-07-01T08:35:29.4699041Z === CONT  TestAccProjectAPIKey_basic
2025-07-01T08:35:29.4714327Z --- PASS: TestAccProjectAPIKey_basic (10.33s)
```
### 2025-07-02
#### PASS 9 seconds
```
2025-07-02T00:30:40.8685084Z === RUN   TestAccProjectAPIKey_basic
2025-07-02T00:30:40.8693173Z === CONT  TestAccProjectAPIKey_basic
2025-07-02T00:30:40.8701832Z --- PASS: TestAccProjectAPIKey_basic (9.28s)
```
### 2025-07-03
#### PASS 15 seconds
```
2025-07-03T00:31:32.1136799Z === RUN   TestAccProjectAPIKey_basic
2025-07-03T00:31:32.1152285Z === CONT  TestAccProjectAPIKey_basic
2025-07-03T00:31:32.1161544Z --- PASS: TestAccProjectAPIKey_basic (15.34s)
```
### 2025-07-04
#### PASS 9 seconds
```
2025-07-04T00:30:47.2509559Z === RUN   TestAccProjectAPIKey_basic
2025-07-04T00:30:47.2522285Z === CONT  TestAccProjectAPIKey_basic
2025-07-04T00:30:47.2536251Z --- PASS: TestAccProjectAPIKey_basic (9.82s)
```
### 2025-07-05
#### PASS 18 seconds
```
2025-07-05T00:30:14.7936485Z === RUN   TestAccProjectAPIKey_basic
2025-07-05T00:30:14.7947843Z === CONT  TestAccProjectAPIKey_basic
2025-07-05T00:30:14.7956567Z --- PASS: TestAccProjectAPIKey_basic (18.21s)
```
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
```
2025-07-07T00:33:18.3673988Z === RUN   TestAccProjectAPIKey_basic
2025-07-07T00:33:18.3692797Z === CONT  TestAccProjectAPIKey_basic
2025-07-07T00:33:18.3725797Z --- PASS: TestAccProjectAPIKey_basic (8.84s)
```
### 2025-07-08
#### PASS 18 seconds
```
2025-07-08T00:31:37.4381496Z === RUN   TestAccProjectAPIKey_basic
2025-07-08T00:31:37.4396145Z === CONT  TestAccProjectAPIKey_basic
2025-07-08T00:31:37.4411785Z --- PASS: TestAccProjectAPIKey_basic (18.16s)
```