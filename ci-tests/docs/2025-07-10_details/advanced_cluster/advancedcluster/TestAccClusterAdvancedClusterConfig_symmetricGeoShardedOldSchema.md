# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 5)
Success rate: 95.65%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa |  | 0.01s
[2025-05-25 01:00](#error-2025-05-25t0100260000) |  | qa | timeout | 12257.08s
[2025-06-05 00:35](#error-2025-06-05t0035320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e652161ca93c1f05447f/clusters/test-acc-tf-c-1467535966319868856 | dev | flaky_500 | 185.05s
[2025-06-06 01:02](#error-2025-06-06t0102430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68423e32c64ff333daf6e9ea/clusters/test-acc-tf-c-8578261430366258151 | dev | flaky_500 | 1225.04s
[2025-06-15 01:02](#error-2025-06-15t0102500000) | OUT_OF_CAPACITY /api/atlas/v2/groups/684e1bb94bc09a15319712fd/clusters | qa | out_of_capacity | 5.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 26 minutes
- 2025-04-13 PASS 34 minutes
- 2025-04-14 PASS 26 minutes
- 2025-04-15 PASS 38 minutes
- 2025-04-16
  - PASS 29 minutes
  - PASS 36 minutes
- 2025-04-17 PASS 28 minutes
- 2025-04-18 PASS 28 minutes
- 2025-04-19 PASS 29 minutes
- 2025-04-20 PASS 30 minutes
- 2025-04-21 PASS 38 minutes
- 2025-04-22 PASS 30 minutes
- 2025-04-23 PASS 29 minutes
- 2025-04-24 PASS 27 minutes
- 2025-04-25 PASS 27 minutes
- 2025-04-26 PASS 29 minutes
- 2025-04-27 PASS 37 minutes
- 2025-04-28 PASS 28 minutes
- 2025-04-29 PASS 30 minutes
- 2025-04-30 PASS 32 minutes
- 2025-05-01
  - PASS 26 minutes
  - PASS 29 minutes
  - PASS 28 minutes
  - PASS 36 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 26 minutes
- 2025-05-02 PASS 35 minutes
- 2025-05-03 PASS 30 minutes
- 2025-05-04 PASS 30 minutes
- 2025-05-05 PASS 27 minutes
- 2025-05-06 PASS 36 minutes
- 2025-05-07 PASS 32 minutes
- 2025-05-08 PASS 33 minutes
- 2025-05-09 PASS 34 minutes
- 2025-05-10 PASS 30 minutes
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.5299300Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-05-11T00:30:10.5899465Z     shared_resource.go:84: 
2025-05-11T00:30:10.5901657Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.5904419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.5907783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.5910560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.5912870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:807
2025-05-11T00:30:10.5915008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:802
2025-05-11T00:30:10.5915806Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.5916654Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.5917342Z         	Test:       	TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-05-11T00:30:10.5918427Z         	Messages:   	Project creation failed: test-acc-tf-p-2590261182476781756, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.5919232Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (0.06s)
```

- 2025-05-12 PASS 30 minutes
- 2025-05-13
  - PASS 29 minutes
  - PASS 25 minutes
- 2025-05-14 PASS 35 minutes
- 2025-05-15 PASS 32 minutes
- 2025-05-16 PASS 29 minutes
- 2025-05-17 PASS 29 minutes
- 2025-05-18 PASS 28 minutes
- 2025-05-19 PASS 28 minutes
- 2025-05-20 PASS 33 minutes
- 2025-05-21 PASS 31 minutes
- 2025-05-22 PASS 29 minutes
- 2025-05-23 PASS 38 minutes
- 2025-05-24 PASS 28 minutes
- 2025-05-25

### Error 2025-05-25T01:00:26+00:00
```
2025-05-25T01:00:26.3457653Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-05-25T01:01:31.8698978Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-05-25T04:22:18.1447779Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-05-25T04:22:18.1448580Z     resource_advanced_cluster_test.go:805: Step 2/3 error: Error running apply: exit status 1
2025-05-25T04:22:18.1449062Z         
2025-05-25T04:22:18.1450351Z         Error: error updating advanced cluster (test-acc-tf-c-835008837066644919): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-05-25T04:22:18.1451282Z         
2025-05-25T04:22:18.1451623Z           with mongodbatlas_advanced_cluster.test,
2025-05-25T04:22:18.1452369Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-25T04:22:18.1453143Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-25T04:22:18.1453506Z         
2025-05-25T04:25:49.7096806Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (12257.84s)
```

- 2025-05-26 PASS 31 minutes
- 2025-05-27 PASS 30 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 35 minutes
  - PASS 29 minutes
- 2025-05-29
  - PASS 40 minutes
  - PASS 25 minutes
- 2025-05-30
  - PASS an hour
  - PASS 28 minutes
- 2025-05-31 PASS 30 minutes
- 2025-06-01
  - PASS 33 minutes
  - PASS 32 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 27 minutes
  - PASS 29 minutes
- 2025-06-02
  - PASS 29 minutes
  - PASS an hour
  - PASS 27 minutes
- 2025-06-03 PASS 28 minutes
- 2025-06-04 PASS 31 minutes
- 2025-06-05

### Error 2025-06-05T00:35:32+00:00
```
2025-06-05T00:35:32.1570427Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-05T00:35:42.8659644Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-05T00:38:48.2028577Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-05T00:38:48.2029814Z     resource_advanced_cluster_test.go:805: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:38:48.2030577Z         
2025-06-05T00:38:48.2033644Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e652161ca93c1f05447f/clusters/test-acc-tf-c-1467535966319868856 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.2035947Z         
2025-06-05T00:38:48.2036516Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.2037909Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.2038983Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.2039521Z         
2025-06-05T00:38:48.2204130Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_terraform_path=/home/runner/work/_temp/2d4b31c9-479e-44d7-b7ae-aa2b06b7e890/terraform test_working_directory=/tmp/plugintest3730208590
2025-06-05T00:38:48.3408668Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (185.48s)
```

- 2025-06-06

### Error 2025-06-06T01:02:43+00:00
```
2025-06-06T01:02:43.2909369Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-06T01:06:43.1661852Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-06T01:21:26.7652681Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-06T01:21:26.7654065Z     resource_advanced_cluster_test.go:805: Step 2/3 error: Error running apply: exit status 1
2025-06-06T01:21:26.7654696Z         
2025-06-06T01:21:26.7658041Z         Error: error updating advanced cluster (test-acc-tf-c-8578261430366258151): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68423e32c64ff333daf6e9ea/clusters/test-acc-tf-c-8578261430366258151 PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: []
2025-06-06T01:21:26.7660292Z         
2025-06-06T01:21:26.7660922Z           with mongodbatlas_advanced_cluster.test,
2025-06-06T01:21:26.7662166Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-06T01:21:26.7663566Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-06T01:21:26.7664168Z         
2025-06-06T01:27:08.5944858Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (1225.43s)
```

- 2025-06-07 PASS 32 minutes
- 2025-06-08 PASS 28 minutes
- 2025-06-09 PASS 2 hours
- 2025-06-10 PASS 28 minutes
- 2025-06-11
  - PASS 29 minutes
  - PASS 39 minutes
- 2025-06-12 PASS 29 minutes
- 2025-06-13 PASS 43 minutes
- 2025-06-14 PASS 29 minutes
- 2025-06-15

### Error 2025-06-15T01:02:50+00:00
```
2025-06-15T01:02:50.4047408Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-15T01:04:06.0016715Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-15T01:04:11.0450340Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-06-15T01:04:11.0452565Z     resource_advanced_cluster_test.go:805: Step 1/3 error: Error running apply: exit status 1
2025-06-15T01:04:11.0493773Z         
2025-06-15T01:04:11.0501149Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/684e1bb94bc09a15319712fd/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-06-15T01:04:11.0507207Z         
2025-06-15T01:04:11.0509000Z           with mongodbatlas_advanced_cluster.test,
2025-06-15T01:04:11.0511021Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-15T01:04:11.0512156Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-15T01:04:11.0512811Z         
2025-06-15T01:04:11.2271424Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (5.23s)
```

- 2025-06-16 PASS 53 minutes
- 2025-06-17 PASS 50 minutes
- 2025-06-18
  - PASS 42 minutes
  - PASS 28 minutes
- 2025-06-19 PASS 57 minutes
- 2025-06-20 PASS 29 minutes
- 2025-06-21 PASS 31 minutes
- 2025-06-22 PASS 44 minutes
- 2025-06-23 PASS 28 minutes
- 2025-06-24 PASS 40 minutes
- 2025-06-25 PASS 30 minutes
- 2025-06-26 PASS 31 minutes
- 2025-06-27 PASS 39 minutes
- 2025-06-28 PASS 29 minutes
- 2025-06-29 PASS 31 minutes
- 2025-06-30 PASS 33 minutes
- 2025-07-01
  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 29 minutes
  - PASS 26 minutes
  - PASS 44 minutes
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 30 minutes
- 2025-07-04 PASS 31 minutes
- 2025-07-05 PASS 28 minutes
- 2025-07-06 PASS 28 minutes
- 2025-07-07 PASS 32 minutes
- 2025-07-08 PASS 33 minutes
- 2025-07-09 PASS 29 minutes
- 2025-07-10 PASS 28 minutes