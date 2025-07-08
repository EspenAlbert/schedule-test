# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 14 minutes
```
2025-07-01T08:20:46.7710855Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-01T08:20:46.7762304Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-01T08:20:46.7871524Z --- PASS: TestAccClusterAdvancedCluster_withLabels (889.46s)
```
### 2025-07-02
#### PASS 15 minutes
```
2025-07-02T01:46:50.6501878Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-02T01:46:50.6545399Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-02T01:46:50.6689354Z --- PASS: TestAccClusterAdvancedCluster_withLabels (927.19s)
```
### 2025-07-03
#### PASS 15 minutes
```
2025-07-03T01:45:42.2272759Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-03T01:45:42.2356982Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-03T01:45:42.2485766Z --- PASS: TestAccClusterAdvancedCluster_withLabels (926.76s)
```
### 2025-07-04
#### PASS 18 minutes
```
2025-07-04T04:07:06.1310389Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-04T04:07:06.1350833Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-04T04:07:06.1548244Z --- PASS: TestAccClusterAdvancedCluster_withLabels (1112.33s)
```
### 2025-07-05
#### PASS 16 minutes
```
2025-07-05T03:55:54.4232403Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-05T03:55:54.4291937Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-05T03:55:54.4396459Z --- PASS: TestAccClusterAdvancedCluster_withLabels (962.99s)
```
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
```
2025-07-07T03:58:24.8936564Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-07T03:58:24.8986446Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-07T03:58:24.9093925Z --- PASS: TestAccClusterAdvancedCluster_withLabels (806.40s)
```
### 2025-07-08
#### PASS 14 minutes
```
2025-07-08T02:00:19.2759044Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-08T02:00:19.2828937Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-08T02:00:19.2943586Z --- PASS: TestAccClusterAdvancedCluster_withLabels (867.38s)
```