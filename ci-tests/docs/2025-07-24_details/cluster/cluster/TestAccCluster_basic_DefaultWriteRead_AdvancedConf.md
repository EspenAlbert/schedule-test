# cluster/cluster/TestAccCluster_basic_DefaultWriteRead_AdvancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10835.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 13 minutes
- 2025-06-26 PASS 16 minutes
- 2025-06-27 PASS 16 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 18 minutes
- 2025-07-01
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 17 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 15 minutes
- 2025-07-06 PASS 15 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-07-11 PASS 29 minutes
- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 28 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4792596Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-07-14T00:31:01.0438617Z === CONT  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-07-14T00:31:36.0205686Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-07-14T00:31:36.0206909Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:36.020327263Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-5622127279078297648
2025-07-14T03:31:36.7818954Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-07-14T03:31:36.7819907Z     resource_cluster_test.go:220: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:36.7820428Z         
2025-07-14T03:31:36.7821330Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:36.7821865Z         
2025-07-14T03:31:36.7822237Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:36.7822898Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:36.7823432Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:36.7823804Z         
2025-07-14T03:31:36.8248338Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (10835.78s)
```

- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 14 minutes
- 2025-07-19 PASS 17 minutes
- 2025-07-20 PASS 17 minutes
- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-07-24 PASS 15 minutes