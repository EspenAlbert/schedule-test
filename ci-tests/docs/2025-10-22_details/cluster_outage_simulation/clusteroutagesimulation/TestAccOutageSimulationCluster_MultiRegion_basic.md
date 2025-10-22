# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 5)
Success rate: 87.80%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026090000) |  | dev |  | 10815.08s
[2025-10-04 00:25](#error-2025-10-04t0025530000) |  | dev |  | 10825.08s
[2025-10-07 00:27](#error-2025-10-07t0027310000) |  | dev |  | 10805.08s
[2025-10-09 00:27](#error-2025-10-09t0027070000) |  | dev | timeout | 5515.04s
[2025-10-20 10:26](#error-2025-10-20t1026110000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e415a13b66d7cb5eb1c/clusters | dev | out_of_capacity | 15.06s

## Timeline
- 2025-09-22: MISSING
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

- 2025-10-03 PASS 56 minutes
- 2025-10-04

### Error 2025-10-04T00:25:53+00:00
```
2025-10-04T00:25:53.9716909Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-04T00:25:53.9727312Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-04T00:26:18.9879061Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-04T00:26:18.9881661Z     pre_check.go:36: Time before creating cluster: 2025-10-04T00:26:18.987556009Z, ProjectID: 68e0698f7ed8eb23693afc4d, Cluster name: test-acc-tf-c-6579923345965489629
2025-10-04T03:26:19.7347438Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-04T03:26:19.7348210Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-04T03:26:19.7348809Z         
2025-10-04T03:26:19.7349066Z         Error: Error in create
2025-10-04T03:26:19.7349391Z         
2025-10-04T03:26:19.7349755Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-04T03:26:19.7350555Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-04T03:26:19.7351309Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-04T03:26:19.7351641Z         
2025-10-04T03:26:19.7352182Z         cluster=test-acc-tf-c-6579923345965489629 didn't reach desired state: IDLE,
2025-10-04T03:26:19.7352749Z         error: context deadline exceeded
2025-10-04T03:26:19.7841086Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10825.81s)
```

- 2025-10-05 PASS 50 minutes
- 2025-10-06 PASS 47 minutes
- 2025-10-07

### Error 2025-10-07T00:27:31+00:00
```
2025-10-07T00:27:31.1109370Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-07T00:27:31.1116321Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-07T00:27:36.1118056Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-07T00:27:36.1120437Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:27:36.11151051Z, ProjectID: 68e45e71507f48738a07f9a3, Cluster name: test-acc-tf-c-5722505529529143183
2025-10-07T03:27:36.8867896Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-07T03:27:36.8868898Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-07T03:27:36.8869329Z         
2025-10-07T03:27:36.8869584Z         Error: Error in create
2025-10-07T03:27:36.8869929Z         
2025-10-07T03:27:36.8870289Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:27:36.8871108Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:27:36.8871952Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:27:36.8872409Z         
2025-10-07T03:27:36.8872859Z         cluster=test-acc-tf-c-5722505529529143183 didn't reach desired state: IDLE,
2025-10-07T03:27:36.8873323Z         error: context deadline exceeded
2025-10-07T03:27:36.9311431Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10805.82s)
```

- 2025-10-08 PASS 52 minutes
- 2025-10-09

### Error 2025-10-09T00:27:07+00:00
```
2025-10-09T00:27:07.7354873Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-09T00:27:07.7362936Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-09T00:27:17.7429552Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-09T00:27:17.7431143Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:27:17.742657931Z, ProjectID: 68e70159c2a3cd169303e70d, Cluster name: test-acc-tf-c-6571613873553779593
2025-10-09T01:59:02.7422419Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-09T01:59:02.7422966Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-09T01:59:02.7423328Z         
2025-10-09T01:59:02.7424596Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68e70159c2a3cd169303e70d), Cluster (test-acc-tf-c-6571613873553779593): timeout while waiting for state to become 'SIMULATING' (last state: 'STARTING', timeout: 25m0s)
2025-10-09T01:59:02.7426087Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T01:59:02.7427991Z         cleanup failed: error ending MongoDB Atlas Cluster Outage Simulation for Project (68e70159c2a3cd169303e70d), Cluster (test-acc-tf-c-6571613873553779593): timeout while waiting for state to become 'DELETED' (last state: 'RECOVERY_REQUESTED', timeout: 25m0s)
2025-10-09T01:59:02.7428894Z         
2025-10-09T01:59:02.7429289Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-09T01:59:02.7430458Z           on terraform_plugin_test.tf line 64, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-09T01:59:02.7431215Z           64: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-09T01:59:02.7431569Z         
2025-10-09T01:59:03.1647992Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T01:59:03.1648552Z         
2025-10-09T01:59:03.1648895Z         Error: Error in delete
2025-10-09T01:59:03.1649226Z         
2025-10-09T01:59:03.1649651Z         cluster name: test-acc-tf-c-6571613873553779593, API error details:
2025-10-09T01:59:03.1650726Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70159c2a3cd169303e70d/clusters/test-acc-tf-c-6571613873553779593
2025-10-09T01:59:03.1651565Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-09T01:59:03.1652168Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-09T01:59:03.1652870Z         Detail: Cannot terminate cluster test-acc-tf-c-6571613873553779593 in project
2025-10-09T01:59:03.1653746Z         test-acc-tf-p-1460378166713015499 because it is undergoing a regional outage
2025-10-09T01:59:03.1654403Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-09T01:59:03.1655294Z         Request. Params: [test-acc-tf-c-6571613873553779593
2025-10-09T01:59:03.1656108Z         test-acc-tf-p-1460378166713015499], BadRequestDetail: 
2025-10-09T01:59:03.1656991Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (5515.43s)
```

- 2025-10-10 PASS 51 minutes
- 2025-10-11 PASS 46 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 45 minutes
- 2025-10-14 PASS 58 minutes
- 2025-10-15 PASS 52 minutes
- 2025-10-16 PASS 55 minutes
- 2025-10-17 PASS 44 minutes
- 2025-10-18 PASS 48 minutes
- 2025-10-19 PASS 48 minutes
- 2025-10-20
  - PASS 43 minutes
  - FAIL 15 seconds

### Error 2025-10-20T10:26:11+00:00
```
2025-10-20T10:26:11.6941349Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-20T10:26:11.6950234Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-20T10:26:26.7074814Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-20T10:26:26.7076822Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:26:26.707139151Z, ProjectID: 68f60e415a13b66d7cb5eb1c, Cluster name: test-acc-tf-c-7156237391100647708
2025-10-20T10:26:27.2902816Z    test_terraform_path=/home/runner/work/_temp/cb6b8f44-472e-4b0a-a679-eb57756e8a25/terraform test_working_directory=/tmp/plugintest1997266617 test_step_number=1
2025-10-20T10:26:27.2903752Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-20T10:26:27.2904151Z         
2025-10-20T10:26:27.2904447Z         Error: Error in create
2025-10-20T10:26:27.2904677Z         
2025-10-20T10:26:27.2905182Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:26:27.2905979Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:26:27.2906574Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:26:27.2906882Z         
2025-10-20T10:26:27.2907245Z         cluster name: test-acc-tf-c-7156237391100647708, API error details:
2025-10-20T10:26:27.2907842Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e415a13b66d7cb5eb1c/clusters
2025-10-20T10:26:27.2908588Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:27.2909165Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:27.2909624Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:27.3356301Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (15.64s)
```

- 2025-10-21 PASS 47 minutes
- 2025-10-22
  - PASS 46 minutes
  - PASS 50 minutes