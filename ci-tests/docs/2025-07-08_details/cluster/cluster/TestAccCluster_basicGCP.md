# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## Timeline
### 2025-07-01
#### PASS 26 minutes
```
2025-07-01T08:33:33.2107126Z === RUN   TestAccCluster_basicGCP
2025-07-01T08:33:37.0295014Z === CONT  TestAccCluster_basicGCP
2025-07-01T08:59:38.0148358Z --- PASS: TestAccCluster_basicGCP (1560.99s)
```
### 2025-07-02
#### PASS 15 minutes
```
2025-07-02T00:28:47.5979281Z === RUN   TestAccCluster_basicGCP
2025-07-02T00:28:55.2478404Z === CONT  TestAccCluster_basicGCP
2025-07-02T00:44:11.6342894Z --- PASS: TestAccCluster_basicGCP (916.39s)
```
### 2025-07-03
#### PASS 17 minutes
```
2025-07-03T00:29:26.0743997Z === RUN   TestAccCluster_basicGCP
2025-07-03T00:29:32.3639884Z === CONT  TestAccCluster_basicGCP
2025-07-03T00:46:47.6758316Z --- PASS: TestAccCluster_basicGCP (1035.31s)
```
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
```
2025-07-06T00:32:00.8630180Z === RUN   TestAccCluster_basicGCP
2025-07-06T00:32:04.2363488Z === CONT  TestAccCluster_basicGCP
2025-07-06T00:47:36.8882562Z --- PASS: TestAccCluster_basicGCP (932.67s)
```
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
```
2025-07-08T00:29:11.7937600Z === RUN   TestAccCluster_basicGCP
2025-07-08T00:29:14.7708403Z === CONT  TestAccCluster_basicGCP
2025-07-08T00:47:06.6086168Z --- PASS: TestAccCluster_basicGCP (1071.84s)
```