# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da931af4f6cc389e8089a/clusters/test-acc-tf-c-1945741705006167467 | dev | flaky_500 | 269.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 27 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 28 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 29 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 29 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 30 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 26 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 26 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 26 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 29 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:41+00:00
```
2026-01-07T00:30:41.6349542Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-01-07T00:30:43.8372088Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-01-07T00:35:11.3159907Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-01-07T00:35:11.3162183Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:35:11.3162966Z         
2026-01-07T00:35:11.3165885Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931af4f6cc389e8089a/clusters/test-acc-tf-c-1945741705006167467 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:35:11.3167700Z         
2026-01-07T00:35:11.3168302Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:35:11.3169745Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:35:11.3170836Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:35:11.3171389Z         
2026-01-07T00:35:11.5289656Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (269.89s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 30 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 22 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 23 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
