# advanced_cluster/advancedcluster/TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-03 00:26](#error-2025-09-03t0026180000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters | dev | 2627.07s
[2025-09-04 00:26](#error-2025-09-04t0026290000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters | dev | 2137.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 37 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 42 minutes
- 2025-08-09 PASS 38 minutes
- 2025-08-10 PASS 37 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 30 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 30 minutes
- 2025-08-14 PASS 36 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 58 minutes
- 2025-08-17 PASS 48 minutes
- 2025-08-18 PASS 37 minutes
- 2025-08-19 PASS 34 minutes
- 2025-08-20
  - PASS 31 minutes
  - PASS 34 minutes
- 2025-08-21 PASS 36 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 39 minutes
- 2025-08-24 PASS 40 minutes
- 2025-08-25 PASS 37 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 47 minutes
- 2025-08-28 PASS 32 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 39 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.0356045Z === RUN   TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-01T00:30:38.1651036Z     shared_resource.go:93: 
2025-09-01T00:30:38.1652884Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.1655122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:38.1657679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:38.1659667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:38.1661689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:38.1664076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:124
2025-09-01T00:30:38.1665642Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.1668664Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.1670096Z         	Test:       	TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-01T00:30:38.1672386Z         	Messages:   	Project creation failed: test-acc-tf-p-6284000849762209459, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.1673904Z --- FAIL: TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (0.13s)
```

  - PASS 38 minutes
  - PASS an hour
  - PASS 41 minutes
  - PASS 45 minutes
  - PASS 44 minutes
  - PASS 30 minutes
  - PASS 29 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03

### Error 2025-09-03T00:26:18+00:00
```
2025-09-03T00:26:18.4090242Z === RUN   TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-03T00:27:34.8531578Z === CONT  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-03T00:59:47.5267566Z === NAME  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-03T00:59:47.5268830Z     resource_advanced_cluster_migration_test.go:126: Step 2/2 error: Error running apply: exit status 1
2025-09-03T00:59:47.5269742Z         
2025-09-03T00:59:47.5272358Z         Error: error reading advanced cluster list for project(68b78b28a89cf4184d26f099): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5599210234147744779 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5599210234147744779], BadRequestDetail: 
2025-09-03T00:59:47.5274218Z         
2025-09-03T00:59:47.5274602Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-03T00:59:47.5275280Z           on terraform_plugin_test.tf line 105, in data "mongodbatlas_advanced_clusters" "test":
2025-09-03T00:59:47.5275859Z          105: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-03T00:59:47.5276178Z         
2025-09-03T01:11:22.5733279Z --- FAIL: TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (2627.72s)
```

- 2025-09-04

### Error 2025-09-04T00:26:29+00:00
```
2025-09-04T00:26:29.6525916Z === RUN   TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-04T00:27:48.8180714Z === CONT  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-04T00:51:50.2523948Z === NAME  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-09-04T00:51:50.2524666Z     resource_advanced_cluster_migration_test.go:126: Step 2/2 error: Error running apply: exit status 1
2025-09-04T00:51:50.2525260Z         
2025-09-04T00:51:50.2527818Z         Error: error reading advanced cluster list for project(68b8dcb3d8b60049b936d6c0): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-1554695614228743002 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-1554695614228743002], BadRequestDetail: 
2025-09-04T00:51:50.2529324Z         
2025-09-04T00:51:50.2529687Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-04T00:51:50.2530329Z           on terraform_plugin_test.tf line 105, in data "mongodbatlas_advanced_clusters" "test":
2025-09-04T00:51:50.2530901Z          105: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-04T00:51:50.2531208Z         
2025-09-04T01:03:25.8506408Z --- FAIL: TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (2137.05s)
```
