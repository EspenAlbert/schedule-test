# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 4) FAIL(x 3)
Success rate: 57.14%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 12 minutes
### 2025-07-03
#### PASS 15 minutes
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T00:28:53.1079943Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-04T00:28:53.1096818Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-04T03:28:55.6597377Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-04T03:28:55.6598275Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-04T03:28:55.6598925Z         
2025-07-04T03:28:55.6600118Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.6601148Z         
2025-07-04T03:28:55.6601641Z           with mongodbatlas_cluster.test,
2025-07-04T03:28:55.6602646Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-04T03:28:55.6603544Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-04T03:28:55.6604015Z         
2025-07-04T03:28:55.7203735Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.61s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T00:28:09.1103413Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T00:28:09.1155937Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T03:28:11.6463400Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T03:28:11.6464228Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-05T03:28:11.6464626Z         
2025-07-05T03:28:11.6465641Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.6466312Z         
2025-07-05T03:28:11.6466626Z           with mongodbatlas_cluster.test,
2025-07-05T03:28:11.6467477Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-05T03:28:11.6468010Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-05T03:28:11.6468405Z         
2025-07-05T03:28:11.7058151Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.59s)
```
### 2025-07-06
#### PASS 12 minutes
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T00:31:36.2391379Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-07T00:31:36.2483914Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-07T03:31:39.0109824Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-07T03:31:39.0110803Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-07T03:31:39.0111466Z         
2025-07-07T03:31:39.0112706Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:39.0113882Z         
2025-07-07T03:31:39.0114178Z           with mongodbatlas_cluster.test,
2025-07-07T03:31:39.0115139Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-07T03:31:39.0115676Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-07T03:31:39.0115964Z         
2025-07-07T03:31:39.0557108Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.81s)
```
### 2025-07-08
#### PASS 14 minutes