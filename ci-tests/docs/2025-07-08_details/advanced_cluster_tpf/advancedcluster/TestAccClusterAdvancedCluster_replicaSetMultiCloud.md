# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 4) FAIL(x 3)
Success rate: 57.14%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 32 minutes
### 2025-07-03
#### PASS 33 minutes
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T04:07:06.1300649Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1355841Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1591684Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1592275Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-04T04:07:06.1592716Z         
2025-07-04T04:07:06.1592955Z         Error: Error in create
2025-07-04T04:07:06.1593185Z         
2025-07-04T04:07:06.1593496Z           with mongodbatlas_advanced_cluster.test,
2025-07-04T04:07:06.1594233Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-04T04:07:06.1594802Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-04T04:07:06.1595098Z         
2025-07-04T04:07:06.1595532Z         cluster=test-acc-tf-c-5611900886945654466 didn't reach desired state: IDLE,
2025-07-04T04:07:06.1596132Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-04T04:07:06.1596800Z         'CREATING', timeout: 3h0m0s)
2025-07-04T04:07:06.1602019Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/80f4ea65-8c95-480e-9569-1ef801023a91/terraform test_working_directory=/tmp/plugintest2264542775
2025-07-04T04:07:06.1619063Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:07:06.1619680Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T04:07:06.1620096Z         
2025-07-04T04:07:06.1620374Z         Error: error when destroying resource
2025-07-04T04:07:06.1620636Z         
2025-07-04T04:07:06.1620949Z         error deleting project (686729308263f52e03e7a058):
2025-07-04T04:07:06.1621503Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686729308263f52e03e7a058
2025-07-04T04:07:06.1621966Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-04T04:07:06.1622481Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-04T04:07:06.1623073Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-04T04:07:06.1623502Z         Params: [], BadRequestDetail: 
2025-07-04T04:07:06.1623882Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10808.67s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T03:55:54.4219902Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4280399Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4427704Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4428277Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-05T03:55:54.4428680Z         
2025-07-05T03:55:54.4428918Z         Error: Error in create
2025-07-05T03:55:54.4429148Z         
2025-07-05T03:55:54.4429519Z           with mongodbatlas_advanced_cluster.test,
2025-07-05T03:55:54.4430235Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-05T03:55:54.4430909Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-05T03:55:54.4431210Z         
2025-07-05T03:55:54.4431636Z         cluster=test-acc-tf-c-429736284458358647 didn't reach desired state: IDLE,
2025-07-05T03:55:54.4432225Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-05T03:55:54.4432635Z         'CREATING', timeout: 3h0m0s)
2025-07-05T03:55:54.4438087Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/753139a1-44b0-4e60-af45-cbcd7d034660/terraform
2025-07-05T03:55:54.4454564Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:55:54.4455172Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T03:55:54.4455702Z         
2025-07-05T03:55:54.4455985Z         Error: error when destroying resource
2025-07-05T03:55:54.4456251Z         
2025-07-05T03:55:54.4456568Z         error deleting project (6868781137c6036ffcf478f3):
2025-07-05T03:55:54.4457115Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868781137c6036ffcf478f3
2025-07-05T03:55:54.4457580Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-05T03:55:54.4458096Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-05T03:55:54.4458703Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-05T03:55:54.4459131Z         Params: [], BadRequestDetail: 
2025-07-05T03:55:54.4459516Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10808.48s)
```
### 2025-07-06
#### PASS 31 minutes
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T03:58:24.8926624Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:58:24.8980336Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:58:24.9133215Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-07T03:58:24.9133798Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-07T03:58:24.9134199Z         
2025-07-07T03:58:24.9134607Z         Error: Error in create
2025-07-07T03:58:24.9134868Z         
2025-07-07T03:58:24.9135180Z           with mongodbatlas_advanced_cluster.test,
2025-07-07T03:58:24.9135805Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-07T03:58:24.9136372Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-07T03:58:24.9136670Z         
2025-07-07T03:58:24.9137104Z         cluster=test-acc-tf-c-4320328927944679508 didn't reach desired state: IDLE,
2025-07-07T03:58:24.9137699Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-07T03:58:24.9138114Z         'CREATING', timeout: 3h0m0s)
2025-07-07T03:58:24.9149046Z   
2025-07-07T03:58:24.9149491Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T03:58:24.9149901Z         
2025-07-07T03:58:24.9150182Z         Error: error when destroying resource
2025-07-07T03:58:24.9150448Z         
2025-07-07T03:58:24.9150781Z         error deleting project (686b1ba6ffed0c5c678b53da):
2025-07-07T03:58:24.9151338Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b1ba6ffed0c5c678b53da
2025-07-07T03:58:24.9151818Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-07T03:58:24.9152344Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-07T03:58:24.9152952Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-07T03:58:24.9153379Z         Params: [], BadRequestDetail: 
2025-07-07T03:58:24.9153767Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10808.95s)
```
### 2025-07-08
#### PASS 43 minutes