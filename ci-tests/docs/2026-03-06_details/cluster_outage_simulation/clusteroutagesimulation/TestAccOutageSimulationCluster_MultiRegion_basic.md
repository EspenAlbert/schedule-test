# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 00:39](#error-2026-02-05t0039040000) |  | dev | timeout | 10816.04s
[2026-02-12 00:38](#error-2026-02-12t0038020000) |  | dev | flaky_client | 6526.04s
[2026-02-24 00:36](#error-2026-02-24t0036490000) |  | dev | flaky_500 | 1788.06s
[2026-03-02 00:38](#error-2026-03-02t0038370000) |  | dev | flaky_client | 1223.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T00:39:04+00:00
```
2026-02-05T00:39:04.4876604Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T00:39:04.4884248Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T00:39:19.4993145Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T01:28:55.9079193Z     pre_check.go:46: Time before creating cluster: 2026-02-05T00:39:19.498920686Z, ProjectID: 6983e6a6b0f8d5bab81972ba, Cluster name: test-acc-tf-c-2152889649476239244
2026-02-05T03:39:20.8736466Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T03:39:20.8737135Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-02-05T03:39:20.8737495Z         
2026-02-05T03:39:20.8738076Z         Error: Error in create
2026-02-05T03:39:20.8738340Z         
2026-02-05T03:39:20.8738696Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-05T03:39:20.8739426Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-05T03:39:20.8740160Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-05T03:39:20.8740588Z         
2026-02-05T03:39:20.8741160Z         cluster=test-acc-tf-c-2152889649476239244 didn't reach desired state: IDLE,
2026-02-05T03:39:20.8741621Z         error: context deadline exceeded
2026-02-05T03:39:20.9218520Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10816.43s)
```

- 2026-02-06 PASS 55 minutes
- 2026-02-07 PASS 52 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 55 minutes
- 2026-02-10 PASS 52 minutes
- 2026-02-11 PASS 53 minutes
- 2026-02-12

### Error 2026-02-12T00:38:02+00:00
```
2026-02-12T00:38:02.4005354Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-12T00:38:02.4015314Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-12T00:38:17.4125850Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-12T00:38:17.4127474Z     pre_check.go:46: Time before creating cluster: 2026-02-12T00:38:17.412267108Z, ProjectID: 698d20e8b8c796a199ca4080, Cluster name: test-acc-tf-c-4516342391817942738
2026-02-12T02:26:48.7399868Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-12T02:26:48.7400560Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-02-12T02:26:48.7401238Z         
2026-02-12T02:26:48.7401547Z         Error: Error in create
2026-02-12T02:26:48.7401818Z         
2026-02-12T02:26:48.7402202Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-12T02:26:48.7402954Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-12T02:26:48.7403671Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-12T02:26:48.7404047Z         
2026-02-12T02:26:48.7404523Z         cluster=test-acc-tf-c-4516342391817942738 didn't reach desired state: IDLE,
2026-02-12T02:26:48.7404970Z         error: Get
2026-02-12T02:26:48.7405735Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/698d20e8b8c796a199ca4080/clusters/test-acc-tf-c-4516342391817942738":
2026-02-12T02:26:48.7406871Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-02-12T02:26:48.7919190Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (6526.39s)
```

- 2026-02-13 PASS 3 hours
- 2026-02-14 PASS 56 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 55 minutes
- 2026-02-17 PASS 54 minutes
- 2026-02-18 PASS 54 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS an hour
- 2026-02-21 PASS 56 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 53 minutes
- 2026-02-24

### Error 2026-02-24T00:36:49+00:00
```
2026-02-24T00:36:49.4271328Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-24T00:36:49.4279925Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-24T00:36:59.4354168Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-24T00:36:59.4356333Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:36:59.435087281Z, ProjectID: 699cf29eae2412ce62113b94, Cluster name: test-acc-tf-c-7916716310267524067
2026-02-24T01:02:33.4064575Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-24T01:02:33.4065264Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:02:33.4065662Z         
2026-02-24T01:02:33.4067190Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (699cf29eae2412ce62113b94), Cluster (test-acc-tf-c-7916716310267524067): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:02:33.4068425Z         
2026-02-24T01:02:33.4068856Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2026-02-24T01:02:33.4069674Z           on terraform_plugin_test.tf line 64, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2026-02-24T01:02:33.4070749Z           64: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2026-02-24T01:02:33.4071147Z         
2026-02-24T01:06:38.0066763Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (1788.58s)
```

- 2026-02-25 PASS 57 minutes
- 2026-02-26 PASS an hour
- 2026-02-27 PASS 55 minutes
- 2026-02-28 PASS an hour
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL 20 minutes

### Error 2026-03-02T00:38:37+00:00
```
2026-03-02T00:38:37.9104274Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-03-02T00:38:37.9113898Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-03-02T00:38:47.9159077Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-03-02T00:38:47.9161222Z     pre_check.go:46: Time before creating cluster: 2026-03-02T00:38:47.915501409Z, ProjectID: 69a4dc0b756ae9983e9606c2, Cluster name: test-acc-tf-c-727961525933416899
2026-03-02T00:59:01.6403549Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-03-02T00:59:01.6404536Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-03-02T00:59:01.6405215Z         
2026-03-02T00:59:01.6405672Z         Error: Error in create
2026-03-02T00:59:01.6406119Z         
2026-03-02T00:59:01.6407070Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-03-02T00:59:01.6408790Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-03-02T00:59:01.6410077Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-03-02T00:59:01.6410737Z         
2026-03-02T00:59:01.6411557Z         cluster=test-acc-tf-c-727961525933416899 didn't reach desired state: IDLE,
2026-03-02T00:59:01.6412298Z         error: Get
2026-03-02T00:59:01.6413639Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc0b756ae9983e9606c2/clusters/test-acc-tf-c-727961525933416899":
2026-03-02T00:59:01.7003041Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-03-02T00:59:01.7003631Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (1223.79s)
```

  - PASS 51 minutes
- 2026-03-03 PASS 54 minutes
- 2026-03-04 PASS 51 minutes
- 2026-03-05 PASS an hour
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 52 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 45 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 49 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 49 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 46 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 53 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 50 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
