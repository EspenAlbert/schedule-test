# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL TIMEOUT
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026150000) | ATLAS_GENERAL_ERROR /api/atlas/v1.0/groups/68f60e45de46041f56690112/clusters/test-acc-tf-c-1395000559841033870 | dev |  | 709.10s
[2025-10-30 00:28](#error-2025-10-30t0028080000) |  | dev | timeout | 17992.00s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 27 minutes
- 2025-10-16 PASS 45 minutes
- 2025-10-17 PASS 30 minutes
- 2025-10-18 PASS 27 minutes
- 2025-10-19 PASS 26 minutes
- 2025-10-20
  - PASS 55 minutes
  - FAIL 11 minutes

### Error 2025-10-20T10:26:15+00:00
```
2025-10-20T10:26:15.1313398Z === RUN   TestAccCluster_ProviderRegionName
2025-10-20T10:26:18.8140620Z === CONT  TestAccCluster_ProviderRegionName
2025-10-20T10:35:05.9404814Z === NAME  TestAccCluster_ProviderRegionName
2025-10-20T10:35:05.9405357Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-10-20T10:35:05.9405750Z         
2025-10-20T10:35:05.9408066Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1395000559841033870): error updating MongoDB Cluster (test-acc-tf-c-1395000559841033870): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68f60e45de46041f56690112/clusters/test-acc-tf-c-1395000559841033870: 400 (request "ATLAS_GENERAL_ERROR") Reason: No Capacity.
2025-10-20T10:35:05.9409368Z         
2025-10-20T10:35:05.9409706Z           with mongodbatlas_cluster.multi_region,
2025-10-20T10:35:05.9410339Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-20T10:35:05.9410926Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-20T10:35:05.9411228Z         
2025-10-20T10:35:17.3163056Z    test_name=TestAccCluster_basic_RedactClientLogData
2025-10-20T10:38:08.7669663Z --- FAIL: TestAccCluster_ProviderRegionName (709.96s)
```

- 2025-10-21 PASS 25 minutes
- 2025-10-22
  - PASS 36 minutes
  - PASS 24 minutes
- 2025-10-23 PASS 55 minutes
- 2025-10-24 PASS 27 minutes
- 2025-10-25 PASS an hour
- 2025-10-26 PASS 26 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 27 minutes
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:08+00:00
```
2025-10-30T00:28:08.1345313Z === RUN   TestAccCluster_ProviderRegionName
2025-10-30T00:28:10.4938472Z === CONT  TestAccCluster_ProviderRegionName
2025-10-30T03:38:08.9813975Z === NAME  TestAccCluster_ProviderRegionName
2025-10-30T03:38:08.9814685Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-10-30T03:38:08.9815135Z         
2025-10-30T03:38:08.9816848Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7559459534810944119): error updating MongoDB Cluster (test-acc-tf-c-7559459534810944119): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-30T03:38:08.9818071Z         
2025-10-30T03:38:08.9818520Z           with mongodbatlas_cluster.multi_region,
2025-10-30T03:38:08.9819231Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-30T03:38:08.9819874Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-30T03:38:08.9820302Z         
2025-10-30T05:28:02.7476832Z 	running tests:
2025-10-30T05:28:02.7477604Z 		TestAccCluster_MultiRegion (4h59m52s)
2025-10-30T05:28:02.7478414Z 		TestAccCluster_ProviderRegionName (4h59m52s)
```

- 2025-10-31 PASS 35 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 28 minutes
- 2025-11-03 PASS 26 minutes
- 2025-11-04 PASS 34 minutes
- 2025-11-05
  - PASS 42 minutes
  - PASS 27 minutes
- 2025-11-06 PASS 34 minutes
- 2025-11-07 PASS 32 minutes
- 2025-11-08 PASS 53 minutes
- 2025-11-09 PASS 26 minutes
- 2025-11-10 PASS 26 minutes
- 2025-11-11 PASS 26 minutes
- 2025-11-12 PASS 30 minutes
- 2025-11-13
  - PASS 56 minutes
  - PASS 28 minutes