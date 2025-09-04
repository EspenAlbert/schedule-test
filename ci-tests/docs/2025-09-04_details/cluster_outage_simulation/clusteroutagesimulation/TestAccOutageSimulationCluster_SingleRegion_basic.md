# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-11 00:31](#error-2025-08-11t0031550000) | CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION /api/atlas/v2/groups/689939f909b64000724c1bd1/clusters/test-acc-tf-c-5667574827268395379 | dev |  | 2364.09s
[2025-08-24 00:30](#error-2025-08-24t0030410000) | CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION /api/atlas/v2/groups/68aa5d2d9bbb8c4ee1f82235/clusters/test-acc-tf-c-3613074640687316688 | qa |  | 1873.02s
[2025-09-01 00:30](#error-2025-09-01t0030120000) |  | dev | timeout | 10810.09s
[2025-09-01 07:57](#error-2025-09-01t0757110000) | CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION /api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-3150556516701663251 | dev |  | 2364.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 49 minutes
- 2025-08-07 PASS 37 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 41 minutes
- 2025-08-11

### Error 2025-08-11T00:31:55+00:00
```
2025-08-11T00:31:55.5736394Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-11T00:31:55.5746274Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-11T00:32:05.5814784Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-11T00:32:05.5818887Z     pre_check.go:40: Time before creating cluster: 2025-08-11T00:32:05.581197945Z, ProjectID: 689939f909b64000724c1bd1, Cluster name: test-acc-tf-c-5667574827268395379
2025-08-11T01:11:20.1726527Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-11T01:11:20.1727853Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-08-11T01:11:20.1728643Z         
2025-08-11T01:11:20.1729981Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (689939f909b64000724c1bd1), Cluster (test-acc-tf-c-5667574827268395379): context deadline exceeded
2025-08-11T01:11:20.1730668Z         
2025-08-11T01:11:20.1731251Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-08-11T01:11:20.1732162Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-08-11T01:11:20.1732890Z           39: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-08-11T01:11:20.1733242Z         
2025-08-11T01:11:20.5195016Z    test_name=TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-11T01:11:20.5195714Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-11T01:11:20.5196173Z         
2025-08-11T01:11:20.5199964Z         Error: error deleting advanced cluster (test-acc-tf-c-5667574827268395379): https://cloud-dev.mongodb.com/api/atlas/v2/groups/689939f909b64000724c1bd1/clusters/test-acc-tf-c-5667574827268395379 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION") Detail: Cannot terminate cluster test-acc-tf-c-5667574827268395379 in project test-acc-tf-p-8699970934399478669 because it is undergoing a regional outage simulation. End regional outage simulation and try again. Reason: Bad Request. Params: [test-acc-tf-c-5667574827268395379 test-acc-tf-p-8699970934399478669], BadRequestDetail: 
2025-08-11T01:11:20.5202298Z         
2025-08-11T01:11:20.5202609Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (2364.94s)
```

- 2025-08-12 PASS 34 minutes
- 2025-08-13 PASS 37 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15 PASS 23 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 48 minutes
- 2025-08-18 PASS 31 minutes
- 2025-08-19 PASS 34 minutes
- 2025-08-20
  - PASS 30 minutes
  - PASS 31 minutes
- 2025-08-21 PASS 28 minutes
- 2025-08-22 PASS 24 minutes
- 2025-08-23 PASS 26 minutes
- 2025-08-24

### Error 2025-08-24T00:30:41+00:00
```
2025-08-24T00:30:41.0861742Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-24T00:30:41.0869143Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-24T00:30:51.0913117Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-24T00:30:51.0915280Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:30:51.091048182Z, ProjectID: 68aa5d2d9bbb8c4ee1f82235, Cluster name: test-acc-tf-c-3613074640687316688
2025-08-24T01:01:54.0660188Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-08-24T01:01:54.0660857Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-08-24T01:01:54.0661303Z         
2025-08-24T01:01:54.0662249Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68aa5d2d9bbb8c4ee1f82235), Cluster (test-acc-tf-c-3613074640687316688): context deadline exceeded
2025-08-24T01:01:54.0662921Z         
2025-08-24T01:01:54.0663326Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-08-24T01:01:54.0664086Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-08-24T01:01:54.0664799Z           39: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-08-24T01:01:54.0665320Z         
2025-08-24T01:01:54.3021205Z    test_terraform_path=/home/runner/work/_temp/24ad7642-67a8-4c95-a6fd-0fb116b3e51b/terraform test_working_directory=/tmp/plugintest357419507
2025-08-24T01:01:54.3022194Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-24T01:01:54.3022624Z         
2025-08-24T01:01:54.3025882Z         Error: error deleting advanced cluster (test-acc-tf-c-3613074640687316688): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2d9bbb8c4ee1f82235/clusters/test-acc-tf-c-3613074640687316688 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION") Detail: Cannot terminate cluster test-acc-tf-c-3613074640687316688 in project test-acc-tf-p-6152223609301263613 because it is undergoing a regional outage simulation. End regional outage simulation and try again. Reason: Bad Request. Params: [test-acc-tf-c-3613074640687316688 test-acc-tf-p-6152223609301263613], BadRequestDetail: 
2025-08-24T01:01:54.3028317Z         
2025-08-24T01:01:54.3028635Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (1873.22s)
```

- 2025-08-25 PASS 45 minutes
- 2025-08-26 PASS 37 minutes
- 2025-08-27 PASS 36 minutes
- 2025-08-28 PASS 35 minutes
- 2025-08-29 PASS 40 minutes
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 33 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:12+00:00
```
2025-09-01T00:30:12.0833679Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T00:30:12.0842703Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T00:30:22.0913329Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T00:30:22.0914890Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:22.091013957Z, ProjectID: 68b4e9127af6b0372e941567, Cluster name: test-acc-tf-c-7935486921603833702
2025-09-01T03:30:22.9024509Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T03:30:22.9025349Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-09-01T03:30:22.9025881Z         
2025-09-01T03:30:22.9026780Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:22.9027422Z         
2025-09-01T03:30:22.9027783Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:30:22.9028484Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:30:22.9029520Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:30:22.9029858Z         
2025-09-01T03:30:22.9511690Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (10810.87s)
```

  - PASS an hour
  - FAIL 39 minutes

### Error 2025-09-01T07:57:11+00:00
```
2025-09-01T07:57:11.0236042Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T07:57:11.0245229Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T07:57:21.0322892Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T07:57:21.0325155Z     pre_check.go:40: Time before creating cluster: 2025-09-01T07:57:21.031956388Z, ProjectID: 68b551d47af6b0372e9a1e1e, Cluster name: test-acc-tf-c-3150556516701663251
2025-09-01T08:36:35.6376469Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-09-01T08:36:35.6377197Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:36:35.6377763Z         
2025-09-01T08:36:35.6379034Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68b551d47af6b0372e9a1e1e), Cluster (test-acc-tf-c-3150556516701663251): context deadline exceeded
2025-09-01T08:36:35.6379730Z         
2025-09-01T08:36:35.6380295Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-09-01T08:36:35.6381059Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-09-01T08:36:35.6381876Z           39: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-09-01T08:36:35.6382234Z         
2025-09-01T08:36:35.9427050Z    test_terraform_path=/home/runner/work/_temp/34a0a334-6fd0-4b14-a8ea-2c2e64630e75/terraform test_working_directory=/tmp/plugintest12757273 test_name=TestAccOutageSimulationCluster_SingleRegion_basic test_step_number=1
2025-09-01T08:36:35.9428259Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T08:36:35.9428719Z         
2025-09-01T08:36:35.9432177Z         Error: error deleting advanced cluster (test-acc-tf-c-3150556516701663251): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-3150556516701663251 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION") Detail: Cannot terminate cluster test-acc-tf-c-3150556516701663251 in project test-acc-tf-p-8188035823505379392 because it is undergoing a regional outage simulation. End regional outage simulation and try again. Reason: Bad Request. Params: [test-acc-tf-c-3150556516701663251 test-acc-tf-p-8188035823505379392], BadRequestDetail: 
2025-09-01T08:36:35.9435997Z         
2025-09-01T08:36:35.9436588Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (2364.92s)
```

  - PASS 31 minutes
  - PASS 28 minutes
  - PASS 31 minutes
  - PASS 32 minutes
  - PASS 30 minutes
- 2025-09-02 PASS 33 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 37 minutes