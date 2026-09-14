# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_sharded Test Details
# Found 6 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL(x 2)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:23](#error-2026-09-11t0223410000) |  | dev | 6114.05s
[2026-09-11 07:27](#error-2026-09-11t0727510000) |  | dev | 2524.03s

### Timeline
- 2026-09-07 PASS 28 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 42 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:23:41+00:00
```
2026-09-11T02:23:41.1963836Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2026-09-11T02:23:41.1969430Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2026-09-11T02:23:41.2030502Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2026-09-11T02:23:41.2031103Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:23:41.2031550Z         
2026-09-11T02:23:41.2032241Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa360b3b5d7eda74f832242) status was: failed
2026-09-11T02:23:41.2032790Z         
2026-09-11T02:23:41.2033186Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:23:41.2033944Z           on terraform_plugin_test.tf line 67, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:23:41.2034824Z           67: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:23:41.2035208Z         
2026-09-11T02:23:41.2036043Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (6114.48s)
```

  - FAIL 42 minutes

### Error 2026-09-11T07:27:51+00:00
```
2026-09-11T07:27:51.1452662Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2026-09-11T07:27:51.1458600Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2026-09-11T07:27:51.1481149Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2026-09-11T07:27:51.1481857Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2026-09-11T07:27:51.1482328Z         
2026-09-11T07:27:51.1483030Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa3aa4af7fcc4bbebf9975a) status was: failed
2026-09-11T07:27:51.1483616Z         
2026-09-11T07:27:51.1484027Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T07:27:51.1484810Z           on terraform_plugin_test.tf line 67, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T07:27:51.1485538Z           67: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T07:27:51.1486168Z         
2026-09-11T07:27:51.1501189Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (2524.29s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 28 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 25 minutes
- 2026-09-14: MISSING
