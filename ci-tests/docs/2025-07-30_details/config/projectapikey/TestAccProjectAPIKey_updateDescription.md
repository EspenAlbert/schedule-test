# config/projectapikey/TestAccProjectAPIKey_updateDescription Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | flaky_500 | 2.08s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 2.02s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 2.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 23 seconds
  - PASS 11 seconds
  - PASS 24 seconds
  - PASS 12 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 21 seconds
- 2025-07-04 PASS 14 seconds
- 2025-07-05 PASS 24 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
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

- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 24 seconds
- 2025-07-09 PASS 24 seconds
- 2025-07-10
  - PASS 11 seconds
  - FAIL 2 seconds

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.1983941Z === RUN   TestAccProjectAPIKey_updateDescription
2025-07-10T13:09:21.1994410Z === CONT  TestAccProjectAPIKey_updateDescription
2025-07-10T13:09:21.2089706Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-10T13:09:21.2090264Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:09:21.2090666Z         
2025-07-10T13:09:21.2091175Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2091577Z         
2025-07-10T13:09:21.2091898Z           with mongodbatlas_project_api_key.test,
2025-07-10T13:09:21.2092539Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-10T13:09:21.2093118Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-10T13:09:21.2093421Z         
2025-07-10T13:09:21.2099526Z    test_name=TestAccProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/4d88fbfe-d7c1-4ace-8448-f77c49f7b3e7/terraform test_working_directory=/tmp/plugintest2076877187
2025-07-10T13:09:21.2112366Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-10T13:09:21.2112934Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:09:21.2113361Z         
2025-07-10T13:09:21.2113872Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2114282Z         
2025-07-10T13:09:21.2114544Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.24s)
```

- 2025-07-11 PASS 16 seconds
- 2025-07-12 PASS 10 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8063947Z === RUN   TestAccProjectAPIKey_updateDescription
2025-07-13T00:34:20.8073614Z === CONT  TestAccProjectAPIKey_updateDescription
2025-07-13T00:34:20.8179757Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-13T00:34:20.8180701Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:34:20.8181396Z         
2025-07-13T00:34:20.8182269Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8182955Z         
2025-07-13T00:34:20.8183498Z           with mongodbatlas_project_api_key.test,
2025-07-13T00:34:20.8184578Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-13T00:34:20.8185589Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-13T00:34:20.8186099Z         
2025-07-13T00:34:20.8254126Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-13T00:34:20.8254703Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:34:20.8255125Z         
2025-07-13T00:34:20.8255638Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8256050Z         
2025-07-13T00:34:20.8256321Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.21s)
```

- 2025-07-14 PASS 23 seconds
- 2025-07-15 PASS 14 seconds
- 2025-07-16 PASS 16 seconds
- 2025-07-17 PASS 13 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 11 seconds
- 2025-07-20 PASS 9 seconds
- 2025-07-21 PASS 23 seconds
- 2025-07-22 PASS 15 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 20 seconds
- 2025-07-24 PASS 13 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 11 seconds
- 2025-07-27 PASS 21 seconds
- 2025-07-28 PASS 22 seconds
- 2025-07-29 PASS 13 seconds
- 2025-07-30 PASS 10 seconds