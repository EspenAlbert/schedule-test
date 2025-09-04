# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 37 TestRuns in dev, qa from 2025-08-05 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 13:58](#error-2025-08-20t1358560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4a2f98188003c99a37a/limits | qa | flaky_500 | 832.08s
[2025-08-24 00:30](#error-2025-08-24t0030570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d434192cd1cc589da9f/limits | qa | flaky_500 | 36.02s
[2025-09-01 00:30](#error-2025-09-01t0030310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s

## Timeline
- 2025-08-05
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-08-06 PASS 20 minutes
- 2025-08-07 PASS 32 minutes
- 2025-08-08 PASS 18 minutes
- 2025-08-09 PASS 21 minutes
- 2025-08-10 PASS 29 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 25 minutes
- 2025-08-13 PASS 19 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 44 minutes
- 2025-08-17 PASS 29 minutes
- 2025-08-18 PASS 23 minutes
- 2025-08-19 PASS 21 minutes
- 2025-08-20
  - PASS 19 minutes
  - FAIL 13 minutes

### Error 2025-08-20T13:58:56+00:00
```
2025-08-20T13:58:56.5383420Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-20T13:58:56.5384378Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-08-20T13:58:56.5428451Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-20T14:09:44.8380135Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-20T14:09:44.8380881Z     resource_advanced_cluster_migration_test.go:35: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:09:44.8381389Z         
2025-08-20T14:09:44.8381777Z         Error: error when getting project properties after create
2025-08-20T14:09:44.8382111Z         
2025-08-20T14:09:44.8382459Z           with mongodbatlas_project.cluster_project,
2025-08-20T14:09:44.8383574Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-20T14:09:44.8384198Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-20T14:09:44.8384513Z         
2025-08-20T14:09:44.8384975Z         error getting project (68a5d4a2f98188003c99a37a): error getting project's
2025-08-20T14:09:44.8385430Z         limits (68a5d4a2f98188003c99a37a):
2025-08-20T14:09:44.8386011Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4a2f98188003c99a37a/limits
2025-08-20T14:09:44.8386681Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:09:44.8387263Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:09:44.8387649Z         BadRequestDetail: 
2025-08-20T14:12:49.3690548Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (832.83s)
```

- 2025-08-21 PASS 20 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 25 minutes
- 2025-08-24

### Error 2025-08-24T00:30:57+00:00
```
2025-08-24T00:30:57.4286244Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-24T00:30:57.4287147Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-08-24T00:30:57.4340914Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-24T00:31:33.4380893Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-08-24T00:31:33.4382079Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:31:33.4382848Z         
2025-08-24T00:31:33.4383533Z         Error: error when getting project properties after create
2025-08-24T00:31:33.4384105Z         
2025-08-24T00:31:33.4384656Z           with mongodbatlas_project.cluster_project,
2025-08-24T00:31:33.4385859Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T00:31:33.4387162Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-24T00:31:33.4387696Z         
2025-08-24T00:31:33.4388488Z         error getting project (68aa5d434192cd1cc589da9f): error getting project's
2025-08-24T00:31:33.4389317Z         limits (68aa5d434192cd1cc589da9f):
2025-08-24T00:31:33.4390352Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d434192cd1cc589da9f/limits
2025-08-24T00:31:33.4391568Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:31:33.4392635Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:31:33.4393346Z         BadRequestDetail: 
2025-08-24T00:31:33.6215777Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (36.19s)
```

- 2025-08-25 PASS 33 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 26 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 18 minutes
- 2025-08-31 PASS 16 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:31+00:00
```
2025-09-01T00:30:31.8147579Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:31.8148157Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-09-01T00:30:31.8166540Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:33.6070630Z   
2025-09-01T00:30:33.6071531Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:33.6072308Z         
2025-09-01T00:30:33.6073025Z         Error: error creating project: test-acc-tf-p-4114098570886666308
2025-09-01T00:30:33.6073625Z         
2025-09-01T00:30:33.6074202Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:33.6075357Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:33.6076402Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:33.6076920Z         
2025-09-01T00:30:33.6077915Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:33.6079045Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:33.6080104Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:33.6081186Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:33.6081910Z         BadRequestDetail: 
2025-09-01T00:30:33.6095726Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:33.8037914Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (1.99s)
```

  - PASS an hour
  - PASS an hour
  - PASS 21 minutes
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 23 minutes
- 2025-09-03 PASS 25 minutes
- 2025-09-04 PASS 15 minutes