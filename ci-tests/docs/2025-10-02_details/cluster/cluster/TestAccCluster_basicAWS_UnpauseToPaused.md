# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-10 00:27](#error-2025-09-10t0027140000) | OPERATION_INVALID_UNHEALTHY_NODES /api/atlas/v1.0/groups/68c0c5de3fcb0812ccf2e2f2/clusters/test-acc-tf-c-1945607357140970629 | dev | 921.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 26 minutes
- 2025-09-04 PASS 22 minutes
- 2025-09-05 PASS 19 minutes
- 2025-09-06 PASS 23 minutes
- 2025-09-07 PASS 56 minutes
- 2025-09-08
  - PASS 28 minutes
  - PASS 20 minutes
  - PASS 21 minutes
- 2025-09-09 PASS 20 minutes
- 2025-09-10

### Error 2025-09-10T00:27:14+00:00
```
2025-09-10T00:27:14.1909691Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-09-10T00:27:14.1943182Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-09-10T00:27:24.1933316Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-09-10T00:27:24.1934979Z     pre_check.go:32: Time before creating cluster: 2025-09-10T00:27:24.193021375Z, ProjectID: 68c0c5de3fcb0812ccf2e2f2, Cluster name: test-acc-tf-c-1945607357140970629
2025-09-10T00:40:23.8012390Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-09-10T00:40:23.8013174Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-09-10T00:40:23.8013672Z         
2025-09-10T00:40:23.8016593Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1945607357140970629): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68c0c5de3fcb0812ccf2e2f2/clusters/test-acc-tf-c-1945607357140970629: 400 (request "OPERATION_INVALID_UNHEALTHY_NODES") The operation cannot begin because monitoring indicates these nodes are not in the primary or secondary state: atlas-r7zg7j-shard-00-02.vxkftu.mongodb-dev.net, atlas-r7zg7j-shard-00-01.vxkftu.mongodb-dev.net, atlas-r7zg7j-shard-00-00.vxkftu.mongodb-dev.net.
2025-09-10T00:40:23.8018396Z         
2025-09-10T00:40:23.8018690Z           with mongodbatlas_cluster.test,
2025-09-10T00:40:23.8019288Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-10T00:40:23.8019814Z           12: resource "mongodbatlas_cluster" "test" {
2025-09-10T00:40:23.8020100Z         
2025-09-10T00:42:35.4595807Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (921.27s)
```

- 2025-09-11 PASS 19 minutes
- 2025-09-12 PASS 20 minutes
- 2025-09-13 PASS 31 minutes
- 2025-09-14 PASS 18 minutes
- 2025-09-15
  - PASS 21 minutes
  - PASS 16 minutes
- 2025-09-16 PASS 20 minutes
- 2025-09-17 PASS 21 minutes
- 2025-09-18 PASS 24 minutes
- 2025-09-19 PASS 21 minutes
- 2025-09-20 PASS 32 minutes
- 2025-09-21 PASS 18 minutes
- 2025-09-22 PASS 19 minutes
- 2025-09-23 PASS 20 minutes
- 2025-09-24 PASS 21 minutes
- 2025-09-25 PASS 21 minutes
- 2025-09-26 PASS 20 minutes
- 2025-09-27 PASS 20 minutes
- 2025-09-28 PASS 17 minutes
- 2025-09-29 PASS 20 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 32 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 26 minutes
  - PASS 16 minutes
- 2025-10-02 PASS 25 minutes