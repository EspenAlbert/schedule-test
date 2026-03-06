# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 1440.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 26 minutes
- 2026-02-11 PASS 23 minutes
- 2026-02-12 PASS 22 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 23 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 23 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 31 minutes
- 2026-02-20 PASS 27 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 25 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2819049Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-24T01:20:27.2820374Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-124839683414035327
2026-02-24T01:20:27.2823813Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-24T01:20:27.2844263Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-24T01:20:27.2845704Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:20:27.2846618Z         
2026-02-24T01:20:27.2847845Z         Error: error taking a snapshot: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2848802Z         
2026-02-24T01:20:27.2849462Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-02-24T01:20:27.2850787Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-02-24T01:20:27.2852029Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-02-24T01:20:27.2852657Z         
2026-02-24T01:20:27.2868237Z    test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform test_working_directory=/tmp/plugintest3087447250
2026-02-24T01:20:27.2878673Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (1440.89s)
```

- 2026-02-25 PASS 28 minutes
- 2026-02-26 PASS 32 minutes
- 2026-02-27 PASS 24 minutes
- 2026-02-28 PASS 23 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 24 minutes
- 2026-03-03 PASS 27 minutes
- 2026-03-04 PASS 23 minutes
- 2026-03-05 PASS 30 minutes
- 2026-03-06 PASS 56 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 26 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 25 minutes
  - PASS 19 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 22 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 26 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 23 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
