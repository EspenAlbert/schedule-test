# autogen/clusterapi/TestAccClusterAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:32](#error-2025-07-11t0332310000) |  | dev | timeout | 10804.05s
[2025-07-14 03:33](#error-2025-07-14t0333200000) |  | dev | timeout | 10802.09s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 22 minutes
- 2025-07-03 PASS 23 minutes
- 2025-07-04 PASS 29 minutes
- 2025-07-05 PASS 23 minutes
- 2025-07-06 PASS 22 minutes
- 2025-07-07 PASS 20 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 23 minutes
- 2025-07-10
  - PASS 21 minutes
  - PASS 24 minutes
- 2025-07-11

### Error 2025-07-11T03:32:31+00:00
```
2025-07-11T03:32:31.4218187Z === RUN   TestAccClusterAPI_basic
2025-07-11T03:32:31.4220854Z     resource_test.go:17: Creating execution project: test-acc-tf-p-839030524878027967
2025-07-11T03:32:31.4222373Z === CONT  TestAccClusterAPI_basic
2025-07-11T03:32:31.4237995Z   
2025-07-11T03:32:31.4238667Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2025-07-11T03:32:31.4239255Z         
2025-07-11T03:32:31.4239749Z         Error: Error waiting for changes in Create
2025-07-11T03:32:31.4240208Z         
2025-07-11T03:32:31.4240690Z           with mongodbatlas_cluster_api.test,
2025-07-11T03:32:31.4241693Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-07-11T03:32:31.4242512Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-07-11T03:32:31.4242940Z         
2025-07-11T03:32:31.4243573Z         timeout while waiting for state to become 'IDLE' (last state: 'CREATING',
2025-07-11T03:32:31.4244165Z         timeout: 3h0m0s)
2025-07-11T03:32:31.4244546Z --- FAIL: TestAccClusterAPI_basic (10804.45s)
```

- 2025-07-12 PASS 22 minutes
- 2025-07-13 PASS 25 minutes
- 2025-07-14

### Error 2025-07-14T03:33:20+00:00
```
2025-07-14T03:33:20.6493437Z === RUN   TestAccClusterAPI_basic
2025-07-14T03:33:20.6496525Z     resource_test.go:17: Creating execution project: test-acc-tf-p-7562401647201812405
2025-07-14T03:33:20.6497993Z === CONT  TestAccClusterAPI_basic
2025-07-14T03:33:20.6510085Z    test_working_directory=/tmp/plugintest94306444 test_step_number=1
2025-07-14T03:33:20.6510959Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2025-07-14T03:33:20.6511632Z         
2025-07-14T03:33:20.6512250Z         Error: Error waiting for changes in Create
2025-07-14T03:33:20.6512795Z         
2025-07-14T03:33:20.6513366Z           with mongodbatlas_cluster_api.test,
2025-07-14T03:33:20.6514368Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-07-14T03:33:20.6514953Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-07-14T03:33:20.6515255Z         
2025-07-14T03:33:20.6515709Z         timeout while waiting for state to become 'IDLE' (last state: 'CREATING',
2025-07-14T03:33:20.6516128Z         timeout: 3h0m0s)
2025-07-14T03:33:20.6516407Z --- FAIL: TestAccClusterAPI_basic (10802.91s)
```

- 2025-07-15 PASS 23 minutes
- 2025-07-16 PASS 24 minutes
- 2025-07-17 PASS 24 minutes
- 2025-07-18 PASS 28 minutes
- 2025-07-19 PASS 22 minutes
- 2025-07-20 PASS 23 minutes
- 2025-07-21 PASS 22 minutes
- 2025-07-22 PASS 23 minutes
- 2025-07-23
  - PASS 24 minutes
  - PASS 25 minutes
- 2025-07-24 PASS 23 minutes
- 2025-07-25 PASS 22 minutes
- 2025-07-26 PASS 23 minutes
- 2025-07-27 PASS 26 minutes
- 2025-07-28 PASS 25 minutes
- 2025-07-29 PASS 25 minutes
- 2025-07-30 PASS 22 minutes
- 2025-07-31 PASS 26 minutes