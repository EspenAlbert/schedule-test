# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 31 minutes
- 2025-08-08 PASS 23 minutes
- 2025-08-09 PASS 21 minutes
- 2025-08-10 PASS 41 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 37 minutes
  - PASS 19 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15 PASS 19 minutes
- 2025-08-16 PASS 58 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 20 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 23 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 25 minutes
- 2025-08-22 PASS 20 minutes
- 2025-08-23 PASS 26 minutes
- 2025-08-24 PASS 18 minutes
- 2025-08-25 PASS 23 minutes
- 2025-08-26 PASS 31 minutes
- 2025-08-27 PASS 41 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29 PASS 42 minutes
- 2025-08-30 PASS 39 minutes
- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.3938073Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-09-01T00:30:20.5211549Z     shared_resource.go:93: 
2025-09-01T00:30:20.5213580Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.5215828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:20.5217875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:20.5219905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:20.5222493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:20.5224662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1245
2025-09-01T00:30:20.5225448Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.5228140Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.5229437Z         	Test:       	TestAccCluster_basicAWS_UnpauseToPaused
2025-09-01T00:30:20.5231634Z         	Messages:   	Project creation failed: test-acc-tf-p-4315087008454956796, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.5233145Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (0.13s)
```

  - PASS an hour
  - PASS an hour
  - PASS 33 minutes
  - PASS 34 minutes
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 26 minutes
- 2025-09-02 PASS 31 minutes
- 2025-09-03 PASS 26 minutes
- 2025-09-04 PASS 22 minutes