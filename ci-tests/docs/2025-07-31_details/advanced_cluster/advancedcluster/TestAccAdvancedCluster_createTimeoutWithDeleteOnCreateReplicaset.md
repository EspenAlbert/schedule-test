# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339400000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/6870877ad1742264a624a422/clusters | dev | 127.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 15 minutes
- 2025-07-07 PASS 12 minutes
- 2025-07-08 PASS 15 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10 PASS 16 minutes
- 2025-07-11

### Error 2025-07-11T03:39:40+00:00
```
2025-07-11T03:39:40.5753904Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-07-11T03:41:02.0319365Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-07-11T03:43:09.1328166Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-07-11T03:43:09.1328943Z     resource_advanced_cluster_test.go:1432: Step 2/6 error: Error running apply: exit status 1
2025-07-11T03:43:09.1329366Z         
2025-07-11T03:43:09.1332202Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6870877ad1742264a624a422/clusters POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A cluster or serverless instance named test-acc-tf-c-8989534957950128836 is already present in group 6870877ad1742264a624a422. Reason: Bad Request. Params: [cluster or serverless instance test-acc-tf-c-8989534957950128836 6870877ad1742264a624a422], BadRequestDetail: 
2025-07-11T03:43:09.1334017Z         
2025-07-11T03:43:09.1334347Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T03:43:09.1334981Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T03:43:09.1335555Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T03:43:09.1335847Z         
2025-07-11T03:43:09.1743607Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.14s)
```

- 2025-07-12 PASS 28 minutes
- 2025-07-13 PASS 24 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 14 minutes
- 2025-07-19 PASS 19 minutes
- 2025-07-20 PASS 15 minutes
- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 12 minutes
  - PASS 18 minutes
- 2025-07-24 PASS 26 minutes
- 2025-07-25 PASS 15 minutes
- 2025-07-26 PASS 24 minutes
- 2025-07-27 PASS 19 minutes
- 2025-07-28 PASS 16 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 13 minutes
- 2025-07-31 PASS 33 minutes