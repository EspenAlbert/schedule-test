# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 15:21](#error-2025-08-20t1521230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68a5d4a45734606989a34643/clusters | qa | out_of_capacity | 8.06s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 47 minutes
- 2025-08-07 PASS 49 minutes
- 2025-08-08 PASS 52 minutes
- 2025-08-09 PASS 41 minutes
- 2025-08-10 PASS 42 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 51 minutes
  - PASS 31 minutes
- 2025-08-13 PASS an hour
- 2025-08-14 PASS 53 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 51 minutes
- 2025-08-18 PASS 43 minutes
- 2025-08-19 PASS 37 minutes
- 2025-08-20
  - PASS 44 minutes
  - FAIL 8 seconds

### Error 2025-08-20T15:21:23+00:00
```
2025-08-20T15:21:23.7950127Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-08-20T15:21:23.7951494Z     resource_advanced_cluster_test.go:787: Adding variable groupId=68a5d4a45734606989a34643
2025-08-20T15:21:23.7952806Z     resource_advanced_cluster_test.go:787: Adding variable clusterName=test-acc-tf-c-3062762862129722488
2025-08-20T15:21:23.8055989Z === CONT  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-08-20T15:21:23.8094168Z === NAME  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-08-20T15:21:23.8095276Z     resource_advanced_cluster_test.go:787: Step 1/3 error: Error running apply: exit status 1
2025-08-20T15:21:23.8095988Z         
2025-08-20T15:21:23.8096450Z         Error: Error in create (legacy)
2025-08-20T15:21:23.8096891Z         
2025-08-20T15:21:23.8097455Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T15:21:23.8098632Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T15:21:23.8099704Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T15:21:23.8100235Z         
2025-08-20T15:21:23.8100963Z         cluster name: test-acc-tf-c-3062762862129722488, API error details:
2025-08-20T15:21:23.8102312Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4a45734606989a34643/clusters
2025-08-20T15:21:23.8103523Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-08-20T15:21:23.8104668Z         region is currently out of capacity for the requested instance size. Reason:
2025-08-20T15:21:23.8105535Z         Conflict. Params: [], BadRequestDetail: 
2025-08-20T15:21:23.8106277Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (8.62s)
```

- 2025-08-21 PASS 47 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 44 minutes
- 2025-08-24 PASS 49 minutes
- 2025-08-25 PASS an hour
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 44 minutes
- 2025-08-28 PASS 37 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 35 minutes
- 2025-08-31 PASS 45 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7212067Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-09-01T00:30:49.7212475Z     shared_resource.go:93: 
2025-09-01T00:30:49.7213362Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7215090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7216838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7218534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7220235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7222332Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:785
2025-09-01T00:30:49.7223154Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7225934Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7227324Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-09-01T00:30:49.7229552Z         	Messages:   	Project creation failed: test-acc-tf-p-3750047602247597475, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7231022Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (0.17s)
```

  - PASS an hour
  - PASS an hour
  - PASS 43 minutes
  - PASS 36 minutes
  - PASS 33 minutes
  - PASS 34 minutes
  - PASS 36 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 47 minutes
- 2025-09-04 PASS 38 minutes