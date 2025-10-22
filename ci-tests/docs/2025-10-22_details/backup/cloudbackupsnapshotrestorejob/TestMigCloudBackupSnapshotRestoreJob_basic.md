# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-26 01:12](#error-2025-09-26t0112220000) |  | dev | flaky_client | 522.01s
[2025-10-01 09:59](#error-2025-10-01t0959230000) |  | dev | flaky_500 | 4.04s
[2025-10-09 03:46](#error-2025-10-09t0346060000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68e701e3a6da75266067bdc2/clusters/test-acc-tf-c-5433569734987472994/backup/snapshots/68e706a6c2a3cd169306d98c | dev | timeout | 10427.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 21 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26

### Error 2025-09-26T01:12:22+00:00
```
2025-09-26T01:12:22.5587934Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-26T01:12:22.5588808Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6679293320224697545
2025-09-26T01:12:22.5591516Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-26T01:12:22.5601435Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-26T01:12:22.5602113Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-26T01:12:22.5602614Z         
2025-09-26T01:12:22.5602869Z         Error: Error in create
2025-09-26T01:12:22.5603124Z         
2025-09-26T01:12:22.5603484Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-26T01:12:22.5604186Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-26T01:12:22.5604840Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-26T01:12:22.5605174Z         
2025-09-26T01:12:22.5605840Z         cluster=test-acc-tf-c-7604005316375071860 didn't reach desired state: IDLE,
2025-09-26T01:12:22.5606266Z         error: Get
2025-09-26T01:12:22.5607194Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5de4714f56c035e379b66/clusters/test-acc-tf-c-7604005316375071860":
2025-09-26T01:12:22.5608045Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-09-26T01:12:22.5608459Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (522.10s)
```

- 2025-09-27 PASS 25 minutes
- 2025-09-28 PASS 24 minutes
- 2025-09-29
  - PASS 24 minutes
  - PASS 19 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 19 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - FAIL 4 seconds

### Error 2025-10-01T09:59:23+00:00
```
2025-10-01T09:59:23.9801079Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-01T09:59:23.9802570Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-9207856391043222108
2025-10-01T09:59:23.9807246Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-01T09:59:23.9823517Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-01T09:59:23.9824747Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-01T09:59:23.9825622Z         
2025-10-01T09:59:23.9826066Z         Error: Error in create
2025-10-01T09:59:23.9826483Z         
2025-10-01T09:59:23.9827289Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-01T09:59:23.9828586Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-01T09:59:23.9829766Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-01T09:59:23.9830368Z         
2025-10-01T09:59:23.9831298Z         cluster name: test-acc-tf-c-6251695914114750780, API error details:
2025-10-01T09:59:23.9832520Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcf03d5a2f9645002659a4/clusters
2025-10-01T09:59:23.9833436Z         POST: HTTP 403 Forbidden (Error code:
2025-10-01T09:59:23.9834338Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-01T09:59:23.9835402Z         Configuration. Contains selections that are unavailable due to your
2025-10-01T09:59:23.9836450Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-01T09:59:23.9837336Z         BadRequestDetail: 
2025-10-01T09:59:23.9837913Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (4.43s)
```

  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-10-02 PASS 25 minutes
- 2025-10-03 PASS 22 minutes
- 2025-10-04 PASS 24 minutes
- 2025-10-05 PASS 18 minutes
- 2025-10-06 PASS 18 minutes
- 2025-10-07 PASS 18 minutes
- 2025-10-08 PASS 19 minutes
- 2025-10-09

### Error 2025-10-09T03:46:06+00:00
```
2025-10-09T03:46:06.4407562Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-09T03:46:06.4408609Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1921101651659859648
2025-10-09T03:46:06.4412031Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-09T03:46:06.4458041Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-09T03:46:06.4458917Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-09T03:46:06.4459423Z         
2025-10-09T03:46:06.4460206Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-09T03:46:06.4461526Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T03:46:06.4464076Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e701e3a6da75266067bdc2/clusters/test-acc-tf-c-5433569734987472994/backup/snapshots/68e706a6c2a3cd169306d98c DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68e706a6c2a3cd169306d98c. Reason: Bad Request. Params: [68e706a6c2a3cd169306d98c], BadRequestDetail: 
2025-10-09T03:46:06.4465669Z         
2025-10-09T03:46:06.4466041Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-09T03:46:06.4466739Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-09T03:46:06.4467400Z           40: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-09T03:46:06.4467736Z         
2025-10-09T03:46:06.4469408Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (10427.62s)
```

- 2025-10-10 PASS 25 minutes
- 2025-10-11 PASS 21 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 32 minutes
- 2025-10-14 PASS 21 minutes
- 2025-10-15 PASS 21 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 20 minutes
- 2025-10-20 PASS 24 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 23 minutes
  - PASS 20 minutes