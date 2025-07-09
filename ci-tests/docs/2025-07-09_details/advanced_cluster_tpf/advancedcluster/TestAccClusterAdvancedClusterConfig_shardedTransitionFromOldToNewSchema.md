# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 5.09s
2025-07-02 01:46 | dev | 5.03s

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
#### PASS 21 minutes
### 2025-04-11
#### PASS 17 minutes
### 2025-04-12
#### PASS 14 minutes
### 2025-04-13
#### PASS 18 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 34 minutes
### 2025-04-16
#### PASS 18 minutes
#### PASS 20 minutes
### 2025-04-17
#### PASS 17 minutes
### 2025-04-18
#### PASS 15 minutes
### 2025-04-19
#### PASS 16 minutes
### 2025-04-20
#### PASS 17 minutes
### 2025-04-21
#### PASS 19 minutes
### 2025-04-22
#### PASS 17 minutes
### 2025-04-23
#### PASS 17 minutes
### 2025-04-24
#### PASS 14 minutes
### 2025-04-25
#### PASS 16 minutes
### 2025-04-26
#### PASS 15 minutes
### 2025-04-27
#### PASS 19 minutes
### 2025-04-28
#### PASS 14 minutes
### 2025-04-29
#### PASS 21 minutes
### 2025-04-30
#### PASS 16 minutes
### 2025-05-01
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 17 minutes
#### PASS 20 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 17 minutes
### 2025-05-02
#### PASS 19 minutes
### 2025-05-03
#### PASS 15 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 15 minutes
### 2025-05-06
#### PASS 21 minutes
### 2025-05-07
#### PASS 17 minutes
### 2025-05-08
#### PASS 18 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 20 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8022322Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-05-11T00:30:01.8022794Z     shared_resource.go:84: 
2025-05-11T00:30:01.8023669Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8025403Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8027159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8029033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8031027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:955
2025-05-11T00:30:01.8032143Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8033025Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8033776Z         	Test:       	TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-05-11T00:30:01.8034896Z         	Messages:   	Project creation failed: test-acc-tf-p-737409396717241878, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8035711Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (0.02s)
```
### 2025-05-12
#### PASS 16 minutes
### 2025-05-13
#### PASS 17 minutes
#### PASS 15 minutes
### 2025-05-14
#### PASS 19 minutes
### 2025-05-15
#### PASS 18 minutes
### 2025-05-16
#### PASS 16 minutes
### 2025-05-17
#### PASS 19 minutes
### 2025-05-18
#### PASS 16 minutes
### 2025-05-19
#### PASS 14 minutes
### 2025-05-20
#### PASS 18 minutes
### 2025-05-21
#### PASS 16 minutes
#### PASS 13 minutes
### 2025-05-22
#### PASS 17 minutes
### 2025-05-23
#### PASS 18 minutes
### 2025-05-24
#### PASS 18 minutes
### 2025-05-25
#### PASS 20 minutes
### 2025-05-26
#### PASS 14 minutes
### 2025-05-27
#### PASS 16 minutes
### 2025-05-28
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-05-29
#### PASS 25 minutes
### 2025-05-30
#### PASS an hour
#### PASS 18 minutes
### 2025-05-31
#### PASS 17 minutes
### 2025-06-01
#### PASS 19 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 16 minutes
### 2025-06-02
#### PASS 14 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 22 minutes
### 2025-06-04
#### PASS 20 minutes
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:38.5899629Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.5955919Z === CONT  TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.6096462Z === NAME  TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.6097135Z     resource_advanced_cluster_test.go:960: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6097539Z         
2025-06-05T00:35:38.6097811Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6098069Z         
2025-06-05T00:35:38.6098586Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6099250Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6099966Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6100304Z         
2025-06-05T00:35:38.6100724Z         cluster name: test-acc-tf-c-6258770482828325445, API error details:
2025-06-05T00:35:38.6101396Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dbc939f27413251721/clusters
2025-06-05T00:35:38.6102070Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6102760Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6103139Z         BadRequestDetail: 
2025-06-05T00:35:38.6119197Z    test_step_number=1 test_name=TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-06-05T00:35:38.6386839Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (5.94s)
```
### 2025-06-06
#### PASS 18 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 17 minutes
### 2025-06-09
#### PASS 16 minutes
### 2025-06-10
#### PASS 27 minutes
### 2025-06-11
#### PASS 17 minutes
#### PASS 16 minutes
### 2025-06-12
#### PASS 19 minutes
### 2025-06-13
#### PASS 19 minutes
### 2025-06-14
#### PASS 33 minutes
### 2025-06-15
#### PASS 16 minutes
### 2025-06-16
#### PASS 20 minutes
### 2025-06-17
#### PASS 17 minutes
### 2025-06-18
#### PASS 20 minutes
#### PASS 16 minutes
### 2025-06-19
#### PASS 56 minutes
### 2025-06-20
#### PASS 15 minutes
### 2025-06-21
#### PASS 15 minutes
### 2025-06-22
#### PASS 33 minutes
### 2025-06-23
#### PASS 15 minutes
### 2025-06-24
#### PASS 19 minutes
### 2025-06-25
#### PASS 15 minutes
### 2025-06-26
#### PASS 19 minutes
#### PASS 14 minutes
### 2025-06-27
#### PASS 18 minutes
### 2025-06-28
#### PASS 17 minutes
### 2025-06-29
#### PASS 19 minutes
### 2025-06-30
#### PASS 17 minutes
### 2025-07-01
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-07-02
#### FAIL 5 seconds
```
2025-07-02T01:46:50.6517037Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-07-02T01:46:50.6549801Z === CONT  TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-07-02T01:46:50.6584347Z === NAME  TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-07-02T01:46:50.6585087Z     resource_advanced_cluster_test.go:960: Step 1/3 error: Error running apply: exit status 1
2025-07-02T01:46:50.6585525Z         
2025-07-02T01:46:50.6585843Z         Error: Error in create (legacy)
2025-07-02T01:46:50.6586158Z         
2025-07-02T01:46:50.6586473Z           with mongodbatlas_advanced_cluster.test,
2025-07-02T01:46:50.6587224Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-02T01:46:50.6587901Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-02T01:46:50.6588260Z         
2025-07-02T01:46:50.6588709Z         cluster name: test-acc-tf-c-4804837102132772143, API error details:
2025-07-02T01:46:50.6589471Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68648358948ea608f1ec5ca6/clusters
2025-07-02T01:46:50.6590230Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-07-02T01:46:50.6591095Z         region is currently out of capacity for the requested instance size. Reason:
2025-07-02T01:46:50.6591681Z         Conflict. Params: [], BadRequestDetail: 
2025-07-02T01:46:50.6592255Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (5.34s)
```
### 2025-07-03
#### PASS 15 minutes
### 2025-07-04
#### PASS 20 minutes
### 2025-07-05
#### PASS 18 minutes
### 2025-07-06
#### PASS 16 minutes
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 15 minutes
### 2025-07-09
#### PASS 16 minutes