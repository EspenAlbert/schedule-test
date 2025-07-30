# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 32) FAIL(x 7)
Success rate: 82.05%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 00:28](#error-2025-07-04t0028530000) |  | dev | timeout | 10802.06s
[2025-07-05 00:28](#error-2025-07-05t0028090000) |  | dev | timeout | 10802.06s
[2025-07-07 00:31](#error-2025-07-07t0031360000) |  | dev | timeout | 10802.08s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10802.04s
[2025-07-17 00:30](#error-2025-07-17t0030250000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6878441fde3dfe20a0f4aee9/clusters | dev | out_of_capacity | 2.03s
[2025-07-20 00:32](#error-2025-07-20t0032570000) |  | qa | timeout | 10802.07s
[2025-07-23 13:23](#error-2025-07-23t1323170000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6880e2440afa8a5c60505e60/clusters | qa | out_of_capacity | 2.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 12 minutes
- 2025-07-03 PASS 15 minutes
- 2025-07-04

### Error 2025-07-04T00:28:53+00:00
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

- 2025-07-05

### Error 2025-07-05T00:28:09+00:00
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

- 2025-07-06 PASS 12 minutes
- 2025-07-07

### Error 2025-07-07T00:31:36+00:00
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

- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10
  - PASS 18 minutes
  - PASS 13 minutes
- 2025-07-11 PASS 37 minutes
- 2025-07-12 PASS 13 minutes
- 2025-07-13 PASS 13 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0101083Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-14T00:31:01.0204357Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-14T03:31:03.3445434Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-14T03:31:03.3446124Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:03.3446677Z         
2025-07-14T03:31:03.3447386Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.3448071Z         
2025-07-14T03:31:03.3448564Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:03.3449292Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:03.3450139Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:03.3450440Z         
2025-07-14T03:31:03.3849308Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.37s)
```

- 2025-07-15 PASS 13 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17

### Error 2025-07-17T00:30:25+00:00
```
2025-07-17T00:30:25.3120732Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-17T00:30:25.3352945Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-17T00:30:27.5945090Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-17T00:30:27.5946039Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-17T00:30:27.5946702Z         
2025-07-17T00:30:27.5948812Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6878441fde3dfe20a0f4aee9/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-07-17T00:30:27.5950084Z         
2025-07-17T00:30:27.5950391Z           with mongodbatlas_cluster.test,
2025-07-17T00:30:27.5951571Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-17T00:30:27.5952112Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-17T00:30:27.5952408Z         
2025-07-17T00:30:27.6405976Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.31s)
```

- 2025-07-18 PASS 26 minutes
- 2025-07-19 PASS 11 minutes
- 2025-07-20

### Error 2025-07-20T00:32:57+00:00
```
2025-07-20T00:32:57.2486843Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-20T00:32:57.2582635Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-20T03:32:59.9156347Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-20T03:32:59.9157303Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-20T03:32:59.9157961Z         
2025-07-20T03:32:59.9159398Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-20T03:32:59.9160057Z         
2025-07-20T03:32:59.9160352Z           with mongodbatlas_cluster.test,
2025-07-20T03:32:59.9160930Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-20T03:32:59.9161799Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-20T03:32:59.9162322Z         
2025-07-20T03:32:59.9263523Z    test_terraform_path=/home/runner/work/_temp/ff0b6c8e-23ab-4ea9-bd4d-0567e9349fe6/terraform test_working_directory=/tmp/plugintest38462959
2025-07-20T03:32:59.9727551Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.72s)
```

- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 12 minutes
  - PASS 13 minutes
  - FAIL 2 seconds

### Error 2025-07-23T13:23:17+00:00
```
2025-07-23T13:23:17.5225804Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-23T13:23:17.5270046Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-23T13:23:19.8741331Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-23T13:23:19.8741890Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-23T13:23:19.8742431Z         
2025-07-23T13:23:19.8744319Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6880e2440afa8a5c60505e60/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-07-23T13:23:19.8745351Z         
2025-07-23T13:23:19.8745840Z           with mongodbatlas_cluster.test,
2025-07-23T13:23:19.8746647Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-23T13:23:19.8747169Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-23T13:23:19.8747451Z         
2025-07-23T13:23:19.9188087Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.39s)
```

  - PASS 13 minutes
- 2025-07-24 PASS 13 minutes
- 2025-07-25 PASS 13 minutes
- 2025-07-26 PASS 12 minutes
- 2025-07-27 PASS 14 minutes
- 2025-07-28 PASS 14 minutes
- 2025-07-29 PASS 13 minutes
- 2025-07-30 PASS 16 minutes