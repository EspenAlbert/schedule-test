# advanced_cluster/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 49 minutes
- 2025-08-08 PASS 31 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 29 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 57 minutes
- 2025-08-17 PASS 40 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - PASS 31 minutes
  - PASS 29 minutes
- 2025-08-21 PASS 38 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 33 minutes
- 2025-08-24 PASS 28 minutes
- 2025-08-25 PASS 30 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 33 minutes
- 2025-08-28 PASS 32 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.8019768Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-09-01T00:30:43.9221062Z     shared_resource.go:93: 
2025-09-01T00:30:43.9222822Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.9224764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.9226809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.9228661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.9230525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.9232664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1221
2025-09-01T00:30:43.9233578Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.9236602Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.9238238Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-09-01T00:30:43.9240582Z         	Messages:   	Project creation failed: test-acc-tf-p-39178654620900575, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.9242127Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (0.12s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:46+00:00
```
2025-09-01T05:58:46.7409156Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-09-01T05:58:46.9013865Z     shared_resource.go:93: 
2025-09-01T05:58:46.9015538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:46.9017781Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:46.9019842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:46.9021858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:46.9023890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:46.9026043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1221
2025-09-01T05:58:46.9027090Z         	Error:      	Received unexpected error:
2025-09-01T05:58:46.9029853Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.9031297Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-09-01T05:58:46.9033593Z         	Messages:   	Project creation failed: test-acc-tf-p-6231008039171084013, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.9035112Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (0.16s)
```

  - PASS an hour
  - PASS 30 minutes
  - PASS 23 minutes
  - PASS 27 minutes
  - PASS 30 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 34 minutes
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 35 minutes