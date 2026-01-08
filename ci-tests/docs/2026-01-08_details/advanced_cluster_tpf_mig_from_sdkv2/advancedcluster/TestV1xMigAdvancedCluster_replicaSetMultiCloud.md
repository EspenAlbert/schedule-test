# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 34.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 27 minutes
  - PASS 25 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 38 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 23 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 25 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 26 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 24 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 23 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 21 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 26 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 28 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 25 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:43+00:00
```
2026-01-07T00:30:43.8368386Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:30:43.8374889Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:18.1303868Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:18.1304904Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:31:18.1305443Z         
2026-01-07T00:31:18.1305916Z         Error: error creating project: 695da931af4f6cc389e8089a
2026-01-07T00:31:18.1306338Z         
2026-01-07T00:31:18.1306764Z           with mongodbatlas_project.cluster_project,
2026-01-07T00:31:18.1307617Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2026-01-07T00:31:18.1308428Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2026-01-07T00:31:18.1308844Z         
2026-01-07T00:31:18.1309436Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:31:18.1310236Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:31:18.1311215Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:31:18.3421705Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (34.51s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
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
- 2025-12-28 PASS 22 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 22 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
