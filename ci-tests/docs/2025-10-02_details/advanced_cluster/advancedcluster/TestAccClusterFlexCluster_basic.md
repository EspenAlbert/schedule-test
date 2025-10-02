# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-08 00:29](#error-2025-09-08t0029060000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev | 41.09s
[2025-09-19 00:27](#error-2025-09-19t0027380000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev | 73.04s
[2025-09-29 00:29](#error-2025-09-29t0029080000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev | 73.05s
[2025-10-01 00:28](#error-2025-10-01t0028360000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev | 84.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05: MISSING
- 2025-09-06 PASS a minute
- 2025-09-07 PASS 49 seconds
- 2025-09-08
  - FAIL 41 seconds

### Error 2025-09-08T00:29:06+00:00
```
2025-09-08T00:29:06.4112433Z === RUN   TestAccClusterFlexCluster_basic
2025-09-08T00:29:17.9045045Z    test_working_directory=/tmp/plugintest3419850092
2025-09-08T00:29:17.9046970Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-09-08T00:29:17.9048677Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-09-08T00:29:17.9050090Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-09-08T00:29:17.9051420Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-08T00:29:17.9053163Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-08T00:29:48.2763833Z --- FAIL: TestAccClusterFlexCluster_basic (41.87s)
```

  - PASS 50 seconds
  - PASS 48 seconds
- 2025-09-09 PASS a minute
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19

### Error 2025-09-19T00:27:38+00:00
```
2025-09-19T00:27:38.6832164Z === RUN   TestAccClusterFlexCluster_basic
2025-09-19T00:27:38.6833045Z     resource_test.go:2842: Creating execution project: test-acc-tf-p-6720134195875143364
2025-09-19T00:27:51.7588168Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/0de946c5-e529-4dff-98e9-f79e5002ccc1/terraform test_working_directory=/tmp/plugintest2004745847 test_step_number=1
2025-09-19T00:27:51.7590530Z     resource_test.go:2846: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-19T00:27:51.7591910Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-19T00:27:51.7593199Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-19T00:27:51.7594184Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-19T00:27:51.7595555Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-19T00:28:52.0713925Z --- FAIL: TestAccClusterFlexCluster_basic (73.39s)
```

- 2025-09-20 PASS a minute
- 2025-09-21 PASS a minute
- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29
  - FAIL a minute

### Error 2025-09-29T00:29:08+00:00
```
2025-09-29T00:29:08.1732142Z === RUN   TestAccClusterFlexCluster_basic
2025-09-29T00:29:08.1732794Z     resource_test.go:2842: Creating execution project: test-acc-tf-p-2893919006889611217
2025-09-29T00:29:20.2570412Z   
2025-09-29T00:29:20.2571678Z     resource_test.go:2846: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-29T00:29:20.2573220Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-29T00:29:20.2575087Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-29T00:29:20.2576430Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-29T00:29:20.2577524Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-29T00:30:21.7030981Z --- FAIL: TestAccClusterFlexCluster_basic (73.53s)
```

  - PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - FAIL a minute

### Error 2025-10-01T00:28:36+00:00
```
2025-10-01T00:28:36.2797673Z === RUN   TestAccClusterFlexCluster_basic
2025-10-01T00:28:36.2798577Z     resource_test.go:2842: Creating execution project: test-acc-tf-p-1770956471362962901
2025-10-01T00:28:49.2790684Z   
2025-10-01T00:28:49.2791667Z     resource_test.go:2846: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:49.2793078Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:49.2794791Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T00:28:49.2796102Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:49.2797116Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T00:30:01.0202397Z --- FAIL: TestAccClusterFlexCluster_basic (84.74s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS 6 minutes
- 2025-10-02 PASS a minute