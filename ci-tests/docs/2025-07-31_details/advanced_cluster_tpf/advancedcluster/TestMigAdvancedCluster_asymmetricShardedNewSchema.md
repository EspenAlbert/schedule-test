# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f1fd583001f9eeeb61/limits | qa | flaky_500 | 38.08s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a006d8d55bbaa5257/limits | qa | flaky_500 | 37.07s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10
  - PASS 13 minutes
  - FAIL 38 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7711411Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-10T14:35:50.7798754Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-10T14:35:50.8066200Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-10T14:35:50.8066810Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-10T14:35:50.8067368Z         
2025-07-10T14:35:50.8067737Z         Error: error when getting project properties after create
2025-07-10T14:35:50.8068043Z         
2025-07-10T14:35:50.8068361Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.8068987Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.8069560Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.8069847Z         
2025-07-10T14:35:50.8070265Z         error getting project (686fc0f1fd583001f9eeeb61): error getting project's
2025-07-10T14:35:50.8070699Z         limits (686fc0f1fd583001f9eeeb61):
2025-07-10T14:35:50.8071246Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f1fd583001f9eeeb61/limits
2025-07-10T14:35:50.8071886Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.8072599Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.8072966Z         BadRequestDetail: 
2025-07-10T14:35:50.8073723Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (38.79s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 15 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2156950Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-13T02:11:00.2262484Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-13T02:11:00.2516836Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-13T02:11:00.2517568Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-13T02:11:00.2518117Z         
2025-07-13T02:11:00.2518477Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2518909Z         
2025-07-13T02:11:00.2519410Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2520144Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2521005Z           14: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2521427Z         
2025-07-13T02:11:00.2521850Z         error getting project (6873058a006d8d55bbaa5257): error getting project's
2025-07-13T02:11:00.2522412Z         limits (6873058a006d8d55bbaa5257):
2025-07-13T02:11:00.2523077Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a006d8d55bbaa5257/limits
2025-07-13T02:11:00.2523825Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2524408Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2524871Z         BadRequestDetail: 
2025-07-13T02:11:00.2525231Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (37.70s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 16 minutes
- 2025-07-19 PASS 12 minutes
- 2025-07-20 PASS 15 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 13 minutes
- 2025-07-25 PASS 16 minutes
- 2025-07-26 PASS 19 minutes
- 2025-07-27 PASS 20 minutes
- 2025-07-28 PASS 36 minutes
- 2025-07-29 PASS 24 minutes
- 2025-07-30 PASS 20 minutes
- 2025-07-31 PASS 31 minutes