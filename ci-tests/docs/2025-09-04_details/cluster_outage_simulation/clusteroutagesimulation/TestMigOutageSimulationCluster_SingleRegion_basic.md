# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3) SKIP(x 3)
Success rate: 91.43%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-11 00:31](#error-2025-08-11t0031520000) | CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION /api/atlas/v2/groups/689939f909b64000724c1bd1/clusters/test-acc-tf-c-7635990790182465159 | dev |  | 2365.03s
[2025-09-01 00:30](#error-2025-09-01t0030100000) |  | dev | timeout | 10809.04s
[2025-09-01 07:57](#error-2025-09-01t0757080000) | CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION /api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-5119814722718128984 | dev |  | 2365.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 36 minutes
- 2025-08-07 PASS 38 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 39 minutes
- 2025-08-11

### Error 2025-08-11T00:31:52+00:00
```
2025-08-11T00:31:52.8411767Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-08-11T00:31:52.8414461Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-8699970934399478669
2025-08-11T00:31:55.5745866Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-08-11T00:32:00.5791756Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-08-11T00:32:00.5794153Z     pre_check.go:40: Time before creating cluster: 2025-08-11T00:32:00.578571914Z, ProjectID: 689939f909b64000724c1bd1, Cluster name: test-acc-tf-c-7635990790182465159
2025-08-11T01:11:17.6330250Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-08-11T01:11:17.6332795Z     resource_cluster_outage_simulation_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-08-11T01:11:17.6333548Z         
2025-08-11T01:11:17.6335146Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (689939f909b64000724c1bd1), Cluster (test-acc-tf-c-7635990790182465159): context deadline exceeded
2025-08-11T01:11:17.6336237Z         
2025-08-11T01:11:17.6336650Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-08-11T01:11:17.6337815Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-08-11T01:11:17.6338568Z           41: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-08-11T01:11:17.6338921Z         
2025-08-11T01:11:18.1700446Z    test_terraform_path=/home/runner/work/_temp/281625ac-ef15-40be-9d31-09103678421d/terraform test_step_number=1
2025-08-11T01:11:18.1701909Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-11T01:11:18.1702644Z         
2025-08-11T01:11:18.1708848Z         Error: error deleting advanced cluster (test-acc-tf-c-7635990790182465159): https://cloud-dev.mongodb.com/api/atlas/v2/groups/689939f909b64000724c1bd1/clusters/test-acc-tf-c-7635990790182465159 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION") Detail: Cannot terminate cluster test-acc-tf-c-7635990790182465159 in project test-acc-tf-p-8699970934399478669 because it is undergoing a regional outage simulation. End regional outage simulation and try again. Reason: Bad Request. Params: [test-acc-tf-c-7635990790182465159 test-acc-tf-p-8699970934399478669], BadRequestDetail: 
2025-08-11T01:11:18.1712703Z         
2025-08-11T01:11:18.1814676Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (2365.34s)
```

- 2025-08-12 PASS 32 minutes
- 2025-08-13 PASS 36 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15 SKIP unknown
- 2025-08-16 PASS 55 minutes
- 2025-08-17 PASS 46 minutes
- 2025-08-18 PASS 32 minutes
- 2025-08-19 PASS 34 minutes
- 2025-08-20
  - PASS 30 minutes
  - PASS 30 minutes
- 2025-08-21 PASS 27 minutes
- 2025-08-22 SKIP unknown
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 33 minutes
- 2025-08-25 PASS 52 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 41 minutes
- 2025-08-28 PASS 33 minutes
- 2025-08-29 SKIP unknown
- 2025-08-30 PASS 33 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:10+00:00
```
2025-09-01T00:30:10.0895714Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T00:30:10.0897761Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-4062639161941729506
2025-09-01T00:30:12.0842060Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T00:30:17.0885592Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T00:30:17.0888395Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:17.088230891Z, ProjectID: 68b4e9127af6b0372e941567, Cluster name: test-acc-tf-c-1759053126831760808
2025-09-01T03:30:19.2917154Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T03:30:19.2919652Z     resource_cluster_outage_simulation_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:30:19.2920437Z         
2025-09-01T03:30:19.2921667Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:19.2922596Z         
2025-09-01T03:30:19.2923272Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:30:19.2924326Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:30:19.2925001Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:30:19.2925342Z         
2025-09-01T03:30:19.4736661Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (10809.38s)
```

  - PASS an hour
  - FAIL 39 minutes

### Error 2025-09-01T07:57:08+00:00
```
2025-09-01T07:57:08.1194644Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T07:57:08.1199586Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-8188035823505379392
2025-09-01T07:57:11.0244647Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T07:57:16.0288741Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T07:57:16.0290730Z     pre_check.go:40: Time before creating cluster: 2025-09-01T07:57:16.028422507Z, ProjectID: 68b551d47af6b0372e9a1e1e, Cluster name: test-acc-tf-c-5119814722718128984
2025-09-01T08:36:32.6103909Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-09-01T08:36:32.6106243Z     resource_cluster_outage_simulation_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-09-01T08:36:32.6107000Z         
2025-09-01T08:36:32.6108601Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68b551d47af6b0372e9a1e1e), Cluster (test-acc-tf-c-5119814722718128984): context deadline exceeded
2025-09-01T08:36:32.6109693Z         
2025-09-01T08:36:32.6110645Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-09-01T08:36:32.6111447Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-09-01T08:36:32.6112203Z           41: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-09-01T08:36:32.6112597Z         
2025-09-01T08:36:33.1781526Z    test_step_number=1 test_working_directory=/tmp/plugintest3452644972
2025-09-01T08:36:33.1782658Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T08:36:33.1783391Z         
2025-09-01T08:36:33.1789282Z         Error: error deleting advanced cluster (test-acc-tf-c-5119814722718128984): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-5119814722718128984 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION") Detail: Cannot terminate cluster test-acc-tf-c-5119814722718128984 in project test-acc-tf-p-8188035823505379392 because it is undergoing a regional outage simulation. End regional outage simulation and try again. Reason: Bad Request. Params: [test-acc-tf-c-5119814722718128984 test-acc-tf-p-8188035823505379392], BadRequestDetail: 
2025-09-01T08:36:33.1793463Z         
2025-09-01T08:36:33.1897824Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (2365.07s)
```

  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 31 minutes
  - PASS 32 minutes
  - PASS 30 minutes
- 2025-09-02 PASS 36 minutes
- 2025-09-03 PASS 41 minutes
- 2025-09-04 PASS 35 minutes