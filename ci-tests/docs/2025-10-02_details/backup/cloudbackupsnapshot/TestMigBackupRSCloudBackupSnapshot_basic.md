# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-05 01:00](#error-2025-09-05t0100450000) |  | dev | 3.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 33 minutes
- 2025-09-05

### Error 2025-09-05T01:00:45+00:00
```
2025-09-05T01:00:45.8592061Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-09-05T01:00:45.8592775Z     resource_migration_test.go:15: Creating execution project: test-acc-tf-p-7860726125832716399
2025-09-05T01:00:45.8597522Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-09-05T01:00:45.8607953Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-09-05T01:00:45.8610770Z     resource_migration_test.go:21: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-05T01:00:45.8611226Z         
2025-09-05T01:00:45.8611559Z         Error: Insufficient replication_specs blocks
2025-09-05T01:00:45.8611861Z         
2025-09-05T01:00:45.8612452Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:00:45.8613103Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-05T01:00:45.8613438Z         
2025-09-05T01:00:45.8613774Z         At least 1 "replication_specs" blocks are required.
2025-09-05T01:00:45.8614075Z         
2025-09-05T01:00:45.8614342Z         Error: Unsupported argument
2025-09-05T01:00:45.8614596Z         
2025-09-05T01:00:45.8615175Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:00:45.8615686Z           21:   replication_specs = [{
2025-09-05T01:00:45.8615946Z         
2025-09-05T01:00:45.8616401Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T01:00:45.8616895Z         define a block of type "replication_specs"?
2025-09-05T01:00:45.8624608Z    test_name=TestMigBackupRSCloudBackupSnapshot_sharded
2025-09-05T01:00:45.8632400Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (3.16s)
```

- 2025-09-06 PASS 31 minutes
- 2025-09-07 PASS 25 minutes
- 2025-09-08
  - PASS 31 minutes
  - PASS 23 minutes
  - PASS 25 minutes
- 2025-09-09 PASS 30 minutes
- 2025-09-10 PASS 25 minutes
- 2025-09-11 PASS 24 minutes
- 2025-09-12 PASS 21 minutes
- 2025-09-13 PASS 28 minutes
- 2025-09-14 PASS 18 minutes
- 2025-09-15
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-09-16 PASS 24 minutes
- 2025-09-17 PASS 22 minutes
- 2025-09-18 PASS 28 minutes
- 2025-09-19 PASS 21 minutes
- 2025-09-20 PASS 22 minutes
- 2025-09-21 PASS 19 minutes
- 2025-09-22 PASS 19 minutes
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 21 minutes
- 2025-09-25 PASS 23 minutes
- 2025-09-26 PASS 22 minutes
- 2025-09-27 PASS 25 minutes
- 2025-09-28 PASS 25 minutes
- 2025-09-29
  - PASS 22 minutes
  - PASS 19 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 17 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 23 minutes