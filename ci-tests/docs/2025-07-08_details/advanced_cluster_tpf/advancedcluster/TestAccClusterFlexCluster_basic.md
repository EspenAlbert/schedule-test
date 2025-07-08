# advanced_cluster_tpf/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## Timeline
### 2025-07-01
#### FAIL a minute
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T08:20:46.774000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='6 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11
```
2025-07-01T08:20:46.7745269Z === RUN   TestAccClusterFlexCluster_basic
2025-07-01T08:20:46.7745847Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-6429725285775341751
2025-07-01T08:20:46.7749720Z    test_name=TestAccClusterFlexCluster_basic test_working_directory=/tmp/plugintest22775248 test_step_number=1
2025-07-01T08:20:46.7750834Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:20:46.7753120Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-01T08:20:46.7753690Z --- FAIL: TestAccClusterFlexCluster_basic (85.92s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T01:46:50.6535016Z === RUN   TestAccClusterFlexCluster_basic
2025-07-02T01:46:50.6535762Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-3844223313285506704
2025-07-02T01:46:50.6539125Z --- PASS: TestAccClusterFlexCluster_basic (91.10s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T01:45:42.2331123Z === RUN   TestAccClusterFlexCluster_basic
2025-07-03T01:45:42.2332139Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-5526360378203903998
2025-07-03T01:45:42.2338274Z --- PASS: TestAccClusterFlexCluster_basic (86.80s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T04:07:06.1344682Z === RUN   TestAccClusterFlexCluster_basic
2025-07-04T04:07:06.1345248Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-8961655605791168850
2025-07-04T04:07:06.1348813Z --- PASS: TestAccClusterFlexCluster_basic (91.52s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T03:55:54.4265932Z === RUN   TestAccClusterFlexCluster_basic
2025-07-05T03:55:54.4266506Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-1283974697960478882
2025-07-05T03:55:54.4269851Z --- PASS: TestAccClusterFlexCluster_basic (103.08s)
```
### 2025-07-06
#### PASS a minute
```
2025-07-06T01:46:53.5895867Z === RUN   TestAccClusterFlexCluster_basic
2025-07-06T01:46:53.5896442Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-4246520070685210227
2025-07-06T01:46:53.5900143Z --- PASS: TestAccClusterFlexCluster_basic (90.54s)
```
### 2025-07-07
#### PASS a minute
```
2025-07-07T03:58:24.8971385Z === RUN   TestAccClusterFlexCluster_basic
2025-07-07T03:58:24.8971953Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-6126823875771549047
2025-07-07T03:58:24.8975671Z --- PASS: TestAccClusterFlexCluster_basic (90.77s)
```
### 2025-07-08
#### FAIL a minute
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-08T02:00:19.279000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='an hour ago')
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