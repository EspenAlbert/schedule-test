# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL(x 2)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-10 01:16](#error-2025-12-10t0116000000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6938bf769fefc72ee289c3c8/backup/exportBuckets | dev |  | 1481.02s
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92aaf4f6cc389e7a74f/clusters/test-acc-tf-c-4266280467478709775 | dev | flaky_500 | 84.06s

### Timeline
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
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 24 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8471130Z === RUN   TestMigBackupSnapshotExportJob_basic
2026-01-07T00:35:52.8471862Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project (1): test-acc-tf-p-5945212036974314748
2026-01-07T00:35:52.8479586Z    test_terraform_path=/home/runner/work/_temp/03cd9d3b-deb9-4eb9-93dd-2447f2d621ee/terraform test_working_directory=/tmp/plugintest2496595765
2026-01-07T00:35:52.8480543Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:52.8481040Z         
2026-01-07T00:35:52.8481301Z         Error: Error in create
2026-01-07T00:35:52.8481549Z         
2026-01-07T00:35:52.8481916Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8482613Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8483274Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8483606Z         
2026-01-07T00:35:52.8484155Z         cluster=test-acc-tf-c-4266280467478709775 didn't reach desired state: IDLE,
2026-01-07T00:35:52.8484553Z         error:
2026-01-07T00:35:52.8485265Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92aaf4f6cc389e7a74f/clusters/test-acc-tf-c-4266280467478709775
2026-01-07T00:35:52.8486059Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8486755Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8487140Z         BadRequestDetail: 
2026-01-07T00:35:52.8487461Z --- FAIL: TestMigBackupSnapshotExportJob_basic (84.60s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
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
- 2026-01-03: MISSING
- 2026-01-04 PASS 32 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 31 minutes
