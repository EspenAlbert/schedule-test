# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 7.03s

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
#### PASS 40 minutes
### 2025-04-11
#### PASS 38 minutes
### 2025-04-12
#### PASS 33 minutes
### 2025-04-13
#### PASS 39 minutes
### 2025-04-14
#### PASS 33 minutes
### 2025-04-15
#### PASS 40 minutes
### 2025-04-16
#### PASS 32 minutes
#### PASS 43 minutes
### 2025-04-17
#### PASS 33 minutes
### 2025-04-18
#### PASS 32 minutes
### 2025-04-19
#### PASS 33 minutes
### 2025-04-20
#### PASS 34 minutes
### 2025-04-21
#### PASS 38 minutes
### 2025-04-22
#### PASS 36 minutes
### 2025-04-23
#### PASS 35 minutes
### 2025-04-24
#### PASS 34 minutes
### 2025-04-25
#### PASS 35 minutes
### 2025-04-26
#### PASS 33 minutes
### 2025-04-27
#### PASS 32 minutes
### 2025-04-28
#### PASS 33 minutes
### 2025-04-29
#### PASS 33 minutes
### 2025-04-30
#### PASS 34 minutes
### 2025-05-01
#### PASS 33 minutes
#### PASS 31 minutes
#### PASS 30 minutes
#### PASS 35 minutes
#### PASS 34 minutes
#### PASS 34 minutes
#### PASS 30 minutes
### 2025-05-02
#### PASS 37 minutes
### 2025-05-03
#### PASS 32 minutes
### 2025-05-04
#### PASS 33 minutes
### 2025-05-05
#### PASS 36 minutes
### 2025-05-06
#### PASS 35 minutes
### 2025-05-07
#### PASS 42 minutes
### 2025-05-08
#### PASS 37 minutes
### 2025-05-09
#### PASS 38 minutes
### 2025-05-10
#### PASS 36 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7799145Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:01.7799522Z     shared_resource.go:84: 
2025-05-11T00:30:01.7800396Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7802288Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7804031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7805876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7807842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:282
2025-05-11T00:30:01.7809896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:276
2025-05-11T00:30:01.7810699Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7811713Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7812343Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-05-11T00:30:01.7813386Z         	Messages:   	Project creation failed: test-acc-tf-p-6751860489394933327, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7814141Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (0.02s)
```
### 2025-05-12
#### PASS 32 minutes
### 2025-05-13
#### PASS 33 minutes
#### PASS 36 minutes
### 2025-05-14
#### PASS 37 minutes
### 2025-05-15
#### PASS 37 minutes
### 2025-05-16
#### PASS 38 minutes
### 2025-05-17
#### PASS 34 minutes
### 2025-05-18
#### PASS 32 minutes
### 2025-05-19
#### PASS 35 minutes
### 2025-05-20
#### PASS 35 minutes
### 2025-05-21
#### PASS 34 minutes
#### PASS 29 minutes
### 2025-05-22
#### PASS 35 minutes
### 2025-05-23
#### PASS 32 minutes
### 2025-05-24
#### PASS 31 minutes
### 2025-05-25
#### PASS 45 minutes
### 2025-05-26
#### PASS 35 minutes
### 2025-05-27
#### PASS 31 minutes
### 2025-05-28
#### PASS 38 minutes
#### PASS 32 minutes
#### PASS 36 minutes
### 2025-05-29
#### PASS 42 minutes
### 2025-05-30
#### PASS an hour
#### PASS 43 minutes
### 2025-05-31
#### PASS 32 minutes
### 2025-06-01
#### PASS 32 minutes
#### PASS 31 minutes
#### PASS 33 minutes
#### PASS 33 minutes
#### PASS 31 minutes
### 2025-06-02
#### PASS 31 minutes
#### PASS 34 minutes
#### PASS 35 minutes
#### PASS 32 minutes
### 2025-06-03
#### PASS 36 minutes
### 2025-06-04
#### PASS 33 minutes
### 2025-06-05
#### FAIL 7 seconds
```
2025-06-05T00:35:38.5874685Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.5939963Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.6054181Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.6054789Z     resource_advanced_cluster_test.go:279: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6055199Z         
2025-06-05T00:35:38.6055561Z         Error: Error in create
2025-06-05T00:35:38.6055808Z         
2025-06-05T00:35:38.6056128Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6056780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6057363Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6057662Z         
2025-06-05T00:35:38.6058077Z         cluster name: test-acc-tf-c-5363237722342964336, API error details:
2025-06-05T00:35:38.6058976Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6059654Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6060224Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6060607Z         BadRequestDetail: 
2025-06-05T00:35:38.6071859Z    test_name=TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest3395882869 test_step_number=1
2025-06-05T00:35:38.6381428Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (7.32s)
```
### 2025-06-06
#### PASS 39 minutes
### 2025-06-07
#### PASS 35 minutes
### 2025-06-08
#### PASS 32 minutes
### 2025-06-09
#### PASS an hour
### 2025-06-10
#### PASS 58 minutes
### 2025-06-11
#### PASS 36 minutes
#### PASS 50 minutes
### 2025-06-12
#### PASS 36 minutes
### 2025-06-13
#### PASS 38 minutes
### 2025-06-14
#### PASS 44 minutes
### 2025-06-15
#### PASS 32 minutes
### 2025-06-16
#### PASS 36 minutes
### 2025-06-17
#### PASS 32 minutes
### 2025-06-18
#### PASS 36 minutes
#### PASS 33 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 32 minutes
### 2025-06-21
#### PASS 34 minutes
### 2025-06-22
#### PASS 46 minutes
### 2025-06-23
#### PASS 31 minutes
### 2025-06-24
#### PASS 40 minutes
### 2025-06-25
#### PASS 33 minutes
### 2025-06-26
#### PASS 42 minutes
#### PASS 29 minutes
### 2025-06-27
#### PASS 38 minutes
### 2025-06-28
#### PASS 35 minutes
### 2025-06-29
#### PASS 37 minutes
### 2025-06-30
#### PASS 40 minutes
### 2025-07-01
#### PASS 36 minutes
#### PASS 35 minutes
#### PASS 37 minutes
#### PASS 34 minutes
#### PASS an hour
### 2025-07-02
#### PASS 32 minutes
### 2025-07-03
#### PASS 33 minutes
### 2025-07-04
#### PASS 35 minutes
### 2025-07-05
#### PASS 36 minutes
### 2025-07-06
#### PASS 30 minutes
### 2025-07-07
#### PASS 33 minutes
### 2025-07-08
#### PASS 38 minutes
### 2025-07-09
#### PASS 35 minutes