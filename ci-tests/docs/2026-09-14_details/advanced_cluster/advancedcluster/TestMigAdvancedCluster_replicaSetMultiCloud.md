# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 5 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-09 00:43](#error-2026-09-09t0043110000) |  | dev | timeout | 11017.03s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09

### Error 2026-09-09T00:43:11+00:00
```
2026-09-09T00:43:11.4371289Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2026-09-09T00:45:01.1218608Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2026-09-09T03:45:12.0617625Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2026-09-09T03:45:12.0618451Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-09-09T03:45:12.0619085Z         
2026-09-09T03:45:12.0619462Z         Error: Error in create
2026-09-09T03:45:12.0619840Z         
2026-09-09T03:45:12.0620349Z           with mongodbatlas_advanced_cluster.test,
2026-09-09T03:45:12.0621364Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-09T03:45:12.0622312Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-09T03:45:12.0622844Z         
2026-09-09T03:45:12.0623540Z         cluster=test-acc-tf-c-9020976044124933127 didn't reach desired state: IDLE,
2026-09-09T03:45:12.0624227Z         error: context deadline exceeded
2026-09-09T03:48:37.7418215Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (11017.26s)
```

- 2026-09-10: MISSING
- 2026-09-11
  - PASS an hour
  - PASS 41 minutes
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 23 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING
