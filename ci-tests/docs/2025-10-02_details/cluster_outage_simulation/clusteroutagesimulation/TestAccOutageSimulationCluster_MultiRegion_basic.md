# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026090000) |  | dev | 10815.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 48 minutes
- 2025-09-04 PASS 39 minutes
- 2025-09-05 PASS 33 minutes
- 2025-09-06 PASS 38 minutes
- 2025-09-07 PASS 29 minutes
- 2025-09-08
  - PASS 43 minutes
  - PASS 31 minutes
  - PASS 38 minutes
- 2025-09-09 PASS 39 minutes
- 2025-09-10 PASS 36 minutes
- 2025-09-11 PASS 33 minutes
- 2025-09-12 PASS 25 minutes
- 2025-09-13 PASS 35 minutes
- 2025-09-14 PASS 24 minutes
- 2025-09-15
  - PASS 32 minutes
  - PASS 29 minutes
- 2025-09-16 PASS 32 minutes
- 2025-09-17 PASS 50 minutes
- 2025-09-18 PASS 55 minutes
- 2025-09-19 PASS 50 minutes
- 2025-09-20 PASS 50 minutes
- 2025-09-21 PASS 49 minutes
- 2025-09-22 PASS 52 minutes
- 2025-09-23 PASS 51 minutes
- 2025-09-24 PASS 51 minutes
- 2025-09-25 PASS 55 minutes
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 50 minutes
- 2025-09-28 PASS 59 minutes
- 2025-09-29 PASS 53 minutes
- 2025-09-30
  - PASS 50 minutes
  - PASS 48 minutes
  - PASS 51 minutes
- 2025-10-01
  - PASS an hour
  - PASS 49 minutes
  - PASS 56 minutes
  - PASS an hour
  - PASS 43 minutes
  - PASS 47 minutes
  - PASS 59 minutes
  - PASS 45 minutes
- 2025-10-02

### Error 2025-10-02T00:26:09+00:00
```
2025-10-02T00:26:09.3234295Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:09.3254957Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:24.3310792Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:24.3312480Z     pre_check.go:36: Time before creating cluster: 2025-10-02T00:26:24.330703736Z, ProjectID: 68ddc69fd2c00355743bf252, Cluster name: test-acc-tf-c-5159531410364181988
2025-10-02T03:26:25.0456595Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-02T03:26:25.0457192Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-02T03:26:25.0457577Z         
2025-10-02T03:26:25.0457852Z         Error: Error in create
2025-10-02T03:26:25.0458162Z         
2025-10-02T03:26:25.0459207Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-02T03:26:25.0459991Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-02T03:26:25.0460679Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-02T03:26:25.0461042Z         
2025-10-02T03:26:25.0461522Z         cluster=test-acc-tf-c-5159531410364181988 didn't reach desired state: IDLE,
2025-10-02T03:26:25.0462002Z         error: context deadline exceeded
2025-10-02T03:26:25.0904887Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.77s)
```
