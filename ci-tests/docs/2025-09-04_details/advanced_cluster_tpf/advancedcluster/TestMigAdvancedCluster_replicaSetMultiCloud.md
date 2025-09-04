# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 15:21](#error-2025-08-20t1521230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d5125734606989a36d6c/limits | qa | flaky_500 | 1880.04s
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da19bbb8c4ee1f85df0/limits | qa | flaky_500 | 38.08s
[2025-08-30 03:28](#error-2025-08-30t0328110000) |  | dev | timeout | 10811.03s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.02s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 5.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 40 minutes
- 2025-08-08 PASS 26 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 34 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 42 minutes
- 2025-08-14 PASS 33 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 59 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 23 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 35 minutes
  - FAIL 31 minutes

### Error 2025-08-20T15:21:23+00:00
```
2025-08-20T15:21:23.7877191Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-20T15:21:23.8042406Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-20T15:21:23.8278576Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-20T15:21:23.8279222Z     resource_advanced_cluster_migration_test.go:22: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-20T15:21:23.8279699Z         
2025-08-20T15:21:23.8280088Z         Error: error when getting project properties after create
2025-08-20T15:21:23.8280421Z         
2025-08-20T15:21:23.8280760Z           with mongodbatlas_project.cluster_project,
2025-08-20T15:21:23.8281607Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-20T15:21:23.8282225Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-20T15:21:23.8282545Z         
2025-08-20T15:21:23.8282990Z         error getting project (68a5d5125734606989a36d6c): error getting project's
2025-08-20T15:21:23.8283550Z         limits (68a5d5125734606989a36d6c):
2025-08-20T15:21:23.8284138Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d5125734606989a36d6c/limits
2025-08-20T15:21:23.8284809Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T15:21:23.8285390Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T15:21:23.8285779Z         BadRequestDetail: 
2025-08-20T15:21:23.8297145Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1880.37s)
```

- 2025-08-21 PASS 36 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 35 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1311360Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-24T03:34:47.1490709Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-24T03:34:47.1735862Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-24T03:34:47.1736460Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-24T03:34:47.1736904Z         
2025-08-24T03:34:47.1737280Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1737598Z         
2025-08-24T03:34:47.1737927Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1738678Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1739266Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1739569Z         
2025-08-24T03:34:47.1740007Z         error getting project (68aa5da19bbb8c4ee1f85df0): error getting project's
2025-08-24T03:34:47.1740459Z         limits (68aa5da19bbb8c4ee1f85df0):
2025-08-24T03:34:47.1741024Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da19bbb8c4ee1f85df0/limits
2025-08-24T03:34:47.1741684Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1742242Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1742620Z         BadRequestDetail: 
2025-08-24T03:34:47.1765129Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (38.83s)
```

- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 50 minutes
- 2025-08-28 PASS 34 minutes
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T03:28:11+00:00
```
2025-08-30T03:28:11.7789577Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:28:11.7964918Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:28:11.8290405Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:28:11.8290993Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-30T03:28:11.8291416Z         
2025-08-30T03:28:11.8291649Z         Error: Error in create
2025-08-30T03:28:11.8291882Z         
2025-08-30T03:28:11.8292187Z           with mongodbatlas_advanced_cluster.test,
2025-08-30T03:28:11.8292812Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-30T03:28:11.8293377Z           19: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-30T03:28:11.8293668Z         
2025-08-30T03:28:11.8294101Z         cluster=test-acc-tf-c-7547472892934817706 didn't reach desired state: IDLE,
2025-08-30T03:28:11.8294691Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-08-30T03:28:11.8295103Z         'CREATING', timeout: 3h0m0s)
2025-08-30T03:28:11.8301129Z   
2025-08-30T03:28:11.8301573Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-30T03:28:11.8301992Z         
2025-08-30T03:28:11.8302272Z         Error: error when destroying resource
2025-08-30T03:28:11.8302532Z         
2025-08-30T03:28:11.8302845Z         error deleting project (68b2459287c22161ee8f374f):
2025-08-30T03:28:11.8303556Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b2459287c22161ee8f374f
2025-08-30T03:28:11.8304030Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-30T03:28:11.8304547Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-08-30T03:28:11.8305147Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-08-30T03:28:11.8305571Z         Params: [], BadRequestDetail: 
2025-08-30T03:28:11.8305930Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10811.34s)
```

- 2025-08-31 PASS 33 minutes
- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6698410Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:49.7552305Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:49.7780750Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:49.7781441Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:49.7781877Z         
2025-09-01T00:30:49.7782270Z         Error: error creating project: test-acc-tf-p-3931167245158449303
2025-09-01T00:30:49.7782609Z         
2025-09-01T00:30:49.7782929Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7783632Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7784368Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7784675Z         
2025-09-01T00:30:49.7785128Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7785759Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7786489Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7787086Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7787476Z         BadRequestDetail: 
2025-09-01T00:30:49.7788468Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3.18s)
```

  - FAIL 5 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6482170Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T07:49:13.6724747Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T07:49:13.6885264Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T07:49:13.6885857Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T07:49:13.6886295Z         
2025-09-01T07:49:13.6886692Z         Error: error creating project: test-acc-tf-p-7506506077538826883
2025-09-01T07:49:13.6887027Z         
2025-09-01T07:49:13.6887352Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6887989Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6888585Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6889114Z         
2025-09-01T07:49:13.6889582Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6890220Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6890825Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6891411Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6891807Z         BadRequestDetail: 
2025-09-01T07:49:13.6898622Z    test_working_directory=/tmp/plugintest4005736563 test_step_number=1 test_name=TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T07:49:13.6906133Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (5.71s)
```

  - PASS an hour
  - PASS 31 minutes
  - PASS 35 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 32 minutes
- 2025-09-02 PASS 35 minutes
- 2025-09-03 PASS 40 minutes
- 2025-09-04 PASS 31 minutes