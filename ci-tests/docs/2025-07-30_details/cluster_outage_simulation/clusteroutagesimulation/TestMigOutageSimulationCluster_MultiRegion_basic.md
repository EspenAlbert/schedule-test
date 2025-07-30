# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029380000) |  | dev | timeout | 10817.04s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10822.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 26 minutes
  - PASS 28 minutes
  - PASS 28 minutes
  - PASS 28 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 27 minutes
- 2025-07-04 PASS 37 minutes
- 2025-07-05 PASS 29 minutes
- 2025-07-06 PASS 25 minutes
- 2025-07-07 PASS 28 minutes
- 2025-07-08 PASS 25 minutes
- 2025-07-09 PASS 26 minutes
- 2025-07-10
  - PASS 31 minutes
  - PASS 24 minutes
- 2025-07-11

### Error 2025-07-11T00:29:38+00:00
```
2025-07-11T00:29:38.5233628Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-11T00:29:38.5248159Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-11T00:29:53.5305403Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-11T00:29:53.5307081Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:53.530260729Z, ProjectID: 68705af00642f25f3ba07996, Cluster name: test-acc-tf-c-2921469072785488900
2025-07-11T03:29:55.7759742Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-11T03:29:55.7760448Z     resource_cluster_outage_simulation_migration_test.go:14: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:29:55.7760923Z         
2025-07-11T03:29:55.7761624Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:55.7762152Z         
2025-07-11T03:29:55.7762905Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-11T03:29:55.7763590Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-11T03:29:55.7764223Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-11T03:29:55.7764550Z         
2025-07-11T03:29:55.9641847Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10817.44s)
```

- 2025-07-12 PASS 27 minutes
- 2025-07-13 PASS 32 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.3598272Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-14T00:31:01.3611023Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-14T00:31:21.3690313Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-14T00:31:21.3692014Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:21.368731472Z, ProjectID: 68744fc352cba864e5f0fa84, Cluster name: test-acc-tf-c-8692601125449666667
2025-07-14T03:31:09.2816621Z    test_terraform_path=/home/runner/work/_temp/0869eea0-6155-4865-9a98-53bd92ff585d/terraform test_name=TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-14T03:31:24.0625694Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-07-14T03:31:24.0626410Z     resource_cluster_outage_simulation_migration_test.go:14: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:24.0627106Z         
2025-07-14T03:31:24.0627840Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:24.0628384Z         
2025-07-14T03:31:24.0628735Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:24.0629440Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:24.0630344Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:24.0630672Z         
2025-07-14T03:31:24.2477165Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10822.89s)
```

- 2025-07-15 PASS 24 minutes
- 2025-07-16 PASS 23 minutes
- 2025-07-17 PASS 29 minutes
- 2025-07-18 PASS 31 minutes
- 2025-07-19 PASS 27 minutes
- 2025-07-20 PASS 23 minutes
- 2025-07-21 PASS 23 minutes
- 2025-07-22 PASS 28 minutes
- 2025-07-23
  - PASS 28 minutes
  - PASS 28 minutes
- 2025-07-24 PASS 30 minutes
- 2025-07-25 PASS 24 minutes
- 2025-07-26 PASS 28 minutes
- 2025-07-27 PASS 24 minutes
- 2025-07-28 PASS 28 minutes
- 2025-07-29 PASS 27 minutes
- 2025-07-30 PASS 30 minutes