# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## Timeline
### 2025-07-01
#### PASS 17 minutes
```
2025-07-01T08:33:33.2107671Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-01T08:33:37.0295496Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-01T08:50:54.7146013Z --- PASS: TestAccCluster_WithBiConnectorGCP (1039.64s)
```
### 2025-07-02
#### PASS 18 minutes
```
2025-07-02T00:28:47.5980245Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-02T00:28:55.2468909Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-02T00:46:53.2455002Z --- PASS: TestAccCluster_WithBiConnectorGCP (1082.24s)
```
### 2025-07-03
#### PASS 16 minutes
```
2025-07-03T00:29:26.0744520Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-03T00:29:32.3638822Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-03T00:46:17.8010708Z --- PASS: TestAccCluster_WithBiConnectorGCP (1009.89s)
```
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T00:28:48.5927600Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-04T00:28:53.1164747Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-04T03:28:55.7282414Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-04T03:28:55.7283589Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-04T03:28:55.7284215Z         
2025-07-04T03:28:55.7285420Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.7286304Z         
2025-07-04T03:28:55.7286773Z           with mongodbatlas_cluster.basic_gcp,
2025-07-04T03:28:55.7287732Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-04T03:28:55.7288674Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-04T03:28:55.7289161Z         
2025-07-04T03:28:55.7746305Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.38s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T00:28:03.0649648Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-05T00:28:09.1120358Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-05T03:28:11.8489903Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-05T03:28:11.8490794Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:28:11.8491726Z         
2025-07-05T03:28:11.8493014Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.8493984Z         
2025-07-05T03:28:11.8494509Z           with mongodbatlas_cluster.basic_gcp,
2025-07-05T03:28:11.8495863Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-05T03:28:11.8496809Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-05T03:28:11.8497288Z         
2025-07-05T03:28:11.8984334Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10805.52s)
```
### 2025-07-06
#### PASS 14 minutes
```
2025-07-06T00:32:00.8630726Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-06T00:32:04.2356455Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-06T00:46:55.9525056Z --- PASS: TestAccCluster_WithBiConnectorGCP (893.33s)
```
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T00:31:31.6866423Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-07T00:31:36.2481483Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-07T03:31:38.9494707Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-07T03:31:38.9495594Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-07T03:31:38.9496263Z         
2025-07-07T03:31:38.9497509Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:38.9498419Z         
2025-07-07T03:31:38.9498936Z           with mongodbatlas_cluster.basic_gcp,
2025-07-07T03:31:38.9500020Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-07T03:31:38.9501017Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-07T03:31:38.9501523Z         
2025-07-07T03:31:39.0024844Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.43s)
```
### 2025-07-08
#### PASS 18 minutes
```
2025-07-08T00:29:11.7938140Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-08T00:29:14.7600629Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-08T00:47:36.7944343Z --- PASS: TestAccCluster_WithBiConnectorGCP (1103.30s)
```