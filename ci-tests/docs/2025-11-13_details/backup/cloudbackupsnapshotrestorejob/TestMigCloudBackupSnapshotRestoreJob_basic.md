# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 19) FAIL(x 2)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-26 01:27](#error-2025-10-26t0127560000) |  | qa |  | 4.06s
[2025-10-27 02:26](#error-2025-10-27t0226320000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68febda75c665f6c63d0f511/clusters/test-acc-tf-c-1009959245807600184/backup/snapshots/68fec41429e7601e46470f3d | dev | flaky_500 | 5584.06s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-23: MISSING
- 2025-10-24 PASS 36 minutes
- 2025-10-25: MISSING
- 2025-10-26

### Error 2025-10-26T01:27:56+00:00
```
2025-10-26T01:27:56.9488075Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-26T01:27:56.9489483Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-7372035958237024293
2025-10-26T01:27:56.9494013Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-26T01:27:56.9511049Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-26T01:27:56.9512238Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-26T01:27:56.9513115Z         
2025-10-26T01:27:56.9513549Z         Error: Error in create
2025-10-26T01:27:56.9513999Z         
2025-10-26T01:27:56.9514627Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-26T01:27:56.9515853Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-26T01:27:56.9516997Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-26T01:27:56.9517768Z         
2025-10-26T01:27:56.9518568Z         cluster name: test-acc-tf-c-3384590378539160175, API error details:
2025-10-26T01:27:56.9519737Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6bec328f9755b2cef04c/clusters
2025-10-26T01:27:56.9520636Z         POST: HTTP 403 Forbidden (Error code:
2025-10-26T01:27:56.9521525Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-26T01:27:56.9522700Z         Configuration. Contains selections that are unavailable due to your
2025-10-26T01:27:56.9523732Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-26T01:27:56.9524433Z         BadRequestDetail: 
2025-10-26T01:27:56.9525019Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (4.56s)
```

- 2025-10-27

### Error 2025-10-27T02:26:32+00:00
```
2025-10-27T02:26:32.4470923Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-27T02:26:32.4472246Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3351652184202384995
2025-10-27T02:26:32.4476966Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-27T02:26:32.4548323Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-10-27T02:26:32.4549535Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-27T02:26:32.4550404Z         
2025-10-27T02:26:32.4552252Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-27T02:26:32.4554544Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-27T02:26:32.4559223Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febda75c665f6c63d0f511/clusters/test-acc-tf-c-1009959245807600184/backup/snapshots/68fec41429e7601e46470f3d DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68fec41429e7601e46470f3d. Reason: Bad Request. Params: [68fec41429e7601e46470f3d], BadRequestDetail: 
2025-10-27T02:26:32.4561829Z         
2025-10-27T02:26:32.4562455Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-27T02:26:32.4563684Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-27T02:26:32.4565001Z           40: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-27T02:26:32.4565564Z         
2025-10-27T02:26:32.4566095Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (5584.65s)
```

- 2025-10-28: MISSING
- 2025-10-29 PASS 26 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 24 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 20 minutes
- 2025-11-03 PASS 20 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 23 minutes
  - PASS 21 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 25 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 22 minutes
- 2025-11-10 PASS 23 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 24 minutes
- 2025-11-13 PASS 22 minutes