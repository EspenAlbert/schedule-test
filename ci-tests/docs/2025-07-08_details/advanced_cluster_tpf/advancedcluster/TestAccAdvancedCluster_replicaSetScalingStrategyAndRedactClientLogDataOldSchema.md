# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 36 minutes
```
2025-07-01T08:20:46.7729509Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-01T08:20:46.7774981Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-01T08:20:46.7898182Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2190.86s)
```
### 2025-07-02
#### PASS 35 minutes
```
2025-07-02T01:46:50.6520721Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-02T01:46:50.6544102Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-02T01:46:50.6707036Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2102.19s)
```
### 2025-07-03
#### PASS 36 minutes
```
2025-07-03T01:45:42.2305916Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-03T01:45:42.2343511Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-03T01:45:42.2504600Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2160.18s)
```
### 2025-07-04
#### PASS 39 minutes
```
2025-07-04T04:07:06.1330581Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-04T04:07:06.1353906Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-04T04:07:06.1579735Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2378.48s)
```
### 2025-07-05
#### PASS 36 minutes
```
2025-07-05T03:55:54.4251423Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-05T03:55:54.4281906Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-05T03:55:54.4415370Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2168.34s)
```
### 2025-07-06
#### FAIL 17 minutes
```
2025-07-06T01:46:53.5878148Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.5915983Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.6067609Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.6068388Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6068846Z         
2025-07-06T01:46:53.6069216Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6069531Z         
2025-07-06T01:46:53.6069857Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6070505Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6071100Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6071397Z         
2025-07-06T01:46:53.6071826Z         error getting project (6869c9c87267b5775b6856a5): error getting project's
2025-07-06T01:46:53.6072259Z         limits (6869c9c87267b5775b6856a5):
2025-07-06T01:46:53.6072810Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c87267b5775b6856a5/limits
2025-07-06T01:46:53.6073593Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6074155Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6074533Z         BadRequestDetail: 
2025-07-06T01:46:53.6101049Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1035.89s)
```
### 2025-07-07
#### PASS 34 minutes
```
2025-07-07T03:58:24.8956943Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-07T03:58:24.8982417Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-07T03:58:24.9120804Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2043.56s)
```
### 2025-07-08
#### PASS 40 minutes
```
2025-07-08T02:00:19.2778958Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-08T02:00:19.2819266Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-08T02:00:19.2971459Z --- PASS: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2434.23s)
```