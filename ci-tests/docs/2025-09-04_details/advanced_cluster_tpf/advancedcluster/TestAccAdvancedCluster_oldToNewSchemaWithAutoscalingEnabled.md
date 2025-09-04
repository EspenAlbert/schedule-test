# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 47 minutes
- 2025-08-08 PASS 35 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 42 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 27 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 28 minutes
- 2025-08-21 PASS 36 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 35 minutes
- 2025-08-24 PASS 26 minutes
- 2025-08-25 PASS 50 minutes
- 2025-08-26 PASS 46 minutes
- 2025-08-27 PASS 39 minutes
- 2025-08-28 PASS 23 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 28 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7400099Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-09-01T00:30:49.7400507Z     shared_resource.go:93: 
2025-09-01T00:30:49.7401605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7403350Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7405084Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7406784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7408491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7410459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1200
2025-09-01T00:30:49.7411268Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7414118Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7415508Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-09-01T00:30:49.7417751Z         	Messages:   	Project creation failed: test-acc-tf-p-8429534036596094452, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7419244Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (0.16s)
```

  - PASS an hour
  - PASS an hour
  - PASS 23 minutes
  - PASS 29 minutes
  - PASS 37 minutes
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-09-02 PASS 29 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 34 minutes