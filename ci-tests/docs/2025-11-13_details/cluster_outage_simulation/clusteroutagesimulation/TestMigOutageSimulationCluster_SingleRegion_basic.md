# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 00:30](#error-2025-10-27t0030180000) |  | dev | timeout | 3852.02s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 42 minutes
- 2025-10-16 PASS 56 minutes
- 2025-10-17 PASS 44 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 42 minutes
- 2025-10-20 PASS 47 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 45 minutes
  - PASS 42 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS an hour
- 2025-10-25: MISSING
- 2025-10-26 PASS 41 minutes
- 2025-10-27

### Error 2025-10-27T00:30:18+00:00
```
2025-10-27T00:30:18.2831489Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-27T00:30:18.2832398Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5210838568800786101
2025-10-27T00:30:20.4196824Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-27T00:30:40.4332918Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-27T00:30:40.4334208Z     pre_check.go:36: Time before creating cluster: 2025-10-27T00:30:40.432845037Z, ProjectID: 68febd1a5c665f6c63cf15aa, Cluster name: test-acc-tf-c-5225149479880566919
2025-10-27T01:34:29.3715799Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-27T01:34:29.3716352Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:34:29.3716719Z         
2025-10-27T01:34:29.3717847Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68febd1a5c665f6c63cf15aa), Cluster (test-acc-tf-c-5225149479880566919): timeout while waiting for state to become 'SIMULATING' (last state: 'STARTING', timeout: 25m0s)
2025-10-27T01:34:29.3721497Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-27T01:34:29.3722486Z         
2025-10-27T01:34:29.3723118Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-27T01:34:29.3724338Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-27T01:34:29.3725422Z           40: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-27T01:34:29.3725972Z         
2025-10-27T01:34:30.5011378Z    test_name=TestMigOutageSimulationCluster_SingleRegion_basic test_working_directory=/tmp/plugintest3150354101 test_terraform_path=/home/runner/work/_temp/d8df2158-e145-476a-8853-2ff6cc3d2c82/terraform
2025-10-27T01:34:30.5013344Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T01:34:30.5014038Z         
2025-10-27T01:34:30.5014446Z         Error: Error in delete
2025-10-27T01:34:30.5014855Z         
2025-10-27T01:34:30.5015556Z         cluster name: test-acc-tf-c-5225149479880566919, API error details:
2025-10-27T01:34:30.5017055Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1a5c665f6c63cf15aa/clusters/test-acc-tf-c-5225149479880566919
2025-10-27T01:34:30.5018175Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-27T01:34:30.5019071Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-27T01:34:30.5020176Z         Detail: Cannot terminate cluster test-acc-tf-c-5225149479880566919 in project
2025-10-27T01:34:30.5021305Z         test-acc-tf-p-5210838568800786101 because it is undergoing a regional outage
2025-10-27T01:34:30.5022472Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-27T01:34:30.5023331Z         Request. Params: [test-acc-tf-c-5225149479880566919
2025-10-27T01:34:30.5024123Z         test-acc-tf-p-5210838568800786101], BadRequestDetail: 
2025-10-27T01:34:30.5113015Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (3852.23s)
```

- 2025-10-28: MISSING
- 2025-10-29 PASS 44 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 43 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 41 minutes
- 2025-11-03 PASS 42 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 44 minutes
  - PASS 43 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 43 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 39 minutes
- 2025-11-10 PASS 42 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 42 minutes
- 2025-11-13 PASS 42 minutes