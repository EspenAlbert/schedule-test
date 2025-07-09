# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 4)
Success rate: 96.58%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-02 01:51 | dev | 1376.01s
2025-05-11 00:30 | qa | 0.00s
2025-05-28 12:04 | qa | 1008.05s
2025-06-05 00:35 | dev | 45.08s

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
#### PASS 20 minutes
### 2025-04-12
#### PASS 17 minutes
### 2025-04-13
#### PASS 20 minutes
### 2025-04-14
#### PASS 16 minutes
### 2025-04-15
#### PASS 15 minutes
### 2025-04-16
#### PASS 17 minutes
#### PASS 20 minutes
### 2025-04-17
#### PASS 17 minutes
### 2025-04-18
#### PASS 16 minutes
### 2025-04-19
#### PASS 19 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 25 minutes
### 2025-04-22
#### PASS 17 minutes
### 2025-04-23
#### PASS 18 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 16 minutes
### 2025-04-26
#### PASS 17 minutes
### 2025-04-27
#### PASS 21 minutes
### 2025-04-28
#### PASS 18 minutes
### 2025-04-29
#### PASS 21 minutes
### 2025-04-30
#### PASS 17 minutes
### 2025-05-01
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 18 minutes
#### PASS 17 minutes
### 2025-05-02
#### FAIL 22 minutes
```
2025-05-02T01:51:32.3343787Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-02T01:51:32.3393137Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-02T01:51:32.3449216Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-02T01:51:32.3450051Z     pre_check.go:40: Time before creating cluster: 2025-05-02T00:55:25.626395212Z, ProjectID: 6814177d826ec13971a61db5, Cluster name: test-acc-tf-c-704617391491513515
2025-05-02T01:51:32.3518259Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-02T01:51:32.3518826Z     resource_advanced_cluster_test.go:311: Step 4/4 error running import: exit status 1
2025-05-02T01:51:32.3519236Z         
2025-05-02T01:51:32.3519556Z         Error: error reading  advanced cluster list
2025-05-02T01:51:32.3519848Z         
2025-05-02T01:51:32.3520195Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-02T01:51:32.3521088Z           on /tmp/plugintest4051965505/work2788691207/terraform_plugin_test.tf line 42, in data "mongodbatlas_advanced_clusters" "test":
2025-05-02T01:51:32.3521817Z           42: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-02T01:51:32.3522126Z         
2025-05-02T01:51:32.3522425Z         project ID 6814177d826ec13971a61db5. Error
2025-05-02T01:51:32.3523020Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6814177d826ec13971a61db5/clusters
2025-05-02T01:51:32.3523691Z         GET: HTTP 404 Not Found (Error code: "CLUSTER_NOT_FOUND") Detail: No cluster
2025-05-02T01:51:32.3524217Z         named test-acc-tf-c-556513877969093555 exists in group
2025-05-02T01:51:32.3524692Z         6814177d826ec13971a61db5. Reason: Not Found. Params:
2025-05-02T01:51:32.3525173Z         [test-acc-tf-c-556513877969093555 6814177d826ec13971a61db5],
2025-05-02T01:51:32.3525549Z         BadRequestDetail: 
2025-05-02T01:51:32.3525788Z         
2025-05-02T01:51:32.3538465Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (1376.06s)
```
### 2025-05-03
#### PASS 17 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 17 minutes
### 2025-05-06
#### PASS 20 minutes
### 2025-05-07
#### PASS 15 minutes
### 2025-05-08
#### PASS 22 minutes
### 2025-05-09
#### PASS 19 minutes
### 2025-05-10
#### PASS 18 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7814577Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-11T00:30:01.7814937Z     shared_resource.go:84: 
2025-05-11T00:30:01.7815805Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7817525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7819251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7820972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7823095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:306
2025-05-11T00:30:01.7823900Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7824752Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7825348Z         	Test:       	TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-11T00:30:01.7826368Z         	Messages:   	Project creation failed: test-acc-tf-p-8715320641445309521, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7827087Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (0.02s)
```
### 2025-05-12
#### PASS 17 minutes
### 2025-05-13
#### PASS 17 minutes
#### PASS 14 minutes
### 2025-05-14
#### PASS 20 minutes
### 2025-05-15
#### PASS 17 minutes
### 2025-05-16
#### PASS 18 minutes
### 2025-05-17
#### PASS 18 minutes
### 2025-05-18
#### PASS 18 minutes
### 2025-05-19
#### PASS 18 minutes
### 2025-05-20
#### PASS 17 minutes
### 2025-05-21
#### PASS 17 minutes
#### PASS 14 minutes
### 2025-05-22
#### PASS 17 minutes
### 2025-05-23
#### PASS 16 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 26 minutes
### 2025-05-26
#### PASS 16 minutes
### 2025-05-27
#### PASS 16 minutes
### 2025-05-28
#### PASS 17 minutes
#### FAIL 16 minutes
```
2025-05-28T12:04:46.9781915Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9831557Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9943403Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9944240Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:04:06.039786841Z, ProjectID: 6836d0fdd000797dbe921ab2, Cluster name: test-acc-tf-c-7564314697780489913
2025-05-28T12:04:46.9998983Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9999569Z     resource_advanced_cluster_test.go:314: Step 2/4 error: Error running apply: exit status 1
2025-05-28T12:04:46.9999980Z         
2025-05-28T12:04:47.0000330Z         Error: error reading cluster with legacy API 20240530
2025-05-28T12:04:47.0000637Z         
2025-05-28T12:04:47.0000977Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T12:04:47.0001610Z           on terraform_plugin_test.tf line 42, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T12:04:47.0002329Z           42: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T12:04:47.0002623Z         
2025-05-28T12:04:47.0003069Z         cluster name: test-acc-tf-c-7167777305822092739, API error details: undefined
2025-05-28T12:04:47.0003490Z         response type
2025-05-28T12:04:47.0008751Z    test_name=TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema test_terraform_path=/home/runner/work/_temp/0bbe0b64-86f0-4111-9a0b-d75d93ae70a5/terraform test_working_directory=/tmp/plugintest2633037047
2025-05-28T12:04:47.0064317Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (1008.54s)
```
#### PASS 19 minutes
### 2025-05-29
#### PASS 25 minutes
### 2025-05-30
#### PASS an hour
#### PASS 26 minutes
### 2025-05-31
#### PASS 18 minutes
### 2025-06-01
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-02
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-03
#### PASS 16 minutes
### 2025-06-04
#### PASS 17 minutes
### 2025-06-05
#### FAIL 45 seconds
```
2025-06-05T00:35:38.5875535Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.5947796Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.6727711Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.6728494Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:11.017044967Z, ProjectID: 6840e4d6161ca93c1f05303e, Cluster name: test-acc-tf-c-3970772047223260728
2025-06-05T00:35:38.6734028Z    test_name=TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.6734369Z     resource_advanced_cluster_test.go:314: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6734571Z         
2025-06-05T00:35:38.6734722Z         Error: Error in create
2025-06-05T00:35:38.6734808Z         
2025-06-05T00:35:38.6735032Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6735483Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6735753Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6735845Z         
2025-06-05T00:35:38.6736163Z         cluster name: test-acc-tf-c-3970772047223260728, API error details:
2025-06-05T00:35:38.6736566Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6736923Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6737214Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6737349Z         BadRequestDetail: 
2025-06-05T00:35:38.6737551Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (45.79s)
```
### 2025-06-06
#### PASS 19 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 16 minutes
### 2025-06-10
#### PASS 22 minutes
### 2025-06-11
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 16 minutes
### 2025-06-13
#### PASS 17 minutes
### 2025-06-14
#### PASS 15 minutes
### 2025-06-15
#### PASS 16 minutes
### 2025-06-16
#### PASS 21 minutes
### 2025-06-17
#### PASS 15 minutes
### 2025-06-18
#### PASS 22 minutes
#### PASS 16 minutes
### 2025-06-19
#### PASS 46 minutes
### 2025-06-20
#### PASS 19 minutes
### 2025-06-21
#### PASS 15 minutes
### 2025-06-22
#### PASS 30 minutes
### 2025-06-23
#### PASS 17 minutes
### 2025-06-24
#### PASS 25 minutes
### 2025-06-25
#### PASS 14 minutes
### 2025-06-26
#### PASS 19 minutes
#### PASS 15 minutes
### 2025-06-27
#### PASS 19 minutes
### 2025-06-28
#### PASS 16 minutes
### 2025-06-29
#### PASS 19 minutes
### 2025-06-30
#### PASS 20 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 17 minutes
#### PASS 18 minutes
### 2025-07-02
#### PASS 15 minutes
### 2025-07-03
#### PASS 16 minutes
### 2025-07-04
#### PASS 20 minutes
### 2025-07-05
#### PASS 16 minutes
### 2025-07-06
#### PASS 16 minutes
### 2025-07-07
#### PASS 15 minutes
### 2025-07-08
#### PASS 18 minutes
### 2025-07-09
#### PASS 17 minutes