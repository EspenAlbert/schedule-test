# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 23 minutes
### 2025-07-03
#### PASS 19 minutes
### 2025-07-04
#### PASS 21 minutes
### 2025-07-05
#### PASS 21 minutes
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
### 2025-07-08
#### PASS 25 minutes