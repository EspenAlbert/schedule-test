# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 4) FAIL(x 3)
Success rate: 57.14%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 21 minutes
### 2025-07-03
#### PASS 19 minutes
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T00:29:08.7821142Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T01:00:51.6166481Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:01:03.8260096Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:01:03.8260929Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-04T04:01:03.8261544Z         
2025-07-04T04:01:03.8262557Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T04:01:03.8263279Z         
2025-07-04T04:01:03.8263693Z           with mongodbatlas_advanced_cluster.test,
2025-07-04T04:01:03.8264555Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-04T04:01:03.8265340Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-04T04:01:03.8265733Z         
2025-07-04T04:01:04.8252168Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T04:01:04.8252878Z         
2025-07-04T04:01:04.8253338Z         Error: error when destroying resource
2025-07-04T04:01:04.8253778Z         
2025-07-04T04:01:04.8254335Z         error deleting project (686727ca8263f52e03e799bc):
2025-07-04T04:01:04.8255249Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686727ca8263f52e03e799bc
2025-07-04T04:01:04.8256041Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-04T04:01:04.8256779Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-04T04:01:04.8258103Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-04T04:01:04.8258761Z         Params: [], BadRequestDetail: 
2025-07-04T04:01:04.8368021Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10813.24s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T00:28:19.5579904Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T00:57:08.6177861Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:57:19.6613220Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:57:19.6614165Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:57:19.6614664Z         
2025-07-05T03:57:19.6615429Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:57:19.6616933Z         
2025-07-05T03:57:19.6617281Z           with mongodbatlas_advanced_cluster.test,
2025-07-05T03:57:19.6617958Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-05T03:57:19.6618587Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-05T03:57:19.6618907Z         
2025-07-05T03:57:20.2450260Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T03:57:20.2450685Z         
2025-07-05T03:57:20.2451068Z         Error: error when destroying resource
2025-07-05T03:57:20.2451339Z         
2025-07-05T03:57:20.2451767Z         error deleting project (6868786a21e3e31abeebc162):
2025-07-05T03:57:20.2452336Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868786a21e3e31abeebc162
2025-07-05T03:57:20.2452907Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-05T03:57:20.2453552Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-05T03:57:20.2454276Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-05T03:57:20.2454708Z         Params: [], BadRequestDetail: 
2025-07-05T03:57:20.2569643Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10811.64s)
```
### 2025-07-06
#### PASS 21 minutes
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T00:31:48.7007644Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T01:02:17.8641971Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T04:02:28.1091663Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T04:02:28.1092291Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-07T04:02:28.1094805Z         
2025-07-07T04:02:28.1095525Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T04:02:28.1096054Z         
2025-07-07T04:02:28.1096377Z           with mongodbatlas_advanced_cluster.test,
2025-07-07T04:02:28.1097039Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-07T04:02:28.1097617Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-07T04:02:28.1097914Z         
2025-07-07T04:02:28.8297681Z    test_terraform_path=/home/runner/work/_temp/a9abdc25-77fa-4537-b3de-dbc49e28950c/terraform test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_working_directory=/tmp/plugintest439560105
2025-07-07T04:02:28.8299572Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T04:02:28.8300292Z         
2025-07-07T04:02:28.8300777Z         Error: error when destroying resource
2025-07-07T04:02:28.8301227Z         
2025-07-07T04:02:28.8301798Z         error deleting project (686b1ca0ffed0c5c678b5d81):
2025-07-07T04:02:28.8302944Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b1ca0ffed0c5c678b5d81
2025-07-07T04:02:28.8303771Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-07T04:02:28.8304724Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-07T04:02:28.8305804Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-07T04:02:28.8306551Z         Params: [], BadRequestDetail: 
2025-07-07T04:02:28.8421099Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10810.99s)
```
### 2025-07-08
#### PASS 19 minutes