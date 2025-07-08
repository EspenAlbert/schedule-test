# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 19 minutes
### 2025-07-03
#### PASS 18 minutes
### 2025-07-04
#### PASS 20 minutes
### 2025-07-05
#### PASS 18 minutes
### 2025-07-06
#### FAIL 12 minutes
```
2025-07-06T01:46:53.5884637Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.5908161Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.6000606Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.6001344Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6001811Z         
2025-07-06T01:46:53.6002181Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6002501Z         
2025-07-06T01:46:53.6002794Z           with mongodbatlas_project.test,
2025-07-06T01:46:53.6003370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T01:46:53.6003886Z           12: resource "mongodbatlas_project" "test" {
2025-07-06T01:46:53.6004160Z         
2025-07-06T01:46:53.6004589Z         error getting project (6869c9c8690ae45e168bfa5c): error getting project's
2025-07-06T01:46:53.6005029Z         limits (6869c9c8690ae45e168bfa5c):
2025-07-06T01:46:53.6005724Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c8690ae45e168bfa5c/limits
2025-07-06T01:46:53.6006382Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6006938Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6007422Z         BadRequestDetail: 
2025-07-06T01:46:53.6074967Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (734.02s)
```
### 2025-07-07
#### PASS 19 minutes
### 2025-07-08
#### PASS 21 minutes