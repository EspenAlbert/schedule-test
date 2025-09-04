# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 5)
Success rate: 87.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 00:55](#error-2025-08-15t0055000000) |  | dev |  | 9.04s
[2025-08-22 00:52](#error-2025-08-22t0052280000) |  | dev |  | 7.05s
[2025-08-27 01:11](#error-2025-08-27t0111590000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68ae511e8c9e474c785bd954/clusters/test-acc-tf-c-8289392138007828526/backup/restoreJobs | dev | flaky_500 | 1866.04s
[2025-08-29 01:10](#error-2025-08-29t0110200000) |  | dev | unknown | 9.03s
[2025-09-01 05:30](#error-2025-09-01t0530140000) |  | dev | timeout | 10808.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 39 minutes
- 2025-08-08 PASS 31 minutes
- 2025-08-09 PASS 31 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 35 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15

### Error 2025-08-15T00:55:00+00:00
```
2025-08-15T00:55:00.6187933Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-15T00:55:00.6188651Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-5482948636569336977
2025-08-15T00:55:00.6191175Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-15T00:55:00.6192424Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-15T00:55:00.6193270Z     pre_check.go:32: Time before creating cluster: 2025-08-15T00:32:22.070262787Z, ProjectID: 689e800e35dc4c7be809e6c2, Cluster name: test-acc-tf-c-8347835234924542691
2025-08-15T00:55:00.6200682Z    test_terraform_path=/home/runner/work/_temp/7c21fb6d-4261-4cfe-84d1-f696fd5097cf/terraform test_working_directory=/tmp/plugintest2433938713 test_name=TestMigCloudBackupSnapshotRestoreJob_basic test_step_number=1
2025-08-15T00:55:00.6201941Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-15T00:55:00.6202559Z         
2025-08-15T00:55:00.6202887Z         Error: Insufficient replication_specs blocks
2025-08-15T00:55:00.6203309Z         
2025-08-15T00:55:00.6203899Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:55:00.6204556Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-15T00:55:00.6204883Z         
2025-08-15T00:55:00.6205226Z         At least 1 "replication_specs" blocks are required.
2025-08-15T00:55:00.6205533Z         
2025-08-15T00:55:00.6205792Z         Error: Unsupported argument
2025-08-15T00:55:00.6206051Z         
2025-08-15T00:55:00.6206625Z           on terraform_plugin_test.tf line 22, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:55:00.6207134Z           22:   replication_specs = [{
2025-08-15T00:55:00.6207390Z         
2025-08-15T00:55:00.6207835Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T00:55:00.6208337Z         define a block of type "replication_specs"?
2025-08-15T00:55:00.6208715Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (9.35s)
```

- 2025-08-16 PASS 52 minutes
- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 30 minutes
- 2025-08-19 PASS 25 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 29 minutes
- 2025-08-21 PASS 26 minutes
- 2025-08-22

### Error 2025-08-22T00:52:28+00:00
```
2025-08-22T00:52:28.9667733Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-22T00:52:28.9668470Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-9209223718407891468
2025-08-22T00:52:28.9671023Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-22T00:52:28.9672353Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-22T00:52:28.9673202Z     pre_check.go:32: Time before creating cluster: 2025-08-22T00:29:43.4274273Z, ProjectID: 68a7b9f0a7fafe0c72a23bfc, Cluster name: test-acc-tf-c-8590200487644400745
2025-08-22T00:52:28.9681604Z   
2025-08-22T00:52:28.9682226Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-22T00:52:28.9682743Z         
2025-08-22T00:52:28.9683081Z         Error: Insufficient replication_specs blocks
2025-08-22T00:52:28.9683382Z         
2025-08-22T00:52:28.9683982Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:52:28.9684651Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-22T00:52:28.9685136Z         
2025-08-22T00:52:28.9685495Z         At least 1 "replication_specs" blocks are required.
2025-08-22T00:52:28.9685811Z         
2025-08-22T00:52:28.9686079Z         Error: Unsupported argument
2025-08-22T00:52:28.9686347Z         
2025-08-22T00:52:28.9686939Z           on terraform_plugin_test.tf line 22, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:52:28.9687467Z           22:   replication_specs = [{
2025-08-22T00:52:28.9687733Z         
2025-08-22T00:52:28.9688191Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T00:52:28.9688709Z         define a block of type "replication_specs"?
2025-08-22T00:52:28.9689098Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (7.55s)
```

- 2025-08-23 PASS 23 minutes
- 2025-08-24 PASS 24 minutes
- 2025-08-25 PASS 22 minutes
- 2025-08-26 PASS 44 minutes
- 2025-08-27

### Error 2025-08-27T01:11:59+00:00
```
2025-08-27T01:11:59.2185535Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2186273Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4141366185622374591
2025-08-27T01:11:59.2188813Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2189947Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2190785Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:28:22.125660311Z, ProjectID: 68ae511e8c9e474c785bd954, Cluster name: test-acc-tf-c-8289392138007828526
2025-08-27T01:11:59.2202179Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2202855Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:11:59.2203350Z         
2025-08-27T01:11:59.2205234Z         Error: error restore a snapshot: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae511e8c9e474c785bd954/clusters/test-acc-tf-c-8289392138007828526/backup/restoreJobs POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-27T01:11:59.2206451Z         
2025-08-27T01:11:59.2206866Z           with mongodbatlas_cloud_backup_snapshot_restore_job.test,
2025-08-27T01:11:59.2207653Z           on terraform_plugin_test.tf line 49, in resource "mongodbatlas_cloud_backup_snapshot_restore_job" "test":
2025-08-27T01:11:59.2208387Z           49: 		resource "mongodbatlas_cloud_backup_snapshot_restore_job" "test" {
2025-08-27T01:11:59.2208743Z         
2025-08-27T01:11:59.2233323Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (1866.38s)
```

- 2025-08-28 PASS 29 minutes
- 2025-08-29

### Error 2025-08-29T01:10:20+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-29T01:10:20.459000+00:00-TestMigCloudBackupSnapshotRestoreJob_basic',confidence=1.0,ts_when='6 days ago')

```
2025-08-29T01:10:20.4590974Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-29T01:10:20.4591771Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4480906837817539473
2025-08-29T01:10:20.4594322Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-29T01:10:20.4595484Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-08-29T01:10:20.4596329Z     pre_check.go:32: Time before creating cluster: 2025-08-29T00:29:43.660532176Z, ProjectID: 68b0f470c342212f74004b02, Cluster name: test-acc-tf-c-5697649668737627175
2025-08-29T01:10:20.4604831Z   
2025-08-29T01:10:20.4605425Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-29T01:10:20.4605937Z         
2025-08-29T01:10:20.4606262Z         Error: Insufficient replication_specs blocks
2025-08-29T01:10:20.4606571Z         
2025-08-29T01:10:20.4607163Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:10:20.4607825Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-29T01:10:20.4608277Z         
2025-08-29T01:10:20.4608623Z         At least 1 "replication_specs" blocks are required.
2025-08-29T01:10:20.4608931Z         
2025-08-29T01:10:20.4609197Z         Error: Unsupported argument
2025-08-29T01:10:20.4609461Z         
2025-08-29T01:10:20.4610040Z           on terraform_plugin_test.tf line 22, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:10:20.4610561Z           22:   replication_specs = [{
2025-08-29T01:10:20.4610938Z         
2025-08-29T01:10:20.4611392Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T01:10:20.4611897Z         define a block of type "replication_specs"?
2025-08-29T01:10:20.4612280Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (9.28s)
```

- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 26 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T05:30:14+00:00
```
2025-09-01T05:30:14.9613961Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9614675Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4299631433632393220
2025-09-01T05:30:14.9617173Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9618417Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9619245Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:32:07.362004918Z, ProjectID: 68b4e9807af6b0372e946583, Cluster name: test-acc-tf-c-5566732106870611218
2025-09-01T05:30:14.9628535Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9629201Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-01T05:30:14.9629687Z         
2025-09-01T05:30:14.9630391Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T05:30:14.9631016Z         
2025-09-01T05:30:14.9631373Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T05:30:14.9632059Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T05:30:14.9632694Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T05:30:14.9633024Z         
2025-09-01T05:30:14.9633313Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (10808.80s)
```

  - PASS an hour
  - PASS an hour
  - PASS 30 minutes
  - PASS 22 minutes
  - PASS 35 minutes
  - PASS 22 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 28 minutes
- 2025-09-03 PASS 33 minutes
- 2025-09-04 PASS 33 minutes