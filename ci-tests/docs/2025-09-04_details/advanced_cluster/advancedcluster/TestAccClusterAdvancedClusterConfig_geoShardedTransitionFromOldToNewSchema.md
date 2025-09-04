# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 40 minutes
- 2025-08-07 PASS 49 minutes
- 2025-08-08 PASS 30 minutes
- 2025-08-09 PASS 35 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 29 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 54 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 57 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 37 minutes
- 2025-08-19 PASS 34 minutes
- 2025-08-20
  - PASS 31 minutes
  - PASS 42 minutes
- 2025-08-21 PASS 35 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 58 minutes
- 2025-08-24 PASS 29 minutes
- 2025-08-25 PASS 42 minutes
- 2025-08-26 PASS 47 minutes
- 2025-08-27 PASS 38 minutes
- 2025-08-28 PASS 30 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 28 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.2495520Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T00:30:43.3576808Z     shared_resource.go:93: 
2025-09-01T00:30:43.3578409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.3581538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.3585085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.3587561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.3589351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.3591361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:983
2025-09-01T00:30:43.3592196Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.3594957Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.3596833Z         	Test:       	TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T00:30:43.3599177Z         	Messages:   	Project creation failed: test-acc-tf-p-2933535975154758598, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.3600726Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (0.11s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:45+00:00
```
2025-09-01T05:58:45.9314390Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T05:58:46.0916091Z     shared_resource.go:93: 
2025-09-01T05:58:46.0918677Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:46.0921578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:46.0923327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:46.0925036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:46.0926734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:46.0928823Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:983
2025-09-01T05:58:46.0929876Z         	Error:      	Received unexpected error:
2025-09-01T05:58:46.0932541Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.0934005Z         	Test:       	TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-09-01T05:58:46.0936318Z         	Messages:   	Project creation failed: test-acc-tf-p-4417805578642616337, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.0937983Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (0.16s)
```

  - PASS an hour
  - PASS 33 minutes
  - PASS 31 minutes
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 34 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 38 minutes
- 2025-09-04 PASS 35 minutes