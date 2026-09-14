# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 6 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 5) FAIL
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev | 5350.09s

### Timeline
- 2026-09-07 PASS 22 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 25 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6893837Z === RUN   TestMigBackupSnapshotExportJob_basic
2026-09-11T02:45:47.6895237Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project (1): test-acc-tf-p-1284059978721295981
2026-09-11T02:45:47.6904963Z    test_working_directory=/tmp/plugintest2923407870 test_name=TestMigBackupSnapshotExportJob_basic test_terraform_path=/home/runner/work/_temp/40cfbbe9-83f6-47b0-8ad2-9c3940c9b4a3/terraform test_step_number=1
2026-09-11T02:45:47.6906606Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:45:47.6907310Z         
2026-09-11T02:45:47.6908175Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa35e7cb5d7eda74f829d79) status was: failed
2026-09-11T02:45:47.6908856Z         
2026-09-11T02:45:47.6909275Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:45:47.6910256Z           on terraform_plugin_test.tf line 106, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:45:47.6910989Z          106: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:45:47.6911374Z         
2026-09-11T02:45:47.6911875Z --- FAIL: TestMigBackupSnapshotExportJob_basic (5350.88s)
```

  - PASS 40 minutes
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 23 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING
