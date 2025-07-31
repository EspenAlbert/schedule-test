# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-05 00:56](#error-2025-07-05t0056170000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 50.08s
[2025-07-07 01:01](#error-2025-07-07t0101360000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,52,66 | dev |  | 41.06s
[2025-07-08 00:59](#error-2025-07-08t0059290000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | flaky_check | 51.08s
[2025-07-18 01:02](#error-2025-07-18t0102590000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 51.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05

### Error 2025-07-05T00:56:17+00:00
```
2025-07-05T00:56:17.8046039Z === RUN   TestAccClusterFlexCluster_basic
2025-07-05T00:56:38.4685296Z   
2025-07-05T00:56:38.4686504Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-05T00:56:38.4687673Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-05T00:56:38.4688636Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-05T00:56:38.4689607Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-05T00:56:38.4690980Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-07-05T00:56:38.4692057Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-07-05T00:56:38.4693018Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-05T00:56:38.4693965Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-05T00:57:08.5661059Z --- FAIL: TestAccClusterFlexCluster_basic (50.76s)
```

- 2025-07-06 PASS a minute
- 2025-07-07

### Error 2025-07-07T01:01:36+00:00
```
2025-07-07T01:01:36.2321744Z === RUN   TestAccClusterFlexCluster_basic
2025-07-07T01:01:47.3678167Z    test_step_number=1 test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/a9abdc25-77fa-4537-b3de-dbc49e28950c/terraform test_working_directory=/tmp/plugintest2465621867
2025-07-07T01:01:47.3680146Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-07T01:01:47.3682257Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-07T01:01:47.3683704Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-07T01:01:47.3685163Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-07T01:02:17.8406048Z --- FAIL: TestAccClusterFlexCluster_basic (41.61s)
```

- 2025-07-08

### Error 2025-07-08T00:59:29+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-08T00:59:29.904000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='23 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-07-08T00:59:29.0904105Z === RUN   TestAccClusterFlexCluster_basic
2025-07-08T00:59:40.2962918Z   
2025-07-08T00:59:40.2964045Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-08T00:59:40.2965291Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-08T00:59:40.2966290Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-08T00:59:40.2967512Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-08T00:59:40.2968560Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-07-08T00:59:40.2969654Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-07-08T00:59:40.2970645Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T00:59:40.2971862Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-08T01:00:20.8810067Z --- FAIL: TestAccClusterFlexCluster_basic (51.79s)
```

- 2025-07-09 PASS 50 seconds
- 2025-07-10 PASS a minute
- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13 PASS a minute
- 2025-07-14: MISSING
- 2025-07-15 PASS 2 minutes
- 2025-07-16 PASS 47 seconds
- 2025-07-17 PASS 56 seconds
- 2025-07-18

### Error 2025-07-18T01:02:59+00:00
```
2025-07-18T01:02:59.6394698Z === RUN   TestAccClusterFlexCluster_basic
2025-07-18T01:03:10.8345346Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/bc0bb07b-e768-4a2f-934d-8d4e4231eb84/terraform test_working_directory=/tmp/plugintest2908943793 test_step_number=1
2025-07-18T01:03:10.8347225Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-18T01:03:10.8348419Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-18T01:03:10.8349387Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-18T01:03:10.8350575Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-18T01:03:10.8351627Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-07-18T01:03:10.8352703Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-07-18T01:03:10.8353698Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-18T01:03:10.8354664Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-18T01:03:51.4161193Z --- FAIL: TestAccClusterFlexCluster_basic (51.78s)
```

- 2025-07-19 PASS a minute
- 2025-07-20 PASS 48 seconds
- 2025-07-21 PASS 54 seconds
- 2025-07-22 PASS 56 seconds
- 2025-07-23
  - PASS 56 seconds
  - PASS 50 seconds
  - PASS 56 seconds
  - PASS 49 seconds
- 2025-07-24 PASS a minute
- 2025-07-25 PASS 58 seconds
- 2025-07-26 PASS a minute
- 2025-07-27 PASS 59 seconds
- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS 58 seconds
- 2025-07-31 PASS 3 minutes