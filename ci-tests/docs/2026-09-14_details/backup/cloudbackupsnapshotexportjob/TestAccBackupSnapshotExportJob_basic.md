# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6aa34e451761787ecbe0ec07/cloudProviderAccess/6aa363321761787ecbe813cd | dev | 2094.09s
[2026-09-11 08:11](#error-2026-09-11t0811580000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6aa3a270f7fcc4bbebf4bc09/cloudProviderAccess/6aa3ac08821e0ea7a4632151 | dev | 3020.10s

### Timeline
- 2026-09-07 PASS 20 minutes
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 21 minutes
- 2026-09-14: MISSING
