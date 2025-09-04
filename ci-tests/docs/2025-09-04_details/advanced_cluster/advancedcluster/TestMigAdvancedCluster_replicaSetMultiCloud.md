# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-11 00:32](#error-2025-08-11t0032200000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68993a64f3d97116eb650545/clusters | dev |  | 10.08s
[2025-08-14 00:29](#error-2025-08-14t0029050000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/689d2e20ef833d45fb6d8724/clusters | dev |  | 12.01s
[2025-08-17 00:31](#error-2025-08-17t0031320000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68a12339f746882a383cc2bc/clusters | qa |  | 9.10s
[2025-08-30 00:26](#error-2025-08-30t0026200000) |  | dev | timeout | 10810.05s
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 41 minutes
- 2025-08-08 PASS 28 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11

### Error 2025-08-11T00:32:20+00:00
```
2025-08-11T00:32:20.2386512Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-11T00:33:33.3888228Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-11T00:33:43.3204402Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-11T00:33:43.3205491Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-11T00:33:43.3206327Z         
2025-08-11T00:33:43.3210251Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68993a64f3d97116eb650545/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-11T00:33:43.3212918Z         
2025-08-11T00:33:43.3213947Z           with mongodbatlas_advanced_cluster.test,
2025-08-11T00:33:43.3215142Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-11T00:33:43.3216248Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-11T00:33:43.3216815Z         
2025-08-11T00:33:44.2089535Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10.82s)
```

- 2025-08-12
  - PASS 32 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 43 minutes
- 2025-08-14

### Error 2025-08-14T00:29:05+00:00
```
2025-08-14T00:29:05.3009547Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-14T00:30:18.4392186Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-14T00:30:29.3152228Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-14T00:30:29.3153455Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-14T00:30:29.3154272Z         
2025-08-14T00:30:29.3174848Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689d2e20ef833d45fb6d8724/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-14T00:30:29.3177947Z         
2025-08-14T00:30:29.3178537Z           with mongodbatlas_advanced_cluster.test,
2025-08-14T00:30:29.3179754Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-14T00:30:29.3180845Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-14T00:30:29.3181379Z         
2025-08-14T00:30:30.5081110Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (12.10s)
```

- 2025-08-15: MISSING
- 2025-08-16 PASS 56 minutes
- 2025-08-17

### Error 2025-08-17T00:31:32+00:00
```
2025-08-17T00:31:32.2091546Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-17T00:32:50.8951290Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-17T00:33:00.0162846Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-17T00:33:00.0164536Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-17T00:33:00.0165360Z         
2025-08-17T00:33:00.0168551Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a12339f746882a383cc2bc/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-17T00:33:00.0169960Z         
2025-08-17T00:33:00.0170281Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T00:33:00.0170911Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T00:33:00.0171488Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T00:33:00.0171793Z         
2025-08-17T00:33:00.8645065Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (9.97s)
```

- 2025-08-18 PASS 33 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 31 minutes
  - PASS 26 minutes
- 2025-08-21 PASS 25 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 35 minutes
- 2025-08-24 PASS 28 minutes
- 2025-08-25 PASS 31 minutes
- 2025-08-26 PASS 39 minutes
- 2025-08-27 PASS 35 minutes
- 2025-08-28 PASS 32 minutes
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T00:26:20+00:00
```
2025-08-30T00:26:20.6101578Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T00:27:35.4492104Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:27:45.2400797Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:27:45.2401887Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-30T03:27:45.2402648Z         
2025-08-30T03:27:45.2403891Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-30T03:27:45.2404796Z         
2025-08-30T03:27:45.2405336Z           with mongodbatlas_advanced_cluster.test,
2025-08-30T03:27:45.2406495Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-30T03:27:45.2408059Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-30T03:27:45.2408596Z         
2025-08-30T03:27:45.5184441Z    test_terraform_path=/home/runner/work/_temp/b930b746-25c7-4fb6-ae4e-7e6e4082f0ae/terraform
2025-08-30T03:27:45.8936439Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:27:45.8937365Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-30T03:27:45.8937984Z         
2025-08-30T03:27:45.8938379Z         Error: error when destroying resource
2025-08-30T03:27:45.8938746Z         
2025-08-30T03:27:45.8939194Z         error deleting project (68b2457d491e0c777e9d3d1a):
2025-08-30T03:27:45.8939957Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b2457d491e0c777e9d3d1a
2025-08-30T03:27:45.8940589Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-30T03:27:45.8941323Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-08-30T03:27:45.8942158Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-08-30T03:27:45.8942783Z         Params: [], BadRequestDetail: 
2025-08-30T03:27:45.9058655Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10810.46s)
```

- 2025-08-31 PASS 33 minutes
- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.4646161Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:44.5111598Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:47.7546993Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:47.7548090Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:47.7548900Z         
2025-09-01T00:30:47.7549604Z         Error: error creating project: test-acc-tf-p-5977001021374177491
2025-09-01T00:30:47.7550185Z         
2025-09-01T00:30:47.7550785Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:47.7551976Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:47.7553072Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:47.7553626Z         
2025-09-01T00:30:47.7554502Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:47.7555840Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:47.7556980Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:47.7558128Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:47.7558890Z         BadRequestDetail: 
2025-09-01T00:30:47.9414563Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3.45s)
```

  - PASS 30 minutes
  - PASS an hour
  - PASS 35 minutes
  - PASS 32 minutes
  - PASS 26 minutes
  - PASS 28 minutes
  - PASS 26 minutes
- 2025-09-02 PASS 33 minutes
- 2025-09-03 PASS 40 minutes
- 2025-09-04 PASS 32 minutes