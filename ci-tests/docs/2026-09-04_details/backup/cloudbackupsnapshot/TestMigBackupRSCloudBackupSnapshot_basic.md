# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-14 01:46](#error-2026-08-14t0146120000) |  | dev | 2676.00s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 22 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 22 minutes
- 2026-08-11: MISSING
- 2026-08-12 PASS 21 minutes
- 2026-08-13: MISSING
- 2026-08-14

### Error 2026-08-14T01:46:12+00:00
```
2026-08-14T01:46:12.3309749Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2026-08-14T01:46:12.3310671Z     resource_migration_test.go:15: Creating execution project (1): test-acc-tf-p-333221622821556808
2026-08-14T01:46:12.3315378Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2026-08-14T01:46:12.3333399Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2026-08-14T01:46:12.3333907Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-08-14T01:46:12.3334479Z         
2026-08-14T01:46:12.3335046Z         Error: error creating a snapshot: error creating MongoDB snapshot(6a7e66215c1e3c8ecb0cd28d) status was: failed
2026-08-14T01:46:12.3335483Z         
2026-08-14T01:46:12.3335891Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-08-14T01:46:12.3336466Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-08-14T01:46:12.3337049Z           39: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-08-14T01:46:12.3337377Z         
2026-08-14T01:46:12.3352235Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (2676.00s)
```

- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 21 minutes
- 2026-08-18: MISSING
- 2026-08-19 PASS 22 minutes
- 2026-08-20: MISSING
- 2026-08-21 PASS 23 minutes
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 21 minutes
- 2026-08-25: MISSING
- 2026-08-26 PASS 23 minutes
- 2026-08-27: MISSING
- 2026-08-28 PASS 40 minutes
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 23 minutes
- 2026-09-01: MISSING
- 2026-09-02 PASS 21 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 34 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 22 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 23 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 22 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 21 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 21 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 20 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
