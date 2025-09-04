# cluster/cluster/TestAccCluster_basicAzure Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 20 minutes
- 2025-08-09 PASS 19 minutes
- 2025-08-10 PASS 34 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 17 minutes
  - PASS 29 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 23 minutes
- 2025-08-15 PASS 14 minutes
- 2025-08-16 PASS 47 minutes
- 2025-08-17 PASS 30 minutes
- 2025-08-18 PASS 17 minutes
- 2025-08-19 PASS 23 minutes
- 2025-08-20
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-08-21 PASS 16 minutes
- 2025-08-22 PASS 18 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24 PASS 16 minutes
- 2025-08-25 PASS 30 minutes
- 2025-08-26 PASS 18 minutes
- 2025-08-27 PASS 26 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29 PASS 38 minutes
- 2025-08-30 PASS 36 minutes
- 2025-08-31 PASS 28 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:18+00:00
```
2025-09-01T00:30:18.8144875Z === RUN   TestAccCluster_basicAzure
2025-09-01T00:30:18.9218492Z     shared_resource.go:93: 
2025-09-01T00:30:18.9220449Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:18.9223398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:18.9225751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:18.9227957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:18.9230167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:18.9232579Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:334
2025-09-01T00:30:18.9233542Z         	Error:      	Received unexpected error:
2025-09-01T00:30:18.9236446Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.9237675Z         	Test:       	TestAccCluster_basicAzure
2025-09-01T00:30:18.9240196Z         	Messages:   	Project creation failed: test-acc-tf-p-8503151450736531526, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.9241577Z --- FAIL: TestAccCluster_basicAzure (0.11s)
```

  - PASS an hour
  - PASS an hour
  - PASS 21 minutes
  - PASS 30 minutes
  - PASS 15 minutes
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-09-02 PASS 21 minutes
- 2025-09-03 PASS 27 minutes
- 2025-09-04 PASS 13 minutes