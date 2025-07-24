# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:31](#error-2025-07-14t0031020000) |  | dev | timeout | 10802.02s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 33 minutes
- 2025-06-26 PASS 34 minutes
- 2025-06-27 PASS 33 minutes
- 2025-06-28 PASS 35 minutes
- 2025-06-29 PASS 37 minutes
- 2025-06-30 PASS 39 minutes
- 2025-07-01
  - PASS 33 minutes
  - PASS 35 minutes
  - PASS 33 minutes
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS 36 minutes
- 2025-07-02 PASS 35 minutes
- 2025-07-03 PASS 34 minutes
- 2025-07-04 PASS 31 minutes
- 2025-07-05 PASS 34 minutes
- 2025-07-06 PASS 34 minutes
- 2025-07-07 PASS 33 minutes
- 2025-07-08 PASS 33 minutes
- 2025-07-09 PASS 36 minutes
- 2025-07-10
  - PASS 36 minutes
  - PASS 35 minutes
- 2025-07-11 PASS 45 minutes
- 2025-07-12 PASS 36 minutes
- 2025-07-13 PASS 54 minutes
- 2025-07-14

### Error 2025-07-14T00:31:02+00:00
```
2025-07-14T00:31:02.3469714Z === RUN   TestAccSearchDeployment_timeoutTest
2025-07-14T00:31:05.9339171Z === CONT  TestAccSearchDeployment_timeoutTest
2025-07-14T03:31:07.0248051Z === NAME  TestAccSearchDeployment_timeoutTest
2025-07-14T03:31:07.0251034Z     resource_test.go:78: Step 1/5, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-14T03:31:07.0251789Z         
2025-07-14T03:31:07.0252962Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:07.0253812Z         
2025-07-14T03:31:07.0254290Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:07.0255200Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:07.0255785Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:07.0256094Z         
2025-07-14T03:31:07.0373520Z    test_name=TestAccSearchDeployment_basic test_terraform_path=/home/runner/work/_temp/c36c623a-bb84-47f3-ba5e-17a9a97d831e/terraform test_working_directory=/tmp/plugintest2071431831 test_step_number=1
2025-07-14T03:31:07.0858848Z --- FAIL: TestAccSearchDeployment_timeoutTest (10802.25s)
```

- 2025-07-15 PASS 37 minutes
- 2025-07-16 PASS 33 minutes
- 2025-07-17 PASS 35 minutes
- 2025-07-18 PASS 34 minutes
- 2025-07-19 PASS 35 minutes
- 2025-07-20 PASS 34 minutes
- 2025-07-21 PASS 30 minutes
- 2025-07-22 PASS 31 minutes
- 2025-07-23
  - PASS 36 minutes
  - PASS 33 minutes
- 2025-07-24 PASS 33 minutes