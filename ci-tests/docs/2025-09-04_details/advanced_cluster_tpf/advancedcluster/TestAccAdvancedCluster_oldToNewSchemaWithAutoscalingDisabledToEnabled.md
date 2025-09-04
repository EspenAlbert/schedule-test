# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 51 minutes
- 2025-08-08 PASS 30 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 41 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 40 minutes
- 2025-08-18 PASS 28 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - PASS 29 minutes
  - PASS 31 minutes
- 2025-08-21 PASS 29 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 55 minutes
- 2025-08-26 PASS 46 minutes
- 2025-08-27 PASS 50 minutes
- 2025-08-28 PASS 29 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 32 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7419792Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-09-01T00:30:49.7420234Z     shared_resource.go:93: 
2025-09-01T00:30:49.7421095Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7422899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7424609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7426310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7428153Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7430127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1221
2025-09-01T00:30:49.7430932Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7433800Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7435362Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-09-01T00:30:49.7437638Z         	Messages:   	Project creation failed: test-acc-tf-p-147104537489143530, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7439149Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (0.18s)
```

  - PASS an hour
  - PASS an hour
  - PASS 22 minutes
  - PASS 26 minutes
  - PASS 35 minutes
  - PASS 30 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 34 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 34 minutes