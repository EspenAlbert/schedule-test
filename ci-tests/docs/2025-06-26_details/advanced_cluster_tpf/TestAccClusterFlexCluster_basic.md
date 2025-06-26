# advanced_cluster_tpf/TestAccClusterFlexCluster_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 2 minutes
```
2025-06-20T01:46:12.3367252Z === RUN   TestAccClusterFlexCluster_basic
2025-06-20T01:46:12.3367937Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-4658372725521241539
2025-06-20T01:46:12.3371349Z --- PASS: TestAccClusterFlexCluster_basic (128.20s)
```
### 2025-06-21
#### PASS a minute
```
2025-06-21T01:47:13.0110415Z === RUN   TestAccClusterFlexCluster_basic
2025-06-21T01:47:13.0110979Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-8767411395110916349
2025-06-21T01:47:13.0114333Z --- PASS: TestAccClusterFlexCluster_basic (101.01s)
```
### 2025-06-22
#### PASS 2 minutes
```
2025-06-22T03:04:12.6137105Z === RUN   TestAccClusterFlexCluster_basic
2025-06-22T03:04:12.6137681Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-1678239167356368785
2025-06-22T03:04:12.6141063Z --- PASS: TestAccClusterFlexCluster_basic (120.65s)
```
### 2025-06-23
#### PASS a minute
```
2025-06-23T01:49:14.0969937Z === RUN   TestAccClusterFlexCluster_basic
2025-06-23T01:49:14.0970953Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-1568319424878936122
2025-06-23T01:49:14.0976854Z --- PASS: TestAccClusterFlexCluster_basic (103.78s)
```
### 2025-06-24
#### PASS a minute
```
2025-06-24T02:00:03.6493992Z === RUN   TestAccClusterFlexCluster_basic
2025-06-24T02:00:03.6494557Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-5568470767413971269
2025-06-24T02:00:03.6497912Z --- PASS: TestAccClusterFlexCluster_basic (107.12s)
```
### 2025-06-25
#### PASS a minute
```
2025-06-25T01:46:02.2055367Z === RUN   TestAccClusterFlexCluster_basic
2025-06-25T01:46:02.2056398Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-3895417156764556314
2025-06-25T01:46:02.2062302Z --- PASS: TestAccClusterFlexCluster_basic (89.07s)
```
### 2025-06-26
#### FAIL a minute
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-06-26T01:58:04.802000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='2 hours ago')
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
#### PASS a minute
```
2025-06-26T05:26:49.4871794Z === RUN   TestAccClusterFlexCluster_basic
2025-06-26T05:26:49.4872798Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-6763169911805631697
2025-06-26T05:26:49.4878862Z --- PASS: TestAccClusterFlexCluster_basic (81.77s)
```