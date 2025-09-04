# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priorityOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 22 minutes
- 2025-08-07 PASS 38 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 26 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 19 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 23 minutes
- 2025-08-14 PASS 22 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 49 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 22 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - PASS 22 minutes
  - PASS 25 minutes
- 2025-08-21 PASS 25 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 19 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 25 minutes
- 2025-08-27 PASS 29 minutes
- 2025-08-28 PASS 24 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 23 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.3603773Z === RUN   TestAccClusterAdvancedCluster_priorityOldSchema
2025-09-01T00:30:43.4807692Z     shared_resource.go:93: 
2025-09-01T00:30:43.4809106Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.4811132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.4813180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.4815349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.4817355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.4819513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1067
2025-09-01T00:30:43.4820363Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.4823450Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.4824849Z         	Test:       	TestAccClusterAdvancedCluster_priorityOldSchema
2025-09-01T00:30:43.4827254Z         	Messages:   	Project creation failed: test-acc-tf-p-9029073103128413450, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.4828727Z --- FAIL: TestAccClusterAdvancedCluster_priorityOldSchema (0.12s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:46+00:00
```
2025-09-01T05:58:46.0940919Z === RUN   TestAccClusterAdvancedCluster_priorityOldSchema
2025-09-01T05:58:46.2496789Z     shared_resource.go:93: 
2025-09-01T05:58:46.2498839Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:46.2501866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:46.2504031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:46.2506162Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:46.2508393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:46.2510733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1067
2025-09-01T05:58:46.2511676Z         	Error:      	Received unexpected error:
2025-09-01T05:58:46.2514892Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.2516241Z         	Test:       	TestAccClusterAdvancedCluster_priorityOldSchema
2025-09-01T05:58:46.2518567Z         	Messages:   	Project creation failed: test-acc-tf-p-2406444445897271123, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.2520130Z --- FAIL: TestAccClusterAdvancedCluster_priorityOldSchema (0.16s)
```

  - PASS an hour
  - PASS 23 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 19 minutes
- 2025-09-02 PASS 25 minutes
- 2025-09-03 PASS 34 minutes
- 2025-09-04 PASS 25 minutes