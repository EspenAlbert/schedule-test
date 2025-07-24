# advanced_cluster_tpf/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 7)
Success rate: 81.08%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-26 01:58](#error-2025-06-26t0158040000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | unknown | 83.03s
[2025-06-30 01:50](#error-2025-06-30t0150250000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | unknown | 83.09s
[2025-07-01 08:20](#error-2025-07-01t0820460000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11 | dev | real_test_failure | 85.09s
[2025-07-08 02:00](#error-2025-07-08t0200190000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | flaky_check | 84.02s
[2025-07-10 04:28](#error-2025-07-10t0428210000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | flaky_check | 86.09s
[2025-07-15 01:52](#error-2025-07-15t0152550000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 82.04s
[2025-07-23 02:38](#error-2025-07-23t0238240000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 76.01s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS a minute
- 2025-06-26
  - FAIL a minute

### Error 2025-06-26T01:58:04+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-06-26T01:58:04.802000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='28 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-06-26T01:58:04.8020451Z === RUN   TestAccClusterFlexCluster_basic
2025-06-26T01:58:04.8021138Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-1017685806915954258
2025-06-26T01:58:04.8029793Z    test_working_directory=/tmp/plugintest3210055494 test_step_number=1 test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/a45f8172-88a7-4512-89d0-cb843141c08b/terraform
2025-06-26T01:58:04.8031198Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-26T01:58:04.8032441Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-26T01:58:04.8033389Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-26T01:58:04.8034350Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-26T01:58:04.8035363Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-26T01:58:04.8036417Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-06-26T01:58:04.8037516Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-26T01:58:04.8038489Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-26T01:58:04.8039062Z --- FAIL: TestAccClusterFlexCluster_basic (83.33s)
```

  - PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29 PASS 2 minutes
- 2025-06-30

### Error 2025-06-30T01:50:25+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-06-30T01:50:25.782000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='24 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-06-30T01:50:25.7826488Z === RUN   TestAccClusterFlexCluster_basic
2025-06-30T01:50:25.7827184Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-1628083154385950105
2025-06-30T01:50:25.7836213Z    test_name=TestAccClusterFlexCluster_basic test_working_directory=/tmp/plugintest627459798
2025-06-30T01:50:25.7837287Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-30T01:50:25.7838421Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-30T01:50:25.7839373Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-30T01:50:25.7840339Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-30T01:50:25.7841355Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-30T01:50:25.7842413Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-06-30T01:50:25.7843507Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-30T01:50:25.7844487Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-30T01:50:25.7845276Z --- FAIL: TestAccClusterFlexCluster_basic (83.91s)
```

- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - FAIL a minute

### Error 2025-07-01T08:20:46+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T08:20:46.774000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='23 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11
```
2025-07-01T08:20:46.7745269Z === RUN   TestAccClusterFlexCluster_basic
2025-07-01T08:20:46.7745847Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-6429725285775341751
2025-07-01T08:20:46.7749720Z    test_name=TestAccClusterFlexCluster_basic test_working_directory=/tmp/plugintest22775248 test_step_number=1
2025-07-01T08:20:46.7750834Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:20:46.7753120Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-01T08:20:46.7753690Z --- FAIL: TestAccClusterFlexCluster_basic (85.92s)
```

- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06 PASS a minute
- 2025-07-07 PASS a minute
- 2025-07-08

### Error 2025-07-08T02:00:19+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-08T02:00:19.279000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='16 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-07-08T02:00:19.2793517Z === RUN   TestAccClusterFlexCluster_basic
2025-07-08T02:00:19.2794095Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-2244068737802333665
2025-07-08T02:00:19.2802730Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/e7f81ebf-5722-4b8f-a32c-55cda675ccba/terraform test_working_directory=/tmp/plugintest1385279846 test_step_number=1
2025-07-08T02:00:19.2804144Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T02:00:19.2805288Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-08T02:00:19.2806232Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T02:00:19.2807199Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-08T02:00:19.2808216Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-08T02:00:19.2809276Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-07-08T02:00:19.2810363Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T02:00:19.2811335Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-08T02:00:19.2812053Z --- FAIL: TestAccClusterFlexCluster_basic (84.23s)
```

- 2025-07-09 PASS a minute
- 2025-07-10
  - FAIL a minute

### Error 2025-07-10T04:28:21+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-10T04:28:21.988000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='14 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-07-10T04:28:21.9881175Z === RUN   TestAccClusterFlexCluster_basic
2025-07-10T04:28:21.9882212Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-544410861410697290
2025-07-10T04:28:21.9898222Z    test_working_directory=/tmp/plugintest2889673832 test_terraform_path=/home/runner/work/_temp/0240f3b0-a8c0-47f9-9b6c-80b34a4178d7/terraform
2025-07-10T04:28:21.9900452Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-10T04:28:21.9902195Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-10T04:28:21.9903151Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-10T04:28:21.9904122Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-10T04:28:21.9905134Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-10T04:28:21.9906178Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-07-10T04:28:21.9907158Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-10T04:28:21.9908341Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-10T04:28:21.9908924Z --- FAIL: TestAccClusterFlexCluster_basic (86.94s)
```

  - PASS a minute
- 2025-07-11: MISSING
- 2025-07-12 PASS a minute
- 2025-07-13 PASS a minute
- 2025-07-14: MISSING
- 2025-07-15

### Error 2025-07-15T01:52:55+00:00
```
2025-07-15T01:52:55.3918668Z === RUN   TestAccClusterFlexCluster_basic
2025-07-15T01:52:55.3919704Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-4043575609761688242
2025-07-15T01:52:55.3936399Z   
2025-07-15T01:52:55.3937899Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-15T01:52:55.3939969Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-15T01:52:55.3941695Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-15T01:52:55.3943720Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-15T01:52:55.3945586Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-15T01:52:55.3947520Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-07-15T01:52:55.3949478Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-15T01:52:55.3951271Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-15T01:52:55.3952798Z --- FAIL: TestAccClusterFlexCluster_basic (82.39s)
```

- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20 PASS a minute
- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - FAIL a minute

### Error 2025-07-23T02:38:24+00:00
```
2025-07-23T02:38:24.9263773Z === RUN   TestAccClusterFlexCluster_basic
2025-07-23T02:38:24.9264348Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-6393496008250675526
2025-07-23T02:38:24.9273989Z   
2025-07-23T02:38:24.9274814Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-23T02:38:24.9275967Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-23T02:38:24.9276932Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-23T02:38:24.9277914Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-23T02:38:24.9278947Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-23T02:38:24.9280029Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-07-23T02:38:24.9282274Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-23T02:38:24.9283469Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-23T02:38:24.9284061Z --- FAIL: TestAccClusterFlexCluster_basic (76.10s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute