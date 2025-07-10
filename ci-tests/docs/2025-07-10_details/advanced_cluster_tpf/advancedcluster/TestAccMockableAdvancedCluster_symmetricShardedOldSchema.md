# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d9c939f27413251648/clusters | dev | flaky_500 | 7.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 28 minutes
- 2025-04-13 PASS an hour
- 2025-04-14 PASS 26 minutes
- 2025-04-15 PASS 38 minutes
- 2025-04-16
  - PASS 28 minutes
  - PASS 31 minutes
- 2025-04-17 PASS 28 minutes
- 2025-04-18 PASS 30 minutes
- 2025-04-19 PASS 32 minutes
- 2025-04-20 PASS 27 minutes
- 2025-04-21 PASS 34 minutes
- 2025-04-22 PASS 28 minutes
- 2025-04-23 PASS 30 minutes
- 2025-04-24 PASS 27 minutes
- 2025-04-25 PASS 28 minutes
- 2025-04-26 PASS 30 minutes
- 2025-04-27 PASS 28 minutes
- 2025-04-28 PASS 28 minutes
- 2025-04-29 PASS 26 minutes
- 2025-04-30 PASS 24 minutes
- 2025-05-01
  - PASS 27 minutes
  - PASS 29 minutes
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 25 minutes
- 2025-05-02 PASS 36 minutes
- 2025-05-03 PASS 29 minutes
- 2025-05-04 PASS 25 minutes
- 2025-05-05 PASS 25 minutes
- 2025-05-06 PASS 40 minutes
- 2025-05-07 PASS 32 minutes
- 2025-05-08 PASS 29 minutes
- 2025-05-09 PASS 32 minutes
- 2025-05-10 PASS 30 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7960551Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-05-11T00:30:01.7960947Z     shared_resource.go:84: 
2025-05-11T00:30:01.7961912Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7963683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7965437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7967291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7969283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:780
2025-05-11T00:30:01.7970092Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7970964Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7971749Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-05-11T00:30:01.7972823Z         	Messages:   	Project creation failed: test-acc-tf-p-2220537766831947204, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7973584Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (0.02s)
```

- 2025-05-12 PASS 28 minutes
- 2025-05-13
  - PASS 28 minutes
  - PASS 29 minutes
- 2025-05-14 PASS 33 minutes
- 2025-05-15 PASS 32 minutes
- 2025-05-16 PASS 29 minutes
- 2025-05-17 PASS 29 minutes
- 2025-05-18 PASS 27 minutes
- 2025-05-19 PASS 28 minutes
- 2025-05-20 PASS 30 minutes
- 2025-05-21
  - PASS 29 minutes
  - PASS 53 minutes
- 2025-05-22 PASS 28 minutes
- 2025-05-23 PASS 31 minutes
- 2025-05-24 PASS 28 minutes
- 2025-05-25 PASS 33 minutes
- 2025-05-26 PASS 30 minutes
- 2025-05-27 PASS 29 minutes
- 2025-05-28
  - PASS 25 minutes
  - PASS 30 minutes
  - PASS 35 minutes
- 2025-05-29 PASS an hour
- 2025-05-30
  - PASS an hour
  - PASS 30 minutes
- 2025-05-31 PASS 26 minutes
- 2025-06-01
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 24 minutes
  - PASS 24 minutes
  - PASS 30 minutes
- 2025-06-02
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 27 minutes
- 2025-06-03 PASS 27 minutes
- 2025-06-04 PASS 30 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5887839Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-06-05T00:35:38.5888620Z     resource_advanced_cluster_test.go:786: Adding variable groupId=6840e4d9c939f27413251648
2025-06-05T00:35:38.5889330Z     resource_advanced_cluster_test.go:786: Adding variable clusterName=test-acc-tf-c-6084116107206540504
2025-06-05T00:35:38.5939146Z === CONT  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-06-05T00:35:38.6310249Z === NAME  TestAccMockableAdvancedCluster_symmetricShardedOldSchema
2025-06-05T00:35:38.6311369Z     resource_advanced_cluster_test.go:786: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6312083Z         
2025-06-05T00:35:38.6312552Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6313189Z         
2025-06-05T00:35:38.6313776Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6314965Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6316043Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6316599Z         
2025-06-05T00:35:38.6317354Z         cluster name: test-acc-tf-c-6084116107206540504, API error details:
2025-06-05T00:35:38.6318757Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d9c939f27413251648/clusters
2025-06-05T00:35:38.6320022Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6321075Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6321771Z         BadRequestDetail: 
2025-06-05T00:35:38.6343151Z   
2025-06-05T00:35:38.6387871Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchema (7.89s)
```

- 2025-06-06 PASS an hour
- 2025-06-07 PASS 45 minutes
- 2025-06-08 PASS 23 minutes
- 2025-06-09 PASS 31 minutes
- 2025-06-10 PASS an hour
- 2025-06-11
  - PASS 27 minutes
  - PASS 56 minutes
- 2025-06-12 PASS 31 minutes
- 2025-06-13 PASS 29 minutes
- 2025-06-14 PASS an hour
- 2025-06-15 PASS 25 minutes
- 2025-06-16 PASS 42 minutes
- 2025-06-17 PASS 27 minutes
- 2025-06-18
  - PASS 30 minutes
  - PASS 27 minutes
- 2025-06-19 PASS 58 minutes
- 2025-06-20 PASS 29 minutes
- 2025-06-21 PASS 28 minutes
- 2025-06-22 PASS 37 minutes
- 2025-06-23 PASS 24 minutes
- 2025-06-24 PASS 30 minutes
- 2025-06-25 PASS 49 minutes
- 2025-06-26
  - PASS 31 minutes
  - PASS 23 minutes
- 2025-06-27 PASS 30 minutes
- 2025-06-28 PASS 27 minutes
- 2025-06-29 PASS 28 minutes
- 2025-06-30 PASS 32 minutes
- 2025-07-01
  - PASS 29 minutes
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 28 minutes
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 28 minutes
- 2025-07-04 PASS 31 minutes
- 2025-07-05 PASS 26 minutes
- 2025-07-06 PASS 24 minutes
- 2025-07-07 PASS 28 minutes
- 2025-07-08 PASS 28 minutes
- 2025-07-09 PASS 27 minutes
- 2025-07-10 PASS 26 minutes