# advanced_cluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 38 minutes
```
2025-06-20T01:01:51.2333308Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-20T01:03:39.2943398Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-20T01:42:16.0569476Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2316.79s)
```
### 2025-06-21
#### PASS 37 minutes
```
2025-06-21T01:01:55.6568907Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-21T01:03:06.3656450Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-21T01:40:49.7191591Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2263.35s)
```
### 2025-06-22
#### FAIL 35 seconds
```
2025-06-22T01:03:37.8785672Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-22T01:05:07.8948091Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-22T01:05:43.8116757Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-22T01:05:43.8117577Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running apply: exit status 1
2025-06-22T01:05:43.8118098Z         
2025-06-22T01:05:43.8118490Z         Error: error when getting project properties after create
2025-06-22T01:05:43.8118891Z         
2025-06-22T01:05:43.8119215Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:05:43.8119951Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:05:43.8120720Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:05:43.8121193Z         
2025-06-22T01:05:43.8121617Z         error getting project (685756c8ab82446d9bfb3705): error getting project's
2025-06-22T01:05:43.8122241Z         limits (685756c8ab82446d9bfb3705):
2025-06-22T01:05:43.8122796Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb3705/limits
2025-06-22T01:05:43.8123429Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:05:43.8123973Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:05:43.8124342Z         BadRequestDetail: 
2025-06-22T01:05:43.8525856Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (35.96s)
```
### 2025-06-23
#### PASS 37 minutes
```
2025-06-23T01:00:22.4646332Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-23T01:01:46.5304061Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-23T01:38:58.4807456Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2231.96s)
```
### 2025-06-24
#### PASS 39 minutes
```
2025-06-24T00:59:18.4752916Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-24T01:00:52.1129677Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-24T01:40:32.6481694Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2380.54s)
```
### 2025-06-25
#### PASS 36 minutes
```
2025-06-25T01:09:29.9795649Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-25T01:10:48.9201722Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-25T01:46:52.4179716Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2163.50s)
```
### 2025-06-26
#### PASS 36 minutes
```
2025-06-26T00:59:06.4278045Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-26T01:00:07.3924434Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-26T01:36:52.1057937Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2204.71s)
```