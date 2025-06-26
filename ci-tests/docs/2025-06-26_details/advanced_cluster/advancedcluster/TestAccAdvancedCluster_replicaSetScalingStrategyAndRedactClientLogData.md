# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 31 minutes
```
2025-06-20T01:01:51.2330293Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-20T01:03:39.2952798Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-20T01:34:51.2850100Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1872.00s)
```
### 2025-06-21
#### PASS 30 minutes
```
2025-06-21T01:01:55.6566189Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-21T01:03:06.3665589Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-21T01:33:53.3057730Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1846.94s)
```
### 2025-06-22
#### FAIL 30 minutes
```
2025-06-22T01:03:37.8782625Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-22T01:05:07.8962864Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-22T01:31:29.3920120Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-22T01:31:29.3920856Z     resource_advanced_cluster_test.go:1008: Step 4/5 error: Error running pre-apply plan: exit status 1
2025-06-22T01:31:29.3921406Z         
2025-06-22T01:31:29.3921990Z         Error: error when getting project properties after create
2025-06-22T01:31:29.3922312Z         
2025-06-22T01:31:29.3922725Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:31:29.3923520Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:31:29.3924205Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:31:29.3924501Z         
2025-06-22T01:31:29.3924929Z         error getting project (685756c8ab82446d9bfb37e3): error getting project's
2025-06-22T01:31:29.3925359Z         limits (685756c8ab82446d9bfb37e3):
2025-06-22T01:31:29.3925903Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb37e3/limits
2025-06-22T01:31:29.3926544Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:31:29.3929189Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:31:29.3930064Z         BadRequestDetail: 
2025-06-22T01:35:41.2725983Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1833.38s)
```
### 2025-06-23
#### PASS 27 minutes
```
2025-06-23T01:00:22.4644298Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-23T01:01:46.4701513Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-23T01:28:50.8059447Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1624.34s)
```
### 2025-06-24
#### PASS 36 minutes
```
2025-06-24T00:59:18.4749146Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-24T01:00:52.1296588Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-24T01:37:39.0783958Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2206.95s)
```
### 2025-06-25
#### PASS 31 minutes
```
2025-06-25T01:09:29.9793416Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-25T01:10:48.9202734Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-25T01:42:38.4510173Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1909.54s)
```
### 2025-06-26
#### PASS 33 minutes
```
2025-06-26T00:59:06.4275056Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-26T01:00:07.3926297Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-26T01:33:55.4680348Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2028.08s)
```