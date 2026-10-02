# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6aa34e451761787ecbe0ec07/cloudProviderAccess/6aa363321761787ecbe813cd | dev |  | 2094.09s
[2026-09-11 08:11](#error-2026-09-11t0811580000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6aa3a270f7fcc4bbebf4bc09/cloudProviderAccess/6aa3ac08821e0ea7a4632151 | dev |  | 3020.10s
[2026-09-16 01:39](#error-2026-09-16t0139160000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 2052.06s
[2026-09-23 01:44](#error-2026-09-23t0144090000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6ab31ff1653bb1f6237ca9a3/cloudProviderAccess/6ab325e7aad6f205c427c86d | dev |  | 2310.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 24 minutes
- 2026-09-03 PASS 22 minutes
- 2026-09-04 PASS 22 minutes
- 2026-09-05 PASS 24 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 33 minutes
  - PASS 20 minutes
- 2026-09-08 PASS 22 minutes
- 2026-09-09 PASS 23 minutes
- 2026-09-10 PASS 33 minutes
- 2026-09-11
  - FAIL 34 minutes

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6912332Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-09-11T02:45:47.6914408Z 2026/09/11 02:10:59 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa34e451761787ecbe0ec07/cloudProviderAccess/6aa363321761787ecbe813cd PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-166268848226408497). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-166268848226408497], BadRequestDetail:  
2026-09-11T02:45:47.6916307Z 2026/09/11 02:10:59 retrying
2026-09-11T02:45:47.6925227Z    test_working_directory=/tmp/plugintest1703802571 test_name=TestAccBackupSnapshotExportJob_basic test_terraform_path=/home/runner/work/_temp/40cfbbe9-83f6-47b0-8ad2-9c3940c9b4a3/terraform test_step_number=1
2026-09-11T02:45:47.6926630Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:45:47.6927320Z         
2026-09-11T02:45:47.6928017Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa36738b5d7eda74f83b3ec) status was: failed
2026-09-11T02:45:47.6928570Z         
2026-09-11T02:45:47.6928969Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:45:47.6929739Z           on terraform_plugin_test.tf line 104, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:45:47.6930686Z          104: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:45:47.6931065Z         
2026-09-11T02:45:47.6931371Z --- FAIL: TestAccBackupSnapshotExportJob_basic (2094.88s)
```

  - FAIL 50 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5082775Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-09-11T08:11:58.5084812Z 2026/09/11 07:21:45 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa3a270f7fcc4bbebf4bc09/cloudProviderAccess/6aa3ac08821e0ea7a4632151 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2867718126327653899). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2867718126327653899], BadRequestDetail:  
2026-09-11T08:11:58.5086991Z 2026/09/11 07:21:45 retrying
2026-09-11T08:11:58.5096044Z    test_working_directory=/tmp/plugintest566192056 test_name=TestAccBackupSnapshotExportJob_basic test_terraform_path=/home/runner/work/_temp/e6de0a1e-57cd-41df-b143-515ef802e635/terraform
2026-09-11T08:11:58.5097205Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-09-11T08:11:58.5097729Z         
2026-09-11T08:11:58.5098449Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa3afd4f7fcc4bbebfbcbd5) status was: failed
2026-09-11T08:11:58.5099015Z         
2026-09-11T08:11:58.5099428Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T08:11:58.5100191Z           on terraform_plugin_test.tf line 104, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T08:11:58.5100904Z          104: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T08:11:58.5101284Z         
2026-09-11T08:11:58.5101601Z --- FAIL: TestAccBackupSnapshotExportJob_basic (3020.96s)
```

- 2026-09-12 PASS 22 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 27 minutes
- 2026-09-15 PASS 22 minutes
- 2026-09-16

### Error 2026-09-16T01:39:16+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2026-09-16T01:39:16.711000+00:00-TestAccBackupSnapshotExportJob_basic',confidence=1.0,ts_when='15 days ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2026-09-16T01:39:16.7115489Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-09-16T01:39:16.7119573Z 2026/09/16 01:05:11 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5ecbb07cf48935f210a/cloudProviderAccess/6aa9eb46bb07cf489362ed05 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-772684761357663542). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-772684761357663542], BadRequestDetail:  
2026-09-16T01:39:16.7122960Z 2026/09/16 01:05:11 retrying
2026-09-16T01:39:16.7140099Z   
2026-09-16T01:39:16.7141128Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-09-16T01:39:16.7142049Z         
2026-09-16T01:39:16.7143297Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa9ef67013d831ec4527e22) status was: failed
2026-09-16T01:39:16.7144266Z         
2026-09-16T01:39:16.7144957Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-16T01:39:16.7146336Z           on terraform_plugin_test.tf line 104, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-16T01:39:16.7147604Z          104: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-16T01:39:16.7148257Z         
2026-09-16T01:39:16.7148985Z --- FAIL: TestAccBackupSnapshotExportJob_basic (2052.59s)
```

- 2026-09-17 PASS 24 minutes
- 2026-09-18 PASS 24 minutes
- 2026-09-19 PASS 23 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 22 minutes
- 2026-09-22 PASS 25 minutes
- 2026-09-23
  - FAIL 38 minutes

### Error 2026-09-23T01:44:09+00:00
```
2026-09-23T01:44:09.7867698Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-09-23T01:44:09.7870421Z 2026/09/23 01:05:44 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab31ff1653bb1f6237ca9a3/cloudProviderAccess/6ab325e7aad6f205c427c86d PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5984212339196768902). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5984212339196768902], BadRequestDetail:  
2026-09-23T01:44:09.7872887Z 2026/09/23 01:05:44 retrying
2026-09-23T01:44:09.7885512Z   
2026-09-23T01:44:09.7886371Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-09-23T01:44:09.7887059Z         
2026-09-23T01:44:09.7887992Z         Error: error creating a snapshot: error creating MongoDB snapshot(6ab329aeacf14a9166ce01ef) status was: failed
2026-09-23T01:44:09.7888725Z         
2026-09-23T01:44:09.7889242Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-23T01:44:09.7890250Z           on terraform_plugin_test.tf line 104, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-23T01:44:09.7891160Z          104: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-23T01:44:09.7891647Z         
2026-09-23T01:44:09.7892044Z --- FAIL: TestAccBackupSnapshotExportJob_basic (2310.74s)
```

  - PASS 38 minutes
- 2026-09-24 PASS 23 minutes
- 2026-09-25 PASS 21 minutes
- 2026-09-26 PASS 21 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 20 minutes
- 2026-09-29 PASS 23 minutes
- 2026-09-30 PASS 20 minutes
- 2026-10-01 PASS 21 minutes
- 2026-10-02 PASS 20 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 19 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 21 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 20 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 20 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 20 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 22 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
