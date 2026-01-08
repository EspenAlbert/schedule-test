# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:34](#error-2026-01-07t0034240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e8136d/clusters/test-acc-tf-c-3503804013355798009 | dev | flaky_500 | 72.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 28 minutes
  - PASS 24 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 30 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 24 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 32 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 28 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 29 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 29 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 24 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 28 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 29 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 28 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:34:24+00:00
```
2026-01-07T00:34:24.2973046Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-01-07T00:34:24.2982658Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-01-07T00:34:24.3093752Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-01-07T00:34:24.3094407Z     resource_migration_v1x_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:34:24.3094824Z         
2026-01-07T00:34:24.3095077Z         Error: Error in create
2026-01-07T00:34:24.3095551Z         
2026-01-07T00:34:24.3095883Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:24.3096523Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:24.3097112Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:24.3097423Z         
2026-01-07T00:34:24.3097872Z         cluster=test-acc-tf-c-3503804013355798009 didn't reach desired state: IDLE,
2026-01-07T00:34:24.3098272Z         error:
2026-01-07T00:34:24.3098991Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e8136d/clusters/test-acc-tf-c-3503804013355798009
2026-01-07T00:34:24.3099799Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:24.3100377Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:24.3100761Z         BadRequestDetail: 
2026-01-07T00:34:24.3101153Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (72.90s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09 PASS 21 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 26 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 23 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 23 minutes
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
