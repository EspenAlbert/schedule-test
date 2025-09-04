# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:31](#error-2025-08-17t0031430000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68a122ecaafa9a76ca8bd6a8/clusters | qa | out_of_capacity | 5.05s
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 32 minutes
- 2025-08-08 PASS 22 minutes
- 2025-08-09 PASS 27 minutes
- 2025-08-10 PASS 33 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-08-13 PASS 29 minutes
- 2025-08-14 PASS 26 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17

### Error 2025-08-17T00:31:43+00:00
```
2025-08-17T00:31:43.1722695Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-08-17T00:32:50.9227765Z === CONT  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-08-17T00:32:56.1508807Z === NAME  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-08-17T00:32:56.1510172Z     resource_advanced_cluster_test.go:640: Step 1/3 error: Error running apply: exit status 1
2025-08-17T00:32:56.1510904Z         
2025-08-17T00:32:56.1514055Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122ecaafa9a76ca8bd6a8/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-08-17T00:32:56.1516394Z         
2025-08-17T00:32:56.1516978Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T00:32:56.1518119Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T00:32:56.1519187Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T00:32:56.1519739Z         
2025-08-17T00:32:56.4302145Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (5.51s)
```

- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 21 minutes
- 2025-08-20
  - PASS 23 minutes
  - PASS 41 minutes
- 2025-08-21 PASS 20 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 19 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 29 minutes
- 2025-08-28 PASS 24 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.4018139Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-09-01T00:30:42.5239476Z     shared_resource.go:93: 
2025-09-01T00:30:42.5241288Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:42.5243684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:42.5246107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:42.5248282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:42.5250456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:42.5252523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:639
2025-09-01T00:30:42.5253375Z         	Error:      	Received unexpected error:
2025-09-01T00:30:42.5256230Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.5257809Z         	Test:       	TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-09-01T00:30:42.5260210Z         	Messages:   	Project creation failed: test-acc-tf-p-8863841474986683350, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:42.5262263Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (0.12s)
```

  - PASS 30 minutes
  - PASS an hour
  - PASS 22 minutes
  - PASS 33 minutes
  - PASS 35 minutes
  - PASS 18 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 28 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 28 minutes