# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 49 minutes
- 2025-08-09 PASS 56 minutes
- 2025-08-10 PASS 58 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 52 minutes
  - PASS 43 minutes
- 2025-08-13 PASS an hour
- 2025-08-14 PASS 56 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 57 minutes
- 2025-08-19 PASS 53 minutes
- 2025-08-20
  - PASS 49 minutes
  - PASS 53 minutes
- 2025-08-21 PASS 45 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS an hour
- 2025-08-24 PASS 50 minutes
- 2025-08-25 PASS 48 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 58 minutes
- 2025-08-28 PASS 52 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 48 minutes
- 2025-08-31 PASS 50 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.2905632Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-09-01T00:30:42.3994854Z     shared_resource.go:93: 
2025-09-01T00:30:42.3997135Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:42.3999202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:42.4001586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:42.4003589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:42.4005832Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:42.4008121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:587
2025-09-01T00:30:42.4008948Z         	Error:      	Received unexpected error:
2025-09-01T00:30:42.4011678Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.4013196Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-09-01T00:30:42.4015844Z         	Messages:   	Project creation failed: test-acc-tf-p-2342231561331179584, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.4017443Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (0.11s)
```

  - PASS 51 minutes
  - PASS an hour
  - PASS 46 minutes
  - PASS 54 minutes
  - PASS 56 minutes
  - PASS 47 minutes
  - PASS 48 minutes
- 2025-09-02 PASS 55 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 57 minutes