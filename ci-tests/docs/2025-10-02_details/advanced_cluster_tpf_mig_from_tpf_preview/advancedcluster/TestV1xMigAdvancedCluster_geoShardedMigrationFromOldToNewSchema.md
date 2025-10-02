# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2025-09-19 to 2025-10-02 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455010000) |  | dev | flaky_500 | 1197.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 39 minutes
- 2025-09-20 PASS 39 minutes
- 2025-09-21 PASS 38 minutes
- 2025-09-22 PASS 38 minutes
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