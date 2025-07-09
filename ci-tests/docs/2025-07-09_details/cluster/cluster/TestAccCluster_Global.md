# cluster/cluster/TestAccCluster_Global Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:28 | dev | 183.02s

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
#### PASS 13 minutes
### 2025-04-12
#### PASS 13 minutes
### 2025-04-13
#### PASS 15 minutes
### 2025-04-14
#### PASS 12 minutes
### 2025-04-15
#### PASS 17 minutes
### 2025-04-16
#### PASS 22 minutes
#### PASS 14 minutes
### 2025-04-17
#### PASS 18 minutes
### 2025-04-18
#### PASS 13 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### PASS 13 minutes
### 2025-04-21
#### PASS 14 minutes
### 2025-04-22
#### PASS 15 minutes
### 2025-04-23
#### PASS 16 minutes
### 2025-04-24
#### PASS 19 minutes
### 2025-04-25
#### PASS 13 minutes
### 2025-04-26
#### PASS 15 minutes
### 2025-04-27
#### PASS 14 minutes
### 2025-04-28
#### PASS 14 minutes
### 2025-04-29
#### PASS 21 minutes
### 2025-04-30
#### PASS 20 minutes
### 2025-05-01
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-05-02
#### PASS 18 minutes
### 2025-05-03
#### PASS 17 minutes
### 2025-05-04
#### PASS 13 minutes
### 2025-05-05
#### PASS 13 minutes
### 2025-05-06
#### PASS 21 minutes
### 2025-05-07
#### PASS 18 minutes
### 2025-05-08
#### PASS 19 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 15 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:40.3555368Z === RUN   TestAccCluster_Global
2025-05-11T00:29:40.3594873Z     shared_resource.go:84: 
2025-05-11T00:29:40.3597016Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3598921Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3600627Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3602538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3604327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2025-05-11T00:29:40.3605085Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3605945Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3606599Z         	Test:       	TestAccCluster_Global
2025-05-11T00:29:40.3607579Z         	Messages:   	Project creation failed: test-acc-tf-p-8097750584382784530, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3608234Z --- FAIL: TestAccCluster_Global (0.01s)
```
### 2025-05-12
#### PASS 16 minutes
### 2025-05-13
#### PASS 14 minutes
#### PASS 15 minutes
### 2025-05-14
#### PASS 26 minutes
### 2025-05-15
#### PASS 15 minutes
### 2025-05-16
#### PASS 14 minutes
### 2025-05-17
#### PASS 15 minutes
### 2025-05-18
#### PASS 13 minutes
### 2025-05-19
#### PASS 14 minutes
### 2025-05-20
#### PASS 15 minutes
### 2025-05-21
#### PASS 16 minutes
### 2025-05-22
#### PASS 19 minutes
### 2025-05-23
#### PASS 14 minutes
### 2025-05-24
#### PASS 15 minutes
### 2025-05-25
#### PASS 14 minutes
### 2025-05-26
#### PASS 14 minutes
### 2025-05-27
#### PASS 14 minutes
### 2025-05-28
#### PASS 27 minutes
#### PASS 12 minutes
#### PASS 14 minutes
#### PASS 13 minutes
### 2025-05-29
#### PASS 19 minutes
#### PASS 14 minutes
### 2025-05-30
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-05-31
#### PASS 15 minutes
### 2025-06-01
#### PASS 15 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-02
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 13 minutes
### 2025-06-03
#### PASS 13 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:46.0501143Z === RUN   TestAccCluster_Global
2025-06-05T00:28:48.8423186Z === CONT  TestAccCluster_Global
2025-06-05T00:31:51.8703861Z === NAME  TestAccCluster_Global
2025-06-05T00:31:51.8704988Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:51.8705954Z         
2025-06-05T00:31:51.8709362Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f27413250702/clusters/test-acc-tf-c-8524747914954109526 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.8711566Z         
2025-06-05T00:31:51.8712093Z           with mongodbatlas_cluster.test,
2025-06-05T00:31:51.8713161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:31:51.8714094Z           12: 		resource "mongodbatlas_cluster" test {
2025-06-05T00:31:51.8714708Z         
2025-06-05T00:31:52.0293695Z --- FAIL: TestAccCluster_Global (183.19s)
```
### 2025-06-06
#### PASS 14 minutes
### 2025-06-07
#### PASS 14 minutes
### 2025-06-08
#### PASS 14 minutes
### 2025-06-09
#### PASS 12 minutes
### 2025-06-10
#### PASS 35 minutes
### 2025-06-11
#### PASS 14 minutes
#### PASS 15 minutes
### 2025-06-12
#### PASS 16 minutes
### 2025-06-13
#### PASS 16 minutes
### 2025-06-14
#### PASS 39 minutes
### 2025-06-15
#### PASS 14 minutes
### 2025-06-16
#### PASS 17 minutes
### 2025-06-17
#### PASS 17 minutes
### 2025-06-18
#### PASS 24 minutes
### 2025-06-19
#### PASS 15 minutes
### 2025-06-20
#### PASS 15 minutes
### 2025-06-21
#### PASS 14 minutes
### 2025-06-22
#### PASS 16 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 16 minutes
### 2025-06-25
#### PASS 20 minutes
### 2025-06-26
#### PASS 13 minutes
### 2025-06-27
#### PASS 12 minutes
### 2025-06-28
#### PASS 14 minutes
### 2025-06-29
#### PASS 14 minutes
### 2025-06-30
#### PASS 15 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-07-02
#### PASS 17 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### PASS 28 minutes
### 2025-07-05
#### PASS 14 minutes
### 2025-07-06
#### PASS 14 minutes
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 14 minutes
### 2025-07-09
#### PASS 30 minutes