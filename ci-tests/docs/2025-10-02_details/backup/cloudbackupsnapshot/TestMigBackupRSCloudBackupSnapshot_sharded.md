# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_sharded Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-05 01:00](#error-2025-09-05t0100450000) |  | dev | 1.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 38 minutes
- 2025-09-05

### Error 2025-09-05T01:00:45+00:00
```
2025-09-05T01:00:45.8593687Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2025-09-05T01:00:45.8598633Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2025-09-05T01:00:45.8624992Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2025-09-05T01:00:45.8625664Z     resource_migration_test.go:56: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-05T01:00:45.8626219Z         
2025-09-05T01:00:45.8626543Z         Error: Insufficient replication_specs blocks
2025-09-05T01:00:45.8626838Z         
2025-09-05T01:00:45.8627600Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-09-05T01:00:45.8628241Z           14: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-09-05T01:00:45.8628561Z         
2025-09-05T01:00:45.8628900Z         At least 1 "replication_specs" blocks are required.
2025-09-05T01:00:45.8629201Z         
2025-09-05T01:00:45.8629456Z         Error: Unsupported argument
2025-09-05T01:00:45.8629719Z         
2025-09-05T01:00:45.8630270Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-09-05T01:00:45.8630811Z           20: 			replication_specs = [{
2025-09-05T01:00:45.8631078Z         
2025-09-05T01:00:45.8631518Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T01:00:45.8632018Z         define a block of type "replication_specs"?
2025-09-05T01:00:45.8632827Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (1.17s)
```

- 2025-09-06 PASS 37 minutes
- 2025-09-07 PASS 39 minutes
- 2025-09-08
  - PASS 36 minutes
  - PASS 32 minutes
  - PASS 38 minutes
- 2025-09-09 PASS 39 minutes
- 2025-09-10 PASS 32 minutes
- 2025-09-11 PASS 30 minutes
- 2025-09-12 PASS 27 minutes
- 2025-09-13 PASS 34 minutes
- 2025-09-14 PASS 23 minutes
- 2025-09-15
  - PASS 24 minutes
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-09-16 PASS 28 minutes
- 2025-09-17 PASS 29 minutes
- 2025-09-18 PASS 43 minutes
- 2025-09-19 PASS 39 minutes
- 2025-09-20 PASS 46 minutes
- 2025-09-21 PASS 36 minutes
- 2025-09-22 PASS 41 minutes
- 2025-09-23 PASS 41 minutes
- 2025-09-24 PASS 40 minutes
- 2025-09-25 PASS 42 minutes
- 2025-09-26 PASS 40 minutes
- 2025-09-27 PASS 27 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29
  - PASS 34 minutes
  - PASS 24 minutes
- 2025-09-30
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 25 minutes
- 2025-10-01
  - PASS an hour
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 36 minutes
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 26 minutes
- 2025-10-02 PASS 2 hours