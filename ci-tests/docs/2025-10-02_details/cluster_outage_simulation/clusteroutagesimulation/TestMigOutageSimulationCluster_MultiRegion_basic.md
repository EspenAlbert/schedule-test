# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) SKIP(x 8) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026090000) |  | dev | 10827.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 49 minutes
- 2025-09-04 PASS 41 minutes
- 2025-09-05 SKIP unknown
- 2025-09-06 PASS 39 minutes
- 2025-09-07 PASS 30 minutes
- 2025-09-08
  - PASS 36 minutes
  - PASS 35 minutes
  - PASS 38 minutes
- 2025-09-09 PASS 38 minutes
- 2025-09-10 SKIP unknown
- 2025-09-11 SKIP unknown
- 2025-09-12 SKIP unknown
- 2025-09-13 SKIP unknown
- 2025-09-14 SKIP unknown
- 2025-09-15
  - SKIP unknown
  - SKIP unknown
- 2025-09-16 PASS 31 minutes
- 2025-09-17 PASS 47 minutes
- 2025-09-18 PASS 51 minutes
- 2025-09-19 PASS 49 minutes
- 2025-09-20 PASS 49 minutes
- 2025-09-21 PASS 49 minutes
- 2025-09-22 PASS 48 minutes
- 2025-09-23 PASS 49 minutes
- 2025-09-24 PASS 49 minutes
- 2025-09-25 PASS 51 minutes
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 47 minutes
- 2025-09-28 PASS 58 minutes
- 2025-09-29 PASS an hour
- 2025-09-30
  - PASS 50 minutes
  - PASS 50 minutes
  - PASS 51 minutes
- 2025-10-01
  - PASS an hour
  - PASS 49 minutes
  - PASS an hour
  - PASS an hour
  - PASS 44 minutes
  - PASS 45 minutes
  - PASS 50 minutes
  - PASS 44 minutes
- 2025-10-02

### Error 2025-10-02T00:26:09+00:00
```
2025-10-02T00:26:09.3225840Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:09.3256288Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:34.3366768Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:34.3368717Z     pre_check.go:36: Time before creating cluster: 2025-10-02T00:26:34.336385495Z, ProjectID: 68ddc69fd2c00355743bf252, Cluster name: test-acc-tf-c-5500243856309010261
2025-10-02T03:26:36.3093988Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T03:26:36.3094579Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-02T03:26:36.3094985Z         
2025-10-02T03:26:36.3095236Z         Error: Error in create
2025-10-02T03:26:36.3095479Z         
2025-10-02T03:26:36.3095842Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-02T03:26:36.3096553Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-02T03:26:36.3097215Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-02T03:26:36.3097546Z         
2025-10-02T03:26:36.3097996Z         cluster=test-acc-tf-c-5500243856309010261 didn't reach desired state: IDLE,
2025-10-02T03:26:36.3098455Z         error: context deadline exceeded
2025-10-02T03:26:36.5215780Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10827.20s)
```
