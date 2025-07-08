# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 4) FAIL(x 4)
Success rate: 50.00%

## Timeline
### 2025-07-01
#### PASS 12 minutes
```
2025-07-01T08:33:37.0081342Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-01T08:33:37.0092206Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-01T08:46:18.0395220Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (761.03s)
```
### 2025-07-02
#### FAIL 2 seconds
```
2025-07-02T00:28:55.2442937Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-02T00:28:55.2463121Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-02T00:28:57.7924609Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-02T00:28:57.7925468Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-02T00:28:57.7925869Z         
2025-07-02T00:28:57.7927295Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68647d43948ea608f1ec2d35/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-07-02T00:28:57.7928622Z         
2025-07-02T00:28:57.7929251Z           with mongodbatlas_cluster.test,
2025-07-02T00:28:57.7929848Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-02T00:28:57.7930372Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-02T00:28:57.7930658Z         
2025-07-02T00:28:57.8356428Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.59s)
```
### 2025-07-03
#### PASS 13 minutes
```
2025-07-03T00:29:32.3591541Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-03T00:29:32.3645879Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-03T00:42:52.3376569Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (799.97s)
```
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T00:28:53.1081336Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-04T00:28:53.1116945Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-04T03:28:55.6207128Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-04T03:28:55.6207873Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-04T03:28:55.6208278Z         
2025-07-04T03:28:55.6209164Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.6209896Z         
2025-07-04T03:28:55.6210257Z           with mongodbatlas_cluster.test,
2025-07-04T03:28:55.6211259Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-04T03:28:55.6211896Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-04T03:28:55.6212183Z         
2025-07-04T03:28:55.6889654Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.58s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T00:28:09.1104794Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-05T00:28:09.1161896Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-05T03:28:11.6166367Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-05T03:28:11.6167202Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-05T03:28:11.6167750Z         
2025-07-05T03:28:11.6168980Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.6169739Z         
2025-07-05T03:28:11.6170086Z           with mongodbatlas_cluster.test,
2025-07-05T03:28:11.6170874Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-05T03:28:11.6171899Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-05T03:28:11.6172287Z         
2025-07-05T03:28:11.6462757Z    test_name=TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T03:28:11.6657192Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.55s)
```
### 2025-07-06
#### PASS 12 minutes
```
2025-07-06T00:32:04.2075652Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-06T00:32:04.2114051Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-06T00:44:42.2416483Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (758.03s)
```
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T00:31:36.2392527Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-07T00:31:36.2403593Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-07T03:31:38.9307402Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-07T03:31:38.9308333Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-07T03:31:38.9308987Z         
2025-07-07T03:31:38.9310228Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:38.9311168Z         
2025-07-07T03:31:38.9311616Z           with mongodbatlas_cluster.test,
2025-07-07T03:31:38.9312203Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-07T03:31:38.9312734Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-07T03:31:38.9313250Z         
2025-07-07T03:31:38.9841493Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.75s)
```
### 2025-07-08
#### PASS 13 minutes
```
2025-07-08T00:29:14.7588303Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-08T00:29:14.7604902Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-08T00:43:12.4741700Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (837.71s)
```