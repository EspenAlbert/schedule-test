# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 4) FAIL(x 3)
Success rate: 57.14%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 15 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T00:28:48.5927049Z === RUN   TestAccCluster_basicGCP
2025-07-04T00:28:53.1188560Z === CONT  TestAccCluster_basicGCP
2025-07-04T03:28:55.6374654Z === NAME  TestAccCluster_basicGCP
2025-07-04T03:28:55.6375339Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-04T03:28:55.6375802Z         
2025-07-04T03:28:55.6376941Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.6377605Z         
2025-07-04T03:28:55.6377991Z           with mongodbatlas_cluster.basic_gcp,
2025-07-04T03:28:55.6378838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-04T03:28:55.6379745Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-04T03:28:55.6380433Z         
2025-07-04T03:28:55.6997890Z --- FAIL: TestAccCluster_basicGCP (10802.58s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T00:28:03.0648685Z === RUN   TestAccCluster_basicGCP
2025-07-05T00:28:09.1143949Z === CONT  TestAccCluster_basicGCP
2025-07-05T03:28:11.6692529Z === NAME  TestAccCluster_basicGCP
2025-07-05T03:28:11.6693386Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:28:11.6694064Z         
2025-07-05T03:28:11.6695316Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.6696236Z         
2025-07-05T03:28:11.6696792Z           with mongodbatlas_cluster.basic_gcp,
2025-07-05T03:28:11.6697842Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-05T03:28:11.6698748Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-05T03:28:11.6699257Z         
2025-07-05T03:28:11.7212378Z --- FAIL: TestAccCluster_basicGCP (10802.61s)
```
### 2025-07-06
#### PASS 15 minutes
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T00:31:31.6865508Z === RUN   TestAccCluster_basicGCP
2025-07-07T00:31:36.2481995Z === CONT  TestAccCluster_basicGCP
2025-07-07T03:31:38.7608772Z === NAME  TestAccCluster_basicGCP
2025-07-07T03:31:38.7609606Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-07T03:31:38.7610278Z         
2025-07-07T03:31:38.7611546Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:38.7612300Z         
2025-07-07T03:31:38.7612609Z           with mongodbatlas_cluster.basic_gcp,
2025-07-07T03:31:38.7613422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-07T03:31:38.7614068Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-07T03:31:38.7614590Z         
2025-07-07T03:31:38.8070593Z --- FAIL: TestAccCluster_basicGCP (10802.57s)
```
### 2025-07-08
#### PASS 17 minutes