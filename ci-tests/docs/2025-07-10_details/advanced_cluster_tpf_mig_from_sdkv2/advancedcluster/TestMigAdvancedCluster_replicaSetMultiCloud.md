# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 6)
Success rate: 94.83%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030000000) |  | qa |  | 2.02s
[2025-06-05 00:28](#error-2025-06-05t0028580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.04s
[2025-06-22 00:31](#error-2025-06-22t0031570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574f02af7a0954e84ae860/limits | qa | flaky_500 | 1152.05s
[2025-07-04 00:29](#error-2025-07-04t0029040000) |  | dev | timeout | 10806.02s
[2025-07-05 00:28](#error-2025-07-05t0028120000) |  | dev | timeout | 10806.02s
[2025-07-07 00:31](#error-2025-07-07t0031410000) |  | dev | timeout | 10806.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 16 minutes
- 2025-04-15 PASS 18 minutes
- 2025-04-16
  - PASS 15 minutes
  - PASS 21 minutes
- 2025-04-17 PASS 22 minutes
- 2025-04-18 PASS 18 minutes
- 2025-04-19 PASS 15 minutes
- 2025-04-20 PASS 17 minutes
- 2025-04-21 PASS 16 minutes
- 2025-04-22 PASS 18 minutes
- 2025-04-23 PASS 19 minutes
- 2025-04-24 PASS 33 minutes
- 2025-04-25 PASS 16 minutes
- 2025-04-26 PASS 19 minutes
- 2025-04-27 PASS 19 minutes
- 2025-04-28 PASS 15 minutes
- 2025-04-29 PASS 17 minutes
- 2025-04-30
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-05-01
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-05-02 PASS 18 minutes
- 2025-05-03 PASS 17 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 17 minutes
- 2025-05-07
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 18 minutes
- 2025-05-10 PASS 18 minutes
- 2025-05-11

### Error 2025-05-11T00:30:00+00:00
```
2025-05-11T00:30:00.1398060Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:00.1398590Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-05-11T00:30:00.1858355Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:02.1856149Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:02.1857394Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:02.1858217Z         
2025-05-11T00:30:02.1858963Z         Error: error creating project: test-acc-tf-p-7694342625747387228
2025-05-11T00:30:02.1859584Z         
2025-05-11T00:30:02.1860217Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:02.1861420Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:02.1862558Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:02.1863122Z         
2025-05-11T00:30:02.1864144Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:02.1864896Z         type
2025-05-11T00:30:02.1875482Z    test_terraform_path=/home/runner/work/_temp/67cecb51-fefe-47de-9a59-74ad8e9bbdfb/terraform test_name=TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-05-11T00:30:02.3995887Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (2.22s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-05-14 PASS 17 minutes
- 2025-05-15 PASS 16 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 16 minutes
- 2025-05-18 PASS 16 minutes
- 2025-05-19 PASS 17 minutes
- 2025-05-20 PASS 16 minutes
- 2025-05-21 PASS 16 minutes
- 2025-05-22 PASS 21 minutes
- 2025-05-23 PASS 23 minutes
- 2025-05-24 PASS 17 minutes
- 2025-05-25 PASS 18 minutes
- 2025-05-26 PASS 16 minutes
- 2025-05-27 PASS 17 minutes
- 2025-05-28
  - PASS 55 minutes
  - PASS 17 minutes
- 2025-05-29 PASS 16 minutes
- 2025-05-30 PASS an hour
- 2025-05-31 PASS 15 minutes
- 2025-06-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-06-03 PASS 15 minutes
- 2025-06-04 PASS 18 minutes
- 2025-06-05

### Error 2025-06-05T00:28:58+00:00
```
2025-06-05T00:28:58.6409644Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:28:58.6410588Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-05T00:29:00.2537789Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:29:04.4749509Z    test_working_directory=/tmp/plugintest3780753520
2025-06-05T00:29:04.4750637Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:04.4751474Z         
2025-06-05T00:29:04.4752213Z         Error: error creating project: test-acc-tf-p-140343736346351650
2025-06-05T00:29:04.4752890Z         
2025-06-05T00:29:04.4753570Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:29:04.4754811Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:29:04.4756149Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:29:04.4756725Z         
2025-06-05T00:29:04.4757580Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:04.4758728Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:04.4759773Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:04.6560411Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (4.41s)
```

- 2025-06-06 PASS 17 minutes
- 2025-06-07 PASS 18 minutes
- 2025-06-08 PASS 17 minutes
- 2025-06-09 PASS 15 minutes
- 2025-06-10 PASS 30 minutes
- 2025-06-11
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-06-12 PASS 19 minutes
- 2025-06-13 PASS 20 minutes
- 2025-06-14 PASS 23 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS 17 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18 PASS 17 minutes
- 2025-06-19 PASS 32 minutes
- 2025-06-20 PASS 17 minutes
- 2025-06-21 PASS 17 minutes
- 2025-06-22

### Error 2025-06-22T00:31:57+00:00
```
2025-06-22T00:31:57.4098032Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-22T00:31:57.4099164Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-22T00:31:59.6551918Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-22T00:48:09.8005264Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-22T00:48:09.8006511Z     resource_advanced_cluster_migration_test.go:22: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:48:09.8007065Z         
2025-06-22T00:48:09.8007565Z         Error: error when getting project properties after create
2025-06-22T00:48:09.8007889Z         
2025-06-22T00:48:09.8008228Z           with mongodbatlas_project.cluster_project,
2025-06-22T00:48:09.8008878Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T00:48:09.8009728Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-22T00:48:09.8010026Z         
2025-06-22T00:48:09.8010460Z         error getting project (68574f02af7a0954e84ae860): error getting project's
2025-06-22T00:48:09.8010896Z         limits (68574f02af7a0954e84ae860):
2025-06-22T00:48:09.8011461Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574f02af7a0954e84ae860/limits
2025-06-22T00:48:09.8012117Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:48:09.8012835Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:48:09.8013212Z         BadRequestDetail: 
2025-06-22T00:51:12.1414273Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1152.49s)
```

- 2025-06-23 PASS 16 minutes
- 2025-06-24 PASS 16 minutes
- 2025-06-25 PASS 23 minutes
- 2025-06-26 PASS 18 minutes
- 2025-06-27 PASS 17 minutes
- 2025-06-28 PASS 17 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-07-02
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04

### Error 2025-07-04T00:29:04+00:00
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

- 2025-07-05

### Error 2025-07-05T00:28:12+00:00
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

- 2025-07-06 PASS 17 minutes
- 2025-07-07

### Error 2025-07-07T00:31:41+00:00
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

- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 17 minutes