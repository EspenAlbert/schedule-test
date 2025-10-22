# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-26 00:27](#error-2025-09-26t0027090000) |  | dev | 10839.01s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 23 minutes
- 2025-09-24 PASS 23 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26

### Error 2025-09-26T00:27:09+00:00
```
2025-09-26T00:27:09.6376874Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T00:28:51.0183243Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:58.7209373Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:58.7209940Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-26T03:28:58.7210329Z         
2025-09-26T03:28:58.7210578Z         Error: Error in create
2025-09-26T03:28:58.7210815Z         
2025-09-26T03:28:58.7211133Z           with mongodbatlas_advanced_cluster.test,
2025-09-26T03:28:58.7211776Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-26T03:28:58.7212371Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-26T03:28:58.7212678Z         
2025-09-26T03:28:58.7213112Z         cluster=test-acc-tf-c-560725183405676862 didn't reach desired state: IDLE,
2025-09-26T03:28:58.7213562Z         error: context deadline exceeded
2025-09-26T03:28:59.2634063Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/5e9fd989-fbdf-4391-bea5-8b2a71aedad0/terraform test_working_directory=/tmp/plugintest3871870288
2025-09-26T03:29:30.1342532Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10839.12s)
```

- 2025-09-27 PASS 23 minutes
- 2025-09-28 PASS 24 minutes
- 2025-09-29
  - PASS 36 minutes
  - PASS 17 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 16 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-10-01
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 33 minutes
  - PASS 17 minutes
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 34 minutes
  - PASS 17 minutes
- 2025-10-02 PASS 30 minutes
- 2025-10-03 PASS 23 minutes
- 2025-10-04 PASS 21 minutes
- 2025-10-05 PASS 17 minutes
- 2025-10-06 PASS 19 minutes
- 2025-10-07 PASS 21 minutes
- 2025-10-08 PASS 23 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 26 minutes
- 2025-10-11 PASS 25 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 26 minutes
- 2025-10-14 PASS 21 minutes
- 2025-10-15 PASS 22 minutes
- 2025-10-16 PASS 34 minutes
- 2025-10-17 PASS 25 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 21 minutes
- 2025-10-20 PASS 26 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 27 minutes
  - PASS 20 minutes