# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL TIMEOUT
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026130000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f60e45de46041f56690112/clusters | dev | out_of_capacity | 4.02s
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 17992.00s

## Timeline
- 2025-10-07: MISSING
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
- 2025-10-23 PASS 55 minutes
- 2025-10-24 PASS 40 minutes
- 2025-10-25 PASS 27 minutes
- 2025-10-26 PASS 27 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 31 minutes
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1400292Z === RUN   TestAccCluster_MultiRegion
2025-10-30T00:28:10.4942428Z === CONT  TestAccCluster_MultiRegion
2025-10-30T03:38:08.8407424Z === NAME  TestAccCluster_MultiRegion
2025-10-30T03:38:08.8408086Z     resource_cluster_test.go:480: Step 2/2 error: Error running apply: exit status 1
2025-10-30T03:38:08.8408685Z         
2025-10-30T03:38:08.8410105Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8904530776709325973): error updating MongoDB Cluster (test-acc-tf-c-8904530776709325973): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-30T03:38:08.8411070Z         
2025-10-30T03:38:08.8411407Z           with mongodbatlas_cluster.multi_region,
2025-10-30T03:38:08.8412145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-30T03:38:08.8412836Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-30T03:38:08.8413240Z         
2025-10-30T03:38:08.9812454Z    test_working_directory=/tmp/plugintest2265976080 test_name=TestAccCluster_ProviderRegionName test_terraform_path=/home/runner/work/_temp/6b18102a-be0c-40d5-a671-32aa7fa4c5b9/terraform
2025-10-30T05:28:02.7475714Z panic: test timed out after 5h0m0s
2025-10-30T05:28:02.7476832Z 	running tests:
2025-10-30T05:28:02.7477604Z 		TestAccCluster_MultiRegion (4h59m52s)
```

- 2025-10-31 PASS 37 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 28 minutes
- 2025-11-03 PASS 30 minutes
- 2025-11-04 PASS 37 minutes
- 2025-11-05
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-11-06 PASS 35 minutes