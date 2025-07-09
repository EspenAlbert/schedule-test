# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:35 | dev | 184.06s

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
#### PASS 54 minutes
### 2025-04-11
#### PASS 40 minutes
### 2025-04-12
#### PASS 34 minutes
### 2025-04-13
#### PASS 49 minutes
### 2025-04-14
#### PASS 35 minutes
### 2025-04-15
#### PASS 44 minutes
### 2025-04-16
#### PASS 37 minutes
#### PASS 43 minutes
### 2025-04-17
#### PASS 35 minutes
### 2025-04-18
#### PASS 35 minutes
### 2025-04-19
#### PASS 38 minutes
### 2025-04-20
#### PASS 38 minutes
### 2025-04-21
#### PASS 44 minutes
### 2025-04-22
#### PASS 37 minutes
### 2025-04-23
#### PASS 36 minutes
### 2025-04-24
#### PASS 33 minutes
### 2025-04-25
#### PASS 35 minutes
### 2025-04-26
#### PASS 35 minutes
### 2025-04-27
#### PASS 39 minutes
### 2025-04-28
#### PASS 35 minutes
### 2025-04-29
#### PASS 36 minutes
### 2025-04-30
#### PASS 41 minutes
### 2025-05-01
#### PASS 36 minutes
#### PASS 34 minutes
#### PASS 33 minutes
#### PASS 36 minutes
#### PASS 37 minutes
#### PASS 33 minutes
#### PASS 32 minutes
### 2025-05-02
#### PASS 40 minutes
### 2025-05-03
#### PASS 36 minutes
### 2025-05-04
#### PASS 34 minutes
### 2025-05-05
#### PASS 34 minutes
### 2025-05-06
#### PASS 36 minutes
### 2025-05-07
#### PASS 36 minutes
### 2025-05-08
#### PASS 39 minutes
### 2025-05-09
#### PASS 40 minutes
### 2025-05-10
#### PASS 37 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.7422207Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:09.8034308Z     shared_resource.go:84: 
2025-05-11T00:30:09.8035402Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.8037243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.8039112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.8041172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.8043293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:282
2025-05-11T00:30:09.8045868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:276
2025-05-11T00:30:09.8046740Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.8047646Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.8048306Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:09.8049416Z         	Messages:   	Project creation failed: test-acc-tf-p-6698852458061800350, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.8050221Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (0.06s)
```
### 2025-05-12
#### PASS 40 minutes
### 2025-05-13
#### PASS 36 minutes
#### PASS 32 minutes
### 2025-05-14
#### PASS 37 minutes
### 2025-05-15
#### PASS 34 minutes
### 2025-05-16
#### PASS 35 minutes
### 2025-05-17
#### PASS 35 minutes
### 2025-05-18
#### PASS 36 minutes
### 2025-05-19
#### PASS 37 minutes
### 2025-05-20
#### PASS 36 minutes
### 2025-05-21
#### PASS 39 minutes
### 2025-05-22
#### PASS 35 minutes
### 2025-05-23
#### PASS 35 minutes
### 2025-05-24
#### PASS 33 minutes
### 2025-05-25
#### PASS 38 minutes
### 2025-05-26
#### PASS 35 minutes
### 2025-05-27
#### PASS 34 minutes
### 2025-05-28
#### PASS 32 minutes
#### PASS 36 minutes
#### PASS 39 minutes
### 2025-05-29
#### PASS 50 minutes
#### PASS 31 minutes
### 2025-05-30
#### PASS an hour
#### PASS 39 minutes
### 2025-05-31
#### PASS 36 minutes
### 2025-06-01
#### PASS 35 minutes
#### PASS 36 minutes
#### PASS 36 minutes
#### PASS 34 minutes
#### PASS 35 minutes
#### PASS 36 minutes
### 2025-06-02
#### PASS 36 minutes
#### PASS 41 minutes
#### PASS 35 minutes
### 2025-06-03
#### PASS 34 minutes
### 2025-06-04
#### PASS 36 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:27.2502823Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:42.8410802Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:38:47.3544666Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:38:47.3545809Z     resource_advanced_cluster_test.go:279: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:38:47.3546317Z         
2025-06-05T00:38:47.3548370Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64cc939f2741325293e/clusters/test-acc-tf-c-4030839657890242996 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:47.3550070Z         
2025-06-05T00:38:47.3550415Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:47.3551068Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:47.3551661Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:47.3551977Z         
2025-06-05T00:38:47.4051545Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (184.59s)
```
### 2025-06-06
#### PASS 41 minutes
### 2025-06-07
#### PASS 38 minutes
### 2025-06-08
#### PASS 34 minutes
### 2025-06-09
#### PASS 46 minutes
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 35 minutes
#### PASS 41 minutes
### 2025-06-12
#### PASS 37 minutes
### 2025-06-13
#### PASS 39 minutes
### 2025-06-14
#### PASS 54 minutes
### 2025-06-15
#### PASS 34 minutes
### 2025-06-16
#### PASS an hour
### 2025-06-17
#### PASS 35 minutes
### 2025-06-18
#### PASS 38 minutes
#### PASS 36 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 37 minutes
### 2025-06-21
#### PASS 36 minutes
### 2025-06-22
#### PASS 34 minutes
### 2025-06-23
#### PASS 34 minutes
### 2025-06-24
#### PASS 42 minutes
### 2025-06-25
#### PASS 31 minutes
### 2025-06-26
#### PASS 36 minutes
### 2025-06-27
#### PASS 53 minutes
### 2025-06-28
#### PASS 35 minutes
### 2025-06-29
#### PASS 36 minutes
### 2025-06-30
#### PASS 41 minutes
### 2025-07-01
#### PASS 36 minutes
#### PASS 37 minutes
#### PASS 35 minutes
#### PASS 34 minutes
#### PASS an hour
### 2025-07-02
#### PASS 34 minutes
### 2025-07-03
#### PASS 35 minutes
### 2025-07-04
#### PASS 36 minutes
### 2025-07-05
#### PASS 37 minutes
### 2025-07-06
#### PASS 35 minutes
### 2025-07-07
#### PASS 40 minutes
### 2025-07-08
#### PASS 38 minutes
### 2025-07-09
#### PASS 34 minutes