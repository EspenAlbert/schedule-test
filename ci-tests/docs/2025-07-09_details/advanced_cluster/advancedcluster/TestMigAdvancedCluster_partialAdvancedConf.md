# advanced_cluster/advancedcluster/TestMigAdvancedCluster_partialAdvancedConf Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:29 | dev | 193.04s

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
#### PASS 25 minutes
### 2025-04-11
#### PASS 23 minutes
### 2025-04-12
#### PASS 22 minutes
### 2025-04-13
#### PASS 26 minutes
### 2025-04-14
#### PASS 21 minutes
### 2025-04-15
#### PASS 35 minutes
### 2025-04-16
#### PASS 26 minutes
#### PASS 31 minutes
### 2025-04-17
#### PASS 25 minutes
### 2025-04-18
#### PASS 25 minutes
### 2025-04-19
#### PASS 25 minutes
### 2025-04-20
#### PASS 22 minutes
### 2025-04-21
#### PASS 23 minutes
### 2025-04-22
#### PASS 22 minutes
### 2025-04-23
#### PASS 23 minutes
### 2025-04-24
#### PASS 23 minutes
### 2025-04-25
#### PASS 25 minutes
### 2025-04-26
#### PASS 25 minutes
### 2025-04-27
#### PASS 23 minutes
### 2025-04-28
#### PASS 23 minutes
### 2025-04-29
#### PASS 22 minutes
### 2025-04-30
#### PASS 31 minutes
### 2025-05-01
#### PASS 25 minutes
#### PASS 25 minutes
#### PASS 24 minutes
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 22 minutes
### 2025-05-02
#### PASS 26 minutes
### 2025-05-03
#### PASS 25 minutes
### 2025-05-04
#### PASS 21 minutes
### 2025-05-05
#### PASS 23 minutes
### 2025-05-06
#### PASS 22 minutes
### 2025-05-07
#### PASS 22 minutes
### 2025-05-08
#### PASS 24 minutes
### 2025-05-09
#### PASS 24 minutes
### 2025-05-10
#### PASS 23 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.3673524Z === RUN   TestMigAdvancedCluster_partialAdvancedConf
2025-05-11T00:30:09.3674168Z     resource_advanced_cluster_migration_test.go:148: Creating execution project: test-acc-tf-p-1611139993921959824
2025-05-11T00:30:09.4275187Z     resource_advanced_cluster_migration_test.go:148: 
2025-05-11T00:30:09.4277086Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.4279511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:09.4282520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:148
2025-05-11T00:30:09.4283585Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.4284488Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.4285094Z         	Test:       	TestMigAdvancedCluster_partialAdvancedConf
2025-05-11T00:30:09.4286162Z         	Messages:   	Project creation failed: test-acc-tf-p-1611139993921959824, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.4286909Z --- FAIL: TestMigAdvancedCluster_partialAdvancedConf (0.06s)
```
### 2025-05-12
#### PASS 22 minutes
### 2025-05-13
#### PASS 25 minutes
#### PASS 20 minutes
### 2025-05-14
#### PASS 24 minutes
### 2025-05-15
#### PASS 25 minutes
### 2025-05-16
#### PASS 23 minutes
### 2025-05-17
#### PASS 22 minutes
### 2025-05-18
#### PASS 23 minutes
### 2025-05-19
#### PASS 27 minutes
### 2025-05-20
#### PASS 23 minutes
### 2025-05-21
#### PASS 24 minutes
### 2025-05-22
#### PASS 23 minutes
### 2025-05-23
#### PASS 24 minutes
### 2025-05-24
#### PASS 20 minutes
### 2025-05-25
#### PASS 25 minutes
### 2025-05-26
#### PASS 26 minutes
### 2025-05-27
#### PASS 25 minutes
### 2025-05-28
#### PASS 22 minutes
#### PASS 23 minutes
#### PASS 26 minutes
### 2025-05-29
#### PASS 27 minutes
#### PASS 19 minutes
### 2025-05-30
#### PASS an hour
#### PASS 29 minutes
### 2025-05-31
#### PASS 24 minutes
### 2025-06-01
#### PASS 22 minutes
#### PASS 23 minutes
#### PASS 19 minutes
#### PASS 22 minutes
#### PASS 21 minutes
#### PASS 23 minutes
### 2025-06-02
#### PASS 24 minutes
#### PASS 25 minutes
#### PASS 21 minutes
### 2025-06-03
#### PASS 24 minutes
### 2025-06-04
#### PASS 23 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:29:11.3285760Z === RUN   TestMigAdvancedCluster_partialAdvancedConf
2025-06-05T00:35:42.8275073Z === CONT  TestMigAdvancedCluster_partialAdvancedConf
2025-06-05T00:38:56.0643597Z === NAME  TestMigAdvancedCluster_partialAdvancedConf
2025-06-05T00:38:56.0644392Z     resource_advanced_cluster_migration_test.go:190: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:38:56.0644959Z         
2025-06-05T00:38:56.0647645Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4ce161ca93c1f052c81/clusters/test-acc-tf-c-8154775287406293857 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:56.0649149Z         
2025-06-05T00:38:56.0649552Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:56.0650355Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:56.0651105Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:56.0651462Z         
2025-06-05T00:38:56.2468743Z --- FAIL: TestMigAdvancedCluster_partialAdvancedConf (193.43s)
```
### 2025-06-06
#### PASS 27 minutes
### 2025-06-07
#### PASS 27 minutes
### 2025-06-08
#### PASS 24 minutes
### 2025-06-09
#### PASS 26 minutes
### 2025-06-10
#### PASS 28 minutes
### 2025-06-11
#### PASS 26 minutes
#### PASS 25 minutes
### 2025-06-12
#### PASS 27 minutes
### 2025-06-13
#### PASS 25 minutes
### 2025-06-14
#### PASS 32 minutes
### 2025-06-15
#### PASS 22 minutes
### 2025-06-16
#### PASS 28 minutes
### 2025-06-17
#### PASS 21 minutes
### 2025-06-18
#### PASS 25 minutes
#### PASS 24 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 23 minutes
### 2025-06-21
#### PASS 25 minutes
### 2025-06-22
#### PASS 22 minutes
### 2025-06-23
#### PASS 22 minutes
### 2025-06-24
#### PASS 30 minutes
### 2025-06-25
#### PASS 18 minutes
### 2025-06-26
#### PASS 25 minutes
### 2025-06-27
#### PASS 24 minutes
### 2025-06-28
#### PASS 23 minutes
### 2025-06-29
#### PASS 26 minutes
### 2025-06-30
#### PASS 26 minutes
### 2025-07-01
#### PASS 25 minutes
#### PASS 23 minutes
#### PASS 25 minutes
#### PASS 23 minutes
#### PASS 23 minutes
### 2025-07-02
#### PASS 22 minutes
### 2025-07-03
#### PASS 24 minutes
### 2025-07-04
#### PASS 24 minutes
### 2025-07-05
#### PASS 22 minutes
### 2025-07-06
#### PASS 20 minutes
### 2025-07-07
#### PASS 22 minutes
### 2025-07-08
#### PASS 25 minutes
### 2025-07-09
#### PASS 24 minutes