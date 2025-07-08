# global_cluster_config/globalclusterconfig/TestMigGlobalClusterConfig_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 12 minutes
### 2025-07-03
#### PASS 12 minutes
### 2025-07-04
#### PASS 14 minutes
### 2025-07-05
#### PASS 13 minutes
### 2025-07-06
#### PASS 13 minutes
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### FAIL 13 seconds
```
2025-07-08T00:29:09.2694103Z === RUN   TestMigGlobalClusterConfig_basic
2025-07-08T00:29:09.2696946Z     resource_global_cluster_config_migration_test.go:11: Creating execution project: test-acc-tf-p-2400989897618886506
2025-07-08T00:49:09.6442633Z === CONT  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:14.6483033Z === NAME  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:14.6486417Z     pre_check.go:40: Time before creating cluster: 2025-07-08T00:49:14.648021204Z, ProjectID: 686c6655a5ec7701ec2c6dd5, Cluster name: test-acc-tf-c-2139322327585312130
2025-07-08T00:49:21.1969385Z === NAME  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:21.1970014Z     resource_global_cluster_config_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-08T00:49:21.1970489Z         
2025-07-08T00:49:21.1971531Z         Error: error creating advanced cluster: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6655a5ec7701ec2c6dd5/clusters": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-08T00:49:21.1972497Z         
2025-07-08T00:49:21.1972847Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-08T00:49:21.1973528Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-08T00:49:21.1974173Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-08T00:49:21.1974495Z         
2025-07-08T00:49:21.3857845Z --- FAIL: TestMigGlobalClusterConfig_basic (13.56s)
```