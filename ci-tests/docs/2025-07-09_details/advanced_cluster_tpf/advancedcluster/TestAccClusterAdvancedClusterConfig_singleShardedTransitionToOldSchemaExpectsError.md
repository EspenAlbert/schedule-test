# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-20 01:53 | qa | 5.02s
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 5.09s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
### 2025-04-10
#### PASS 20 minutes
### 2025-04-11
#### PASS 21 minutes
### 2025-04-12
#### PASS 15 minutes
### 2025-04-13
#### PASS 22 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 14 minutes
### 2025-04-16
#### PASS 15 minutes
#### PASS 19 minutes
### 2025-04-17
#### PASS 17 minutes
### 2025-04-18
#### PASS 13 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### FAIL 5 seconds
```
2025-04-20T01:53:34.4203946Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-04-20T01:53:34.4256534Z === CONT  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-04-20T01:53:34.4299796Z === NAME  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-04-20T01:53:34.4300631Z     resource_advanced_cluster_test.go:636: Step 1/3 error: Error running apply: exit status 1
2025-04-20T01:53:34.4301395Z         
2025-04-20T01:53:34.4301649Z         Error: Error in create
2025-04-20T01:53:34.4302002Z         
2025-04-20T01:53:34.4302329Z           with mongodbatlas_advanced_cluster.test,
2025-04-20T01:53:34.4303087Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-20T01:53:34.4303678Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-04-20T01:53:34.4303982Z         
2025-04-20T01:53:34.4304493Z         cluster name test-acc-tf-c-159854880635744823. API error detail
2025-04-20T01:53:34.4305182Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680445df5977e021cda51d9f/clusters
2025-04-20T01:53:34.4305867Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-04-20T01:53:34.4306620Z         region is currently out of capacity for the requested instance size. Reason:
2025-04-20T01:53:34.4307124Z         Conflict. Params: [], BadRequestDetail: 
2025-04-20T01:53:34.4307667Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (5.17s)
```
### 2025-04-21
#### PASS 20 minutes
### 2025-04-22
#### PASS 14 minutes
### 2025-04-23
#### PASS 15 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 14 minutes
### 2025-04-26
#### PASS 17 minutes
### 2025-04-27
#### PASS 21 minutes
### 2025-04-28
#### PASS 16 minutes
### 2025-04-29
#### PASS 17 minutes
### 2025-04-30
#### PASS 16 minutes
### 2025-05-01
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 19 minutes
#### PASS 16 minutes
#### PASS 13 minutes
#### PASS 19 minutes
### 2025-05-02
#### PASS 17 minutes
### 2025-05-03
#### PASS 16 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 15 minutes
### 2025-05-06
#### PASS 17 minutes
### 2025-05-07
#### PASS 15 minutes
### 2025-05-08
#### PASS 17 minutes
### 2025-05-09
#### PASS 20 minutes
### 2025-05-10
#### PASS 15 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7915380Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-05-11T00:30:01.7915996Z     shared_resource.go:84: 
2025-05-11T00:30:01.7917002Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7918965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7921028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7923168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7925276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:634
2025-05-11T00:30:01.7926089Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7927062Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7927875Z         	Test:       	TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-05-11T00:30:01.7929048Z         	Messages:   	Project creation failed: test-acc-tf-p-4871492605085132183, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7929918Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (0.02s)
```
### 2025-05-12
#### PASS 14 minutes
### 2025-05-13
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 17 minutes
### 2025-05-15
#### PASS 17 minutes
### 2025-05-16
#### PASS 13 minutes
### 2025-05-17
#### PASS 15 minutes
### 2025-05-18
#### PASS 17 minutes
### 2025-05-19
#### PASS 23 minutes
### 2025-05-20
#### PASS 16 minutes
### 2025-05-21
#### PASS 16 minutes
#### PASS 14 minutes
### 2025-05-22
#### PASS 15 minutes
### 2025-05-23
#### PASS 20 minutes
### 2025-05-24
#### PASS 17 minutes
### 2025-05-25
#### PASS 25 minutes
### 2025-05-26
#### PASS 14 minutes
### 2025-05-27
#### PASS 15 minutes
### 2025-05-28
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-05-29
#### PASS 28 minutes
### 2025-05-30
#### PASS an hour
#### PASS 21 minutes
### 2025-05-31
#### PASS 16 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 12 minutes
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-02
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 15 minutes
### 2025-06-03
#### PASS 16 minutes
### 2025-06-04
#### PASS 13 minutes
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:38.5882407Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-06-05T00:35:38.5945223Z === CONT  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-06-05T00:35:38.6138742Z === NAME  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-06-05T00:35:38.6139471Z     resource_advanced_cluster_test.go:639: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6139886Z         
2025-06-05T00:35:38.6140134Z         Error: Error in create
2025-06-05T00:35:38.6140374Z         
2025-06-05T00:35:38.6140701Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6141342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6141924Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6142238Z         
2025-06-05T00:35:38.6142642Z         cluster name: test-acc-tf-c-7271233390828884781, API error details:
2025-06-05T00:35:38.6143309Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d7c939f274132515df/clusters
2025-06-05T00:35:38.6144000Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6144573Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6144955Z         BadRequestDetail: 
2025-06-05T00:35:38.6157262Z   
2025-06-05T00:35:38.6382533Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (5.92s)
```
### 2025-06-06
#### PASS 14 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 14 minutes
### 2025-06-10
#### PASS 21 minutes
### 2025-06-11
#### PASS 17 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 15 minutes
### 2025-06-14
#### PASS 21 minutes
### 2025-06-15
#### PASS 15 minutes
### 2025-06-16
#### PASS 18 minutes
### 2025-06-17
#### PASS 15 minutes
### 2025-06-18
#### PASS 20 minutes
#### PASS 14 minutes
### 2025-06-19
#### PASS 56 minutes
### 2025-06-20
#### PASS 15 minutes
### 2025-06-21
#### PASS 16 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 23 minutes
### 2025-06-25
#### PASS 15 minutes
### 2025-06-26
#### PASS 27 minutes
#### PASS 14 minutes
### 2025-06-27
#### PASS 15 minutes
### 2025-06-28
#### PASS 16 minutes
### 2025-06-29
#### PASS 18 minutes
### 2025-06-30
#### PASS 17 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 18 minutes
### 2025-07-02
#### PASS 15 minutes
### 2025-07-03
#### PASS 14 minutes
### 2025-07-04
#### PASS 18 minutes
### 2025-07-05
#### PASS 14 minutes
### 2025-07-06
#### PASS 17 minutes
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 21 minutes
### 2025-07-09
#### PASS 15 minutes