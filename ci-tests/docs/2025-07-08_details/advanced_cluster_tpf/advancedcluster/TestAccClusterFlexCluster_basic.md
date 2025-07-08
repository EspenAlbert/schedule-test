# advanced_cluster_tpf/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS a minute
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### PASS a minute
### 2025-07-05
#### PASS a minute
### 2025-07-06
#### PASS a minute
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### FAIL a minute
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-08T02:00:19.279000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='3 hours ago')
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