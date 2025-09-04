# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 27 minutes
- 2025-08-08 PASS 19 minutes
- 2025-08-09 PASS 20 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 31 minutes
  - PASS 12 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 26 minutes
- 2025-08-15 PASS 15 minutes
- 2025-08-16 PASS 43 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 19 minutes
- 2025-08-19 PASS 19 minutes
- 2025-08-20
  - PASS 18 minutes
  - PASS 14 minutes
- 2025-08-21 PASS 27 minutes
- 2025-08-22 PASS 14 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24 PASS 14 minutes
- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 48 minutes
- 2025-08-27 PASS 37 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29 PASS 37 minutes
- 2025-08-30 PASS 36 minutes
- 2025-08-31 PASS 20 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:19+00:00
```
2025-09-01T00:30:19.6791816Z === RUN   TestAccCluster_withAutoScalingAWS
2025-09-01T00:30:19.7960608Z     shared_resource.go:93: 
2025-09-01T00:30:19.7962199Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:19.7964285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:19.7966320Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:19.7968345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:19.7970635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:19.7972736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:971
2025-09-01T00:30:19.7973526Z         	Error:      	Received unexpected error:
2025-09-01T00:30:19.7976268Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.7977648Z         	Test:       	TestAccCluster_withAutoScalingAWS
2025-09-01T00:30:19.7979871Z         	Messages:   	Project creation failed: test-acc-tf-p-5334724601002149163, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.7981397Z --- FAIL: TestAccCluster_withAutoScalingAWS (0.12s)
```

  - PASS an hour
  - PASS an hour
  - PASS 32 minutes
  - PASS 19 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-09-02 PASS 23 minutes
- 2025-09-03 PASS 21 minutes
- 2025-09-04 PASS 15 minutes