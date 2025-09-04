# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_symmetricGeoShardedOldSchema Test Details
# Found 37 TestRuns in dev, qa from 2025-08-05 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-19 00:29](#error-2025-08-19t0029030000) |  | dev | flaky_client | 1094.08s
[2025-09-01 00:30](#error-2025-09-01t0030310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-08-06 PASS 23 minutes
- 2025-08-07 PASS 38 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 37 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 34 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 33 minutes
- 2025-08-18 PASS 27 minutes
- 2025-08-19

### Error 2025-08-19T00:29:03+00:00
```
2025-08-19T00:29:03.5819761Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-19T00:29:03.5820955Z     resource_advanced_cluster_migration_test.go:30: Running test SDKv2 to TPF
2025-08-19T00:29:05.2802949Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-19T00:47:18.1609729Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-19T00:47:18.1610826Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-08-19T00:47:18.1611605Z         
2025-08-19T00:47:18.1645362Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a3c54fc1be074b83c5dad9/clusters/test-acc-tf-c-2004709672423207758": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-08-19T00:47:18.1647473Z         
2025-08-19T00:47:18.1648215Z           with mongodbatlas_advanced_cluster.test,
2025-08-19T00:47:18.1650561Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-19T00:47:18.1651942Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-19T00:47:18.1652625Z         
2025-08-19T00:47:18.3881307Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (1094.80s)
```

- 2025-08-20
  - PASS 33 minutes
  - PASS 23 minutes
- 2025-08-21 PASS 28 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 21 minutes
- 2025-08-25 PASS 34 minutes
- 2025-08-26 PASS 36 minutes
- 2025-08-27 PASS 32 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 23 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:31+00:00
```
2025-09-01T00:30:31.7199519Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T00:30:31.7200048Z     resource_advanced_cluster_migration_test.go:30: Running test SDKv2 to TPF
2025-09-01T00:30:31.8112232Z     shared_resource.go:93: 
2025-09-01T00:30:31.8114508Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:31.8117844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:31.8120582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:31.8122732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:31.8124756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:31.8127373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:812
2025-09-01T00:30:31.8131253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-09-01T00:30:31.8135141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:30
2025-09-01T00:30:31.8136698Z         	Error:      	Received unexpected error:
2025-09-01T00:30:31.8140680Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:31.8142703Z         	Test:       	TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T00:30:31.8145116Z         	Messages:   	Project creation failed: test-acc-tf-p-4144616385132750848, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:31.8146633Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (0.09s)
```

  - PASS an hour
  - PASS an hour
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 24 minutes
  - PASS 24 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 29 minutes