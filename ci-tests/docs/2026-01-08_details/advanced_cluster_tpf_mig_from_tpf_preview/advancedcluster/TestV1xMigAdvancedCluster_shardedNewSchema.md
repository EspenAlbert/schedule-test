# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_shardedNewSchema Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:34](#error-2026-01-07t0034240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e8136d/clusters/test-acc-tf-c-6985879350290853811 | dev | flaky_500 | 57.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 24 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 23 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 24 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 23 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 25 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 26 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 23 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 24 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 22 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 23 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:34:24+00:00
```
2026-01-07T00:34:24.2976828Z === RUN   TestV1xMigAdvancedCluster_shardedNewSchema
2026-01-07T00:34:24.2986175Z === CONT  TestV1xMigAdvancedCluster_shardedNewSchema
2026-01-07T00:34:24.3060140Z === NAME  TestV1xMigAdvancedCluster_shardedNewSchema
2026-01-07T00:34:24.3060700Z     resource_migration_v1x_test.go:153: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:34:24.3061109Z         
2026-01-07T00:34:24.3061359Z         Error: Error in create
2026-01-07T00:34:24.3061599Z         
2026-01-07T00:34:24.3061917Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:24.3062556Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:24.3063134Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:24.3063440Z         
2026-01-07T00:34:24.3063879Z         cluster=test-acc-tf-c-6985879350290853811 didn't reach desired state: IDLE,
2026-01-07T00:34:24.3064273Z         error:
2026-01-07T00:34:24.3064972Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e8136d/clusters/test-acc-tf-c-6985879350290853811
2026-01-07T00:34:24.3065902Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:24.3066475Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:24.3066852Z         BadRequestDetail: 
2026-01-07T00:34:24.3067172Z --- FAIL: TestV1xMigAdvancedCluster_shardedNewSchema (57.87s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09 PASS 21 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 21 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 17 minutes
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
- 2026-01-04 PASS 21 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
