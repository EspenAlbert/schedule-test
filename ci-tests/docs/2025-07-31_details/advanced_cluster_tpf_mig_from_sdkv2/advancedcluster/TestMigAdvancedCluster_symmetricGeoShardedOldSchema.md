# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_symmetricGeoShardedOldSchema Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029570000) |  | dev | timeout | 10805.07s
[2025-07-14 00:31](#error-2025-07-14t0031150000) |  | dev | timeout | 10805.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-07-03 PASS 16 minutes
- 2025-07-04 PASS 27 minutes
- 2025-07-05 PASS 15 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 28 minutes
- 2025-07-10
  - PASS 19 minutes
  - PASS 16 minutes
- 2025-07-11

### Error 2025-07-11T00:29:57+00:00
```
2025-07-11T00:29:57.2319138Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-11T00:29:57.2320128Z     resource_advanced_cluster_migration_test.go:30: Running test SDKv2 to TPF
2025-07-11T00:29:59.4901495Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-11T03:30:02.7814139Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-11T03:30:02.7815155Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:30:02.7815853Z         
2025-07-11T03:30:02.7816975Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:02.7817976Z         
2025-07-11T03:30:02.7818462Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T03:30:02.7819456Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T03:30:02.7820375Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T03:30:02.7821106Z         
2025-07-11T03:30:02.9688091Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (10805.74s)
```

- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 57 minutes
- 2025-07-14

### Error 2025-07-14T00:31:15+00:00
```
2025-07-14T00:31:15.4122664Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-14T00:31:15.4123341Z     resource_advanced_cluster_migration_test.go:30: Running test SDKv2 to TPF
2025-07-14T00:31:18.1125242Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-14T03:31:21.0221876Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-14T03:31:21.0222558Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:21.0223013Z         
2025-07-14T03:31:21.0223728Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:21.0224271Z         
2025-07-14T03:31:21.0224594Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:21.0225238Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:21.0225828Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:21.0226135Z         
2025-07-14T03:31:21.1001073Z    test_working_directory=/tmp/plugintest490085651 test_name=TestMigAdvancedCluster_singleShardedMultiCloud test_terraform_path=/home/runner/work/_temp/0754b9cb-92f8-47f8-aad5-b6975eb9ce41/terraform
2025-07-14T03:31:21.2293822Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (10805.81s)
```

- 2025-07-15 PASS 16 minutes
- 2025-07-16 PASS 21 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 22 minutes
- 2025-07-19 PASS 17 minutes
- 2025-07-20 PASS 16 minutes
- 2025-07-21 PASS 15 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-07-24 PASS 17 minutes
- 2025-07-25 PASS 18 minutes
- 2025-07-26 PASS 18 minutes
- 2025-07-27 PASS 19 minutes
- 2025-07-28 PASS 17 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 18 minutes
- 2025-07-31 PASS 24 minutes