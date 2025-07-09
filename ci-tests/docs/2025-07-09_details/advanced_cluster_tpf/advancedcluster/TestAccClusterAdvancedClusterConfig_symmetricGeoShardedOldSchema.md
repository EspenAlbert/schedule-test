# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 5.10s

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
#### PASS 34 minutes
### 2025-04-11
#### PASS 33 minutes
### 2025-04-12
#### PASS 29 minutes
### 2025-04-13
#### PASS 32 minutes
### 2025-04-14
#### PASS 27 minutes
### 2025-04-15
#### PASS 40 minutes
### 2025-04-16
#### PASS 29 minutes
#### PASS 36 minutes
### 2025-04-17
#### PASS 30 minutes
### 2025-04-18
#### PASS 29 minutes
### 2025-04-19
#### PASS 30 minutes
### 2025-04-20
#### PASS 28 minutes
### 2025-04-21
#### PASS 33 minutes
### 2025-04-22
#### PASS 29 minutes
### 2025-04-23
#### PASS 34 minutes
### 2025-04-24
#### PASS 31 minutes
### 2025-04-25
#### PASS 31 minutes
### 2025-04-26
#### PASS 27 minutes
### 2025-04-27
#### PASS 31 minutes
### 2025-04-28
#### PASS 29 minutes
### 2025-04-29
#### PASS 31 minutes
### 2025-04-30
#### PASS 33 minutes
### 2025-05-01
#### PASS 29 minutes
#### PASS 28 minutes
#### PASS 27 minutes
#### PASS 29 minutes
#### PASS 27 minutes
#### PASS 27 minutes
#### PASS 25 minutes
### 2025-05-02
#### PASS 34 minutes
### 2025-05-03
#### PASS 30 minutes
### 2025-05-04
#### PASS 27 minutes
### 2025-05-05
#### PASS 26 minutes
### 2025-05-06
#### PASS 30 minutes
### 2025-05-07
#### PASS 28 minutes
### 2025-05-08
#### PASS 32 minutes
### 2025-05-09
#### PASS 33 minutes
### 2025-05-10
#### PASS 31 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7974107Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-05-11T00:30:01.7974659Z     shared_resource.go:84: 
2025-05-11T00:30:01.7975540Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7977418Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7979172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7980904Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7983072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:807
2025-05-11T00:30:01.7985162Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:802
2025-05-11T00:30:01.7985982Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7986842Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7987536Z         	Test:       	TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-05-11T00:30:01.7988632Z         	Messages:   	Project creation failed: test-acc-tf-p-2463601754623224551, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7989423Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (0.02s)
```
### 2025-05-12
#### PASS 31 minutes
### 2025-05-13
#### PASS 29 minutes
#### PASS 28 minutes
### 2025-05-14
#### PASS 33 minutes
### 2025-05-15
#### PASS 28 minutes
### 2025-05-16
#### PASS 30 minutes
### 2025-05-17
#### PASS 30 minutes
### 2025-05-18
#### PASS 27 minutes
### 2025-05-19
#### PASS 30 minutes
### 2025-05-20
#### PASS 31 minutes
### 2025-05-21
#### PASS 31 minutes
#### PASS 26 minutes
### 2025-05-22
#### PASS 29 minutes
### 2025-05-23
#### PASS 31 minutes
### 2025-05-24
#### PASS 29 minutes
### 2025-05-25
#### PASS 36 minutes
### 2025-05-26
#### PASS 30 minutes
### 2025-05-27
#### PASS 29 minutes
### 2025-05-28
#### PASS 28 minutes
#### PASS 28 minutes
#### PASS 29 minutes
### 2025-05-29
#### PASS 43 minutes
### 2025-05-30
#### PASS an hour
#### PASS 28 minutes
### 2025-05-31
#### PASS 30 minutes
### 2025-06-01
#### PASS 25 minutes
#### PASS 26 minutes
#### PASS 26 minutes
#### PASS 27 minutes
#### PASS 26 minutes
### 2025-06-02
#### PASS 29 minutes
#### PASS 28 minutes
#### PASS 34 minutes
#### PASS 27 minutes
### 2025-06-03
#### PASS 30 minutes
### 2025-06-04
#### PASS 31 minutes
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:38.5890385Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-05T00:35:38.5958382Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-05T00:35:38.6343719Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-05T00:35:38.6344912Z     resource_advanced_cluster_test.go:805: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6345667Z         
2025-06-05T00:35:38.6346150Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6346612Z         
2025-06-05T00:35:38.6347190Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6348568Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6349786Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6350347Z         
2025-06-05T00:35:38.6351106Z         cluster name: test-acc-tf-c-3351201702337386706, API error details:
2025-06-05T00:35:38.6352324Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d9c939f27413251648/clusters
2025-06-05T00:35:38.6353575Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6354645Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6355526Z         BadRequestDetail: 
2025-06-05T00:35:38.6368458Z   
2025-06-05T00:35:38.6390455Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (5.97s)
```
### 2025-06-06
#### PASS 42 minutes
### 2025-06-07
#### PASS 29 minutes
### 2025-06-08
#### PASS 26 minutes
### 2025-06-09
#### PASS an hour
### 2025-06-10
#### PASS 52 minutes
### 2025-06-11
#### PASS 31 minutes
#### PASS 40 minutes
### 2025-06-12
#### PASS 32 minutes
### 2025-06-13
#### PASS 31 minutes
### 2025-06-14
#### PASS an hour
### 2025-06-15
#### PASS 27 minutes
### 2025-06-16
#### PASS 34 minutes
### 2025-06-17
#### PASS 41 minutes
### 2025-06-18
#### PASS 34 minutes
#### PASS 26 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 31 minutes
### 2025-06-21
#### PASS 28 minutes
### 2025-06-22
#### PASS 40 minutes
### 2025-06-23
#### PASS 25 minutes
### 2025-06-24
#### PASS 35 minutes
### 2025-06-25
#### PASS 25 minutes
### 2025-06-26
#### PASS 38 minutes
#### PASS 25 minutes
### 2025-06-27
#### PASS 30 minutes
### 2025-06-28
#### PASS 30 minutes
### 2025-06-29
#### PASS 32 minutes
### 2025-06-30
#### PASS 32 minutes
### 2025-07-01
#### PASS 30 minutes
#### PASS 27 minutes
#### PASS 28 minutes
#### PASS 28 minutes
#### PASS 58 minutes
### 2025-07-02
#### PASS 29 minutes
### 2025-07-03
#### PASS 32 minutes
### 2025-07-04
#### PASS 31 minutes
### 2025-07-05
#### PASS 30 minutes
### 2025-07-06
#### PASS 26 minutes
### 2025-07-07
#### PASS 30 minutes
### 2025-07-08
#### PASS 34 minutes
### 2025-07-09
#### PASS 28 minutes