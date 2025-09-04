# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 37 TestRuns in dev, qa from 2025-08-05 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-30 00:26](#error-2025-08-30t0026170000) |  | dev | timeout | 10806.09s
[2025-09-01 00:30](#error-2025-09-01t0030310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.00s

## Timeline
- 2025-08-05
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-08-06 PASS 39 minutes
- 2025-08-07 PASS 38 minutes
- 2025-08-08 PASS 26 minutes
- 2025-08-09 PASS 37 minutes
- 2025-08-10 PASS 36 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 28 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 36 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 55 minutes
- 2025-08-17 PASS 46 minutes
- 2025-08-18 PASS 39 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 25 minutes
  - PASS 28 minutes
- 2025-08-21 PASS 32 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 37 minutes
- 2025-08-24 PASS 26 minutes
- 2025-08-25 PASS 20 minutes
- 2025-08-26 PASS 32 minutes
- 2025-08-27 PASS 37 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T00:26:17+00:00
```
2025-08-30T00:26:17.0826139Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T00:26:17.0827250Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-08-30T00:26:22.4063611Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:26:28.5888115Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:26:28.5888759Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-30T03:26:28.5889211Z         
2025-08-30T03:26:28.5889946Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-30T03:26:28.5890491Z         
2025-08-30T03:26:28.5890816Z           with mongodbatlas_advanced_cluster.test,
2025-08-30T03:26:28.5891462Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-30T03:26:28.5892060Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-30T03:26:28.5892360Z         
2025-08-30T03:26:29.2519399Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_step_number=1
2025-08-30T03:26:29.2520196Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-30T03:26:29.2520716Z         
2025-08-30T03:26:29.2521067Z         Error: error when destroying resource
2025-08-30T03:26:29.2521392Z         
2025-08-30T03:26:29.2521730Z         error deleting project (68b24530491e0c777e9cad3a):
2025-08-30T03:26:29.2522688Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b24530491e0c777e9cad3a
2025-08-30T03:26:29.2523258Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-30T03:26:29.2523904Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-08-30T03:26:29.2524639Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-08-30T03:26:29.2525127Z         Params: [], BadRequestDetail: 
2025-08-30T03:26:29.2638153Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10806.86s)
```

- 2025-08-31 PASS 29 minutes
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:31+00:00
```
2025-09-01T00:30:31.6203864Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:31.6204385Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-09-01T00:30:31.8165881Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:33.6096364Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:33.6097606Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:33.6098393Z         
2025-09-01T00:30:33.6099151Z         Error: error creating project: test-acc-tf-p-6649686982369069721
2025-09-01T00:30:33.6099749Z         
2025-09-01T00:30:33.6100341Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:33.6101533Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:33.6102628Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:33.6103384Z         
2025-09-01T00:30:33.6104251Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:33.6105434Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:33.6106575Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:33.6107829Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:33.6108538Z         BadRequestDetail: 
2025-09-01T00:30:33.8066510Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (2.00s)
```

  - PASS an hour
  - PASS an hour
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 24 minutes
  - PASS 25 minutes
- 2025-09-02 PASS 24 minutes
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 29 minutes