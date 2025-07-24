# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 10)
Success rate: 74.36%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-28 00:27](#error-2025-06-28t0027520000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/685f3705285361756493db4a/clusters | dev | out_of_capacity | 2.06s
[2025-06-30 00:30](#error-2025-06-30t0030400000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6861daaeb061b0401a4b94b8/clusters | dev | out_of_capacity | 2.06s
[2025-07-02 00:28](#error-2025-07-02t0028550000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68647d43948ea608f1ec2d35/clusters | dev | out_of_capacity | 2.06s
[2025-07-04 00:28](#error-2025-07-04t0028530000) |  | dev | timeout | 10802.06s
[2025-07-05 00:28](#error-2025-07-05t0028090000) |  | dev | timeout | 10802.06s
[2025-07-07 00:31](#error-2025-07-07t0031360000) |  | dev | timeout | 10802.08s
[2025-07-09 00:29](#error-2025-07-09t0029500000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/686db7fb72415e231233c242/clusters | dev | out_of_capacity | 2.06s
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 10802.09s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10802.01s
[2025-07-20 00:32](#error-2025-07-20t0032570000) |  | qa | timeout | 10802.07s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 13 minutes
- 2025-06-26 PASS 12 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28

### Error 2025-06-28T00:27:52+00:00
```
2025-06-28T00:27:52.4393580Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-28T00:27:52.4436776Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-28T00:27:55.0100026Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-28T00:27:55.0101184Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-28T00:27:55.0101801Z         
2025-06-28T00:27:55.0103111Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/685f3705285361756493db4a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-28T00:27:55.0104165Z         
2025-06-28T00:27:55.0104589Z           with mongodbatlas_cluster.test,
2025-06-28T00:27:55.0105290Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-28T00:27:55.0105812Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-28T00:27:55.0106089Z         
2025-06-28T00:27:55.0582775Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.62s)
```

- 2025-06-29 PASS 14 minutes
- 2025-06-30

### Error 2025-06-30T00:30:40+00:00
```
2025-06-30T00:30:40.1142167Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-30T00:30:40.1159702Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-30T00:30:42.6218229Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-30T00:30:42.6219173Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-30T00:30:42.6219824Z         
2025-06-30T00:30:42.6221402Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6861daaeb061b0401a4b94b8/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-30T00:30:42.6222460Z         
2025-06-30T00:30:42.6222749Z           with mongodbatlas_cluster.test,
2025-06-30T00:30:42.6223421Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-30T00:30:42.6224230Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-30T00:30:42.6225009Z         
2025-06-30T00:30:42.6733271Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.56s)
```

- 2025-07-01
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-07-02

### Error 2025-07-02T00:28:55+00:00
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

- 2025-07-03 PASS 13 minutes
- 2025-07-04

### Error 2025-07-04T00:28:53+00:00
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

- 2025-07-05

### Error 2025-07-05T00:28:09+00:00
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

- 2025-07-06 PASS 12 minutes
- 2025-07-07

### Error 2025-07-07T00:31:36+00:00
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

- 2025-07-08 PASS 13 minutes
- 2025-07-09

### Error 2025-07-09T00:29:50+00:00
```
2025-07-09T00:29:50.2460712Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-09T00:29:50.2471097Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-09T00:29:52.7800146Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-09T00:29:52.7800822Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-09T00:29:52.7801315Z         
2025-07-09T00:29:52.7802788Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/686db7fb72415e231233c242/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-07-09T00:29:52.7803832Z         
2025-07-09T00:29:52.7804249Z           with mongodbatlas_cluster.test,
2025-07-09T00:29:52.7805148Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-09T00:29:52.7805684Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-09T00:29:52.7805976Z         
2025-07-09T00:29:52.8306838Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.58s)
```

- 2025-07-10
  - PASS 16 minutes
  - PASS 12 minutes
- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8178299Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-11T00:29:49.8381670Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-11T03:29:52.6617538Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-11T03:29:52.6618504Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-11T03:29:52.6619519Z         
2025-07-11T03:29:52.6620507Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:52.6621041Z         
2025-07-11T03:29:52.6621345Z           with mongodbatlas_cluster.test,
2025-07-11T03:29:52.6622062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:29:52.6622946Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-11T03:29:52.6623332Z         
2025-07-11T03:29:52.6907914Z    test_name=TestAccCluster_basicAzure test_terraform_path=/home/runner/work/_temp/a92267c2-51a1-48fa-be94-9558573594f2/terraform test_working_directory=/tmp/plugintest798671213
2025-07-11T03:29:52.7178662Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.89s)
```

- 2025-07-12 PASS 12 minutes
- 2025-07-13 PASS 12 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0102370Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-14T00:31:01.0115427Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-14T03:31:03.1176268Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-14T03:31:03.1177273Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:03.1177947Z         
2025-07-14T03:31:03.1179197Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.1180261Z         
2025-07-14T03:31:03.1180757Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:03.1181774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:03.1182673Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:03.1183158Z         
2025-07-14T03:31:03.1616278Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.15s)
```

- 2025-07-15 PASS 11 minutes
- 2025-07-16 PASS 11 minutes
- 2025-07-17 PASS 11 minutes
- 2025-07-18 PASS 16 minutes
- 2025-07-19 PASS 13 minutes
- 2025-07-20

### Error 2025-07-20T00:32:57+00:00
```
2025-07-20T00:32:57.2488131Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-20T00:32:57.2579143Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-20T03:32:59.9268670Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-20T03:32:59.9283527Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-20T03:32:59.9284248Z         
2025-07-20T03:32:59.9285580Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-20T03:32:59.9286531Z         
2025-07-20T03:32:59.9287059Z           with mongodbatlas_cluster.test,
2025-07-20T03:32:59.9288124Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-20T03:32:59.9290221Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-20T03:32:59.9290806Z         
2025-07-20T03:32:59.9861583Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.73s)
```

- 2025-07-21 PASS 12 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-07-24 PASS 13 minutes