# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 42 minutes
- 2025-08-08 PASS 35 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 33 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 28 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 30 minutes
- 2025-08-14 PASS 35 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 26 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 26 minutes
- 2025-08-21 PASS 29 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 35 minutes
- 2025-08-24 PASS 28 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 40 minutes
- 2025-08-27 PASS 40 minutes
- 2025-08-28 PASS 29 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7298463Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T00:30:49.7299022Z     shared_resource.go:93: 
2025-09-01T00:30:49.7299888Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7301700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7303418Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7305115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7306816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7308751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:960
2025-09-01T00:30:49.7309562Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7312419Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7313871Z         	Test:       	TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T00:30:49.7316152Z         	Messages:   	Project creation failed: test-acc-tf-p-5528932196563985140, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7317679Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (0.16s)
```

  - FAIL a moment

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6610131Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T07:49:13.6610821Z     shared_resource.go:93: 
2025-09-01T07:49:13.6611975Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T07:49:13.6614191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T07:49:13.6616656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T07:49:13.6619223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T07:49:13.6621432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T07:49:13.6623931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:960
2025-09-01T07:49:13.6625175Z         	Error:      	Received unexpected error:
2025-09-01T07:49:13.6629056Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6630791Z         	Test:       	TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T07:49:13.6633142Z         	Messages:   	Project creation failed: test-acc-tf-p-6024016245499235799, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6634690Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (0.13s)
```

  - PASS an hour
  - PASS 32 minutes
  - PASS 22 minutes
  - PASS 24 minutes
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 31 minutes
- 2025-09-03 PASS 42 minutes
- 2025-09-04 PASS 34 minutes