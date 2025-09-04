# advanced_cluster_tpf/advancedclustertpf/TestAccAdvancedCluster_moveBasic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) SKIP(x 2) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 minutes
- 2025-08-07 PASS 23 minutes
- 2025-08-08 PASS 15 minutes
- 2025-08-09 PASS 19 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 17 minutes
- 2025-08-15 PASS 15 minutes
- 2025-08-16 PASS 42 minutes
- 2025-08-17 PASS 29 minutes
- 2025-08-18 PASS 16 minutes
- 2025-08-19 PASS 20 minutes
- 2025-08-20
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-08-21 PASS 15 minutes
- 2025-08-22 PASS 12 minutes
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 16 minutes
- 2025-08-25 PASS 13 minutes
- 2025-08-26 PASS 21 minutes
- 2025-08-27 PASS 23 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29 PASS 24 minutes
- 2025-08-30 PASS 18 minutes
- 2025-08-31 PASS 14 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7790118Z === RUN   TestAccAdvancedCluster_moveBasic
2025-09-01T00:30:49.7790573Z     shared_resource.go:93: 
2025-09-01T00:30:49.7791729Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7793668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7795668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7797463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7799294Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7801467Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedclustertpf/move_upgrade_state_test.go:17
2025-09-01T00:30:49.7802496Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7805360Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7806719Z         	Test:       	TestAccAdvancedCluster_moveBasic
2025-09-01T00:30:49.7809009Z         	Messages:   	Project creation failed: test-acc-tf-p-4244084058569889243, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7810511Z --- FAIL: TestAccAdvancedCluster_moveBasic (0.29s)
```

  - PASS an hour
  - PASS an hour
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - SKIP 2 seconds
  - SKIP 2 seconds
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 19 minutes
- 2025-09-04 PASS 20 minutes