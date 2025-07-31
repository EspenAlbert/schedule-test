# config/projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | flaky_500 | 2.06s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 2.00s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 1.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 15 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 18 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
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

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 18 seconds
- 2025-07-09 PASS 17 seconds
- 2025-07-10
  - PASS 8 seconds
  - FAIL 2 seconds

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.1981252Z === RUN   TestAccProjectAPIKey_basic
2025-07-10T13:09:21.1996121Z === CONT  TestAccProjectAPIKey_basic
2025-07-10T13:09:21.2040017Z === NAME  TestAccProjectAPIKey_basic
2025-07-10T13:09:21.2040531Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:09:21.2040935Z         
2025-07-10T13:09:21.2041460Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2041868Z         
2025-07-10T13:09:21.2042187Z           with mongodbatlas_project_api_key.test,
2025-07-10T13:09:21.2042818Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-10T13:09:21.2043399Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-10T13:09:21.2043697Z         
2025-07-10T13:09:21.2100278Z === NAME  TestAccProjectAPIKey_basic
2025-07-10T13:09:21.2100818Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:09:21.2101244Z         
2025-07-10T13:09:21.2101761Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2102163Z         
2025-07-10T13:09:21.2102388Z --- FAIL: TestAccProjectAPIKey_basic (2.01s)
```

- 2025-07-11 PASS 11 seconds
- 2025-07-12 PASS 7 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8061310Z === RUN   TestAccProjectAPIKey_basic
2025-07-13T00:34:20.8076011Z === CONT  TestAccProjectAPIKey_basic
2025-07-13T00:34:20.8124161Z   
2025-07-13T00:34:20.8124883Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:34:20.8125550Z         
2025-07-13T00:34:20.8126428Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8127117Z         
2025-07-13T00:34:20.8127655Z           with mongodbatlas_project_api_key.test,
2025-07-13T00:34:20.8128892Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-13T00:34:20.8129904Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-13T00:34:20.8130407Z         
2025-07-13T00:34:20.8218896Z === NAME  TestAccProjectAPIKey_basic
2025-07-13T00:34:20.8219864Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:34:20.8220596Z         
2025-07-13T00:34:20.8221509Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8222230Z         
2025-07-13T00:34:20.8222632Z --- FAIL: TestAccProjectAPIKey_basic (1.80s)
```

- 2025-07-14 PASS 16 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 12 seconds
- 2025-07-17 PASS 8 seconds
- 2025-07-18 PASS 9 seconds
- 2025-07-19 PASS 7 seconds
- 2025-07-20 PASS 6 seconds
- 2025-07-21 PASS 16 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 14 seconds
- 2025-07-24 PASS 9 seconds
- 2025-07-25 PASS 8 seconds
- 2025-07-26 PASS 9 seconds
- 2025-07-27 PASS 15 seconds
- 2025-07-28 PASS 16 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 7 seconds
- 2025-07-31 PASS 22 seconds