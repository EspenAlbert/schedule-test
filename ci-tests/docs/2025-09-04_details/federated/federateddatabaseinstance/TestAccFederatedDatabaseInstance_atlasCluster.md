# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68a122cff746882a383c8005/clusters | qa | out_of_capacity | 1802.03s
[2025-09-01 03:30](#error-2025-09-01t0330510000) |  | dev | timeout | 10806.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 18 minutes
- 2025-08-07 PASS 24 minutes
- 2025-08-08 PASS 17 minutes
- 2025-08-09 PASS 20 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS 55 minutes
- 2025-08-12 PASS 31 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 20 minutes
- 2025-08-15 PASS 14 minutes
- 2025-08-16 PASS 47 minutes
- 2025-08-17

### Error 2025-08-17T01:01:16+00:00
```
2025-08-17T01:01:16.3488590Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-08-17T01:01:16.3492106Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-08-17T01:01:16.3494812Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-08-17T01:01:16.3496363Z     pre_check.go:40: Time before creating cluster: 2025-08-17T00:31:18.602383341Z, ProjectID: 68a122cff746882a383c8005, Cluster name: test-acc-tf-c-5181172233807253954
2025-08-17T01:01:16.3731252Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-08-17T01:01:16.3732363Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-08-17T01:01:16.3733149Z         
2025-08-17T01:01:16.3736232Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cff746882a383c8005/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-08-17T01:01:16.3738288Z         
2025-08-17T01:01:16.3738941Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-17T01:01:16.3740369Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-17T01:01:16.3741564Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-17T01:01:16.3742143Z         
2025-08-17T01:01:16.3742831Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (1802.33s)
```

- 2025-08-18 PASS 16 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - PASS 20 minutes
  - PASS 23 minutes
- 2025-08-21 PASS 16 minutes
- 2025-08-22 PASS 12 minutes
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 16 minutes
- 2025-08-25 PASS 18 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 25 minutes
- 2025-08-28 PASS 16 minutes
- 2025-08-29 PASS 29 minutes
- 2025-08-30 PASS 16 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:30:51+00:00
```
2025-09-01T03:30:51.8825092Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-09-01T03:30:51.8828692Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-01T03:30:51.8847456Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-01T03:30:51.8848460Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:20.020049351Z, ProjectID: 68b4e91546ef690a79d6bd3a, Cluster name: test-acc-tf-c-5568705105860087161
2025-09-01T03:30:51.8925251Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-01T03:30:51.8925877Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-09-01T03:30:51.8926330Z         
2025-09-01T03:30:51.8927050Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:51.8927579Z         
2025-09-01T03:30:51.8927935Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:30:51.8928631Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:30:51.8929275Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:30:51.8929605Z         
2025-09-01T03:30:51.8930500Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:51.8931030Z         
2025-09-01T03:30:51.8931372Z           with mongodbatlas_advanced_cluster.cluster2,
2025-09-01T03:30:51.8932029Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_advanced_cluster" "cluster2":
2025-09-01T03:30:51.8932854Z           40: resource "mongodbatlas_advanced_cluster" "cluster2" {
2025-09-01T03:30:51.8933170Z         
2025-09-01T03:30:51.8933471Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (10806.69s)
```

  - PASS an hour
  - PASS an hour
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 32 minutes
- 2025-09-04 PASS 27 minutes