# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:32](#error-2025-07-06t0032160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4127267b5775b683636/limits | qa | flaky_500 | 34.10s
[2025-07-13 00:32](#error-2025-07-13t0032440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872feb0006d8d55bbaa32d1/limits | qa | flaky_500 | 36.07s
[2025-07-14 00:31](#error-2025-07-14t0031180000) |  | dev | timeout | 10806.09s
[2025-07-20 00:33](#error-2025-07-20t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c394f823af9166ef91fa9/limits | qa | flaky_500 | 36.01s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-07-02
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06

### Error 2025-07-06T00:32:16+00:00
```
2025-07-06T00:32:16.1518557Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:16.1519589Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-06T00:32:16.1562160Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:50.9362278Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:50.9363366Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:32:50.9364132Z         
2025-07-06T00:32:50.9364773Z         Error: error when getting project properties after create
2025-07-06T00:32:50.9365333Z         
2025-07-06T00:32:50.9365887Z           with mongodbatlas_project.cluster_project,
2025-07-06T00:32:50.9366982Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T00:32:50.9368070Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-06T00:32:50.9368593Z         
2025-07-06T00:32:50.9369321Z         error getting project (6869c4127267b5775b683636): error getting project's
2025-07-06T00:32:50.9370660Z         limits (6869c4127267b5775b683636):
2025-07-06T00:32:50.9371655Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4127267b5775b683636/limits
2025-07-06T00:32:50.9372798Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:50.9373783Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:50.9374459Z         BadRequestDetail: 
2025-07-06T00:32:51.1171531Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (34.96s)
```

- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 14 minutes
- 2025-07-10
  - PASS 17 minutes
  - PASS 12 minutes
- 2025-07-11 PASS 24 minutes
- 2025-07-12 PASS 13 minutes
- 2025-07-13

### Error 2025-07-13T00:32:44+00:00
```
2025-07-13T00:32:44.4028293Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-13T00:32:44.4029251Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-13T00:32:44.4072162Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-13T00:33:20.9254829Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-13T00:33:20.9255976Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:33:20.9256775Z         
2025-07-13T00:33:20.9257460Z         Error: error when getting project properties after create
2025-07-13T00:33:20.9258007Z         
2025-07-13T00:33:20.9258572Z           with mongodbatlas_project.cluster_project,
2025-07-13T00:33:20.9259718Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T00:33:20.9260947Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-13T00:33:20.9261483Z         
2025-07-13T00:33:20.9262254Z         error getting project (6872feb0006d8d55bbaa32d1): error getting project's
2025-07-13T00:33:20.9263021Z         limits (6872feb0006d8d55bbaa32d1):
2025-07-13T00:33:20.9264030Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872feb0006d8d55bbaa32d1/limits
2025-07-13T00:33:20.9265200Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:33:20.9266198Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:33:20.9266874Z         BadRequestDetail: 
2025-07-13T00:33:21.1109457Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (36.71s)
```

- 2025-07-14

### Error 2025-07-14T00:31:18+00:00
```
2025-07-14T00:31:18.1059881Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-14T00:31:18.1061153Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-14T00:31:18.1123180Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-14T03:31:24.2567130Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-14T03:31:24.2567836Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:24.2568328Z         
2025-07-14T03:31:24.2569099Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:24.2570004Z         
2025-07-14T03:31:24.2570354Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:24.2571015Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:24.2571613Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:24.2571944Z         
2025-07-14T03:31:24.9616586Z    test_name=TestMigAdvancedCluster_asymmetricShardedNewSchema test_terraform_path=/home/runner/work/_temp/0754b9cb-92f8-47f8-aad5-b6975eb9ce41/terraform
2025-07-14T03:31:24.9618217Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:24.9618955Z         
2025-07-14T03:31:24.9619991Z         Error: error when destroying resource
2025-07-14T03:31:24.9620493Z         
2025-07-14T03:31:24.9621082Z         error deleting project (68744fd852cba864e5f10886):
2025-07-14T03:31:24.9622102Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fd852cba864e5f10886
2025-07-14T03:31:24.9622961Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:31:24.9623919Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:31:24.9625025Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:31:24.9625810Z         Params: [], BadRequestDetail: 
2025-07-14T03:31:24.9678873Z   
2025-07-14T03:31:24.9747118Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (10806.87s)
```

- 2025-07-15 PASS 14 minutes
- 2025-07-16 PASS 15 minutes
- 2025-07-17 PASS 14 minutes
- 2025-07-18 PASS 16 minutes
- 2025-07-19 PASS 13 minutes
- 2025-07-20

### Error 2025-07-20T00:33:17+00:00
```
2025-07-20T00:33:17.3194597Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-20T00:33:17.3195291Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-20T00:33:17.3264606Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-20T00:33:53.2254910Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-20T00:33:53.2255543Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:33:53.2255978Z         
2025-07-20T00:33:53.2256348Z         Error: error when getting project properties after create
2025-07-20T00:33:53.2256895Z         
2025-07-20T00:33:53.2257408Z           with mongodbatlas_project.cluster_project,
2025-07-20T00:33:53.2258057Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T00:33:53.2258658Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T00:33:53.2258964Z         
2025-07-20T00:33:53.2259389Z         error getting project (687c394f823af9166ef91fa9): error getting project's
2025-07-20T00:33:53.2259827Z         limits (687c394f823af9166ef91fa9):
2025-07-20T00:33:53.2260378Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c394f823af9166ef91fa9/limits
2025-07-20T00:33:53.2261020Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:33:53.2261569Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:33:53.2261941Z         BadRequestDetail: 
2025-07-20T00:33:53.4048206Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (36.08s)
```

- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-07-24 PASS 13 minutes
- 2025-07-25 PASS 15 minutes
- 2025-07-26 PASS 14 minutes
- 2025-07-27 PASS 29 minutes
- 2025-07-28 PASS 14 minutes
- 2025-07-29 PASS 14 minutes
- 2025-07-30 PASS 14 minutes