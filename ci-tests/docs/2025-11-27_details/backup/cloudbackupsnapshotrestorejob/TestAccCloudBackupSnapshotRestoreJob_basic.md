# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 11745.05s
[2025-11-20 03:28](#error-2025-11-20t0328300000) |  | dev |  | 2166.03s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 20 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 20 minutes
- 2025-11-06 PASS 27 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08 PASS 47 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 20 minutes
- 2025-11-12 PASS 21 minutes
- 2025-11-13 PASS 34 minutes
- 2025-11-14 PASS 26 minutes
- 2025-11-15 PASS 20 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 25 minutes
- 2025-11-18 PASS 20 minutes
- 2025-11-19
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-11-20

### Error 2025-11-20T03:28:30+00:00
```
2025-11-20T03:28:30.4397143Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-11-20T03:28:30.4397865Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project: test-acc-tf-p-6797324064145253228
2025-11-20T03:28:30.4399677Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-11-20T03:28:30.4418017Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-11-20T03:28:30.4418708Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-11-20T03:28:30.4419182Z         
2025-11-20T03:28:30.4419836Z         Error: error creating a snapshot: error creating MongoDB snapshot(691e63eea0b6e4670df58372) status was: failed
2025-11-20T03:28:30.4420468Z         
2025-11-20T03:28:30.4420939Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-20T03:28:30.4421659Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-20T03:28:30.4422314Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-20T03:28:30.4422649Z         
2025-11-20T03:28:30.4422953Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (2166.27s)
```

- 2025-11-21 PASS 19 minutes
- 2025-11-22 PASS 20 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 18 minutes
- 2025-11-25 PASS 23 minutes
- 2025-11-26 PASS 19 minutes
- 2025-11-27 PASS 26 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 19 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 21 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 21 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 24 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 23 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
