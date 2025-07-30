# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f0fd583001f9eee8f7/limits | qa | flaky_500 | 38.09s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a006d8d55bbaa4ffa/limits | qa | flaky_500 | 37.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 13 seconds
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 8 seconds
- 2025-07-04 PASS 7 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 7 seconds
- 2025-07-07 PASS 9 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 10 seconds
  - FAIL 38 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7767722Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-07-10T14:35:50.7809750Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-07-10T14:35:50.8087052Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-07-10T14:35:50.8087888Z     resource_advanced_cluster_test.go:920: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-10T14:35:50.8088388Z         
2025-07-10T14:35:50.8088746Z         Error: error when getting project properties after create
2025-07-10T14:35:50.8089062Z         
2025-07-10T14:35:50.8089508Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.8090150Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.8090727Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.8091018Z         
2025-07-10T14:35:50.8091444Z         error getting project (686fc0f0fd583001f9eee8f7): error getting project's
2025-07-10T14:35:50.8091879Z         limits (686fc0f0fd583001f9eee8f7):
2025-07-10T14:35:50.8092425Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f0fd583001f9eee8f7/limits
2025-07-10T14:35:50.8093060Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.8093608Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.8093971Z         BadRequestDetail: 
2025-07-10T14:35:50.8094425Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (38.87s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 10 seconds
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2205776Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-07-13T02:11:00.2269620Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-07-13T02:11:00.2500342Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-07-13T02:11:00.2501169Z     resource_advanced_cluster_test.go:920: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-13T02:11:00.2501670Z         
2025-07-13T02:11:00.2502023Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2502331Z         
2025-07-13T02:11:00.2502656Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2503289Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2503872Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2504166Z         
2025-07-13T02:11:00.2504585Z         error getting project (6873058a006d8d55bbaa4ffa): error getting project's
2025-07-13T02:11:00.2505019Z         limits (6873058a006d8d55bbaa4ffa):
2025-07-13T02:11:00.2505561Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a006d8d55bbaa4ffa/limits
2025-07-13T02:11:00.2506202Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2506752Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2507118Z         BadRequestDetail: 
2025-07-13T02:11:00.2508008Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (37.50s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 9 seconds
- 2025-07-16 PASS 9 seconds
- 2025-07-17 PASS 8 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20 PASS 7 seconds
- 2025-07-21 PASS 8 seconds
- 2025-07-22 PASS 9 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-07-24 PASS 7 seconds
- 2025-07-25 PASS 8 seconds
- 2025-07-26 PASS 8 seconds
- 2025-07-27 PASS 9 seconds
- 2025-07-28 PASS 9 seconds
- 2025-07-29 PASS 8 seconds
- 2025-07-30 PASS 10 seconds