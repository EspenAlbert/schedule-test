# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_symmetricGeoShardedOldSchema Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:28 | dev | 185.00s

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
#### PASS 18 minutes
### 2025-04-11
#### PASS 15 minutes
### 2025-04-12
#### PASS 17 minutes
### 2025-04-13
#### PASS 19 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 18 minutes
### 2025-04-16
#### PASS 14 minutes
#### PASS 20 minutes
### 2025-04-17
#### PASS 17 minutes
### 2025-04-18
#### PASS 19 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### PASS 16 minutes
### 2025-04-21
#### PASS 15 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 15 minutes
### 2025-04-24
#### PASS 17 minutes
### 2025-04-25
#### PASS 16 minutes
### 2025-04-26
#### PASS 17 minutes
### 2025-04-27
#### PASS 18 minutes
### 2025-04-28
#### PASS 15 minutes
### 2025-04-29
#### PASS 14 minutes
### 2025-04-30
#### PASS 22 minutes
#### PASS 17 minutes
### 2025-05-01
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 14 minutes
#### PASS 17 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-05-02
#### PASS 19 minutes
### 2025-05-03
#### PASS 17 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 15 minutes
### 2025-05-06
#### PASS 30 minutes
### 2025-05-07
#### PASS 17 minutes
#### PASS 14 minutes
### 2025-05-08
#### PASS 17 minutes
### 2025-05-09
#### PASS 19 minutes
### 2025-05-10
#### PASS 17 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.1621683Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-05-11T00:30:00.1622231Z     resource_advanced_cluster_migration_test.go:30: Running test SDKv2 to TPF
2025-05-11T00:30:00.1809760Z     shared_resource.go:84: 
2025-05-11T00:30:00.1812286Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1815557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:00.1817619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:00.1819642Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:00.1821962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:807
2025-05-11T00:30:00.1824985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-05-11T00:30:00.1828656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:30
2025-05-11T00:30:00.1830274Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1831896Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1833034Z         	Test:       	TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-05-11T00:30:00.1834687Z         	Messages:   	Project creation failed: test-acc-tf-p-778366384760869929, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1835789Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (0.02s)
```
### 2025-05-12
#### PASS 15 minutes
### 2025-05-13
#### PASS 17 minutes
#### PASS 15 minutes
### 2025-05-14
#### PASS 24 minutes
### 2025-05-15
#### PASS 19 minutes
### 2025-05-16
#### PASS 17 minutes
### 2025-05-17
#### PASS 15 minutes
### 2025-05-18
#### PASS 16 minutes
### 2025-05-19
#### PASS 16 minutes
### 2025-05-20
#### PASS 16 minutes
### 2025-05-21
#### PASS 16 minutes
### 2025-05-22
#### PASS 17 minutes
### 2025-05-23
#### PASS 28 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 18 minutes
### 2025-05-26
#### PASS 16 minutes
### 2025-05-27
#### PASS 17 minutes
### 2025-05-28
#### PASS 31 minutes
#### PASS 14 minutes
### 2025-05-29
#### PASS 18 minutes
### 2025-05-30
#### PASS an hour
### 2025-05-31
#### PASS 16 minutes
### 2025-06-01
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-06-02
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 17 minutes
### 2025-06-04
#### PASS 18 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:58.6430960Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-06-05T00:28:58.6431804Z     resource_advanced_cluster_migration_test.go:30: Running test SDKv2 to TPF
2025-06-05T00:29:00.2537063Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-06-05T00:32:03.4866935Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-06-05T00:32:03.4867975Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:03.4868792Z         
2025-06-05T00:32:03.4871757Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4ca161ca93c1f052b06/clusters/test-acc-tf-c-8281568219465457148 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:03.4873714Z         
2025-06-05T00:32:03.4874297Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:32:03.4875628Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:32:03.4876780Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:32:03.4877294Z         
2025-06-05T00:32:03.4962046Z    test_terraform_path=/home/runner/work/_temp/3ad49d04-31af-4fb3-83fa-091095f4f7b4/terraform test_working_directory=/tmp/plugintest3964112414 test_name=TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:32:03.6888361Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (185.04s)
```
### 2025-06-06
#### PASS 16 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 14 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 33 minutes
### 2025-06-11
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 16 minutes
### 2025-06-13
#### PASS 17 minutes
### 2025-06-14
#### PASS 18 minutes
### 2025-06-15
#### PASS 15 minutes
### 2025-06-16
#### PASS 23 minutes
### 2025-06-17
#### PASS 53 minutes
### 2025-06-18
#### PASS 24 minutes
### 2025-06-19
#### PASS 15 minutes
### 2025-06-20
#### PASS 17 minutes
### 2025-06-21
#### PASS 16 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 17 minutes
### 2025-06-25
#### PASS 29 minutes
### 2025-06-26
#### PASS 18 minutes
### 2025-06-27
#### PASS 14 minutes
### 2025-06-28
#### PASS 16 minutes
### 2025-06-29
#### PASS 18 minutes
### 2025-06-30
#### PASS 30 minutes
### 2025-07-01
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-07-02
#### PASS 17 minutes
#### PASS 15 minutes
### 2025-07-03
#### PASS 16 minutes
### 2025-07-04
#### PASS 27 minutes
### 2025-07-05
#### PASS 15 minutes
### 2025-07-06
#### PASS 14 minutes
### 2025-07-07
#### PASS 16 minutes
### 2025-07-08
#### PASS 17 minutes
### 2025-07-09
#### PASS 28 minutes