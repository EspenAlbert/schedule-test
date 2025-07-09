# advanced_cluster/advancedcluster/TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-20 00:29 | qa | 8.04s
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:29 | dev | 189.03s

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
#### PASS 21 minutes
### 2025-04-12
#### PASS 19 minutes
### 2025-04-13
#### PASS 21 minutes
### 2025-04-14
#### PASS 19 minutes
### 2025-04-15
#### PASS 29 minutes
### 2025-04-16
#### PASS 21 minutes
#### PASS 22 minutes
### 2025-04-17
#### PASS 21 minutes
### 2025-04-18
#### PASS 21 minutes
### 2025-04-19
#### PASS 21 minutes
### 2025-04-20
#### FAIL 8 seconds
```
2025-04-20T00:29:29.4946044Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-04-20T00:58:09.0246133Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-04-20T00:58:15.6673890Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-04-20T00:58:15.6675181Z     resource_advanced_cluster_migration_test.go:104: Step 1/2 error: Error running apply: exit status 1
2025-04-20T00:58:15.6675989Z         
2025-04-20T00:58:15.6707071Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe9e9e1f62c2da38ec4/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: []
2025-04-20T00:58:15.6709207Z         
2025-04-20T00:58:15.6709799Z           with mongodbatlas_advanced_cluster.test,
2025-04-20T00:58:15.6710928Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-20T00:58:15.6711972Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-04-20T00:58:15.6712487Z         
2025-04-20T00:58:15.9165363Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (8.44s)
```
### 2025-04-21
#### PASS 22 minutes
### 2025-04-22
#### PASS 21 minutes
### 2025-04-23
#### PASS 18 minutes
### 2025-04-24
#### PASS 19 minutes
### 2025-04-25
#### PASS 22 minutes
### 2025-04-26
#### PASS 19 minutes
### 2025-04-27
#### PASS 22 minutes
### 2025-04-28
#### PASS 19 minutes
### 2025-04-29
#### PASS 23 minutes
### 2025-04-30
#### PASS 25 minutes
### 2025-05-01
#### PASS 20 minutes
#### PASS 22 minutes
#### PASS 18 minutes
#### PASS 21 minutes
#### PASS 19 minutes
#### PASS 18 minutes
#### PASS 20 minutes
### 2025-05-02
#### PASS 25 minutes
### 2025-05-03
#### PASS 22 minutes
### 2025-05-04
#### PASS 18 minutes
### 2025-05-05
#### PASS 19 minutes
### 2025-05-06
#### PASS 21 minutes
### 2025-05-07
#### PASS 21 minutes
### 2025-05-08
#### PASS 23 minutes
### 2025-05-09
#### PASS 24 minutes
### 2025-05-10
#### PASS 20 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.2425444Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-05-11T00:30:09.3033544Z     shared_resource.go:84: 
2025-05-11T00:30:09.3035206Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.3037611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.3039718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.3041677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.3043692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:102
2025-05-11T00:30:09.3044531Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.3045384Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.3046033Z         	Test:       	TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-05-11T00:30:09.3047075Z         	Messages:   	Project creation failed: test-acc-tf-p-1804059061352901825, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.3047853Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (0.06s)
```
### 2025-05-12
#### PASS 20 minutes
### 2025-05-13
#### PASS 20 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 22 minutes
### 2025-05-15
#### PASS 24 minutes
### 2025-05-16
#### PASS 21 minutes
### 2025-05-17
#### PASS 21 minutes
### 2025-05-18
#### PASS 19 minutes
### 2025-05-19
#### PASS 22 minutes
### 2025-05-20
#### PASS 23 minutes
### 2025-05-21
#### PASS 20 minutes
### 2025-05-22
#### PASS 22 minutes
### 2025-05-23
#### PASS 17 minutes
### 2025-05-24
#### PASS 18 minutes
### 2025-05-25
#### PASS 22 minutes
### 2025-05-26
#### PASS 22 minutes
### 2025-05-27
#### PASS 19 minutes
### 2025-05-28
#### PASS 19 minutes
#### PASS 19 minutes
#### PASS 20 minutes
### 2025-05-29
#### PASS 28 minutes
#### PASS 14 minutes
### 2025-05-30
#### PASS an hour
#### PASS 17 minutes
### 2025-05-31
#### PASS 18 minutes
### 2025-06-01
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 18 minutes
#### PASS 20 minutes
#### PASS 19 minutes
#### PASS 18 minutes
### 2025-06-02
#### PASS 21 minutes
#### PASS 36 minutes
#### PASS 17 minutes
### 2025-06-03
#### PASS 19 minutes
### 2025-06-04
#### PASS 20 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:29:09.5479815Z === RUN   TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-06-05T00:35:42.8405145Z === CONT  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-06-05T00:38:50.2061567Z === NAME  TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema
2025-06-05T00:38:50.2062270Z     resource_advanced_cluster_migration_test.go:104: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:38:50.2062721Z         
2025-06-05T00:38:50.2064320Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters/test-acc-tf-c-9133410442904971536 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: []
2025-06-05T00:38:50.2065607Z         
2025-06-05T00:38:50.2065935Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:50.2066580Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:50.2067183Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:50.2067495Z         
2025-06-05T00:38:50.2672234Z    test_name=TestMigAdvancedCluster_geoShardedOldSchemaUpdate test_terraform_path=/home/runner/work/_temp/2d4b31c9-479e-44d7-b7ae-aa2b06b7e890/terraform test_working_directory=/tmp/plugintest2248724474
2025-06-05T00:38:50.3565942Z --- FAIL: TestMigAdvancedCluster_shardedMigrationFromOldToNewSchema (189.32s)
```
### 2025-06-06
#### PASS 21 minutes
### 2025-06-07
#### PASS 22 minutes
### 2025-06-08
#### PASS 20 minutes
### 2025-06-09
#### PASS 26 minutes
### 2025-06-10
#### PASS 16 minutes
### 2025-06-11
#### PASS 21 minutes
#### PASS 21 minutes
### 2025-06-12
#### PASS 24 minutes
### 2025-06-13
#### PASS 22 minutes
### 2025-06-14
#### PASS 25 minutes
### 2025-06-15
#### PASS 20 minutes
### 2025-06-16
#### PASS 34 minutes
### 2025-06-17
#### PASS 16 minutes
### 2025-06-18
#### PASS 21 minutes
#### PASS 19 minutes
### 2025-06-19
#### PASS 45 minutes
### 2025-06-20
#### PASS 19 minutes
### 2025-06-21
#### PASS 21 minutes
### 2025-06-22
#### PASS 18 minutes
### 2025-06-23
#### PASS 20 minutes
### 2025-06-24
#### PASS 26 minutes
### 2025-06-25
#### PASS 18 minutes
### 2025-06-26
#### PASS 21 minutes
### 2025-06-27
#### PASS 20 minutes
### 2025-06-28
#### PASS 19 minutes
### 2025-06-29
#### PASS 23 minutes
### 2025-06-30
#### PASS 24 minutes
### 2025-07-01
#### PASS 26 minutes
#### PASS 20 minutes
#### PASS 19 minutes
#### PASS 20 minutes
#### PASS 20 minutes
### 2025-07-02
#### PASS 22 minutes
### 2025-07-03
#### PASS 20 minutes
### 2025-07-04
#### PASS 20 minutes
### 2025-07-05
#### PASS 20 minutes
### 2025-07-06
#### PASS 17 minutes
### 2025-07-07
#### PASS 20 minutes
### 2025-07-08
#### PASS 16 minutes
### 2025-07-09
#### PASS 20 minutes