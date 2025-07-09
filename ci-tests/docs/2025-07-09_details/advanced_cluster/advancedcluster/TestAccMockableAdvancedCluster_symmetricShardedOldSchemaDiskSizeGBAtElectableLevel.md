# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:35 | dev | 188.09s

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
#### PASS 24 minutes
### 2025-04-11
#### PASS 22 minutes
### 2025-04-12
#### PASS 21 minutes
### 2025-04-13
#### PASS 23 minutes
### 2025-04-14
#### PASS 21 minutes
### 2025-04-15
#### PASS 32 minutes
### 2025-04-16
#### PASS 20 minutes
#### PASS 27 minutes
### 2025-04-17
#### PASS 21 minutes
### 2025-04-18
#### PASS 22 minutes
### 2025-04-19
#### PASS 21 minutes
### 2025-04-20
#### PASS 17 minutes
### 2025-04-21
#### PASS 24 minutes
### 2025-04-22
#### PASS 22 minutes
### 2025-04-23
#### PASS 23 minutes
### 2025-04-24
#### PASS 22 minutes
### 2025-04-25
#### PASS 23 minutes
### 2025-04-26
#### PASS 22 minutes
### 2025-04-27
#### PASS 24 minutes
### 2025-04-28
#### PASS 20 minutes
### 2025-04-29
#### PASS 19 minutes
### 2025-04-30
#### PASS 27 minutes
### 2025-05-01
#### PASS 21 minutes
#### PASS 20 minutes
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 20 minutes
#### PASS 22 minutes
#### PASS 18 minutes
### 2025-05-02
#### PASS 23 minutes
### 2025-05-03
#### PASS 23 minutes
### 2025-05-04
#### PASS 20 minutes
### 2025-05-05
#### PASS 21 minutes
### 2025-05-06
#### PASS 23 minutes
### 2025-05-07
#### PASS 28 minutes
### 2025-05-08
#### PASS 25 minutes
### 2025-05-09
#### PASS 25 minutes
### 2025-05-10
#### PASS 19 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:10.5919865Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-05-11T00:30:10.6521346Z     shared_resource.go:84: 
2025-05-11T00:30:10.6523339Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.6526724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.6528969Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.6531046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.6533134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:832
2025-05-11T00:30:10.6534015Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.6534920Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.6535707Z         	Test:       	TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-05-11T00:30:10.6537192Z         	Messages:   	Project creation failed: test-acc-tf-p-7010437507613484612, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.6538087Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (0.06s)
```
### 2025-05-12
#### PASS 21 minutes
### 2025-05-13
#### PASS 23 minutes
#### PASS 18 minutes
### 2025-05-14
#### PASS 24 minutes
### 2025-05-15
#### PASS 23 minutes
### 2025-05-16
#### PASS 21 minutes
### 2025-05-17
#### PASS 22 minutes
### 2025-05-18
#### PASS 21 minutes
### 2025-05-19
#### PASS 21 minutes
### 2025-05-20
#### PASS 21 minutes
### 2025-05-21
#### PASS 23 minutes
### 2025-05-22
#### PASS 21 minutes
### 2025-05-23
#### PASS 22 minutes
### 2025-05-24
#### PASS 19 minutes
### 2025-05-25
#### PASS 22 minutes
### 2025-05-26
#### PASS 22 minutes
### 2025-05-27
#### PASS 19 minutes
### 2025-05-28
#### PASS 18 minutes
#### PASS 20 minutes
#### PASS 20 minutes
### 2025-05-29
#### PASS 30 minutes
#### PASS 17 minutes
### 2025-05-30
#### PASS an hour
#### PASS 15 minutes
### 2025-05-31
#### PASS 22 minutes
### 2025-06-01
#### PASS 25 minutes
#### PASS 18 minutes
#### PASS 19 minutes
#### PASS 19 minutes
#### PASS 20 minutes
#### PASS 20 minutes
### 2025-06-02
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 19 minutes
### 2025-06-03
#### PASS 22 minutes
### 2025-06-04
#### PASS 21 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:32.1571995Z === RUN   TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-06-05T00:35:35.4282764Z     resource_advanced_cluster_test.go:837: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-05T00:35:42.8657516Z === CONT  TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-06-05T00:38:48.2392529Z === NAME  TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel
2025-06-05T00:38:48.2393951Z     resource_advanced_cluster_test.go:837: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:38:48.2394723Z         
2025-06-05T00:38:48.2397965Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e654161ca93c1f0544dc/clusters/test-acc-tf-c-8833455269199042493 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.2408997Z         
2025-06-05T00:38:48.2409590Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.2410802Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.2411901Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.2412484Z         
2025-06-05T00:38:48.4449088Z --- FAIL: TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (188.86s)
```
### 2025-06-06
#### PASS 35 minutes
### 2025-06-07
#### PASS 21 minutes
### 2025-06-08
#### PASS 19 minutes
### 2025-06-09
#### PASS 47 minutes
### 2025-06-10
#### PASS 34 minutes
### 2025-06-11
#### PASS 20 minutes
#### PASS 22 minutes
### 2025-06-12
#### PASS 23 minutes
### 2025-06-13
#### PASS 21 minutes
### 2025-06-14
#### PASS 44 minutes
### 2025-06-15
#### PASS 20 minutes
### 2025-06-16
#### PASS 25 minutes
### 2025-06-17
#### PASS 25 minutes
### 2025-06-18
#### PASS 32 minutes
#### PASS 21 minutes
### 2025-06-19
#### PASS 50 minutes
### 2025-06-20
#### PASS 22 minutes
### 2025-06-21
#### PASS 24 minutes
### 2025-06-22
#### PASS 19 minutes
### 2025-06-23
#### PASS 18 minutes
### 2025-06-24
#### PASS 49 minutes
### 2025-06-25
#### PASS 20 minutes
### 2025-06-26
#### PASS 21 minutes
### 2025-06-27
#### PASS 20 minutes
### 2025-06-28
#### PASS 22 minutes
### 2025-06-29
#### PASS 23 minutes
### 2025-06-30
#### PASS 22 minutes
### 2025-07-01
#### PASS 20 minutes
#### PASS 20 minutes
#### PASS 22 minutes
#### PASS 21 minutes
#### PASS 20 minutes
### 2025-07-02
#### PASS 21 minutes
### 2025-07-03
#### PASS 23 minutes
### 2025-07-04
#### PASS 20 minutes
### 2025-07-05
#### PASS 22 minutes
### 2025-07-06
#### PASS 20 minutes
### 2025-07-07
#### PASS 20 minutes
### 2025-07-08
#### PASS 20 minutes
### 2025-07-09
#### PASS 21 minutes