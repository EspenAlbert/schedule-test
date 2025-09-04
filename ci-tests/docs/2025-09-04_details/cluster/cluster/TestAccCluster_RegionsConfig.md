# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 56 minutes
- 2025-08-09 PASS 54 minutes
- 2025-08-10 PASS 57 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 51 minutes
  - PASS 44 minutes
- 2025-08-13 PASS 59 minutes
- 2025-08-14 PASS 49 minutes
- 2025-08-15 PASS 37 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 52 minutes
- 2025-08-19 PASS 50 minutes
- 2025-08-20
  - PASS 49 minutes
  - PASS 46 minutes
- 2025-08-21 PASS 50 minutes
- 2025-08-22 PASS 40 minutes
- 2025-08-23 PASS an hour
- 2025-08-24 PASS 53 minutes
- 2025-08-25 PASS 59 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS an hour
- 2025-08-28 PASS 49 minutes
- 2025-08-29 PASS 58 minutes
- 2025-08-30 PASS an hour
- 2025-08-31 PASS 49 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.2536768Z === RUN   TestAccCluster_RegionsConfig
2025-09-01T00:30:20.3913434Z     shared_resource.go:93: 
2025-09-01T00:30:20.3915580Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.3918762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:20.3921065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:20.3923584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:20.3925780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:20.3928091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1130
2025-09-01T00:30:20.3929059Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.3932565Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.3933841Z         	Test:       	TestAccCluster_RegionsConfig
2025-09-01T00:30:20.3936343Z         	Messages:   	Project creation failed: test-acc-tf-p-7837028074730005579, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.3937730Z --- FAIL: TestAccCluster_RegionsConfig (0.14s)
```

  - PASS an hour
  - PASS an hour
  - PASS 53 minutes
  - PASS 48 minutes
  - PASS 49 minutes
  - PASS 46 minutes
  - PASS 46 minutes
- 2025-09-02 PASS 57 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 54 minutes