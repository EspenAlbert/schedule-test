# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 41 minutes
- 2025-08-07 PASS 49 minutes
- 2025-08-08 PASS 44 minutes
- 2025-08-09 PASS 39 minutes
- 2025-08-10 PASS 48 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 40 minutes
  - PASS 30 minutes
- 2025-08-13 PASS 46 minutes
- 2025-08-14 PASS 42 minutes
- 2025-08-15 PASS 25 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 56 minutes
- 2025-08-18 PASS 38 minutes
- 2025-08-19 PASS 39 minutes
- 2025-08-20
  - PASS 42 minutes
  - PASS 35 minutes
- 2025-08-21 PASS 35 minutes
- 2025-08-22 PASS 28 minutes
- 2025-08-23 PASS an hour
- 2025-08-24 PASS 41 minutes
- 2025-08-25 PASS 57 minutes
- 2025-08-26 PASS 48 minutes
- 2025-08-27 PASS 46 minutes
- 2025-08-28 PASS 39 minutes
- 2025-08-29 PASS 45 minutes
- 2025-08-30 PASS 59 minutes
- 2025-08-31 PASS 37 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:19+00:00
```
2025-09-01T00:30:19.3251056Z === RUN   TestAccCluster_ProviderRegionName
2025-09-01T00:30:19.4516118Z     shared_resource.go:93: 
2025-09-01T00:30:19.4517892Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:19.4520582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:19.4523513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:19.4525810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:19.4528414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:19.4530718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2025-09-01T00:30:19.4531685Z         	Error:      	Received unexpected error:
2025-09-01T00:30:19.4535109Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.4536387Z         	Test:       	TestAccCluster_ProviderRegionName
2025-09-01T00:30:19.4538619Z         	Messages:   	Project creation failed: test-acc-tf-p-6495353728372896264, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.4540182Z --- FAIL: TestAccCluster_ProviderRegionName (0.13s)
```

  - PASS an hour
  - PASS an hour
  - PASS 34 minutes
  - PASS 32 minutes
  - PASS 37 minutes
  - PASS 35 minutes
  - PASS 35 minutes
- 2025-09-02 PASS 41 minutes
- 2025-09-03 PASS 49 minutes
- 2025-09-04 PASS 42 minutes