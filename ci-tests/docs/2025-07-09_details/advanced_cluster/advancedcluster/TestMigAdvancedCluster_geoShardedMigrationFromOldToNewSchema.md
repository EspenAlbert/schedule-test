# advanced_cluster/advancedcluster/TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:29 | dev | 187.06s

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
#### PASS 22 minutes
### 2025-04-11
#### PASS 35 minutes
### 2025-04-12
#### PASS 21 minutes
### 2025-04-13
#### PASS 22 minutes
### 2025-04-14
#### PASS 19 minutes
### 2025-04-15
#### PASS 30 minutes
### 2025-04-16
#### PASS 21 minutes
#### PASS 23 minutes
### 2025-04-17
#### PASS 22 minutes
### 2025-04-18
#### PASS 22 minutes
### 2025-04-19
#### PASS 26 minutes
### 2025-04-20
#### PASS 23 minutes
### 2025-04-21
#### PASS 34 minutes
### 2025-04-22
#### PASS 21 minutes
### 2025-04-23
#### PASS 24 minutes
### 2025-04-24
#### PASS 22 minutes
### 2025-04-25
#### PASS 23 minutes
### 2025-04-26
#### PASS 35 minutes
### 2025-04-27
#### PASS 22 minutes
### 2025-04-28
#### PASS 23 minutes
### 2025-04-29
#### PASS 28 minutes
### 2025-04-30
#### PASS 32 minutes
### 2025-05-01
#### PASS 21 minutes
#### PASS 22 minutes
#### PASS 21 minutes
#### PASS 23 minutes
#### PASS 20 minutes
#### PASS 21 minutes
#### PASS 20 minutes
### 2025-05-02
#### PASS 36 minutes
### 2025-05-03
#### PASS 22 minutes
### 2025-05-04
#### PASS 29 minutes
### 2025-05-05
#### PASS 21 minutes
### 2025-05-06
#### PASS 28 minutes
### 2025-05-07
#### PASS 21 minutes
### 2025-05-08
#### PASS 30 minutes
### 2025-05-09
#### PASS 26 minutes
### 2025-05-10
#### PASS 20 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.3048367Z === RUN   TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-05-11T00:30:09.3657894Z     shared_resource.go:84: 
2025-05-11T00:30:09.3659853Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.3662540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.3664428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.3666245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.3668422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:124
2025-05-11T00:30:09.3669344Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.3670261Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.3671064Z         	Test:       	TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-05-11T00:30:09.3672140Z         	Messages:   	Project creation failed: test-acc-tf-p-4687011669003177848, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.3673069Z --- FAIL: TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (0.06s)
```
### 2025-05-12
#### PASS 23 minutes
### 2025-05-13
#### PASS 21 minutes
#### PASS 19 minutes
### 2025-05-14
#### PASS 26 minutes
### 2025-05-15
#### PASS 28 minutes
### 2025-05-16
#### PASS 25 minutes
### 2025-05-17
#### PASS 22 minutes
### 2025-05-18
#### PASS 20 minutes
### 2025-05-19
#### PASS 24 minutes
### 2025-05-20
#### PASS 25 minutes
### 2025-05-21
#### PASS 23 minutes
### 2025-05-22
#### PASS 23 minutes
### 2025-05-23
#### PASS 35 minutes
### 2025-05-24
#### PASS 21 minutes
### 2025-05-25
#### PASS 22 minutes
### 2025-05-26
#### PASS 25 minutes
### 2025-05-27
#### PASS 20 minutes
### 2025-05-28
#### PASS 25 minutes
#### PASS 22 minutes
#### PASS 21 minutes
### 2025-05-29
#### PASS 37 minutes
#### PASS 20 minutes
### 2025-05-30
#### PASS an hour
#### PASS 24 minutes
### 2025-05-31
#### PASS 22 minutes
### 2025-06-01
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 21 minutes
#### PASS 22 minutes
#### PASS 20 minutes
#### PASS 18 minutes
### 2025-06-02
#### PASS 21 minutes
#### PASS 50 minutes
#### PASS 22 minutes
### 2025-06-03
#### PASS 21 minutes
### 2025-06-04
#### PASS 22 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:29:11.3283511Z === RUN   TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-06-05T00:35:42.8276384Z === CONT  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-06-05T00:38:50.2702149Z === NAME  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-06-05T00:38:50.2703427Z     resource_advanced_cluster_migration_test.go:126: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:38:50.2704229Z         
2025-06-05T00:38:50.2707257Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters/test-acc-tf-c-7406611329763175988 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: []
2025-06-05T00:38:50.2709374Z         
2025-06-05T00:38:50.2709979Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:50.2711208Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:50.2712336Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:50.2712898Z         
2025-06-05T00:38:50.4221463Z --- FAIL: TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (187.61s)
```
### 2025-06-06
#### PASS 23 minutes
### 2025-06-07
#### PASS 28 minutes
### 2025-06-08
#### PASS 21 minutes
### 2025-06-09
#### PASS 2 hours
### 2025-06-10
#### PASS 22 minutes
### 2025-06-11
#### PASS 24 minutes
#### PASS 27 minutes
### 2025-06-12
#### PASS 26 minutes
### 2025-06-13
#### PASS 24 minutes
### 2025-06-14
#### PASS 33 minutes
### 2025-06-15
#### PASS 21 minutes
### 2025-06-16
#### PASS 44 minutes
### 2025-06-17
#### PASS 20 minutes
### 2025-06-18
#### PASS 25 minutes
#### PASS 21 minutes
### 2025-06-19
#### PASS 58 minutes
### 2025-06-20
#### PASS 24 minutes
### 2025-06-21
#### PASS 26 minutes
### 2025-06-22
#### PASS 39 minutes
### 2025-06-23
#### PASS 20 minutes
### 2025-06-24
#### PASS 32 minutes
### 2025-06-25
#### PASS 22 minutes
### 2025-06-26
#### PASS 22 minutes
### 2025-06-27
#### PASS 28 minutes
### 2025-06-28
#### PASS 28 minutes
### 2025-06-29
#### PASS 25 minutes
### 2025-06-30
#### PASS 25 minutes
### 2025-07-01
#### PASS 25 minutes
#### PASS 20 minutes
#### PASS 22 minutes
#### PASS 21 minutes
#### PASS 59 minutes
### 2025-07-02
#### PASS 22 minutes
### 2025-07-03
#### PASS 25 minutes
### 2025-07-04
#### PASS 26 minutes
### 2025-07-05
#### PASS 27 minutes
### 2025-07-06
#### PASS 22 minutes
### 2025-07-07
#### PASS 25 minutes
### 2025-07-08
#### PASS 20 minutes
### 2025-07-09
#### PASS 24 minutes