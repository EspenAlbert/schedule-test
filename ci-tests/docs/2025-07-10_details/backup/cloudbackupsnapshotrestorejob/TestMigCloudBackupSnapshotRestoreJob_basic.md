# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029450000) |  | qa |  | 0.01s
[2025-05-22 01:05](#error-2025-05-22t0105370000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/682e6fec2df05e46e645d13a/clusters | dev |  | 8.04s
[2025-05-30 02:32](#error-2025-05-30t0232320000) |  | dev |  | 6775.10s
[2025-06-05 00:36](#error-2025-06-05t0036030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e52ac939f274132524c3/clusters/test-acc-tf-c-5043022338921756439 | dev | flaky_500 | 191.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 19 minutes
- 2025-04-13 PASS 22 minutes
- 2025-04-14 PASS 18 minutes
- 2025-04-15 PASS 17 minutes
- 2025-04-16
  - PASS 20 minutes
  - PASS 22 minutes
- 2025-04-17 PASS 17 minutes
- 2025-04-18 PASS 18 minutes
- 2025-04-19 PASS 19 minutes
- 2025-04-20 PASS 17 minutes
- 2025-04-21 PASS 16 minutes
- 2025-04-22 PASS 19 minutes
- 2025-04-23 PASS 18 minutes
- 2025-04-24 PASS 20 minutes
- 2025-04-25 PASS 16 minutes
- 2025-04-26 PASS 18 minutes
- 2025-04-27 PASS 19 minutes
- 2025-04-28 PASS 18 minutes
- 2025-04-29 PASS 18 minutes
- 2025-04-30 PASS 20 minutes
- 2025-05-01
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-05-02 PASS 22 minutes
- 2025-05-03 PASS 19 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 22 minutes
- 2025-05-07 PASS 17 minutes
- 2025-05-08 PASS 21 minutes
- 2025-05-09 PASS 20 minutes
- 2025-05-10 PASS 18 minutes
- 2025-05-11

### Error 2025-05-11T00:29:45+00:00
```
2025-05-11T00:29:45.9869462Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-11T00:29:45.9870519Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-8976783339593278937
2025-05-11T00:29:45.9871460Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: 
2025-05-11T00:29:45.9872449Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:45.9874142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:45.9875755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:45.9877936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:71
2025-05-11T00:29:45.9880463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_migration_test.go:11
2025-05-11T00:29:45.9881620Z         	Error:      	Received unexpected error:
2025-05-11T00:29:45.9882468Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.9883065Z         	Test:       	TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-11T00:29:45.9884083Z         	Messages:   	Project creation failed: test-acc-tf-p-8976783339593278937, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.9884809Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (0.09s)
```

- 2025-05-12 PASS 19 minutes
- 2025-05-13
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-05-14 PASS 18 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 19 minutes
- 2025-05-17 PASS 16 minutes
- 2025-05-18 PASS 20 minutes
- 2025-05-19 PASS 18 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 18 minutes
- 2025-05-22

### Error 2025-05-22T01:05:37+00:00
```
2025-05-22T01:05:37.4340254Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-22T01:05:37.4341597Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3955103476332017370
2025-05-22T01:05:37.4346552Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-22T01:05:37.4348804Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-22T01:05:37.4350370Z     pre_check.go:40: Time before creating cluster: 2025-05-22T00:29:39.100954947Z, ProjectID: 682e6fec2df05e46e645d13a, Cluster name: test-acc-tf-c-808329079800508401
2025-05-22T01:05:37.4364153Z    test_name=TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-22T01:05:37.4365431Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-05-22T01:05:37.4366334Z         
2025-05-22T01:05:37.4370262Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/682e6fec2df05e46e645d13a/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-05-22T01:05:37.4372784Z         
2025-05-22T01:05:37.4373461Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-05-22T01:05:37.4374766Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-05-22T01:05:37.4375974Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-05-22T01:05:37.4376603Z         
2025-05-22T01:05:37.4377124Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (8.43s)
```

- 2025-05-23 PASS 20 minutes
- 2025-05-24 PASS 42 minutes
- 2025-05-25 PASS 19 minutes
- 2025-05-26 PASS 18 minutes
- 2025-05-27 PASS 18 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 21 minutes
- 2025-05-29 PASS 22 minutes
- 2025-05-30
  - FAIL an hour

### Error 2025-05-30T02:32:32+00:00
```
2025-05-30T02:32:32.8139577Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8141085Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-2945990079376247197
2025-05-30T02:32:32.8146461Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8148587Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8150144Z     pre_check.go:40: Time before creating cluster: 2025-05-30T00:39:43.5990581Z, ProjectID: 6838fe483a84470fe9d51ca7, Cluster name: test-acc-tf-c-2515618762421123240
2025-05-30T02:32:32.8178725Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-05-30T02:32:32.8180007Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-05-30T02:32:32.8180945Z         
2025-05-30T02:32:32.8181478Z         Error: context deadline exceeded
2025-05-30T02:32:32.8182004Z         
2025-05-30T02:32:32.8182685Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-05-30T02:32:32.8183965Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-05-30T02:32:32.8185518Z           41: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-05-30T02:32:32.8186177Z         
2025-05-30T02:32:32.8186739Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (6775.99s)
```

  - PASS 16 minutes
- 2025-05-31 PASS 17 minutes
- 2025-06-01
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 19 minutes
- 2025-06-04 PASS 19 minutes
- 2025-06-05

### Error 2025-06-05T00:36:03+00:00
```
2025-06-05T00:36:03.3315991Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3317338Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project: test-acc-tf-p-8905900491303417691
2025-06-05T00:36:03.3322007Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3324081Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3325732Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:42.424585413Z, ProjectID: 6840e52ac939f274132524c3, Cluster name: test-acc-tf-c-5043022338921756439
2025-06-05T00:36:03.3346037Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2025-06-05T00:36:03.3347316Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:36:03.3348234Z         
2025-06-05T00:36:03.3351373Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e52ac939f274132524c3/clusters/test-acc-tf-c-5043022338921756439 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3353521Z         
2025-06-05T00:36:03.3354211Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3355720Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3356947Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3357572Z         
2025-06-05T00:36:03.3358115Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (191.31s)
```

- 2025-06-06 PASS 17 minutes
- 2025-06-07 PASS 17 minutes
- 2025-06-08 PASS 19 minutes
- 2025-06-09 PASS 16 minutes
- 2025-06-10 PASS 28 minutes
- 2025-06-11
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-06-12 PASS 18 minutes
- 2025-06-13 PASS 18 minutes
- 2025-06-14 PASS 22 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS 20 minutes
- 2025-06-17 PASS 19 minutes
- 2025-06-18 PASS 27 minutes
- 2025-06-19 PASS 18 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 18 minutes
- 2025-06-22 PASS 20 minutes
- 2025-06-23 PASS 17 minutes
- 2025-06-24 PASS 17 minutes
- 2025-06-25 PASS 19 minutes
- 2025-06-26 PASS 21 minutes
- 2025-06-27 PASS 17 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 18 minutes
- 2025-06-30 PASS 18 minutes
- 2025-07-01
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 20 minutes
- 2025-07-02 PASS 19 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 26 minutes
- 2025-07-05 PASS 19 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 19 minutes
- 2025-07-09 PASS 35 minutes
- 2025-07-10 PASS 18 minutes