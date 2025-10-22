# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 03:46](#error-2025-10-09t0346060000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68e701e3a6da75266067bdc2/clusters/test-acc-tf-c-113453324444743907/backup/snapshots/68e705aea6da752660696687 | dev | timeout | 9754.03s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 21 minutes
- 2025-09-24 PASS 20 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 22 minutes
- 2025-09-27 PASS 22 minutes
- 2025-09-28 PASS 24 minutes
- 2025-09-29
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-09-30
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 19 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS an hour
  - PASS 19 minutes
  - PASS 22 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 25 minutes
- 2025-10-03 PASS 19 minutes
- 2025-10-04 PASS 25 minutes
- 2025-10-05 PASS 18 minutes
- 2025-10-06 PASS 23 minutes
- 2025-10-07 PASS 21 minutes
- 2025-10-08 PASS 21 minutes
- 2025-10-09

### Error 2025-10-09T03:46:06+00:00
```
2025-10-09T03:46:06.4409948Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-09T03:46:06.4412970Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-09T03:46:06.4438676Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-09T03:46:06.4439328Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-10-09T03:46:06.4439803Z         
2025-10-09T03:46:06.4440578Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-09T03:46:06.4441775Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T03:46:06.4444443Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e701e3a6da75266067bdc2/clusters/test-acc-tf-c-113453324444743907/backup/snapshots/68e705aea6da752660696687 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68e705aea6da752660696687. Reason: Bad Request. Params: [68e705aea6da752660696687], BadRequestDetail: 
2025-10-09T03:46:06.4445934Z         
2025-10-09T03:46:06.4446308Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-09T03:46:06.4447002Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-09T03:46:06.4447657Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-09T03:46:06.4447995Z         
2025-10-09T03:46:06.4468875Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (9754.35s)
```

- 2025-10-10 PASS 23 minutes
- 2025-10-11 PASS 21 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 20 minutes
- 2025-10-14 PASS 19 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18 PASS 20 minutes
- 2025-10-19 PASS 21 minutes
- 2025-10-20
  - PASS 31 minutes
  - PASS 16 minutes
- 2025-10-21 PASS 18 minutes
- 2025-10-22
  - PASS 23 minutes
  - PASS 20 minutes