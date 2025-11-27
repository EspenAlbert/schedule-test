# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 11608.06s
[2025-11-15 00:27](#error-2025-11-15t0027180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6917c8e25b452e273f389216/clusters | dev | out_of_capacity | 2.05s
[2025-11-19 00:28](#error-2025-11-19t0028460000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/691d0f3ba9e010496ad0080c/clusters | dev | out_of_capacity | 2.05s
[2025-11-26 00:28](#error-2025-11-26t0028270000) |  | dev | timeout | 10802.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 18 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4923263Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-10-30T00:28:10.5058726Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-30T03:41:39.1015693Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-30T03:41:39.1016661Z     resource_cluster_test.go:1088: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:41:39.1017283Z         
2025-10-30T03:41:39.1018211Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-7996992143504846572): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:41:39.1018978Z         
2025-10-30T03:41:39.1019333Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (11608.60s)
```

- 2025-10-31 PASS 19 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 14 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 15 minutes
- 2025-11-06 PASS 23 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 38 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 12 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 17 minutes
- 2025-11-13 PASS 24 minutes
- 2025-11-14 PASS 18 minutes
- 2025-11-15

### Error 2025-11-15T00:27:18+00:00
```
2025-11-15T00:27:18.4400457Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-11-15T00:27:18.4506635Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-11-15T00:27:20.9348152Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-11-15T00:27:20.9349008Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-11-15T00:27:20.9349419Z         
2025-11-15T00:27:20.9351103Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6917c8e25b452e273f389216/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-11-15T00:27:20.9352437Z         
2025-11-15T00:27:20.9352739Z           with mongodbatlas_cluster.test,
2025-11-15T00:27:20.9353340Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-15T00:27:20.9353871Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-15T00:27:20.9354157Z         
2025-11-15T00:27:20.9843755Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.54s)
```

- 2025-11-16: MISSING
- 2025-11-17 PASS 16 minutes
- 2025-11-18 PASS 16 minutes
- 2025-11-19
  - FAIL 2 seconds

### Error 2025-11-19T00:28:46+00:00
```
2025-11-19T00:28:46.1654361Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-11-19T00:28:46.1667541Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-11-19T00:28:48.5892429Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-11-19T00:28:48.5893112Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-11-19T00:28:48.5893660Z         
2025-11-19T00:28:48.5895251Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691d0f3ba9e010496ad0080c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-11-19T00:28:48.5896329Z         
2025-11-19T00:28:48.5896758Z           with mongodbatlas_cluster.test,
2025-11-19T00:28:48.5897583Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-19T00:28:48.5898151Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-19T00:28:48.5898451Z         
2025-11-19T00:28:48.6356424Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.47s)
```

  - PASS 12 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21 PASS 12 minutes
- 2025-11-22 PASS 14 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 14 minutes
- 2025-11-25 PASS 17 minutes
- 2025-11-26

### Error 2025-11-26T00:28:27+00:00
```
2025-11-26T00:28:27.5544837Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-11-26T00:28:27.5562932Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-11-26T03:28:30.3630130Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-11-26T03:28:30.3631078Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-11-26T03:28:30.3643752Z         
2025-11-26T03:28:30.3645016Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-11-26T03:28:30.3645922Z         
2025-11-26T03:28:30.3646459Z           with mongodbatlas_cluster.test,
2025-11-26T03:28:30.3648160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-26T03:28:30.3649164Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-26T03:28:30.3650413Z         
2025-11-26T03:28:30.4152683Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.86s)
```

- 2025-11-27 PASS 20 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 13 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 19 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 14 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 14 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
