# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) TIMEOUT
Success rate: 100.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 25 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 22 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 25 minutes
- 2025-10-14 PASS 33 minutes
- 2025-10-15 PASS 21 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18 PASS 20 minutes
- 2025-10-19 PASS 21 minutes
- 2025-10-20
  - PASS 29 minutes
  - PASS 16 minutes
- 2025-10-21 PASS 18 minutes
- 2025-10-22
  - PASS 23 minutes
  - PASS 20 minutes
- 2025-10-23 PASS 32 minutes
- 2025-10-24 PASS 33 minutes
- 2025-10-25 PASS 42 minutes
- 2025-10-26 PASS 21 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 20 minutes
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2623510Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-30T00:29:52.4736518Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-30T03:43:57.1159229Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-30T03:43:57.1160714Z     resource_test.go:895: Step 6/8 error: Error running apply: exit status 1
2025-10-30T03:43:57.1161266Z         
2025-10-30T03:43:57.1161777Z         Error: Error in update
2025-10-30T03:43:57.1162133Z         
2025-10-30T03:43:57.1162511Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:43:57.1163197Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:43:57.1163853Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:43:57.1164363Z         
2025-10-30T03:43:57.1165024Z         cluster=test-acc-tf-c-2812213703455607401 didn't reach desired state: IDLE,
2025-10-30T03:43:57.1166378Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:43:57.1167074Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:44:40.2804067Z    test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest3081564049 test_step_number=2
2025-10-30T05:28:11.5680097Z 		TestAccClusterAdvancedCluster_biConnectorConfig (4h58m19s)
2025-10-30T05:28:11.5680863Z 		TestAccClusterAdvancedCluster_pausedToUnpaused (4h58m19s)
2025-10-30T05:28:11.5681959Z 		TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4h58m19s)
```

- 2025-10-31 PASS 26 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 21 minutes
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 26 minutes
- 2025-11-05
  - PASS 29 minutes
  - PASS 21 minutes
- 2025-11-06 PASS 26 minutes