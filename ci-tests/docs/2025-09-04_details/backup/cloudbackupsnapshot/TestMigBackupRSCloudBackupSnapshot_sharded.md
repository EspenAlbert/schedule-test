# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_sharded Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 00:55](#error-2025-08-15t0055000000) |  | dev |  | 1.07s
[2025-08-22 00:52](#error-2025-08-22t0052280000) |  | dev |  | 1.04s
[2025-08-29 01:10](#error-2025-08-29t0110200000) |  | dev |  | 1.07s
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10822.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 35 minutes
- 2025-08-07 PASS 35 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 49 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 32 minutes
  - PASS 29 minutes
- 2025-08-13 PASS 32 minutes
- 2025-08-14 PASS 40 minutes
- 2025-08-15

### Error 2025-08-15T00:55:00+00:00
```
2025-08-15T00:55:00.6104777Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-15T00:55:00.6110062Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-15T00:55:00.6117917Z    test_name=TestMigBackupRSCloudBackupSnapshot_basic test_terraform_path=/home/runner/work/_temp/7c21fb6d-4261-4cfe-84d1-f696fd5097cf/terraform test_working_directory=/tmp/plugintest304553416 test_step_number=1
2025-08-15T00:55:00.6136041Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-15T00:55:00.6136640Z     resource_migration_test.go:56: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-15T00:55:00.6137065Z         
2025-08-15T00:55:00.6137396Z         Error: Insufficient replication_specs blocks
2025-08-15T00:55:00.6137696Z         
2025-08-15T00:55:00.6138281Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-08-15T00:55:00.6138922Z           14: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-08-15T00:55:00.6139256Z         
2025-08-15T00:55:00.6139596Z         At least 1 "replication_specs" blocks are required.
2025-08-15T00:55:00.6139903Z         
2025-08-15T00:55:00.6140196Z         Error: Unsupported argument
2025-08-15T00:55:00.6140453Z         
2025-08-15T00:55:00.6141021Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-08-15T00:55:00.6141530Z           20: 			replication_specs = [{
2025-08-15T00:55:00.6141803Z         
2025-08-15T00:55:00.6142355Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T00:55:00.6142854Z         define a block of type "replication_specs"?
2025-08-15T00:55:00.6143665Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (1.74s)
```

- 2025-08-16 PASS an hour
- 2025-08-17 PASS 48 minutes
- 2025-08-18 PASS 35 minutes
- 2025-08-19 PASS 35 minutes
- 2025-08-20
  - PASS 33 minutes
  - PASS 32 minutes
- 2025-08-21 PASS 31 minutes
- 2025-08-22

### Error 2025-08-22T00:52:28+00:00
```
2025-08-22T00:52:28.9584304Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-22T00:52:28.9589067Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-22T00:52:28.9598301Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-22T00:52:28.9598915Z     resource_migration_test.go:56: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-22T00:52:28.9599340Z         
2025-08-22T00:52:28.9599671Z         Error: Insufficient replication_specs blocks
2025-08-22T00:52:28.9599973Z         
2025-08-22T00:52:28.9600558Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-08-22T00:52:28.9601214Z           14: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-08-22T00:52:28.9601761Z         
2025-08-22T00:52:28.9602113Z         At least 1 "replication_specs" blocks are required.
2025-08-22T00:52:28.9602427Z         
2025-08-22T00:52:28.9602692Z         Error: Unsupported argument
2025-08-22T00:52:28.9602955Z         
2025-08-22T00:52:28.9603533Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-08-22T00:52:28.9604056Z           20: 			replication_specs = [{
2025-08-22T00:52:28.9604330Z         
2025-08-22T00:52:28.9604798Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T00:52:28.9605315Z         define a block of type "replication_specs"?
2025-08-22T00:52:28.9613456Z   
2025-08-22T00:52:28.9621028Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (1.37s)
```

- 2025-08-23 PASS 33 minutes
- 2025-08-24 PASS 48 minutes
- 2025-08-25 PASS 40 minutes
- 2025-08-26 PASS 46 minutes
- 2025-08-27 PASS 37 minutes
- 2025-08-28 PASS 35 minutes
- 2025-08-29

### Error 2025-08-29T01:10:20+00:00
```
2025-08-29T01:10:20.4499745Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-29T01:10:20.4505124Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-29T01:10:20.4522883Z    test_name=TestMigBackupRSCloudBackupSnapshot_basic
2025-08-29T01:10:20.4538367Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2025-08-29T01:10:20.4539040Z     resource_migration_test.go:56: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-29T01:10:20.4539457Z         
2025-08-29T01:10:20.4539906Z         Error: Insufficient replication_specs blocks
2025-08-29T01:10:20.4540198Z         
2025-08-29T01:10:20.4540775Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-08-29T01:10:20.4541618Z           14: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-08-29T01:10:20.4541946Z         
2025-08-29T01:10:20.4542292Z         At least 1 "replication_specs" blocks are required.
2025-08-29T01:10:20.4542599Z         
2025-08-29T01:10:20.4542860Z         Error: Unsupported argument
2025-08-29T01:10:20.4543126Z         
2025-08-29T01:10:20.4543690Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-08-29T01:10:20.4544200Z           20: 			replication_specs = [{
2025-08-29T01:10:20.4544459Z         
2025-08-29T01:10:20.4544909Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T01:10:20.4545413Z         define a block of type "replication_specs"?
2025-08-29T01:10:20.4546229Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (1.75s)
```

- 2025-08-30 PASS 32 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.3066550Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2025-09-01T03:31:33.3069785Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2025-09-01T03:31:33.3117228Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2025-09-01T03:31:33.3117851Z     resource_cloud_backup_snapshot_migration_test.go:53: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.3118440Z         
2025-09-01T03:31:33.3119149Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3119681Z         
2025-09-01T03:31:33.3120032Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-09-01T03:31:33.3120868Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-09-01T03:31:33.3121565Z           14: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-09-01T03:31:33.3121892Z         
2025-09-01T03:31:33.3122190Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (10822.49s)
```

  - PASS an hour
  - PASS an hour
  - PASS 39 minutes
  - PASS 28 minutes
  - PASS 37 minutes
  - PASS 33 minutes
  - PASS 31 minutes
- 2025-09-02 PASS 36 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 38 minutes