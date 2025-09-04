# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10815.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 24 minutes
- 2025-08-07 PASS 32 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 41 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 23 minutes
- 2025-08-15 PASS 16 minutes
- 2025-08-16 PASS 49 minutes
- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 21 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 27 minutes
- 2025-08-21 PASS 23 minutes
- 2025-08-22 PASS 18 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24 PASS 20 minutes
- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 32 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29 PASS 38 minutes
- 2025-08-30 PASS 24 minutes
- 2025-08-31 PASS 29 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.3067291Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-09-01T03:31:33.3069075Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-09-01T03:31:33.3071898Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-09-01T03:31:33.3072890Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:33.668829336Z, ProjectID: 68b4e9167af6b0372e94210d, Cluster name: test-acc-tf-c-6438996210312399646
2025-09-01T03:31:33.3078825Z   
2025-09-01T03:31:33.3106798Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-09-01T03:31:33.3107382Z     resource_cloud_backup_snapshot_test.go:28: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.3107800Z         
2025-09-01T03:31:33.3108503Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3109042Z         
2025-09-01T03:31:33.3109394Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.3110084Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.3110921Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.3111325Z         
2025-09-01T03:31:33.3111613Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (10815.83s)
```

  - PASS an hour
  - PASS an hour
  - PASS 25 minutes
  - PASS 28 minutes
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 23 minutes
- 2025-09-03 PASS 36 minutes
- 2025-09-04 PASS 24 minutes