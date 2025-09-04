# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 20 seconds
- 2025-08-07 PASS 8 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS a minute
- 2025-08-11 PASS 55 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS a minute
- 2025-08-15: MISSING
- 2025-08-16 PASS a minute
- 2025-08-17 PASS 15 seconds
- 2025-08-18 PASS a minute
- 2025-08-19 PASS 50 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-21 PASS 10 seconds
- 2025-08-22: MISSING
- 2025-08-23 PASS a minute
- 2025-08-24 PASS 10 seconds
- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 20 seconds
- 2025-08-27 PASS 10 seconds
- 2025-08-28 PASS 25 seconds
- 2025-08-29: MISSING
- 2025-08-30 PASS a minute
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7171092Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-09-01T00:30:49.7171770Z     shared_resource.go:93: 
2025-09-01T00:30:49.7172638Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7174354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7196144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7198469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7200250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7202488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:767
2025-09-01T00:30:49.7203330Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7206027Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7207476Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-09-01T00:30:49.7209770Z         	Messages:   	Project creation failed: test-acc-tf-p-4024802379893025179, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7211471Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType (0.16s)
```

  - PASS a minute
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS a minute
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 15 seconds
- 2025-09-02 PASS 20 seconds
- 2025-09-03 PASS a minute
- 2025-09-04 PASS 10 seconds