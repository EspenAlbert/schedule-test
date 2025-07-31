# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029530000) |  | dev | timeout | 10801.03s
[2025-07-14 00:31](#error-2025-07-14t0031020000) |  | dev | timeout | 10801.02s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 33 minutes
- 2025-07-03 PASS 32 minutes
- 2025-07-04 PASS 31 minutes
- 2025-07-05 PASS 32 minutes
- 2025-07-06 PASS 33 minutes
- 2025-07-07 PASS 33 minutes
- 2025-07-08 PASS 32 minutes
- 2025-07-09 PASS 35 minutes
- 2025-07-10
  - PASS 31 minutes
  - PASS 30 minutes
- 2025-07-11

### Error 2025-07-11T00:29:53+00:00
```
2025-07-11T00:29:53.4413115Z === RUN   TestAccSearchDeployment_basic
2025-07-11T00:29:56.0178979Z === CONT  TestAccSearchDeployment_basic
2025-07-11T03:29:57.3106955Z === NAME  TestAccSearchDeployment_basic
2025-07-11T03:29:57.3107936Z     resource_test.go:40: Step 1/4 error: Error running apply: exit status 1
2025-07-11T03:29:57.3108671Z         
2025-07-11T03:29:57.3110267Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:57.3111008Z         
2025-07-11T03:29:57.3111515Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T03:29:57.3112734Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T03:29:57.3113609Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T03:29:57.3114014Z         
2025-07-11T03:29:57.3466532Z    test_working_directory=/tmp/plugintest3488088884 test_step_number=1 test_name=TestAccSearchDeployment_multiRegion test_terraform_path=/home/runner/work/_temp/4c7cbdbe-c4be-4313-93e6-84b98ccba686/terraform
2025-07-11T03:29:57.3634641Z --- FAIL: TestAccSearchDeployment_basic (10801.35s)
```

- 2025-07-12 PASS 30 minutes
- 2025-07-13 PASS an hour
- 2025-07-14

### Error 2025-07-14T00:31:02+00:00
```
2025-07-14T00:31:02.3468147Z === RUN   TestAccSearchDeployment_basic
2025-07-14T00:31:05.9339783Z === CONT  TestAccSearchDeployment_basic
2025-07-14T03:31:07.0374816Z === NAME  TestAccSearchDeployment_basic
2025-07-14T03:31:07.0375790Z     resource_test.go:40: Step 1/4 error: Error running apply: exit status 1
2025-07-14T03:31:07.0376430Z         
2025-07-14T03:31:07.0377704Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:07.0378652Z         
2025-07-14T03:31:07.0379475Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:07.0380612Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:07.0381627Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:07.0382140Z         
2025-07-14T03:31:07.0691756Z    test_name=TestAccSearchDeployment_multiRegion test_terraform_path=/home/runner/work/_temp/c36c623a-bb84-47f3-ba5e-17a9a97d831e/terraform test_working_directory=/tmp/plugintest1473930460 test_step_number=1
2025-07-14T03:31:07.1080625Z --- FAIL: TestAccSearchDeployment_basic (10801.17s)
```

- 2025-07-15 PASS 32 minutes
- 2025-07-16 PASS 32 minutes
- 2025-07-17 PASS 32 minutes
- 2025-07-18 PASS 29 minutes
- 2025-07-19 PASS 34 minutes
- 2025-07-20 PASS 31 minutes
- 2025-07-21 PASS 33 minutes
- 2025-07-22 PASS 31 minutes
- 2025-07-23
  - PASS 34 minutes
  - PASS 32 minutes
- 2025-07-24 PASS 31 minutes
- 2025-07-25 PASS 35 minutes
- 2025-07-26 PASS 35 minutes
- 2025-07-27 PASS 35 minutes
- 2025-07-28 PASS 30 minutes
- 2025-07-29 PASS 33 minutes
- 2025-07-30 PASS 37 minutes
- 2025-07-31 PASS 43 minutes