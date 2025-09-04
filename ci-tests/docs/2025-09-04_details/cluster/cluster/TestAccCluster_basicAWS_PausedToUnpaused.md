# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 35 minutes
- 2025-08-08 PASS 28 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 43 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 36 minutes
  - PASS 19 minutes
- 2025-08-13 PASS 36 minutes
- 2025-08-14 PASS 33 minutes
- 2025-08-15 PASS 20 minutes
- 2025-08-16 PASS 56 minutes
- 2025-08-17 PASS 39 minutes
- 2025-08-18 PASS 30 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 24 minutes
  - PASS 20 minutes
- 2025-08-21 PASS 28 minutes
- 2025-08-22 PASS 24 minutes
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 29 minutes
- 2025-08-25 PASS 26 minutes
- 2025-08-26 PASS 37 minutes
- 2025-08-27 PASS 41 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29 PASS 43 minutes
- 2025-08-30 PASS 40 minutes
- 2025-08-31 PASS 30 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.5233520Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-09-01T00:30:20.6298185Z     shared_resource.go:93: 
2025-09-01T00:30:20.6300323Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.6304874Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:20.6308414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:20.6311722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:20.6315532Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:20.6319204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1284
2025-09-01T00:30:20.6320615Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.6326146Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.6328500Z         	Test:       	TestAccCluster_basicAWS_PausedToUnpaused
2025-09-01T00:30:20.6332563Z         	Messages:   	Project creation failed: test-acc-tf-p-3557873375121251354, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.6335265Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (0.11s)
```

  - PASS an hour
  - PASS an hour
  - PASS 35 minutes
  - PASS 23 minutes
  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 30 minutes
- 2025-09-02 PASS 29 minutes
- 2025-09-03 PASS 38 minutes
- 2025-09-04 PASS 29 minutes