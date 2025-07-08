# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 8 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T00:29:04.2065591Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T00:29:04.2066859Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-04T00:29:07.3530030Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T03:29:12.9101447Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T03:29:12.9102190Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-04T03:29:12.9102728Z         
2025-07-04T03:29:12.9103581Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:29:12.9104102Z         
2025-07-04T03:29:12.9104412Z           with mongodbatlas_advanced_cluster.test,
2025-07-04T03:29:12.9105035Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-04T03:29:12.9105607Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-04T03:29:12.9105910Z         
2025-07-04T03:29:13.4949800Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/edff36a6-e00e-4e43-9262-d33c5f763933/terraform
2025-07-04T03:29:13.4951692Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T03:29:13.4952560Z         
2025-07-04T03:29:13.4953139Z         Error: error when destroying resource
2025-07-04T03:29:13.4953678Z         
2025-07-04T03:29:13.4954345Z         error deleting project (68672055579d4c1b1e7ad12b):
2025-07-04T03:29:13.4955647Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68672055579d4c1b1e7ad12b
2025-07-04T03:29:13.4956522Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-04T03:29:13.4957472Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-04T03:29:13.4958727Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-04T03:29:13.4959490Z         Params: [], BadRequestDetail: 
2025-07-04T03:29:13.5068057Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10806.16s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T00:28:12.4249166Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T00:28:12.4250312Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-05T00:28:14.5784787Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:28:20.1688195Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:28:20.1688864Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:28:20.1689738Z         
2025-07-05T03:28:20.1690520Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:20.1691103Z         
2025-07-05T03:28:20.1691441Z           with mongodbatlas_advanced_cluster.test,
2025-07-05T03:28:20.1692113Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-05T03:28:20.1692729Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-05T03:28:20.1693043Z         
2025-07-05T03:28:20.7913195Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T03:28:20.7913613Z         
2025-07-05T03:28:20.7913897Z         Error: error when destroying resource
2025-07-05T03:28:20.7914164Z         
2025-07-05T03:28:20.7914484Z         error deleting project (686871a121e3e31abeeb94ad):
2025-07-05T03:28:20.7915298Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686871a121e3e31abeeb94ad
2025-07-05T03:28:20.7915798Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-05T03:28:20.7916317Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-05T03:28:20.7916929Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-05T03:28:20.7917361Z         Params: [], BadRequestDetail: 
2025-07-05T03:28:20.8029452Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10806.23s)
```
### 2025-07-06
#### PASS 17 minutes
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T00:31:41.7746827Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T00:31:41.7747699Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-07T00:31:43.7318082Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:31:49.1170578Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:31:49.1171207Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-07T03:31:49.1171648Z         
2025-07-07T03:31:49.1172363Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:49.1172893Z         
2025-07-07T03:31:49.1173206Z           with mongodbatlas_advanced_cluster.test,
2025-07-07T03:31:49.1173826Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-07T03:31:49.1174402Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-07T03:31:49.1174696Z         
2025-07-07T03:31:49.7269369Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T03:31:49.7269797Z         
2025-07-07T03:31:49.7270203Z         Error: error when destroying resource
2025-07-07T03:31:49.7270474Z         
2025-07-07T03:31:49.7270861Z         error deleting project (686b1572ffed0c5c678b2f66):
2025-07-07T03:31:49.7271763Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b1572ffed0c5c678b2f66
2025-07-07T03:31:49.7272295Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-07T03:31:49.7272928Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-07T03:31:49.7273646Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-07T03:31:49.7274145Z         Params: [], BadRequestDetail: 
2025-07-07T03:31:49.7384975Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10806.01s)
```
### 2025-07-08
#### PASS 17 minutes