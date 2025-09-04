# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 59 minutes
- 2025-08-09 PASS 51 minutes
- 2025-08-10 PASS 49 minutes
- 2025-08-11 PASS 2 hours
- 2025-08-12
  - PASS 43 minutes
  - PASS 39 minutes
- 2025-08-13 PASS 50 minutes
- 2025-08-14 PASS 49 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 59 minutes
- 2025-08-18 PASS 45 minutes
- 2025-08-19 PASS 48 minutes
- 2025-08-20
  - PASS 46 minutes
  - PASS an hour
- 2025-08-21 PASS 44 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 48 minutes
- 2025-08-24 PASS 53 minutes
- 2025-08-25 PASS 52 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 52 minutes
- 2025-08-28 PASS 47 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 44 minutes
- 2025-08-31 PASS 43 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7031957Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-09-01T00:30:49.7032562Z     shared_resource.go:93: 
2025-09-01T00:30:49.7034128Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7037271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7040443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7043749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7046926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7050581Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:416
2025-09-01T00:30:49.7052216Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7057158Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7059407Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2025-09-01T00:30:49.7063545Z         	Messages:   	Project creation failed: test-acc-tf-p-1933823731918787747, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7066204Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.17s)
```

  - PASS an hour
  - PASS an hour
  - PASS 52 minutes
  - PASS 43 minutes
  - PASS 45 minutes
  - PASS 43 minutes
  - PASS 41 minutes
- 2025-09-02 PASS 55 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 49 minutes