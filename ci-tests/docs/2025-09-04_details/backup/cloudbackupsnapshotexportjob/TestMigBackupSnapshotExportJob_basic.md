# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 00:55](#error-2025-08-15t0055000000) |  | dev |  | 10.00s
[2025-08-22 00:52](#error-2025-08-22t0052280000) |  | dev |  | 8.09s
[2025-08-26 01:28](#error-2025-08-26t0128400000) |  | dev |  | 1927.07s
[2025-08-27 01:11](#error-2025-08-27t0111590000) |  | dev | dangling_resource | 1896.01s
[2025-08-29 01:10](#error-2025-08-29t0110200000) |  | dev | unknown | 8.01s
[2025-09-01 05:30](#error-2025-09-01t0530140000) |  | dev | timeout | 10824.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 26 minutes
- 2025-08-07 PASS 33 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 49 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15

### Error 2025-08-15T00:55:00+00:00
```
2025-08-15T00:55:00.6165020Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-08-15T00:55:00.6165729Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6603737571361890606
2025-08-15T00:55:00.6173227Z    test_name=TestMigBackupSnapshotExportJob_basic test_terraform_path=/home/runner/work/_temp/7c21fb6d-4261-4cfe-84d1-f696fd5097cf/terraform
2025-08-15T00:55:00.6174535Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-15T00:55:00.6175048Z         
2025-08-15T00:55:00.6175379Z         Error: Insufficient replication_specs blocks
2025-08-15T00:55:00.6175681Z         
2025-08-15T00:55:00.6176271Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:55:00.6176918Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-15T00:55:00.6177244Z         
2025-08-15T00:55:00.6177891Z         At least 1 "replication_specs" blocks are required.
2025-08-15T00:55:00.6178230Z         
2025-08-15T00:55:00.6178502Z         Error: Unsupported argument
2025-08-15T00:55:00.6178773Z         
2025-08-15T00:55:00.6179361Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T00:55:00.6179876Z           26:   replication_specs = [{
2025-08-15T00:55:00.6180136Z         
2025-08-15T00:55:00.6180588Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T00:55:00.6181087Z         define a block of type "replication_specs"?
2025-08-15T00:55:00.6181566Z --- FAIL: TestMigBackupSnapshotExportJob_basic (10.04s)
```

- 2025-08-16 PASS 47 minutes
- 2025-08-17 PASS 56 minutes
- 2025-08-18 PASS 31 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 24 minutes
  - PASS 38 minutes
- 2025-08-21 PASS 22 minutes
- 2025-08-22

### Error 2025-08-22T00:52:28+00:00
```
2025-08-22T00:52:28.9644705Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-08-22T00:52:28.9645432Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-2496060165744440505
2025-08-22T00:52:28.9653245Z    test_terraform_path=/home/runner/work/_temp/4f0d103f-949f-48d6-8634-76066ec96d82/terraform test_working_directory=/tmp/plugintest3147419266
2025-08-22T00:52:28.9654236Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-22T00:52:28.9654750Z         
2025-08-22T00:52:28.9655087Z         Error: Insufficient replication_specs blocks
2025-08-22T00:52:28.9655386Z         
2025-08-22T00:52:28.9655989Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:52:28.9656649Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-22T00:52:28.9656993Z         
2025-08-22T00:52:28.9657474Z         At least 1 "replication_specs" blocks are required.
2025-08-22T00:52:28.9657802Z         
2025-08-22T00:52:28.9658074Z         Error: Unsupported argument
2025-08-22T00:52:28.9658336Z         
2025-08-22T00:52:28.9658934Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T00:52:28.9659460Z           26:   replication_specs = [{
2025-08-22T00:52:28.9659730Z         
2025-08-22T00:52:28.9660193Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T00:52:28.9660700Z         define a block of type "replication_specs"?
2025-08-22T00:52:28.9661059Z --- FAIL: TestMigBackupSnapshotExportJob_basic (8.93s)
```

- 2025-08-23 PASS 25 minutes
- 2025-08-24 PASS 29 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26

### Error 2025-08-26T01:28:40+00:00
```
2025-08-26T01:28:40.2098194Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-08-26T01:28:40.2099209Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-2961965415828921550
2025-08-26T01:28:40.2101733Z     pre_check.go:40: Time before creating cluster: 2025-08-26T00:27:28.332142365Z, ProjectID: 68acff65304c2a61a1faa6ca, Cluster name: test-acc-tf-c-5276010067407035449
2025-08-26T01:28:40.2107464Z    test_working_directory=/tmp/plugintest4040975575 test_step_number=1 test_terraform_path=/home/runner/work/_temp/6ecc3331-e83d-4237-99b1-4dc7ae16b4ae/terraform test_name=TestMigBackupSnapshotExportJob_basic
2025-08-26T01:28:40.2108639Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-08-26T01:28:40.2109130Z         
2025-08-26T01:28:40.2109894Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-4232440636106051713): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-26T01:28:40.2110703Z         	status code: 409, request id: 3fb45e01-8ed9-4d1e-bf12-efdae6ea72b6
2025-08-26T01:28:40.2111051Z         
2025-08-26T01:28:40.2111551Z           with aws_iam_role.test_role,
2025-08-26T01:28:40.2112153Z           on terraform_plugin_test.tf line 66, in resource "aws_iam_role" "test_role":
2025-08-26T01:28:40.2112673Z           66: resource "aws_iam_role" "test_role" {
2025-08-26T01:28:40.2112957Z         
2025-08-26T01:28:40.2113342Z --- FAIL: TestMigBackupSnapshotExportJob_basic (1927.74s)
```

- 2025-08-27

### Error 2025-08-27T01:11:59+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-08-27T01:11:59.212000+00:00-TestMigBackupSnapshotExportJob_basic',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:11:59.2129363Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-08-27T01:11:59.2130318Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-4363529228073147394
2025-08-27T01:11:59.2131602Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:27:47.470415684Z, ProjectID: 68ae50fc8c9e474c785b7fb1, Cluster name: test-acc-tf-c-5214810336435342415
2025-08-27T01:11:59.2138547Z    test_working_directory=/tmp/plugintest463085083 test_step_number=1 test_name=TestMigBackupSnapshotExportJob_basic
2025-08-27T01:11:59.2139914Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:11:59.2140496Z         
2025-08-27T01:11:59.2141397Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-1341992447674433887): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T01:11:59.2142235Z         	status code: 409, request id: 67c6570d-5d0a-4dd9-bc4b-1b320d3633a3
2025-08-27T01:11:59.2142595Z         
2025-08-27T01:11:59.2142884Z           with aws_iam_role.test_role,
2025-08-27T01:11:59.2143463Z           on terraform_plugin_test.tf line 66, in resource "aws_iam_role" "test_role":
2025-08-27T01:11:59.2144348Z           66: resource "aws_iam_role" "test_role" {
2025-08-27T01:11:59.2144834Z         
2025-08-27T01:11:59.2145319Z --- FAIL: TestMigBackupSnapshotExportJob_basic (1896.13s)
```

- 2025-08-28 PASS 27 minutes
- 2025-08-29

### Error 2025-08-29T01:10:20+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-29T01:10:20.456000+00:00-TestMigBackupSnapshotExportJob_basic',confidence=1.0,ts_when='6 days ago')

```
2025-08-29T01:10:20.4568011Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-08-29T01:10:20.4568725Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-6766614472073155026
2025-08-29T01:10:20.4576879Z    test_step_number=1
2025-08-29T01:10:20.4577502Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-29T01:10:20.4578016Z         
2025-08-29T01:10:20.4578349Z         Error: Insufficient replication_specs blocks
2025-08-29T01:10:20.4578644Z         
2025-08-29T01:10:20.4579247Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:10:20.4579903Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-29T01:10:20.4580239Z         
2025-08-29T01:10:20.4580584Z         At least 1 "replication_specs" blocks are required.
2025-08-29T01:10:20.4581076Z         
2025-08-29T01:10:20.4581487Z         Error: Unsupported argument
2025-08-29T01:10:20.4581760Z         
2025-08-29T01:10:20.4582341Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:10:20.4582860Z           26:   replication_specs = [{
2025-08-29T01:10:20.4583120Z         
2025-08-29T01:10:20.4583576Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T01:10:20.4584080Z         define a block of type "replication_specs"?
2025-08-29T01:10:20.4584437Z --- FAIL: TestMigBackupSnapshotExportJob_basic (8.12s)
```

- 2025-08-30 PASS 24 minutes
- 2025-08-31 PASS 39 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T05:30:14+00:00
```
2025-09-01T05:30:14.9324356Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-09-01T05:30:14.9325660Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-3529399897880946790
2025-09-01T05:30:14.9327051Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:22.374512949Z, ProjectID: 68b4e91746ef690a79d6ca2e, Cluster name: test-acc-tf-c-5562345913759065865
2025-09-01T05:30:14.9333572Z   
2025-09-01T05:30:14.9334132Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-01T05:30:14.9334631Z         
2025-09-01T05:30:14.9335341Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T05:30:14.9336047Z         
2025-09-01T05:30:14.9336413Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T05:30:14.9337112Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T05:30:14.9337757Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T05:30:14.9338092Z         
2025-09-01T05:30:14.9338369Z --- FAIL: TestMigBackupSnapshotExportJob_basic (10824.80s)
```

  - PASS an hour
  - PASS an hour
  - PASS 29 minutes
  - PASS 20 minutes
  - PASS 24 minutes
  - PASS 24 minutes
  - PASS 25 minutes
- 2025-09-02 PASS 24 minutes
- 2025-09-03 PASS 42 minutes
- 2025-09-04 PASS 30 minutes