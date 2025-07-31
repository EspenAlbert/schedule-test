# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 03:32](#error-2025-07-10t0332460000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 7,17,31,73 | dev | real_test_failure | 363.04s
[2025-07-11 03:33](#error-2025-07-11t0333160000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,18,31,73 | dev |  | 370.08s
[2025-07-23 03:33](#error-2025-07-23t0333590000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 33,34,73 | dev |  | 423.05s
[2025-07-23 11:18](#error-2025-07-23t1118430000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,21,36,37,73 | qa |  | 1255.00s
[2025-07-23 16:26](#error-2025-07-23t1626430000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 31,32,73 | qa |  | 433.03s
[2025-07-25 00:45](#error-2025-07-25t0045380000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 33,59,61,73 | dev |  | 446.02s
[2025-07-26 00:44](#error-2025-07-26t0044030000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 37,60,62,73 | dev |  | 461.07s
[2025-07-28 00:48](#error-2025-07-28t0048000000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 32,59,63,73 | dev |  | 410.07s
[2025-07-29 00:47](#error-2025-07-29t0047330000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 38,59,63,73 | dev |  | 429.08s
[2025-07-30 00:45](#error-2025-07-30t0045570000) | CheckFailure for flex_clusters.test at Step: 2 Checks: 59,73 | dev | unknown | 472.00s
[2025-07-31 00:50](#error-2025-07-31t0050420000) | CheckFailure for flex_clusters.test at Step: 2 Checks: 59,73 | dev |  | 613.00s

## Timeline
- 2025-07-01: MISSING
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
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T03:32:46.926000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='21 days ago')
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
- 2025-07-25

### Error 2025-07-25T00:45:38+00:00
```
2025-07-25T00:45:38.4805326Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-25T00:45:43.4800659Z     pre_check.go:40: Time before creating cluster: 2025-07-25T00:45:43.479700138Z, ProjectID: 6882d047dcc4727c0ec4f769, Cluster name: test-acc-tf-c-3548556303722492918
2025-07-25T00:52:23.9820079Z    test_name=TestAccAdvancedCluster_sharedTier_flexUpgrade test_terraform_path=/home/runner/work/_temp/26c9ea1c-b0c1-473e-9e7f-0eeb752e34e7/terraform test_working_directory=/tmp/plugintest3555809154
2025-07-25T00:52:23.9824940Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 33/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-3548556303722492918", got "test-acc-tf-c-3137159195104425468"
2025-07-25T00:52:23.9827074Z         Check 59/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-25T00:52:23.9829037Z         Check 61/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-3548556303722492918", got "test-acc-tf-c-3137159195104425468"
2025-07-25T00:52:23.9830670Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-25T00:53:04.7217403Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (446.24s)
```

- 2025-07-26

### Error 2025-07-26T00:44:03+00:00
```
2025-07-26T00:44:03.8518173Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-26T00:44:08.8557358Z     pre_check.go:40: Time before creating cluster: 2025-07-26T00:44:08.855357946Z, ProjectID: 68842174a8aaac041ec4f2e3, Cluster name: test-acc-tf-c-6598771219902088062
2025-07-26T00:51:04.2280924Z   
2025-07-26T00:51:04.2284281Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 37/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-6598771219902088062", got "test-acc-tf-c-4760441764857859093"
2025-07-26T00:51:04.2286425Z         Check 60/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-26T00:51:04.2288714Z         Check 62/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-6598771219902088062", got "test-acc-tf-c-4760441764857859093"
2025-07-26T00:51:04.2290599Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-26T00:51:45.5697357Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (461.72s)
```

- 2025-07-27 PASS 6 minutes
- 2025-07-28

### Error 2025-07-28T00:48:00+00:00
```
2025-07-28T00:48:00.4921482Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-28T00:48:05.4960363Z     pre_check.go:40: Time before creating cluster: 2025-07-28T00:48:05.495681207Z, ProjectID: 6886c544d543ef30ea6bab2d, Cluster name: test-acc-tf-c-7613683965932193036
2025-07-28T00:54:09.7967729Z    test_working_directory=/tmp/plugintest1072048052
2025-07-28T00:54:09.7971226Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 32/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-7613683965932193036", got "test-acc-tf-c-4414672739934594237"
2025-07-28T00:54:09.7973334Z         Check 59/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-28T00:54:09.7975419Z         Check 63/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-7613683965932193036", got "test-acc-tf-c-4414672739934594237"
2025-07-28T00:54:09.7977535Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-28T00:54:51.1733556Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (410.68s)
```

- 2025-07-29

### Error 2025-07-29T00:47:33+00:00
```
2025-07-29T00:47:33.2912264Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-29T00:47:38.2949631Z     pre_check.go:40: Time before creating cluster: 2025-07-29T00:47:38.294631248Z, ProjectID: 688816d229c5e61354b15291, Cluster name: test-acc-tf-c-215217140912815696
2025-07-29T00:54:01.9121935Z    test_step_number=2
2025-07-29T00:54:01.9125974Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 38/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-215217140912815696", got "test-acc-tf-c-7481542568151554970"
2025-07-29T00:54:01.9128255Z         Check 59/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-29T00:54:01.9130416Z         Check 63/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-215217140912815696", got "test-acc-tf-c-7481542568151554970"
2025-07-29T00:54:01.9132375Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-29T00:54:43.1289067Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (429.84s)
```

- 2025-07-30
  - FAIL 7 minutes

### Error 2025-07-30T00:45:57+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-30T00:45:57.407000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='a day ago')
CheckFailure for flex_clusters.test at Step: 2 Checks: 59,73
```
2025-07-30T00:45:57.4076665Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-30T00:46:02.4075412Z     pre_check.go:40: Time before creating cluster: 2025-07-30T00:46:02.407118469Z, ProjectID: 688967cc9a270e78174a01e0, Cluster name: test-acc-tf-c-8875895311254992834
2025-07-30T00:53:09.3214011Z    test_step_number=2
2025-07-30T00:53:09.3217159Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 59/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-30T00:53:09.3219528Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-30T00:53:49.4128235Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (472.01s)
```

  - PASS 6 minutes
- 2025-07-31

### Error 2025-07-31T00:50:42+00:00
```
2025-07-31T00:50:42.1205682Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-31T00:50:47.1200790Z     pre_check.go:40: Time before creating cluster: 2025-07-31T00:50:47.11967992Z, ProjectID: 688ab93f85f3692162ffadce, Cluster name: test-acc-tf-c-7912486359819985944
2025-07-31T01:00:13.9240296Z    test_terraform_path=/home/runner/work/_temp/ee3fbb75-e8b5-4ee5-9619-ca7431e3c7e8/terraform test_working_directory=/tmp/plugintest187347303 test_step_number=2 test_name=TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-31T01:00:13.9244165Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 59/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-31T01:00:13.9246380Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-31T01:00:55.1162617Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (613.00s)
```
