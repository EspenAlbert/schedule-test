# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 67 TestRuns in dev, qa from 2025-05-22 to 2025-07-10 from master branch: 1 unique tests, PASS(x 63) FAIL(x 4)
Success rate: 94.03%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-22 01:01](#error-2025-05-22t0101140000) | CheckFailure for advanced_cluster.test at Step: 5 Checks: 1 | dev |  | 897.06s
[2025-06-05 00:35](#error-2025-06-05t0035420000) |  | dev |  | 14.10s
[2025-06-19 01:07](#error-2025-06-19t0107440000) | API Error DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/{groupId}/clusters | dev | flaky_400 | 135.04s
[2025-06-25 01:09](#error-2025-06-25t0109330000) | API Error DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/{groupId}/clusters | dev | flaky_400 | 135.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12: MISSING
- 2025-04-13: MISSING
- 2025-04-14: MISSING
- 2025-04-15: MISSING
- 2025-04-16: MISSING
- 2025-04-17: MISSING
- 2025-04-18: MISSING
- 2025-04-19: MISSING
- 2025-04-20: MISSING
- 2025-04-21: MISSING
- 2025-04-22: MISSING
- 2025-04-23: MISSING
- 2025-04-24: MISSING
- 2025-04-25: MISSING
- 2025-04-26: MISSING
- 2025-04-27: MISSING
- 2025-04-28: MISSING
- 2025-04-29: MISSING
- 2025-04-30: MISSING
- 2025-05-01: MISSING
- 2025-05-02: MISSING
- 2025-05-03: MISSING
- 2025-05-04: MISSING
- 2025-05-05: MISSING
- 2025-05-06: MISSING
- 2025-05-07: MISSING
- 2025-05-08: MISSING
- 2025-05-09: MISSING
- 2025-05-10: MISSING
- 2025-05-11: MISSING
- 2025-05-12: MISSING
- 2025-05-13: MISSING
- 2025-05-14: MISSING
- 2025-05-15: MISSING
- 2025-05-16: MISSING
- 2025-05-17: MISSING
- 2025-05-18: MISSING
- 2025-05-19: MISSING
- 2025-05-20: MISSING
- 2025-05-21: MISSING
- 2025-05-22

### Error 2025-05-22T01:01:14+00:00
```
2025-05-22T01:01:14.6081977Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-05-22T01:02:15.7374027Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-05-22T01:12:21.0925279Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-05-22T01:12:21.0926933Z     resource_advanced_cluster_test.go:1431: Step 5/6 error: Check failed: Check 1/1 error: mongodbatlas_advanced_cluster.test: Attribute 'delete_on_create_timeout' found when not expected
2025-05-22T01:17:13.3447841Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (897.61s)
```

- 2025-05-23 PASS 24 minutes
- 2025-05-24 PASS 16 minutes
- 2025-05-25 PASS 18 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 13 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-05-29
  - PASS 21 minutes
  - PASS 13 minutes
- 2025-05-30
  - PASS an hour
  - PASS 12 minutes
- 2025-05-31 PASS 16 minutes
- 2025-06-01
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-06-03 PASS 18 minutes
- 2025-06-04 PASS 18 minutes
- 2025-06-05

### Error 2025-06-05T00:35:42+00:00
```
2025-06-05T00:35:42.0092569Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-05T00:35:42.8411652Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-05T00:35:57.7652414Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-05T00:35:57.7653681Z     resource_advanced_cluster_test.go:1421: cluster test-acc-tf-c-4950998776638648033 not found in 6840e65c161ca93c1f0545a9
2025-06-05T00:35:57.8118608Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (14.99s)
```

- 2025-06-06 PASS 17 minutes
- 2025-06-07 PASS 18 minutes
- 2025-06-08 PASS 16 minutes
- 2025-06-09 PASS 26 minutes
- 2025-06-10 PASS 11 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 22 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 19 minutes
- 2025-06-14 PASS 17 minutes
- 2025-06-15 PASS 16 minutes
- 2025-06-16 PASS 16 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-06-19

### Error 2025-06-19T01:07:44+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-06-19T01:07:44.789000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset',confidence=1.0,ts_when='20 days ago')
API Error DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/{groupId}/clusters
```
2025-06-19T01:07:44.7896096Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-19T01:09:39.9317643Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-19T01:11:55.2849813Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-19T01:11:55.2850601Z     resource_advanced_cluster_test.go:1432: Step 2/6 error: Error running apply: exit status 1
2025-06-19T01:11:55.2851049Z         
2025-06-19T01:11:55.2854065Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685362dfe16f343ef1da0a8e/clusters POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A cluster or serverless instance named test-acc-tf-c-8112001496660746197 is already present in group 685362dfe16f343ef1da0a8e. Reason: Bad Request. Params: [cluster or serverless instance test-acc-tf-c-8112001496660746197 685362dfe16f343ef1da0a8e], BadRequestDetail: 
2025-06-19T01:11:55.2855804Z         
2025-06-19T01:11:55.2856116Z           with mongodbatlas_advanced_cluster.test,
2025-06-19T01:11:55.2856742Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-19T01:11:55.2857332Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-19T01:11:55.2857628Z         
2025-06-19T01:11:55.3305783Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (135.40s)
```

- 2025-06-20 PASS 15 minutes
- 2025-06-21 PASS 19 minutes
- 2025-06-22 PASS 13 minutes
- 2025-06-23 PASS 16 minutes
- 2025-06-24 PASS 16 minutes
- 2025-06-25

### Error 2025-06-25T01:09:33+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T01:09:33.216000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset',confidence=1.0,ts_when='15 days ago')
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