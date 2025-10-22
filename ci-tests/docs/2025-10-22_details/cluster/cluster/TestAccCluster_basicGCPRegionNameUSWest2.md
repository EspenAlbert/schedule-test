# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL(x 4)
Success rate: 90.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-24 00:26](#error-2025-09-24t0026590000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68d33ad1f1337d3c4efe55f9/clusters | dev | out_of_capacity | 2.05s
[2025-09-26 00:27](#error-2025-09-26t0027040000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68d5ddd614f56c035e3694b3/clusters | dev | out_of_capacity | 2.03s
[2025-10-16 00:29](#error-2025-10-16t0029420000) |  | dev | timeout | 10802.08s
[2025-10-22 08:27](#error-2025-10-22t0827230000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f89568ab288813b27fc554/clusters | qa | out_of_capacity | 2.05s

## Timeline
- 2025-09-22: MISSING
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
- 2025-10-03 PASS 15 minutes
- 2025-10-04 PASS 16 minutes
- 2025-10-05 PASS 13 minutes
- 2025-10-06 PASS 13 minutes
- 2025-10-07 PASS 26 minutes
- 2025-10-08 PASS 14 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 21 minutes
- 2025-10-11 PASS 18 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 19 minutes
- 2025-10-14 PASS 16 minutes
- 2025-10-15 PASS 29 minutes
- 2025-10-16

### Error 2025-10-16T00:29:42+00:00
```
2025-10-16T00:29:42.6881590Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-10-16T00:29:42.6899494Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-16T03:29:45.3819032Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-16T03:29:45.3819803Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-10-16T03:29:45.3820212Z         
2025-10-16T03:29:45.3821038Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-16T03:29:45.3821895Z         
2025-10-16T03:29:45.3822297Z           with mongodbatlas_cluster.test,
2025-10-16T03:29:45.3822893Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-16T03:29:45.3823702Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-16T03:29:45.3824098Z         
2025-10-16T03:29:45.4336030Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.75s)
```

- 2025-10-17 PASS an hour
- 2025-10-18 PASS 16 minutes
- 2025-10-19 PASS 15 minutes
- 2025-10-20
  - PASS 52 minutes
  - PASS 13 minutes
- 2025-10-21 PASS 13 minutes
- 2025-10-22
  - PASS 17 minutes
  - FAIL 2 seconds

### Error 2025-10-22T08:27:23+00:00
```
2025-10-22T08:27:23.0932274Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-10-22T08:27:23.0965812Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-22T08:27:25.5049579Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-22T08:27:25.5050353Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-10-22T08:27:25.5050866Z         
2025-10-22T08:27:25.5052335Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/68f89568ab288813b27fc554/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-22T08:27:25.5053549Z         
2025-10-22T08:27:25.5053865Z           with mongodbatlas_cluster.test,
2025-10-22T08:27:25.5054556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-22T08:27:25.5055093Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-22T08:27:25.5055382Z         
2025-10-22T08:27:25.5536689Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.46s)
```
