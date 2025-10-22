# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026090000) |  | dev | timeout | 10807.04s
[2025-10-06 00:28](#error-2025-10-06t0028210000) | Step 1 2 | dev | flaky_client | 1514.00s
[2025-10-07 00:27](#error-2025-10-07t0027380000) |  | dev | timeout | 10805.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 40 minutes
- 2025-09-24 PASS 37 minutes
- 2025-09-25 PASS 41 minutes
- 2025-09-26 PASS 53 minutes
- 2025-09-27 PASS 34 minutes
- 2025-09-28 PASS 25 minutes
- 2025-09-29 PASS 27 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 27 minutes
  - PASS 22 minutes
  - PASS an hour
  - PASS 43 minutes
  - PASS 52 minutes
  - PASS 30 minutes
  - PASS 34 minutes
  - PASS 24 minutes
- 2025-10-02

### Error 2025-10-02T00:26:09+00:00
```
2025-10-02T00:26:09.5982572Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-02T00:26:12.2053099Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-02T03:26:16.7682345Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-02T03:26:16.7682975Z     resource_migration_v1x_test.go:283: Step 1/4 error: Error running apply: exit status 1
2025-10-02T03:26:16.7683365Z         
2025-10-02T03:26:16.7684008Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-02T03:26:16.7684497Z         
2025-10-02T03:26:16.7684820Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:26:16.7685397Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:26:16.7685934Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:26:16.7686226Z         
2025-10-02T03:26:16.7785423Z    test_terraform_path=/home/runner/work/_temp/808e531c-e8e2-4f52-a4c5-554108c78fd0/terraform test_working_directory=/tmp/plugintest1374974108 test_step_number=1
2025-10-02T03:26:17.0214392Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10807.42s)
```

- 2025-10-03 PASS 2 hours
- 2025-10-04 PASS an hour
- 2025-10-05 PASS 20 minutes
- 2025-10-06

### Error 2025-10-06T00:28:21+00:00
```
2025-10-06T00:28:21.4028889Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-06T00:28:24.5132872Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-06T00:46:35.9491712Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-06T00:46:35.9495752Z     resource_migration_v1x_test.go:283: Step 1/4 error: Check failed: Check 2/2 error: error getting independent shard scaling mode: Get "https://cloud-dev.mongodb.comtest/utils/auth/groups/68e30d25065c07374c437dfc/clusters/test-acc-tf-c-8340112535578634256/independentShardScalingMode": dial tcp: lookup cloud-dev.mongodb.comtest on 127.0.0.53:53: no such host
2025-10-06T00:53:35.4081161Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (1514.00s)
```

- 2025-10-07

### Error 2025-10-07T00:27:38+00:00
```
2025-10-07T00:27:38.9706315Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-07T00:27:40.6227855Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-07T03:27:44.3822429Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-07T03:27:44.3823151Z     resource_migration_v1x_test.go:283: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:27:44.3823579Z         
2025-10-07T03:27:44.3824310Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-07T03:27:44.3824873Z         
2025-10-07T03:27:44.3825216Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:27:44.3825872Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:27:44.3826486Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:27:44.3826827Z         
2025-10-07T03:27:44.5922498Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10805.62s)
```

- 2025-10-08 PASS 29 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 28 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 40 minutes
- 2025-10-14 PASS 37 minutes
- 2025-10-15 PASS 28 minutes
- 2025-10-16 PASS 35 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 24 minutes
- 2025-10-20 PASS 41 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 32 minutes
  - PASS 20 minutes