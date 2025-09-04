# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 44 minutes
- 2025-08-07 PASS 59 minutes
- 2025-08-08 PASS 36 minutes
- 2025-08-09 PASS 42 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 49 minutes
  - PASS 29 minutes
- 2025-08-13 PASS 49 minutes
- 2025-08-14 PASS 41 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 51 minutes
- 2025-08-18 PASS 41 minutes
- 2025-08-19 PASS 38 minutes
- 2025-08-20
  - PASS 36 minutes
  - PASS 53 minutes
- 2025-08-21 PASS 35 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 42 minutes
- 2025-08-24 PASS 49 minutes
- 2025-08-25 PASS 35 minutes
- 2025-08-26 PASS 53 minutes
- 2025-08-27 PASS 44 minutes
- 2025-08-28 PASS 34 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 36 minutes
- 2025-08-31 PASS 53 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.6574648Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-09-01T00:30:42.7672813Z     shared_resource.go:93: 
2025-09-01T00:30:42.7674688Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:42.7677141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:42.7679317Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:42.7681479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:42.7683998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:42.7686240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:785
2025-09-01T00:30:42.7687070Z         	Error:      	Received unexpected error:
2025-09-01T00:30:42.7689811Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.7691225Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-09-01T00:30:42.7693567Z         	Messages:   	Project creation failed: test-acc-tf-p-7626113785199770615, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.7695333Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (0.11s)
```

  - PASS 37 minutes
  - PASS an hour
  - PASS 42 minutes
  - PASS 32 minutes
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS 34 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 45 minutes
- 2025-09-04 PASS 38 minutes