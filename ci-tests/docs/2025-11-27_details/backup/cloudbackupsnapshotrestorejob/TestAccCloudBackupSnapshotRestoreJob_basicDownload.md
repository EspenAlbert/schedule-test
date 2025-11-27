# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 11816.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 26 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3673709Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-10-30T04:45:03.3674923Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-10-30T04:45:03.3675934Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:29:17.91611487Z, ProjectID: 6902b155e2dc7470847c4487, Cluster name: test-acc-tf-c-3162475410931939574
2025-10-30T04:45:03.3676631Z 2025/10/30 00:44:54 Automated restore cannot be cancelled
2025-10-30T04:45:03.3697858Z    test_terraform_path=/home/runner/work/_temp/e436e89c-829f-47f7-8b03-299954dd1cc6/terraform test_name=TestAccCloudBackupSnapshotRestoreJob_basic test_working_directory=/tmp/plugintest105711866 test_step_number=2
2025-10-30T04:45:03.3711937Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-10-30T04:45:03.3712721Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:45:03.3713288Z         
2025-10-30T04:45:03.3713539Z         Error: Error in delete
2025-10-30T04:45:03.3713789Z         
2025-10-30T04:45:03.3714213Z         cluster=test-acc-tf-c-3162475410931939574 didn't reach desired state:
2025-10-30T04:45:03.3714831Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:45:03.3715293Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:45:03.3715720Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (11816.86s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 17 minutes
- 2025-11-04 PASS 22 minutes
- 2025-11-05
  - PASS 26 minutes
  - PASS 21 minutes
- 2025-11-06 PASS 27 minutes
- 2025-11-07 PASS 23 minutes
- 2025-11-08 PASS 47 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 18 minutes
- 2025-11-12 PASS 21 minutes
- 2025-11-13 PASS 27 minutes
- 2025-11-14 PASS 23 minutes
- 2025-11-15 PASS 20 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 24 minutes
- 2025-11-18 PASS 21 minutes
- 2025-11-19
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-11-20 PASS 24 minutes
- 2025-11-21 PASS 18 minutes
- 2025-11-22 PASS 20 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 18 minutes
- 2025-11-25 PASS 22 minutes
- 2025-11-26 PASS 20 minutes
- 2025-11-27 PASS 26 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 16 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 20 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 21 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 20 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 23 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
