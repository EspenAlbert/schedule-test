# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b1d59b8466ea738345/clusters/test-acc-tf-c-3834347326442606278 | dev | flaky_500 | 483.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 27 minutes
  - PASS 23 minutes
- 2025-12-11 PASS 24 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 25 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 20 minutes
- 2025-12-16 PASS 22 minutes
- 2025-12-17 PASS 26 minutes
- 2025-12-18 PASS 25 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 22 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 21 minutes
- 2025-12-24 PASS 26 minutes
- 2025-12-25 PASS 33 minutes
- 2025-12-26 PASS 22 minutes
- 2025-12-27 PASS 21 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 22 minutes
- 2025-12-31 PASS 26 minutes
- 2026-01-01 PASS 21 minutes
- 2026-01-02 PASS 23 minutes
- 2026-01-03 PASS 21 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 23 minutes
- 2026-01-06 PASS 20 minutes
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6386116Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-01-07T00:41:24.6390349Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-01-07T00:41:24.6402827Z    test_name=TestMigCloudBackupSnapshotRestoreJob_basic test_terraform_path=/home/runner/work/_temp/03cd9d3b-deb9-4eb9-93dd-2447f2d621ee/terraform test_working_directory=/tmp/plugintest196493401 test_step_number=1
2026-01-07T00:41:24.6456807Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-01-07T00:41:24.6457461Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:41:24.6457929Z         
2026-01-07T00:41:24.6458194Z         Error: Error in create
2026-01-07T00:41:24.6458444Z         
2026-01-07T00:41:24.6458813Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6459518Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6460183Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6460527Z         
2026-01-07T00:41:24.6460991Z         cluster=test-acc-tf-c-3834347326442606278 didn't reach desired state: IDLE,
2026-01-07T00:41:24.6461399Z         error:
2026-01-07T00:41:24.6462120Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b1d59b8466ea738345/clusters/test-acc-tf-c-3834347326442606278
2026-01-07T00:41:24.6462929Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6463508Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6464106Z         BadRequestDetail: 
2026-01-07T00:41:24.6464456Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (483.42s)
```

- 2026-01-08 PASS 23 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 20 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 28 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 20 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 22 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 22 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 22 minutes
