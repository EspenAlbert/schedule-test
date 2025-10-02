# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-05 01:00](#error-2025-09-05t0100450000) |  | dev |  | 7.02s
[2025-10-01 05:31](#error-2025-10-01t0531450000) |  | dev | flaky_500 | 1178.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 42 minutes
- 2025-09-04 PASS 30 minutes
- 2025-09-05

### Error 2025-09-05T01:00:45+00:00
```
2025-09-05T01:00:45.8654342Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-09-05T01:00:45.8655052Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-8071603206072536216
2025-09-05T01:00:45.8663620Z   
2025-09-05T01:00:45.8664274Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-05T01:00:45.8664785Z         
2025-09-05T01:00:45.8665110Z         Error: Insufficient replication_specs blocks
2025-09-05T01:00:45.8665401Z         
2025-09-05T01:00:45.8665978Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:00:45.8666636Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-05T01:00:45.8667437Z         
2025-09-05T01:00:45.8667841Z         At least 1 "replication_specs" blocks are required.
2025-09-05T01:00:45.8668157Z         
2025-09-05T01:00:45.8668422Z         Error: Unsupported argument
2025-09-05T01:00:45.8668685Z         
2025-09-05T01:00:45.8669266Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:00:45.8669787Z           26:   replication_specs = [{
2025-09-05T01:00:45.8670047Z         
2025-09-05T01:00:45.8670495Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T01:00:45.8670998Z         define a block of type "replication_specs"?
2025-09-05T01:00:45.8671354Z --- FAIL: TestMigBackupSnapshotExportJob_basic (7.21s)
```

- 2025-09-06 PASS 31 minutes
- 2025-09-07 PASS 36 minutes
- 2025-09-08
  - PASS 36 minutes
  - PASS 38 minutes
  - PASS 27 minutes
- 2025-09-09 PASS 28 minutes
- 2025-09-10 PASS 25 minutes
- 2025-09-11 PASS 29 minutes
- 2025-09-12 PASS 21 minutes
- 2025-09-13 PASS 31 minutes
- 2025-09-14 PASS 28 minutes
- 2025-09-15
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 24 minutes
- 2025-09-16 PASS 26 minutes
- 2025-09-17 PASS 25 minutes
- 2025-09-18 PASS 27 minutes
- 2025-09-19 PASS 23 minutes
- 2025-09-20 PASS 22 minutes
- 2025-09-21 PASS 29 minutes
- 2025-09-22 PASS 20 minutes
- 2025-09-23 PASS 20 minutes
- 2025-09-24 PASS 22 minutes
- 2025-09-25 PASS 23 minutes
- 2025-09-26 PASS 23 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 32 minutes
- 2025-09-29
  - PASS 26 minutes
  - PASS 18 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 32 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 20 minutes
  - FAIL 19 minutes

### Error 2025-10-01T05:31:45+00:00
```
2025-10-01T05:31:45.4621508Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-10-01T05:31:45.4624049Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3441285559686282319
2025-10-01T05:31:45.4630099Z    test_working_directory=/tmp/plugintest579564078 test_step_number=1 test_terraform_path=/home/runner/work/_temp/920764a5-1707-43de-9713-8c96ab1835fc/terraform
2025-10-01T05:31:45.4631415Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-01T05:31:45.4632121Z         
2025-10-01T05:31:45.4632850Z         Error: error creating snapshot export job: (503 Service Unavailable) failed to decode response body: undefined response type
2025-10-01T05:31:45.4633394Z         
2025-10-01T05:31:45.4633813Z           with mongodbatlas_cloud_backup_snapshot_export_job.test,
2025-10-01T05:31:45.4634617Z           on terraform_plugin_test.tf line 120, in resource "mongodbatlas_cloud_backup_snapshot_export_job" "test":
2025-10-01T05:31:45.4635349Z          120: resource "mongodbatlas_cloud_backup_snapshot_export_job" "test" {
2025-10-01T05:31:45.4635722Z         
2025-10-01T05:31:45.4636015Z --- FAIL: TestMigBackupSnapshotExportJob_basic (1178.90s)
```

  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 25 minutes