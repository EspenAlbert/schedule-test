# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_onePolicy Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10830.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 15 minutes
- 2025-08-07 PASS 21 minutes
- 2025-08-08 PASS 13 minutes
- 2025-08-09 PASS 18 minutes
- 2025-08-10 PASS 25 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 31 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 17 minutes
- 2025-08-15 PASS 14 minutes
- 2025-08-16 PASS 42 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 16 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - PASS 12 minutes
  - PASS 15 minutes
- 2025-08-21 PASS 15 minutes
- 2025-08-22 PASS 14 minutes
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 10 minutes
- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 32 minutes
- 2025-08-27 PASS 22 minutes
- 2025-08-28 PASS 14 minutes
- 2025-08-29 PASS 32 minutes
- 2025-08-30 PASS 15 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2907107Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-09-01T03:31:33.2914185Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-09-01T03:31:33.2925985Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-09-01T03:31:33.2926853Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:44.80298931Z, ProjectID: 68b4e91546ef690a79d6bd03, Cluster name: test-acc-tf-c-3139208891196015938
2025-09-01T03:31:33.2999574Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-09-01T03:31:33.3000236Z     resource_cloud_backup_schedule_test.go:190: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.3000660Z         
2025-09-01T03:31:33.3001576Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3002123Z         
2025-09-01T03:31:33.3002476Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.3003300Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.3003950Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.3004289Z         
2025-09-01T03:31:33.3004600Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (10830.86s)
```

  - PASS an hour
  - PASS an hour
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 13 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 28 minutes
- 2025-09-04 PASS 14 minutes