# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 23 minutes
- 2025-08-07 PASS 39 minutes
- 2025-08-08 PASS 19 minutes
- 2025-08-09 PASS 35 minutes
- 2025-08-10 PASS 31 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 24 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 39 minutes
- 2025-08-14 PASS 26 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 45 minutes
- 2025-08-18 PASS 24 minutes
- 2025-08-19 PASS 26 minutes
- 2025-08-20
  - PASS 25 minutes
  - PASS 40 minutes
- 2025-08-21 PASS 34 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 23 minutes
- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 36 minutes
- 2025-08-27 PASS 35 minutes
- 2025-08-28 PASS 23 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.0383945Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T00:30:44.5138800Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T00:30:46.1430522Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T00:30:46.1431837Z     resource_advanced_cluster_test.go:887: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:46.1433019Z         
2025-09-01T00:30:46.1433943Z         Error: error creating project: test-acc-tf-p-2485246806847777238
2025-09-01T00:30:46.1434731Z         
2025-09-01T00:30:46.1435728Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.1437102Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.1438369Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.1439083Z         
2025-09-01T00:30:46.1440088Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.1441565Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.1443027Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.1444254Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.1476085Z         BadRequestDetail: 
2025-09-01T00:30:46.2446063Z    test_terraform_path=/home/runner/work/_temp/0e74e7ec-61f5-4f15-87a7-893f44f3733e/terraform test_working_directory=/tmp/plugintest3152089046
2025-09-01T00:30:46.3912817Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1.89s)
```

  - PASS 34 minutes
  - PASS an hour
  - PASS 28 minutes
  - PASS 18 minutes
  - PASS 25 minutes
  - PASS 21 minutes
  - PASS 23 minutes
- 2025-09-02 PASS 25 minutes
- 2025-09-03 PASS 27 minutes
- 2025-09-04 PASS 17 minutes