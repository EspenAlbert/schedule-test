# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 6.07s

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
#### PASS 41 minutes
### 2025-04-11
#### PASS 37 minutes
### 2025-04-12
#### PASS 31 minutes
### 2025-04-13
#### PASS 40 minutes
### 2025-04-14
#### PASS 31 minutes
### 2025-04-15
#### PASS 43 minutes
### 2025-04-16
#### PASS 31 minutes
#### PASS 40 minutes
### 2025-04-17
#### PASS 35 minutes
### 2025-04-18
#### PASS 33 minutes
### 2025-04-19
#### PASS 33 minutes
### 2025-04-20
#### PASS 35 minutes
### 2025-04-21
#### PASS 38 minutes
### 2025-04-22
#### PASS 37 minutes
### 2025-04-23
#### PASS 33 minutes
### 2025-04-24
#### PASS 32 minutes
### 2025-04-25
#### PASS 34 minutes
### 2025-04-26
#### PASS 34 minutes
### 2025-04-27
#### PASS 39 minutes
### 2025-04-28
#### PASS 31 minutes
### 2025-04-29
#### PASS 34 minutes
### 2025-04-30
#### PASS 37 minutes
### 2025-05-01
#### PASS 34 minutes
#### PASS 34 minutes
#### PASS 33 minutes
#### PASS 33 minutes
#### PASS 32 minutes
#### PASS 32 minutes
#### PASS 31 minutes
### 2025-05-02
#### PASS 39 minutes
### 2025-05-03
#### PASS 33 minutes
### 2025-05-04
#### PASS 30 minutes
### 2025-05-05
#### PASS 33 minutes
### 2025-05-06
#### PASS 37 minutes
### 2025-05-07
#### PASS 38 minutes
### 2025-05-08
#### PASS 37 minutes
### 2025-05-09
#### PASS 36 minutes
### 2025-05-10
#### PASS 34 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7854408Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-05-11T00:30:01.7854771Z     shared_resource.go:84: 
2025-05-11T00:30:01.7855651Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7857380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7859129Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7860869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7863117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:411
2025-05-11T00:30:01.7863973Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7864833Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7865430Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2025-05-11T00:30:01.7866455Z         	Messages:   	Project creation failed: test-acc-tf-p-2449848424693079251, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7867166Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.02s)
```
### 2025-05-12
#### PASS 36 minutes
### 2025-05-13
#### PASS 33 minutes
#### PASS 30 minutes
### 2025-05-14
#### PASS 37 minutes
### 2025-05-15
#### PASS 34 minutes
### 2025-05-16
#### PASS 33 minutes
### 2025-05-17
#### PASS 31 minutes
### 2025-05-18
#### PASS 35 minutes
### 2025-05-19
#### PASS 38 minutes
### 2025-05-20
#### PASS 34 minutes
### 2025-05-21
#### PASS 34 minutes
#### PASS 29 minutes
### 2025-05-22
#### PASS 35 minutes
### 2025-05-23
#### PASS 35 minutes
### 2025-05-24
#### PASS 33 minutes
### 2025-05-25
#### PASS 43 minutes
### 2025-05-26
#### PASS 33 minutes
### 2025-05-27
#### PASS 34 minutes
### 2025-05-28
#### PASS 31 minutes
#### PASS 30 minutes
#### PASS 35 minutes
### 2025-05-29
#### PASS 40 minutes
### 2025-05-30
#### PASS an hour
#### PASS 42 minutes
### 2025-05-31
#### PASS 35 minutes
### 2025-06-01
#### PASS 30 minutes
#### PASS 31 minutes
#### PASS 31 minutes
#### PASS 30 minutes
#### PASS 29 minutes
### 2025-06-02
#### PASS 33 minutes
#### PASS 32 minutes
#### PASS 37 minutes
#### PASS 29 minutes
### 2025-06-03
#### PASS 32 minutes
### 2025-06-04
#### PASS 34 minutes
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:38.5878358Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:35:38.5940457Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:35:38.5984830Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:35:38.5985680Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:31.005398369Z, ProjectID: 6840e4d6161ca93c1f05303e, Cluster name: test-acc-tf-c-7195182409174762846
2025-06-05T00:35:38.6568034Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:35:38.6568787Z     resource_advanced_cluster_test.go:458: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6569212Z         
2025-06-05T00:35:38.6569478Z         Error: Error in create
2025-06-05T00:35:38.6569727Z         
2025-06-05T00:35:38.6570054Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6570704Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6571409Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6571721Z         
2025-06-05T00:35:38.6572137Z         cluster name: test-acc-tf-c-7195182409174762846, API error details:
2025-06-05T00:35:38.6572815Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6573498Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6574083Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6574464Z         BadRequestDetail: 
2025-06-05T00:35:38.6574796Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (6.72s)
```
### 2025-06-06
#### PASS 36 minutes
### 2025-06-07
#### PASS 37 minutes
### 2025-06-08
#### PASS 33 minutes
### 2025-06-09
#### PASS 48 minutes
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 31 minutes
#### PASS 40 minutes
### 2025-06-12
#### PASS 33 minutes
### 2025-06-13
#### PASS 42 minutes
### 2025-06-14
#### PASS 54 minutes
### 2025-06-15
#### PASS 32 minutes
### 2025-06-16
#### PASS 33 minutes
### 2025-06-17
#### PASS 31 minutes
### 2025-06-18
#### PASS 37 minutes
#### PASS 30 minutes
### 2025-06-19
#### PASS 59 minutes
### 2025-06-20
#### PASS 35 minutes
### 2025-06-21
#### PASS 36 minutes
### 2025-06-22
#### PASS 42 minutes
### 2025-06-23
#### PASS 31 minutes
### 2025-06-24
#### PASS 41 minutes
### 2025-06-25
#### PASS 31 minutes
### 2025-06-26
#### PASS 42 minutes
#### PASS 30 minutes
### 2025-06-27
#### PASS 45 minutes
### 2025-06-28
#### PASS 35 minutes
### 2025-06-29
#### PASS 37 minutes
### 2025-06-30
#### PASS 39 minutes
### 2025-07-01
#### PASS 32 minutes
#### PASS 33 minutes
#### PASS 33 minutes
#### PASS 32 minutes
#### PASS 49 minutes
### 2025-07-02
#### PASS 35 minutes
### 2025-07-03
#### PASS 32 minutes
### 2025-07-04
#### PASS 37 minutes
### 2025-07-05
#### PASS 32 minutes
### 2025-07-06
#### PASS 33 minutes
### 2025-07-07
#### PASS 31 minutes
### 2025-07-08
#### PASS 38 minutes
### 2025-07-09
#### PASS 32 minutes