# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 6)
Success rate: 94.83%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 3.02s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 8.04s
[2025-06-29 02:02](#error-2025-06-29t0202460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860911a49709c3a5a3cbb28/limits | qa | flaky_500 | 1548.04s
[2025-07-04 04:07](#error-2025-07-04t0407060000) |  | dev | timeout | 10809.04s
[2025-07-05 03:55](#error-2025-07-05t0355540000) |  | dev | timeout | 10809.00s
[2025-07-07 03:58](#error-2025-07-07t0358240000) |  | dev | timeout | 10810.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 19 minutes
- 2025-04-13 PASS 20 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 16 minutes
- 2025-04-16
  - PASS 16 minutes
  - PASS 20 minutes
- 2025-04-17 PASS 17 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 18 minutes
- 2025-04-20 PASS 21 minutes
- 2025-04-21 PASS 25 minutes
- 2025-04-22 PASS 19 minutes
- 2025-04-23 PASS 24 minutes
- 2025-04-24 PASS 17 minutes
- 2025-04-25 PASS 19 minutes
- 2025-04-26 PASS 17 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 17 minutes
- 2025-04-29 PASS 23 minutes
- 2025-04-30 PASS 17 minutes
- 2025-05-01
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 18 minutes
- 2025-05-02 PASS 24 minutes
- 2025-05-03 PASS 18 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 17 minutes
- 2025-05-07 PASS 17 minutes
- 2025-05-08 PASS 18 minutes
- 2025-05-09 PASS 20 minutes
- 2025-05-10 PASS 16 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7648282Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:01.8179691Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:01.8358759Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:01.8359371Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:01.8359803Z         
2025-05-11T00:30:01.8360201Z         Error: error creating project: test-acc-tf-p-8088549586166646856
2025-05-11T00:30:01.8360536Z         
2025-05-11T00:30:01.8361005Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8361784Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8362381Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8362682Z         
2025-05-11T00:30:01.8363127Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8363542Z         type
2025-05-11T00:30:01.8363825Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3.23s)
```

- 2025-05-12 PASS 22 minutes
- 2025-05-13
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-05-14 PASS 22 minutes
- 2025-05-15 PASS 22 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 18 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 18 minutes
- 2025-05-20 PASS 17 minutes
- 2025-05-21
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-05-22 PASS 18 minutes
- 2025-05-23 PASS 18 minutes
- 2025-05-24 PASS 16 minutes
- 2025-05-25 PASS 36 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 16 minutes
- 2025-05-28
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 20 minutes
- 2025-05-29 PASS 35 minutes
- 2025-05-30
  - PASS an hour
  - PASS 16 minutes
- 2025-05-31 PASS 19 minutes
- 2025-06-01
  - PASS 20 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 16 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 20 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5803641Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:38.5959338Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:38.6642523Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:38.6642914Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6643006Z         
2025-06-05T00:35:38.6643312Z         Error: error creating project: test-acc-tf-p-4579335732355862924
2025-06-05T00:35:38.6643404Z         
2025-06-05T00:35:38.6643642Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6644105Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6644394Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6644479Z         
2025-06-05T00:35:38.6644844Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6645178Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6645472Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6645653Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (8.44s)
```

- 2025-06-06 PASS 21 minutes
- 2025-06-07 PASS 19 minutes
- 2025-06-08 PASS 21 minutes
- 2025-06-09 PASS 17 minutes
- 2025-06-10 PASS 25 minutes
- 2025-06-11
  - PASS 16 minutes
  - PASS 18 minutes
- 2025-06-12 PASS 20 minutes
- 2025-06-13 PASS 22 minutes
- 2025-06-14 PASS 23 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS 28 minutes
- 2025-06-17 PASS 19 minutes
- 2025-06-18
  - PASS 24 minutes
  - PASS 20 minutes
- 2025-06-19 PASS 58 minutes
- 2025-06-20 PASS 23 minutes
- 2025-06-21 PASS 18 minutes
- 2025-06-22 PASS 19 minutes
- 2025-06-23 PASS 19 minutes
- 2025-06-24 PASS 23 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26
  - PASS 21 minutes
  - PASS 16 minutes
- 2025-06-27 PASS 19 minutes
- 2025-06-28 PASS 19 minutes
- 2025-06-29

### Error 2025-06-29T02:02:46+00:00
```
2025-06-29T02:02:46.2809433Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-29T02:02:46.2898675Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-29T02:02:46.3122791Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-29T02:02:46.3123454Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T02:02:46.3123929Z         
2025-06-29T02:02:46.3124289Z         Error: error when getting project properties after create
2025-06-29T02:02:46.3124601Z         
2025-06-29T02:02:46.3124924Z           with mongodbatlas_project.cluster_project,
2025-06-29T02:02:46.3125558Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T02:02:46.3126137Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-06-29T02:02:46.3126441Z         
2025-06-29T02:02:46.3126870Z         error getting project (6860911a49709c3a5a3cbb28): error getting project's
2025-06-29T02:02:46.3127301Z         limits (6860911a49709c3a5a3cbb28):
2025-06-29T02:02:46.3127844Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860911a49709c3a5a3cbb28/limits
2025-06-29T02:02:46.3128604Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T02:02:46.3129159Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T02:02:46.3129526Z         BadRequestDetail: 
2025-06-29T02:02:46.3145732Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1548.41s)
```

- 2025-06-30 PASS 18 minutes
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
- 2025-07-10 PASS 16 minutes