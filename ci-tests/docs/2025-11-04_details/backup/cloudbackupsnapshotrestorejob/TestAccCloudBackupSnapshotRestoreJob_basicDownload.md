# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 11816.09s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 19 minutes
- 2025-10-07 PASS 31 minutes
- 2025-10-08 PASS 21 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 26 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 20 minutes
- 2025-10-15 PASS 18 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 23 minutes
- 2025-10-18 PASS 20 minutes
- 2025-10-19 PASS 21 minutes
- 2025-10-20
  - PASS 26 minutes
  - PASS 15 minutes
- 2025-10-21 PASS 18 minutes
- 2025-10-22
  - PASS 23 minutes
  - PASS 20 minutes
- 2025-10-23 PASS 26 minutes
- 2025-10-24 PASS 19 minutes
- 2025-10-25 PASS 22 minutes
- 2025-10-26 PASS 17 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 21 minutes
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
- 2025-11-02 PASS 16 minutes
- 2025-11-03 PASS 17 minutes
- 2025-11-04 PASS 22 minutes