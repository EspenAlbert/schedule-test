# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030410000) |  | dev | timeout | 10815.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 29 minutes
- 2025-08-07 PASS 35 minutes
- 2025-08-08 PASS 30 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 33 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 29 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 26 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 49 minutes
- 2025-08-17 PASS 36 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 28 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 27 minutes
- 2025-08-21 PASS 25 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 20 minutes
- 2025-08-25 PASS 22 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 33 minutes
- 2025-08-28 PASS 26 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 26 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.7233633Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-01T00:30:44.5146512Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-01T00:30:59.5038786Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-01T00:30:59.5049132Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:59.503552724Z, ProjectID: 68b4e92e46ef690a79d70c0c, Cluster name: test-acc-tf-c-7259105677658014184
2025-09-01T03:31:00.3703597Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-01T03:31:00.3704461Z     resource_advanced_cluster_test.go:316: Step 1/4 error: Error running apply: exit status 1
2025-09-01T03:31:00.3705026Z         
2025-09-01T03:31:00.3706107Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:00.3706788Z         
2025-09-01T03:31:00.3707300Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T03:31:00.3708417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T03:31:00.3709096Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T03:31:00.3709445Z         
2025-09-01T03:31:00.4144441Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10815.92s)
```

  - PASS 34 minutes
  - PASS an hour
  - PASS 25 minutes
  - PASS 30 minutes
  - PASS 36 minutes
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-09-02 PASS 28 minutes
- 2025-09-03 PASS 20 minutes
- 2025-09-04 PASS 28 minutes