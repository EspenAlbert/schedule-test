# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-05 00:45](#error-2025-09-05t0045480000) |  | dev |  | 3.04s
[2025-09-10 00:48](#error-2025-09-10t0048180000) |  | dev | flaky_client | 830.10s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 27 minutes
- 2025-09-04 PASS 20 minutes
- 2025-09-05

### Error 2025-09-05T00:45:48+00:00
```
2025-09-05T00:45:48.8334583Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-09-05T00:45:48.8336032Z     resource_cloud_backup_schedule_migration_test.go:20: Creating execution project: test-acc-tf-p-850345245160664110
2025-09-05T00:45:48.8351014Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2025-09-05T00:45:48.8371826Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2025-09-05T00:45:48.8373446Z     resource_cloud_backup_schedule_migration_test.go:29: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-05T00:45:48.8374436Z         
2025-09-05T00:45:48.8375086Z         Error: Insufficient replication_specs blocks
2025-09-05T00:45:48.8375678Z         
2025-09-05T00:45:48.8376839Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T00:45:48.8378300Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-05T00:45:48.8378944Z         
2025-09-05T00:45:48.8379601Z         At least 1 "replication_specs" blocks are required.
2025-09-05T00:45:48.8380202Z         
2025-09-05T00:45:48.8380715Z         Error: Unsupported argument
2025-09-05T00:45:48.8381218Z         
2025-09-05T00:45:48.8382376Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T00:45:48.8383383Z           21:   replication_specs = [{
2025-09-05T00:45:48.8384207Z         
2025-09-05T00:45:48.8385125Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T00:45:48.8386137Z         define a block of type "replication_specs"?
2025-09-05T00:45:48.8394782Z    test_name=TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-05T00:45:48.8402895Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (3.38s)
```

- 2025-09-06 PASS 18 minutes
- 2025-09-07 PASS 16 minutes
- 2025-09-08
  - PASS 22 minutes
  - PASS 14 minutes
  - PASS 18 minutes
- 2025-09-09 PASS 19 minutes
- 2025-09-10

### Error 2025-09-10T00:48:18+00:00
```
2025-09-10T00:48:18.0117881Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-09-10T00:48:18.0119326Z     resource_cloud_backup_schedule_migration_test.go:20: Creating execution project: test-acc-tf-p-7504836063225828187
2025-09-10T00:48:18.0137349Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2025-09-10T00:48:18.0177951Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2025-09-10T00:48:18.0179013Z     resource_cloud_backup_schedule_migration_test.go:29: Step 1/2 error: Error running apply: exit status 1
2025-09-10T00:48:18.0179955Z         
2025-09-10T00:48:18.0180378Z         Error: Error in create
2025-09-10T00:48:18.0180801Z         
2025-09-10T00:48:18.0181417Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-10T00:48:18.0182648Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-10T00:48:18.0183769Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-10T00:48:18.0184344Z         
2025-09-10T00:48:18.0185140Z         cluster=test-acc-tf-c-8751157578233451383 didn't reach desired state: IDLE,
2025-09-10T00:48:18.0185837Z         error: Get
2025-09-10T00:48:18.0187107Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c0c5d83fcb0812ccf2a497/clusters/test-acc-tf-c-8751157578233451383":
2025-09-10T00:48:18.0188344Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-09-10T00:48:18.0201022Z   
2025-09-10T00:48:18.0212407Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (830.95s)
```

- 2025-09-11 PASS 18 minutes
- 2025-09-12 PASS 15 minutes
- 2025-09-13 PASS 20 minutes
- 2025-09-14 PASS 10 minutes
- 2025-09-15
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-09-16 PASS 14 minutes
- 2025-09-17 PASS 16 minutes
- 2025-09-18 PASS 20 minutes
- 2025-09-19 PASS 16 minutes
- 2025-09-20 PASS 28 minutes
- 2025-09-21 PASS 14 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 16 minutes
- 2025-09-24 PASS 17 minutes
- 2025-09-25 PASS 16 minutes
- 2025-09-26 PASS 17 minutes
- 2025-09-27 PASS 17 minutes
- 2025-09-28 PASS 16 minutes
- 2025-09-29
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 11 minutes
- 2025-10-02 PASS 17 minutes