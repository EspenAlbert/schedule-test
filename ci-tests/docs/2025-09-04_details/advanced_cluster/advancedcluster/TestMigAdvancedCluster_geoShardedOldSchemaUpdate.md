# advanced_cluster/advancedcluster/TestMigAdvancedCluster_geoShardedOldSchemaUpdate Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 41 minutes
- 2025-08-07 PASS 53 minutes
- 2025-08-08 PASS 43 minutes
- 2025-08-09 PASS 42 minutes
- 2025-08-10 PASS 52 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 38 minutes
  - PASS 30 minutes
- 2025-08-13 PASS 43 minutes
- 2025-08-14 PASS 46 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 57 minutes
- 2025-08-18 PASS 39 minutes
- 2025-08-19 PASS 38 minutes
- 2025-08-20
  - PASS 45 minutes
  - PASS 32 minutes
- 2025-08-21 PASS 52 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 47 minutes
- 2025-08-24 PASS an hour
- 2025-08-25 PASS 30 minutes
- 2025-08-26 PASS 42 minutes
- 2025-08-27 PASS 44 minutes
- 2025-08-28 PASS 38 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 38 minutes
- 2025-08-31 PASS 47 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.8096120Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-09-01T00:30:37.9146462Z     shared_resource.go:93: 
2025-09-01T00:30:37.9148810Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:37.9152132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:37.9154278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:37.9156929Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:37.9158962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:37.9161352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:79
2025-09-01T00:30:37.9162347Z         	Error:      	Received unexpected error:
2025-09-01T00:30:37.9165353Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.9166756Z         	Test:       	TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-09-01T00:30:37.9169157Z         	Messages:   	Project creation failed: test-acc-tf-p-5490476089107802670, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.9170616Z --- FAIL: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (0.11s)
```

  - PASS 38 minutes
  - PASS an hour
  - PASS 38 minutes
  - PASS 38 minutes
  - PASS 36 minutes
  - PASS 36 minutes
  - PASS 35 minutes
- 2025-09-02 PASS 41 minutes
- 2025-09-03 PASS 48 minutes
- 2025-09-04 PASS 41 minutes