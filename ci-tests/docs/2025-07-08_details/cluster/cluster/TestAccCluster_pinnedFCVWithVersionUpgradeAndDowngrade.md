# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 21 minutes
```
2025-07-01T08:33:37.0088753Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-01T08:33:37.0090829Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-01T08:55:35.4991112Z --- PASS: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1318.49s)
```
### 2025-07-02
#### PASS 21 minutes
```
2025-07-02T00:28:55.2449995Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-02T00:28:55.2451863Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-02T00:50:45.5721962Z --- PASS: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1310.33s)
```
### 2025-07-03
#### PASS 22 minutes
```
2025-07-03T00:29:32.3598688Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-03T00:29:32.3601802Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-03T00:52:23.7869224Z --- PASS: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1371.43s)
```
### 2025-07-04
#### PASS 22 minutes
```
2025-07-04T00:28:53.1088805Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-04T00:28:53.1091037Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-04T00:51:09.7271889Z --- PASS: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1336.62s)
```
### 2025-07-05
#### PASS 20 minutes
```
2025-07-05T00:28:09.1112928Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-05T00:28:09.1115368Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-05T00:49:05.1448777Z --- PASS: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1256.04s)
```
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
```
2025-07-07T00:31:36.2399771Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-07T00:31:36.2479373Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-07T00:54:26.3672398Z --- PASS: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1370.13s)
```
### 2025-07-08
#### PASS 22 minutes
```
2025-07-08T00:29:14.7595433Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-08T00:29:14.7605603Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-08T00:51:25.6300876Z --- PASS: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1330.87s)
```