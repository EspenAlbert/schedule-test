# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_priorityNewSchema Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-05-28 12:04 | qa | 5.05s
2025-06-05 00:35 | dev | 5.10s

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
#### PASS 11 minutes
### 2025-04-12
#### PASS 12 minutes
### 2025-04-13
#### PASS 15 minutes
### 2025-04-14
#### PASS 10 minutes
### 2025-04-15
#### PASS 11 minutes
### 2025-04-16
#### PASS 20 minutes
#### PASS 19 minutes
### 2025-04-17
#### PASS 10 minutes
### 2025-04-18
#### PASS 12 minutes
### 2025-04-19
#### PASS 10 minutes
### 2025-04-20
#### PASS 13 minutes
### 2025-04-21
#### PASS 15 minutes
### 2025-04-22
#### PASS 10 minutes
### 2025-04-23
#### PASS 11 minutes
### 2025-04-24
#### PASS 11 minutes
### 2025-04-25
#### PASS 10 minutes
### 2025-04-26
#### PASS 11 minutes
### 2025-04-27
#### PASS 14 minutes
### 2025-04-28
#### PASS 12 minutes
### 2025-04-29
#### PASS 9 minutes
### 2025-04-30
#### PASS 12 minutes
### 2025-05-01
#### PASS 11 minutes
#### PASS 10 minutes
#### PASS 10 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 9 minutes
### 2025-05-02
#### PASS 16 minutes
### 2025-05-03
#### PASS 10 minutes
### 2025-05-04
#### PASS 14 minutes
### 2025-05-05
#### PASS 10 minutes
### 2025-05-06
#### PASS 13 minutes
### 2025-05-07
#### PASS 9 minutes
### 2025-05-08
#### PASS 13 minutes
### 2025-05-09
#### PASS 12 minutes
### 2025-05-10
#### PASS 13 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8065812Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-11T00:30:01.8066172Z     shared_resource.go:84: 
2025-05-11T00:30:01.8067042Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8068773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8070526Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8072629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8074650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1092
2025-05-11T00:30:01.8075471Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8076338Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8076944Z         	Test:       	TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-11T00:30:01.8077979Z         	Messages:   	Project creation failed: test-acc-tf-p-9034610379397754129, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8078702Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (0.02s)
```
### 2025-05-12
#### PASS 9 minutes
### 2025-05-13
#### PASS 11 minutes
#### PASS 9 minutes
### 2025-05-14
#### PASS 15 minutes
### 2025-05-15
#### PASS 14 minutes
### 2025-05-16
#### PASS 10 minutes
### 2025-05-17
#### PASS 10 minutes
### 2025-05-18
#### PASS 12 minutes
### 2025-05-19
#### PASS 10 minutes
### 2025-05-20
#### PASS 10 minutes
### 2025-05-21
#### PASS 13 minutes
#### PASS 11 minutes
### 2025-05-22
#### PASS 10 minutes
### 2025-05-23
#### PASS 12 minutes
### 2025-05-24
#### PASS 11 minutes
### 2025-05-25
#### PASS 12 minutes
### 2025-05-26
#### PASS 10 minutes
### 2025-05-27
#### PASS 11 minutes
### 2025-05-28
#### PASS 10 minutes
#### FAIL 5 seconds
```
2025-05-28T12:04:46.9811095Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T12:04:46.9850358Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T12:04:46.9896938Z === NAME  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T12:04:46.9897629Z     resource_advanced_cluster_test.go:1096: Step 2/4 error: Error running apply: exit status 1
2025-05-28T12:04:46.9898220Z         
2025-05-28T12:04:46.9898599Z         Error: Error in create
2025-05-28T12:04:46.9898854Z         
2025-05-28T12:04:46.9899271Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:46.9899976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:46.9900632Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:46.9901041Z         
2025-05-28T12:04:46.9901460Z         cluster name: test-acc-tf-c-6262843850112804043, API error details:
2025-05-28T12:04:46.9902364Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836d107d000797dbe921b62/clusters
2025-05-28T12:04:46.9903144Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-05-28T12:04:46.9903885Z         region is currently out of capacity for the requested instance size. Reason:
2025-05-28T12:04:46.9904481Z         Conflict. Params: [], BadRequestDetail: 
2025-05-28T12:04:46.9905529Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (5.54s)
```
#### PASS 13 minutes
### 2025-05-29
#### PASS 20 minutes
### 2025-05-30
#### PASS 14 minutes
#### PASS 18 minutes
### 2025-05-31
#### PASS 14 minutes
### 2025-06-01
#### PASS 12 minutes
#### PASS 9 minutes
#### PASS 10 minutes
#### PASS 10 minutes
#### PASS 9 minutes
### 2025-06-02
#### PASS 10 minutes
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 10 minutes
### 2025-06-03
#### PASS 10 minutes
### 2025-06-04
#### PASS 13 minutes
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:38.5905398Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:35:38.5952672Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:35:38.6209396Z === NAME  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:35:38.6210101Z     resource_advanced_cluster_test.go:1096: Step 2/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6210638Z         
2025-06-05T00:35:38.6210893Z         Error: Error in create
2025-06-05T00:35:38.6211132Z         
2025-06-05T00:35:38.6211582Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6212350Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6212992Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6213360Z         
2025-06-05T00:35:38.6213832Z         cluster name: test-acc-tf-c-7508448073880311154, API error details:
2025-06-05T00:35:38.6214602Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters
2025-06-05T00:35:38.6215393Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6216070Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6216563Z         BadRequestDetail: 
2025-06-05T00:35:38.6391411Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (5.99s)
```
### 2025-06-06
#### PASS 10 minutes
### 2025-06-07
#### PASS 10 minutes
### 2025-06-08
#### PASS 10 minutes
### 2025-06-09
#### PASS 12 minutes
### 2025-06-10
#### PASS 15 minutes
### 2025-06-11
#### PASS 11 minutes
#### PASS 13 minutes
### 2025-06-12
#### PASS 12 minutes
### 2025-06-13
#### PASS 12 minutes
### 2025-06-14
#### PASS 25 minutes
### 2025-06-15
#### PASS 14 minutes
### 2025-06-16
#### PASS 19 minutes
### 2025-06-17
#### PASS 11 minutes
### 2025-06-18
#### PASS 11 minutes
#### PASS 14 minutes
### 2025-06-19
#### PASS 38 minutes
### 2025-06-20
#### PASS 9 minutes
### 2025-06-21
#### PASS 11 minutes
### 2025-06-22
#### PASS 11 minutes
### 2025-06-23
#### PASS 9 minutes
### 2025-06-24
#### PASS 12 minutes
### 2025-06-25
#### PASS 12 minutes
### 2025-06-26
#### PASS 15 minutes
#### PASS 10 minutes
### 2025-06-27
#### PASS 10 minutes
### 2025-06-28
#### PASS 11 minutes
### 2025-06-29
#### PASS 13 minutes
### 2025-06-30
#### PASS 11 minutes
### 2025-07-01
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 10 minutes
#### PASS 12 minutes
#### PASS 11 minutes
### 2025-07-02
#### PASS 12 minutes
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 16 minutes
### 2025-07-05
#### PASS 11 minutes
### 2025-07-06
#### PASS 11 minutes
### 2025-07-07
#### PASS 12 minutes
### 2025-07-08
#### PASS 10 minutes
### 2025-07-09
#### PASS 12 minutes