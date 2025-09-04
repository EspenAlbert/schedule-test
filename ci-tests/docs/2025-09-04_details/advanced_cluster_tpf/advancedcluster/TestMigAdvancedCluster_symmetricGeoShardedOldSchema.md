# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_symmetricGeoShardedOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 02:05](#error-2025-08-06t0205370000) |  | dev |  | 1948.05s
[2025-08-27 01:38](#error-2025-08-27t0138030000) |  | dev | unknown | 2366.08s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 11:01](#error-2025-09-01t1101140000) |  | dev | timeout | 10808.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T02:05:37+00:00
```
2025-08-06T02:05:37.4275879Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-06T02:05:37.4376952Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-06T02:05:37.4588343Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-06T02:05:37.4589134Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-08-06T02:05:37.4589699Z         
2025-08-06T02:05:37.4590020Z         Error: error reading  advanced cluster list
2025-08-06T02:05:37.4590421Z         
2025-08-06T02:05:37.4590777Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-06T02:05:37.4591548Z           on terraform_plugin_test.tf line 66, in data "mongodbatlas_advanced_clusters" "test":
2025-08-06T02:05:37.4592237Z           66: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-06T02:05:37.4592537Z         
2025-08-06T02:05:37.4592953Z         project ID 6892a24beb5d0951971651f5. Error
2025-08-06T02:05:37.4593764Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a24beb5d0951971651f5/clusters
2025-08-06T02:05:37.4594368Z         GET: HTTP 400 Bad Request (Error code:
2025-08-06T02:05:37.4595045Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-06T02:05:37.4595794Z         test-acc-tf-c-4567813620323913581 cannot be used in the Cluster API. Reason:
2025-08-06T02:05:37.4596561Z         Bad Request. Params: [test-acc-tf-c-4567813620323913581], BadRequestDetail: 
2025-08-06T02:05:37.4624605Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (1948.51s)
```

- 2025-08-07 PASS 47 minutes
- 2025-08-08 PASS 40 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 37 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 35 minutes
- 2025-08-14 PASS 40 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 26 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 35 minutes
  - PASS 27 minutes
- 2025-08-21 PASS 39 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 32 minutes
- 2025-08-25 PASS 34 minutes
- 2025-08-26 PASS 46 minutes
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-27T01:38:03.934000+00:00-TestMigAdvancedCluster_symmetricGeoShardedOldSchema',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:38:03.9348307Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-27T01:38:03.9458665Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-27T01:38:03.9677568Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-08-27T01:38:03.9678184Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:38:03.9678794Z         
2025-08-27T01:38:03.9679113Z         Error: error reading  advanced cluster list
2025-08-27T01:38:03.9679388Z         
2025-08-27T01:38:03.9679730Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-27T01:38:03.9680354Z           on terraform_plugin_test.tf line 66, in data "mongodbatlas_advanced_clusters" "test":
2025-08-27T01:38:03.9680905Z           66: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-27T01:38:03.9681190Z         
2025-08-27T01:38:03.9681634Z         project ID 68ae50f68c9e474c785b585f. Error
2025-08-27T01:38:03.9682221Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae50f68c9e474c785b585f/clusters
2025-08-27T01:38:03.9682722Z         GET: HTTP 400 Bad Request (Error code:
2025-08-27T01:38:03.9683175Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-27T01:38:03.9683765Z         test-acc-tf-c-2238956311836295560 cannot be used in the Cluster API. Reason:
2025-08-27T01:38:03.9684392Z         Bad Request. Params: [test-acc-tf-c-2238956311836295560], BadRequestDetail: 
2025-08-27T01:38:03.9694221Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (2366.83s)
```

- 2025-08-28 PASS 33 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 31 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6723107Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T00:30:49.6723473Z     shared_resource.go:93: 
2025-09-01T00:30:49.6724333Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6726032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6727750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6729451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6731148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.6733241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:812
2025-09-01T00:30:49.6735401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-09-01T00:30:49.6737586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:30
2025-09-01T00:30:49.6738444Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6741084Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6742553Z         	Test:       	TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T00:30:49.6744753Z         	Messages:   	Project creation failed: test-acc-tf-p-163122409063622516, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6746212Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (0.16s)
```

  - PASS an hour
  - FAIL 3 hours

### Error 2025-09-01T11:01:14+00:00
```
2025-09-01T11:01:14.4392792Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T11:01:14.4542122Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T11:01:14.4818559Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-09-01T11:01:14.4819188Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-09-01T11:01:14.4819733Z         
2025-09-01T11:01:14.4820003Z         Error: Error in create (legacy)
2025-09-01T11:01:14.4820255Z         
2025-09-01T11:01:14.4820574Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T11:01:14.4821203Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T11:01:14.4821777Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T11:01:14.4822077Z         
2025-09-01T11:01:14.4822520Z         cluster=test-acc-tf-c-8524302517624858336 didn't reach desired state: IDLE,
2025-09-01T11:01:14.4823121Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-09-01T11:01:14.4823542Z         'REPAIRING', timeout: 3h0m0s)
2025-09-01T11:01:14.4823935Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (10808.58s)
```

  - PASS 40 minutes
  - PASS 40 minutes
  - PASS 38 minutes
  - PASS 26 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 29 minutes
- 2025-09-03 PASS 43 minutes
- 2025-09-04 PASS 31 minutes