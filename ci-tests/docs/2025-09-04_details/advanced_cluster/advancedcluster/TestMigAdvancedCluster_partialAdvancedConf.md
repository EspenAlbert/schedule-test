# advanced_cluster/advancedcluster/TestMigAdvancedCluster_partialAdvancedConf Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 38 minutes
- 2025-08-07 PASS 45 minutes
- 2025-08-08 PASS 27 minutes
- 2025-08-09 PASS 34 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 34 minutes
  - PASS 28 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 35 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 59 minutes
- 2025-08-17 PASS 47 minutes
- 2025-08-18 PASS 34 minutes
- 2025-08-19 PASS 36 minutes
- 2025-08-20
  - PASS 30 minutes
  - PASS 45 minutes
- 2025-08-21 PASS 31 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 36 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 47 minutes
- 2025-08-27 PASS 39 minutes
- 2025-08-28 PASS 32 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 35 minutes
- 2025-08-31 PASS 33 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.1674383Z === RUN   TestMigAdvancedCluster_partialAdvancedConf
2025-09-01T00:30:38.1675045Z     resource_advanced_cluster_migration_test.go:148: Creating execution project: test-acc-tf-p-2786124107630417630
2025-09-01T00:30:38.2916274Z     resource_advanced_cluster_migration_test.go:148: 
2025-09-01T00:30:38.2918205Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.2920623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.2923040Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:148
2025-09-01T00:30:38.2924047Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.2927380Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.2928892Z         	Test:       	TestMigAdvancedCluster_partialAdvancedConf
2025-09-01T00:30:38.2931621Z         	Messages:   	Project creation failed: test-acc-tf-p-2786124107630417630, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.2933086Z --- FAIL: TestMigAdvancedCluster_partialAdvancedConf (0.13s)
```

  - PASS 38 minutes
  - PASS an hour
  - PASS 30 minutes
  - PASS 35 minutes
  - PASS 30 minutes
  - PASS 26 minutes
  - PASS 33 minutes
- 2025-09-02 PASS 34 minutes
- 2025-09-03 PASS 45 minutes
- 2025-09-04 PASS 38 minutes