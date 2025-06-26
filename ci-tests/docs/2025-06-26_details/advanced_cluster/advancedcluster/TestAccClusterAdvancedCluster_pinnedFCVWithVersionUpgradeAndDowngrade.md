# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 22 minutes
```
2025-06-20T01:01:51.2339098Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-20T01:03:39.2940293Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-20T01:25:56.1166765Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1336.85s)
```
### 2025-06-21
#### PASS 23 minutes
```
2025-06-21T01:01:55.6574257Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-21T01:03:06.3674146Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-21T01:27:00.9522515Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1434.58s)
```
### 2025-06-22
#### FAIL 18 minutes
```
2025-06-22T01:03:37.8791080Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T01:05:07.9352905Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T01:20:43.4202847Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T01:20:43.4203823Z     resource_advanced_cluster_test.go:1159: Step 5/8 error: Error running post-apply refresh plan: exit status 1
2025-06-22T01:20:43.4204399Z         
2025-06-22T01:20:43.4204870Z         Error: error when getting project properties after create
2025-06-22T01:20:43.4205191Z         
2025-06-22T01:20:43.4205506Z           with mongodbatlas_project.test,
2025-06-22T01:20:43.4206232Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T01:20:43.4206863Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T01:20:43.4207211Z         
2025-06-22T01:20:43.4207660Z         error getting project (685756c8ab82446d9bfb37f6): error getting project's
2025-06-22T01:20:43.4208300Z         limits (685756c8ab82446d9bfb37f6):
2025-06-22T01:20:43.4208989Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb37f6/limits
2025-06-22T01:20:43.4209752Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:20:43.4210314Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:20:43.4210694Z         BadRequestDetail: 
2025-06-22T01:23:45.2437161Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1117.31s)
```
### 2025-06-23
#### PASS 21 minutes
```
2025-06-23T01:00:22.4650556Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-23T01:01:46.5290288Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-23T01:23:31.6863678Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1305.19s)
```
### 2025-06-24
#### PASS 26 minutes
```
2025-06-24T00:59:18.4757897Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-24T01:00:52.0713436Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-24T01:26:56.7680391Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1564.70s)
```
### 2025-06-25
#### PASS 21 minutes
```
2025-06-25T01:09:29.9800844Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-25T01:10:48.9195547Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-25T01:31:53.3549564Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1264.45s)
```
### 2025-06-26
#### PASS 23 minutes
```
2025-06-26T00:59:06.4283910Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-26T01:00:07.3825275Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-26T01:23:43.8111535Z --- PASS: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1416.43s)
```