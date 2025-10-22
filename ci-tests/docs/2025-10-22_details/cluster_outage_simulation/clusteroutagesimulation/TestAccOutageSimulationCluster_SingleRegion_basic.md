# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027070000) |  | dev | timeout | 3359.01s
[2025-10-12 00:28](#error-2025-10-12t0028420000) |  | qa | timeout | 3890.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 43 minutes
- 2025-09-24 PASS 43 minutes
- 2025-09-25 PASS 46 minutes
- 2025-09-26 PASS 44 minutes
- 2025-09-27 PASS 40 minutes
- 2025-09-28 PASS 38 minutes
- 2025-09-29 PASS 43 minutes
- 2025-09-30
  - PASS 42 minutes
  - PASS 41 minutes
  - PASS 40 minutes
- 2025-10-01
  - PASS 38 minutes
  - PASS 40 minutes
  - PASS 42 minutes
  - PASS 41 minutes
  - PASS 45 minutes
  - PASS 41 minutes
  - PASS 47 minutes
  - PASS 42 minutes
- 2025-10-02 PASS 41 minutes
- 2025-10-03 PASS 41 minutes
- 2025-10-04 PASS 45 minutes
- 2025-10-05 PASS 40 minutes
- 2025-10-06 PASS 40 minutes
- 2025-10-07 PASS 53 minutes
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