# cluster/cluster/TestAccCluster_basicAdvancedConf Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:28 | dev | 206.01s

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
2025-04-10: MISSING
### 2025-04-11
#### PASS 16 minutes
### 2025-04-12
#### PASS 15 minutes
### 2025-04-13
#### PASS 20 minutes
### 2025-04-14
#### PASS 13 minutes
### 2025-04-15
#### PASS 14 minutes
### 2025-04-16
#### PASS 17 minutes
#### PASS 22 minutes
### 2025-04-17
#### PASS 17 minutes
### 2025-04-18
#### PASS 18 minutes
### 2025-04-19
#### PASS 17 minutes
### 2025-04-20
#### PASS 17 minutes
### 2025-04-21
#### PASS 17 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 15 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 16 minutes
### 2025-04-26
#### PASS 15 minutes
### 2025-04-27
#### PASS 18 minutes
### 2025-04-28
#### PASS 15 minutes
### 2025-04-29
#### PASS 13 minutes
### 2025-04-30
#### PASS 23 minutes
### 2025-05-01
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-05-02
#### PASS 16 minutes
### 2025-05-03
#### PASS 14 minutes
### 2025-05-04
#### PASS 15 minutes
### 2025-05-05
#### PASS 13 minutes
### 2025-05-06
#### PASS 14 minutes
### 2025-05-07
#### PASS 17 minutes
### 2025-05-08
#### PASS 19 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 18 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:40.3209072Z === RUN   TestAccCluster_basicAdvancedConf
2025-05-11T00:29:40.3251478Z     shared_resource.go:84: 
2025-05-11T00:29:40.3253093Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3255446Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3257971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3259720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3261518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:264
2025-05-11T00:29:40.3262279Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3263153Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3263705Z         	Test:       	TestAccCluster_basicAdvancedConf
2025-05-11T00:29:40.3264701Z         	Messages:   	Project creation failed: test-acc-tf-p-3411024765240032686, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3265382Z --- FAIL: TestAccCluster_basicAdvancedConf (0.01s)
```
### 2025-05-12
#### PASS 16 minutes
### 2025-05-13
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-05-14
#### PASS 22 minutes
### 2025-05-15
#### PASS 15 minutes
### 2025-05-16
#### PASS 16 minutes
### 2025-05-17
#### PASS 16 minutes
### 2025-05-18
#### PASS 17 minutes
### 2025-05-19
#### PASS 17 minutes
### 2025-05-20
#### PASS 17 minutes
### 2025-05-21
#### PASS 15 minutes
### 2025-05-22
#### PASS 19 minutes
### 2025-05-23
#### PASS 25 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 17 minutes
### 2025-05-26
#### PASS 15 minutes
### 2025-05-27
#### PASS 13 minutes
### 2025-05-28
#### PASS 24 minutes
#### PASS 12 minutes
#### PASS 17 minutes
#### PASS 16 minutes
### 2025-05-29
#### PASS 19 minutes
#### PASS 12 minutes
### 2025-05-30
#### PASS 15 minutes
#### PASS 12 minutes
### 2025-05-31
#### PASS 15 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 13 minutes
### 2025-06-02
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 18 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:44.4428936Z === RUN   TestAccCluster_basicAdvancedConf
2025-06-05T00:28:48.8430312Z === CONT  TestAccCluster_basicAdvancedConf
2025-06-05T00:29:13.8487775Z === NAME  TestAccCluster_basicAdvancedConf
2025-06-05T00:29:13.8489912Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:13.848446329Z, ProjectID: 6840e4b9161ca93c1f051d05, Cluster name: test-acc-tf-c-6836155423534444198
2025-06-05T00:32:14.8553244Z === NAME  TestAccCluster_basicAdvancedConf
2025-06-05T00:32:14.8553797Z     resource_cluster_test.go:265: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:14.8554200Z         
2025-06-05T00:32:14.8556578Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-6836155423534444198 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:14.8557776Z         
2025-06-05T00:32:14.8558071Z           with mongodbatlas_cluster.test,
2025-06-05T00:32:14.8558674Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:32:14.8559213Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-06-05T00:32:14.8559496Z         
2025-06-05T00:32:14.9001624Z --- FAIL: TestAccCluster_basicAdvancedConf (206.06s)
```
### 2025-06-06
#### PASS 17 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 17 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 25 minutes
### 2025-06-11
#### PASS 15 minutes
#### PASS 16 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 17 minutes
### 2025-06-14
#### PASS 24 minutes
### 2025-06-15
#### PASS 16 minutes
### 2025-06-16
#### PASS 17 minutes
### 2025-06-17
#### PASS 15 minutes
### 2025-06-18
#### PASS 22 minutes
### 2025-06-19
#### PASS 34 minutes
### 2025-06-20
#### PASS 16 minutes
### 2025-06-21
#### PASS 16 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 15 minutes
### 2025-06-24
#### PASS 15 minutes
### 2025-06-25
#### PASS 15 minutes
### 2025-06-26
#### PASS 14 minutes
### 2025-06-27
#### PASS 15 minutes
### 2025-06-28
#### PASS 13 minutes
### 2025-06-29
#### PASS 17 minutes
### 2025-06-30
#### PASS 24 minutes
### 2025-07-01
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 18 minutes
### 2025-07-02
#### PASS 17 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### PASS 27 minutes
### 2025-07-05
#### PASS 13 minutes
### 2025-07-06
#### PASS 18 minutes
### 2025-07-07
#### PASS 16 minutes
### 2025-07-08
#### PASS 17 minutes
### 2025-07-09
#### PASS 32 minutes