# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027070000) |  | dev | timeout | 3359.01s
[2025-10-12 00:28](#error-2025-10-12t0028420000) |  | qa | timeout | 3890.06s
[2025-10-27 00:30](#error-2025-10-27t0030200000) |  | dev | timeout | 4980.08s
[2025-10-30 00:27](#error-2025-10-30t0027590000) |  | dev | timeout | 2384.04s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 42 minutes
- 2025-10-09

### Error 2025-10-09T00:27:07+00:00
```
2025-10-09T00:27:07.7350573Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-09T00:27:07.7364483Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-09T00:27:27.7489661Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-09T00:27:27.7491004Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:27:27.748612534Z, ProjectID: 68e70159c2a3cd169303e70d, Cluster name: test-acc-tf-c-7123945253763707554
2025-10-09T01:23:06.8523108Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-09T01:23:06.8524024Z     resource_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T01:23:06.8524612Z         
2025-10-09T01:23:06.8526087Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (68e70159c2a3cd169303e70d), Cluster (test-acc-tf-c-7123945253763707554): timeout while waiting for state to become 'DELETED' (last state: 'RECOVERY_REQUESTED', timeout: 25m0s)
2025-10-09T01:23:06.8535412Z         
2025-10-09T01:23:06.8536049Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (3359.12s)
```

- 2025-10-10 PASS 44 minutes
- 2025-10-11 PASS 45 minutes
- 2025-10-12

### Error 2025-10-12T00:28:42+00:00
```
2025-10-12T00:28:42.5484930Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-12T00:28:42.5496491Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-12T00:28:52.5539317Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-12T00:28:52.5543976Z     pre_check.go:36: Time before creating cluster: 2025-10-12T00:28:52.553581475Z, ProjectID: 68eaf639454e3b49aeac0648, Cluster name: test-acc-tf-c-5583412451084369749
2025-10-12T01:33:32.8295352Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-12T01:33:32.8296143Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:33:32.8296607Z         
2025-10-12T01:33:32.8297923Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68eaf639454e3b49aeac0648), Cluster (test-acc-tf-c-5583412451084369749): timeout while waiting for state to become 'SIMULATING' (last state: 'START_REQUESTED', timeout: 25m0s)
2025-10-12T01:33:32.8301827Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-12T01:33:32.8302843Z         
2025-10-12T01:33:32.8303578Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-12T01:33:32.8305248Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-12T01:33:32.8306509Z           38: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-12T01:33:32.8307138Z         
2025-10-12T01:33:33.1766806Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T01:33:33.1767262Z         
2025-10-12T01:33:33.1767512Z         Error: Error in delete
2025-10-12T01:33:33.1767750Z         
2025-10-12T01:33:33.1768158Z         cluster name: test-acc-tf-c-5583412451084369749, API error details:
2025-10-12T01:33:33.1769005Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf639454e3b49aeac0648/clusters/test-acc-tf-c-5583412451084369749
2025-10-12T01:33:33.1769658Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-12T01:33:33.1770180Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-12T01:33:33.1770805Z         Detail: Cannot terminate cluster test-acc-tf-c-5583412451084369749 in project
2025-10-12T01:33:33.1771452Z         test-acc-tf-p-4024986377574999456 because it is undergoing a regional outage
2025-10-12T01:33:33.1772078Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-12T01:33:33.1772574Z         Request. Params: [test-acc-tf-c-5583412451084369749
2025-10-12T01:33:33.1773033Z         test-acc-tf-p-4024986377574999456], BadRequestDetail: 
2025-10-12T01:33:33.1773471Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (3890.63s)
```

- 2025-10-13 PASS 44 minutes
- 2025-10-14 PASS 44 minutes
- 2025-10-15 PASS 43 minutes
- 2025-10-16 PASS 57 minutes
- 2025-10-17 PASS 45 minutes
- 2025-10-18 PASS 42 minutes
- 2025-10-19 PASS 41 minutes
- 2025-10-20
  - PASS 45 minutes
  - PASS 41 minutes
- 2025-10-21 PASS 42 minutes
- 2025-10-22
  - PASS 45 minutes
  - PASS 41 minutes
- 2025-10-23 PASS 51 minutes
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 42 minutes
- 2025-10-26 PASS 41 minutes
- 2025-10-27

### Error 2025-10-27T00:30:20+00:00
```
2025-10-27T00:30:20.4188083Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-27T00:30:20.4198946Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-27T00:30:30.4275631Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-27T00:30:30.4277550Z     pre_check.go:36: Time before creating cluster: 2025-10-27T00:30:30.427262017Z, ProjectID: 68febd1a5c665f6c63cf15aa, Cluster name: test-acc-tf-c-5198529456142809657
2025-10-27T01:53:20.8395502Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-27T01:53:20.8396228Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-10-27T01:53:20.8396688Z         
2025-10-27T01:53:20.8398412Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68febd1a5c665f6c63cf15aa), Cluster (test-acc-tf-c-5198529456142809657): timeout while waiting for state to become 'SIMULATING' (last state: 'START_REQUESTED', timeout: 25m0s)
2025-10-27T01:53:20.8400635Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-27T01:53:20.8401736Z         
2025-10-27T01:53:20.8402420Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-27T01:53:20.8403551Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-27T01:53:20.8404687Z           38: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-27T01:53:20.8405040Z         
2025-10-27T01:53:21.2465054Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T01:53:21.2465442Z         
2025-10-27T01:53:21.2465682Z         Error: Error in delete
2025-10-27T01:53:21.2465926Z         
2025-10-27T01:53:21.2466297Z         cluster name: test-acc-tf-c-5198529456142809657, API error details:
2025-10-27T01:53:21.2467070Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1a5c665f6c63cf15aa/clusters/test-acc-tf-c-5198529456142809657
2025-10-27T01:53:21.2467673Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-27T01:53:21.2468153Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-27T01:53:21.2468723Z         Detail: Cannot terminate cluster test-acc-tf-c-5198529456142809657 in project
2025-10-27T01:53:21.2469318Z         test-acc-tf-p-5210838568800786101 because it is undergoing a regional outage
2025-10-27T01:53:21.2469881Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-27T01:53:21.2470621Z         Request. Params: [test-acc-tf-c-5198529456142809657
2025-10-27T01:53:21.2471061Z         test-acc-tf-p-5210838568800786101], BadRequestDetail: 
2025-10-27T01:53:21.2471471Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (4980.83s)
```

- 2025-10-28 PASS 43 minutes
- 2025-10-29 PASS 46 minutes
- 2025-10-30

### Error 2025-10-30T00:27:59+00:00
```
2025-10-30T00:27:59.1950089Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-30T00:27:59.1951571Z     resource_test.go:22: Creating execution project: test-acc-tf-p-7494954675347226544
2025-10-30T00:28:00.9413017Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-30T00:28:05.9415142Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-30T00:28:05.9416739Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:05.94118817Z, ProjectID: 6902b10fabf4374f32987fb9, Cluster name: test-acc-tf-c-4608371058792667761
2025-10-30T01:07:43.5689866Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-10-30T01:07:43.5690702Z     resource_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:07:43.5691277Z         
2025-10-30T01:07:43.5693094Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6902b10fabf4374f32987fb9), Cluster (test-acc-tf-c-4608371058792667761): timeout while waiting for state to become 'DELETED' (last state: 'RECOVERING', timeout: 25m0s)
2025-10-30T01:07:43.5694181Z         
2025-10-30T01:07:43.5694510Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (2384.37s)
```

- 2025-10-31 PASS 41 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 42 minutes
- 2025-11-03 PASS 40 minutes
- 2025-11-04 PASS 43 minutes
- 2025-11-05
  - PASS 45 minutes
  - PASS 42 minutes
- 2025-11-06 PASS 47 minutes