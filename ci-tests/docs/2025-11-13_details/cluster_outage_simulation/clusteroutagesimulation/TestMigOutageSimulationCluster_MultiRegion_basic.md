# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 19) FAIL(x 2)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 00:30](#error-2025-10-27t0030200000) |  | dev | timeout | 4979.03s
[2025-11-07 00:27](#error-2025-11-07t0027490000) |  | dev | timeout | 2902.02s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 42 minutes
- 2025-10-16 PASS 55 minutes
- 2025-10-17 PASS 46 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 44 minutes
- 2025-10-20 PASS 45 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 53 minutes
  - PASS 45 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS an hour
- 2025-10-25: MISSING
- 2025-10-26 PASS 51 minutes
- 2025-10-27

### Error 2025-10-27T00:30:20+00:00
```
2025-10-27T00:30:20.4181888Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-27T00:30:20.4199509Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-27T00:30:45.4335276Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-27T00:30:45.4339252Z     pre_check.go:36: Time before creating cluster: 2025-10-27T00:30:45.433163224Z, ProjectID: 68febd1a5c665f6c63cf15aa, Cluster name: test-acc-tf-c-1935169528275210775
2025-10-27T01:09:07.5452692Z   diagnostic_summary=
2025-10-27T01:09:07.5456007Z    diagnostic_detail=""
2025-10-27T01:09:07.9546961Z    test_working_directory=/tmp/plugintest3284967394 test_step_number=1 test_name=TestAccClusterOutageSimulation_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/d8df2158-e145-476a-8853-2ff6cc3d2c82/terraform
2025-10-27T01:53:18.8064140Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-27T01:53:18.8064698Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:53:18.8065065Z         
2025-10-27T01:53:18.8066256Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68febd1a5c665f6c63cf15aa), Cluster (test-acc-tf-c-1935169528275210775): timeout while waiting for state to become 'SIMULATING' (last state: 'START_REQUESTED', timeout: 25m0s)
2025-10-27T01:53:18.8067594Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-27T01:53:18.8068125Z         
2025-10-27T01:53:18.8068518Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-27T01:53:18.8069207Z           on terraform_plugin_test.tf line 66, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-27T01:53:18.8069859Z           66: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-27T01:53:18.8070202Z         
2025-10-27T01:53:19.7317495Z    test_name=TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-27T01:53:19.7318144Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T01:53:19.7318535Z         
2025-10-27T01:53:19.7318884Z         Error: Error in delete
2025-10-27T01:53:19.7319350Z         
2025-10-27T01:53:19.7319781Z         cluster name: test-acc-tf-c-1935169528275210775, API error details:
2025-10-27T01:53:19.7320631Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1a5c665f6c63cf15aa/clusters/test-acc-tf-c-1935169528275210775
2025-10-27T01:53:19.7321457Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-27T01:53:19.7322000Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-27T01:53:19.7322740Z         Detail: Cannot terminate cluster test-acc-tf-c-1935169528275210775 in project
2025-10-27T01:53:19.7323437Z         test-acc-tf-p-5210838568800786101 because it is undergoing a regional outage
2025-10-27T01:53:19.7324066Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-27T01:53:19.7324539Z         Request. Params: [test-acc-tf-c-1935169528275210775
2025-10-27T01:53:19.7325084Z         test-acc-tf-p-5210838568800786101], BadRequestDetail: 
2025-10-27T01:53:19.7397099Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (4979.32s)
```

- 2025-10-28: MISSING
- 2025-10-29 PASS 56 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 47 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 46 minutes
- 2025-11-03 PASS 54 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS an hour
  - PASS 46 minutes
- 2025-11-06: MISSING
- 2025-11-07

### Error 2025-11-07T00:27:49+00:00
```
2025-11-07T00:27:49.3012696Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-11-07T00:27:49.3038068Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-11-07T00:28:14.3099765Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-11-07T00:28:14.3103769Z     pre_check.go:46: Time before creating cluster: 2025-11-07T00:28:14.30962937Z, ProjectID: 690d3d02a78815557f581af6, Cluster name: test-acc-tf-c-9005701992958332267
2025-11-07T01:16:11.4757248Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-11-07T01:16:11.4758720Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-07T01:16:11.4759564Z         
2025-11-07T01:16:11.4761561Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (690d3d02a78815557f581af6), Cluster (test-acc-tf-c-9005701992958332267): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2025-11-07T01:16:11.4762930Z         
2025-11-07T01:16:11.4889547Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (2902.19s)
```

- 2025-11-08: MISSING
- 2025-11-09 PASS 46 minutes
- 2025-11-10 PASS 53 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 51 minutes
- 2025-11-13 PASS 45 minutes