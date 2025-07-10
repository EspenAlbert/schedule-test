# config/apikey/TestAccConfigRSAPIKey_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029590000) |  | qa | 1.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 5 seconds
- 2025-04-14 PASS 5 seconds
- 2025-04-15 PASS 4 seconds
- 2025-04-16
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-04-17 PASS 5 seconds
- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 5 seconds
- 2025-04-20 PASS 5 seconds
- 2025-04-21 PASS 5 seconds
- 2025-04-22 PASS 5 seconds
- 2025-04-23 PASS 4 seconds
- 2025-04-24 PASS 5 seconds
- 2025-04-25 PASS 6 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 5 seconds
- 2025-04-28 PASS 6 seconds
- 2025-04-29 PASS 5 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 7 seconds
- 2025-05-02 PASS 5 seconds
- 2025-05-03 PASS 5 seconds
- 2025-05-04 PASS 5 seconds
- 2025-05-05 PASS 5 seconds
- 2025-05-06 PASS 5 seconds
- 2025-05-07 PASS 6 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 4 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:29:59+00:00
```
2025-05-11T00:29:59.7619487Z === RUN   TestAccConfigRSAPIKey_basic
2025-05-11T00:29:59.7621669Z === CONT  TestAccConfigRSAPIKey_basic
2025-05-11T00:29:59.7636657Z === NAME  TestAccConfigRSAPIKey_basic
2025-05-11T00:29:59.7637551Z     resource_api_key_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:29:59.7638238Z         
2025-05-11T00:29:59.7639517Z         Error: error create API key: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:59.7640385Z         
2025-05-11T00:29:59.7640907Z           with mongodbatlas_api_key.test,
2025-05-11T00:29:59.7642110Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_api_key" "test":
2025-05-11T00:29:59.7643063Z           12: 		resource "mongodbatlas_api_key" "test" {
2025-05-11T00:29:59.7643611Z         
2025-05-11T00:29:59.7657097Z    test_working_directory=/tmp/plugintest1903320563
2025-05-11T00:29:59.7685430Z --- FAIL: TestAccConfigRSAPIKey_basic (1.21s)
```

- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 5 seconds
- 2025-05-18 PASS 4 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20 PASS 5 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22 PASS 5 seconds
- 2025-05-23 PASS 5 seconds
- 2025-05-24 PASS 5 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 5 seconds
- 2025-05-27 PASS 5 seconds
- 2025-05-28
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-05-29 PASS 5 seconds
- 2025-05-30 PASS 5 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-02
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-03 PASS 5 seconds
- 2025-06-04 PASS 5 seconds
- 2025-06-05 PASS 6 seconds
- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 4 seconds
- 2025-06-09 PASS 5 seconds
- 2025-06-10 PASS 5 seconds
- 2025-06-11
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-12 PASS 5 seconds
- 2025-06-13 PASS 5 seconds
- 2025-06-14 PASS 5 seconds
- 2025-06-15 PASS 5 seconds
- 2025-06-16 PASS 5 seconds
- 2025-06-17 PASS 5 seconds
- 2025-06-18
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 6 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22 PASS 2 seconds
- 2025-06-23 PASS 5 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25 PASS 5 seconds
- 2025-06-26 PASS 5 seconds
- 2025-06-27 PASS 5 seconds
- 2025-06-28 PASS 4 seconds
- 2025-06-29 PASS 2 seconds
- 2025-06-30 PASS 4 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 4 seconds
- 2025-07-04 PASS 4 seconds
- 2025-07-05 PASS 5 seconds
- 2025-07-06 PASS 5 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10 PASS 4 seconds