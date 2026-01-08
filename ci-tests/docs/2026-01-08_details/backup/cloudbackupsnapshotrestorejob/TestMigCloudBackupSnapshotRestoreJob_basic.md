# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b1d59b8466ea738345/clusters | dev | flaky_500 | 3.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 27 minutes
  - PASS 23 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 26 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 27 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 27 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 25 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 27 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 23 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 26 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 23 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 23 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6382746Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2026-01-07T00:41:24.6384399Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project (1): test-acc-tf-p-7889392889834175692
2026-01-07T00:41:24.6388946Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2026-01-07T00:41:24.6404829Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2026-01-07T00:41:24.6406180Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:41:24.6407141Z         
2026-01-07T00:41:24.6407615Z         Error: Error in create
2026-01-07T00:41:24.6408062Z         
2026-01-07T00:41:24.6408724Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6410036Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6411258Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6412345Z         
2026-01-07T00:41:24.6413133Z         cluster name: test-acc-tf-c-2108440786120420649, API error details:
2026-01-07T00:41:24.6414850Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b1d59b8466ea738345/clusters
2026-01-07T00:41:24.6416154Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6417310Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6418022Z         BadRequestDetail: 
2026-01-07T00:41:24.6418633Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (3.71s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09 PASS 22 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 25 minutes
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
- 2025-12-28 PASS 22 minutes
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
- 2026-01-08 PASS 19 minutes
