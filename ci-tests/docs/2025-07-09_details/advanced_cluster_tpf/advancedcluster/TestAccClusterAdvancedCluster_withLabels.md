# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.09s
2025-06-05 00:35 | dev | 7.04s
2025-07-06 01:46 | qa | 987.02s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
### 2025-04-10
#### PASS 21 minutes
### 2025-04-11
#### PASS 15 minutes
### 2025-04-12
#### PASS 15 minutes
### 2025-04-13
#### PASS 18 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 14 minutes
### 2025-04-16
#### PASS 15 minutes
#### PASS 20 minutes
### 2025-04-17
#### PASS 14 minutes
### 2025-04-18
#### PASS 15 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### PASS 16 minutes
### 2025-04-21
#### PASS 20 minutes
### 2025-04-22
#### PASS 15 minutes
### 2025-04-23
#### PASS 19 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 15 minutes
### 2025-04-26
#### PASS 13 minutes
### 2025-04-27
#### PASS 18 minutes
### 2025-04-28
#### PASS 16 minutes
### 2025-04-29
#### PASS 18 minutes
### 2025-04-30
#### PASS 17 minutes
### 2025-05-01
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 18 minutes
#### PASS 15 minutes
### 2025-05-02
#### PASS 19 minutes
### 2025-05-03
#### PASS 16 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 16 minutes
### 2025-05-06
#### PASS 15 minutes
### 2025-05-07
#### PASS 16 minutes
### 2025-05-08
#### PASS 17 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 16 minutes
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:01.7931366Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-05-11T00:30:01.8184380Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-05-11T00:30:01.8210239Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-05-11T00:30:01.8210803Z     resource_advanced_cluster_test.go:690: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:01.8211208Z         
2025-05-11T00:30:01.8211718Z         Error: error creating project: test-acc-tf-p-3123777358899905581
2025-05-11T00:30:01.8212196Z         
2025-05-11T00:30:01.8212545Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8213207Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8213816Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8214121Z         
2025-05-11T00:30:01.8214580Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8214966Z         type
2025-05-11T00:30:01.8226479Z    test_name=TestAccClusterAdvancedCluster_withTags test_terraform_path=/home/runner/work/_temp/61c56429-49c6-424f-b94f-1956389e6696/terraform test_working_directory=/tmp/plugintest3879062597 test_step_number=1
2025-05-11T00:30:01.8304627Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1.92s)
```
### 2025-05-12
#### PASS 17 minutes
### 2025-05-13
#### PASS 15 minutes
#### PASS 13 minutes
### 2025-05-14
#### PASS 16 minutes
### 2025-05-15
#### PASS 15 minutes
### 2025-05-16
#### PASS 14 minutes
### 2025-05-17
#### PASS 14 minutes
### 2025-05-18
#### PASS 15 minutes
### 2025-05-19
#### PASS 17 minutes
### 2025-05-20
#### PASS 16 minutes
### 2025-05-21
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-05-22
#### PASS 15 minutes
### 2025-05-23
#### PASS 13 minutes
### 2025-05-24
#### PASS 13 minutes
### 2025-05-25
#### PASS 19 minutes
### 2025-05-26
#### PASS 13 minutes
### 2025-05-27
#### PASS 15 minutes
### 2025-05-28
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-05-29
#### PASS 23 minutes
### 2025-05-30
#### PASS 19 minutes
#### PASS 14 minutes
### 2025-05-31
#### PASS 16 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-02
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 13 minutes
#### PASS 15 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL 7 seconds
```
2025-06-05T00:35:38.5884301Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-05T00:35:38.5944237Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-05T00:35:38.6620719Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-06-05T00:35:38.6621076Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6621176Z         
2025-06-05T00:35:38.6621473Z         Error: error creating project: test-acc-tf-p-814718512569775059
2025-06-05T00:35:38.6621564Z         
2025-06-05T00:35:38.6621805Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6622258Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6622545Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6622638Z         
2025-06-05T00:35:38.6622993Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6623322Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6623613Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6623787Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (7.39s)
```
### 2025-06-06
#### PASS 17 minutes
### 2025-06-07
#### PASS 15 minutes
### 2025-06-08
#### PASS 17 minutes
### 2025-06-09
#### PASS 16 minutes
### 2025-06-10
#### PASS 21 minutes
### 2025-06-11
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 14 minutes
### 2025-06-14
#### PASS 15 minutes
### 2025-06-15
#### PASS 16 minutes
### 2025-06-16
#### PASS 22 minutes
### 2025-06-17
#### PASS 15 minutes
### 2025-06-18
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-06-19
#### PASS 46 minutes
### 2025-06-20
#### PASS 13 minutes
### 2025-06-21
#### PASS 15 minutes
### 2025-06-22
#### PASS 17 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 16 minutes
### 2025-06-25
#### PASS 13 minutes
### 2025-06-26
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-27
#### PASS 14 minutes
### 2025-06-28
#### PASS 14 minutes
### 2025-06-29
#### PASS 17 minutes
### 2025-06-30
#### PASS 15 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 13 minutes
#### PASS 14 minutes
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
### 2025-07-09
#### PASS 14 minutes