# advanced_cluster_tpf/advancedclustertpf/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 108) SKIP(x 6) FAIL(x 3)
Success rate: 97.30%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-01 06:09 | dev | 871.03s
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 181.04s

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
#### PASS 21 minutes
### 2025-04-11
#### PASS 15 minutes
### 2025-04-12
#### PASS 18 minutes
### 2025-04-13
#### PASS 20 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 16 minutes
### 2025-04-16
#### PASS 16 minutes
#### PASS 21 minutes
### 2025-04-17
#### PASS 18 minutes
### 2025-04-18
#### PASS 16 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 16 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 14 minutes
### 2025-04-24
#### PASS 17 minutes
### 2025-04-25
#### PASS 16 minutes
### 2025-04-26
#### PASS 16 minutes
### 2025-04-27
#### PASS 17 minutes
### 2025-04-28
#### PASS 16 minutes
### 2025-04-29
#### PASS 15 minutes
### 2025-04-30
#### PASS 17 minutes
### 2025-05-01
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### FAIL 14 minutes
```
2025-05-01T06:09:26.9064718Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-05-01T06:09:26.9067416Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-05-01T06:09:26.9105386Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-05-01T06:09:26.9105916Z     move_upgrade_state_test.go:45: Step 2/2 error: Error running apply: exit status 1
2025-05-01T06:09:26.9106433Z         
2025-05-01T06:09:26.9106682Z         Error: Error in update
2025-05-01T06:09:26.9107127Z         
2025-05-01T06:09:26.9107448Z           with mongodbatlas_advanced_cluster.test,
2025-05-01T06:09:26.9108182Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-01T06:09:26.9108896Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-01T06:09:26.9109204Z         
2025-05-01T06:09:26.9109761Z         cluster name test-acc-tf-c-5704664167782793962. API error detail (503 Service
2025-05-01T06:09:26.9110493Z         Unavailable) failed to decode response body: undefined response type
2025-05-01T06:09:26.9111441Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (871.35s)
```
#### SKIP a moment
#### SKIP a moment
#### SKIP a moment
### 2025-05-02
#### PASS 17 minutes
### 2025-05-03
#### PASS 17 minutes
### 2025-05-04
#### PASS 15 minutes
### 2025-05-05
#### PASS 15 minutes
### 2025-05-06
#### PASS 19 minutes
### 2025-05-07
#### PASS 17 minutes
### 2025-05-08
#### PASS 18 minutes
### 2025-05-09
#### PASS 17 minutes
### 2025-05-10
#### PASS 17 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8378394Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-05-11T00:30:01.8378735Z     shared_resource.go:84: 
2025-05-11T00:30:01.8379613Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8381441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8383201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8384956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8386889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedclustertpf/move_upgrade_state_test.go:43
2025-05-11T00:30:01.8387677Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8388541Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8389108Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2025-05-11T00:30:01.8390129Z         	Messages:   	Project creation failed: test-acc-tf-p-5741688352032365409, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8390954Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (0.02s)
```
### 2025-05-12
#### PASS 15 minutes
### 2025-05-13
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 15 minutes
### 2025-05-15
#### PASS 15 minutes
### 2025-05-16
#### PASS 17 minutes
### 2025-05-17
#### PASS 15 minutes
### 2025-05-18
#### PASS 17 minutes
### 2025-05-19
#### PASS 17 minutes
### 2025-05-20
#### PASS 16 minutes
### 2025-05-21
#### PASS 18 minutes
#### PASS 14 minutes
### 2025-05-22
#### PASS 18 minutes
### 2025-05-23
#### PASS 19 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 17 minutes
### 2025-05-26
#### PASS 16 minutes
### 2025-05-27
#### PASS 16 minutes
### 2025-05-28
#### PASS 27 minutes
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-05-29
#### PASS 14 minutes
### 2025-05-30
#### PASS 28 minutes
#### PASS 15 minutes
### 2025-05-31
#### PASS 15 minutes
### 2025-06-01
#### PASS 13 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-02
#### SKIP a moment
#### PASS 15 minutes
#### SKIP a moment
#### SKIP a moment
### 2025-06-03
#### PASS 16 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:38.6813962Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-06-05T00:35:38.6814999Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-06-05T00:35:38.6841312Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-06-05T00:35:38.6841621Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6841711Z         
2025-06-05T00:35:38.6843294Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c6c939f27413250ecf/clusters/test-acc-tf-c-701189130217625355 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6843391Z         
2025-06-05T00:35:38.6843576Z           with mongodbatlas_cluster.old,
2025-06-05T00:35:38.6843978Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-06-05T00:35:38.6844338Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-06-05T00:35:38.6844436Z         
2025-06-05T00:35:38.6844608Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (181.38s)
```
### 2025-06-06
#### PASS 17 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 14 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 27 minutes
### 2025-06-11
#### PASS 17 minutes
#### PASS 15 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 16 minutes
### 2025-06-14
#### PASS 17 minutes
### 2025-06-15
#### PASS 33 minutes
### 2025-06-16
#### PASS 15 minutes
### 2025-06-17
#### PASS 18 minutes
### 2025-06-18
#### PASS 24 minutes
#### PASS 15 minutes
### 2025-06-19
#### PASS 21 minutes
### 2025-06-20
#### PASS 17 minutes
### 2025-06-21
#### PASS 17 minutes
### 2025-06-22
#### PASS 14 minutes
### 2025-06-23
#### PASS 16 minutes
### 2025-06-24
#### PASS 16 minutes
### 2025-06-25
#### PASS 16 minutes
### 2025-06-26
#### PASS 22 minutes
#### PASS 16 minutes
### 2025-06-27
#### PASS 16 minutes
### 2025-06-28
#### PASS 17 minutes
### 2025-06-29
#### PASS 17 minutes
### 2025-06-30
#### PASS 23 minutes
### 2025-07-01
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-07-02
#### PASS 15 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### PASS 26 minutes
### 2025-07-05
#### PASS 15 minutes
### 2025-07-06
#### PASS 15 minutes
### 2025-07-07
#### PASS 16 minutes
### 2025-07-08
#### PASS 17 minutes
### 2025-07-09
#### PASS 17 minutes