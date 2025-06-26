# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 15 minutes
```
2025-06-20T01:01:54.2561080Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-20T01:03:39.2501881Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-20T01:19:13.7534422Z --- PASS: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (934.51s)
```
### 2025-06-21
#### PASS 19 minutes
```
2025-06-21T01:01:57.0618302Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-21T01:03:06.3650800Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-21T01:22:22.7899751Z --- PASS: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1156.43s)
```
### 2025-06-22
#### PASS 13 minutes
```
2025-06-22T01:03:39.7370551Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-22T01:05:07.8966997Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-22T01:18:09.2289970Z --- PASS: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (781.33s)
```
### 2025-06-23
#### PASS 16 minutes
```
2025-06-23T01:00:25.7365541Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-23T01:01:46.4907340Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-23T01:18:10.7816829Z --- PASS: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (984.31s)
```
### 2025-06-24
#### PASS 16 minutes
```
2025-06-24T00:59:21.2377504Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-24T01:00:52.0753300Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-24T01:17:35.1665409Z --- PASS: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1003.09s)
```
### 2025-06-25
#### FAIL 2 minutes
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T01:09:33.216000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset',confidence=1.0,ts_when='a day ago')
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
### 2025-06-26
#### PASS 16 minutes
```
2025-06-26T00:59:07.7397031Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-26T01:00:07.3790357Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-26T01:16:33.3494605Z --- PASS: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (985.98s)
```