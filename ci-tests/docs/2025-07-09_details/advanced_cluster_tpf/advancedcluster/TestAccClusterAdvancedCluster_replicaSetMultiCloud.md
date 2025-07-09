# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 6)
Success rate: 94.87%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.01s
2025-05-28 12:04 | qa | 1222.06s
2025-06-05 00:35 | dev | 7.02s
2025-07-04 04:07 | dev | 10808.07s
2025-07-05 03:55 | dev | 10808.05s
2025-07-07 03:58 | dev | 10808.09s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
### 2025-04-10
#### PASS 42 minutes
### 2025-04-11
#### PASS 39 minutes
### 2025-04-12
#### PASS 31 minutes
### 2025-04-13
#### PASS 40 minutes
### 2025-04-14
#### PASS 33 minutes
### 2025-04-15
#### PASS 49 minutes
### 2025-04-16
#### PASS 34 minutes
#### PASS 47 minutes
### 2025-04-17
#### PASS 33 minutes
### 2025-04-18
#### PASS 35 minutes
### 2025-04-19
#### PASS 36 minutes
### 2025-04-20
#### PASS 39 minutes
### 2025-04-21
#### PASS 43 minutes
### 2025-04-22
#### PASS 35 minutes
### 2025-04-23
#### PASS 38 minutes
### 2025-04-24
#### PASS 31 minutes
### 2025-04-25
#### PASS 36 minutes
### 2025-04-26
#### PASS 32 minutes
### 2025-04-27
#### PASS 38 minutes
### 2025-04-28
#### PASS 33 minutes
### 2025-04-29
#### PASS 36 minutes
### 2025-04-30
#### PASS 34 minutes
### 2025-05-01
#### PASS 51 minutes
#### PASS 33 minutes
#### PASS 33 minutes
#### PASS 37 minutes
#### PASS 31 minutes
#### PASS 32 minutes
#### PASS 34 minutes
### 2025-05-02
#### PASS 40 minutes
### 2025-05-03
#### PASS 33 minutes
### 2025-05-04
#### PASS 32 minutes
### 2025-05-05
#### PASS 33 minutes
### 2025-05-06
#### PASS 40 minutes
### 2025-05-07
#### PASS 43 minutes
### 2025-05-08
#### PASS 36 minutes
### 2025-05-09
#### PASS 38 minutes
### 2025-05-10
#### PASS 43 minutes
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:01.7798321Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:01.8185708Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:01.8314205Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:01.8314816Z     resource_advanced_cluster_test.go:245: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:30:01.8315358Z         
2025-05-11T00:30:01.8315767Z         Error: error creating project: test-acc-tf-p-8073670268745310859
2025-05-11T00:30:01.8316108Z         
2025-05-11T00:30:01.8316450Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8317118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8323983Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8324336Z         
2025-05-11T00:30:01.8324815Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8325209Z         type
2025-05-11T00:30:01.8330690Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-05-11T00:30:01.8341067Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (2.08s)
```
### 2025-05-12
#### PASS 35 minutes
### 2025-05-13
#### PASS 32 minutes
#### PASS 32 minutes
### 2025-05-14
#### PASS 39 minutes
### 2025-05-15
#### PASS 41 minutes
### 2025-05-16
#### PASS 35 minutes
### 2025-05-17
#### PASS 35 minutes
### 2025-05-18
#### PASS 32 minutes
### 2025-05-19
#### PASS 35 minutes
### 2025-05-20
#### PASS 37 minutes
### 2025-05-21
#### PASS 35 minutes
#### PASS 32 minutes
### 2025-05-22
#### PASS 35 minutes
### 2025-05-23
#### PASS 44 minutes
### 2025-05-24
#### PASS 30 minutes
### 2025-05-25
#### PASS 35 minutes
### 2025-05-26
#### PASS 36 minutes
### 2025-05-27
#### PASS 35 minutes
### 2025-05-28
#### PASS 33 minutes
#### FAIL 20 minutes
```
2025-05-28T12:04:46.9779950Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-28T12:04:46.9832577Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-28T12:04:47.0040538Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-28T12:04:47.0041920Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Check failed: Check 17/17 error: cluster(6836d16ce6404f5026cf216b:test-acc-tf-c-2644619247028747836) does not exist: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:04:47.0067437Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (1222.60s)
```
#### PASS 37 minutes
### 2025-05-29
#### PASS 45 minutes
### 2025-05-30
#### PASS an hour
#### PASS 28 minutes
### 2025-05-31
#### PASS 36 minutes
### 2025-06-01
#### PASS 30 minutes
#### PASS 31 minutes
#### PASS 29 minutes
#### PASS 32 minutes
#### PASS 34 minutes
### 2025-06-02
#### PASS 30 minutes
#### PASS 36 minutes
#### PASS 52 minutes
#### PASS 32 minutes
### 2025-06-03
#### PASS 37 minutes
### 2025-06-04
#### PASS 34 minutes
### 2025-06-05
#### FAIL 7 seconds
```
2025-06-05T00:35:38.5873856Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:38.5942907Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:38.6611937Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:38.6612290Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6612383Z         
2025-06-05T00:35:38.6612688Z         Error: error creating project: test-acc-tf-p-1530747134862015283
2025-06-05T00:35:38.6612780Z         
2025-06-05T00:35:38.6613018Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6613475Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6613767Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6613856Z         
2025-06-05T00:35:38.6614216Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6614547Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6614833Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6615039Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (7.18s)
```
### 2025-06-06
#### PASS 48 minutes
### 2025-06-07
#### PASS 36 minutes
### 2025-06-08
#### PASS 32 minutes
### 2025-06-09
#### PASS 49 minutes
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 34 minutes
#### PASS 48 minutes
### 2025-06-12
#### PASS 36 minutes
### 2025-06-13
#### PASS 43 minutes
### 2025-06-14
#### PASS an hour
### 2025-06-15
#### PASS 33 minutes
### 2025-06-16
#### PASS an hour
### 2025-06-17
#### PASS 40 minutes
### 2025-06-18
#### PASS 38 minutes
#### PASS 36 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 35 minutes
### 2025-06-21
#### PASS 37 minutes
### 2025-06-22
#### PASS 55 minutes
### 2025-06-23
#### PASS 30 minutes
### 2025-06-24
#### PASS 42 minutes
### 2025-06-25
#### PASS 34 minutes
### 2025-06-26
#### PASS 48 minutes
#### PASS 30 minutes
### 2025-06-27
#### PASS an hour
### 2025-06-28
#### PASS 36 minutes
### 2025-06-29
#### PASS 38 minutes
### 2025-06-30
#### PASS 33 minutes
### 2025-07-01
#### PASS 36 minutes
#### PASS 34 minutes
#### PASS 32 minutes
#### PASS 31 minutes
#### PASS 35 minutes
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
### 2025-07-09
#### PASS 32 minutes