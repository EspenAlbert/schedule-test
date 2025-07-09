# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 6.00s

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
#### PASS 24 minutes
### 2025-04-11
#### PASS 28 minutes
### 2025-04-12
#### PASS 24 minutes
### 2025-04-13
#### PASS 23 minutes
### 2025-04-14
#### PASS 22 minutes
### 2025-04-15
#### PASS 33 minutes
### 2025-04-16
#### PASS 24 minutes
#### PASS 25 minutes
### 2025-04-17
#### PASS 24 minutes
### 2025-04-18
#### PASS 24 minutes
### 2025-04-19
#### PASS 27 minutes
### 2025-04-20
#### PASS 24 minutes
### 2025-04-21
#### PASS 29 minutes
### 2025-04-22
#### PASS 27 minutes
### 2025-04-23
#### PASS 26 minutes
### 2025-04-24
#### PASS 23 minutes
### 2025-04-25
#### PASS 28 minutes
### 2025-04-26
#### PASS 25 minutes
### 2025-04-27
#### PASS 25 minutes
### 2025-04-28
#### PASS 23 minutes
### 2025-04-29
#### PASS 25 minutes
### 2025-04-30
#### PASS 29 minutes
### 2025-05-01
#### PASS 24 minutes
#### PASS 24 minutes
#### PASS 23 minutes
#### PASS 27 minutes
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 23 minutes
### 2025-05-02
#### PASS 30 minutes
### 2025-05-03
#### PASS 25 minutes
### 2025-05-04
#### PASS 22 minutes
### 2025-05-05
#### PASS 22 minutes
### 2025-05-06
#### PASS 30 minutes
### 2025-05-07
#### PASS 23 minutes
### 2025-05-08
#### PASS 24 minutes
### 2025-05-09
#### PASS 26 minutes
### 2025-05-10
#### PASS 24 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8135937Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-05-11T00:30:01.8136483Z     shared_resource.go:84: 
2025-05-11T00:30:01.8137716Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8139847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8142098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8144266Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8146614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1335
2025-05-11T00:30:01.8147551Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8148579Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8149424Z         	Test:       	TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-05-11T00:30:01.8150681Z         	Messages:   	Project creation failed: test-acc-tf-p-4262007482821216439, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8151827Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (0.02s)
```
### 2025-05-12
#### PASS 24 minutes
### 2025-05-13
#### PASS 22 minutes
#### PASS 21 minutes
### 2025-05-14
#### PASS 29 minutes
### 2025-05-15
#### PASS 23 minutes
### 2025-05-16
#### PASS 24 minutes
### 2025-05-17
#### PASS 24 minutes
### 2025-05-18
#### PASS 28 minutes
### 2025-05-19
#### PASS 25 minutes
### 2025-05-20
#### PASS 25 minutes
### 2025-05-21
#### PASS 26 minutes
#### PASS 21 minutes
### 2025-05-22
#### PASS 26 minutes
### 2025-05-23
#### PASS 35 minutes
### 2025-05-24
#### PASS 23 minutes
### 2025-05-25
#### PASS 31 minutes
### 2025-05-26
#### PASS 24 minutes
### 2025-05-27
#### PASS 22 minutes
### 2025-05-28
#### PASS 23 minutes
#### PASS 22 minutes
#### PASS 24 minutes
### 2025-05-29
#### PASS 34 minutes
### 2025-05-30
#### PASS an hour
#### PASS 28 minutes
### 2025-05-31
#### PASS 25 minutes
### 2025-06-01
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 23 minutes
#### PASS 22 minutes
#### PASS 23 minutes
### 2025-06-02
#### PASS 22 minutes
#### PASS 25 minutes
#### PASS 37 minutes
#### PASS 22 minutes
### 2025-06-03
#### PASS 24 minutes
### 2025-06-04
#### PASS 24 minutes
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:38.5912879Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-06-05T00:35:38.5913524Z     resource_advanced_cluster_test.go:1365: Adding variable groupId=6840e4de161ca93c1f0532d2
2025-06-05T00:35:38.5914230Z     resource_advanced_cluster_test.go:1365: Adding variable clusterName=test-acc-tf-c-4459348974422900232
2025-06-05T00:35:38.5941465Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-06-05T00:35:38.6119791Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-06-05T00:35:38.6120455Z     resource_advanced_cluster_test.go:1365: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6120865Z         
2025-06-05T00:35:38.6121110Z         Error: Error in create
2025-06-05T00:35:38.6121354Z         
2025-06-05T00:35:38.6121674Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6122309Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6122892Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6123322Z         
2025-06-05T00:35:38.6123743Z         cluster name: test-acc-tf-c-4459348974422900232, API error details:
2025-06-05T00:35:38.6124425Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4de161ca93c1f0532d2/clusters
2025-06-05T00:35:38.6125107Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6125683Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6126178Z         BadRequestDetail: 
2025-06-05T00:35:38.6132850Z    test_name=TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest986030444 test_step_number=1
2025-06-05T00:35:38.6383723Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (6.02s)
```
### 2025-06-06
#### PASS 27 minutes
### 2025-06-07
#### PASS 25 minutes
### 2025-06-08
#### PASS 23 minutes
### 2025-06-09
#### PASS 26 minutes
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 28 minutes
#### PASS 24 minutes
### 2025-06-12
#### PASS 25 minutes
### 2025-06-13
#### PASS 29 minutes
### 2025-06-14
#### PASS 48 minutes
### 2025-06-15
#### PASS 29 minutes
### 2025-06-16
#### PASS 28 minutes
### 2025-06-17
#### PASS 33 minutes
### 2025-06-18
#### PASS 29 minutes
#### PASS 24 minutes
### 2025-06-19
#### PASS 57 minutes
### 2025-06-20
#### PASS 26 minutes
### 2025-06-21
#### PASS 25 minutes
### 2025-06-22
#### PASS 27 minutes
### 2025-06-23
#### PASS 23 minutes
### 2025-06-24
#### PASS 30 minutes
### 2025-06-25
#### PASS 22 minutes
### 2025-06-26
#### PASS 26 minutes
#### PASS 20 minutes
### 2025-06-27
#### PASS 28 minutes
### 2025-06-28
#### PASS 26 minutes
### 2025-06-29
#### PASS 28 minutes
### 2025-06-30
#### PASS 26 minutes
### 2025-07-01
#### PASS 24 minutes
#### PASS 24 minutes
#### PASS 25 minutes
#### PASS 23 minutes
#### PASS 24 minutes
### 2025-07-02
#### PASS 27 minutes
### 2025-07-03
#### PASS 24 minutes
### 2025-07-04
#### PASS 25 minutes
### 2025-07-05
#### PASS 23 minutes
### 2025-07-06
#### PASS 21 minutes
### 2025-07-07
#### PASS 25 minutes
### 2025-07-08
#### PASS 37 minutes
### 2025-07-09
#### PASS 23 minutes