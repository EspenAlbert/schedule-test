# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 36 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-25 01:09](#error-2025-06-25t0109330000) | API Error DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/{groupId}/clusters | dev | flaky_400 | 135.04s
[2025-07-11 03:39](#error-2025-07-11t0339400000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/6870877ad1742264a624a422/clusters | dev |  | 127.01s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25

### Error 2025-06-25T01:09:33+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T01:09:33.216000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset',confidence=1.0,ts_when='29 days ago')
API Error DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/{groupId}/clusters
```
2025-06-25T01:09:33.2163907Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-25T01:10:48.9198109Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-25T01:13:04.2875646Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-25T01:13:04.2876453Z     resource_advanced_cluster_test.go:1432: Step 2/6 error: Error running apply: exit status 1
2025-06-25T01:13:04.2877056Z         
2025-06-25T01:13:04.2882573Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b4c4abc5fcd318f4aaf68/clusters POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A cluster or serverless instance named test-acc-tf-c-684370195425797975 is already present in group 685b4c4abc5fcd318f4aaf68. Reason: Bad Request. Params: [cluster or serverless instance test-acc-tf-c-684370195425797975 685b4c4abc5fcd318f4aaf68], BadRequestDetail: 
2025-06-25T01:13:04.2885282Z         
2025-06-25T01:13:04.2885849Z           with mongodbatlas_advanced_cluster.test,
2025-06-25T01:13:04.2886977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-25T01:13:04.2888200Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-25T01:13:04.2888730Z         
2025-06-25T01:13:04.3322605Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (135.42s)
```

- 2025-06-26 PASS 16 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 15 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 16 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 17 minutes
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