# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026090000) |  | dev |  | 10827.02s
[2025-10-04 00:25](#error-2025-10-04t0025530000) |  | dev |  | 10817.01s
[2025-10-07 00:27](#error-2025-10-07t0027310000) |  | dev |  | 10817.01s
[2025-10-09 00:27](#error-2025-10-09t0027070000) |  | dev | timeout | 4068.00s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 49 minutes
- 2025-09-24 PASS 49 minutes
- 2025-09-25 PASS 51 minutes
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 47 minutes
- 2025-09-28 PASS 58 minutes
- 2025-09-29 PASS an hour
- 2025-09-30
  - PASS 50 minutes
  - PASS 50 minutes
  - PASS 51 minutes
- 2025-10-01
  - PASS an hour
  - PASS 49 minutes
  - PASS an hour
  - PASS an hour
  - PASS 44 minutes
  - PASS 45 minutes
  - PASS 50 minutes
  - PASS 44 minutes
- 2025-10-02

### Error 2025-10-02T00:26:09+00:00
```
2025-10-02T00:26:09.3225840Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:09.3256288Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:34.3366768Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T00:26:34.3368717Z     pre_check.go:36: Time before creating cluster: 2025-10-02T00:26:34.336385495Z, ProjectID: 68ddc69fd2c00355743bf252, Cluster name: test-acc-tf-c-5500243856309010261
2025-10-02T03:26:36.3093988Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-02T03:26:36.3094579Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-02T03:26:36.3094985Z         
2025-10-02T03:26:36.3095236Z         Error: Error in create
2025-10-02T03:26:36.3095479Z         
2025-10-02T03:26:36.3095842Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-02T03:26:36.3096553Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-02T03:26:36.3097215Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-02T03:26:36.3097546Z         
2025-10-02T03:26:36.3097996Z         cluster=test-acc-tf-c-5500243856309010261 didn't reach desired state: IDLE,
2025-10-02T03:26:36.3098455Z         error: context deadline exceeded
2025-10-02T03:26:36.5215780Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10827.20s)
```

- 2025-10-03 PASS 53 minutes
- 2025-10-04

### Error 2025-10-04T00:25:53+00:00
```
2025-10-04T00:25:53.9709222Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-04T00:25:53.9726920Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-04T00:26:08.9811364Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-04T00:26:08.9813564Z     pre_check.go:36: Time before creating cluster: 2025-10-04T00:26:08.980805734Z, ProjectID: 68e0698f7ed8eb23693afc4d, Cluster name: test-acc-tf-c-1618444815430760454
2025-10-04T03:26:10.8726992Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-04T03:26:10.8728353Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-04T03:26:10.8729468Z         
2025-10-04T03:26:10.8729901Z         Error: Error in create
2025-10-04T03:26:10.8730317Z         
2025-10-04T03:26:10.8730933Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-04T03:26:10.8732152Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-04T03:26:10.8733511Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-04T03:26:10.8734109Z         
2025-10-04T03:26:10.8734880Z         cluster=test-acc-tf-c-1618444815430760454 didn't reach desired state: IDLE,
2025-10-04T03:26:10.8735677Z         error: context deadline exceeded
2025-10-04T03:26:11.0873404Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10817.12s)
```

- 2025-10-05 PASS 45 minutes
- 2025-10-06 PASS 48 minutes
- 2025-10-07

### Error 2025-10-07T00:27:31+00:00
```
2025-10-07T00:27:31.1101888Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-07T00:27:31.1117498Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-07T00:27:46.1152327Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-07T00:27:46.1153746Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:27:46.114949281Z, ProjectID: 68e45e71507f48738a07f9a3, Cluster name: test-acc-tf-c-7696786234176482415
2025-10-07T03:27:47.9610007Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-07T03:27:47.9610970Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:27:47.9611646Z         
2025-10-07T03:27:47.9612063Z         Error: Error in create
2025-10-07T03:27:47.9612454Z         
2025-10-07T03:27:47.9613051Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:27:47.9614301Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:27:47.9615424Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:27:47.9615993Z         
2025-10-07T03:27:47.9616765Z         cluster=test-acc-tf-c-7696786234176482415 didn't reach desired state: IDLE,
2025-10-07T03:27:47.9617559Z         error: context deadline exceeded
2025-10-07T03:27:48.1825591Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10817.07s)
```

- 2025-10-08 PASS 52 minutes
- 2025-10-09

### Error 2025-10-09T00:27:07+00:00
```
2025-10-09T00:27:07.7345736Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-09T00:27:07.7364104Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-09T00:27:32.7526058Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-09T00:27:32.7529399Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:27:32.752309013Z, ProjectID: 68e70159c2a3cd169303e70d, Cluster name: test-acc-tf-c-7546961319716233879
2025-10-09T01:23:06.8522526Z   
2025-10-09T01:34:54.8741125Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-09T01:34:54.8741737Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-09T01:34:54.8742159Z         
2025-10-09T01:34:54.8743531Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68e70159c2a3cd169303e70d), Cluster (test-acc-tf-c-7546961319716233879): timeout while waiting for state to become 'SIMULATING' (last state: 'STARTING', timeout: 25m0s)
2025-10-09T01:34:54.8745161Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T01:34:54.8745786Z         
2025-10-09T01:34:54.8746386Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-09T01:34:54.8747342Z           on terraform_plugin_test.tf line 66, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-09T01:34:54.8748080Z           66: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-09T01:34:54.8748434Z         
2025-10-09T01:34:55.7564111Z    test_step_number=1 test_name=TestMigOutageSimulationCluster_MultiRegion_basic
2025-10-09T01:34:55.7564798Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T01:34:55.7565232Z         
2025-10-09T01:34:55.7565478Z         Error: Error in delete
2025-10-09T01:34:55.7565719Z         
2025-10-09T01:34:55.7566122Z         cluster name: test-acc-tf-c-7546961319716233879, API error details:
2025-10-09T01:34:55.7567230Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70159c2a3cd169303e70d/clusters/test-acc-tf-c-7546961319716233879
2025-10-09T01:34:55.7567885Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-09T01:34:55.7568394Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-09T01:34:55.7569022Z         Detail: Cannot terminate cluster test-acc-tf-c-7546961319716233879 in project
2025-10-09T01:34:55.7569664Z         test-acc-tf-p-1460378166713015499 because it is undergoing a regional outage
2025-10-09T01:34:55.7570280Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-09T01:34:55.7570784Z         Request. Params: [test-acc-tf-c-7546961319716233879
2025-10-09T01:34:55.7571246Z         test-acc-tf-p-1460378166713015499], BadRequestDetail: 
2025-10-09T01:34:55.7705252Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (4068.03s)
```

- 2025-10-10 PASS 50 minutes
- 2025-10-11 PASS 56 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 49 minutes
- 2025-10-14 PASS 47 minutes
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