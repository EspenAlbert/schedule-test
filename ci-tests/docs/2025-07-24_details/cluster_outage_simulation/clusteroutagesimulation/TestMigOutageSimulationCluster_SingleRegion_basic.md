# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029360000) |  | dev | timeout | 10810.03s
[2025-07-14 00:30](#error-2025-07-14t0030580000) |  | dev | timeout | 10810.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 22 minutes
- 2025-06-26 PASS 22 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 21 minutes
- 2025-06-29 PASS 23 minutes
- 2025-06-30 PASS 25 minutes
- 2025-07-01
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-07-02 PASS 25 minutes
- 2025-07-03 PASS 23 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06 PASS 22 minutes
- 2025-07-07 PASS 22 minutes
- 2025-07-08 PASS 24 minutes
- 2025-07-09 PASS 21 minutes
- 2025-07-10
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-07-11

### Error 2025-07-11T00:29:36+00:00
```
2025-07-11T00:29:36.1499484Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-11T00:29:36.1501622Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-7698023952515395739
2025-07-11T00:29:38.5246043Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-11T00:29:43.5250613Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-11T00:29:43.5252820Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:43.524618065Z, ProjectID: 68705af00642f25f3ba07996, Cluster name: test-acc-tf-c-5895472171240523108
2025-07-11T03:29:46.2474358Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-11T03:29:46.2475857Z     resource_cluster_outage_simulation_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:29:46.2476731Z         
2025-07-11T03:29:46.2478028Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:46.2478995Z         
2025-07-11T03:29:46.2479608Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-11T03:29:46.2480874Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-11T03:29:46.2481989Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-11T03:29:46.2482729Z         
2025-07-11T03:29:46.4311144Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (10810.28s)
```

- 2025-07-12 PASS 22 minutes
- 2025-07-13 PASS 25 minutes
- 2025-07-14

### Error 2025-07-14T00:30:58+00:00
```
2025-07-14T00:30:58.6370923Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-14T00:30:58.6374212Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-2595596938859561015
2025-07-14T00:31:01.3610046Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-14T00:31:06.3614073Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-14T00:31:06.3616230Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:06.361012892Z, ProjectID: 68744fc352cba864e5f0fa84, Cluster name: test-acc-tf-c-1715906158254793240
2025-07-14T03:31:09.2817354Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-07-14T03:31:09.2819798Z     resource_cluster_outage_simulation_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:09.2820610Z         
2025-07-14T03:31:09.2821825Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:09.2822723Z         
2025-07-14T03:31:09.2823375Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:09.2824461Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:09.2825119Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:09.2825450Z         
2025-07-14T03:31:09.4635948Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (10810.83s)
```

- 2025-07-15 PASS 24 minutes
- 2025-07-16 PASS 24 minutes
- 2025-07-17 PASS 22 minutes
- 2025-07-18 PASS 22 minutes
- 2025-07-19 PASS 21 minutes
- 2025-07-20 PASS 22 minutes
- 2025-07-21 PASS 23 minutes
- 2025-07-22 PASS 22 minutes
- 2025-07-23
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-07-24 PASS 22 minutes