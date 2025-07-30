# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029380000) |  | dev |  | 2346.02s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10815.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 21 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 22 minutes
- 2025-07-06 PASS 23 minutes
- 2025-07-07 PASS 21 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 22 minutes
- 2025-07-10
  - PASS 21 minutes
  - PASS 23 minutes
- 2025-07-11

### Error 2025-07-11T00:29:38+00:00
```
2025-07-11T00:29:38.5238249Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-11T00:29:38.5246766Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-11T00:29:48.5273132Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-11T00:29:48.5276838Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:48.52699229Z, ProjectID: 68705af00642f25f3ba07996, Cluster name: test-acc-tf-c-8619410488823150570
2025-07-11T01:08:44.6796505Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-11T01:08:44.6798717Z     resource_cluster_outage_simulation_test.go:20: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T01:08:44.6799270Z         
2025-07-11T01:08:44.6800170Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (68705af00642f25f3ba07996), Cluster (test-acc-tf-c-8619410488823150570): context deadline exceeded
2025-07-11T01:08:44.6800835Z         
2025-07-11T01:08:44.6801139Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (2346.16s)
```

- 2025-07-12 PASS 22 minutes
- 2025-07-13 PASS 24 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.3602272Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-14T00:31:01.3610533Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-14T00:31:16.3668389Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-14T00:31:16.3670695Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:16.366509804Z, ProjectID: 68744fc352cba864e5f0fa84, Cluster name: test-acc-tf-c-7040753167882412608
2025-07-14T03:31:17.2574760Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-07-14T03:31:17.2575877Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:17.2576658Z         
2025-07-14T03:31:17.2577679Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:17.2578227Z         
2025-07-14T03:31:17.2578586Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:17.2579594Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:17.2580556Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:17.2580891Z         
2025-07-14T03:31:17.3045105Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (10815.94s)
```

- 2025-07-15 PASS 24 minutes
- 2025-07-16 PASS 24 minutes
- 2025-07-17 PASS 22 minutes
- 2025-07-18 PASS 22 minutes
- 2025-07-19 PASS 22 minutes
- 2025-07-20 PASS 23 minutes
- 2025-07-21 PASS 22 minutes
- 2025-07-22 PASS 22 minutes
- 2025-07-23
  - PASS 24 minutes
  - PASS 20 minutes
- 2025-07-24 PASS 22 minutes
- 2025-07-25 PASS 23 minutes
- 2025-07-26 PASS 23 minutes
- 2025-07-27 PASS 23 minutes
- 2025-07-28 PASS 21 minutes
- 2025-07-29 PASS 23 minutes
- 2025-07-30 PASS 22 minutes