# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:35 | dev | 206.02s

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
#### PASS 28 minutes
### 2025-04-11
#### PASS 26 minutes
### 2025-04-12
#### PASS 24 minutes
### 2025-04-13
#### PASS 25 minutes
### 2025-04-14
#### PASS 22 minutes
### 2025-04-15
#### PASS 35 minutes
### 2025-04-16
#### PASS 24 minutes
#### PASS 30 minutes
### 2025-04-17
#### PASS 25 minutes
### 2025-04-18
#### PASS 25 minutes
### 2025-04-19
#### PASS 22 minutes
### 2025-04-20
#### PASS 27 minutes
### 2025-04-21
#### PASS 29 minutes
### 2025-04-22
#### PASS 26 minutes
### 2025-04-23
#### PASS 25 minutes
### 2025-04-24
#### PASS 25 minutes
### 2025-04-25
#### PASS 24 minutes
### 2025-04-26
#### PASS 24 minutes
### 2025-04-27
#### PASS 29 minutes
### 2025-04-28
#### PASS 24 minutes
### 2025-04-29
#### PASS 22 minutes
### 2025-04-30
#### PASS 29 minutes
### 2025-05-01
#### PASS 25 minutes
#### PASS 23 minutes
#### PASS 25 minutes
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 22 minutes
#### PASS 23 minutes
### 2025-05-02
#### PASS 26 minutes
### 2025-05-03
#### PASS 27 minutes
### 2025-05-04
#### PASS 25 minutes
### 2025-05-05
#### PASS 23 minutes
### 2025-05-06
#### PASS 24 minutes
### 2025-05-07
#### PASS 32 minutes
### 2025-05-08
#### PASS 28 minutes
### 2025-05-09
#### PASS 30 minutes
### 2025-05-10
#### PASS 25 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.8673844Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-11T00:30:09.9282148Z     shared_resource.go:84: 
2025-05-11T00:30:09.9283433Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.9285780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.9287776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.9290421Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.9293413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:335
2025-05-11T00:30:09.9294530Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.9295669Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.9296455Z         	Test:       	TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-11T00:30:09.9297838Z         	Messages:   	Project creation failed: test-acc-tf-p-3793005914218239800, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.9299141Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (0.06s)
```
### 2025-05-12
#### PASS 24 minutes
### 2025-05-13
#### PASS 25 minutes
#### PASS 22 minutes
### 2025-05-14
#### PASS 26 minutes
### 2025-05-15
#### PASS 28 minutes
### 2025-05-16
#### PASS 26 minutes
### 2025-05-17
#### PASS 26 minutes
### 2025-05-18
#### PASS 24 minutes
### 2025-05-19
#### PASS 27 minutes
### 2025-05-20
#### PASS 25 minutes
### 2025-05-21
#### PASS 27 minutes
### 2025-05-22
#### PASS 24 minutes
### 2025-05-23
#### PASS 23 minutes
### 2025-05-24
#### PASS 22 minutes
### 2025-05-25
#### PASS 25 minutes
### 2025-05-26
#### PASS 26 minutes
### 2025-05-27
#### PASS 23 minutes
### 2025-05-28
#### PASS 22 minutes
#### PASS 25 minutes
#### PASS 25 minutes
### 2025-05-29
#### PASS 28 minutes
#### PASS 22 minutes
### 2025-05-30
#### PASS an hour
#### PASS 26 minutes
### 2025-05-31
#### PASS 22 minutes
### 2025-06-01
#### PASS 22 minutes
#### PASS 23 minutes
#### PASS 19 minutes
#### PASS 23 minutes
#### PASS 22 minutes
#### PASS 22 minutes
### 2025-06-02
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 22 minutes
### 2025-06-03
#### PASS 24 minutes
### 2025-06-04
#### PASS 25 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:27.2506292Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:35:42.8407745Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:36:07.8197536Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:36:07.8199289Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:07.81945877Z, ProjectID: 6840e64cc939f2741325293e, Cluster name: test-acc-tf-c-5208104313455434057
2025-06-05T00:39:08.9562037Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:39:08.9562952Z     resource_advanced_cluster_test.go:342: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:39:08.9563611Z         
2025-06-05T00:39:08.9566135Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64cc939f2741325293e/clusters/test-acc-tf-c-5208104313455434057 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:08.9567598Z         
2025-06-05T00:39:08.9568026Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:08.9568869Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:08.9577795Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:08.9578318Z         
2025-06-05T00:39:09.0036158Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (206.19s)
```
### 2025-06-06
#### PASS 28 minutes
### 2025-06-07
#### PASS 26 minutes
### 2025-06-08
#### PASS 22 minutes
### 2025-06-09
#### PASS 23 minutes
### 2025-06-10
#### PASS 34 minutes
### 2025-06-11
#### PASS 25 minutes
#### PASS 32 minutes
### 2025-06-12
#### PASS 27 minutes
### 2025-06-13
#### PASS 26 minutes
### 2025-06-14
#### PASS 46 minutes
### 2025-06-15
#### PASS 24 minutes
### 2025-06-16
#### PASS an hour
### 2025-06-17
#### PASS 22 minutes
### 2025-06-18
#### PASS 29 minutes
#### PASS 23 minutes
### 2025-06-19
#### PASS 53 minutes
### 2025-06-20
#### PASS 26 minutes
### 2025-06-21
#### PASS 25 minutes
### 2025-06-22
#### PASS 25 minutes
### 2025-06-23
#### PASS 23 minutes
### 2025-06-24
#### PASS 28 minutes
### 2025-06-25
#### PASS 22 minutes
### 2025-06-26
#### PASS 24 minutes
### 2025-06-27
#### PASS 28 minutes
### 2025-06-28
#### PASS 24 minutes
### 2025-06-29
#### PASS 26 minutes
### 2025-06-30
#### PASS 26 minutes
### 2025-07-01
#### PASS 25 minutes
#### PASS 25 minutes
#### PASS 22 minutes
#### PASS 24 minutes
#### PASS 25 minutes
### 2025-07-02
#### PASS 23 minutes
### 2025-07-03
#### PASS 24 minutes
### 2025-07-04
#### PASS 26 minutes
### 2025-07-05
#### PASS 23 minutes
### 2025-07-06
#### PASS 22 minutes
### 2025-07-07
#### PASS 23 minutes
### 2025-07-08
#### PASS 24 minutes
### 2025-07-09
#### PASS 24 minutes