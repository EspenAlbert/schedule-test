# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 23 minutes
```
2025-07-02T00:59:43.3812195Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-02T00:59:43.3813901Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-02T01:01:14.4481976Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-02T01:01:49.4211092Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-02T01:01:49.4212526Z     pre_check.go:40: Time before creating cluster: 2025-07-02T01:01:49.420818647Z, ProjectID: 68647d50948ea608f1ec35b2, Cluster name: test-acc-tf-c-743838266950340854
2025-07-02T01:24:15.3620246Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1380.93s)
```
### 2025-07-03
#### PASS 19 minutes
```
2025-07-03T00:58:55.6660753Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-03T00:58:55.6662425Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-03T01:00:24.5882540Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-03T01:00:49.5916944Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-03T01:00:49.5918556Z     pre_check.go:40: Time before creating cluster: 2025-07-03T01:00:49.591388847Z, ProjectID: 6865cefac960c33273ba2d3e, Cluster name: test-acc-tf-c-1831978579488901981
2025-07-03T01:19:45.4574431Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1160.87s)
```
### 2025-07-04
#### PASS 21 minutes
```
2025-07-04T00:59:19.5551657Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-04T00:59:19.5553143Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-04T01:00:51.5887962Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-04T01:01:01.5902836Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-04T01:01:01.5905034Z     pre_check.go:40: Time before creating cluster: 2025-07-04T01:01:01.589972284Z, ProjectID: 68672056579d4c1b1e7ad215, Cluster name: test-acc-tf-c-5455448218037341984
2025-07-04T01:22:08.5939052Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1277.01s)
```
### 2025-07-05
#### PASS 21 minutes
```
2025-07-05T00:56:05.6807483Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-05T00:56:05.6808878Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-05T00:57:08.5883604Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-05T00:57:58.5758383Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-05T00:57:58.5759729Z     pre_check.go:40: Time before creating cluster: 2025-07-05T00:57:58.575532676Z, ProjectID: 686871a537c6036ffcf4537a, Cluster name: test-acc-tf-c-9220683288757526336
2025-07-05T01:19:01.6491633Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1313.07s)
```
### 2025-07-06
#### FAIL 36 minutes
```
2025-07-06T01:01:13.3839889Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:01:13.3841575Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-06T01:02:29.8480839Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:03:29.8137166Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:03:29.8138444Z     pre_check.go:40: Time before creating cluster: 2025-07-06T01:03:29.813464685Z, ProjectID: 6869c418690ae45e168bdc48, Cluster name: test-acc-tf-c-3650899533151659350
2025-07-06T01:37:32.4575703Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:37:32.4577482Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-07-06T01:37:32.4579142Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-07-06T01:37:32.4580368Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-07-06T01:37:32.4581944Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-07-06T01:37:32.4583252Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-07-06T01:37:32.4584621Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-07-06T01:38:33.7232164Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2163.91s)
```
### 2025-07-07
#### PASS 21 minutes
```
2025-07-07T01:01:24.7055922Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-07T01:01:24.7057312Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-07T01:02:17.8622780Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-07T01:02:32.8435750Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-07T01:02:32.8438763Z     pre_check.go:40: Time before creating cluster: 2025-07-07T01:02:32.843323836Z, ProjectID: 686b15760aabd25fc85db90a, Cluster name: test-acc-tf-c-1843825896969247705
2025-07-07T01:23:45.3579111Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1287.51s)
```
### 2025-07-08
#### PASS 25 minutes
```
2025-07-08T00:59:13.7209816Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-08T00:59:13.7211567Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-08T01:00:20.8862294Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-08T01:00:30.8827126Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-08T01:00:30.8828820Z     pre_check.go:40: Time before creating cluster: 2025-07-08T01:00:30.88243608Z, ProjectID: 686c666fcf503214420ed4ca, Cluster name: test-acc-tf-c-6094244629140849449
2025-07-08T01:25:47.4027327Z --- PASS: TestAccMockableAdvancedCluster_tenantUpgrade (1526.52s)
```