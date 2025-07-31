# config/projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | flaky_500 | 2.07s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 2.02s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 2.00s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 11 seconds
- 2025-07-03 PASS 21 seconds
- 2025-07-04 PASS 14 seconds
- 2025-07-05 PASS 24 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
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

- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 24 seconds
- 2025-07-09 PASS 23 seconds
- 2025-07-10
  - PASS 11 seconds
  - FAIL 2 seconds

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.1985155Z === RUN   TestAccProjectAPIKey_updateRole
2025-07-10T13:09:21.1994974Z === CONT  TestAccProjectAPIKey_updateRole
2025-07-10T13:09:21.2073987Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-10T13:09:21.2074555Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:09:21.2075001Z         
2025-07-10T13:09:21.2075706Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2079486Z         
2025-07-10T13:09:21.2079835Z           with mongodbatlas_project_api_key.test,
2025-07-10T13:09:21.2080478Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-10T13:09:21.2081079Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-10T13:09:21.2081386Z         
2025-07-10T13:09:21.2118757Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-10T13:09:21.2119310Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:09:21.2119723Z         
2025-07-10T13:09:21.2120221Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2120625Z         
2025-07-10T13:09:21.2120853Z --- FAIL: TestAccProjectAPIKey_updateRole (2.24s)
```

- 2025-07-11 PASS 16 seconds
- 2025-07-12 PASS 11 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8065085Z === RUN   TestAccProjectAPIKey_updateRole
2025-07-13T00:34:20.8074168Z === CONT  TestAccProjectAPIKey_updateRole
2025-07-13T00:34:20.8158263Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-13T00:34:20.8159458Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:34:20.8160194Z         
2025-07-13T00:34:20.8161123Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8161850Z         
2025-07-13T00:34:20.8162426Z           with mongodbatlas_project_api_key.test,
2025-07-13T00:34:20.8163577Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-13T00:34:20.8164625Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-13T00:34:20.8165150Z         
2025-07-13T00:34:20.8234449Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-13T00:34:20.8235584Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:34:20.8236296Z         
2025-07-13T00:34:20.8236847Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8237252Z         
2025-07-13T00:34:20.8237492Z --- FAIL: TestAccProjectAPIKey_updateRole (2.00s)
```

- 2025-07-14 PASS 23 seconds
- 2025-07-15 PASS 14 seconds
- 2025-07-16 PASS 16 seconds
- 2025-07-17 PASS 12 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20 PASS 9 seconds
- 2025-07-21 PASS 22 seconds
- 2025-07-22 PASS 15 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 19 seconds
- 2025-07-24 PASS 14 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 11 seconds
- 2025-07-27 PASS 21 seconds
- 2025-07-28 PASS 23 seconds
- 2025-07-29 PASS 13 seconds
- 2025-07-30 PASS 9 seconds
- 2025-07-31 PASS 30 seconds