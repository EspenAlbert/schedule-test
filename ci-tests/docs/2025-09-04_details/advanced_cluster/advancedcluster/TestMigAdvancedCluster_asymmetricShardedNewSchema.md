# advanced_cluster/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 3.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 34 minutes
- 2025-08-07 PASS 43 minutes
- 2025-08-08 PASS 27 minutes
- 2025-08-09 PASS 26 minutes
- 2025-08-10 PASS 31 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 24 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 19 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 59 minutes
- 2025-08-18 PASS 28 minutes
- 2025-08-19 PASS 26 minutes
- 2025-08-20
  - PASS 26 minutes
  - PASS 20 minutes
- 2025-08-21 PASS 19 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 20 minutes
- 2025-08-25 PASS 36 minutes
- 2025-08-26 PASS 25 minutes
- 2025-08-27 PASS 50 minutes
- 2025-08-28 PASS 20 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 23 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.6864772Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:44.5150252Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:47.5680333Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-01T00:30:47.5680998Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:47.5681458Z         
2025-09-01T00:30:47.5682144Z         Error: error creating project: test-acc-tf-p-6069968908842108084
2025-09-01T00:30:47.5682510Z         
2025-09-01T00:30:47.5682855Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:47.5683520Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:47.5684141Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:47.5684474Z         
2025-09-01T00:30:47.5684965Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:47.5686044Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:47.5686699Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:47.5687317Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:47.5687734Z         BadRequestDetail: 
2025-09-01T00:30:47.7546573Z   
2025-09-01T00:30:47.7613648Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (3.26s)
```

  - PASS 31 minutes
  - PASS an hour
  - PASS 20 minutes
  - PASS 23 minutes
  - PASS 35 minutes
  - PASS 17 minutes
  - PASS 23 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 25 minutes
- 2025-09-04 PASS 20 minutes