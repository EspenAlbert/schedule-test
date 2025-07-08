# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 15 minutes
### 2025-07-03
#### PASS 15 minutes
### 2025-07-04
#### PASS 18 minutes
### 2025-07-05
#### PASS 16 minutes
### 2025-07-06
#### FAIL 16 minutes
```
2025-07-06T01:46:53.5858138Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-06T01:46:53.5911417Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-06T01:46:53.6047424Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-06T01:46:53.6048043Z     resource_advanced_cluster_test.go:693: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6048493Z         
2025-07-06T01:46:53.6048856Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6049172Z         
2025-07-06T01:46:53.6049501Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6050146Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6050850Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6051151Z         
2025-07-06T01:46:53.6051582Z         error getting project (6869c9c8690ae45e168bfab2): error getting project's
2025-07-06T01:46:53.6052024Z         limits (6869c9c8690ae45e168bfab2):
2025-07-06T01:46:53.6052576Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c8690ae45e168bfab2/limits
2025-07-06T01:46:53.6053218Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6053776Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6054154Z         BadRequestDetail: 
2025-07-06T01:46:53.6066305Z    test_working_directory=/tmp/plugintest3276952453 test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema test_terraform_path=/home/runner/work/_temp/49e06ad0-d3ea-49ad-aac7-0c6cd418a6b9/terraform
2025-07-06T01:46:53.6097731Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (987.20s)
```
### 2025-07-07
#### PASS 13 minutes
### 2025-07-08
#### PASS 14 minutes