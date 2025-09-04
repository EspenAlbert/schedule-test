# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 23 minutes
- 2025-08-07 PASS 43 minutes
- 2025-08-08 PASS 31 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 31 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 23 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 31 minutes
- 2025-08-19 PASS 26 minutes
- 2025-08-20
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-08-21 PASS 22 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 17 minutes
- 2025-08-25 PASS 20 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 49 minutes
- 2025-08-28 PASS 24 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 23 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.5265251Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-09-01T00:30:42.6550046Z     shared_resource.go:93: 
2025-09-01T00:30:42.6552345Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:42.6554886Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:42.6557249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:42.6559784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:42.6561951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:42.6564056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:738
2025-09-01T00:30:42.6564899Z         	Error:      	Received unexpected error:
2025-09-01T00:30:42.6567769Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.6569162Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-09-01T00:30:42.6571442Z         	Messages:   	Project creation failed: test-acc-tf-p-3449363675413576784, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.6572959Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (0.13s)
```

  - PASS 30 minutes
  - PASS an hour
  - PASS 23 minutes
  - PASS 35 minutes
  - PASS 27 minutes
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-09-02 PASS 25 minutes
- 2025-09-03 PASS 34 minutes
- 2025-09-04 PASS 28 minutes