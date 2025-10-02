# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:28](#error-2025-09-14t0028420000) |  | qa | timeout | 10802.05s
[2025-09-15 06:20](#error-2025-09-15t0620470000) |  | qa | timeout | 10802.06s
[2025-09-24 00:26](#error-2025-09-24t0026590000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68d33ad1f1337d3c4efe55f9/clusters | dev | out_of_capacity | 2.05s
[2025-09-26 00:27](#error-2025-09-26t0027040000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68d5ddd614f56c035e3694b3/clusters | dev | out_of_capacity | 2.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 28 minutes
- 2025-09-04 PASS 15 minutes
- 2025-09-05 PASS 13 minutes
- 2025-09-06 PASS 20 minutes
- 2025-09-07 PASS 17 minutes
- 2025-09-08
  - PASS 27 minutes
  - PASS 13 minutes
  - PASS 15 minutes
- 2025-09-09 PASS 15 minutes
- 2025-09-10 PASS 16 minutes
- 2025-09-11 PASS 12 minutes
- 2025-09-12 PASS 14 minutes
- 2025-09-13 PASS 21 minutes
- 2025-09-14

### Error 2025-09-14T00:28:42+00:00
```
2025-09-14T00:28:42.3126010Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-09-14T00:28:42.3145734Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-14T03:28:44.7876227Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-14T03:28:44.7877062Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-09-14T03:28:44.7877844Z         
2025-09-14T03:28:44.7878870Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-14T03:28:44.7879542Z         
2025-09-14T03:28:44.7879857Z           with mongodbatlas_cluster.test,
2025-09-14T03:28:44.7880582Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-14T03:28:44.7881242Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-14T03:28:44.7881754Z         
2025-09-14T03:28:44.8361598Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.52s)
```

- 2025-09-15
  - PASS 14 minutes
  - FAIL 3 hours

### Error 2025-09-15T06:20:47+00:00
```
2025-09-15T06:20:47.5455937Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-09-15T06:20:47.5503271Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-15T09:20:50.1311856Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-15T09:20:50.1312784Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-09-15T09:20:50.1313438Z         
2025-09-15T09:20:50.1314688Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-15T09:20:50.1315622Z         
2025-09-15T09:20:50.1316083Z           with mongodbatlas_cluster.test,
2025-09-15T09:20:50.1317119Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-15T09:20:50.1318032Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-15T09:20:50.1318521Z         
2025-09-15T09:20:50.1790424Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.63s)
```

- 2025-09-16 PASS 16 minutes
- 2025-09-17 PASS 16 minutes
- 2025-09-18 PASS 20 minutes
- 2025-09-19 PASS 15 minutes
- 2025-09-20 PASS 28 minutes
- 2025-09-21 PASS 15 minutes
- 2025-09-22 PASS 14 minutes
- 2025-09-23 PASS 16 minutes
- 2025-09-24

### Error 2025-09-24T00:26:59+00:00
```
2025-09-24T00:26:59.5846084Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-09-24T00:26:59.6062716Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-24T00:27:02.0829687Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-24T00:27:02.0830269Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-09-24T00:27:02.0830732Z         
2025-09-24T00:27:02.0832290Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68d33ad1f1337d3c4efe55f9/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-09-24T00:27:02.0833328Z         
2025-09-24T00:27:02.0833898Z           with mongodbatlas_cluster.test,
2025-09-24T00:27:02.0834741Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-24T00:27:02.0835270Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-24T00:27:02.0835547Z         
2025-09-24T00:27:02.1294818Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.53s)
```

- 2025-09-25 PASS 16 minutes
- 2025-09-26

### Error 2025-09-26T00:27:04+00:00
```
2025-09-26T00:27:04.6467930Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-09-26T00:27:04.6479731Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-26T00:27:06.8862000Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-09-26T00:27:06.8862702Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-09-26T00:27:06.8863119Z         
2025-09-26T00:27:06.8864646Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68d5ddd614f56c035e3694b3/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-09-26T00:27:06.8865853Z         
2025-09-26T00:27:06.8866154Z           with mongodbatlas_cluster.test,
2025-09-26T00:27:06.8866747Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-26T00:27:06.8867292Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-26T00:27:06.8867586Z         
2025-09-26T00:27:06.9348821Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.29s)
```

- 2025-09-27 PASS 25 minutes
- 2025-09-28 PASS 16 minutes
- 2025-09-29 PASS 29 minutes
- 2025-09-30
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-10-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 22 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 11 minutes
- 2025-10-02 PASS 14 minutes