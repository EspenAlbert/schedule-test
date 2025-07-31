# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029470000) |  | dev | timeout | 10802.10s
[2025-07-14 00:30](#error-2025-07-14t0030580000) |  | dev | timeout | 10802.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 25 minutes
- 2025-07-03 PASS 23 minutes
- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 24 minutes
- 2025-07-06 PASS 24 minutes
- 2025-07-07 PASS 23 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 38 minutes
- 2025-07-10
  - PASS 25 minutes
  - PASS 23 minutes
- 2025-07-11

### Error 2025-07-11T00:29:47+00:00
```
2025-07-11T00:29:47.8999385Z === RUN   TestAccCluster_ProviderRegionName
2025-07-11T00:29:49.8191126Z === CONT  TestAccCluster_ProviderRegionName
2025-07-11T03:29:52.7602447Z === NAME  TestAccCluster_ProviderRegionName
2025-07-11T03:29:52.7602987Z     resource_cluster_test.go:544: Step 2/3 error: Error running apply: exit status 1
2025-07-11T03:29:52.7603379Z         
2025-07-11T03:29:52.7604087Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:52.7604874Z         
2025-07-11T03:29:52.7605206Z           with mongodbatlas_cluster.multi_region,
2025-07-11T03:29:52.7605839Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-07-11T03:29:52.7606424Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-07-11T03:29:52.7606736Z         
2025-07-11T03:29:52.8102930Z --- FAIL: TestAccCluster_ProviderRegionName (10802.99s)
```

- 2025-07-12 PASS 23 minutes
- 2025-07-13 PASS an hour
- 2025-07-14

### Error 2025-07-14T00:30:58+00:00
```
2025-07-14T00:30:58.8243371Z === RUN   TestAccCluster_ProviderRegionName
2025-07-14T00:31:01.0168003Z === CONT  TestAccCluster_ProviderRegionName
2025-07-14T03:31:03.7864583Z === NAME  TestAccCluster_ProviderRegionName
2025-07-14T03:31:03.7865260Z     resource_cluster_test.go:544: Step 2/3 error: Error running apply: exit status 1
2025-07-14T03:31:03.7865897Z         
2025-07-14T03:31:03.7866835Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.7867675Z         
2025-07-14T03:31:03.7868105Z           with mongodbatlas_cluster.multi_region,
2025-07-14T03:31:03.7869125Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-07-14T03:31:03.7870281Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-07-14T03:31:03.7870757Z         
2025-07-14T03:31:03.8297159Z --- FAIL: TestAccCluster_ProviderRegionName (10802.82s)
```

- 2025-07-15 PASS 24 minutes
- 2025-07-16 PASS 25 minutes
- 2025-07-17 PASS 24 minutes
- 2025-07-18 PASS 39 minutes
- 2025-07-19 PASS 25 minutes
- 2025-07-20 PASS 28 minutes
- 2025-07-21 PASS 23 minutes
- 2025-07-22 PASS 22 minutes
- 2025-07-23
  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-07-24 PASS 24 minutes
- 2025-07-25 PASS 26 minutes
- 2025-07-26 PASS 25 minutes
- 2025-07-27 PASS 28 minutes
- 2025-07-28 PASS 23 minutes
- 2025-07-29 PASS 24 minutes
- 2025-07-30 PASS 24 minutes
- 2025-07-31 PASS 34 minutes