# advanced_cluster/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 34 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 28 minutes
- 2025-08-09 PASS 26 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 30 minutes
- 2025-08-14 PASS 26 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 51 minutes
- 2025-08-17 PASS 35 minutes
- 2025-08-18 PASS 30 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 27 minutes
- 2025-08-21 PASS 25 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 33 minutes
- 2025-08-24 PASS 28 minutes
- 2025-08-25 PASS 31 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 33 minutes
- 2025-08-28 PASS 26 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.7063325Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-09-01T00:30:43.7996433Z     shared_resource.go:93: 
2025-09-01T00:30:43.7998322Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.8000680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.8003072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.8005352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.8007367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.8009676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1200
2025-09-01T00:30:43.8010638Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.8013755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.8015371Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-09-01T00:30:43.8017668Z         	Messages:   	Project creation failed: test-acc-tf-p-6645661686116279531, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.8019174Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (0.10s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:46+00:00
```
2025-09-01T05:58:46.5681414Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-09-01T05:58:46.7388331Z     shared_resource.go:93: 
2025-09-01T05:58:46.7389837Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:46.7392137Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:46.7393968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:46.7395744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:46.7397648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:46.7399679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1200
2025-09-01T05:58:46.7400517Z         	Error:      	Received unexpected error:
2025-09-01T05:58:46.7403236Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.7404589Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-09-01T05:58:46.7406837Z         	Messages:   	Project creation failed: test-acc-tf-p-21158664688706673, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.7408402Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (0.17s)
```

  - PASS an hour
  - PASS 30 minutes
  - PASS 23 minutes
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 43 minutes
- 2025-09-04 PASS 35 minutes