# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:56](#error-2026-02-24t0056260000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699cf2a28dfec41eaa847838/cloudProviderAccess/699cf2ccae2412ce62128580 | dev | flaky_500 | 1018.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 19 minutes
- 2026-02-06 PASS 16 minutes
- 2026-02-07 PASS 19 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10 PASS 18 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 20 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 19 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 18 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T00:56:26+00:00
```
2026-02-24T00:56:26.6811351Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6823468Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6878412Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6880149Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:24.146716474Z, ProjectID: 699cf2a28dfec41eaa847838, Cluster name: test-acc-tf-c-7151337619973360903
2026-02-24T00:56:26.6884573Z 2026/02/24 00:37:33 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a28dfec41eaa847838/cloudProviderAccess/699cf2ccae2412ce62128580 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4400266209161475115). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4400266209161475115], BadRequestDetail:  
2026-02-24T00:56:26.6888066Z 2026/02/24 00:37:33 retrying
2026-02-24T00:56:26.6904220Z    test_name=TestAccBackupRSCloudBackupSchedule_basic test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform test_working_directory=/tmp/plugintest2477043192
2026-02-24T00:56:26.6932261Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6933392Z     resource_cloud_backup_schedule_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:26.6934215Z         
2026-02-24T00:56:26.6935928Z         Error: error creating a Cloud Backup Schedule: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:26.6936986Z         
2026-02-24T00:56:26.6937720Z           with mongodbatlas_cloud_backup_schedule.schedule_test,
2026-02-24T00:56:26.6939144Z           on terraform_plugin_test.tf line 43, in resource "mongodbatlas_cloud_backup_schedule" "schedule_test":
2026-02-24T00:56:26.6940533Z           43:     resource "mongodbatlas_cloud_backup_schedule" "schedule_test" {
2026-02-24T00:56:26.6941263Z         
2026-02-24T00:56:26.6995159Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (1018.81s)
```

- 2026-02-25 PASS 18 minutes
- 2026-02-26 PASS 19 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 17 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 16 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 22 minutes
- 2026-03-06 PASS 20 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-22 00:57](#error-2026-02-22t0057310000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699a5015c26caab7eb25b79f/backup/exportBuckets | qa | 40.09s

### Timeline
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 14 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 19 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 15 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T00:57:31+00:00
```
2026-02-22T00:57:31.8396593Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8407469Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8416641Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8417545Z     pre_check.go:46: Time before creating cluster: 2026-02-22T00:39:04.406797145Z, ProjectID: 699a5015c26caab7eb25b79f, Cluster name: test-acc-tf-c-4853939872613247750
2026-02-22T00:57:31.8446941Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8447597Z     resource_cloud_backup_schedule_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-02-22T00:57:31.8448284Z         
2026-02-22T00:57:31.8450448Z         Error: error creating snapshot export bucket: https://cloud-qa.mongodb.com/api/atlas/v2/groups/699a5015c26caab7eb25b79f/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (699a502fc26caab7eb25ffd6). Reason: Bad Request. Params: [699a502fc26caab7eb25ffd6], BadRequestDetail: 
2026-02-22T00:57:31.8451831Z         
2026-02-22T00:57:31.8452270Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2026-02-22T00:57:31.8453119Z           on terraform_plugin_test.tf line 97, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2026-02-22T00:57:31.8453928Z           97:     resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2026-02-22T00:57:31.8454332Z         
2026-02-22T00:57:31.8456496Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (40.91s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 18 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 16 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
