# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030120000) |  | dev | timeout | 10815.08s
[2025-09-01 07:57](#error-2025-09-01t0757110000) | CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION /api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-8310116680325819735 | dev |  | 3001.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 49 minutes
- 2025-08-07 PASS 36 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 38 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 32 minutes
- 2025-08-13 PASS 37 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15 PASS 29 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 48 minutes
- 2025-08-18 PASS 36 minutes
- 2025-08-19 PASS 34 minutes
- 2025-08-20
  - PASS 34 minutes
  - PASS 37 minutes
- 2025-08-21 PASS 31 minutes
- 2025-08-22 PASS 28 minutes
- 2025-08-23 PASS 37 minutes
- 2025-08-24 PASS 49 minutes
- 2025-08-25 PASS 44 minutes
- 2025-08-26 PASS 38 minutes
- 2025-08-27 PASS 55 minutes
- 2025-08-28 PASS 34 minutes
- 2025-08-29 PASS 43 minutes
- 2025-08-30 PASS 37 minutes
- 2025-08-31 PASS 33 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:12+00:00
```
2025-09-01T00:30:12.0837942Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T00:30:12.0843120Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T00:30:27.0949723Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T00:30:27.0951544Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:27.094663798Z, ProjectID: 68b4e9127af6b0372e941567, Cluster name: test-acc-tf-c-8945403889932386276
2025-09-01T03:30:27.8740883Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T03:30:27.8741706Z     resource_cluster_outage_simulation_test.go:62: Step 1/1 error: Error running apply: exit status 1
2025-09-01T03:30:27.8742554Z         
2025-09-01T03:30:27.8743893Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:27.8744846Z         
2025-09-01T03:30:27.8745343Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:30:27.8746231Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:30:27.8747225Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:30:27.8747558Z         
2025-09-01T03:30:27.9195231Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.84s)
```

  - PASS an hour
  - FAIL 50 minutes

### Error 2025-09-01T07:57:11+00:00
```
2025-09-01T07:57:11.0238851Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T07:57:11.0245719Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T07:57:26.0359364Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T07:57:26.0361258Z     pre_check.go:40: Time before creating cluster: 2025-09-01T07:57:26.035617883Z, ProjectID: 68b551d47af6b0372e9a1e1e, Cluster name: test-acc-tf-c-8310116680325819735
2025-09-01T08:47:12.3909521Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-09-01T08:47:12.3910525Z     resource_cluster_outage_simulation_test.go:62: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:47:12.3911155Z         
2025-09-01T08:47:12.3912726Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68b551d47af6b0372e9a1e1e), Cluster (test-acc-tf-c-8310116680325819735): context deadline exceeded
2025-09-01T08:47:12.3913545Z         
2025-09-01T08:47:12.3914042Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-09-01T08:47:12.3914919Z           on terraform_plugin_test.tf line 69, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-09-01T08:47:12.3916066Z           69: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-09-01T08:47:12.3916447Z         
2025-09-01T08:47:12.6471418Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T08:47:12.6471839Z         
2025-09-01T08:47:12.6475283Z         Error: error deleting advanced cluster (test-acc-tf-c-8310116680325819735): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d47af6b0372e9a1e1e/clusters/test-acc-tf-c-8310116680325819735 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION") Detail: Cannot terminate cluster test-acc-tf-c-8310116680325819735 in project test-acc-tf-p-8188035823505379392 because it is undergoing a regional outage simulation. End regional outage simulation and try again. Reason: Bad Request. Params: [test-acc-tf-c-8310116680325819735 test-acc-tf-p-8188035823505379392], BadRequestDetail: 
2025-09-01T08:47:12.6477443Z         
2025-09-01T08:47:12.6477746Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (3001.62s)
```

  - PASS 37 minutes
  - PASS 28 minutes
  - PASS 31 minutes
  - PASS 31 minutes
  - PASS 39 minutes
- 2025-09-02 PASS 35 minutes
- 2025-09-03 PASS 48 minutes
- 2025-09-04 PASS 39 minutes