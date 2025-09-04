# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProviderUpdate Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 43 minutes
- 2025-08-07 PASS 54 minutes
- 2025-08-08 PASS 52 minutes
- 2025-08-09 PASS 40 minutes
- 2025-08-10 PASS 46 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 39 minutes
  - PASS 35 minutes
- 2025-08-13 PASS 39 minutes
- 2025-08-14 PASS 41 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 52 minutes
- 2025-08-18 PASS 37 minutes
- 2025-08-19 PASS 38 minutes
- 2025-08-20
  - PASS 40 minutes
  - PASS 38 minutes
- 2025-08-21 PASS 35 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 52 minutes
- 2025-08-24 PASS 33 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 58 minutes
- 2025-08-27 PASS 44 minutes
- 2025-08-28 PASS 40 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 37 minutes
- 2025-08-31 PASS 38 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.6865705Z === RUN   TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-09-01T00:30:37.6866401Z     resource_advanced_cluster_migration_test.go:41: Creating execution project: test-acc-tf-p-6128098751013912570
2025-09-01T00:30:37.8080236Z     resource_advanced_cluster_migration_test.go:41: 
2025-09-01T00:30:37.8082054Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:37.8084059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:37.8086459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:41
2025-09-01T00:30:37.8087390Z         	Error:      	Received unexpected error:
2025-09-01T00:30:37.8090315Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.8091778Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-09-01T00:30:37.8094063Z         	Messages:   	Project creation failed: test-acc-tf-p-6128098751013912570, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:37.8095665Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProviderUpdate (0.12s)
```

  - PASS 41 minutes
  - PASS an hour
  - PASS 38 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 35 minutes
  - PASS 35 minutes
- 2025-09-02 PASS 40 minutes
- 2025-09-03 PASS 47 minutes
- 2025-09-04 PASS 41 minutes