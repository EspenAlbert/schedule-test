# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 00:44](#error-2025-08-15t0044480000) |  | dev |  | 3.06s
[2025-08-22 00:43](#error-2025-08-22t0043230000) |  | dev |  | 4.04s
[2025-08-29 01:03](#error-2025-08-29t0103390000) |  | dev |  | 4.03s
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10808.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 minutes
- 2025-08-07 PASS 23 minutes
- 2025-08-08 PASS 14 minutes
- 2025-08-09 PASS 20 minutes
- 2025-08-10 PASS 25 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 18 minutes
- 2025-08-15

### Error 2025-08-15T00:44:48+00:00
```
2025-08-15T00:44:48.5348934Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-08-15T00:44:48.5381568Z     resource_cloud_backup_schedule_migration_test.go:20: Creating execution project: test-acc-tf-p-4292342782639076127
2025-08-15T00:44:48.5396511Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2025-08-15T00:44:48.5443882Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2025-08-15T00:44:48.5445170Z     resource_cloud_backup_schedule_migration_test.go:29: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-15T00:44:48.5446028Z         
2025-08-15T00:44:48.5446636Z         Error: Insufficient replication_specs blocks
2025-08-15T00:44:48.5447191Z         
2025-08-15T00:44:48.5448250Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:44:48.5449408Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-15T00:44:48.5449984Z         
2025-08-15T00:44:48.5450570Z         At least 1 "replication_specs" blocks are required.
2025-08-15T00:44:48.5451091Z         
2025-08-15T00:44:48.5451535Z         Error: Unsupported argument
2025-08-15T00:44:48.5451972Z         
2025-08-15T00:44:48.5453169Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:44:48.5454073Z           21:   replication_specs = [{
2025-08-15T00:44:48.5454535Z         
2025-08-15T00:44:48.5455327Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T00:44:48.5456201Z         define a block of type "replication_specs"?
2025-08-15T00:44:48.5457683Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (3.56s)
```

- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 14 minutes
- 2025-08-19 PASS 19 minutes
- 2025-08-20
  - PASS 15 minutes
  - PASS 19 minutes
- 2025-08-21 PASS 17 minutes
- 2025-08-22

### Error 2025-08-22T00:43:23+00:00
```
2025-08-22T00:43:23.2204319Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-08-22T00:43:23.2206373Z     resource_cloud_backup_schedule_migration_test.go:20: Creating execution project: test-acc-tf-p-7853862384473184516
2025-08-22T00:43:23.2217786Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2025-08-22T00:43:23.2250158Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2025-08-22T00:43:23.2250960Z     resource_cloud_backup_schedule_migration_test.go:29: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-22T00:43:23.2251729Z         
2025-08-22T00:43:23.2252107Z         Error: Insufficient replication_specs blocks
2025-08-22T00:43:23.2252518Z         
2025-08-22T00:43:23.2253253Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:43:23.2254037Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-22T00:43:23.2254387Z         
2025-08-22T00:43:23.2254856Z         At least 1 "replication_specs" blocks are required.
2025-08-22T00:43:23.2255171Z         
2025-08-22T00:43:23.2255477Z         Error: Unsupported argument
2025-08-22T00:43:23.2255837Z         
2025-08-22T00:43:23.2256553Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:43:23.2257078Z           21:   replication_specs = [{
2025-08-22T00:43:23.2257453Z         
2025-08-22T00:43:23.2257921Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T00:43:23.2258547Z         define a block of type "replication_specs"?
2025-08-22T00:43:23.2259530Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (4.39s)
```

- 2025-08-23 PASS 21 minutes
- 2025-08-24 PASS 14 minutes
- 2025-08-25 PASS 16 minutes
- 2025-08-26 PASS 32 minutes
- 2025-08-27 PASS 22 minutes
- 2025-08-28 PASS 17 minutes
- 2025-08-29

### Error 2025-08-29T01:03:39+00:00
```
2025-08-29T01:03:39.4514386Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-08-29T01:03:39.4515863Z     resource_cloud_backup_schedule_migration_test.go:20: Creating execution project: test-acc-tf-p-3645785829731588815
2025-08-29T01:03:39.4531629Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2025-08-29T01:03:39.4569951Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2025-08-29T01:03:39.4570650Z     resource_cloud_backup_schedule_migration_test.go:29: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-29T01:03:39.4571593Z         
2025-08-29T01:03:39.4571927Z         Error: Insufficient replication_specs blocks
2025-08-29T01:03:39.4572244Z         
2025-08-29T01:03:39.4572845Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:03:39.4573510Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-29T01:03:39.4573846Z         
2025-08-29T01:03:39.4574191Z         At least 1 "replication_specs" blocks are required.
2025-08-29T01:03:39.4574500Z         
2025-08-29T01:03:39.4574763Z         Error: Unsupported argument
2025-08-29T01:03:39.4575026Z         
2025-08-29T01:03:39.4575609Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:03:39.4576117Z           21:   replication_specs = [{
2025-08-29T01:03:39.4576386Z         
2025-08-29T01:03:39.4576839Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T01:03:39.4577341Z         define a block of type "replication_specs"?
2025-08-29T01:03:39.4578203Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (4.26s)
```

- 2025-08-30 PASS 16 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2902029Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-09-01T03:31:33.2903279Z     resource_cloud_backup_schedule_migration_test.go:15: Creating execution project: test-acc-tf-p-3211627150596637425
2025-09-01T03:31:33.2912237Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2025-09-01T03:31:33.2936214Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2025-09-01T03:31:33.2936845Z     resource_cloud_backup_schedule_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.2937314Z         
2025-09-01T03:31:33.2938077Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.2938624Z         
2025-09-01T03:31:33.2938988Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.2939678Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.2940325Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.2940654Z         
2025-09-01T03:31:33.2941181Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (10808.91s)
```

  - PASS an hour
  - PASS an hour
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 19 minutes
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 27 minutes
- 2025-09-04 PASS 20 minutes