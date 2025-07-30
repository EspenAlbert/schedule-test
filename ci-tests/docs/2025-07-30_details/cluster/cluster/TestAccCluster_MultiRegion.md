# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029470000) |  | dev | timeout | 10802.08s
[2025-07-14 00:30](#error-2025-07-14t0030580000) |  | dev | timeout | 10802.06s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 27 minutes
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 26 minutes
- 2025-07-04 PASS 27 minutes
- 2025-07-05 PASS 23 minutes
- 2025-07-06 PASS 25 minutes
- 2025-07-07 PASS 24 minutes
- 2025-07-08 PASS 24 minutes
- 2025-07-09 PASS 42 minutes
- 2025-07-10
  - PASS 24 minutes
  - PASS 26 minutes
- 2025-07-11

### Error 2025-07-11T00:29:47+00:00
```
2025-07-11T00:29:47.8995041Z === RUN   TestAccCluster_MultiRegion
2025-07-11T00:29:49.8192190Z === CONT  TestAccCluster_MultiRegion
2025-07-11T03:29:52.6163387Z === NAME  TestAccCluster_MultiRegion
2025-07-11T03:29:52.6163968Z     resource_cluster_test.go:480: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:29:52.6164723Z         
2025-07-11T03:29:52.6165579Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:52.6166289Z         
2025-07-11T03:29:52.6166626Z           with mongodbatlas_cluster.multi_region,
2025-07-11T03:29:52.6167356Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-07-11T03:29:52.6168030Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-07-11T03:29:52.6168343Z         
2025-07-11T03:29:52.6601711Z --- FAIL: TestAccCluster_MultiRegion (10802.84s)
```

- 2025-07-12 PASS 26 minutes
- 2025-07-13 PASS 42 minutes
- 2025-07-14

### Error 2025-07-14T00:30:58+00:00
```
2025-07-14T00:30:58.8242154Z === RUN   TestAccCluster_MultiRegion
2025-07-14T00:31:01.0176884Z === CONT  TestAccCluster_MultiRegion
2025-07-14T03:31:03.5614047Z === NAME  TestAccCluster_MultiRegion
2025-07-14T03:31:03.5614849Z     resource_cluster_test.go:480: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:03.5615291Z         
2025-07-14T03:31:03.5616086Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.5616808Z         
2025-07-14T03:31:03.5617226Z           with mongodbatlas_cluster.multi_region,
2025-07-14T03:31:03.5617942Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-07-14T03:31:03.5618523Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-07-14T03:31:03.5618911Z         
2025-07-14T03:31:03.6081683Z --- FAIL: TestAccCluster_MultiRegion (10802.59s)
```

- 2025-07-15 PASS 27 minutes
- 2025-07-16 PASS 25 minutes
- 2025-07-17 PASS 26 minutes
- 2025-07-18 PASS 39 minutes
- 2025-07-19 PASS 26 minutes
- 2025-07-20 PASS 26 minutes
- 2025-07-21 PASS 24 minutes
- 2025-07-22 PASS 22 minutes
- 2025-07-23
  - PASS 31 minutes
  - PASS 26 minutes
  - PASS 28 minutes
  - PASS 25 minutes
- 2025-07-24 PASS 26 minutes
- 2025-07-25 PASS 28 minutes
- 2025-07-26 PASS 27 minutes
- 2025-07-27 PASS 27 minutes
- 2025-07-28 PASS 25 minutes
- 2025-07-29 PASS 28 minutes
- 2025-07-30 PASS 28 minutes