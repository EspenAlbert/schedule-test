# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-05 to 2026-01-02 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-10 01:16](#error-2025-12-10t0116000000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6938bf769fefc72ee289c3c8/backup/exportBuckets | dev | 1481.02s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05 PASS an hour
- 2025-12-06: MISSING
- 2025-12-07: MISSING
- 2025-12-08 PASS 22 minutes
- 2025-12-09: MISSING
- 2025-12-10
  - FAIL 24 minutes

### Error 2025-12-10T01:16:00+00:00
```
2025-12-10T01:16:00.3110919Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-12-10T01:16:00.3112009Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6026556945987094266
2025-12-10T01:16:00.3121814Z    test_name=TestMigBackupSnapshotExportJob_basic test_terraform_path=/home/runner/work/_temp/f73f4f2c-f3aa-4966-8426-d6594806ae35/terraform
2025-12-10T01:16:00.3124861Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-12-10T01:16:00.3125724Z         
2025-12-10T01:16:00.3128543Z         Error: error creating snapshot export bucket: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf769fefc72ee289c3c8/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (6938bf839fefc72ee28a7a0e). Reason: Bad Request. Params: [6938bf839fefc72ee28a7a0e], BadRequestDetail: 
2025-12-10T01:16:00.3129899Z         
2025-12-10T01:16:00.3130344Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2025-12-10T01:16:00.3131439Z           on terraform_plugin_test.tf line 113, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2025-12-10T01:16:00.3132215Z          113: resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2025-12-10T01:16:00.3132620Z         
2025-12-10T01:16:00.3132916Z --- FAIL: TestMigBackupSnapshotExportJob_basic (1481.18s)
```

  - PASS 20 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 20 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 23 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 21 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 24 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 25 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 25 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 23 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 26 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 24 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 31 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 34 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 38 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 31 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 29 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
