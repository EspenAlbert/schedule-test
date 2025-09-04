# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 34 minutes
- 2025-08-07 PASS 38 minutes
- 2025-08-08 PASS 30 minutes
- 2025-08-09 PASS 32 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 40 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 35 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 52 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 28 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 22 minutes
  - PASS 42 minutes
- 2025-08-21 PASS 22 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 20 minutes
- 2025-08-25 PASS 23 minutes
- 2025-08-26 PASS 36 minutes
- 2025-08-27 PASS 51 minutes
- 2025-08-28 PASS 32 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 32 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.1509342Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T00:30:43.2472684Z     shared_resource.go:93: 
2025-09-01T00:30:43.2474521Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.2477382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.2479424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.2481454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.2483478Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.2485772Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:960
2025-09-01T00:30:43.2486624Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.2489364Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.2490868Z         	Test:       	TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T00:30:43.2493211Z         	Messages:   	Project creation failed: test-acc-tf-p-1687509266814302182, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.2494765Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (0.10s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:45+00:00
```
2025-09-01T05:58:45.7571969Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T05:58:45.9291060Z     shared_resource.go:93: 
2025-09-01T05:58:45.9293252Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:45.9296785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:45.9298872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:45.9300768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:45.9302660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:45.9304797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:960
2025-09-01T05:58:45.9305671Z         	Error:      	Received unexpected error:
2025-09-01T05:58:45.9308585Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:45.9310013Z         	Test:       	TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-09-01T05:58:45.9312279Z         	Messages:   	Project creation failed: test-acc-tf-p-2507299963369121046, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:45.9313774Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (0.17s)
```

  - PASS an hour
  - PASS 23 minutes
  - PASS 30 minutes
  - PASS 28 minutes
  - PASS 30 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 28 minutes