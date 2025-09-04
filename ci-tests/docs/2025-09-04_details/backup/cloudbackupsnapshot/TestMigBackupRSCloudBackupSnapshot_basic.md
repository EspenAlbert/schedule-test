# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 00:55](#error-2025-08-15t0055000000) |  | dev |  | 11.09s
[2025-08-22 00:52](#error-2025-08-22t0052280000) |  | dev |  | 3.07s
[2025-08-29 01:10](#error-2025-08-29t0110200000) |  | dev |  | 4.02s
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10811.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 25 minutes
- 2025-08-07 PASS 30 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 30 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 26 minutes
  - PASS 19 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15

### Error 2025-08-15T00:55:00+00:00
```
2025-08-15T00:55:00.6102974Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-08-15T00:55:00.6103828Z     resource_migration_test.go:15: Creating execution project: test-acc-tf-p-5408272480554204790
2025-08-15T00:55:00.6108397Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-08-15T00:55:00.6118838Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-08-15T00:55:00.6119432Z     resource_migration_test.go:21: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-15T00:55:00.6119864Z         
2025-08-15T00:55:00.6120236Z         Error: Insufficient replication_specs blocks
2025-08-15T00:55:00.6120537Z         
2025-08-15T00:55:00.6121135Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:55:00.6121979Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-15T00:55:00.6122475Z         
2025-08-15T00:55:00.6122827Z         At least 1 "replication_specs" blocks are required.
2025-08-15T00:55:00.6123132Z         
2025-08-15T00:55:00.6123401Z         Error: Unsupported argument
2025-08-15T00:55:00.6123664Z         
2025-08-15T00:55:00.6124239Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:55:00.6124749Z           21:   replication_specs = [{
2025-08-15T00:55:00.6125011Z         
2025-08-15T00:55:00.6125460Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T00:55:00.6125962Z         define a block of type "replication_specs"?
2025-08-15T00:55:00.6135672Z   
2025-08-15T00:55:00.6143235Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (11.90s)
```

- 2025-08-16 PASS 44 minutes
- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 25 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 28 minutes
- 2025-08-21 PASS 23 minutes
- 2025-08-22

### Error 2025-08-22T00:52:28+00:00
```
2025-08-22T00:52:28.9581978Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-08-22T00:52:28.9582892Z     resource_migration_test.go:15: Creating execution project: test-acc-tf-p-1414999143860994544
2025-08-22T00:52:28.9587799Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-08-22T00:52:28.9613712Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-08-22T00:52:28.9614313Z     resource_migration_test.go:21: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-22T00:52:28.9614728Z         
2025-08-22T00:52:28.9615198Z         Error: Insufficient replication_specs blocks
2025-08-22T00:52:28.9615502Z         
2025-08-22T00:52:28.9616106Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:52:28.9616781Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-22T00:52:28.9617115Z         
2025-08-22T00:52:28.9617466Z         At least 1 "replication_specs" blocks are required.
2025-08-22T00:52:28.9617771Z         
2025-08-22T00:52:28.9618038Z         Error: Unsupported argument
2025-08-22T00:52:28.9618307Z         
2025-08-22T00:52:28.9618891Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:52:28.9619413Z           21:   replication_specs = [{
2025-08-22T00:52:28.9619675Z         
2025-08-22T00:52:28.9620128Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T00:52:28.9620638Z         define a block of type "replication_specs"?
2025-08-22T00:52:28.9621630Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (3.67s)
```

- 2025-08-23 PASS 26 minutes
- 2025-08-24 PASS 19 minutes
- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 31 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29

### Error 2025-08-29T01:10:20+00:00
```
2025-08-29T01:10:20.4497953Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-08-29T01:10:20.4498790Z     resource_migration_test.go:15: Creating execution project: test-acc-tf-p-975732889071736653
2025-08-29T01:10:20.4503241Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-08-29T01:10:20.4523288Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-08-29T01:10:20.4523901Z     resource_migration_test.go:21: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-29T01:10:20.4524337Z         
2025-08-29T01:10:20.4524685Z         Error: Insufficient replication_specs blocks
2025-08-29T01:10:20.4524991Z         
2025-08-29T01:10:20.4525592Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:10:20.4526254Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-29T01:10:20.4526591Z         
2025-08-29T01:10:20.4526945Z         At least 1 "replication_specs" blocks are required.
2025-08-29T01:10:20.4527252Z         
2025-08-29T01:10:20.4527521Z         Error: Unsupported argument
2025-08-29T01:10:20.4527780Z         
2025-08-29T01:10:20.4528362Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:10:20.4528887Z           21:   replication_specs = [{
2025-08-29T01:10:20.4529150Z         
2025-08-29T01:10:20.4529606Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T01:10:20.4530118Z         define a block of type "replication_specs"?
2025-08-29T01:10:20.4537475Z    test_name=TestMigBackupRSCloudBackupSnapshot_sharded test_terraform_path=/home/runner/work/_temp/566c503f-d4ea-477c-84b9-913931599454/terraform test_working_directory=/tmp/plugintest412636995 test_step_number=1
2025-08-29T01:10:20.4545795Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (4.21s)
```

- 2025-08-30 PASS 24 minutes
- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.3064943Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-09-01T03:31:33.3065621Z     resource_cloud_backup_snapshot_migration_test.go:13: Creating execution project: test-acc-tf-p-6391020802020958154
2025-09-01T03:31:33.3068720Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-09-01T03:31:33.3079074Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-09-01T03:31:33.3079700Z     resource_cloud_backup_snapshot_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.3080279Z         
2025-09-01T03:31:33.3081219Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3081768Z         
2025-09-01T03:31:33.3082128Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.3082828Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.3083474Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.3083816Z         
2025-09-01T03:31:33.3084114Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (10811.57s)
```

  - PASS an hour
  - PASS an hour
  - PASS 24 minutes
  - PASS 27 minutes
  - PASS 19 minutes
  - PASS 24 minutes
  - PASS 26 minutes
- 2025-09-02 PASS 23 minutes
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 33 minutes