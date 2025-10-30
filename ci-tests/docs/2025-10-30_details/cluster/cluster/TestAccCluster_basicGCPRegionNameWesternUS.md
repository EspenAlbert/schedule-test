# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 10:40](#error-2025-10-01t1040550000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68dd053577784f3f4721a6a3/clusters | dev | out_of_capacity | 2.07s
[2025-10-22 00:28](#error-2025-10-22t0028570000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f825475a0fd0374334639b/clusters | dev | out_of_capacity | 2.05s
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 11608.06s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 19 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - FAIL 2 seconds

### Error 2025-10-01T10:40:55+00:00
```
2025-10-01T10:40:55.9976959Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-10-01T10:40:55.9989190Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-01T10:40:58.6620837Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-01T10:40:58.6621534Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-10-01T10:40:58.6622139Z         
2025-10-01T10:40:58.6623943Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68dd053577784f3f4721a6a3/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-01T10:40:58.6625086Z         
2025-10-01T10:40:58.6625372Z           with mongodbatlas_cluster.test,
2025-10-01T10:40:58.6626114Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-01T10:40:58.6626881Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-01T10:40:58.6627169Z         
2025-10-01T10:40:58.7082003Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.71s)
```

  - PASS 15 minutes
  - PASS 13 minutes
- 2025-10-02 PASS 22 minutes
- 2025-10-03 PASS 16 minutes
- 2025-10-04 PASS 18 minutes
- 2025-10-05 PASS 13 minutes
- 2025-10-06 PASS 14 minutes
- 2025-10-07 PASS 25 minutes
- 2025-10-08 PASS 15 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 21 minutes
- 2025-10-11 PASS 23 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 21 minutes
- 2025-10-14 PASS 15 minutes
- 2025-10-15 PASS 21 minutes
- 2025-10-16 PASS 28 minutes
- 2025-10-17 PASS 17 minutes
- 2025-10-18 PASS 16 minutes
- 2025-10-19 PASS 13 minutes
- 2025-10-20
  - PASS 17 minutes
  - PASS 13 minutes
- 2025-10-21 PASS 14 minutes
- 2025-10-22
  - FAIL 2 seconds

### Error 2025-10-22T00:28:57+00:00
```
2025-10-22T00:28:57.8290274Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-10-22T00:28:57.8339577Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-22T00:29:00.3028449Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-22T00:29:00.3029599Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-10-22T00:29:00.3030134Z         
2025-10-22T00:29:00.3031872Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68f825475a0fd0374334639b/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-22T00:29:00.3033523Z         
2025-10-22T00:29:00.3034057Z           with mongodbatlas_cluster.test,
2025-10-22T00:29:00.3035084Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-22T00:29:00.3036105Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-22T00:29:00.3036635Z         
2025-10-22T00:29:00.3471374Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.52s)
```

  - PASS 13 minutes
- 2025-10-23 PASS 30 minutes
- 2025-10-24 PASS 19 minutes
- 2025-10-25 PASS 23 minutes
- 2025-10-26 PASS 12 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 17 minutes
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
