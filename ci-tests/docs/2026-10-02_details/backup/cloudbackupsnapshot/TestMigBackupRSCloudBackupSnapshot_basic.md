# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_basic Test Details
# Found 23 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 21) FAIL(x 2)
Success rate: 91.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:23](#error-2026-09-11t0223410000) |  | dev | 5655.08s
[2026-09-11 07:27](#error-2026-09-11t0727510000) |  | dev | 2812.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 21 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 34 minutes
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 22 minutes
  - PASS 24 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 24 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:23:41+00:00
```
2026-09-11T02:23:41.1961197Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2026-09-11T02:23:41.1962353Z     resource_migration_test.go:15: Creating execution project (1): test-acc-tf-p-2470796366941271149
2026-09-11T02:23:41.1968295Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2026-09-11T02:23:41.1989019Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2026-09-11T02:23:41.1989620Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:23:41.1990283Z         
2026-09-11T02:23:41.1990979Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa35f0c1761787ecbe7681a) status was: failed
2026-09-11T02:23:41.1991535Z         
2026-09-11T02:23:41.1991941Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:23:41.1992708Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:23:41.1993459Z           39: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:23:41.1993845Z         
2026-09-11T02:23:41.1994171Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (5655.83s)
```

  - FAIL 46 minutes

### Error 2026-09-11T07:27:51+00:00
```
2026-09-11T07:27:51.1450130Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2026-09-11T07:27:51.1451037Z     resource_migration_test.go:15: Creating execution project (1): test-acc-tf-p-3215067550481602519
2026-09-11T07:27:51.1456975Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2026-09-11T07:27:51.1530462Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2026-09-11T07:27:51.1531095Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-09-11T07:27:51.1531568Z         
2026-09-11T07:27:51.1532264Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa3a715821e0ea7a4608c6c) status was: failed
2026-09-11T07:27:51.1533003Z         
2026-09-11T07:27:51.1533420Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T07:27:51.1534180Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T07:27:51.1534892Z           39: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T07:27:51.1535273Z         
2026-09-11T07:27:51.1535762Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (2812.88s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 23 minutes
- 2026-09-15: MISSING
- 2026-09-16 PASS 23 minutes
- 2026-09-17: MISSING
- 2026-09-18 PASS 24 minutes
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 23 minutes
- 2026-09-22: MISSING
- 2026-09-23
  - PASS 36 minutes
  - PASS 39 minutes
- 2026-09-24: MISSING
- 2026-09-25 PASS 25 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29: MISSING
- 2026-09-30 PASS 24 minutes
- 2026-10-01: MISSING
- 2026-10-02 PASS 21 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 22 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 22 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 24 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 23 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 24 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 22 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
