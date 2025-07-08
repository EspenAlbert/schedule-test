# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 4) FAIL(x 3)
Success rate: 57.14%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 16 minutes
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T04:07:06.1271680Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1365641Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1602839Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1603427Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-04T04:07:06.1603853Z         
2025-07-04T04:07:06.1604088Z         Error: Error in create
2025-07-04T04:07:06.1604321Z         
2025-07-04T04:07:06.1604626Z           with mongodbatlas_advanced_cluster.test,
2025-07-04T04:07:06.1605241Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-04T04:07:06.1605800Z           19: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-04T04:07:06.1606090Z         
2025-07-04T04:07:06.1606698Z         cluster=test-acc-tf-c-9041580870662761140 didn't reach desired state: IDLE,
2025-07-04T04:07:06.1607349Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-04T04:07:06.1607756Z         'CREATING', timeout: 3h0m0s)
2025-07-04T04:07:06.1618672Z   
2025-07-04T04:07:06.1630238Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1630794Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T04:07:06.1631208Z         
2025-07-04T04:07:06.1631480Z         Error: error when destroying resource
2025-07-04T04:07:06.1631745Z         
2025-07-04T04:07:06.1632057Z         error deleting project (686729318263f52e03e7a29f):
2025-07-04T04:07:06.1632594Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686729318263f52e03e7a29f
2025-07-04T04:07:06.1633055Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-04T04:07:06.1633570Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-04T04:07:06.1634300Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-04T04:07:06.1634736Z         Params: [], BadRequestDetail: 
2025-07-04T04:07:06.1635089Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10809.43s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T03:55:54.4189849Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4282577Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4438753Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4439345Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:55:54.4439772Z         
2025-07-05T03:55:54.4440008Z         Error: Error in create
2025-07-05T03:55:54.4440240Z         
2025-07-05T03:55:54.4440650Z           with mongodbatlas_advanced_cluster.test,
2025-07-05T03:55:54.4441292Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-05T03:55:54.4441861Z           19: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-05T03:55:54.4442156Z         
2025-07-05T03:55:54.4442586Z         cluster=test-acc-tf-c-8062049330807834879 didn't reach desired state: IDLE,
2025-07-05T03:55:54.4443177Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-05T03:55:54.4443584Z         'CREATING', timeout: 3h0m0s)
2025-07-05T03:55:54.4453848Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/753139a1-44b0-4e60-af45-cbcd7d034660/terraform
2025-07-05T03:55:54.4465869Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4466434Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T03:55:54.4466851Z         
2025-07-05T03:55:54.4467131Z         Error: error when destroying resource
2025-07-05T03:55:54.4467392Z         
2025-07-05T03:55:54.4467710Z         error deleting project (6868781221e3e31abeebbb23):
2025-07-05T03:55:54.4468256Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868781221e3e31abeebbb23
2025-07-05T03:55:54.4468724Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-05T03:55:54.4469240Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-05T03:55:54.4469838Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-05T03:55:54.4470265Z         Params: [], BadRequestDetail: 
2025-07-05T03:55:54.4470726Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10809.04s)
```
### 2025-07-06
#### PASS 18 minutes
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T03:58:24.8877784Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:58:24.8991870Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:58:24.9160187Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:58:24.9160782Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-07T03:58:24.9161209Z         
2025-07-07T03:58:24.9161442Z         Error: Error in create
2025-07-07T03:58:24.9161666Z         
2025-07-07T03:58:24.9161975Z           with mongodbatlas_advanced_cluster.test,
2025-07-07T03:58:24.9162708Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-07T03:58:24.9163273Z           19: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-07T03:58:24.9163563Z         
2025-07-07T03:58:24.9163993Z         cluster=test-acc-tf-c-4690226399060950003 didn't reach desired state: IDLE,
2025-07-07T03:58:24.9164781Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-07T03:58:24.9165188Z         'CREATING', timeout: 3h0m0s)
2025-07-07T03:58:24.9171063Z   
2025-07-07T03:58:24.9171509Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T03:58:24.9171920Z         
2025-07-07T03:58:24.9172197Z         Error: error when destroying resource
2025-07-07T03:58:24.9172452Z         
2025-07-07T03:58:24.9172771Z         error deleting project (686b1ba70aabd25fc85dde8e):
2025-07-07T03:58:24.9173336Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b1ba70aabd25fc85dde8e
2025-07-07T03:58:24.9173807Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-07T03:58:24.9174322Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-07T03:58:24.9175091Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-07T03:58:24.9175517Z         Params: [], BadRequestDetail: 
2025-07-07T03:58:24.9175873Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10810.58s)
```
### 2025-07-08
#### PASS 22 minutes