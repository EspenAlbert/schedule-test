# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) TIMEOUT
Success rate: 100.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17992.00s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 28 minutes
- 2025-10-07 PASS 31 minutes
- 2025-10-08 PASS 31 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 32 minutes
- 2025-10-11 PASS 29 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 28 minutes
- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 30 minutes
- 2025-10-16 PASS 41 minutes
- 2025-10-17 PASS 29 minutes
- 2025-10-18 PASS 29 minutes
- 2025-10-19 PASS 30 minutes
- 2025-10-20
  - PASS 33 minutes
  - PASS 28 minutes
- 2025-10-21 PASS 28 minutes
- 2025-10-22
  - PASS 34 minutes
  - PASS 27 minutes
- 2025-10-23 PASS 55 minutes
- 2025-10-24 PASS 56 minutes
- 2025-10-25 PASS 30 minutes
- 2025-10-26 PASS 28 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 28 minutes
- 2025-10-29 PASS 32 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4933265Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-30T00:28:10.4937006Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-30T03:45:44.2536891Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-30T03:45:44.2537711Z     resource_cluster_test.go:1398: Step 5/7 error: Error running apply: exit status 1
2025-10-30T03:45:44.2538418Z         
2025-10-30T03:45:44.2539754Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1889992595511508052): error updating MongoDB Cluster (test-acc-tf-c-1889992595511508052): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-30T03:45:44.2540780Z         
2025-10-30T03:45:44.2541173Z           with mongodbatlas_cluster.test,
2025-10-30T03:45:44.2541769Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-10-30T03:45:44.2542486Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-10-30T03:45:44.2542784Z         
2025-10-30T05:28:02.7478414Z 		TestAccCluster_ProviderRegionName (4h59m52s)
2025-10-30T05:28:02.7479168Z 		TestAccCluster_RegionsConfig (4h59m52s)
2025-10-30T05:28:02.7480088Z 		TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4h59m52s)
```

- 2025-10-31 PASS 32 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 28 minutes
- 2025-11-03 PASS 29 minutes
- 2025-11-04 PASS 30 minutes