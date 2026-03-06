# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:57](#error-2026-02-24t0057260000) |  | dev | flaky_500 | 1200.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 17 minutes
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 18 minutes
- 2026-02-10 PASS 16 minutes
- 2026-02-11 PASS 16 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 33 minutes
- 2026-02-18 PASS 19 minutes
- 2026-02-19 PASS 28 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 17 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:57:26+00:00
```
2026-02-24T00:57:26.9376127Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9379687Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9382005Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9383761Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:01.218935165Z, ProjectID: 699cf2a48dfec41eaa848c30, Cluster name: test-acc-tf-c-3824990927709651768
2026-02-24T00:57:26.9429204Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9430382Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-02-24T00:57:26.9431410Z         
2026-02-24T00:57:26.9431996Z         Error: error reading Advanced Configuration
2026-02-24T00:57:26.9432525Z         
2026-02-24T00:57:26.9433182Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-24T00:57:26.9434500Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-24T00:57:26.9435744Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-24T00:57:26.9436365Z         
2026-02-24T00:57:26.9437158Z         cluster name: test-acc-tf-c-3824990927709651768, API error details: (503
2026-02-24T00:57:26.9438364Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:26.9439453Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (1200.12s)
```

- 2026-02-25 PASS 19 minutes
- 2026-02-26 PASS 21 minutes
- 2026-02-27 PASS 18 minutes
- 2026-02-28 PASS 28 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 17 minutes
- 2026-03-05 PASS 30 minutes
- 2026-03-06 PASS 34 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-01 01:01](#error-2026-03-01t0101410000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a38ba617b2c5dfb1d1334f/clusters | qa | out_of_capacity | 1099.02s
[2026-03-03 09:46](#error-2026-03-03t0946320000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a6aa5faa1a482df74de347/clusters | qa | out_of_capacity | 918.09s

### Timeline
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 17 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01

### Error 2026-03-01T01:01:41+00:00
```
2026-03-01T01:01:41.0809595Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-03-01T01:01:41.0811529Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-03-01T01:01:41.0814332Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-03-01T01:01:41.0815934Z     pre_check.go:46: Time before creating cluster: 2026-03-01T00:43:26.466297465Z, ProjectID: 69a38ba617b2c5dfb1d1334f, Cluster name: test-acc-tf-c-6688355836903626539
2026-03-01T01:01:41.0845406Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-03-01T01:01:41.0846081Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-03-01T01:01:41.0846566Z         
2026-03-01T01:01:41.0846825Z         Error: Error in create
2026-03-01T01:01:41.0847082Z         
2026-03-01T01:01:41.0847439Z           with mongodbatlas_advanced_cluster.cluster2,
2026-03-01T01:01:41.0848142Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-03-01T01:01:41.0848808Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-03-01T01:01:41.0849148Z         
2026-03-01T01:01:41.0849585Z         cluster name: test-acc-tf-c-5478188949578178914, API error details:
2026-03-01T01:01:41.0850276Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a38ba617b2c5dfb1d1334f/clusters
2026-03-01T01:01:41.0850982Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-03-01T01:01:41.0851769Z         region is currently out of capacity for the requested instance size. Reason:
2026-03-01T01:01:41.0852532Z         Conflict. Params: [], BadRequestDetail: 
2026-03-01T01:01:41.0852949Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (1099.18s)
```

- 2026-03-02: MISSING
- 2026-03-03

### Error 2026-03-03T09:46:32+00:00
```
2026-03-03T09:46:32.8600809Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-03-03T09:46:32.8603205Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-03-03T09:46:32.8605339Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-03-03T09:46:32.8606941Z     pre_check.go:46: Time before creating cluster: 2026-03-03T09:31:18.437556333Z, ProjectID: 69a6aa5faa1a482df74de347, Cluster name: test-acc-tf-c-3105186864329356136
2026-03-03T09:46:32.8640872Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-03-03T09:46:32.8641555Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-03-03T09:46:32.8642043Z         
2026-03-03T09:46:32.8642300Z         Error: Error in create
2026-03-03T09:46:32.8642550Z         
2026-03-03T09:46:32.8642898Z           with mongodbatlas_advanced_cluster.cluster2,
2026-03-03T09:46:32.8643610Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-03-03T09:46:32.8644278Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-03-03T09:46:32.8644615Z         
2026-03-03T09:46:32.8645048Z         cluster name: test-acc-tf-c-5312484009941753013, API error details:
2026-03-03T09:46:32.8645749Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a6aa5faa1a482df74de347/clusters
2026-03-03T09:46:32.8646463Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-03-03T09:46:32.8647378Z         region is currently out of capacity for the requested instance size. Reason:
2026-03-03T09:46:32.8647948Z         Conflict. Params: [], BadRequestDetail: 
2026-03-03T09:46:32.8648357Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (918.90s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
