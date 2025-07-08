# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 29 minutes
```
2025-07-02T00:59:52.6746934Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-02T01:01:14.4755435Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-02T01:30:20.4104787Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1745.96s)
```
### 2025-07-03
#### PASS 30 minutes
```
2025-07-03T00:59:05.7138803Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-03T01:00:24.5874348Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-03T01:31:04.9914549Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1840.41s)
```
### 2025-07-04
#### PASS 29 minutes
```
2025-07-04T00:59:30.9320393Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-04T01:00:51.5866216Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-04T01:29:54.6862957Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1743.10s)
```
### 2025-07-05
#### PASS 30 minutes
```
2025-07-05T00:56:16.4288882Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-05T00:57:08.5812364Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-05T01:27:41.5661347Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1832.99s)
```
### 2025-07-06
#### FAIL 22 minutes
```
2025-07-06T01:01:22.8596985Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-06T01:02:29.8492135Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-06T01:21:28.2918621Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-06T01:21:28.2919396Z     resource_advanced_cluster_test.go:1008: Step 2/5 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:21:28.2919877Z         
2025-07-06T01:21:28.2920382Z         Error: error when getting project properties after create
2025-07-06T01:21:28.2920707Z         
2025-07-06T01:21:28.2921034Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:21:28.2921905Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:21:28.2922635Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:21:28.2922947Z         
2025-07-06T01:21:28.2923370Z         error getting project (6869cb2a690ae45e168c00ac): error getting project's
2025-07-06T01:21:28.2923814Z         limits (6869cb2a690ae45e168c00ac):
2025-07-06T01:21:28.2924654Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869cb2a690ae45e168c00ac/limits
2025-07-06T01:21:28.2925316Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:21:28.2925875Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:21:28.2926257Z         BadRequestDetail: 
2025-07-06T01:24:31.7021752Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1321.88s)
```
### 2025-07-07
#### PASS 28 minutes
```
2025-07-07T01:01:34.7119585Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-07T01:02:17.8818850Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-07T01:30:22.8328477Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1684.97s)
```
### 2025-07-08
#### PASS 29 minutes
```
2025-07-08T00:59:27.0895303Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-08T01:00:20.8817514Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-08T01:29:46.9505361Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1766.07s)
```