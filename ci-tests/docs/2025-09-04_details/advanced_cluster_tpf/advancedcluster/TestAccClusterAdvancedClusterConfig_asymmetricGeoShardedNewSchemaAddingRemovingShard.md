# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 46 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS an hour
- 2025-08-09 PASS 48 minutes
- 2025-08-10 PASS 51 minutes
- 2025-08-11 PASS 3 hours
- 2025-08-12
  - PASS 47 minutes
  - PASS 35 minutes
- 2025-08-13 PASS 38 minutes
- 2025-08-14 PASS 47 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 59 minutes
- 2025-08-18 PASS 42 minutes
- 2025-08-19 PASS 44 minutes
- 2025-08-20
  - PASS 46 minutes
  - PASS an hour
- 2025-08-21 PASS 45 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 45 minutes
- 2025-08-24 PASS 48 minutes
- 2025-08-25 PASS 50 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 51 minutes
- 2025-08-28 PASS 43 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 45 minutes
- 2025-08-31 PASS 44 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7278088Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T00:30:49.7278596Z     shared_resource.go:93: 
2025-09-01T00:30:49.7279485Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7281180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7283138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7284858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7286557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7288489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:936
2025-09-01T00:30:49.7289298Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7292170Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7293862Z         	Test:       	TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T00:30:49.7296218Z         	Messages:   	Project creation failed: test-acc-tf-p-2142832025847674830, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7297799Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.15s)
```

  - FAIL a moment

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6571335Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T07:49:13.6572248Z     shared_resource.go:93: 
2025-09-01T07:49:13.6573841Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T07:49:13.6577063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T07:49:13.6580508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T07:49:13.6583750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T07:49:13.6587018Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T07:49:13.6591918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:936
2025-09-01T07:49:13.6593406Z         	Error:      	Received unexpected error:
2025-09-01T07:49:13.6598450Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6601391Z         	Test:       	TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-09-01T07:49:13.6605792Z         	Messages:   	Project creation failed: test-acc-tf-p-8570158392464490748, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6608649Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.11s)
```

  - PASS an hour
  - PASS 45 minutes
  - PASS 46 minutes
  - PASS 37 minutes
  - PASS 42 minutes
  - PASS 44 minutes
- 2025-09-02 PASS 47 minutes
- 2025-09-03 PASS 59 minutes
- 2025-09-04 PASS 46 minutes