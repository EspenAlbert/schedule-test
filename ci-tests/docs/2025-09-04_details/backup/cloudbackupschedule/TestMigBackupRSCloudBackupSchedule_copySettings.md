# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_copySettings Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 00:44](#error-2025-08-15t0044480000) |  | dev |  | 1.06s
[2025-08-22 00:43](#error-2025-08-22t0043230000) |  | dev |  | 1.07s
[2025-08-29 01:03](#error-2025-08-29t0103390000) |  | dev |  | 2.00s
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10847.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 minutes
- 2025-08-07 PASS 27 minutes
- 2025-08-08 PASS 16 minutes
- 2025-08-09 PASS 20 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 31 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 16 minutes
- 2025-08-14 PASS 19 minutes
- 2025-08-15

### Error 2025-08-15T00:44:48+00:00
```
2025-08-15T00:44:48.5383555Z === RUN   TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-15T00:44:48.5399928Z === CONT  TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-15T00:44:48.5417157Z === NAME  TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-15T00:44:48.5418368Z     resource_cloud_backup_schedule_migration_test.go:117: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-08-15T00:44:48.5419436Z         
2025-08-15T00:44:48.5420004Z         Error: Insufficient replication_specs blocks
2025-08-15T00:44:48.5420506Z         
2025-08-15T00:44:48.5421534Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:44:48.5422853Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-15T00:44:48.5423425Z         
2025-08-15T00:44:48.5423999Z         At least 1 "replication_specs" blocks are required.
2025-08-15T00:44:48.5424508Z         
2025-08-15T00:44:48.5424943Z         Error: Unsupported argument
2025-08-15T00:44:48.5425554Z         
2025-08-15T00:44:48.5426583Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:44:48.5427490Z           21:   replication_specs = [{
2025-08-15T00:44:48.5427943Z         
2025-08-15T00:44:48.5428745Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T00:44:48.5429632Z         define a block of type "replication_specs"?
2025-08-15T00:44:48.5443470Z   
2025-08-15T00:44:48.5456909Z --- FAIL: TestMigBackupRSCloudBackupSchedule_copySettings (1.62s)
```

- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 14 minutes
- 2025-08-19 PASS 16 minutes
- 2025-08-20
  - PASS 13 minutes
  - PASS 40 minutes
- 2025-08-21 PASS 15 minutes
- 2025-08-22

### Error 2025-08-22T00:43:23+00:00
```
2025-08-22T00:43:23.2208208Z === RUN   TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-22T00:43:23.2219128Z === CONT  TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-22T00:43:23.2231167Z === NAME  TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-22T00:43:23.2232128Z     resource_cloud_backup_schedule_migration_test.go:117: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-08-22T00:43:23.2232945Z         
2025-08-22T00:43:23.2233446Z         Error: Insufficient replication_specs blocks
2025-08-22T00:43:23.2233763Z         
2025-08-22T00:43:23.2234478Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:43:23.2235241Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-22T00:43:23.2235611Z         
2025-08-22T00:43:23.2236037Z         At least 1 "replication_specs" blocks are required.
2025-08-22T00:43:23.2236350Z         
2025-08-22T00:43:23.2236716Z         Error: Unsupported argument
2025-08-22T00:43:23.2236984Z         
2025-08-22T00:43:23.2237714Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:43:23.2238329Z           21:   replication_specs = [{
2025-08-22T00:43:23.2238762Z         
2025-08-22T00:43:23.2239346Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T00:43:23.2239984Z         define a block of type "replication_specs"?
2025-08-22T00:43:23.2249903Z   
2025-08-22T00:43:23.2259063Z --- FAIL: TestMigBackupRSCloudBackupSchedule_copySettings (1.68s)
```

- 2025-08-23 PASS 14 minutes
- 2025-08-24 PASS 11 minutes
- 2025-08-25 PASS 15 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 39 minutes
- 2025-08-28 PASS 19 minutes
- 2025-08-29

### Error 2025-08-29T01:03:39+00:00
```
2025-08-29T01:03:39.4517497Z === RUN   TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-29T01:03:39.4536660Z === CONT  TestMigBackupRSCloudBackupSchedule_copySettings
2025-08-29T01:03:39.4551773Z   
2025-08-29T01:03:39.4552876Z     resource_cloud_backup_schedule_migration_test.go:117: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-08-29T01:03:39.4553816Z         
2025-08-29T01:03:39.4554708Z         Error: Insufficient replication_specs blocks
2025-08-29T01:03:39.4555320Z         
2025-08-29T01:03:39.4556522Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:03:39.4557660Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-29T01:03:39.4558013Z         
2025-08-29T01:03:39.4558376Z         At least 1 "replication_specs" blocks are required.
2025-08-29T01:03:39.4558689Z         
2025-08-29T01:03:39.4558964Z         Error: Unsupported argument
2025-08-29T01:03:39.4559226Z         
2025-08-29T01:03:39.4559821Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:03:39.4560339Z           21:   replication_specs = [{
2025-08-29T01:03:39.4560792Z         
2025-08-29T01:03:39.4561476Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T01:03:39.4562041Z         define a block of type "replication_specs"?
2025-08-29T01:03:39.4569354Z    test_working_directory=/tmp/plugintest2201313208 test_name=TestMigBackupRSCloudBackupSchedule_basic test_step_number=1
2025-08-29T01:03:39.4577749Z --- FAIL: TestMigBackupRSCloudBackupSchedule_copySettings (2.00s)
```

- 2025-08-30 PASS 14 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2904757Z === RUN   TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-01T03:31:33.2915353Z === CONT  TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-01T03:31:33.3052562Z === NAME  TestMigBackupRSCloudBackupSchedule_copySettings
2025-09-01T03:31:33.3053207Z     resource_cloud_backup_schedule_migration_test.go:111: Step 1/4 error: Error running apply: exit status 1
2025-09-01T03:31:33.3053673Z         
2025-09-01T03:31:33.3054382Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3054920Z         
2025-09-01T03:31:33.3055278Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.3055974Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.3056623Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.3057076Z         
2025-09-01T03:31:33.3057405Z --- FAIL: TestMigBackupRSCloudBackupSchedule_copySettings (10847.12s)
```

  - PASS an hour
  - PASS an hour
  - PASS 17 minutes
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 24 minutes
- 2025-09-04 PASS 16 minutes