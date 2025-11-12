# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-06 00:28](#error-2025-10-06t0028120000) | Step 1 2 | dev | flaky_client | 1277.00s
[2025-10-07 00:27](#error-2025-10-07t0027440000) |  | dev | timeout | 10807.03s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS an hour
- 2025-10-05 PASS 20 minutes
- 2025-10-06

### Error 2025-10-06T00:28:12+00:00
```
2025-10-06T00:28:12.4049072Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-06T00:28:12.4076383Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-06T00:43:21.7115748Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-06T00:43:21.7120928Z     resource_migration_v1x_test.go:283: Step 1/4 error: Check failed: Check 2/2 error: error getting independent shard scaling mode: Get "https://cloud-dev.mongodb.comtest/utils/auth/groups/68e30d19065c07374c42fe75/clusters/test-acc-tf-c-6920632677293240073/independentShardScalingMode": dial tcp: lookup cloud-dev.mongodb.comtest on 127.0.0.53:53: no such host
2025-10-06T00:49:26.9014208Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (1277.04s)
```

- 2025-10-07

### Error 2025-10-07T00:27:44+00:00
```
2025-10-07T00:27:44.2270878Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-07T00:27:46.6753258Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-07T03:27:51.2956851Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-07T03:27:51.2958306Z     resource_migration_v1x_test.go:283: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:27:51.2959007Z         
2025-10-07T03:27:51.2959484Z         Error: Error in create (legacy)
2025-10-07T03:27:51.2959935Z         
2025-10-07T03:27:51.2960488Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:27:51.2961630Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:27:51.2962669Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:27:51.2963198Z         
2025-10-07T03:27:51.2963967Z         cluster=test-acc-tf-c-8674691257852287386 didn't reach desired state: IDLE,
2025-10-07T03:27:51.2965062Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-07T03:27:51.2965809Z         'CREATING', timeout: 3h0m0s)
2025-10-07T03:27:51.5046993Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10807.28s)
```

- 2025-10-08 PASS 27 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 21 minutes
- 2025-10-11 PASS 32 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 21 minutes
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 28 minutes
- 2025-10-17 PASS 26 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 24 minutes
- 2025-10-20 PASS 33 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 37 minutes
  - PASS 22 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 36 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 21 minutes
- 2025-10-27 PASS an hour
- 2025-10-28: MISSING
- 2025-10-29 PASS 28 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 30 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 21 minutes
- 2025-11-03 PASS 39 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 27 minutes
  - PASS 23 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 28 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 20 minutes
- 2025-11-10 PASS 21 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 27 minutes