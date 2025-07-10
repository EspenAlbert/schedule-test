# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 5)
Success rate: 95.65%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030080000) |  | qa |  | 3.09s
[2025-06-05 00:29](#error-2025-06-05t0029070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 8.04s
[2025-07-04 00:29](#error-2025-07-04t0029080000) |  | dev | timeout | 10813.02s
[2025-07-05 00:28](#error-2025-07-05t0028190000) |  | dev | timeout | 10811.06s
[2025-07-07 00:31](#error-2025-07-07t0031480000) |  | dev | timeout | 10810.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 19 minutes
- 2025-04-15 PASS 29 minutes
- 2025-04-16
  - PASS 20 minutes
  - PASS 24 minutes
- 2025-04-17 PASS 18 minutes
- 2025-04-18 PASS 21 minutes
- 2025-04-19 PASS 22 minutes
- 2025-04-20 PASS 20 minutes
- 2025-04-21 PASS 25 minutes
- 2025-04-22 PASS 21 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 20 minutes
- 2025-04-25 PASS 23 minutes
- 2025-04-26 PASS 22 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 19 minutes
- 2025-04-29 PASS 21 minutes
- 2025-04-30 PASS 24 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-05-02 PASS 23 minutes
- 2025-05-03 PASS 26 minutes
- 2025-05-04 PASS 18 minutes
- 2025-05-05 PASS 19 minutes
- 2025-05-06 PASS 28 minutes
- 2025-05-07 PASS 21 minutes
- 2025-05-08 PASS 22 minutes
- 2025-05-09 PASS 22 minutes
- 2025-05-10 PASS 23 minutes
- 2025-05-11

### Error 2025-05-11T00:30:08+00:00
```
2025-05-11T00:30:08.9920908Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:11.3735286Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:15.0835227Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:15.0836295Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:15.0837087Z         
2025-05-11T00:30:15.0837796Z         Error: error creating project: test-acc-tf-p-4899973425343344804
2025-05-11T00:30:15.0838393Z         
2025-05-11T00:30:15.0838979Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:15.0840147Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:15.0848619Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:15.0849194Z         
2025-05-11T00:30:15.0850288Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:15.0851592Z         type
2025-05-11T00:30:15.2867330Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3.92s)
```

- 2025-05-12 PASS 20 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-05-14 PASS 25 minutes
- 2025-05-15 PASS 24 minutes
- 2025-05-16 PASS 23 minutes
- 2025-05-17 PASS 24 minutes
- 2025-05-18 PASS 21 minutes
- 2025-05-19 PASS 21 minutes
- 2025-05-20 PASS 20 minutes
- 2025-05-21 PASS 20 minutes
- 2025-05-22 PASS 21 minutes
- 2025-05-23 PASS 27 minutes
- 2025-05-24 PASS 18 minutes
- 2025-05-25 PASS 22 minutes
- 2025-05-26 PASS 22 minutes
- 2025-05-27 PASS 21 minutes
- 2025-05-28
  - PASS 22 minutes
  - PASS 19 minutes
  - PASS 21 minutes
- 2025-05-29
  - PASS 28 minutes
  - PASS 16 minutes
- 2025-05-30
  - PASS an hour
  - PASS 22 minutes
- 2025-05-31 PASS 19 minutes
- 2025-06-01
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 19 minutes
- 2025-06-05

### Error 2025-06-05T00:29:07+00:00
```
2025-06-05T00:29:07.1383417Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:42.8419571Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:51.0209557Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:51.0210726Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:51.0211554Z         
2025-06-05T00:35:51.0211988Z         Error: error creating project: test-acc-tf-p-270319528161868230
2025-06-05T00:35:51.0212330Z         
2025-06-05T00:35:51.0212667Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:51.0213327Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:51.0213946Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:51.0214260Z         
2025-06-05T00:35:51.0214730Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:51.0215912Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:51.0216509Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:51.2110951Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (8.39s)
```

- 2025-06-06 PASS 22 minutes
- 2025-06-07 PASS 27 minutes
- 2025-06-08 PASS 19 minutes
- 2025-06-09 PASS 43 minutes
- 2025-06-10 PASS 24 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-06-12 PASS 26 minutes
- 2025-06-13 PASS 23 minutes
- 2025-06-14 PASS 23 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS an hour
- 2025-06-17 PASS 23 minutes
- 2025-06-18
  - PASS 22 minutes
  - PASS 19 minutes
- 2025-06-19 PASS 54 minutes
- 2025-06-20 PASS 21 minutes
- 2025-06-21 PASS 21 minutes
- 2025-06-22 PASS 37 minutes
- 2025-06-23 PASS 18 minutes
- 2025-06-24 PASS 32 minutes
- 2025-06-25 PASS 19 minutes
- 2025-06-26 PASS 19 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 22 minutes
- 2025-06-29 PASS 26 minutes
- 2025-06-30 PASS 21 minutes
- 2025-07-01
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 26 minutes
- 2025-07-02 PASS 21 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04

### Error 2025-07-04T00:29:08+00:00
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

- 2025-07-05

### Error 2025-07-05T00:28:19+00:00
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

- 2025-07-06 PASS 21 minutes
- 2025-07-07

### Error 2025-07-07T00:31:48+00:00
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

- 2025-07-08 PASS 19 minutes
- 2025-07-09 PASS 21 minutes
- 2025-07-10 PASS 20 minutes