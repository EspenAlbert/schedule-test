# advanced_cluster_tpf/advancedclustertpf/TestAccAdvancedCluster_moveInvalid Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) SKIP(x 2) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 seconds
- 2025-08-07 PASS 9 seconds
- 2025-08-08 PASS 2 seconds
- 2025-08-09 PASS 2 seconds
- 2025-08-10 PASS 2 seconds
- 2025-08-11 PASS 2 seconds
- 2025-08-12
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-08-13 PASS 3 seconds
- 2025-08-14 PASS 3 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 3 seconds
- 2025-08-17 PASS 2 seconds
- 2025-08-18 PASS 2 seconds
- 2025-08-19 PASS 2 seconds
- 2025-08-20
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-08-21 PASS 2 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 2 seconds
- 2025-08-24 PASS 2 seconds
- 2025-08-25 PASS 2 seconds
- 2025-08-26 PASS 2 seconds
- 2025-08-27 PASS 2 seconds
- 2025-08-28 PASS 2 seconds
- 2025-08-29 PASS 5 seconds
- 2025-08-30 PASS 2 seconds
- 2025-08-31 PASS 2 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7840386Z === RUN   TestAccAdvancedCluster_moveInvalid
2025-09-01T00:30:49.7840711Z     shared_resource.go:93: 
2025-09-01T00:30:49.7841838Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7843552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7845280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7846966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7848664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7850554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedclustertpf/move_upgrade_state_test.go:69
2025-09-01T00:30:49.7851543Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7854181Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7855429Z         	Test:       	TestAccAdvancedCluster_moveInvalid
2025-09-01T00:30:49.7857587Z         	Messages:   	Project creation failed: test-acc-tf-p-8193898348186249110, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7858977Z --- FAIL: TestAccAdvancedCluster_moveInvalid (0.16s)
```

  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - SKIP a moment
  - SKIP a moment
- 2025-09-02 PASS 2 seconds
- 2025-09-03 PASS 2 seconds
- 2025-09-04 PASS 3 seconds