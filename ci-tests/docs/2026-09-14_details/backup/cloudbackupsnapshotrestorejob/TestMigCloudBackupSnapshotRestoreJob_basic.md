# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 6 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL(x 2)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev |  | 5250.03s
[2026-09-11 08:11](#error-2026-09-11t0811580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aa3a2fcf7fcc4bbebf63a5c/clusters/test-acc-tf-c-7220485247663572648 | dev | flaky_500 | 765.10s

### Timeline
- 2026-09-07 PASS 22 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 22 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6933634Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2026-09-11T02:45:47.6934465Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project (1): test-acc-tf-p-8155419944873521882
2026-09-11T02:45:47.6937343Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2026-09-11T02:45:47.6961451Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2026-09-11T02:45:47.6962209Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:45:47.6962774Z         
2026-09-11T02:45:47.6963463Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa35e9b1761787ecbe7584a) status was: failed
2026-09-11T02:45:47.6964009Z         
2026-09-11T02:45:47.6964536Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:45:47.6965318Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:45:47.6966046Z           40: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:45:47.6966426Z         
2026-09-11T02:45:47.6967346Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (5250.34s)
```

  - FAIL 12 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5103859Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2026-09-11T08:11:58.5104673Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project (1): test-acc-tf-p-6702418005450152289
2026-09-11T08:11:58.5108068Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2026-09-11T08:11:58.5120362Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2026-09-11T08:11:58.5121107Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-09-11T08:11:58.5121661Z         
2026-09-11T08:11:58.5121958Z         Error: Error in create
2026-09-11T08:11:58.5122244Z         
2026-09-11T08:11:58.5122647Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-09-11T08:11:58.5123425Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-09-11T08:11:58.5124148Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-09-11T08:11:58.5124526Z         
2026-09-11T08:11:58.5125026Z         cluster=test-acc-tf-c-7220485247663572648 didn't reach desired state: IDLE,
2026-09-11T08:11:58.5125479Z         error:
2026-09-11T08:11:58.5126450Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa3a2fcf7fcc4bbebf63a5c/clusters/test-acc-tf-c-7220485247663572648
2026-09-11T08:11:58.5127315Z         GET: HTTP 401 Unauthorized (Error code: "UNEXPECTED_ERROR") Detail: You are
2026-09-11T08:11:58.5127987Z         not authorized for this resource. Reason: Unauthorized. Params: [],
2026-09-11T08:11:58.5128448Z         BadRequestDetail: 
2026-09-11T08:11:58.5128837Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (765.96s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 21 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 21 minutes
- 2026-09-14: MISSING
