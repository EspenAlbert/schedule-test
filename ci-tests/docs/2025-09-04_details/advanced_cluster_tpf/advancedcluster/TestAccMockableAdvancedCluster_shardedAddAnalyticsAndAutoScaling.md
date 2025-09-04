# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 48 minutes
- 2025-08-07 PASS 56 minutes
- 2025-08-08 PASS 52 minutes
- 2025-08-09 PASS 42 minutes
- 2025-08-10 PASS 58 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 42 minutes
  - PASS 29 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 40 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 41 minutes
- 2025-08-19 PASS 37 minutes
- 2025-08-20
  - PASS 39 minutes
  - PASS 33 minutes
- 2025-08-21 PASS 35 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 41 minutes
- 2025-08-24 PASS 31 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 44 minutes
- 2025-08-28 PASS 38 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 37 minutes
- 2025-08-31 PASS 38 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7459180Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-09-01T00:30:49.7459604Z     shared_resource.go:93: 
2025-09-01T00:30:49.7460591Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7462437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7464156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7465856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7467552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7469626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1340
2025-09-01T00:30:49.7470437Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7473287Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7474684Z         	Test:       	TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-09-01T00:30:49.7476954Z         	Messages:   	Project creation failed: test-acc-tf-p-1448763488941028341, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7478464Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (0.15s)
```

  - PASS an hour
  - PASS an hour
  - PASS 38 minutes
  - PASS 48 minutes
  - PASS 40 minutes
  - PASS 35 minutes
  - PASS 35 minutes
- 2025-09-02 PASS 41 minutes
- 2025-09-03 PASS 47 minutes
- 2025-09-04 PASS 37 minutes