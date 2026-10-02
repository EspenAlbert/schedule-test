# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:45](#error-2026-09-11t0245470000) |  | dev | 5227.02s
[2026-09-11 08:11](#error-2026-09-11t0811580000) |  | dev | 2092.04s
[2026-09-24 01:11](#error-2026-09-24t0111370000) |  | dev | 1315.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 25 minutes
- 2026-09-03 PASS 20 minutes
- 2026-09-04 PASS 36 minutes
- 2026-09-05 PASS 20 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 22 minutes
  - PASS 20 minutes
- 2026-09-08 PASS 21 minutes
- 2026-09-09 PASS 21 minutes
- 2026-09-10 PASS 26 minutes
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:45:47+00:00
```
2026-09-11T02:45:47.6936423Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-11T02:45:47.6937902Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-11T02:45:47.6938780Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-11T02:45:47.6939761Z     pre_check.go:46: Time before creating cluster: 2026-09-11T00:43:59.067144603Z, ProjectID: 6aa34ec6b5d7eda74f7ebac7, Cluster name: test-acc-tf-c-4761587454088577684
2026-09-11T02:45:47.6949158Z    test_working_directory=/tmp/plugintest2570365518 test_step_number=1 test_name=TestAccCloudBackupSnapshotRestoreJob_basicDownload test_terraform_path=/home/runner/work/_temp/40cfbbe9-83f6-47b0-8ad2-9c3940c9b4a3/terraform
2026-09-11T02:45:47.6950739Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-09-11T02:45:47.6951281Z         
2026-09-11T02:45:47.6951972Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa35ef81761787ecbe763ac) status was: failed
2026-09-11T02:45:47.6952517Z         
2026-09-11T02:45:47.6953061Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:45:47.6953822Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:45:47.6954542Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:45:47.6954917Z         
2026-09-11T02:45:47.6966807Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (5227.21s)
```

  - FAIL 34 minutes

### Error 2026-09-11T08:11:58+00:00
```
2026-09-11T08:11:58.5107156Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-11T08:11:58.5108518Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-11T08:11:58.5109404Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-11T08:11:58.5110371Z     pre_check.go:46: Time before creating cluster: 2026-09-11T06:43:15.977636532Z, ProjectID: 6aa3a2fcf7fcc4bbebf63a5c, Cluster name: test-acc-tf-c-7396592189982935905
2026-09-11T08:11:58.5120063Z   
2026-09-11T08:11:58.5153188Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-11T08:11:58.5153961Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-09-11T08:11:58.5154480Z         
2026-09-11T08:11:58.5155165Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa3a6ec821e0ea7a4607c91) status was: failed
2026-09-11T08:11:58.5156001Z         
2026-09-11T08:11:58.5156435Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T08:11:58.5157353Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T08:11:58.5158069Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T08:11:58.5158443Z         
2026-09-11T08:11:58.5159317Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (2092.39s)
```

- 2026-09-12 PASS 21 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 23 minutes
- 2026-09-15 PASS 23 minutes
- 2026-09-16 PASS 23 minutes
- 2026-09-17 PASS 21 minutes
- 2026-09-18 PASS 23 minutes
- 2026-09-19 PASS 22 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 21 minutes
- 2026-09-22 PASS 21 minutes
- 2026-09-23
  - PASS 24 minutes
  - PASS 34 minutes
- 2026-09-24

### Error 2026-09-24T01:11:37+00:00
```
2026-09-24T01:11:37.2690592Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-24T01:11:37.2691759Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-24T01:11:37.2692506Z     pre_check.go:46: Time before creating cluster: 2026-09-24T00:43:21.37431917Z, ProjectID: 6ab472228381f5e702b72821, Cluster name: test-acc-tf-c-3961189436902425013
2026-09-24T01:11:37.2693102Z 2026/09/24 01:02:58 Automated restore cannot be cancelled
2026-09-24T01:11:37.2700016Z    test_working_directory=/tmp/plugintest2883007141 test_step_number=1 test_terraform_path=/home/runner/work/_temp/f2a95d77-0ec8-4daa-9833-3ee4daf3c450/terraform test_name=TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-09-24T01:11:37.2701005Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-09-24T01:11:37.2701522Z         
2026-09-24T01:11:37.2702065Z         Error: error creating a snapshot: error creating MongoDB snapshot(6ab4762dff00324af480362b) status was: failed
2026-09-24T01:11:37.2702499Z         
2026-09-24T01:11:37.2702832Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-24T01:11:37.2703422Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-24T01:11:37.2703978Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-24T01:11:37.2704284Z         
2026-09-24T01:11:37.2704586Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (1315.43s)
```

- 2026-09-25 PASS 20 minutes
- 2026-09-26 PASS 20 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 23 minutes
- 2026-09-29 PASS 21 minutes
- 2026-09-30 PASS 20 minutes
- 2026-10-01 PASS 21 minutes
- 2026-10-02 PASS 19 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 21 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 22 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 21 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 22 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 22 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 20 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
