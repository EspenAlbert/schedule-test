# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10840.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 15 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 14 minutes
- 2025-08-09 PASS 18 minutes
- 2025-08-10 PASS 25 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 31 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 15 minutes
- 2025-08-14 PASS 16 minutes
- 2025-08-15 PASS 14 minutes
- 2025-08-16 PASS 40 minutes
- 2025-08-17 PASS 30 minutes
- 2025-08-18 PASS 16 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - PASS 14 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 15 minutes
- 2025-08-22 PASS 11 minutes
- 2025-08-23 PASS 21 minutes
- 2025-08-24 PASS 10 minutes
- 2025-08-25 PASS 14 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 22 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29 PASS 31 minutes
- 2025-08-30 PASS 14 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2905626Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-09-01T03:31:33.2914981Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-09-01T03:31:33.2929101Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-09-01T03:31:33.2929922Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:54.806388112Z, ProjectID: 68b4e91546ef690a79d6bd03, Cluster name: test-acc-tf-c-4464643513304504112
2025-09-01T03:31:33.2935728Z    test_terraform_path=/home/runner/work/_temp/0c1781f9-fcce-4bb9-8b25-1b6dfc863162/terraform
2025-09-01T03:31:33.3041602Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-09-01T03:31:33.3042187Z     resource_cloud_backup_schedule_test.go:27: Step 1/3 error: Error running apply: exit status 1
2025-09-01T03:31:33.3042621Z         
2025-09-01T03:31:33.3043334Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3043881Z         
2025-09-01T03:31:33.3044246Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.3044947Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.3045591Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.3045932Z         
2025-09-01T03:31:33.3046225Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (10840.88s)
```

  - PASS an hour
  - PASS an hour
  - PASS 14 minutes
  - PASS 11 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 21 minutes
- 2025-09-04 PASS 18 minutes