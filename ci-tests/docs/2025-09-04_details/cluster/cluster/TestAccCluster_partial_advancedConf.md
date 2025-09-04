# cluster/cluster/TestAccCluster_partial_advancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 21 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 29 minutes
- 2025-08-09 PASS 23 minutes
- 2025-08-10 PASS 38 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 33 minutes
  - PASS 18 minutes
- 2025-08-13 PASS 24 minutes
- 2025-08-14 PASS 21 minutes
- 2025-08-15 PASS 17 minutes
- 2025-08-16 PASS 46 minutes
- 2025-08-17 PASS 46 minutes
- 2025-08-18 PASS 31 minutes
- 2025-08-19 PASS 22 minutes
- 2025-08-20
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-08-21 PASS 23 minutes
- 2025-08-22 PASS 20 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24 PASS 15 minutes
- 2025-08-25 PASS 34 minutes
- 2025-08-26 PASS 26 minutes
- 2025-08-27 PASS 26 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29 PASS 37 minutes
- 2025-08-30 PASS 40 minutes
- 2025-08-31 PASS 30 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:18+00:00
```
2025-09-01T00:30:18.3190393Z === RUN   TestAccCluster_partial_advancedConf
2025-09-01T00:30:18.4306715Z     shared_resource.go:93: 
2025-09-01T00:30:18.4308794Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:18.4311604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:18.4314595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:18.4316712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:18.4318711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:18.4320812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:87
2025-09-01T00:30:18.4323058Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:83
2025-09-01T00:30:18.4323926Z         	Error:      	Received unexpected error:
2025-09-01T00:30:18.4326911Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.4328215Z         	Test:       	TestAccCluster_partial_advancedConf
2025-09-01T00:30:18.4330447Z         	Messages:   	Project creation failed: test-acc-tf-p-5843719138117792914, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.4331848Z --- FAIL: TestAccCluster_partial_advancedConf (0.11s)
```

  - PASS an hour
  - PASS an hour
  - PASS 20 minutes
  - PASS 31 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 20 minutes
- 2025-09-02 PASS 24 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 21 minutes