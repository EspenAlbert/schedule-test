# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_export Test Details
# Found 21 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-17 01:08](#error-2026-04-17t0108090000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69e183606dfdaa5fce0443e8/backup/exportBuckets | dev | 72.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 17 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 25 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 20 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 16 minutes
- 2026-04-16: MISSING
- 2026-04-17

### Error 2026-04-17T01:08:09+00:00
```
2026-04-17T01:08:09.1699992Z === RUN   TestMigBackupRSCloudBackupSchedule_export
2026-04-17T01:08:09.1708338Z === CONT  TestMigBackupRSCloudBackupSchedule_export
2026-04-17T01:08:09.1728296Z === NAME  TestMigBackupRSCloudBackupSchedule_export
2026-04-17T01:08:09.1728846Z     resource_cloud_backup_schedule_migration_test.go:63: Step 1/3 error: Error running apply: exit status 1
2026-04-17T01:08:09.1729321Z         
2026-04-17T01:08:09.1731197Z         Error: error creating snapshot export bucket: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e183606dfdaa5fce0443e8/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (69e18390abf3dbd56b5dd607). Reason: Bad Request. Params: [69e18390abf3dbd56b5dd607], BadRequestDetail: 
2026-04-17T01:08:09.1732909Z         
2026-04-17T01:08:09.1733274Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2026-04-17T01:08:09.1734081Z           on terraform_plugin_test.tf line 99, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2026-04-17T01:08:09.1734826Z           99:     resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2026-04-17T01:08:09.1735230Z         
2026-04-17T01:08:09.1735489Z --- FAIL: TestMigBackupRSCloudBackupSchedule_export (72.33s)
```

- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 minutes
- 2026-04-21: MISSING
- 2026-04-22 PASS 54 minutes
- 2026-04-23: MISSING
- 2026-04-24 PASS 18 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 20 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 18 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 36 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 19 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 18 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 20 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes
