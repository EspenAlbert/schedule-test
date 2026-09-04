# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:54](#error-2026-08-27t0254500000) |  | dev | 1996.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 31 minutes
- 2026-08-07 PASS 22 minutes
- 2026-08-08 PASS 20 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 23 minutes
- 2026-08-11 PASS 21 minutes
- 2026-08-12 PASS 23 minutes
- 2026-08-13 PASS 22 minutes
- 2026-08-14 PASS 28 minutes
- 2026-08-15 PASS 22 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 21 minutes
- 2026-08-18 PASS 31 minutes
- 2026-08-19 PASS 21 minutes
- 2026-08-20 PASS 22 minutes
- 2026-08-21 PASS 22 minutes
- 2026-08-22 PASS 19 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 21 minutes
- 2026-08-25 PASS 22 minutes
- 2026-08-26 PASS 21 minutes
- 2026-08-27

### Error 2026-08-27T02:54:50+00:00
```
2026-08-27T02:54:50.1774048Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-08-27T02:54:50.1774775Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-8966003669573419746
2026-08-27T02:54:50.1776730Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-08-27T02:54:50.1800969Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-08-27T02:54:50.1801645Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-08-27T02:54:50.1802156Z         
2026-08-27T02:54:50.1802941Z         Error: error creating a snapshot: error creating MongoDB snapshot(6a8f9b536af220b06a123680) status was: failed
2026-08-27T02:54:50.1803449Z         
2026-08-27T02:54:50.1803839Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-08-27T02:54:50.1804547Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-08-27T02:54:50.1805212Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-08-27T02:54:50.1805569Z         
2026-08-27T02:54:50.1806442Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (1996.37s)
```

- 2026-08-28 PASS 32 minutes
- 2026-08-29 PASS 23 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 25 minutes
- 2026-09-01 PASS 23 minutes
- 2026-09-02 PASS 24 minutes
- 2026-09-03 PASS 31 minutes
- 2026-09-04 PASS 38 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 23 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 24 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 22 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 32 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 23 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 22 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
