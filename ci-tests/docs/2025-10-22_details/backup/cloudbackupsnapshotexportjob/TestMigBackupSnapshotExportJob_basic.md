# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 05:31](#error-2025-10-01t0531450000) |  | dev | flaky_500 | 1178.09s
[2025-10-09 03:46](#error-2025-10-09t0346060000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68e7015bc2a3cd1693040211/clusters/test-acc-tf-c-7556308358022175822/backup/snapshots/68e705ccc2a3cd169306d610 | dev | timeout | 10439.04s
[2025-10-11 01:08](#error-2025-10-11t0108450000) |  | dev | flaky_client | 1365.01s
[2025-10-12 03:12](#error-2025-10-12t0312230000) |  | qa | timeout | 8296.09s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 20 minutes
- 2025-09-24 PASS 22 minutes
- 2025-09-25 PASS 23 minutes
- 2025-09-26 PASS 23 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 32 minutes
- 2025-09-29
  - PASS 26 minutes
  - PASS 18 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 32 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 20 minutes
  - FAIL 19 minutes

### Error 2025-10-01T05:31:45+00:00
```
2025-10-01T05:31:45.4621508Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-10-01T05:31:45.4624049Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3441285559686282319
2025-10-01T05:31:45.4630099Z    test_working_directory=/tmp/plugintest579564078 test_step_number=1 test_terraform_path=/home/runner/work/_temp/920764a5-1707-43de-9713-8c96ab1835fc/terraform
2025-10-01T05:31:45.4631415Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-01T05:31:45.4632121Z         
2025-10-01T05:31:45.4632850Z         Error: error creating snapshot export job: (503 Service Unavailable) failed to decode response body: undefined response type
2025-10-01T05:31:45.4633394Z         
2025-10-01T05:31:45.4633813Z           with mongodbatlas_cloud_backup_snapshot_export_job.test,
2025-10-01T05:31:45.4634617Z           on terraform_plugin_test.tf line 120, in resource "mongodbatlas_cloud_backup_snapshot_export_job" "test":
2025-10-01T05:31:45.4635349Z          120: resource "mongodbatlas_cloud_backup_snapshot_export_job" "test" {
2025-10-01T05:31:45.4635722Z         
2025-10-01T05:31:45.4636015Z --- FAIL: TestMigBackupSnapshotExportJob_basic (1178.90s)
```

  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 25 minutes
- 2025-10-03 PASS 19 minutes
- 2025-10-04 PASS 23 minutes
- 2025-10-05 PASS 28 minutes
- 2025-10-06 PASS 19 minutes
- 2025-10-07 PASS 31 minutes
- 2025-10-08 PASS 24 minutes
- 2025-10-09

### Error 2025-10-09T03:46:06+00:00
```
2025-10-09T03:46:06.4372303Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-10-09T03:46:06.4373968Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4831580736578222906
2025-10-09T03:46:06.4388401Z    test_name=TestMigBackupSnapshotExportJob_basic test_terraform_path=/home/runner/work/_temp/1daf128d-64d3-4853-bd88-459710298618/terraform
2025-10-09T03:46:06.4389508Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-09T03:46:06.4390136Z         
2025-10-09T03:46:06.4391035Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-09T03:46:06.4392456Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T03:46:06.4395382Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e7015bc2a3cd1693040211/clusters/test-acc-tf-c-7556308358022175822/backup/snapshots/68e705ccc2a3cd169306d610 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68e705ccc2a3cd169306d610. Reason: Bad Request. Params: [68e705ccc2a3cd169306d610], BadRequestDetail: 
2025-10-09T03:46:06.4397136Z         
2025-10-09T03:46:06.4397514Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-09T03:46:06.4398531Z           on terraform_plugin_test.tf line 106, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-09T03:46:06.4399301Z          106: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-09T03:46:06.4399650Z         
2025-10-09T03:46:06.4400028Z --- FAIL: TestMigBackupSnapshotExportJob_basic (10439.43s)
```

- 2025-10-10 PASS 26 minutes
- 2025-10-11

### Error 2025-10-11T01:08:45+00:00
```
2025-10-11T01:08:45.2777945Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-10-11T01:08:45.2781501Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-28437980569669410
2025-10-11T01:08:45.2797969Z   
2025-10-11T01:08:45.2798727Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-11T01:08:45.2799376Z         
2025-10-11T01:08:45.2799655Z         Error: Error in delete
2025-10-11T01:08:45.2799925Z         
2025-10-11T01:08:45.2800387Z         cluster=test-acc-tf-c-6885587334417250686 didn't reach desired state:
2025-10-11T01:08:45.2800841Z         DELETED, error: Get
2025-10-11T01:08:45.2801669Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e9a403e5f7141b76bf741f/clusters/test-acc-tf-c-6885587334417250686":
2025-10-11T01:08:45.2802449Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-11T01:08:45.2802896Z --- FAIL: TestMigBackupSnapshotExportJob_basic (1365.09s)
```

- 2025-10-12

### Error 2025-10-12T03:12:23+00:00
```
2025-10-12T03:12:23.0135530Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-10-12T03:12:23.0136733Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-1281552142945100301
2025-10-12T03:12:23.0151120Z   
2025-10-12T03:12:23.0152143Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-12T03:12:23.0153019Z         
2025-10-12T03:12:23.0154522Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'queued', timeout: 1h0m0s)
2025-10-12T03:12:23.0156926Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-12T03:12:23.0157986Z         
2025-10-12T03:12:23.0158617Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-12T03:12:23.0159865Z           on terraform_plugin_test.tf line 106, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-12T03:12:23.0161196Z          106: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-12T03:12:23.0161778Z         
2025-10-12T03:12:23.0162264Z --- FAIL: TestMigBackupSnapshotExportJob_basic (8296.95s)
```

- 2025-10-13 PASS 23 minutes
- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 31 minutes
- 2025-10-17 PASS 25 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 32 minutes
- 2025-10-20 PASS 22 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 26 minutes
  - PASS 28 minutes