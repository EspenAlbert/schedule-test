# config/apikey/TestAccConfigDSAPIKeys_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029590000) |  | qa | 1.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 seconds
- 2025-04-13 PASS 3 seconds
- 2025-04-14 PASS 3 seconds
- 2025-04-15 PASS 2 seconds
- 2025-04-16
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-04-17 PASS 4 seconds
- 2025-04-18 PASS 4 seconds
- 2025-04-19 PASS 4 seconds
- 2025-04-20 PASS 3 seconds
- 2025-04-21 PASS 3 seconds
- 2025-04-22 PASS 3 seconds
- 2025-04-23 PASS 3 seconds
- 2025-04-24 PASS 3 seconds
- 2025-04-25 PASS 4 seconds
- 2025-04-26 PASS 3 seconds
- 2025-04-27 PASS 3 seconds
- 2025-04-28 PASS 4 seconds
- 2025-04-29 PASS 3 seconds
- 2025-04-30
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-05-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-02 PASS 4 seconds
- 2025-05-03 PASS 4 seconds
- 2025-05-04 PASS 2 seconds
- 2025-05-05 PASS 3 seconds
- 2025-05-06 PASS 3 seconds
- 2025-05-07 PASS 3 seconds
- 2025-05-08 PASS 4 seconds
- 2025-05-09 PASS 3 seconds
- 2025-05-10 PASS 3 seconds
- 2025-05-11

### Error 2025-05-11T00:29:59+00:00
```
2025-05-11T00:29:59.7617527Z === RUN   TestAccConfigDSAPIKeys_basic
2025-05-11T00:29:59.7622176Z === CONT  TestAccConfigDSAPIKeys_basic
2025-05-11T00:29:59.7636288Z   
2025-05-11T00:29:59.7657639Z === NAME  TestAccConfigDSAPIKeys_basic
2025-05-11T00:29:59.7658458Z     data_source_api_keys_test.go:21: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:59.7659129Z         
2025-05-11T00:29:59.7660236Z         Error: error create API key: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:59.7661087Z         
2025-05-11T00:29:59.7661760Z           with mongodbatlas_api_key.test,
2025-05-11T00:29:59.7662790Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_api_key" "test":
2025-05-11T00:29:59.7663882Z           12: 		resource "mongodbatlas_api_key" "test" {
2025-05-11T00:29:59.7664371Z         
2025-05-11T00:29:59.7677585Z    test_name=TestAccConfigDSAPIKey_basic
2025-05-11T00:29:59.7686542Z --- FAIL: TestAccConfigDSAPIKeys_basic (1.23s)
```

- 2025-05-12 PASS 3 seconds
- 2025-05-13
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-05-14 PASS 3 seconds
- 2025-05-15 PASS 4 seconds
- 2025-05-16 PASS 3 seconds
- 2025-05-17 PASS 3 seconds
- 2025-05-18 PASS 3 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20 PASS 2 seconds
- 2025-05-21 PASS 3 seconds
- 2025-05-22 PASS 3 seconds
- 2025-05-23 PASS 3 seconds
- 2025-05-24 PASS 3 seconds
- 2025-05-25 PASS 3 seconds
- 2025-05-26 PASS 3 seconds
- 2025-05-27 PASS 3 seconds
- 2025-05-28
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-29 PASS 3 seconds
- 2025-05-30 PASS 3 seconds
- 2025-05-31 PASS 3 seconds
- 2025-06-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-02
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-03 PASS 3 seconds
- 2025-06-04 PASS 3 seconds
- 2025-06-05 PASS 4 seconds
- 2025-06-06 PASS 3 seconds
- 2025-06-07 PASS 3 seconds
- 2025-06-08 PASS 2 seconds
- 2025-06-09 PASS 3 seconds
- 2025-06-10 PASS 3 seconds
- 2025-06-11
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-06-12 PASS 3 seconds
- 2025-06-13 PASS 2 seconds
- 2025-06-14 PASS 3 seconds
- 2025-06-15 PASS 3 seconds
- 2025-06-16 PASS 3 seconds
- 2025-06-17 PASS 3 seconds
- 2025-06-18
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-06-19 PASS 3 seconds
- 2025-06-20 PASS 3 seconds
- 2025-06-21 PASS 4 seconds
- 2025-06-22 PASS a second
- 2025-06-23 PASS 3 seconds
- 2025-06-24 PASS 3 seconds
- 2025-06-25 PASS 3 seconds
- 2025-06-26 PASS 3 seconds
- 2025-06-27 PASS 3 seconds
- 2025-06-28 PASS 3 seconds
- 2025-06-29 PASS a second
- 2025-06-30 PASS 3 seconds
- 2025-07-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-07-02 PASS 3 seconds
- 2025-07-03 PASS 3 seconds
- 2025-07-04 PASS 3 seconds
- 2025-07-05 PASS 4 seconds
- 2025-07-06 PASS 3 seconds
- 2025-07-07 PASS 3 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 3 seconds
- 2025-07-10 PASS 2 seconds