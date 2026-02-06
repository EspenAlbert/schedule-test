# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10840.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 29 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 28 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 26 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 26 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 22 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 27 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 28 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 29 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 36 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:46+00:00
```
2026-02-02T00:38:46.2856650Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T00:40:19.9806715Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:40:28.6970742Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:40:28.6971709Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:28.6972669Z         
2026-02-02T03:40:28.6973071Z         Error: Error in create
2026-02-02T03:40:28.6973469Z         
2026-02-02T03:40:28.6974010Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:28.6975117Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:28.6975977Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:28.6976408Z         
2026-02-02T03:40:28.6977301Z         cluster=test-acc-tf-c-738685821306728581 didn't reach desired state: IDLE,
2026-02-02T03:40:28.6977944Z         error: context deadline exceeded
2026-02-02T03:40:29.8220899Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/88686103-8137-4ab0-af0d-786a02dc3665/terraform test_working_directory=/tmp/plugintest2724861083 test_step_number=1
2026-02-02T03:41:00.1123921Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10840.13s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 40 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 27 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 23 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 23 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 27 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 25 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
