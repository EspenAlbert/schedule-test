# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-05 01:00](#error-2025-09-05t0100450000) |  | dev |  | 5.08s
[2025-09-26 01:12](#error-2025-09-26t0112220000) |  | dev | flaky_client | 522.01s
[2025-10-01 09:59](#error-2025-10-01t0959230000) |  | dev | flaky_500 | 4.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 33 minutes
- 2025-09-04 PASS 33 minutes
- 2025-09-05

### Error 2025-09-05T01:00:45+00:00
```
2025-09-05T01:00:45.8678049Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-05T01:00:45.8678795Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6598845782487919011
2025-09-05T01:00:45.8681344Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-05T01:00:45.8700074Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-05T01:00:45.8700836Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-05T01:00:45.8701364Z         
2025-09-05T01:00:45.8701691Z         Error: Insufficient replication_specs blocks
2025-09-05T01:00:45.8701989Z         
2025-09-05T01:00:45.8702569Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:00:45.8703224Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-05T01:00:45.8703558Z         
2025-09-05T01:00:45.8703907Z         At least 1 "replication_specs" blocks are required.
2025-09-05T01:00:45.8704334Z         
2025-09-05T01:00:45.8704595Z         Error: Unsupported argument
2025-09-05T01:00:45.8704858Z         
2025-09-05T01:00:45.8705427Z           on terraform_plugin_test.tf line 22, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:00:45.8705942Z           22:   replication_specs = [{
2025-09-05T01:00:45.8706203Z         
2025-09-05T01:00:45.8706650Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T01:00:45.8707147Z         define a block of type "replication_specs"?
2025-09-05T01:00:45.8707762Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (5.76s)
```

- 2025-09-06 PASS 27 minutes
- 2025-09-07 PASS 24 minutes
- 2025-09-08
  - PASS 34 minutes
  - PASS 25 minutes
  - PASS 28 minutes
- 2025-09-09 PASS 30 minutes
- 2025-09-10 PASS 28 minutes
- 2025-09-11 PASS 27 minutes
- 2025-09-12 PASS 22 minutes
- 2025-09-13 PASS 28 minutes
- 2025-09-14 PASS 16 minutes
- 2025-09-15
  - PASS 20 minutes
  - PASS 15 minutes
  - PASS 18 minutes
- 2025-09-16 PASS 24 minutes
- 2025-09-17 PASS 24 minutes
- 2025-09-18 PASS 27 minutes
- 2025-09-19 PASS 21 minutes
- 2025-09-20 PASS 21 minutes
- 2025-09-21 PASS 19 minutes
- 2025-09-22 PASS 19 minutes
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