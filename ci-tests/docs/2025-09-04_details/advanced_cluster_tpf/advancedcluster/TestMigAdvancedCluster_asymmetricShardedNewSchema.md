# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da14192cd1cc58a05b4/limits | qa | flaky_500 | 38.05s
[2025-08-30 03:28](#error-2025-08-30t0328110000) |  | dev |  | 12.07s
[2025-08-31 01:41](#error-2025-08-31t0141270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397ec7e07f9709daf018c/limits | qa | flaky_500 | 39.05s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.02s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 5.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 42 minutes
- 2025-08-08 PASS 23 minutes
- 2025-08-09 PASS 37 minutes
- 2025-08-10 PASS an hour
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 26 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 54 minutes
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 26 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 41 minutes
- 2025-08-21 PASS 30 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 24 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1316010Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-24T03:34:47.1483632Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-24T03:34:47.1699840Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-24T03:34:47.1700667Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-08-24T03:34:47.1701105Z         
2025-08-24T03:34:47.1701472Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1701798Z         
2025-08-24T03:34:47.1702123Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1702759Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1703496Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1703804Z         
2025-08-24T03:34:47.1704236Z         error getting project (68aa5da14192cd1cc58a05b4): error getting project's
2025-08-24T03:34:47.1704678Z         limits (68aa5da14192cd1cc58a05b4):
2025-08-24T03:34:47.1705235Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da14192cd1cc58a05b4/limits
2025-08-24T03:34:47.1705881Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1706438Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1706808Z         BadRequestDetail: 
2025-08-24T03:34:47.1707148Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (38.46s)
```

- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 35 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T03:28:11+00:00
```
2025-08-30T03:28:11.7794000Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-30T03:28:11.7963564Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-30T03:28:11.8031376Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-30T03:28:11.8032484Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-08-30T03:28:11.8033260Z         
2025-08-30T03:28:11.8033687Z         Error: Error in create
2025-08-30T03:28:11.8034090Z         
2025-08-30T03:28:11.8034647Z           with mongodbatlas_advanced_cluster.test,
2025-08-30T03:28:11.8035783Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-30T03:28:11.8036817Z           19: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-30T03:28:11.8037345Z         
2025-08-30T03:28:11.8038059Z         cluster name: test-acc-tf-c-4170407237596258905, API error details:
2025-08-30T03:28:11.8039402Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b2459287c22161ee8f3851/clusters
2025-08-30T03:28:11.8040319Z         POST: HTTP 403 Forbidden (Error code:
2025-08-30T03:28:11.8041211Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-30T03:28:11.8042243Z         Configuration. Contains selections that are unavailable due to your
2025-08-30T03:28:11.8043258Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-30T03:28:11.8043914Z         BadRequestDetail: 
2025-08-30T03:28:11.8044497Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (12.69s)
```

- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0774475Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-31T01:41:27.0866537Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-31T01:41:27.0936354Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-31T01:41:27.0936997Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-08-31T01:41:27.0937427Z         
2025-08-31T01:41:27.0937792Z         Error: error when getting project properties after create
2025-08-31T01:41:27.0938104Z         
2025-08-31T01:41:27.0938432Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:41:27.0939086Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:41:27.0939687Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:41:27.0939984Z         
2025-08-31T01:41:27.0940413Z         error getting project (68b397ec7e07f9709daf018c): error getting project's
2025-08-31T01:41:27.0940858Z         limits (68b397ec7e07f9709daf018c):
2025-08-31T01:41:27.0941419Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397ec7e07f9709daf018c/limits
2025-08-31T01:41:27.0942072Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:41:27.0942635Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:41:27.0943009Z         BadRequestDetail: 
2025-08-31T01:41:27.0955033Z    test_terraform_path=/home/runner/work/_temp/f29e40f0-b23d-46ce-989c-fa13eb7fb206/terraform test_working_directory=/tmp/plugintest2093325871 test_name=TestAccClusterAdvancedCluster_withLabels test_step_number=1
2025-08-31T01:41:27.0963496Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (39.51s)
```

- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6746782Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:49.7554174Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:49.7766765Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:49.7767387Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:49.7767836Z         
2025-09-01T00:30:49.7768225Z         Error: error creating project: test-acc-tf-p-8150374431357342255
2025-09-01T00:30:49.7768558Z         
2025-09-01T00:30:49.7769017Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7769656Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7770247Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7770550Z         
2025-09-01T00:30:49.7771002Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7771842Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7772448Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7773032Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7773433Z         BadRequestDetail: 
2025-09-01T00:30:49.7779923Z    test_working_directory=/tmp/plugintest4115701934 test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/a4685d55-a02f-41f0-96ef-d09228d8abbb/terraform
2025-09-01T00:30:49.7787931Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (3.17s)
```

  - FAIL 5 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6487073Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T07:49:13.6713665Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T07:49:13.6899369Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T07:49:13.6899982Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-09-01T07:49:13.6900415Z         
2025-09-01T07:49:13.6900811Z         Error: error creating project: test-acc-tf-p-3339985683973967437
2025-09-01T07:49:13.6901145Z         
2025-09-01T07:49:13.6901468Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6902109Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6902825Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6903130Z         
2025-09-01T07:49:13.6903584Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6904225Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6904830Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6905421Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6905814Z         BadRequestDetail: 
2025-09-01T07:49:13.6906578Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (5.77s)
```

  - PASS an hour
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 35 minutes
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 29 minutes
- 2025-09-03 PASS 24 minutes
- 2025-09-04 PASS 25 minutes