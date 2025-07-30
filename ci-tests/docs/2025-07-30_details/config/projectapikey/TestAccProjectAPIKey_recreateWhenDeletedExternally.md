# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | flaky_500 | 2.08s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 1.09s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 2.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 17 seconds
  - PASS 8 seconds
  - PASS 17 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 15 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 18 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
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

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 19 seconds
- 2025-07-09 PASS 18 seconds
- 2025-07-10
  - PASS 7 seconds
  - FAIL a second

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.1987814Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-10T13:09:21.1996978Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-10T13:09:21.2017102Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-10T13:09:21.2018361Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:09:21.2019080Z         
2025-07-10T13:09:21.2019968Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2020651Z         
2025-07-10T13:09:21.2021194Z           with mongodbatlas_project_api_key.test,
2025-07-10T13:09:21.2022255Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-10T13:09:21.2023229Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-10T13:09:21.2023733Z         
2025-07-10T13:09:21.2051869Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-10T13:09:21.2052510Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:09:21.2063693Z         
2025-07-10T13:09:21.2064400Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2064864Z         
2025-07-10T13:09:21.2065210Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (1.87s)
```

- 2025-07-11 PASS 12 seconds
- 2025-07-12 PASS 8 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8067383Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-13T00:34:20.8074792Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-13T00:34:20.8205410Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-13T00:34:20.8206369Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:34:20.8207031Z         
2025-07-13T00:34:20.8207892Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8208574Z         
2025-07-13T00:34:20.8209238Z           with mongodbatlas_project_api_key.test,
2025-07-13T00:34:20.8210519Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-13T00:34:20.8211524Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-13T00:34:20.8212025Z         
2025-07-13T00:34:20.8244717Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-13T00:34:20.8245324Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:34:20.8245754Z         
2025-07-13T00:34:20.8246263Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8246676Z         
2025-07-13T00:34:20.8247012Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.16s)
```

- 2025-07-14 PASS 17 seconds
- 2025-07-15 PASS 11 seconds
- 2025-07-16 PASS 12 seconds
- 2025-07-17 PASS 8 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20 PASS 7 seconds
- 2025-07-21 PASS 16 seconds
- 2025-07-22 PASS 12 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 14 seconds
- 2025-07-24 PASS 9 seconds
- 2025-07-25 PASS 8 seconds
- 2025-07-26 PASS 8 seconds
- 2025-07-27 PASS 15 seconds
- 2025-07-28 PASS 17 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 7 seconds