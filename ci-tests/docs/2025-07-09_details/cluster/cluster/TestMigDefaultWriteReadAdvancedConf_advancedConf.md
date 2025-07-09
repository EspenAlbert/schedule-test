# cluster/cluster/TestMigDefaultWriteReadAdvancedConf_advancedConf Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:28 | dev | 223.02s

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
#### PASS 11 minutes
### 2025-04-13
#### PASS 16 minutes
### 2025-04-14
#### PASS 11 minutes
### 2025-04-15
#### PASS 12 minutes
### 2025-04-16
#### PASS 12 minutes
#### PASS 16 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 13 minutes
### 2025-04-19
#### PASS 13 minutes
### 2025-04-20
#### PASS 15 minutes
### 2025-04-21
#### PASS 12 minutes
### 2025-04-22
#### PASS 12 minutes
### 2025-04-23
#### PASS 11 minutes
### 2025-04-24
#### PASS 13 minutes
### 2025-04-25
#### PASS 13 minutes
### 2025-04-26
#### PASS 11 minutes
### 2025-04-27
#### PASS 14 minutes
### 2025-04-28
#### PASS 12 minutes
### 2025-04-29
#### PASS 11 minutes
### 2025-04-30
#### PASS 12 minutes
### 2025-05-01
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 14 minutes
#### PASS 12 minutes
#### PASS 11 minutes
#### PASS 11 minutes
### 2025-05-02
#### PASS 11 minutes
### 2025-05-03
#### PASS 13 minutes
### 2025-05-04
#### PASS 10 minutes
### 2025-05-05
#### PASS 12 minutes
### 2025-05-06
#### PASS 11 minutes
### 2025-05-07
#### PASS 11 minutes
### 2025-05-08
#### PASS 12 minutes
### 2025-05-09
#### PASS 17 minutes
### 2025-05-10
#### PASS 10 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:40.2884768Z === RUN   TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-05-11T00:29:40.2943687Z     shared_resource.go:84: 
2025-05-11T00:29:40.2945974Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.2949523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.2952762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.2955477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.2957550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:159
2025-05-11T00:29:40.2959501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_migration_test.go:20
2025-05-11T00:29:40.2960300Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.2961178Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.2961813Z         	Test:       	TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-05-11T00:29:40.2962865Z         	Messages:   	Project creation failed: test-acc-tf-p-6702748061648255889, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.2963608Z --- FAIL: TestMigDefaultWriteReadAdvancedConf_advancedConf (0.01s)
```
### 2025-05-12
#### PASS 13 minutes
### 2025-05-13
#### PASS 12 minutes
#### PASS 11 minutes
### 2025-05-14
#### PASS 20 minutes
### 2025-05-15
#### PASS 11 minutes
### 2025-05-16
#### PASS 11 minutes
### 2025-05-17
#### PASS 11 minutes
### 2025-05-18
#### PASS 12 minutes
### 2025-05-19
#### PASS 11 minutes
### 2025-05-20
#### PASS 14 minutes
### 2025-05-21
#### PASS 13 minutes
### 2025-05-22
#### PASS 13 minutes
### 2025-05-23
#### PASS 21 minutes
### 2025-05-24
#### PASS 13 minutes
### 2025-05-25
#### PASS 12 minutes
### 2025-05-26
#### PASS 12 minutes
### 2025-05-27
#### PASS 11 minutes
### 2025-05-28
#### PASS 17 minutes
#### PASS 11 minutes
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-05-29
#### PASS 20 minutes
#### PASS 11 minutes
### 2025-05-30
#### PASS 11 minutes
#### PASS 11 minutes
### 2025-05-31
#### PASS 11 minutes
### 2025-06-01
#### PASS 10 minutes
#### PASS 9 minutes
#### PASS 10 minutes
#### PASS 10 minutes
#### PASS 10 minutes
#### PASS 10 minutes
### 2025-06-02
#### PASS 12 minutes
#### PASS 12 minutes
#### PASS 10 minutes
### 2025-06-03
#### PASS 11 minutes
### 2025-06-04
#### PASS 12 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:44.4412654Z === RUN   TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-06-05T00:28:48.8433611Z === CONT  TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-06-05T00:29:28.8552947Z === NAME  TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-06-05T00:29:28.8554484Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:28.854968071Z, ProjectID: 6840e4b9161ca93c1f051d05, Cluster name: test-acc-tf-c-9164673246249580404
2025-06-05T00:32:31.8942442Z === NAME  TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-06-05T00:32:31.8943069Z     resource_cluster_migration_test.go:20: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:31.8943493Z         
2025-06-05T00:32:31.8945677Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-9164673246249580404 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:31.8946839Z         
2025-06-05T00:32:31.8947139Z           with mongodbatlas_cluster.test,
2025-06-05T00:32:31.8947750Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:32:31.8948293Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-06-05T00:32:31.8948581Z         
2025-06-05T00:32:32.0771750Z --- FAIL: TestMigDefaultWriteReadAdvancedConf_advancedConf (223.23s)
```
### 2025-06-06
#### PASS 12 minutes
### 2025-06-07
#### PASS 12 minutes
### 2025-06-08
#### PASS 10 minutes
### 2025-06-09
#### PASS 12 minutes
### 2025-06-10
#### PASS 27 minutes
### 2025-06-11
#### PASS 12 minutes
#### PASS 12 minutes
### 2025-06-12
#### PASS 12 minutes
### 2025-06-13
#### PASS 13 minutes
### 2025-06-14
#### PASS 13 minutes
### 2025-06-15
#### PASS 12 minutes
### 2025-06-16
#### PASS 12 minutes
### 2025-06-17
#### PASS 12 minutes
### 2025-06-18
#### PASS 20 minutes
### 2025-06-19
#### PASS 13 minutes
### 2025-06-20
#### PASS 13 minutes
### 2025-06-21
#### PASS 12 minutes
### 2025-06-22
#### PASS 11 minutes
### 2025-06-23
#### PASS 10 minutes
### 2025-06-24
#### PASS 11 minutes
### 2025-06-25
#### PASS 11 minutes
### 2025-06-26
#### PASS 10 minutes
### 2025-06-27
#### PASS 10 minutes
### 2025-06-28
#### PASS 10 minutes
### 2025-06-29
#### PASS 17 minutes
### 2025-06-30
#### PASS 10 minutes
### 2025-07-01
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 10 minutes
#### PASS 11 minutes
#### PASS 12 minutes
#### PASS 13 minutes
### 2025-07-02
#### PASS 13 minutes
### 2025-07-03
#### PASS 14 minutes
### 2025-07-04
#### PASS 23 minutes
### 2025-07-05
#### PASS 10 minutes
### 2025-07-06
#### PASS 11 minutes
### 2025-07-07
#### PASS 13 minutes
### 2025-07-08
#### PASS 13 minutes
### 2025-07-09
#### PASS 13 minutes