# cluster/cluster/TestAccCluster_Global Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 20 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 18 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 32 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 22 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 19 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15 PASS 25 minutes
- 2025-08-16 PASS 45 minutes
- 2025-08-17 PASS 28 minutes
- 2025-08-18 PASS 36 minutes
- 2025-08-19 PASS 20 minutes
- 2025-08-20
  - PASS 21 minutes
  - PASS 14 minutes
- 2025-08-21 PASS 21 minutes
- 2025-08-22 PASS 14 minutes
- 2025-08-23 PASS 26 minutes
- 2025-08-24 PASS 17 minutes
- 2025-08-25 PASS 23 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 31 minutes
- 2025-08-28 PASS 19 minutes
- 2025-08-29 PASS 31 minutes
- 2025-08-30 PASS 43 minutes
- 2025-08-31 PASS 28 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:19+00:00
```
2025-09-01T00:30:19.4540518Z === RUN   TestAccCluster_Global
2025-09-01T00:30:19.5695752Z     shared_resource.go:93: 
2025-09-01T00:30:19.5697361Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:19.5699437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:19.5701475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:19.5703802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:19.5705842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:19.5708010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2025-09-01T00:30:19.5708900Z         	Error:      	Received unexpected error:
2025-09-01T00:30:19.5712167Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.5713604Z         	Test:       	TestAccCluster_Global
2025-09-01T00:30:19.5716152Z         	Messages:   	Project creation failed: test-acc-tf-p-9204286612281867938, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.5717705Z --- FAIL: TestAccCluster_Global (0.12s)
```

  - PASS an hour
  - PASS an hour
  - PASS 30 minutes
  - PASS 26 minutes
  - PASS 29 minutes
  - PASS 17 minutes
  - PASS 25 minutes
- 2025-09-02 PASS 23 minutes
- 2025-09-03 PASS 26 minutes
- 2025-09-04 PASS 16 minutes