# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 14 minutes
```
2025-07-01T08:20:46.7710194Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-01T08:20:46.7764168Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-01T08:20:46.7871913Z --- PASS: TestAccClusterAdvancedCluster_withTags (890.30s)
```
### 2025-07-02
#### PASS 14 minutes
```
2025-07-02T01:46:50.6501212Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-02T01:46:50.6547312Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-02T01:46:50.6687355Z --- PASS: TestAccClusterAdvancedCluster_withTags (867.33s)
```
### 2025-07-03
#### PASS 15 minutes
```
2025-07-03T01:45:42.2271616Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-03T01:45:42.2359282Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-03T01:45:42.2486160Z --- PASS: TestAccClusterAdvancedCluster_withTags (928.44s)
```
### 2025-07-04
#### PASS 19 minutes
```
2025-07-04T04:07:06.1309734Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-04T04:07:06.1351163Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-04T04:07:06.1552926Z --- PASS: TestAccClusterAdvancedCluster_withTags (1143.22s)
```
### 2025-07-05
#### PASS 15 minutes
```
2025-07-05T03:55:54.4231743Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-05T03:55:54.4275054Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-05T03:55:54.4394483Z --- PASS: TestAccClusterAdvancedCluster_withTags (903.09s)
```
### 2025-07-06
#### FAIL 13 minutes
```
2025-07-06T01:46:53.5857465Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.5911754Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.6022080Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.6022698Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6023151Z         
2025-07-06T01:46:53.6023518Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6023832Z         
2025-07-06T01:46:53.6024159Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6024800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6025389Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6025687Z         
2025-07-06T01:46:53.6026113Z         error getting project (6869c9c87267b5775b68563f): error getting project's
2025-07-06T01:46:53.6026577Z         limits (6869c9c87267b5775b68563f):
2025-07-06T01:46:53.6027126Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c87267b5775b68563f/limits
2025-07-06T01:46:53.6028102Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6028669Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6029044Z         BadRequestDetail: 
2025-07-06T01:46:53.6094927Z --- FAIL: TestAccClusterAdvancedCluster_withTags (825.57s)
```
### 2025-07-07
#### PASS 14 minutes
```
2025-07-07T03:58:24.8935907Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-07T03:58:24.8990277Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-07T03:58:24.9101952Z --- PASS: TestAccClusterAdvancedCluster_withTags (868.49s)
```
### 2025-07-08
#### PASS 14 minutes
```
2025-07-08T02:00:19.2758386Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-08T02:00:19.2829949Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-08T02:00:19.2943978Z --- PASS: TestAccClusterAdvancedCluster_withTags (868.57s)
```