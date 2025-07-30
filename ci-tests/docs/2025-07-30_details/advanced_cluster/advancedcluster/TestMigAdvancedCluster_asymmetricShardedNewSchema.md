# advanced_cluster/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3) TIMEOUT
Success rate: 91.43%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:30](#error-2025-07-11t0030000000) |  | dev |  | 6532.00s
[2025-07-20 00:33](#error-2025-07-20t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4006426db7026b5b4ae0/limits | qa | flaky_500 | 40.04s
[2025-07-23 08:15](#error-2025-07-23t0815300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880ca3ffc917074205c1205/limits | qa | flaky_500 | 1817.07s
[2025-07-27 00:33](#error-2025-07-27t0033430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857b21ef1f7377717ac109/limits | qa | flaky_500 | 1513.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 17 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 13 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 17 minutes
- 2025-07-11

### Error 2025-07-11T00:30:00+00:00
```
2025-07-11T00:30:00.4625960Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-11T03:41:02.0468741Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-11T05:29:53.6628062Z 		TestAccMockableAdvancedCluster_symmetricShardedOldSchema (1h48m52s)
2025-07-11T05:29:53.6629241Z 		TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (1h48m52s)
2025-07-11T05:29:53.6630329Z 		TestMigAdvancedCluster_asymmetricShardedNewSchema (1h48m52s)
```

- 2025-07-12 PASS 18 minutes
- 2025-07-13 PASS 23 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 19 minutes
- 2025-07-18 PASS 17 minutes
- 2025-07-19 PASS 17 minutes
- 2025-07-20

### Error 2025-07-20T00:33:15+00:00
```
2025-07-20T00:33:15.2848847Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-20T01:01:52.4234928Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-20T01:02:32.6652939Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-20T01:02:32.6653667Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-20T01:02:32.6654134Z         
2025-07-20T01:02:32.6654611Z         Error: error when getting project properties after create
2025-07-20T01:02:32.6654952Z         
2025-07-20T01:02:32.6655946Z           with mongodbatlas_project.cluster_project,
2025-07-20T01:02:32.6657126Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T01:02:32.6658104Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T01:02:32.6658458Z         
2025-07-20T01:02:32.6658977Z         error getting project (687c4006426db7026b5b4ae0): error getting project's
2025-07-20T01:02:32.6659431Z         limits (687c4006426db7026b5b4ae0):
2025-07-20T01:02:32.6660106Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4006426db7026b5b4ae0/limits
2025-07-20T01:02:32.6660855Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:02:32.6661509Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:02:32.6662180Z         BadRequestDetail: 
2025-07-20T01:02:32.8617364Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (40.44s)
```

- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 16 minutes
- 2025-07-23
  - PASS 12 minutes
  - FAIL 30 minutes

### Error 2025-07-23T08:15:30+00:00
```
2025-07-23T08:15:30.0743387Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-23T11:40:40.7234612Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-23T12:07:56.1435769Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-23T12:07:56.1436592Z     resource_advanced_cluster_migration_test.go:35: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-07-23T12:07:56.1437161Z         
2025-07-23T12:07:56.1437645Z         Error: error when getting project properties after create
2025-07-23T12:07:56.1437977Z         
2025-07-23T12:07:56.1438429Z           with mongodbatlas_project.cluster_project,
2025-07-23T12:07:56.1439342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T12:07:56.1439941Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T12:07:56.1440253Z         
2025-07-23T12:07:56.1440692Z         error getting project (6880ca3ffc917074205c1205): error getting project's
2025-07-23T12:07:56.1441154Z         limits (6880ca3ffc917074205c1205):
2025-07-23T12:07:56.1441914Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880ca3ffc917074205c1205/limits
2025-07-23T12:07:56.1442559Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T12:07:56.1443127Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T12:07:56.1443503Z         BadRequestDetail: 
2025-07-23T12:10:58.3772761Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (1817.66s)
```

  - PASS 13 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 22 minutes
- 2025-07-25 PASS 16 minutes
- 2025-07-26 PASS 23 minutes
- 2025-07-27

### Error 2025-07-27T00:33:43+00:00
```
2025-07-27T00:33:43.9115700Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-27T01:04:27.1025930Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-27T01:24:47.3519471Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-27T01:24:47.3520285Z     resource_advanced_cluster_migration_test.go:35: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:24:47.3520792Z         
2025-07-27T01:24:47.3521257Z         Error: error when getting project properties after create
2025-07-27T01:24:47.3521580Z         
2025-07-27T01:24:47.3522226Z           with mongodbatlas_project.cluster_project,
2025-07-27T01:24:47.3523032Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-27T01:24:47.3523760Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-27T01:24:47.3524075Z         
2025-07-27T01:24:47.3524502Z         error getting project (68857b21ef1f7377717ac109): error getting project's
2025-07-27T01:24:47.3524934Z         limits (68857b21ef1f7377717ac109):
2025-07-27T01:24:47.3525486Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857b21ef1f7377717ac109/limits
2025-07-27T01:24:47.3526120Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:24:47.3526667Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:24:47.3527046Z         BadRequestDetail: 
2025-07-27T01:29:40.2809206Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (1513.18s)
```

- 2025-07-28 PASS 16 minutes
- 2025-07-29 PASS 21 minutes
- 2025-07-30 PASS 18 minutes