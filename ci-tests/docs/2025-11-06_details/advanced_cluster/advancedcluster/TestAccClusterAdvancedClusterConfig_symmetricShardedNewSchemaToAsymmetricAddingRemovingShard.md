# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) TIMEOUT
Success rate: 100.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 51 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 52 minutes
- 2025-10-11 PASS 53 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 55 minutes
- 2025-10-14 PASS 48 minutes
- 2025-10-15 PASS 50 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 49 minutes
- 2025-10-18 PASS 49 minutes
- 2025-10-19 PASS 51 minutes
- 2025-10-20
  - PASS 48 minutes
  - PASS 44 minutes
- 2025-10-21 PASS 48 minutes
- 2025-10-22
  - PASS 50 minutes
  - PASS 52 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 51 minutes
- 2025-10-26 PASS 48 minutes
- 2025-10-27 PASS 3 hours
- 2025-10-28 PASS 50 minutes
- 2025-10-29 PASS 51 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2612675Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-10-30T00:29:52.4651458Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-10-30T03:44:40.2806534Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-10-30T03:44:40.2807844Z     resource_test.go:693: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:44:40.2808549Z         
2025-10-30T03:44:40.2809010Z         Error: Error in update
2025-10-30T03:44:40.2809453Z         
2025-10-30T03:44:40.2810079Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:44:40.2811218Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:44:40.2812971Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:44:40.2813553Z         
2025-10-30T03:44:40.2814388Z         cluster=test-acc-tf-c-7245092745045748215 didn't reach desired state: IDLE,
2025-10-30T03:44:40.2815483Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:44:40.2816804Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:44:40.2844883Z   
2025-10-30T05:28:11.5675579Z 		TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (4h58m19s)
2025-10-30T05:28:11.5677105Z 		TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (4h58m19s)
2025-10-30T05:28:11.5678726Z 		TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (4h58m19s)
```

- 2025-10-31 PASS 50 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 42 minutes
- 2025-11-03 PASS 51 minutes
- 2025-11-04 PASS 54 minutes
- 2025-11-05
  - PASS an hour
  - PASS 45 minutes
- 2025-11-06 PASS 56 minutes