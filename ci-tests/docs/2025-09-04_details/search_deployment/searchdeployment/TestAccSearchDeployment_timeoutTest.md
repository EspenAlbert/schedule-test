# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030210000) |  | dev | timeout | 10804.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 51 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 45 minutes
- 2025-08-09 PASS 53 minutes
- 2025-08-10 PASS 55 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 50 minutes
- 2025-08-13 PASS 46 minutes
- 2025-08-14 PASS 50 minutes
- 2025-08-15 PASS 37 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 47 minutes
- 2025-08-19 PASS 49 minutes
- 2025-08-20
  - PASS 46 minutes
  - PASS 45 minutes
- 2025-08-21 PASS 43 minutes
- 2025-08-22 PASS 43 minutes
- 2025-08-23 PASS 44 minutes
- 2025-08-24 PASS 37 minutes
- 2025-08-25 PASS 38 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 55 minutes
- 2025-08-28 PASS 49 minutes
- 2025-08-29 PASS an hour
- 2025-08-30 PASS 49 minutes
- 2025-08-31 PASS 44 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:21+00:00
```
2025-09-01T00:30:21.0409783Z === RUN   TestAccSearchDeployment_timeoutTest
2025-09-01T00:30:24.8399806Z === CONT  TestAccSearchDeployment_timeoutTest
2025-09-01T03:30:25.7731218Z    test_terraform_path=/home/runner/work/_temp/7f968116-f88c-4f80-8dae-c0471491c1c1/terraform test_working_directory=/tmp/plugintest3097037848 test_step_number=1 test_name=TestAccSearchDeployment_timeoutTest
2025-09-01T03:30:25.7732767Z     resource_test.go:78: Step 1/5, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T03:30:25.7733302Z         
2025-09-01T03:30:25.7734109Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:25.7734805Z         
2025-09-01T03:30:25.7735269Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T03:30:25.7736075Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T03:30:25.7736694Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T03:30:25.7737086Z         
2025-09-01T03:30:25.8194764Z --- FAIL: TestAccSearchDeployment_timeoutTest (10804.71s)
```

  - PASS an hour
  - PASS an hour
  - PASS 42 minutes
  - PASS 40 minutes
  - PASS 46 minutes
  - PASS 47 minutes
  - PASS 44 minutes
- 2025-09-02 PASS 52 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 55 minutes