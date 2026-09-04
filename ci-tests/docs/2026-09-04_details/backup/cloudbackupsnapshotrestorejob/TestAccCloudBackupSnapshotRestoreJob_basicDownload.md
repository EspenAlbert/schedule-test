# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:54](#error-2026-08-27t0254500000) |  | dev | 1906.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 19 minutes
- 2026-08-08 PASS 20 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 20 minutes
- 2026-08-11 PASS 21 minutes
- 2026-08-12 PASS 21 minutes
- 2026-08-13 PASS 20 minutes
- 2026-08-14 PASS 26 minutes
- 2026-08-15 PASS 20 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 22 minutes
- 2026-08-18 PASS 19 minutes
- 2026-08-19 PASS 22 minutes
- 2026-08-20 PASS 19 minutes
- 2026-08-21 PASS 19 minutes
- 2026-08-22 PASS 21 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 20 minutes
- 2026-08-25 PASS 24 minutes
- 2026-08-26 PASS 19 minutes
- 2026-08-27

### Error 2026-08-27T02:54:50+00:00
```
2026-08-27T02:54:50.1775832Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-08-27T02:54:50.1777162Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-08-27T02:54:50.1778064Z     pre_check.go:46: Time before creating cluster: 2026-08-27T01:48:05.446035255Z, ProjectID: 6a8f974d6af220b06a10f5c9, Cluster name: test-acc-tf-c-2152601031475211882
2026-08-27T02:54:50.1786896Z    test_terraform_path=/home/runner/work/_temp/47547f2f-f417-4a4b-b94c-d9317487d2bc/terraform test_step_number=1 test_working_directory=/tmp/plugintest1689780751
2026-08-27T02:54:50.1787892Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-08-27T02:54:50.1788393Z         
2026-08-27T02:54:50.1789050Z         Error: error creating a snapshot: error creating MongoDB snapshot(6a8f9b396af220b06a123033) status was: failed
2026-08-27T02:54:50.1789562Z         
2026-08-27T02:54:50.1789948Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-08-27T02:54:50.1790660Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-08-27T02:54:50.1791478Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-08-27T02:54:50.1791852Z         
2026-08-27T02:54:50.1805933Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (1906.90s)
```

- 2026-08-28 PASS 29 minutes
- 2026-08-29 PASS 21 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 22 minutes
- 2026-09-01 PASS 22 minutes
- 2026-09-02 PASS 25 minutes
- 2026-09-03 PASS 20 minutes
- 2026-09-04 PASS 36 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 23 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 21 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 22 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 20 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 21 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 20 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
