# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 14 minutes
### 2025-07-03
#### PASS 15 minutes
### 2025-07-04
#### PASS 19 minutes
### 2025-07-05
#### PASS 15 minutes
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
### 2025-07-08
#### PASS 14 minutes