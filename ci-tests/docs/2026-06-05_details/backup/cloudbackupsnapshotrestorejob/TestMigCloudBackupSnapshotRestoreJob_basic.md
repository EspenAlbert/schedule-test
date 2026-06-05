# backup/cloudbackupsnapshotrestorejob/TestMigCloudBackupSnapshotRestoreJob_basic Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-25 01:57](#error-2026-05-25t0157080000) |  | dev | flaky_client | 463.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 28 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 29 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 25 minutes
- 2026-05-14: MISSING
- 2026-05-15 PASS 24 minutes
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 32 minutes
- 2026-05-19: MISSING
- 2026-05-20 PASS 30 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS 45 minutes
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25

### Error 2026-05-25T01:57:08+00:00
```
2026-05-25T01:57:08.5167545Z === RUN   TestMigCloudBackupSnapshotRestoreJob_basic
2026-05-25T01:57:08.5168366Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Creating execution project (1): test-acc-tf-p-5082464512998073565
2026-05-25T01:57:08.5172746Z === CONT  TestMigCloudBackupSnapshotRestoreJob_basic
2026-05-25T01:57:08.5184034Z === NAME  TestMigCloudBackupSnapshotRestoreJob_basic
2026-05-25T01:57:08.5184787Z     resource_cloud_backup_snapshot_restore_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-05-25T01:57:08.5185343Z         
2026-05-25T01:57:08.5185623Z         Error: Error in create
2026-05-25T01:57:08.5185921Z         
2026-05-25T01:57:08.5186317Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-25T01:57:08.5187082Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-25T01:57:08.5187809Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-25T01:57:08.5188180Z         
2026-05-25T01:57:08.5188899Z         cluster=test-acc-tf-c-6283304693848355353 didn't reach desired state: IDLE,
2026-05-25T01:57:08.5189381Z         error: Get
2026-05-25T01:57:08.5190150Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a13a03209ac86e87c4e7209/clusters/test-acc-tf-c-6283304693848355353":
2026-05-25T01:57:08.5190896Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-05-25T01:57:08.5191350Z --- FAIL: TestMigCloudBackupSnapshotRestoreJob_basic (463.29s)
```

- 2026-05-26: MISSING
- 2026-05-27 PASS 52 minutes
- 2026-05-28: MISSING
- 2026-05-29 PASS 30 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 33 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 32 minutes
- 2026-06-04: MISSING
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 28 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 27 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 27 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 24 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
