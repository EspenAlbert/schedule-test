# advanced_cluster_tpf/advancedclustertpf/TestAccAdvancedCluster_moveBasic Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 109) SKIP(x 6) FAIL(x 2)
Success rate: 98.20%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.02s
2025-06-05 00:35 | dev | 183.07s

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
#### PASS 17 minutes
### 2025-04-11
#### PASS 10 minutes
### 2025-04-12
#### PASS 13 minutes
### 2025-04-13
#### PASS 16 minutes
### 2025-04-14
#### PASS 12 minutes
### 2025-04-15
#### PASS 12 minutes
### 2025-04-16
#### PASS 12 minutes
#### PASS 17 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 13 minutes
### 2025-04-19
#### PASS 11 minutes
### 2025-04-20
#### PASS 15 minutes
### 2025-04-21
#### PASS 12 minutes
### 2025-04-22
#### PASS 13 minutes
### 2025-04-23
#### PASS 16 minutes
### 2025-04-24
#### PASS 12 minutes
### 2025-04-25
#### PASS 10 minutes
### 2025-04-26
#### PASS 15 minutes
### 2025-04-27
#### PASS 18 minutes
### 2025-04-28
#### PASS 12 minutes
### 2025-04-29
#### PASS 12 minutes
### 2025-04-30
#### PASS 13 minutes
### 2025-05-01
#### PASS 11 minutes
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 14 minutes
#### SKIP 2 seconds
#### SKIP 2 seconds
#### SKIP 2 seconds
### 2025-05-02
#### PASS 14 minutes
### 2025-05-03
#### PASS 15 minutes
### 2025-05-04
#### PASS 12 minutes
### 2025-05-05
#### PASS 11 minutes
### 2025-05-06
#### PASS 14 minutes
### 2025-05-07
#### PASS 14 minutes
### 2025-05-08
#### PASS 15 minutes
### 2025-05-09
#### PASS 13 minutes
### 2025-05-10
#### PASS 13 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8365528Z === RUN   TestAccAdvancedCluster_moveBasic
2025-05-11T00:30:01.8365857Z     shared_resource.go:84: 
2025-05-11T00:30:01.8366746Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8368615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8370380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8372223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8374172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedclustertpf/move_upgrade_state_test.go:17
2025-05-11T00:30:01.8374967Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8375837Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8376383Z         	Test:       	TestAccAdvancedCluster_moveBasic
2025-05-11T00:30:01.8377381Z         	Messages:   	Project creation failed: test-acc-tf-p-6097942623320250960, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8378055Z --- FAIL: TestAccAdvancedCluster_moveBasic (0.19s)
```
### 2025-05-12
#### PASS 13 minutes
### 2025-05-13
#### PASS 14 minutes
#### PASS 12 minutes
### 2025-05-14
#### PASS 15 minutes
### 2025-05-15
#### PASS 14 minutes
### 2025-05-16
#### PASS 12 minutes
### 2025-05-17
#### PASS 13 minutes
### 2025-05-18
#### PASS 14 minutes
### 2025-05-19
#### PASS 14 minutes
### 2025-05-20
#### PASS 12 minutes
### 2025-05-21
#### PASS 12 minutes
#### PASS 12 minutes
### 2025-05-22
#### PASS 12 minutes
### 2025-05-23
#### PASS 18 minutes
### 2025-05-24
#### PASS 12 minutes
### 2025-05-25
#### PASS 15 minutes
### 2025-05-26
#### PASS 15 minutes
### 2025-05-27
#### PASS 12 minutes
### 2025-05-28
#### PASS 24 minutes
#### PASS 15 minutes
#### PASS 13 minutes
### 2025-05-29
#### PASS 14 minutes
### 2025-05-30
#### PASS 25 minutes
#### PASS 10 minutes
### 2025-05-31
#### PASS 11 minutes
### 2025-06-01
#### PASS 9 minutes
#### PASS 12 minutes
#### PASS 12 minutes
#### PASS 11 minutes
#### PASS 11 minutes
### 2025-06-02
#### SKIP 3 seconds
#### PASS 13 minutes
#### SKIP 4 seconds
#### SKIP 3 seconds
### 2025-06-03
#### PASS 13 minutes
### 2025-06-04
#### PASS 12 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:38.6813701Z === RUN   TestAccAdvancedCluster_moveBasic
2025-06-05T00:35:38.6814743Z === CONT  TestAccAdvancedCluster_moveBasic
2025-06-05T00:35:38.6832644Z === NAME  TestAccAdvancedCluster_moveBasic
2025-06-05T00:35:38.6832960Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6833050Z         
2025-06-05T00:35:38.6834652Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c6c939f27413250ecf/clusters/test-acc-tf-c-4234139695856825660 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6834743Z         
2025-06-05T00:35:38.6834935Z           with mongodbatlas_cluster.old,
2025-06-05T00:35:38.6835334Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-06-05T00:35:38.6835578Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-06-05T00:35:38.6835668Z         
2025-06-05T00:35:38.6844752Z --- FAIL: TestAccAdvancedCluster_moveBasic (183.74s)
```
### 2025-06-06
#### PASS 11 minutes
### 2025-06-07
#### PASS 11 minutes
### 2025-06-08
#### PASS 15 minutes
### 2025-06-09
#### PASS 12 minutes
### 2025-06-10
#### PASS 24 minutes
### 2025-06-11
#### PASS 13 minutes
#### PASS 13 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 13 minutes
### 2025-06-14
#### PASS 11 minutes
### 2025-06-15
#### PASS 14 minutes
### 2025-06-16
#### PASS 11 minutes
### 2025-06-17
#### PASS 14 minutes
### 2025-06-18
#### PASS 13 minutes
#### PASS 11 minutes
### 2025-06-19
#### PASS 12 minutes
### 2025-06-20
#### PASS 13 minutes
### 2025-06-21
#### PASS 11 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 11 minutes
### 2025-06-24
#### PASS 13 minutes
### 2025-06-25
#### PASS 11 minutes
### 2025-06-26
#### PASS 13 minutes
#### PASS 11 minutes
### 2025-06-27
#### PASS 11 minutes
### 2025-06-28
#### PASS 11 minutes
### 2025-06-29
#### PASS 16 minutes
### 2025-06-30
#### PASS 13 minutes
### 2025-07-01
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 11 minutes
#### PASS 12 minutes
#### PASS 14 minutes
### 2025-07-02
#### PASS 13 minutes
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 21 minutes
### 2025-07-05
#### PASS 12 minutes
### 2025-07-06
#### PASS 11 minutes
### 2025-07-07
#### PASS 13 minutes
### 2025-07-08
#### PASS 14 minutes
### 2025-07-09
#### PASS 16 minutes