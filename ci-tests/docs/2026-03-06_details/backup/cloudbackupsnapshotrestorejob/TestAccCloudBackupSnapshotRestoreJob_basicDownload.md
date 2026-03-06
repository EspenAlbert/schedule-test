# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 1449.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 27 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 22 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 23 minutes
- 2026-02-11 PASS 24 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 27 minutes
- 2026-02-14 PASS 24 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 36 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 24 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2822289Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-02-24T01:20:27.2824543Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-02-24T01:20:27.2826386Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:38:02.735662213Z, ProjectID: 699cf2e3ae2412ce6212e924, Cluster name: test-acc-tf-c-9004303815171605756
2026-02-24T01:20:27.2842921Z    test_name=TestAccCloudBackupSnapshotRestoreJob_basic test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform
2026-02-24T01:20:27.2869547Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-02-24T01:20:27.2870796Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:20:27.2871696Z         
2026-02-24T01:20:27.2872915Z         Error: error taking a snapshot: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2873865Z         
2026-02-24T01:20:27.2874527Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-02-24T01:20:27.2876067Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-02-24T01:20:27.2877510Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-02-24T01:20:27.2878139Z         
2026-02-24T01:20:27.2879570Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (1449.43s)
```

- 2026-02-25 PASS 25 minutes
- 2026-02-26 PASS 32 minutes
- 2026-02-27 PASS 24 minutes
- 2026-02-28 PASS 26 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 22 minutes
- 2026-03-03 PASS 26 minutes
- 2026-03-04 PASS 23 minutes
- 2026-03-05 PASS 36 minutes
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 24 minutes
  - PASS 17 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 27 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 21 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
