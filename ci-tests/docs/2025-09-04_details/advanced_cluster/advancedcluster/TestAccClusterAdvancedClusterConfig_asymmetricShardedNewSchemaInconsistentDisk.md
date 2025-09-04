# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS 37 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15: MISSING
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 30 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22: MISSING
- 2025-08-23 PASS 10 seconds
- 2025-08-24 PASS 8 seconds
- 2025-08-25 PASS 8 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28 PASS 3 seconds
- 2025-08-29: MISSING
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 33 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.0385056Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T00:30:44.5122415Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T00:30:46.1307784Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T00:30:46.1309368Z     resource_advanced_cluster_test.go:922: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T00:30:46.1310287Z         
2025-09-01T00:30:46.1311009Z         Error: error creating project: test-acc-tf-p-3506412894915035541
2025-09-01T00:30:46.1311621Z         
2025-09-01T00:30:46.1312226Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.1313423Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.1314517Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.1315078Z         
2025-09-01T00:30:46.1316083Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.1317258Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.1318380Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.1319465Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.1320170Z         BadRequestDetail: 
2025-09-01T00:30:46.1429824Z   
2025-09-01T00:30:46.3677501Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (1.87s)
```

  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds