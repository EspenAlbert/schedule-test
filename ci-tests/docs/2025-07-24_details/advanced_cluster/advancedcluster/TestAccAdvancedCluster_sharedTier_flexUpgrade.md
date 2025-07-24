# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 03:32](#error-2025-07-10t0332460000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 7,17,31,73 | dev | real_test_failure | 363.04s
[2025-07-11 03:33](#error-2025-07-11t0333160000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,18,31,73 | dev |  | 370.08s
[2025-07-23 03:33](#error-2025-07-23t0333590000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 33,34,73 | dev |  | 423.05s
[2025-07-23 11:18](#error-2025-07-23t1118430000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,21,36,37,73 | qa |  | 1255.00s
[2025-07-23 16:26](#error-2025-07-23t1626430000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 31,32,73 | qa |  | 433.03s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 7 minutes
- 2025-06-26 PASS 6 minutes
- 2025-06-27 PASS 6 minutes
- 2025-06-28 PASS 6 minutes
- 2025-06-29 PASS 7 minutes
- 2025-06-30 PASS 8 minutes
- 2025-07-01
  - PASS 7 minutes
  - PASS 7 minutes
  - PASS 6 minutes
  - PASS 7 minutes
  - PASS 6 minutes
- 2025-07-02 PASS 7 minutes
- 2025-07-03 PASS 7 minutes
- 2025-07-04 PASS 7 minutes
- 2025-07-05 PASS 6 minutes
- 2025-07-06 PASS 6 minutes
- 2025-07-07 PASS 6 minutes
- 2025-07-08 PASS 7 minutes
- 2025-07-09 PASS 7 minutes
- 2025-07-10

### Error 2025-07-10T03:32:46+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T03:32:46.926000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='14 days ago')
CheckFailure for advanced_cluster.test at Step: 2 Checks: 7,17,31,73
```
2025-07-10T03:32:46.9263206Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-10T03:32:51.9283201Z     pre_check.go:40: Time before creating cluster: 2025-07-10T03:32:51.927940872Z, ProjectID: 686f096a964afc762c20297c, Cluster name: test-acc-tf-c-8705212803040954207
2025-07-10T03:37:48.9960914Z    test_name=TestAccAdvancedCluster_sharedTier_flexUpgrade test_working_directory=/tmp/plugintest154293177
2025-07-10T03:37:48.9963902Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 7/74 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-10T03:37:48.9966414Z         Check 17/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-10T03:37:48.9968873Z         Check 31/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-10T03:37:48.9970784Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "3"
2025-07-10T03:38:50.3176890Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (363.39s)
```

- 2025-07-11

### Error 2025-07-11T03:33:16+00:00
```
2025-07-11T03:33:16.5608664Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-11T03:33:21.5643785Z     pre_check.go:40: Time before creating cluster: 2025-07-11T03:33:21.563981088Z, ProjectID: 68705b080642f25f3ba08e6b, Cluster name: test-acc-tf-c-4389239169591662633
2025-07-11T03:38:26.1362049Z    test_working_directory=/tmp/plugintest1603286369
2025-07-11T03:38:26.1363851Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 1/74 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-11T03:38:26.1365579Z         Check 18/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-11T03:38:26.1367612Z         Check 31/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-11T03:38:26.1368671Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "3"
2025-07-11T03:39:27.3924362Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (370.83s)
```

- 2025-07-12 PASS 7 minutes
- 2025-07-13 PASS 6 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 8 minutes
- 2025-07-16 PASS 7 minutes
- 2025-07-17 PASS 7 minutes
- 2025-07-18 PASS 7 minutes
- 2025-07-19 PASS 7 minutes
- 2025-07-20 PASS 6 minutes
- 2025-07-21 PASS 6 minutes
- 2025-07-22 PASS 6 minutes
- 2025-07-23
  - FAIL 7 minutes

### Error 2025-07-23T03:33:59+00:00
```
2025-07-23T03:33:59.0394064Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-23T03:34:04.0395567Z     pre_check.go:40: Time before creating cluster: 2025-07-23T03:34:04.03913476Z, ProjectID: 68802d32c8bf846a30ed1e09, Cluster name: test-acc-tf-c-3497745230743696471
2025-07-23T03:40:31.4348200Z   
2025-07-23T03:40:31.4351800Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 33/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-23T03:40:31.4354446Z         Check 34/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-3497745230743696471", got "test-acc-tf-c-8289250742541584263"
2025-07-23T03:40:31.4356525Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-23T03:41:02.5753132Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (423.54s)
```

  - FAIL 20 minutes

### Error 2025-07-23T11:18:43+00:00
```
2025-07-23T11:18:43.2133822Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-23T11:18:48.2150074Z     pre_check.go:40: Time before creating cluster: 2025-07-23T11:18:48.21467189Z, ProjectID: 68809a22dafa37582cecdeff, Cluster name: test-acc-tf-c-6012393832055494873
2025-07-23T11:38:37.3604640Z   
2025-07-23T11:38:37.3608280Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 1/74 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-23T11:38:37.3611445Z         Check 21/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-23T11:38:37.3613910Z         Check 36/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-23T11:38:37.3616558Z         Check 37/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-6012393832055494873", got "test-acc-tf-c-2072636036952028955"
2025-07-23T11:38:37.3618557Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "3"
2025-07-23T11:39:38.2363098Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (1255.02s)
```

  - PASS 7 minutes
  - FAIL 7 minutes

### Error 2025-07-23T16:26:43+00:00
```
2025-07-23T16:26:43.9327541Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-23T16:26:48.9356088Z     pre_check.go:40: Time before creating cluster: 2025-07-23T16:26:48.935255933Z, ProjectID: 6880e2540afa8a5c60506c34, Cluster name: test-acc-tf-c-189599219795955390
2025-07-23T16:32:46.6981778Z   
2025-07-23T16:32:46.6985648Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 31/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-23T16:32:46.6987673Z         Check 32/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-189599219795955390", got "test-acc-tf-c-6525145893966774536"
2025-07-23T16:32:46.6989264Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-23T16:33:57.2688450Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (433.34s)
```

- 2025-07-24 PASS 6 minutes