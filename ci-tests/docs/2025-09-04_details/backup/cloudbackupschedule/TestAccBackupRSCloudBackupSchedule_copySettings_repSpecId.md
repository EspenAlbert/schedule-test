# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_copySettings_repSpecId Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10811.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 14 minutes
- 2025-08-09 PASS 18 minutes
- 2025-08-10 PASS 22 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 18 minutes
  - PASS 13 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 14 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 30 minutes
- 2025-08-18 PASS 16 minutes
- 2025-08-19 PASS 16 minutes
- 2025-08-20
  - PASS 12 minutes
  - PASS 16 minutes
- 2025-08-21 PASS 16 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 15 minutes
- 2025-08-25 PASS 13 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 22 minutes
- 2025-08-28 PASS 14 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 16 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2907938Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_repSpecId
2025-09-01T03:31:33.2912652Z === CONT  TestAccBackupRSCloudBackupSchedule_copySettings_repSpecId
2025-09-01T03:31:33.2915812Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_repSpecId
2025-09-01T03:31:33.2916731Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:24.797112385Z, ProjectID: 68b4e91546ef690a79d6bd03, Cluster name: test-acc-tf-c-1556526707016567331
2025-09-01T03:31:33.2956637Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_repSpecId
2025-09-01T03:31:33.2957320Z     resource_cloud_backup_schedule_test.go:315: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.2957759Z         
2025-09-01T03:31:33.2958481Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.2959039Z         
2025-09-01T03:31:33.2959407Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.2960106Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.2961011Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.2961375Z         
2025-09-01T03:31:33.2961733Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_repSpecId (10811.02s)
```

  - PASS an hour
  - PASS an hour
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 18 minutes
- 2025-09-03 PASS 18 minutes
- 2025-09-04 PASS 19 minutes