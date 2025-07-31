# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029380000) |  | dev | timeout | 10820.09s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10811.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 24 minutes
- 2025-07-03 PASS 26 minutes
- 2025-07-04 PASS 26 minutes
- 2025-07-05 PASS 25 minutes
- 2025-07-06 PASS 27 minutes
- 2025-07-07 PASS 23 minutes
- 2025-07-08 PASS 29 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 32 minutes
  - PASS 23 minutes
- 2025-07-11

### Error 2025-07-11T00:29:38+00:00
```
2025-07-11T00:29:38.5240451Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-11T00:29:38.5247485Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-11T00:29:58.5322808Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-11T00:29:58.5324829Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:58.531971299Z, ProjectID: 68705af00642f25f3ba07996, Cluster name: test-acc-tf-c-2295901865052270207
2025-07-11T01:08:44.6795608Z    test_name=TestAccOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/c1013c5c-6ddd-4a5c-878a-28377e377fac/terraform test_working_directory=/tmp/plugintest3116595434
2025-07-11T03:29:59.4099337Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-11T03:29:59.4100276Z     resource_cluster_outage_simulation_test.go:62: Step 1/1 error: Error running apply: exit status 1
2025-07-11T03:29:59.4100876Z         
2025-07-11T03:29:59.4101705Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:59.4102441Z         
2025-07-11T03:29:59.4102842Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-11T03:29:59.4103977Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-11T03:29:59.4104621Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-11T03:29:59.4104953Z         
2025-07-11T03:29:59.4583554Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10820.93s)
```

- 2025-07-12 PASS 26 minutes
- 2025-07-13 PASS 26 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.3607083Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-14T00:31:01.3611672Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-14T00:31:11.3636122Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-14T00:31:11.3640417Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:11.363305775Z, ProjectID: 68744fc352cba864e5f0fa84, Cluster name: test-acc-tf-c-4410948454834820009
2025-07-14T03:31:12.3778219Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-07-14T03:31:12.3779100Z     resource_cluster_outage_simulation_test.go:62: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:12.3779804Z         
2025-07-14T03:31:12.3780785Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:12.3781499Z         
2025-07-14T03:31:12.3782086Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:12.3783111Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:12.3783861Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:12.3784278Z         
2025-07-14T03:31:12.4282072Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10811.07s)
```

- 2025-07-15 PASS 23 minutes
- 2025-07-16 PASS 28 minutes
- 2025-07-17 PASS 28 minutes
- 2025-07-18 PASS 25 minutes
- 2025-07-19 PASS 29 minutes
- 2025-07-20 PASS 28 minutes
- 2025-07-21 PASS 26 minutes
- 2025-07-22 PASS 27 minutes
- 2025-07-23
  - PASS 27 minutes
  - PASS 27 minutes
- 2025-07-24 PASS 27 minutes
- 2025-07-25 PASS 24 minutes
- 2025-07-26 PASS 28 minutes
- 2025-07-27 PASS 29 minutes
- 2025-07-28 PASS 28 minutes
- 2025-07-29 PASS 32 minutes
- 2025-07-30 PASS 30 minutes
- 2025-07-31 PASS 37 minutes