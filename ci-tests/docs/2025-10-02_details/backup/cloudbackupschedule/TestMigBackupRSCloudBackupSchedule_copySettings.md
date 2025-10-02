# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_copySettings Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-05 00:45](#error-2025-09-05t0045480000) |  | dev |  | 1.03s
[2025-09-10 00:48](#error-2025-09-10t0048180000) |  | dev | flaky_client | 828.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 24 minutes
- 2025-09-04 PASS 16 minutes
- 2025-09-05

### Error 2025-09-05T00:45:48+00:00
```
2025-09-05T00:45:48.8338064Z === RUN   TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-05T00:45:48.8354574Z === CONT  TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-05T00:45:48.8395228Z === NAME  TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-05T00:45:48.8395946Z     resource_cloud_backup_schedule_migration_test.go:117: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-09-05T00:45:48.8396455Z         
2025-09-05T00:45:48.8396787Z         Error: Insufficient replication_specs blocks
2025-09-05T00:45:48.8397095Z         
2025-09-05T00:45:48.8397982Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T00:45:48.8398657Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-05T00:45:48.8399002Z         
2025-09-05T00:45:48.8399347Z         At least 1 "replication_specs" blocks are required.
2025-09-05T00:45:48.8399654Z         
2025-09-05T00:45:48.8399922Z         Error: Unsupported argument
2025-09-05T00:45:48.8400182Z         
2025-09-05T00:45:48.8400762Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T00:45:48.8401274Z           21:   replication_specs = [{
2025-09-05T00:45:48.8401541Z         
2025-09-05T00:45:48.8402000Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T00:45:48.8402506Z         define a block of type "replication_specs"?
2025-09-05T00:45:48.8403534Z --- FAIL: TestMigBackupRSCloudBackupSchedule_copySettings (1.28s)
```

- 2025-09-06 PASS 18 minutes
- 2025-09-07 PASS 14 minutes
- 2025-09-08
  - PASS 23 minutes
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-09-09 PASS 16 minutes
- 2025-09-10

### Error 2025-09-10T00:48:18+00:00
```
2025-09-10T00:48:18.0124803Z === RUN   TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-10T00:48:18.0140668Z === CONT  TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-10T00:48:18.0201475Z === NAME  TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-10T00:48:18.0202586Z     resource_cloud_backup_schedule_migration_test.go:117: Step 1/3 error: Error running apply: exit status 1
2025-09-10T00:48:18.0203384Z         
2025-09-10T00:48:18.0203827Z         Error: Error in create
2025-09-10T00:48:18.0204242Z         
2025-09-10T00:48:18.0204855Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-10T00:48:18.0206058Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-10T00:48:18.0207202Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-10T00:48:18.0207770Z         
2025-09-10T00:48:18.0208512Z         cluster=test-acc-tf-c-50738307075413943 didn't reach desired state: IDLE,
2025-09-10T00:48:18.0209191Z         error: Get
2025-09-10T00:48:18.0210658Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c0c5d83fcb0812ccf2a497/clusters/test-acc-tf-c-50738307075413943":
2025-09-10T00:48:18.0211777Z         dial tcp 23.23.86.210:443: i/o timeout
2025-09-10T00:48:18.0213179Z --- FAIL: TestMigBackupRSCloudBackupSchedule_copySettings (828.50s)
```

- 2025-09-11 PASS 15 minutes
- 2025-09-12 PASS 11 minutes
- 2025-09-13 PASS 17 minutes
- 2025-09-14 PASS 11 minutes
- 2025-09-15
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 9 minutes
- 2025-09-16 PASS 11 minutes
- 2025-09-17 PASS 12 minutes
- 2025-09-18 PASS 21 minutes
- 2025-09-19 PASS 13 minutes
- 2025-09-20 PASS 16 minutes
- 2025-09-21 PASS 13 minutes
- 2025-09-22 PASS 14 minutes
- 2025-09-23 PASS 14 minutes
- 2025-09-24 PASS 13 minutes
- 2025-09-25 PASS 14 minutes
- 2025-09-26 PASS 14 minutes
- 2025-09-27 PASS 11 minutes
- 2025-09-28 PASS 10 minutes
- 2025-09-29
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-09-30
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-10-01
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 10 minutes
- 2025-10-02 PASS 10 minutes