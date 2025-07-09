# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priorityNewSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-27 01:01 | qa | 5.01s
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:35 | dev | 185.08s

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
#### PASS 16 minutes
### 2025-04-11
#### PASS 32 minutes
### 2025-04-12
#### PASS 10 minutes
### 2025-04-13
#### PASS 17 minutes
### 2025-04-14
#### PASS 13 minutes
### 2025-04-15
#### PASS 29 minutes
### 2025-04-16
#### PASS 10 minutes
#### PASS 18 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 14 minutes
### 2025-04-19
#### PASS 12 minutes
### 2025-04-20
#### PASS 14 minutes
### 2025-04-21
#### PASS 15 minutes
### 2025-04-22
#### PASS 15 minutes
### 2025-04-23
#### PASS 13 minutes
### 2025-04-24
#### PASS 12 minutes
### 2025-04-25
#### PASS 13 minutes
### 2025-04-26
#### PASS 12 minutes
### 2025-04-27
#### FAIL 5 seconds
```
2025-04-27T01:01:26.8806237Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-04-27T01:02:33.4837227Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-04-27T01:02:38.4031873Z === NAME  TestAccClusterAdvancedCluster_priorityNewSchema
2025-04-27T01:02:38.4033268Z     resource_advanced_cluster_test.go:1093: Step 2/4 error: Error running apply: exit status 1
2025-04-27T01:02:38.4034186Z         
2025-04-27T01:02:38.4037219Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d81e57d8b396a09996f30/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-04-27T01:02:38.4039340Z         
2025-04-27T01:02:38.4040094Z           with mongodbatlas_advanced_cluster.test,
2025-04-27T01:02:38.4041489Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-27T01:02:38.4042727Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-04-27T01:02:38.4043512Z         
2025-04-27T01:02:38.5838133Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (5.14s)
```
### 2025-04-28
#### PASS 13 minutes
### 2025-04-29
#### PASS 11 minutes
### 2025-04-30
#### PASS 13 minutes
### 2025-05-01
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 11 minutes
### 2025-05-02
#### PASS 15 minutes
### 2025-05-03
#### PASS 13 minutes
### 2025-05-04
#### PASS 13 minutes
### 2025-05-05
#### PASS 12 minutes
### 2025-05-06
#### PASS 12 minutes
### 2025-05-07
#### PASS 14 minutes
### 2025-05-08
#### PASS 14 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 12 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:10.9047316Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-11T00:30:10.9648740Z     shared_resource.go:84: 
2025-05-11T00:30:10.9650194Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.9652255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.9654127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.9655965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.9658111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1092
2025-05-11T00:30:10.9659307Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.9660228Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.9660983Z         	Test:       	TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-11T00:30:10.9662044Z         	Messages:   	Project creation failed: test-acc-tf-p-7650371276293322427, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.9662770Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (0.06s)
```
### 2025-05-12
#### PASS 14 minutes
### 2025-05-13
#### PASS 12 minutes
#### PASS 14 minutes
### 2025-05-14
#### PASS 15 minutes
### 2025-05-15
#### PASS 17 minutes
### 2025-05-16
#### PASS 18 minutes
### 2025-05-17
#### PASS 13 minutes
### 2025-05-18
#### PASS 12 minutes
### 2025-05-19
#### PASS 13 minutes
### 2025-05-20
#### PASS 14 minutes
### 2025-05-21
#### PASS 13 minutes
### 2025-05-22
#### PASS 13 minutes
### 2025-05-23
#### PASS 12 minutes
### 2025-05-24
#### PASS 13 minutes
### 2025-05-25
#### PASS 13 minutes
### 2025-05-26
#### PASS 14 minutes
### 2025-05-27
#### PASS 12 minutes
### 2025-05-28
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-05-29
#### PASS 20 minutes
#### PASS 12 minutes
### 2025-05-30
#### PASS an hour
#### PASS 16 minutes
### 2025-05-31
#### PASS 14 minutes
### 2025-06-01
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 10 minutes
### 2025-06-02
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 14 minutes
### 2025-06-03
#### PASS 14 minutes
### 2025-06-04
#### PASS 16 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:39.9464866Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:35:42.8427800Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:38:48.6162880Z === NAME  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:38:48.6163729Z     resource_advanced_cluster_test.go:1096: Step 2/4 error: Error running apply: exit status 1
2025-06-05T00:38:48.6164163Z         
2025-06-05T00:38:48.6167209Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e657161ca93c1f054546/clusters/test-acc-tf-c-2155781525872834005 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.6168427Z         
2025-06-05T00:38:48.6168757Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.6169642Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.6170360Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.6170815Z         
2025-06-05T00:38:48.6611576Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (185.83s)
```
### 2025-06-06
#### PASS 16 minutes
### 2025-06-07
#### PASS 11 minutes
### 2025-06-08
#### PASS 13 minutes
### 2025-06-09
#### PASS 27 minutes
### 2025-06-10
#### PASS 12 minutes
### 2025-06-11
#### PASS 13 minutes
#### PASS 19 minutes
### 2025-06-12
#### PASS 13 minutes
### 2025-06-13
#### PASS 13 minutes
### 2025-06-14
#### PASS 25 minutes
### 2025-06-15
#### PASS 13 minutes
### 2025-06-16
#### PASS 12 minutes
### 2025-06-17
#### PASS 15 minutes
### 2025-06-18
#### PASS 15 minutes
#### PASS 10 minutes
### 2025-06-19
#### PASS 45 minutes
### 2025-06-20
#### PASS 14 minutes
### 2025-06-21
#### PASS 16 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 12 minutes
### 2025-06-24
#### PASS 23 minutes
### 2025-06-25
#### PASS 13 minutes
### 2025-06-26
#### PASS 11 minutes
### 2025-06-27
#### PASS 10 minutes
### 2025-06-28
#### PASS 15 minutes
### 2025-06-29
#### PASS 13 minutes
### 2025-06-30
#### PASS 16 minutes
### 2025-07-01
#### PASS 13 minutes
#### PASS 11 minutes
#### PASS 13 minutes
#### PASS 15 minutes
#### PASS 12 minutes
### 2025-07-02
#### PASS 14 minutes
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 11 minutes
### 2025-07-05
#### PASS 14 minutes
### 2025-07-06
#### PASS 15 minutes
### 2025-07-07
#### PASS 12 minutes
### 2025-07-08
#### PASS 11 minutes
### 2025-07-09
#### PASS 13 minutes