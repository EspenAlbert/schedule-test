# project/accesslistapikey/TestAccProjectRSAccessListAPIKey_SettingCIDRBlock Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL
Success rate: 99.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029530000) |  | qa | 0.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 4 seconds
- 2025-04-13 PASS 2 seconds
- 2025-04-14 PASS 4 seconds
- 2025-04-15 PASS 2 seconds
- 2025-04-16
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-04-17 PASS 2 seconds
- 2025-04-18 PASS 5 seconds
- 2025-04-19 PASS 4 seconds
- 2025-04-20 PASS 2 seconds
- 2025-04-21 PASS 3 seconds
- 2025-04-22 PASS 2 seconds
- 2025-04-23 PASS 4 seconds
- 2025-04-24 PASS 2 seconds
- 2025-04-25 PASS 2 seconds
- 2025-04-26 PASS 8 seconds
- 2025-04-27 PASS 4 seconds
- 2025-04-28 PASS 2 seconds
- 2025-04-29 PASS 2 seconds
- 2025-04-30
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-05-01
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 4 seconds
  - PASS 2 seconds
- 2025-05-02 PASS 3 seconds
- 2025-05-03 PASS 2 seconds
- 2025-05-04 PASS 2 seconds
- 2025-05-05 PASS 2 seconds
- 2025-05-06 PASS 2 seconds
- 2025-05-07 PASS 4 seconds
- 2025-05-08 PASS 2 seconds
- 2025-05-09 PASS 4 seconds
- 2025-05-10 PASS 3 seconds
- 2025-05-11

### Error 2025-05-11T00:29:53+00:00
```
2025-05-11T00:29:53.7029789Z === RUN   TestAccProjectRSAccessListAPIKey_SettingCIDRBlock
2025-05-11T00:29:53.7037941Z    test_step_number=1 test_working_directory=/tmp/plugintest938215696 test_name=TestAccProjectRSAccessListAPIKey_SettingCIDRBlock
2025-05-11T00:29:53.7038796Z     resource_access_list_api_key_test.go:64: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.7039239Z         
2025-05-11T00:29:53.7039903Z         Error: error create API key: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:53.7040388Z         
2025-05-11T00:29:53.7040707Z           with mongodbatlas_api_key.test,
2025-05-11T00:29:53.7041431Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_api_key" "test":
2025-05-11T00:29:53.7042258Z           13: 	resource "mongodbatlas_api_key" "test" {
2025-05-11T00:29:53.7043157Z         
2025-05-11T00:29:53.7043739Z --- FAIL: TestAccProjectRSAccessListAPIKey_SettingCIDRBlock (0.40s)
```

- 2025-05-12 PASS 4 seconds
- 2025-05-13
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-05-14 PASS 4 seconds
- 2025-05-15 PASS 3 seconds
- 2025-05-16 PASS 2 seconds
- 2025-05-17 PASS 3 seconds
- 2025-05-18 PASS 2 seconds
- 2025-05-19 PASS 2 seconds
- 2025-05-20 PASS 2 seconds
- 2025-05-21 PASS 2 seconds
- 2025-05-22 PASS 2 seconds
- 2025-05-23 PASS 2 seconds
- 2025-05-24 PASS 3 seconds
- 2025-05-25 PASS 2 seconds
- 2025-05-26 PASS 3 seconds
- 2025-05-27
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-05-28
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-29 PASS 4 seconds
- 2025-05-30 PASS 3 seconds
- 2025-05-31 PASS 2 seconds
- 2025-06-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-02
  - PASS 2 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-06-03 PASS 3 seconds
- 2025-06-04 PASS 4 seconds
- 2025-06-05 PASS 3 seconds
- 2025-06-06 PASS 4 seconds
- 2025-06-07 PASS 3 seconds
- 2025-06-08 PASS 4 seconds
- 2025-06-09 PASS 4 seconds
- 2025-06-10 PASS 5 seconds
- 2025-06-11
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-12 PASS 4 seconds
- 2025-06-13 PASS 5 seconds
- 2025-06-14 PASS 3 seconds
- 2025-06-15 PASS 4 seconds
- 2025-06-16 PASS 2 seconds
- 2025-06-17 PASS 2 seconds
- 2025-06-18 PASS 3 seconds
- 2025-06-19 PASS 2 seconds
- 2025-06-20 PASS 3 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22 PASS 2 seconds
- 2025-06-23 PASS 2 seconds
- 2025-06-24 PASS 4 seconds
- 2025-06-25 PASS 5 seconds
- 2025-06-26 PASS 4 seconds
- 2025-06-27 PASS 3 seconds
- 2025-06-28 PASS 2 seconds
- 2025-06-29 PASS 4 seconds
- 2025-06-30 PASS 5 seconds
- 2025-07-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-02 PASS 3 seconds
- 2025-07-03 PASS 2 seconds
- 2025-07-04 PASS 2 seconds
- 2025-07-05 PASS 2 seconds
- 2025-07-06 PASS 2 seconds
- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS 2 seconds
- 2025-07-10 PASS 4 seconds