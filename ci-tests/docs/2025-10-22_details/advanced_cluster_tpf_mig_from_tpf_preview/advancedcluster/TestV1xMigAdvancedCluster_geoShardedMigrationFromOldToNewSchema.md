# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455010000) |  | dev | flaky_500 | 1197.04s
[2025-10-06 00:28](#error-2025-10-06t0028120000) | Step 1 2 | dev | flaky_client | 1277.00s
[2025-10-07 00:27](#error-2025-10-07t0027440000) |  | dev | timeout | 10807.03s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 39 minutes
- 2025-09-24 PASS 40 minutes
- 2025-09-25 PASS 37 minutes
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 25 minutes
- 2025-09-28 PASS 22 minutes
- 2025-09-29 PASS 25 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 24 minutes
- 2025-10-01
  - PASS 41 minutes
  - PASS 23 minutes
  - FAIL 19 minutes

### Error 2025-10-01T04:55:01+00:00
```
2025-10-01T04:55:01.4352314Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-01T04:55:04.1422533Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-01T05:10:51.9497490Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-01T05:10:51.9498646Z     resource_migration_v1x_test.go:283: Step 1/4 error: Error running apply: exit status 1
2025-10-01T05:10:51.9499235Z         
2025-10-01T05:10:51.9499673Z         Error: error resolving container IDs
2025-10-01T05:10:51.9500110Z         
2025-10-01T05:10:51.9500637Z           with data.mongodbatlas_advanced_cluster.test,
2025-10-01T05:10:51.9501442Z           on terraform_plugin_test.tf line 63, in data "mongodbatlas_advanced_cluster" "test":
2025-10-01T05:10:51.9502114Z           63: 	data "mongodbatlas_advanced_cluster" "test" {
2025-10-01T05:10:51.9502406Z         
2025-10-01T05:10:51.9502896Z         cluster name = test-acc-tf-c-1306203576236835932, error details: (503 Service
2025-10-01T05:10:51.9503563Z         Unavailable) failed to decode response body: undefined response type
2025-10-01T05:10:51.9503905Z         
2025-10-01T05:10:51.9504240Z         Error: error resolving container IDs
2025-10-01T05:10:51.9504514Z         
2025-10-01T05:10:51.9504835Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-01T05:10:51.9505486Z           on terraform_plugin_test.tf line 69, in data "mongodbatlas_advanced_clusters" "test":
2025-10-01T05:10:51.9506069Z           69: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-01T05:10:51.9506368Z         
2025-10-01T05:10:51.9506874Z         cluster name = test-acc-tf-c-1306203576236835932, error details: (503 Service
2025-10-01T05:10:51.9507487Z         Unavailable) failed to decode response body: undefined response type
2025-10-01T05:14:58.8154362Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (1197.38s)
```

  - PASS 34 minutes
  - PASS 54 minutes
  - PASS 20 minutes
  - PASS 22 minutes
  - PASS 20 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 24 minutes
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