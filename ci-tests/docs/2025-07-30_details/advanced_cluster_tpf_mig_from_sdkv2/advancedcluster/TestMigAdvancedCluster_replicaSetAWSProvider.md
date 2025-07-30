# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029550000) |  | dev | timeout | 10808.10s
[2025-07-14 00:31](#error-2025-07-14t0031120000) |  | dev | timeout | 10809.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-07-02
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 12 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-07-11

### Error 2025-07-11T00:29:55+00:00
```
2025-07-11T00:29:55.6208712Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-11T00:29:55.6209821Z     resource_advanced_cluster_migration_test.go:18: Running test SDKv2 to TPF
2025-07-11T00:29:59.4898832Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-11T00:30:04.4848966Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-11T00:30:04.4852090Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:04.484461583Z, ProjectID: 68705b034f431f68780bdedb, Cluster name: test-acc-tf-c-8994351140256838426
2025-07-11T03:30:06.6826487Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-11T03:30:06.6827123Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:30:06.6827874Z         
2025-07-11T03:30:06.6828658Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:06.6829195Z         
2025-07-11T03:30:06.6829509Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T03:30:06.6830137Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T03:30:06.6830715Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T03:30:06.6831014Z         
2025-07-11T03:30:06.8643426Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (10808.98s)
```

- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 13 minutes
- 2025-07-14

### Error 2025-07-14T00:31:12+00:00
```
2025-07-14T00:31:12.5168967Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-14T00:31:12.5170284Z     resource_advanced_cluster_migration_test.go:18: Running test SDKv2 to TPF
2025-07-14T00:31:18.1122480Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-14T00:31:23.1094014Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-14T00:31:23.1097885Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:23.108986379Z, ProjectID: 68744fd052cba864e5f10593, Cluster name: test-acc-tf-c-6050111685440428235
2025-07-14T03:31:21.0221591Z   
2025-07-14T03:31:24.9679834Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-07-14T03:31:24.9680955Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:24.9681763Z         
2025-07-14T03:31:24.9683068Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:24.9684074Z         
2025-07-14T03:31:24.9684631Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:24.9685802Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:24.9686829Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:24.9687377Z         
2025-07-14T03:31:25.1626988Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (10809.95s)
```

- 2025-07-15 PASS 13 minutes
- 2025-07-16 PASS 12 minutes
- 2025-07-17 PASS 12 minutes
- 2025-07-18 PASS 12 minutes
- 2025-07-19 PASS 13 minutes
- 2025-07-20 PASS 13 minutes
- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 12 minutes
- 2025-07-23
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 12 minutes
- 2025-07-25 PASS 14 minutes
- 2025-07-26 PASS 13 minutes
- 2025-07-27 PASS 15 minutes
- 2025-07-28 PASS 14 minutes
- 2025-07-29 PASS 12 minutes
- 2025-07-30 PASS 14 minutes