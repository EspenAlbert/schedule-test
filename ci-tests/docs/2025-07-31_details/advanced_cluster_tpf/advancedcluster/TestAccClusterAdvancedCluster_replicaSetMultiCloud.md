# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 04:07](#error-2025-07-04t0407060000) |  | dev | timeout | 10808.07s
[2025-07-05 03:55](#error-2025-07-05t0355540000) |  | dev | timeout | 10808.05s
[2025-07-07 03:58](#error-2025-07-07t0358240000) |  | dev | timeout | 10808.09s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0ef006d8d55bb9e9587/limits | qa | flaky_500 | 37.04s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a207f456171043788/limits | qa | flaky_500 | 37.04s
[2025-07-20 03:59](#error-2025-07-20t0359090000) |  | qa | timeout | 10807.09s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 32 minutes
- 2025-07-03 PASS 33 minutes
- 2025-07-04

### Error 2025-07-04T04:07:06+00:00
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

- 2025-07-05

### Error 2025-07-05T03:55:54+00:00
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

- 2025-07-06 PASS 31 minutes
- 2025-07-07

### Error 2025-07-07T03:58:24+00:00
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

- 2025-07-08 PASS 43 minutes
- 2025-07-09 PASS 32 minutes
- 2025-07-10
  - PASS 34 minutes
  - FAIL 37 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7742062Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-10T14:35:50.7799468Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-10T14:35:50.7945798Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-10T14:35:50.7946361Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-10T14:35:50.7946754Z         
2025-07-10T14:35:50.7947106Z         Error: error when getting project properties after create
2025-07-10T14:35:50.7947416Z         
2025-07-10T14:35:50.7947737Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.7948492Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.7949081Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.7949375Z         
2025-07-10T14:35:50.7949794Z         error getting project (686fc0ef006d8d55bb9e9587): error getting project's
2025-07-10T14:35:50.7950230Z         limits (686fc0ef006d8d55bb9e9587):
2025-07-10T14:35:50.7950806Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0ef006d8d55bb9e9587/limits
2025-07-10T14:35:50.7951442Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.7951990Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.7952353Z         BadRequestDetail: 
2025-07-10T14:35:50.7953858Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (37.41s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 46 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2183267Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-13T02:11:00.2267043Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-13T02:11:00.2459500Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-13T02:11:00.2460073Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-13T02:11:00.2460471Z         
2025-07-13T02:11:00.2460832Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2461141Z         
2025-07-13T02:11:00.2461459Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2462090Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2462671Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2462971Z         
2025-07-13T02:11:00.2463391Z         error getting project (6873058a207f456171043788): error getting project's
2025-07-13T02:11:00.2463821Z         limits (6873058a207f456171043788):
2025-07-13T02:11:00.2464362Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a207f456171043788/limits
2025-07-13T02:11:00.2465001Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2465556Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2465924Z         BadRequestDetail: 
2025-07-13T02:11:00.2466275Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (37.37s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 37 minutes
- 2025-07-16 PASS 36 minutes
- 2025-07-17 PASS 33 minutes
- 2025-07-18 PASS 51 minutes
- 2025-07-19 PASS 34 minutes
- 2025-07-20

### Error 2025-07-20T03:59:09+00:00
```
2025-07-20T03:59:09.1082813Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-20T03:59:09.1136767Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-20T03:59:09.1362301Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-20T03:59:09.1363000Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-20T03:59:09.1363400Z         
2025-07-20T03:59:09.1363636Z         Error: Error in create
2025-07-20T03:59:09.1363868Z         
2025-07-20T03:59:09.1364173Z           with mongodbatlas_advanced_cluster.test,
2025-07-20T03:59:09.1364783Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-20T03:59:09.1365349Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-20T03:59:09.1365644Z         
2025-07-20T03:59:09.1366069Z         cluster=test-acc-tf-c-2589961183683723355 didn't reach desired state: IDLE,
2025-07-20T03:59:09.1366653Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-20T03:59:09.1367059Z         'CREATING', timeout: 3h0m0s)
2025-07-20T03:59:09.1377723Z   
2025-07-20T03:59:09.1378164Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-20T03:59:09.1378576Z         
2025-07-20T03:59:09.1378857Z         Error: error when destroying resource
2025-07-20T03:59:09.1379121Z         
2025-07-20T03:59:09.1379556Z         error deleting project (687c3f54426db7026b5b4335):
2025-07-20T03:59:09.1380092Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3f54426db7026b5b4335
2025-07-20T03:59:09.1380559Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-20T03:59:09.1381068Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-20T03:59:09.1381661Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-20T03:59:09.1382084Z         Params: [], BadRequestDetail: 
2025-07-20T03:59:09.1382465Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10807.95s)
```

- 2025-07-21 PASS 32 minutes
- 2025-07-22 PASS 34 minutes
- 2025-07-23
  - PASS 30 minutes
  - PASS 38 minutes
  - PASS 33 minutes
  - PASS 36 minutes
- 2025-07-24 PASS 32 minutes
- 2025-07-25 PASS 33 minutes
- 2025-07-26 PASS 40 minutes
- 2025-07-27 PASS 45 minutes
- 2025-07-28 PASS 40 minutes
- 2025-07-29 PASS 45 minutes
- 2025-07-30 PASS 36 minutes
- 2025-07-31 PASS 57 minutes