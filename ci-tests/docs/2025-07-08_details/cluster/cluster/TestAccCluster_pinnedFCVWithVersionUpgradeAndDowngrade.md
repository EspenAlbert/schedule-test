# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 21 minutes
### 2025-07-03
#### PASS 22 minutes
### 2025-07-04
#### PASS 22 minutes
### 2025-07-05
#### PASS 20 minutes
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:32:04.2082516Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:04.2112679Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:39.6167877Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:39.6168762Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-07-06T00:32:39.6169360Z         
2025-07-06T00:32:39.6169908Z         Error: error when getting project properties after create
2025-07-06T00:32:39.6170238Z         
2025-07-06T00:32:39.6170693Z           with mongodbatlas_project.test,
2025-07-06T00:32:39.6171514Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:39.6172087Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:39.6172576Z         
2025-07-06T00:32:39.6173497Z         error getting project (6869c406690ae45e168bd08d): error getting project's
2025-07-06T00:32:39.6174140Z         limits (6869c406690ae45e168bd08d):
2025-07-06T00:32:39.6175013Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c406690ae45e168bd08d/limits
2025-07-06T00:32:39.6176204Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:39.6177192Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:39.6177852Z         BadRequestDetail: 
2025-07-06T00:32:39.6781016Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (35.47s)
```
### 2025-07-07
#### PASS 22 minutes
### 2025-07-08
#### PASS 22 minutes