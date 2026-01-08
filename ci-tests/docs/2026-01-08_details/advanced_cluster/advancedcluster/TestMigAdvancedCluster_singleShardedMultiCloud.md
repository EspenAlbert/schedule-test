# advanced_cluster/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da938d59b8466ea72895c/clusters | dev | flaky_500 | 9.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 26 minutes
  - PASS 18 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 25 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 21 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 25 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 26 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 25 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 26 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 21 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 25 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 23 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 23 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:48+00:00
```
2026-01-07T00:30:48.0737296Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-01-07T00:31:16.8398488Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-01-07T00:31:23.7712164Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-01-07T00:31:23.7712996Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:23.7713517Z         
2026-01-07T00:31:23.7713879Z         Error: Error in create
2026-01-07T00:31:23.7714249Z         
2026-01-07T00:31:23.7714745Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:23.7715771Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:23.7716882Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:23.7717462Z         
2026-01-07T00:31:23.7718162Z         cluster name: test-acc-tf-c-9097793417824199839, API error details:
2026-01-07T00:31:23.7719227Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da938d59b8466ea72895c/clusters
2026-01-07T00:31:23.7720296Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:23.7721115Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:23.7721716Z         BadRequestDetail: 
2026-01-07T00:31:23.8195838Z    test_name=TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-07T00:31:23.9894665Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (9.96s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 28 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 18 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 19 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 19 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
