# cluster/cluster/TestAccCluster_basic_DefaultWriteRead_AdvancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 22 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 27 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 38 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 37 minutes
  - PASS 17 minutes
- 2025-08-13 PASS 24 minutes
- 2025-08-14 PASS 24 minutes
- 2025-08-15 PASS 16 minutes
- 2025-08-16 PASS 46 minutes
- 2025-08-17 PASS 46 minutes
- 2025-08-18 PASS 23 minutes
- 2025-08-19 PASS 21 minutes
- 2025-08-20
  - PASS 20 minutes
  - PASS 24 minutes
- 2025-08-21 PASS 23 minutes
- 2025-08-22 PASS 18 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24 PASS 16 minutes
- 2025-08-25 PASS 29 minutes
- 2025-08-26 PASS 26 minutes
- 2025-08-27 PASS 28 minutes
- 2025-08-28 PASS 20 minutes
- 2025-08-29 PASS 37 minutes
- 2025-08-30 PASS 39 minutes
- 2025-08-31 PASS 21 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:18+00:00
```
2025-09-01T00:30:18.4332323Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-09-01T00:30:18.5434541Z     shared_resource.go:93: 
2025-09-01T00:30:18.5436720Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:18.5439470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:18.5441792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:18.5444056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:18.5446082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:18.5448189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:159
2025-09-01T00:30:18.5450340Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:220
2025-09-01T00:30:18.5451213Z         	Error:      	Received unexpected error:
2025-09-01T00:30:18.5454406Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.5455911Z         	Test:       	TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-09-01T00:30:18.5458134Z         	Messages:   	Project creation failed: test-acc-tf-p-4034962668723606803, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.5459597Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (0.11s)
```

  - PASS an hour
  - PASS an hour
  - PASS 20 minutes
  - PASS 31 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 20 minutes
- 2025-09-02 PASS 22 minutes
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 24 minutes