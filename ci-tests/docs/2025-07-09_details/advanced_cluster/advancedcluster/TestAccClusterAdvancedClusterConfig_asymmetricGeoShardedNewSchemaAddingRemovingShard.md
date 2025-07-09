# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:35 | dev | 185.06s

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
#### PASS 39 minutes
### 2025-04-11
#### PASS 33 minutes
### 2025-04-12
#### PASS 31 minutes
### 2025-04-13
#### PASS 38 minutes
### 2025-04-14
#### PASS 28 minutes
### 2025-04-15
#### PASS 42 minutes
### 2025-04-16
#### PASS 32 minutes
#### PASS 41 minutes
### 2025-04-17
#### PASS 33 minutes
### 2025-04-18
#### PASS 31 minutes
### 2025-04-19
#### PASS 33 minutes
### 2025-04-20
#### PASS an hour
### 2025-04-21
#### PASS 35 minutes
### 2025-04-22
#### PASS 32 minutes
### 2025-04-23
#### PASS 34 minutes
### 2025-04-24
#### PASS 31 minutes
### 2025-04-25
#### PASS 33 minutes
### 2025-04-26
#### PASS 34 minutes
### 2025-04-27
#### PASS 35 minutes
### 2025-04-28
#### PASS 29 minutes
### 2025-04-29
#### PASS 31 minutes
### 2025-04-30
#### PASS 35 minutes
### 2025-05-01
#### PASS 32 minutes
#### PASS 32 minutes
#### PASS 32 minutes
#### PASS 32 minutes
#### PASS 30 minutes
#### PASS 30 minutes
#### PASS 29 minutes
### 2025-05-02
#### PASS 36 minutes
### 2025-05-03
#### PASS 33 minutes
### 2025-05-04
#### PASS 33 minutes
### 2025-05-05
#### PASS 28 minutes
### 2025-05-06
#### PASS 33 minutes
### 2025-05-07
#### PASS 36 minutes
### 2025-05-08
#### PASS 34 minutes
### 2025-05-09
#### PASS 36 minutes
### 2025-05-10
#### PASS 32 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:10.6542772Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-05-11T00:30:10.7147396Z     shared_resource.go:84: 
2025-05-11T00:30:10.7149134Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.7151559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.7153686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.7155749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.7157679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:931
2025-05-11T00:30:10.7158494Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.7159340Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.7160156Z         	Test:       	TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-05-11T00:30:10.7161419Z         	Messages:   	Project creation failed: test-acc-tf-p-6999101526515046769, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.7162293Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.06s)
```
### 2025-05-12
#### PASS 31 minutes
### 2025-05-13
#### PASS 36 minutes
#### PASS 29 minutes
### 2025-05-14
#### PASS 35 minutes
### 2025-05-15
#### PASS 35 minutes
### 2025-05-16
#### PASS 33 minutes
### 2025-05-17
#### PASS 33 minutes
### 2025-05-18
#### PASS 31 minutes
### 2025-05-19
#### PASS 33 minutes
### 2025-05-20
#### PASS 32 minutes
### 2025-05-21
#### PASS 33 minutes
### 2025-05-22
#### PASS 32 minutes
### 2025-05-23
#### PASS 42 minutes
### 2025-05-24
#### PASS 30 minutes
### 2025-05-25
#### PASS 34 minutes
### 2025-05-26
#### PASS 32 minutes
### 2025-05-27
#### PASS 31 minutes
### 2025-05-28
#### PASS 32 minutes
#### PASS 30 minutes
#### PASS 33 minutes
### 2025-05-29
#### PASS 41 minutes
#### PASS 26 minutes
### 2025-05-30
#### PASS an hour
#### PASS 31 minutes
### 2025-05-31
#### PASS 30 minutes
### 2025-06-01
#### PASS 31 minutes
#### PASS 30 minutes
#### PASS 28 minutes
#### PASS 28 minutes
#### PASS 30 minutes
#### PASS 29 minutes
### 2025-06-02
#### PASS 32 minutes
#### PASS 31 minutes
#### PASS 31 minutes
### 2025-06-03
#### PASS 31 minutes
### 2025-06-04
#### PASS 32 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:35.4291466Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-06-05T00:35:42.8418629Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-06-05T00:38:48.3011692Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-06-05T00:38:48.3013083Z     resource_advanced_cluster_test.go:935: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:38:48.3013825Z         
2025-06-05T00:38:48.3017177Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e654161ca93c1f0544dc/clusters/test-acc-tf-c-2902418834282666691 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.3019346Z         
2025-06-05T00:38:48.3019928Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.3021101Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.3022180Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.3022725Z         
2025-06-05T00:38:48.4388596Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (185.61s)
```
### 2025-06-06
#### PASS 34 minutes
### 2025-06-07
#### PASS 39 minutes
### 2025-06-08
#### PASS 32 minutes
### 2025-06-09
#### PASS 56 minutes
### 2025-06-10
#### PASS 55 minutes
### 2025-06-11
#### PASS 32 minutes
#### PASS 36 minutes
### 2025-06-12
#### PASS 36 minutes
### 2025-06-13
#### PASS 37 minutes
### 2025-06-14
#### PASS 54 minutes
### 2025-06-15
#### PASS 29 minutes
### 2025-06-16
#### PASS 52 minutes
### 2025-06-17
#### PASS 44 minutes
### 2025-06-18
#### PASS 44 minutes
#### PASS 28 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 30 minutes
### 2025-06-21
#### PASS 34 minutes
### 2025-06-22
#### PASS 40 minutes
### 2025-06-23
#### PASS 31 minutes
### 2025-06-24
#### PASS an hour
### 2025-06-25
#### PASS 29 minutes
### 2025-06-26
#### PASS 33 minutes
### 2025-06-27
#### PASS 32 minutes
### 2025-06-28
#### PASS 32 minutes
### 2025-06-29
#### PASS 35 minutes
### 2025-06-30
#### PASS 34 minutes
### 2025-07-01
#### PASS 32 minutes
#### PASS 30 minutes
#### PASS 29 minutes
#### PASS 30 minutes
#### PASS 35 minutes
### 2025-07-02
#### PASS 32 minutes
### 2025-07-03
#### PASS 34 minutes
### 2025-07-04
#### PASS 33 minutes
### 2025-07-05
#### PASS 31 minutes
### 2025-07-06
#### PASS 29 minutes
### 2025-07-07
#### PASS 34 minutes
### 2025-07-08
#### PASS 37 minutes
### 2025-07-09
#### PASS 30 minutes