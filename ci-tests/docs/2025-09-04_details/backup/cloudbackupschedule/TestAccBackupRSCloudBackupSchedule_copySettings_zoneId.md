# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_copySettings_zoneId Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10835.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 19 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 14 minutes
- 2025-08-09 PASS 26 minutes
- 2025-08-10 PASS 22 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 13 minutes
  - PASS 10 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 17 minutes
- 2025-08-15 PASS 14 minutes
- 2025-08-16 PASS 37 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 14 minutes
- 2025-08-19 PASS 16 minutes
- 2025-08-20
  - PASS 14 minutes
  - PASS 16 minutes
- 2025-08-21 PASS 15 minutes
- 2025-08-22 PASS 15 minutes
- 2025-08-23 PASS 21 minutes
- 2025-08-24 PASS 9 minutes
- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 32 minutes
- 2025-08-27 PASS 24 minutes
- 2025-08-28 PASS 20 minutes
- 2025-08-29 PASS 29 minutes
- 2025-08-30 PASS 15 minutes
- 2025-08-31 PASS 11 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2908895Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-09-01T03:31:33.2914588Z === CONT  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-09-01T03:31:33.2927570Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-09-01T03:31:33.2928443Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:49.806105916Z, ProjectID: 68b4e91546ef690a79d6bd03, Cluster name: test-acc-tf-c-609181896467207148
2025-09-01T03:31:33.3013827Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-09-01T03:31:33.3014454Z     resource_cloud_backup_schedule_test.go:401: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.3014881Z         
2025-09-01T03:31:33.3015593Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3016138Z         
2025-09-01T03:31:33.3016498Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.3017188Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.3017833Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.3018164Z         
2025-09-01T03:31:33.3018505Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (10835.85s)
```

  - PASS an hour
  - PASS an hour
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 15 minutes
- 2025-09-02 PASS 14 minutes
- 2025-09-03 PASS 30 minutes
- 2025-09-04 PASS 17 minutes