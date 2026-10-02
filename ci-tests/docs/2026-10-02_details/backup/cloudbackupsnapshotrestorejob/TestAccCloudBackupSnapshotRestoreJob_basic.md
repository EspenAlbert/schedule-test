# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev | 5374.03s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev | 2057.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 24 minutes
- 2026-09-03 PASS 31 minutes
- 2026-09-04 PASS 38 minutes
- 2026-09-05 PASS 31 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 23 minutes
  - PASS 24 minutes
- 2026-09-08 PASS 22 minutes
- 2026-09-09 PASS 34 minutes
- 2026-09-10 PASS 27 minutes
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6935568Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-09-11T02:45:47.6938349Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-09-11T02:45:47.6977368Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-09-11T02:45:47.6978079Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:45:47.6978948Z         
2026-09-11T02:45:47.6979639Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa35fa7b5d7eda74f82e82c) status was: failed
2026-09-11T02:45:47.6980530Z         
2026-09-11T02:45:47.6980939Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:45:47.6981713Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:45:47.6982446Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:45:47.6982824Z         
2026-09-11T02:45:47.6983163Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (5374.26s)
```

  - FAIL 34 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5106301Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-09-11T08:11:58.5108967Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-09-11T08:11:58.5138656Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-09-11T08:11:58.5139370Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-09-11T08:11:58.5139889Z         
2026-09-11T08:11:58.5140565Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa3a6e6f7fcc4bbebf7e2c6) status was: failed
2026-09-11T08:11:58.5141118Z         
2026-09-11T08:11:58.5141522Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T08:11:58.5142274Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T08:11:58.5143114Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T08:11:58.5143499Z         
2026-09-11T08:11:58.5158786Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (2057.91s)
```

- 2026-09-12 PASS 23 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 23 minutes
- 2026-09-15 PASS 24 minutes
- 2026-09-16 PASS 23 minutes
- 2026-09-17 PASS 23 minutes
- 2026-09-18 PASS 24 minutes
- 2026-09-19 PASS 24 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22 PASS 23 minutes
- 2026-09-23
  - PASS 25 minutes
  - PASS 35 minutes
- 2026-09-24 PASS 23 minutes
- 2026-09-25 PASS 22 minutes
- 2026-09-26 PASS 30 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 22 minutes
- 2026-09-29 PASS 22 minutes
- 2026-09-30 PASS 31 minutes
- 2026-10-01 PASS 21 minutes
- 2026-10-02 PASS 22 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 21 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 22 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 22 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 24 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 23 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 23 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
