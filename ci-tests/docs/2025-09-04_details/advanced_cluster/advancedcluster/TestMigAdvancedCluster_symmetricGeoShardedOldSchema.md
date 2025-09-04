# advanced_cluster/advancedcluster/TestMigAdvancedCluster_symmetricGeoShardedOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 43 minutes
- 2025-08-08 PASS 24 minutes
- 2025-08-09 PASS 35 minutes
- 2025-08-10 PASS 46 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 43 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 39 minutes
- 2025-08-14 PASS 41 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 40 minutes
- 2025-08-18 PASS 34 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 36 minutes
  - PASS 26 minutes
- 2025-08-21 PASS 40 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 39 minutes
- 2025-08-24 PASS 49 minutes
- 2025-08-25 PASS 24 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 50 minutes
- 2025-08-28 PASS 28 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 37 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.5738958Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T00:30:37.6835500Z     shared_resource.go:93: 
2025-09-01T00:30:37.6839764Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:37.6841836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:37.6843860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:37.6846147Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:37.6848133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:37.6850254Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:812
2025-09-01T00:30:37.6852464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-09-01T00:30:37.6855091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:30
2025-09-01T00:30:37.6856177Z         	Error:      	Received unexpected error:
2025-09-01T00:30:37.6858907Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.6860359Z         	Test:       	TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T00:30:37.6862634Z         	Messages:   	Project creation failed: test-acc-tf-p-5443466290673300173, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.6864312Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (0.11s)
```

  - PASS 30 minutes
  - PASS an hour
  - PASS 29 minutes
  - PASS 26 minutes
  - PASS 30 minutes
  - PASS 29 minutes
  - PASS 34 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 40 minutes
- 2025-09-04 PASS 32 minutes