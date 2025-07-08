# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 35 minutes
### 2025-07-03
#### PASS 36 minutes
### 2025-07-04
#### PASS 39 minutes
### 2025-07-05
#### PASS 36 minutes
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
### 2025-07-08
#### PASS 40 minutes