# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) TIMEOUT FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027290000) |  | dev | timeout | 17993.00s
[2025-10-20 10:26](#error-2025-10-20t1026150000) | ATLAS_GENERAL_ERROR /api/atlas/v1.0/groups/68f60e45de46041f56690112/clusters/test-acc-tf-c-1395000559841033870 | dev |  | 709.10s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 29 minutes
- 2025-09-25 PASS 31 minutes
- 2025-09-26 PASS 30 minutes
- 2025-09-27 PASS 30 minutes
- 2025-09-28 PASS 29 minutes
- 2025-09-29 PASS 40 minutes
- 2025-09-30
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-10-01
  - PASS 31 minutes
  - PASS 25 minutes
  - PASS 27 minutes
  - PASS 24 minutes
  - PASS 44 minutes
  - PASS 27 minutes
  - PASS 36 minutes
  - PASS 27 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 29 minutes
- 2025-10-04 PASS 41 minutes
- 2025-10-05 PASS 24 minutes
- 2025-10-06 PASS 45 minutes
- 2025-10-07

### Error 2025-10-07T00:27:29+00:00
```
2025-10-07T00:27:29.2618079Z === RUN   TestAccCluster_ProviderRegionName
2025-10-07T00:27:32.1586904Z === CONT  TestAccCluster_ProviderRegionName
2025-10-07T03:38:40.9073945Z === NAME  TestAccCluster_ProviderRegionName
2025-10-07T03:38:40.9074581Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-10-07T03:38:40.9075048Z         
2025-10-07T03:38:40.9076841Z         Error: error updating MongoDB Cluster (test-acc-tf-c-292321286439676877): error updating MongoDB Cluster (test-acc-tf-c-292321286439676877): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-07T03:38:40.9077727Z         
2025-10-07T03:38:40.9078053Z           with mongodbatlas_cluster.multi_region,
2025-10-07T03:38:40.9078691Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-07T03:38:40.9079278Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-07T03:38:40.9079578Z         
2025-10-07T05:27:25.2538981Z panic: test timed out after 5h0m0s
2025-10-07T05:27:25.2539722Z 	running tests:
2025-10-07T05:27:25.2538981Z panic: test timed out after 5h0m0s
2025-10-07T05:27:25.2539722Z 	running tests:
2025-10-07T05:27:25.2540340Z 		TestAccCluster_ProviderRegionName (4h59m53s)
```

- 2025-10-08 PASS 31 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 34 minutes
- 2025-10-11 PASS 31 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 33 minutes
- 2025-10-14 PASS 42 minutes
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