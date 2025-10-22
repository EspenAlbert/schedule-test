# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027290000) |  | dev | timeout | 10802.03s
[2025-10-20 10:26](#error-2025-10-20t1026130000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f60e45de46041f56690112/clusters | dev | out_of_capacity | 4.02s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 30 minutes
- 2025-09-24 PASS 31 minutes
- 2025-09-25 PASS 32 minutes
- 2025-09-26 PASS 30 minutes
- 2025-09-27 PASS 36 minutes
- 2025-09-28 PASS 29 minutes
- 2025-09-29 PASS 40 minutes
- 2025-09-30
  - PASS 30 minutes
  - PASS 29 minutes
  - PASS 26 minutes
- 2025-10-01
  - PASS 31 minutes
  - PASS 27 minutes
  - PASS 41 minutes
  - PASS 26 minutes
  - PASS 45 minutes
  - PASS 30 minutes
  - PASS 52 minutes
  - PASS 26 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 28 minutes
- 2025-10-04 PASS 32 minutes
- 2025-10-05 PASS 25 minutes
- 2025-10-06 PASS 27 minutes
- 2025-10-07

### Error 2025-10-07T00:27:29+00:00
```
2025-10-07T00:27:29.2616992Z === RUN   TestAccCluster_MultiRegion
2025-10-07T00:27:32.1587414Z === CONT  TestAccCluster_MultiRegion
2025-10-07T03:27:34.3991478Z === NAME  TestAccCluster_MultiRegion
2025-10-07T03:27:34.3992364Z     resource_cluster_test.go:480: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:27:34.3992959Z         
2025-10-07T03:27:34.3993669Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-07T03:27:34.3994206Z         
2025-10-07T03:27:34.3994712Z           with mongodbatlas_cluster.multi_region,
2025-10-07T03:27:34.3995683Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-07T03:27:34.3996296Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-07T03:27:34.3996597Z         
2025-10-07T03:27:34.4428720Z --- FAIL: TestAccCluster_MultiRegion (10802.29s)
```

- 2025-10-08 PASS 31 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 36 minutes
- 2025-10-11 PASS 40 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 39 minutes
- 2025-10-14 PASS 43 minutes
- 2025-10-15 PASS 28 minutes
- 2025-10-16 PASS 47 minutes
- 2025-10-17 PASS 31 minutes
- 2025-10-18 PASS 28 minutes
- 2025-10-19 PASS 27 minutes
- 2025-10-20
  - PASS 52 minutes
  - FAIL 4 seconds

### Error 2025-10-20T10:26:13+00:00
```
2025-10-20T10:26:13.2127928Z === RUN   TestAccCluster_MultiRegion
2025-10-20T10:26:18.8143892Z === CONT  TestAccCluster_MultiRegion
2025-10-20T10:26:21.0267764Z    test_terraform_path=/home/runner/work/_temp/a1e70420-1b8e-4a35-bbea-fc98285590a7/terraform test_working_directory=/tmp/plugintest1040826813 test_name=TestAccCluster_MultiRegion
2025-10-20T10:26:21.0269361Z     resource_cluster_test.go:480: Step 1/2 error: Error running apply: exit status 1
2025-10-20T10:26:21.0270083Z         
2025-10-20T10:26:21.0272425Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68f60e45de46041f56690112/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-20T10:26:21.0273757Z         
2025-10-20T10:26:21.0274105Z           with mongodbatlas_cluster.multi_region,
2025-10-20T10:26:21.0275144Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-20T10:26:21.0275827Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-20T10:26:21.0276156Z         
2025-10-20T10:26:21.0700099Z --- FAIL: TestAccCluster_MultiRegion (4.18s)
```

- 2025-10-21 PASS 27 minutes
- 2025-10-22
  - PASS 37 minutes
  - PASS 26 minutes