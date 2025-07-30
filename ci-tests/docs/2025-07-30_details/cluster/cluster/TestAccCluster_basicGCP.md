# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 34) FAIL(x 5)
Success rate: 87.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 00:28](#error-2025-07-04t0028480000) |  | dev | timeout | 10802.06s
[2025-07-05 00:28](#error-2025-07-05t0028030000) |  | dev | timeout | 10802.06s
[2025-07-07 00:31](#error-2025-07-07t0031310000) |  | dev | timeout | 10802.06s
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10802.07s
[2025-07-20 00:32](#error-2025-07-20t0032510000) |  | qa | timeout | 10802.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 26 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04

### Error 2025-07-04T00:28:48+00:00
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

- 2025-07-05

### Error 2025-07-05T00:28:03+00:00
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

- 2025-07-06 PASS 15 minutes
- 2025-07-07

### Error 2025-07-07T00:31:31+00:00
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

- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-07-11 PASS 28 minutes
- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 32 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4796132Z === RUN   TestAccCluster_basicGCP
2025-07-14T00:31:01.0312743Z === CONT  TestAccCluster_basicGCP
2025-07-14T03:31:03.6708494Z === NAME  TestAccCluster_basicGCP
2025-07-14T03:31:03.6710040Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:03.6710928Z         
2025-07-14T03:31:03.6712468Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.6713553Z         
2025-07-14T03:31:03.6714497Z           with mongodbatlas_cluster.basic_gcp,
2025-07-14T03:31:03.6715922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-14T03:31:03.6717045Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-14T03:31:03.6717726Z         
2025-07-14T03:31:03.7244248Z --- FAIL: TestAccCluster_basicGCP (10802.70s)
```

- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 14 minutes
- 2025-07-19 PASS 15 minutes
- 2025-07-20

### Error 2025-07-20T00:32:51+00:00
```
2025-07-20T00:32:51.3744018Z === RUN   TestAccCluster_basicGCP
2025-07-20T00:32:57.2506289Z === CONT  TestAccCluster_basicGCP
2025-07-20T03:32:59.6880711Z === NAME  TestAccCluster_basicGCP
2025-07-20T03:32:59.6881571Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-20T03:32:59.6882254Z         
2025-07-20T03:32:59.6883827Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-20T03:32:59.6884690Z         
2025-07-20T03:32:59.6885007Z           with mongodbatlas_cluster.basic_gcp,
2025-07-20T03:32:59.6885627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-20T03:32:59.6886257Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-20T03:32:59.6886791Z         
2025-07-20T03:32:59.7290168Z --- FAIL: TestAccCluster_basicGCP (10802.48s)
```

- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 14 minutes
- 2025-07-25 PASS 16 minutes
- 2025-07-26 PASS 16 minutes
- 2025-07-27 PASS 16 minutes
- 2025-07-28 PASS 14 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 16 minutes