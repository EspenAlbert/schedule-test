# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:23](#error-2026-09-11t0223410000) |  | dev | 5775.05s
[2026-09-11 07:27](#error-2026-09-11t0727510000) |  | dev | 2820.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 20 minutes
- 2026-09-03 PASS 26 minutes
- 2026-09-04 PASS 29 minutes
- 2026-09-05 PASS 23 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 20 minutes
  - PASS 22 minutes
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
- 2026-09-15 PASS 24 minutes
- 2026-09-16 PASS 21 minutes
- 2026-09-17 PASS 29 minutes
- 2026-09-18 PASS 23 minutes
- 2026-09-19 PASS 24 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 21 minutes
- 2026-09-22 PASS 21 minutes
- 2026-09-23
  - PASS 35 minutes
  - PASS 28 minutes
- 2026-09-24 PASS 24 minutes
- 2026-09-25 PASS 22 minutes
- 2026-09-26 PASS 23 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 23 minutes
- 2026-09-29 PASS 31 minutes
- 2026-09-30 PASS 22 minutes
- 2026-10-01 PASS 22 minutes
- 2026-10-02 PASS 22 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 20 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 22 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 22 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 19 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 21 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 21 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
