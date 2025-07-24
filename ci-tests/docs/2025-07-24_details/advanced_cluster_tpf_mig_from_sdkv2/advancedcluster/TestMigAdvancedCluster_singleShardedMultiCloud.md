# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029570000) |  | dev | timeout | 10803.04s
[2025-07-14 00:31](#error-2025-07-14t0031150000) |  | dev | timeout | 10803.02s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 16 minutes
- 2025-06-26 PASS 15 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 15 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-07-02
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 15 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-07-11

### Error 2025-07-11T00:29:57+00:00
```
2025-07-11T00:29:57.2279429Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-07-11T00:29:57.2280773Z     resource_advanced_cluster_migration_test.go:26: Running test SDKv2 to TPF
2025-07-11T00:29:59.4900189Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-07-11T03:30:02.6673492Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-07-11T03:30:02.6674127Z     resource_advanced_cluster_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:30:02.6674572Z         
2025-07-11T03:30:02.6675275Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:02.6675810Z         
2025-07-11T03:30:02.6676124Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T03:30:02.6676755Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T03:30:02.6677338Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T03:30:02.6677844Z         
2025-07-11T03:30:02.7813448Z    test_working_directory=/tmp/plugintest2228595054 test_step_number=1
2025-07-11T03:30:02.8553942Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (10803.37s)
```

- 2025-07-12 PASS 18 minutes
- 2025-07-13 PASS 18 minutes
- 2025-07-14

### Error 2025-07-14T00:31:15+00:00
```
2025-07-14T00:31:15.4112844Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-07-14T00:31:15.4113946Z     resource_advanced_cluster_migration_test.go:26: Running test SDKv2 to TPF
2025-07-14T00:31:18.1123883Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-07-14T03:31:21.1002485Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-07-14T03:31:21.1003562Z     resource_advanced_cluster_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:21.1004274Z         
2025-07-14T03:31:21.1005418Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:21.1006263Z         
2025-07-14T03:31:21.1006763Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:21.1007781Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:21.1008709Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:21.1009191Z         
2025-07-14T03:31:21.2959359Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (10803.19s)
```

- 2025-07-15 PASS 14 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 15 minutes
- 2025-07-18 PASS 21 minutes
- 2025-07-19 PASS 17 minutes
- 2025-07-20 PASS 14 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-07-24 PASS 16 minutes