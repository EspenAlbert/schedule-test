# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 04:07](#error-2025-07-04t0407060000) |  | dev | timeout | 10809.04s
[2025-07-05 03:55](#error-2025-07-05t0355540000) |  | dev | timeout | 10809.00s
[2025-07-07 03:58](#error-2025-07-07t0358240000) |  | dev | flaky_500 | 10810.06s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f1006d8d55bb9e98b7/limits | qa | flaky_500 | 38.07s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a207f4561710439e4/limits | qa | flaky_500 | 38.02s
[2025-07-20 03:59](#error-2025-07-20t0359090000) |  | qa | timeout | 10809.05s
[2025-07-23 17:30](#error-2025-07-23t1730380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810ea593a06a13914bc58d/limits | qa | flaky_500 | 1191.09s
[2025-07-29 01:51](#error-2025-07-29t0151110000) |  | dev | provider_download | 8.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 16 minutes
- 2025-07-04

### Error 2025-07-04T04:07:06+00:00
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

- 2025-07-05

### Error 2025-07-05T03:55:54+00:00
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

- 2025-07-06 PASS 18 minutes
- 2025-07-07

### Error 2025-07-07T03:58:24+00:00
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

- 2025-07-08 PASS 22 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10
  - PASS 16 minutes
  - FAIL 38 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7708382Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-10T14:35:50.7804392Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-10T14:35:50.8051804Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-10T14:35:50.8052393Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-10T14:35:50.8052825Z         
2025-07-10T14:35:50.8053181Z         Error: error when getting project properties after create
2025-07-10T14:35:50.8053491Z         
2025-07-10T14:35:50.8053812Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.8054442Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.8055018Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.8055311Z         
2025-07-10T14:35:50.8055853Z         error getting project (686fc0f1006d8d55bb9e98b7): error getting project's
2025-07-10T14:35:50.8056296Z         limits (686fc0f1006d8d55bb9e98b7):
2025-07-10T14:35:50.8056846Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f1006d8d55bb9e98b7/limits
2025-07-10T14:35:50.8057488Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.8058033Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.8058395Z         BadRequestDetail: 
2025-07-10T14:35:50.8065907Z    test_step_number=1
2025-07-10T14:35:50.8073285Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (38.72s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 20 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2154097Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-13T02:11:00.2268842Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-13T02:11:00.2556682Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-13T02:11:00.2557359Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-13T02:11:00.2557906Z         
2025-07-13T02:11:00.2558268Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2558700Z         
2025-07-13T02:11:00.2559025Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2559859Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2560555Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2560904Z         
2025-07-13T02:11:00.2561382Z         error getting project (6873058a207f4561710439e4): error getting project's
2025-07-13T02:11:00.2561923Z         limits (6873058a207f4561710439e4):
2025-07-13T02:11:00.2562486Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a207f4561710439e4/limits
2025-07-13T02:11:00.2563222Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2564024Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2564534Z         BadRequestDetail: 
2025-07-13T02:11:00.2565392Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (38.19s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 21 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 18 minutes
- 2025-07-18 PASS 23 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20

### Error 2025-07-20T03:59:09+00:00
```
2025-07-20T03:59:09.1054685Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-20T03:59:09.1141951Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-20T03:59:09.1388668Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-20T03:59:09.1389252Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-20T03:59:09.1389680Z         
2025-07-20T03:59:09.1389917Z         Error: Error in create
2025-07-20T03:59:09.1390151Z         
2025-07-20T03:59:09.1390454Z           with mongodbatlas_advanced_cluster.test,
2025-07-20T03:59:09.1391072Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-20T03:59:09.1391633Z           19: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-20T03:59:09.1391929Z         
2025-07-20T03:59:09.1392360Z         cluster=test-acc-tf-c-3395772577161586532 didn't reach desired state: IDLE,
2025-07-20T03:59:09.1393050Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-20T03:59:09.1393459Z         'CREATING', timeout: 3h0m0s)
2025-07-20T03:59:09.1399407Z   
2025-07-20T03:59:09.1399852Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-20T03:59:09.1400384Z         
2025-07-20T03:59:09.1400659Z         Error: error when destroying resource
2025-07-20T03:59:09.1400923Z         
2025-07-20T03:59:09.1401237Z         error deleting project (687c3f55426db7026b5b44ec):
2025-07-20T03:59:09.1401780Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3f55426db7026b5b44ec
2025-07-20T03:59:09.1402238Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-20T03:59:09.1402750Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-20T03:59:09.1403474Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-20T03:59:09.1403897Z         Params: [], BadRequestDetail: 
2025-07-20T03:59:09.1404251Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10809.46s)
```

- 2025-07-21 PASS 17 minutes
- 2025-07-22 PASS 17 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - FAIL 19 minutes

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7490358Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-23T17:30:38.7684317Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-23T17:30:38.7930289Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-23T17:30:38.7930967Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-23T17:30:38.7931454Z         
2025-07-23T17:30:38.7931816Z         Error: error when getting project properties after create
2025-07-23T17:30:38.7932136Z         
2025-07-23T17:30:38.7932458Z           with mongodbatlas_project.cluster_project,
2025-07-23T17:30:38.7933100Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T17:30:38.7933691Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-07-23T17:30:38.7933995Z         
2025-07-23T17:30:38.7934416Z         error getting project (68810ea593a06a13914bc58d): error getting project's
2025-07-23T17:30:38.7934856Z         limits (68810ea593a06a13914bc58d):
2025-07-23T17:30:38.7935403Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810ea593a06a13914bc58d/limits
2025-07-23T17:30:38.7936042Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T17:30:38.7936592Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T17:30:38.7937091Z         BadRequestDetail: 
2025-07-23T17:30:38.7949542Z    test_terraform_path=/home/runner/work/_temp/75239e0c-98ea-4d70-b5f4-7fa4152b532d/terraform
2025-07-23T17:30:38.7965735Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1191.87s)
```

- 2025-07-24 PASS 19 minutes
- 2025-07-25 PASS 19 minutes
- 2025-07-26 PASS 28 minutes
- 2025-07-27 PASS 25 minutes
- 2025-07-28 PASS 37 minutes
- 2025-07-29

### Error 2025-07-29T01:51:11+00:00
```
2025-07-29T01:51:11.9745170Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-29T01:51:11.9869517Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-29T01:51:11.9912123Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-29T01:51:11.9912701Z     resource_advanced_cluster_migration_test.go:22: TestStep 1/2 running init: exit status 1
2025-07-29T01:51:11.9913129Z         
2025-07-29T01:51:11.9913420Z         Error: Failed to install provider
2025-07-29T01:51:11.9913874Z         
2025-07-29T01:51:11.9914350Z         Error while installing mongodb/mongodbatlas v1.39.0: github.com: bad response
2025-07-29T01:51:11.9914771Z         code: 503
2025-07-29T01:51:11.9915090Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (8.21s)
```

- 2025-07-30 PASS 20 minutes