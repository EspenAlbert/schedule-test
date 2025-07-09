# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 112 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 2)
Success rate: 98.21%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:28 | dev | 196.03s

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
#### PASS 12 minutes
### 2025-04-12
#### PASS 12 minutes
### 2025-04-13
#### PASS 18 minutes
### 2025-04-14
#### PASS 12 minutes
### 2025-04-15
#### PASS 13 minutes
### 2025-04-16
#### PASS 12 minutes
#### PASS 21 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 12 minutes
### 2025-04-19
#### PASS 12 minutes
### 2025-04-20
#### PASS 16 minutes
### 2025-04-21
#### PASS 12 minutes
### 2025-04-22
#### PASS 12 minutes
### 2025-04-23
#### PASS 13 minutes
### 2025-04-24
#### PASS 13 minutes
### 2025-04-25
#### PASS 12 minutes
### 2025-04-26
#### PASS 15 minutes
### 2025-04-27
#### PASS 14 minutes
### 2025-04-28
#### PASS 12 minutes
### 2025-04-29
#### PASS 13 minutes
### 2025-04-30
#### PASS 16 minutes
### 2025-05-01
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 12 minutes
#### PASS 13 minutes
### 2025-05-02
#### PASS 14 minutes
### 2025-05-03
#### PASS 13 minutes
### 2025-05-04
#### PASS 14 minutes
### 2025-05-05
#### PASS 13 minutes
### 2025-05-06
#### PASS 13 minutes
### 2025-05-07
#### PASS 12 minutes
### 2025-05-08
#### PASS 16 minutes
### 2025-05-09
#### PASS 17 minutes
### 2025-05-10
#### PASS 15 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:47.1191571Z === RUN   TestAccGlobalClusterConfig_iss
2025-05-11T00:29:47.1192177Z     resource_global_cluster_config_test.go:52: Creating execution project: test-acc-tf-p-4410125281350539612
2025-05-11T00:29:47.1235156Z     resource_global_cluster_config_test.go:52: 
2025-05-11T00:29:47.1237344Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:47.1240016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:47.1242349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:47.1246308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:52
2025-05-11T00:29:47.1247656Z         	Error:      	Received unexpected error:
2025-05-11T00:29:47.1248738Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1249686Z         	Test:       	TestAccGlobalClusterConfig_iss
2025-05-11T00:29:47.1251139Z         	Messages:   	Project creation failed: test-acc-tf-p-4410125281350539612, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1251829Z --- FAIL: TestAccGlobalClusterConfig_iss (0.01s)
```
### 2025-05-12
#### PASS 17 minutes
### 2025-05-13
#### PASS 13 minutes
#### PASS 13 minutes
### 2025-05-14
#### PASS 17 minutes
### 2025-05-15
#### PASS 14 minutes
### 2025-05-16
#### PASS 13 minutes
### 2025-05-17
#### PASS 13 minutes
### 2025-05-18
#### PASS 38 minutes
### 2025-05-19
#### PASS 14 minutes
### 2025-05-20
#### PASS 13 minutes
### 2025-05-21
#### PASS 14 minutes
### 2025-05-22
#### PASS 14 minutes
### 2025-05-23
#### PASS 34 minutes
### 2025-05-24
#### PASS 13 minutes
### 2025-05-25
#### PASS 15 minutes
### 2025-05-26
#### PASS 12 minutes
### 2025-05-27
#### PASS 13 minutes
### 2025-05-28
#### PASS 13 minutes
#### PASS 15 minutes
### 2025-05-29
#### PASS 21 minutes
### 2025-05-30
#### PASS 13 minutes
### 2025-05-31
#### PASS 13 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 12 minutes
### 2025-06-02
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-06-03
#### PASS 14 minutes
### 2025-06-04
#### PASS 14 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:48.7682175Z === RUN   TestAccGlobalClusterConfig_iss
2025-06-05T00:31:55.3553697Z === CONT  TestAccGlobalClusterConfig_iss
2025-06-05T00:32:10.3653694Z === NAME  TestAccGlobalClusterConfig_iss
2025-06-05T00:32:10.3655534Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:32:10.365111276Z, ProjectID: 6840e4bec939f27413250887, Cluster name: test-acc-tf-c-8609087867406345146
2025-06-05T00:35:11.5670282Z === NAME  TestAccGlobalClusterConfig_iss
2025-06-05T00:35:11.5670880Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:35:11.5671317Z         
2025-06-05T00:35:11.5673232Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bec939f27413250887/clusters/test-acc-tf-c-8609087867406345146 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:11.5674625Z         
2025-06-05T00:35:11.5674995Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:35:11.5675682Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:35:11.5676314Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:35:11.5676647Z         
2025-06-05T00:35:11.6161180Z --- FAIL: TestAccGlobalClusterConfig_iss (196.26s)
```
### 2025-06-06
#### PASS 12 minutes
### 2025-06-07
#### PASS 12 minutes
### 2025-06-08
#### PASS 14 minutes
### 2025-06-09
#### PASS 12 minutes
### 2025-06-10
#### PASS 20 minutes
### 2025-06-11
#### PASS 14 minutes
#### PASS 13 minutes
### 2025-06-12
#### PASS 12 minutes
### 2025-06-13
#### PASS 12 minutes
### 2025-06-14
#### PASS 28 minutes
### 2025-06-15
#### PASS 15 minutes
### 2025-06-16
#### PASS 21 minutes
### 2025-06-17
#### PASS 14 minutes
### 2025-06-18
#### PASS 15 minutes
### 2025-06-19
#### PASS 41 minutes
### 2025-06-20
#### PASS 12 minutes
### 2025-06-21
#### PASS 13 minutes
### 2025-06-22
#### PASS 12 minutes
### 2025-06-23
#### PASS 13 minutes
### 2025-06-24
#### PASS 12 minutes
### 2025-06-25
#### PASS 12 minutes
### 2025-06-26
#### PASS 15 minutes
### 2025-06-27
#### PASS 12 minutes
### 2025-06-28
#### PASS 14 minutes
### 2025-06-29
#### PASS 13 minutes
### 2025-06-30
#### PASS 16 minutes
### 2025-07-01
#### PASS 12 minutes
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 14 minutes
### 2025-07-02
#### PASS 14 minutes
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 14 minutes
### 2025-07-05
#### PASS 12 minutes
### 2025-07-06
#### PASS 14 minutes
### 2025-07-07
#### PASS 12 minutes
### 2025-07-08
#### PASS 12 minutes
### 2025-07-09
#### PASS 15 minutes