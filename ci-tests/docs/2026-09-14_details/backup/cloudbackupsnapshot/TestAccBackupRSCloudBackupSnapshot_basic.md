# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:23](#error-2026-09-11t0223410000) |  | dev | 5775.05s
[2026-09-11 07:27](#error-2026-09-11t0727510000) |  | dev | 2820.05s

### Timeline
- 2026-09-07 PASS 22 minutes
- 2026-09-08 PASS 23 minutes
- 2026-09-09 PASS 21 minutes
- 2026-09-10 PASS 33 minutes
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:23:41+00:00
```
2026-09-11T02:23:41.1964852Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T02:23:41.1969924Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T02:23:41.1973588Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T02:23:41.1974536Z     pre_check.go:46: Time before creating cluster: 2026-09-11T00:41:54.18104601Z, ProjectID: 6aa34e451761787ecbe0ebf0, Cluster name: test-acc-tf-c-5341819325353920861
2026-09-11T02:23:41.2004252Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T02:23:41.2004832Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:23:41.2005244Z         
2026-09-11T02:23:41.2005936Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa360b8b5d7eda74f8322bf) status was: failed
2026-09-11T02:23:41.2006488Z         
2026-09-11T02:23:41.2006879Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:23:41.2007641Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:23:41.2008385Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:23:41.2008891Z         
2026-09-11T02:23:41.2009222Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (5775.48s)
```

  - FAIL 47 minutes

### Error 2026-09-11T07:27:51+00:00
```
2026-09-11T07:27:51.1453892Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T07:27:51.1458186Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T07:27:51.1460856Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T07:27:51.1461747Z     pre_check.go:46: Time before creating cluster: 2026-09-11T06:40:59.908608025Z, ProjectID: 6aa3a26f821e0ea7a45d7a63, Cluster name: test-acc-tf-c-3803292872398692731
2026-09-11T07:27:51.1511377Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-09-11T07:27:51.1511948Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2026-09-11T07:27:51.1512520Z         
2026-09-11T07:27:51.1513214Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa3a6bdf7fcc4bbebf7cb66) status was: failed
2026-09-11T07:27:51.1521352Z         
2026-09-11T07:27:51.1521821Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T07:27:51.1522625Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T07:27:51.1523362Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T07:27:51.1523775Z         
2026-09-11T07:27:51.1536252Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (2820.54s)
```

- 2026-09-12 PASS 23 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 22 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 22 minutes
- 2026-09-14: MISSING
