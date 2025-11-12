# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 03:46](#error-2025-10-09t0346060000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68e701e3a6da75266067bdc2/clusters/test-acc-tf-c-113453324444743907/backup/snapshots/68e705aea6da752660696687 | dev | timeout | 9754.03s
[2025-10-27 02:26](#error-2025-10-27t0226320000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68febda75c665f6c63d0f511/clusters/test-acc-tf-c-7275540509001652969/backup/snapshots/68fec40b5c665f6c63d126e8 | dev | timeout | 5632.02s
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 11745.05s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23 PASS 26 minutes
- 2025-10-24 PASS 26 minutes
- 2025-10-25 PASS 23 minutes
- 2025-10-26 PASS 20 minutes
- 2025-10-27

### Error 2025-10-27T02:26:32+00:00
```
2025-10-27T02:26:32.4473975Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-27T02:26:32.4478339Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-27T02:26:32.4514582Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-27T02:26:32.4515757Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-10-27T02:26:32.4516578Z         
2025-10-27T02:26:32.4517958Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-27T02:26:32.4520047Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-27T02:26:32.4524832Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febda75c665f6c63d0f511/clusters/test-acc-tf-c-7275540509001652969/backup/snapshots/68fec40b5c665f6c63d126e8 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68fec40b5c665f6c63d126e8. Reason: Bad Request. Params: [68fec40b5c665f6c63d126e8], BadRequestDetail: 
2025-10-27T02:26:32.4527452Z         
2025-10-27T02:26:32.4528090Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-27T02:26:32.4529303Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-27T02:26:32.4530444Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-27T02:26:32.4531019Z         
2025-10-27T02:26:32.4566890Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (5632.21s)
```

- 2025-10-28 PASS 20 minutes
- 2025-10-29 PASS 27 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3672046Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-30T04:45:03.3672738Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project: test-acc-tf-p-7742269772510740409
2025-10-30T04:45:03.3674530Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-30T04:45:03.3698797Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-10-30T04:45:03.3699589Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:45:03.3700297Z         
2025-10-30T04:45:03.3700560Z         Error: Error in delete
2025-10-30T04:45:03.3700821Z         
2025-10-30T04:45:03.3701250Z         cluster=test-acc-tf-c-2787183841634943338 didn't reach desired state:
2025-10-30T04:45:03.3701876Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:45:03.3702350Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:45:03.3702750Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (11745.54s)
```

- 2025-10-31 PASS 26 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 19 minutes
- 2025-11-03 PASS 20 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 20 minutes
- 2025-11-06 PASS 27 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08 PASS 47 minutes
- 2025-11-09 PASS 21 minutes
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 20 minutes
- 2025-11-12 PASS 21 minutes