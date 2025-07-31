# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 24) FAIL(x 9)
Success rate: 72.73%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 00:29](#error-2025-07-04t0029040000) |  | dev | timeout | 10806.02s
[2025-07-05 00:28](#error-2025-07-05t0028120000) |  | dev | timeout | 10806.02s
[2025-07-07 00:31](#error-2025-07-07t0031410000) |  | dev | timeout | 10806.00s
[2025-07-10 13:07](#error-2025-07-10t1307210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb0dfd583001f9eebb4c/limits | qa | flaky_500 | 1012.10s
[2025-07-13 00:32](#error-2025-07-13t0032410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872feb0207f456171041c44/limits | qa | flaky_500 | 1177.02s
[2025-07-14 00:31](#error-2025-07-14t0031150000) |  | dev | timeout | 10809.00s
[2025-07-18 00:29](#error-2025-07-18t0029570000) |  | dev | flaky_client | 392.09s
[2025-07-20 00:33](#error-2025-07-20t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c394f823af9166ef91faa/limits | qa | flaky_500 | 37.10s
[2025-07-23 13:23](#error-2025-07-23t1323330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880e2590afa8a5c6050707d/limits | qa | flaky_500 | 1055.02s

## Timeline
- 2025-07-01: MISSING
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
- 2025-07-10
  - PASS 17 minutes
  - FAIL 16 minutes

### Error 2025-07-10T13:07:21+00:00
```
2025-07-10T13:07:21.9843510Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-10T13:07:21.9844666Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-10T13:07:22.9648668Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-10T13:21:23.8697497Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-10T13:21:23.8698178Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:21:23.8698677Z         
2025-07-10T13:21:23.8699244Z         Error: error when getting project properties after create
2025-07-10T13:21:23.8699631Z         
2025-07-10T13:21:23.8699957Z           with mongodbatlas_project.cluster_project,
2025-07-10T13:21:23.8701241Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T13:21:23.8701871Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-10T13:21:23.8702184Z         
2025-07-10T13:21:23.8702618Z         error getting project (686fbb0dfd583001f9eebb4c): error getting project's
2025-07-10T13:21:23.8703062Z         limits (686fbb0dfd583001f9eebb4c):
2025-07-10T13:21:23.8703624Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb0dfd583001f9eebb4c/limits
2025-07-10T13:21:23.8704277Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:21:23.8704842Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:21:23.8705228Z         BadRequestDetail: 
2025-07-10T13:24:15.9527128Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1012.99s)
```

- 2025-07-11 PASS 29 minutes
- 2025-07-12 PASS 17 minutes
- 2025-07-13

### Error 2025-07-13T00:32:41+00:00
```
2025-07-13T00:32:41.9392921Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-13T00:32:41.9394002Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-13T00:32:44.4074195Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-13T00:48:48.0835363Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-13T00:48:48.0836115Z     resource_advanced_cluster_migration_test.go:22: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-13T00:48:48.0836865Z         
2025-07-13T00:48:48.0837372Z         Error: error when getting project properties after create
2025-07-13T00:48:48.0854158Z         
2025-07-13T00:48:48.0854800Z           with mongodbatlas_project.cluster_project,
2025-07-13T00:48:48.0855588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T00:48:48.0856638Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T00:48:48.0857160Z         
2025-07-13T00:48:48.0857908Z         error getting project (6872feb0207f456171041c44): error getting project's
2025-07-13T00:48:48.0858432Z         limits (6872feb0207f456171041c44):
2025-07-13T00:48:48.0859128Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872feb0207f456171041c44/limits
2025-07-13T00:48:48.0859908Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:48:48.0860870Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:48:48.0861387Z         BadRequestDetail: 
2025-07-13T00:52:21.6394210Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1177.24s)
```

- 2025-07-14

### Error 2025-07-14T00:31:15+00:00
```
2025-07-14T00:31:15.4102382Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-14T00:31:15.4103674Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-14T00:31:18.1124568Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-14T03:31:26.4234643Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-14T03:31:26.4236118Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:26.4236952Z         
2025-07-14T03:31:26.4238339Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:26.4239091Z         
2025-07-14T03:31:26.4239781Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:26.4240654Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:26.4241373Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:26.4241695Z         
2025-07-14T03:31:27.1081442Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:27.1082468Z         
2025-07-14T03:31:27.1083004Z         Error: error when destroying resource
2025-07-14T03:31:27.1083509Z         
2025-07-14T03:31:27.1084106Z         error deleting project (68744fd8d81a2d4bb4ea474e):
2025-07-14T03:31:27.1085091Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fd8d81a2d4bb4ea474e
2025-07-14T03:31:27.1085915Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:31:27.1086838Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:31:27.1087910Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:31:27.1088670Z         Params: [], BadRequestDetail: 
2025-07-14T03:31:27.1198642Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10809.01s)
```

- 2025-07-15 PASS 16 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18

### Error 2025-07-18T00:29:57+00:00
```
2025-07-18T00:29:57.5643584Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-18T00:29:57.5644419Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-18T00:29:59.7321904Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-18T00:36:31.8883238Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-18T00:36:31.8883850Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-18T00:36:31.8884289Z         
2025-07-18T00:36:31.8885486Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6879958ae2cb8d27fbfbc79c/clusters/test-acc-tf-c-4821460694710934545": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-18T00:36:31.8886334Z         
2025-07-18T00:36:31.8886661Z           with mongodbatlas_advanced_cluster.test,
2025-07-18T00:36:31.8887284Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-18T00:36:31.8887859Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-18T00:36:31.8888156Z         
2025-07-18T00:36:32.5811387Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-18T00:36:32.5811810Z         
2025-07-18T00:36:32.5812094Z         Error: error when destroying resource
2025-07-18T00:36:32.5812359Z         
2025-07-18T00:36:32.5812682Z         error deleting project (6879958ae2cb8d27fbfbc79c):
2025-07-18T00:36:32.5813245Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6879958ae2cb8d27fbfbc79c
2025-07-18T00:36:32.5813721Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-18T00:36:32.5814282Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-18T00:36:32.5815129Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-18T00:36:32.5815569Z         Params: [], BadRequestDetail: 
2025-07-18T00:36:32.5932409Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (392.87s)
```

- 2025-07-19 PASS 18 minutes
- 2025-07-20

### Error 2025-07-20T00:33:15+00:00
```
2025-07-20T00:33:15.5824140Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-20T00:33:15.5825236Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-20T00:33:17.3266791Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-20T00:33:55.1043856Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-20T00:33:55.1044462Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:33:55.1044898Z         
2025-07-20T00:33:55.1045269Z         Error: error when getting project properties after create
2025-07-20T00:33:55.1045596Z         
2025-07-20T00:33:55.1045929Z           with mongodbatlas_project.cluster_project,
2025-07-20T00:33:55.1046559Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T00:33:55.1047670Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T00:33:55.1047976Z         
2025-07-20T00:33:55.1048405Z         error getting project (687c394f823af9166ef91faa): error getting project's
2025-07-20T00:33:55.1048845Z         limits (687c394f823af9166ef91faa):
2025-07-20T00:33:55.1049400Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c394f823af9166ef91faa/limits
2025-07-20T00:33:55.1050056Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:33:55.1050607Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:33:55.1050975Z         BadRequestDetail: 
2025-07-20T00:33:55.2901886Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (37.97s)
```

- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 16 minutes
- 2025-07-23
  - PASS 20 minutes
  - FAIL 17 minutes

### Error 2025-07-23T13:23:33+00:00
```
2025-07-23T13:23:33.9728950Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-23T13:23:33.9730024Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-07-23T13:23:35.4246883Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-23T13:37:37.7892186Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-07-23T13:37:37.7894356Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-23T13:37:37.7895145Z         
2025-07-23T13:37:37.7895971Z         Error: error when getting project properties after create
2025-07-23T13:37:37.7896493Z         
2025-07-23T13:37:37.7896989Z           with mongodbatlas_project.cluster_project,
2025-07-23T13:37:37.7897646Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T13:37:37.7898245Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T13:37:37.7898551Z         
2025-07-23T13:37:37.7898981Z         error getting project (6880e2590afa8a5c6050707d): error getting project's
2025-07-23T13:37:37.7899425Z         limits (6880e2590afa8a5c6050707d):
2025-07-23T13:37:37.7899981Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2590afa8a5c6050707d/limits
2025-07-23T13:37:37.7900656Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T13:37:37.7901220Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T13:37:37.7901598Z         BadRequestDetail: 
2025-07-23T13:41:10.6340044Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1055.22s)
```

- 2025-07-24 PASS 18 minutes
- 2025-07-25 PASS 17 minutes
- 2025-07-26 PASS 15 minutes
- 2025-07-27 PASS 18 minutes
- 2025-07-28 PASS 18 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 19 minutes
- 2025-07-31 PASS 21 minutes