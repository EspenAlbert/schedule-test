# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 8 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 19 minutes
```
2025-06-20T01:46:12.3356463Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-20T01:46:12.3391182Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-20T01:46:12.3499508Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1196.20s)
```
### 2025-06-21
#### PASS 20 minutes
```
2025-06-21T01:47:13.0099708Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-21T01:47:13.0131509Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-21T01:47:13.0246545Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1245.36s)
```
### 2025-06-22
#### FAIL 14 minutes
```
2025-06-22T03:04:12.6126117Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T03:04:12.6149319Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T03:04:12.6322724Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T03:04:12.6324052Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2025-06-22T03:04:12.6324855Z         
2025-06-22T03:04:12.6325497Z         Error: error when getting project properties after create
2025-06-22T03:04:12.6326046Z         
2025-06-22T03:04:12.6326711Z           with mongodbatlas_project.test,
2025-06-22T03:04:12.6327749Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T03:04:12.6328673Z           12: resource "mongodbatlas_project" "test" {
2025-06-22T03:04:12.6329148Z         
2025-06-22T03:04:12.6329924Z         error getting project (6857560baf7a0954e84b0993): error getting project's
2025-06-22T03:04:12.6330696Z         limits (6857560baf7a0954e84b0993):
2025-06-22T03:04:12.6331679Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6857560baf7a0954e84b0993/limits
2025-06-22T03:04:12.6332837Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T03:04:12.6333834Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T03:04:12.6334484Z         BadRequestDetail: 
2025-06-22T03:04:12.6349031Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (884.09s)
```
### 2025-06-23
#### PASS 20 minutes
```
2025-06-23T01:49:14.0950638Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-23T01:49:14.0992152Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-23T01:49:14.1134989Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1203.46s)
```
### 2025-06-24
#### PASS 30 minutes
```
2025-06-24T02:00:03.6483351Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-24T02:00:03.6517744Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-24T02:00:03.6655460Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1831.37s)
```
### 2025-06-25
#### PASS 17 minutes
```
2025-06-25T01:46:02.2036191Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-25T01:46:02.2084399Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-25T01:46:02.2220280Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1075.85s)
```
### 2025-06-26
#### PASS 22 minutes
```
2025-06-26T01:58:04.8009770Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-26T01:58:04.8041849Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-26T01:58:04.8171400Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1336.63s)
```
#### PASS 17 minutes
```
2025-06-26T05:26:49.4852469Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-26T05:26:49.4913369Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-26T05:26:49.5026026Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1073.71s)
```