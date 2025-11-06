# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027070000) |  | dev | timeout | 5515.04s
[2025-10-20 10:26](#error-2025-10-20t1026110000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e415a13b66d7cb5eb1c/clusters | dev | out_of_capacity | 15.06s
[2025-10-25 00:27](#error-2025-10-25t0027470000) |  | dev | timeout | 7040.06s
[2025-10-27 00:30](#error-2025-10-27t0030200000) |  | dev | timeout | 4985.08s
[2025-10-30 00:28](#error-2025-10-30t0028000000) |  | dev | flaky_500 | 4196.06s

## Timeline
- 2025-10-07: MISSING
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
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 59 minutes
- 2025-10-25

### Error 2025-10-25T00:27:47+00:00
```
2025-10-25T00:27:47.3196902Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-25T00:27:47.3206573Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-25T00:28:02.3216607Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-25T00:28:02.3219312Z     pre_check.go:36: Time before creating cluster: 2025-10-25T00:28:02.321227919Z, ProjectID: 68fc1981a875863bf4d3ca56, Cluster name: test-acc-tf-c-737939447797530419
2025-10-25T02:21:02.1392930Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-25T02:21:02.1393796Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-25T02:21:02.1394287Z         
2025-10-25T02:21:02.1395889Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68fc1981a875863bf4d3ca56), Cluster (test-acc-tf-c-737939447797530419): timeout while waiting for state to become 'SIMULATING' (last state: 'STARTING', timeout: 25m0s)
2025-10-25T02:21:02.1397370Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-25T02:21:02.1397937Z         
2025-10-25T02:21:02.1398337Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-25T02:21:02.1399083Z           on terraform_plugin_test.tf line 64, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-25T02:21:02.1399993Z           64: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-25T02:21:02.1400345Z         
2025-10-25T02:25:07.9116192Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (7040.59s)
```

- 2025-10-26 PASS 47 minutes
- 2025-10-27

### Error 2025-10-27T00:30:20+00:00
```
2025-10-27T00:30:20.4189433Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-27T00:30:20.4197474Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-27T00:30:35.4299735Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-27T00:30:35.4300970Z     pre_check.go:36: Time before creating cluster: 2025-10-27T00:30:35.429640195Z, ProjectID: 68febd1a5c665f6c63cf15aa, Cluster name: test-acc-tf-c-1795078676588832718
2025-10-27T01:53:25.7633704Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-27T01:53:25.7634295Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-27T01:53:25.7634748Z         
2025-10-27T01:53:25.7635992Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68febd1a5c665f6c63cf15aa), Cluster (test-acc-tf-c-1795078676588832718): timeout while waiting for state to become 'SIMULATING' (last state: 'START_REQUESTED', timeout: 25m0s)
2025-10-27T01:53:25.7637649Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-27T01:53:25.7638254Z         
2025-10-27T01:53:25.7638624Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-27T01:53:25.7639306Z           on terraform_plugin_test.tf line 64, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-27T01:53:25.7639946Z           64: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-27T01:53:25.7640279Z         
2025-10-27T01:53:26.1898298Z    test_step_number=1
2025-10-27T01:53:26.1898765Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T01:53:26.1899155Z         
2025-10-27T01:53:26.1899401Z         Error: Error in delete
2025-10-27T01:53:26.1899649Z         
2025-10-27T01:53:26.1900024Z         cluster name: test-acc-tf-c-1795078676588832718, API error details:
2025-10-27T01:53:26.1900790Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1a5c665f6c63cf15aa/clusters/test-acc-tf-c-1795078676588832718
2025-10-27T01:53:26.1901379Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-27T01:53:26.1901846Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-27T01:53:26.1902552Z         Detail: Cannot terminate cluster test-acc-tf-c-1795078676588832718 in project
2025-10-27T01:53:26.1903156Z         test-acc-tf-p-5210838568800786101 because it is undergoing a regional outage
2025-10-27T01:53:26.1903730Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-27T01:53:26.1904206Z         Request. Params: [test-acc-tf-c-1795078676588832718
2025-10-27T01:53:26.1904646Z         test-acc-tf-p-5210838568800786101], BadRequestDetail: 
2025-10-27T01:53:26.1905060Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (4985.77s)
```

- 2025-10-28 PASS 47 minutes
- 2025-10-29 PASS 53 minutes
- 2025-10-30

### Error 2025-10-30T00:28:00+00:00
```
2025-10-30T00:28:00.9400005Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T00:28:00.9415323Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T00:28:15.9473123Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T00:28:15.9474951Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:15.946984918Z, ProjectID: 6902b10fabf4374f32987fb9, Cluster name: test-acc-tf-c-2271139291488278286
2025-10-30T01:07:43.5688631Z    test_name=TestAccOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/b4ede200-2359-42dd-aaca-1e6f44b97830/terraform test_working_directory=/tmp/plugintest4276448167 test_step_number=1
2025-10-30T01:37:57.2140630Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T01:37:57.2141279Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-30T01:37:57.2141664Z         
2025-10-30T01:37:57.2143437Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (6902b10fabf4374f32987fb9), Cluster (test-acc-tf-c-2271139291488278286): timeout while waiting for state to become 'SIMULATING' (last state: 'START_REQUESTED', timeout: 25m0s)
2025-10-30T01:37:57.2145009Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-30T01:37:57.2145603Z         
2025-10-30T01:37:57.2146021Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-30T01:37:57.2146799Z           on terraform_plugin_test.tf line 64, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-30T01:37:57.2147534Z           64: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-30T01:37:57.2147907Z         
2025-10-30T01:37:57.5324486Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:37:57.5324937Z         
2025-10-30T01:37:57.5325196Z         Error: Error in delete
2025-10-30T01:37:57.5325447Z         
2025-10-30T01:37:57.5325862Z         cluster name: test-acc-tf-c-2271139291488278286, API error details:
2025-10-30T01:37:57.5326729Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b10fabf4374f32987fb9/clusters/test-acc-tf-c-2271139291488278286
2025-10-30T01:37:57.5327410Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T01:37:57.5327941Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-30T01:37:57.5328583Z         Detail: Cannot terminate cluster test-acc-tf-c-2271139291488278286 in project
2025-10-30T01:37:57.5329251Z         test-acc-tf-p-7494954675347226544 because it is undergoing a regional outage
2025-10-30T01:37:57.5329878Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-30T01:37:57.5330396Z         Request. Params: [test-acc-tf-c-2271139291488278286
2025-10-30T01:37:57.5330872Z         test-acc-tf-p-7494954675347226544], BadRequestDetail: 
2025-10-30T01:37:57.5331345Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (4196.59s)
```

- 2025-10-31 PASS 48 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 46 minutes
- 2025-11-03 PASS 50 minutes
- 2025-11-04 PASS 44 minutes
- 2025-11-05
  - PASS 44 minutes
  - PASS 46 minutes
- 2025-11-06 PASS 47 minutes