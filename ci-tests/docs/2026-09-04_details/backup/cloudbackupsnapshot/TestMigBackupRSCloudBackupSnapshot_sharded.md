# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_sharded Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-14 01:46](#error-2026-08-14t0146120000) |  | dev | 4357.10s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 32 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 26 minutes
- 2026-08-11: MISSING
- 2026-08-12 PASS 27 minutes
- 2026-08-13: MISSING
- 2026-08-14

### Error 2026-08-14T01:46:12+00:00
```
2026-08-14T01:46:12.3311648Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2026-08-14T01:46:12.3316977Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2026-08-14T01:46:12.3358677Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2026-08-14T01:46:12.3359174Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2026-08-14T01:46:12.3359569Z         
2026-08-14T01:46:12.3360105Z         Error: error creating a snapshot: error creating MongoDB snapshot(6a7e695418285eb9af5a9e06) status was: failed
2026-08-14T01:46:12.3360574Z         
2026-08-14T01:46:12.3360981Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-08-14T01:46:12.3361565Z           on terraform_plugin_test.tf line 67, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-08-14T01:46:12.3362127Z           67: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-08-14T01:46:12.3362488Z         
2026-08-14T01:46:12.3374611Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (4357.96s)
```

- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 29 minutes
- 2026-08-18: MISSING
- 2026-08-19 PASS 25 minutes
- 2026-08-20: MISSING
- 2026-08-21 PASS 26 minutes
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 30 minutes
- 2026-08-25: MISSING
- 2026-08-26 PASS 27 minutes
- 2026-08-27: MISSING
- 2026-08-28 PASS 53 minutes
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 40 minutes
- 2026-09-01: MISSING
- 2026-09-02 PASS 27 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 49 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 27 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 25 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 25 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 26 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 26 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 27 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
