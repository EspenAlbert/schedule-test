# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) TIMEOUT
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17992.00s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 29 minutes
- 2025-11-04 PASS 30 minutes
- 2025-11-05
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-11-06 PASS 31 minutes
- 2025-11-07 PASS 30 minutes
- 2025-11-08 PASS 55 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 27 minutes
- 2025-11-11 PASS 28 minutes
- 2025-11-12 PASS 30 minutes
- 2025-11-13 PASS 41 minutes
- 2025-11-14 PASS 32 minutes
- 2025-11-15 PASS 29 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 30 minutes
- 2025-11-18 PASS 31 minutes
- 2025-11-19
  - PASS 31 minutes
  - PASS 27 minutes
- 2025-11-20 PASS 30 minutes
- 2025-11-21 PASS 27 minutes
- 2025-11-22 PASS 28 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 28 minutes
- 2025-11-25 PASS 31 minutes
- 2025-11-26 PASS 29 minutes
- 2025-11-27 PASS 30 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 28 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 28 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 28 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 29 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 30 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
