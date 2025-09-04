# advanced_cluster/advancedcluster/TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 7)
Success rate: 80.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-20 00:27](#error-2025-08-20t0027230000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters | dev | 1581.02s
[2025-09-01 00:30](#error-2025-09-01t0030370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 12:23](#error-2025-09-01t1223060000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b5902a43a482152d60b7f4/clusters | dev | 1610.07s
[2025-09-01 13:42](#error-2025-09-01t1342000000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b5a2a9172c126611872132/clusters | dev | 2300.02s
[2025-09-01 16:11](#error-2025-09-01t1611040000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b5c59860c05d1e5a79bfb7/clusters | dev | 1401.01s
[2025-09-03 00:26](#error-2025-09-03t0026160000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters | dev | 1785.07s
[2025-09-04 00:26](#error-2025-09-04t0026260000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters | dev | 2129.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 41 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 37 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 58 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 30 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - FAIL 26 minutes

### Error 2025-08-20T00:27:23+00:00
```
2025-08-20T00:27:23.9729084Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-08-20T00:28:29.0313975Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-08-20T00:46:35.4020449Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-08-20T00:46:35.4021129Z     resource_advanced_cluster_migration_test.go:104: Step 2/2 error: Error running apply: exit status 1
2025-08-20T00:46:35.4021583Z         
2025-08-20T00:46:35.4024278Z         Error: error reading advanced cluster list for project(68a5166c552c1710e1fb279c): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-7673890514674051713 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-7673890514674051713], BadRequestDetail: 
2025-08-20T00:46:35.4025936Z         
2025-08-20T00:46:35.4026302Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-20T00:46:35.4026939Z           on terraform_plugin_test.tf line 68, in data "mongodbatlas_advanced_clusters" "test":
2025-08-20T00:46:35.4027507Z           68: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-20T00:46:35.4028028Z         
2025-08-20T00:54:48.3651069Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (1581.18s)
```

  - PASS 25 minutes
- 2025-08-21 PASS 35 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 32 minutes
- 2025-08-25 PASS 19 minutes
- 2025-08-26 PASS 32 minutes
- 2025-08-27 PASS 40 minutes
- 2025-08-28 PASS 26 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 38 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:37+00:00
```
2025-09-01T00:30:37.9171094Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T00:30:38.0332556Z     shared_resource.go:93: 
2025-09-01T00:30:38.0334153Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.0336589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:38.0338493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:38.0340364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:38.0342233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:38.0344456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:102
2025-09-01T00:30:38.0345620Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.0348335Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.0351001Z         	Test:       	TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T00:30:38.0353322Z         	Messages:   	Project creation failed: test-acc-tf-p-2284388842318175263, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.0354841Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (0.12s)
```

  - PASS 38 minutes
  - PASS an hour
  - PASS 38 minutes
  - FAIL 26 minutes

### Error 2025-09-01T12:23:06+00:00
```
2025-09-01T12:23:06.6962429Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T12:24:17.2392906Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T12:44:44.0084080Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T12:44:44.0084913Z     resource_advanced_cluster_migration_test.go:104: Step 2/2 error: Error running apply: exit status 1
2025-09-01T12:44:44.0085476Z         
2025-09-01T12:44:44.0088328Z         Error: error reading advanced cluster list for project(68b5902a43a482152d60b7f4): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5902a43a482152d60b7f4/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-8708400375660106696 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-8708400375660106696], BadRequestDetail: 
2025-09-01T12:44:44.0089779Z         
2025-09-01T12:44:44.0090132Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-01T12:44:44.0090766Z           on terraform_plugin_test.tf line 68, in data "mongodbatlas_advanced_clusters" "test":
2025-09-01T12:44:44.0091347Z           68: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-01T12:44:44.0091649Z         
2025-09-01T12:51:06.5360568Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (1610.67s)
```

  - FAIL 38 minutes

### Error 2025-09-01T13:42:00+00:00
```
2025-09-01T13:42:00.9799984Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T13:43:28.2636121Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T14:05:26.0458397Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T14:05:26.0459078Z     resource_advanced_cluster_migration_test.go:104: Step 2/2 error: Error running apply: exit status 1
2025-09-01T14:05:26.0459526Z         
2025-09-01T14:05:26.0462034Z         Error: error reading advanced cluster list for project(68b5a2a9172c126611872132): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5a2a9172c126611872132/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-6474566299923793398 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-6474566299923793398], BadRequestDetail: 
2025-09-01T14:05:26.0463761Z         
2025-09-01T14:05:26.0464113Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-01T14:05:26.0464740Z           on terraform_plugin_test.tf line 68, in data "mongodbatlas_advanced_clusters" "test":
2025-09-01T14:05:26.0465506Z           68: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-01T14:05:26.0465797Z         
2025-09-01T14:21:46.7528625Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (2300.16s)
```

  - PASS 26 minutes
  - FAIL 23 minutes

### Error 2025-09-01T16:11:04+00:00
```
2025-09-01T16:11:04.0867304Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T16:12:15.5803004Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T16:28:01.5937591Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-01T16:28:01.5938808Z     resource_advanced_cluster_migration_test.go:104: Step 2/2 error: Error running apply: exit status 1
2025-09-01T16:28:01.5939483Z         
2025-09-01T16:28:01.5943503Z         Error: error reading advanced cluster list for project(68b5c59860c05d1e5a79bfb7): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5c59860c05d1e5a79bfb7/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5913904763312693632 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5913904763312693632], BadRequestDetail: 
2025-09-01T16:28:01.5946129Z         
2025-09-01T16:28:01.5946766Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-01T16:28:01.5947987Z           on terraform_plugin_test.tf line 68, in data "mongodbatlas_advanced_clusters" "test":
2025-09-01T16:28:01.5948982Z           68: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-01T16:28:01.5949491Z         
2025-09-01T16:35:34.5118527Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (1401.13s)
```

- 2025-09-02 PASS 28 minutes
- 2025-09-03

### Error 2025-09-03T00:26:16+00:00
```
2025-09-03T00:26:16.2898910Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-03T00:27:34.8534509Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-03T00:51:35.4732364Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-03T00:51:35.4733322Z     resource_advanced_cluster_migration_test.go:104: Step 2/2 error: Error running apply: exit status 1
2025-09-03T00:51:35.4733832Z         
2025-09-03T00:51:35.4737832Z         Error: error reading advanced cluster list for project(68b78b28a89cf4184d26f099): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5599210234147744779 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5599210234147744779], BadRequestDetail: 
2025-09-03T00:51:35.4739732Z         
2025-09-03T00:51:35.4740112Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-03T00:51:35.4740787Z           on terraform_plugin_test.tf line 68, in data "mongodbatlas_advanced_clusters" "test":
2025-09-03T00:51:35.4741378Z           68: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-03T00:51:35.4741696Z         
2025-09-03T00:57:18.4460577Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (1785.71s)
```

- 2025-09-04

### Error 2025-09-04T00:26:26+00:00
```
2025-09-04T00:26:26.9166367Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-04T00:27:48.8182456Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-04T00:49:29.2220311Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-09-04T00:49:29.2221136Z     resource_advanced_cluster_migration_test.go:104: Step 2/2 error: Error running apply: exit status 1
2025-09-04T00:49:29.2221828Z         
2025-09-04T00:49:29.2224435Z         Error: error reading advanced cluster list for project(68b8dcb3d8b60049b936d6c0): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-1554695614228743002 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-1554695614228743002], BadRequestDetail: 
2025-09-04T00:49:29.2225955Z         
2025-09-04T00:49:29.2226319Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-04T00:49:29.2226978Z           on terraform_plugin_test.tf line 68, in data "mongodbatlas_advanced_clusters" "test":
2025-09-04T00:49:29.2227559Z           68: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-04T00:49:29.2227872Z         
2025-09-04T01:03:15.7928410Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (2129.73s)
```
