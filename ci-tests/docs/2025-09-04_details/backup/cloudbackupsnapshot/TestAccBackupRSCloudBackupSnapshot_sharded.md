# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10810.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 52 minutes
- 2025-08-07 PASS 33 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 50 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 32 minutes
  - PASS 28 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15 PASS 24 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 42 minutes
- 2025-08-18 PASS 39 minutes
- 2025-08-19 PASS 35 minutes
- 2025-08-20
  - PASS 33 minutes
  - PASS 31 minutes
- 2025-08-21 PASS 31 minutes
- 2025-08-22 PASS 24 minutes
- 2025-08-23 PASS 37 minutes
- 2025-08-24 PASS 32 minutes
- 2025-08-25 PASS 35 minutes
- 2025-08-26 PASS 37 minutes
- 2025-08-27 PASS 37 minutes
- 2025-08-28 PASS 33 minutes
- 2025-08-29 PASS 42 minutes
- 2025-08-30 PASS 34 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.3068001Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-09-01T03:31:33.3069426Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-09-01T03:31:33.3070140Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-09-01T03:31:33.3071199Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:28.664745055Z, ProjectID: 68b4e9167af6b0372e94210d, Cluster name: test-acc-tf-c-7986147811378853385
2025-09-01T03:31:33.3093103Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-09-01T03:31:33.3093675Z     resource_cloud_backup_snapshot_test.go:77: Step 1/1 error: Error running apply: exit status 1
2025-09-01T03:31:33.3094101Z         
2025-09-01T03:31:33.3094795Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3095322Z         
2025-09-01T03:31:33.3095794Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-09-01T03:31:33.3096517Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-09-01T03:31:33.3097158Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-09-01T03:31:33.3097491Z         
2025-09-01T03:31:33.3097790Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10810.87s)
```

  - PASS an hour
  - PASS an hour
  - PASS 33 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 32 minutes
  - PASS 31 minutes
- 2025-09-02 PASS 36 minutes
- 2025-09-03 PASS 47 minutes
- 2025-09-04 PASS 39 minutes