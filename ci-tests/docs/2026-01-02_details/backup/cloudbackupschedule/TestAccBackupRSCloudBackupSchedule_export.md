# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-10 00:50](#error-2025-12-10t0050080000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6938bf749fefc72ee289abb4/cloudProviderAccess/6938bfa39fefc72ee28adfbd | dev | 63.04s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 19 minutes
- 2025-12-05 PASS an hour
- 2025-12-06 PASS 17 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 13 minutes
- 2025-12-09 PASS 13 minutes
- 2025-12-10
  - FAIL a minute

### Error 2025-12-10T00:50:08+00:00
```
2025-12-10T00:50:08.2313540Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2025-12-10T00:50:08.2327601Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2025-12-10T00:50:08.2341607Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2025-12-10T00:50:08.2343026Z     pre_check.go:46: Time before creating cluster: 2025-12-10T00:32:25.789881769Z, ProjectID: 6938bf749fefc72ee289abb4, Cluster name: test-acc-tf-c-8869407808767852337
2025-12-10T00:50:08.2345436Z 2025/12/10 00:32:37 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf749fefc72ee289abb4/cloudProviderAccess/6938bfa39fefc72ee28adfbd PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1813841270803983501). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1813841270803983501], BadRequestDetail:  
2025-12-10T00:50:08.2347984Z 2025/12/10 00:32:37 retrying
2025-12-10T00:50:08.2364595Z   
2025-12-10T00:50:08.2365107Z     resource_cloud_backup_schedule_test.go:162: Step 1/2 error: Error running apply: exit status 1
2025-12-10T00:50:08.2365769Z         
2025-12-10T00:50:08.2367689Z         Error: error creating snapshot export bucket: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf749fefc72ee289abb4/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (6938bfa39fefc72ee28adfbd). Reason: Bad Request. Params: [6938bfa39fefc72ee28adfbd], BadRequestDetail: 
2025-12-10T00:50:08.2369020Z         
2025-12-10T00:50:08.2369464Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2025-12-10T00:50:08.2370276Z           on terraform_plugin_test.tf line 97, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2025-12-10T00:50:08.2371378Z           97:     resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2025-12-10T00:50:08.2371776Z         
2025-12-10T00:50:08.2372088Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (63.41s)
```

  - PASS 15 minutes
- 2025-12-11 PASS 14 minutes
- 2025-12-12 PASS 14 minutes
- 2025-12-13 PASS 15 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 minutes
- 2025-12-16 PASS 14 minutes
- 2025-12-17 PASS 15 minutes
- 2025-12-18 PASS 20 minutes
- 2025-12-19 PASS 16 minutes
- 2025-12-20 PASS 18 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 minutes
- 2025-12-23 PASS 14 minutes
- 2025-12-24 PASS 17 minutes
- 2025-12-25 PASS 21 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 13 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 15 minutes
- 2025-12-31 PASS 20 minutes
- 2026-01-01 PASS 13 minutes
- 2026-01-02 PASS 14 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 14 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 12 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 14 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 12 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
