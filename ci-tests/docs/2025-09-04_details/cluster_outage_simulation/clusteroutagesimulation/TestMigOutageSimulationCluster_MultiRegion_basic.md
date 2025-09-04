# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) SKIP(x 3) FAIL(x 2)
Success rate: 94.29%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030120000) |  | dev | timeout | 10821.10s
[2025-09-01 07:57](#error-2025-09-01t0757110000) | CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION /api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-5454557511831664376 | dev |  | 3921.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 49 minutes
- 2025-08-07 PASS 38 minutes
- 2025-08-08 PASS 39 minutes
- 2025-08-09 PASS 35 minutes
- 2025-08-10 PASS 42 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 32 minutes
- 2025-08-13 PASS 44 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15 SKIP unknown
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 48 minutes
- 2025-08-18 PASS 36 minutes
- 2025-08-19 PASS 34 minutes
- 2025-08-20
  - PASS 36 minutes
  - PASS an hour
- 2025-08-21 PASS 31 minutes
- 2025-08-22 SKIP unknown
- 2025-08-23 PASS 37 minutes
- 2025-08-24 PASS an hour
- 2025-08-25 PASS 44 minutes
- 2025-08-26 PASS 37 minutes
- 2025-08-27 PASS 55 minutes
- 2025-08-28 PASS 34 minutes
- 2025-08-29 SKIP unknown
- 2025-08-30 PASS 36 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:12+00:00
```
2025-09-01T00:30:12.0829314Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T00:30:12.0844042Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T00:30:32.0984960Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T00:30:32.0986816Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:32.098187176Z, ProjectID: 68b4e9127af6b0372e941567, Cluster name: test-acc-tf-c-7925519943331203649
2025-09-01T03:30:19.2916876Z   
2025-09-01T03:30:33.8748578Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T03:30:33.8750078Z     resource_cluster_outage_simulation_migration_test.go:14: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:30:33.8751017Z         
2025-09-01T03:30:33.8752606Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:33.8753569Z         
2025-09-01T03:30:33.8754190Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:30:33.8755440Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:30:33.8756605Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:30:33.8757177Z         
2025-09-01T03:30:34.0624754Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10821.98s)
```

  - PASS an hour
  - FAIL an hour

### Error 2025-09-01T07:57:11+00:00
```
2025-09-01T07:57:11.0231864Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T07:57:11.0246504Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T07:57:31.0388288Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T07:57:31.0390015Z     pre_check.go:40: Time before creating cluster: 2025-09-01T07:57:31.038547951Z, ProjectID: 68b551d47af6b0372e9a1e1e, Cluster name: test-acc-tf-c-5454557511831664376
2025-09-01T08:36:32.6103223Z    test_working_directory=/tmp/plugintest3452644972 test_terraform_path=/home/runner/work/_temp/34a0a334-6fd0-4b14-a8ea-2c2e64630e75/terraform
2025-09-01T09:02:31.5997474Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-09-01T09:02:31.5999771Z     resource_cluster_outage_simulation_migration_test.go:14: Step 1/2 error: Error running apply: exit status 1
2025-09-01T09:02:31.6000727Z         
2025-09-01T09:02:31.6002329Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68b551d47af6b0372e9a1e1e), Cluster (test-acc-tf-c-5454557511831664376): context deadline exceeded
2025-09-01T09:02:31.6003382Z         
2025-09-01T09:02:31.6003827Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-09-01T09:02:31.6004612Z           on terraform_plugin_test.tf line 71, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-09-01T09:02:31.6005344Z           71: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-09-01T09:02:31.6005730Z         
2025-09-01T09:02:32.1914220Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T09:02:32.1914886Z         
2025-09-01T09:02:32.1919294Z         Error: error deleting advanced cluster (test-acc-tf-c-5454557511831664376): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-5454557511831664376 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION") Detail: Cannot terminate cluster test-acc-tf-c-5454557511831664376 in project test-acc-tf-p-8188035823505379392 because it is undergoing a regional outage simulation. End regional outage simulation and try again. Reason: Bad Request. Params: [test-acc-tf-c-5454557511831664376 test-acc-tf-p-8188035823505379392], BadRequestDetail: 
2025-09-01T09:02:32.1923288Z         
2025-09-01T09:02:32.2028856Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (3921.18s)
```

  - PASS 32 minutes
  - PASS 35 minutes
  - PASS 31 minutes
  - PASS 31 minutes
  - PASS 31 minutes
- 2025-09-02 PASS 36 minutes
- 2025-09-03 PASS 49 minutes
- 2025-09-04 PASS 41 minutes