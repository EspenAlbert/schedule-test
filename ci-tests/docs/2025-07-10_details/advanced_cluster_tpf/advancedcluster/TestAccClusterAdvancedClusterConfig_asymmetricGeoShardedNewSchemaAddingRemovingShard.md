# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4dbc939f27413251721/clusters | dev | flaky_500 | 5.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 33 minutes
- 2025-04-13 PASS 38 minutes
- 2025-04-14 PASS 29 minutes
- 2025-04-15 PASS 46 minutes
- 2025-04-16
  - PASS 31 minutes
  - PASS 40 minutes
- 2025-04-17 PASS 34 minutes
- 2025-04-18 PASS 33 minutes
- 2025-04-19 PASS 31 minutes
- 2025-04-20 PASS 32 minutes
- 2025-04-21 PASS 34 minutes
- 2025-04-22 PASS 33 minutes
- 2025-04-23 PASS 35 minutes
- 2025-04-24 PASS 34 minutes
- 2025-04-25 PASS 35 minutes
- 2025-04-26 PASS 33 minutes
- 2025-04-27 PASS 35 minutes
- 2025-04-28 PASS 33 minutes
- 2025-04-29 PASS 35 minutes
- 2025-04-30 PASS 35 minutes
- 2025-05-01
  - PASS 31 minutes
  - PASS 31 minutes
  - PASS 32 minutes
  - PASS 32 minutes
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 30 minutes
- 2025-05-02 PASS 37 minutes
- 2025-05-03 PASS 33 minutes
- 2025-05-04 PASS 39 minutes
- 2025-05-05 PASS 28 minutes
- 2025-05-06 PASS 37 minutes
- 2025-05-07 PASS 36 minutes
- 2025-05-08 PASS 35 minutes
- 2025-05-09 PASS 34 minutes
- 2025-05-10 PASS 32 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8008211Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-05-11T00:30:01.8008713Z     shared_resource.go:84: 
2025-05-11T00:30:01.8009585Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8011424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8013177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8014914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8016896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:931
2025-05-11T00:30:01.8017705Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8018564Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8019381Z         	Test:       	TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-05-11T00:30:01.8020553Z         	Messages:   	Project creation failed: test-acc-tf-p-5890655406355376108, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8021633Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (0.02s)
```

- 2025-05-12 PASS 32 minutes
- 2025-05-13
  - PASS 33 minutes
  - PASS 30 minutes
- 2025-05-14 PASS 34 minutes
- 2025-05-15 PASS 32 minutes
- 2025-05-16 PASS 32 minutes
- 2025-05-17 PASS 31 minutes
- 2025-05-18 PASS 32 minutes
- 2025-05-19 PASS 32 minutes
- 2025-05-20 PASS 33 minutes
- 2025-05-21
  - PASS 40 minutes
  - PASS 27 minutes
- 2025-05-22 PASS 32 minutes
- 2025-05-23 PASS 32 minutes
- 2025-05-24 PASS 34 minutes
- 2025-05-25 PASS 33 minutes
- 2025-05-26 PASS 34 minutes
- 2025-05-27 PASS 34 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 31 minutes
  - PASS 31 minutes
- 2025-05-29 PASS 38 minutes
- 2025-05-30
  - PASS an hour
  - PASS 29 minutes
- 2025-05-31 PASS 32 minutes
- 2025-06-01
  - PASS 29 minutes
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 29 minutes
- 2025-06-02
  - PASS 29 minutes
  - PASS 32 minutes
  - PASS 35 minutes
  - PASS 29 minutes
- 2025-06-03 PASS 32 minutes
- 2025-06-04 PASS 32 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5898245Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-06-05T00:35:38.5957014Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-06-05T00:35:38.6157675Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-06-05T00:35:38.6158638Z     resource_advanced_cluster_test.go:935: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6159050Z         
2025-06-05T00:35:38.6159297Z         Error: Error in create
2025-06-05T00:35:38.6159538Z         
2025-06-05T00:35:38.6159861Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6160498Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6161081Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6161393Z         
2025-06-05T00:35:38.6161805Z         cluster name: test-acc-tf-c-6503131844988302885, API error details:
2025-06-05T00:35:38.6162466Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dbc939f27413251721/clusters
2025-06-05T00:35:38.6163146Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6163720Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6164118Z         BadRequestDetail: 
2025-06-05T00:35:38.6170732Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest122862232 test_step_number=1
2025-06-05T00:35:38.6392533Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (5.98s)
```

- 2025-06-06 PASS an hour
- 2025-06-07 PASS 34 minutes
- 2025-06-08 PASS 31 minutes
- 2025-06-09 PASS 33 minutes
- 2025-06-10 PASS an hour
- 2025-06-11
  - PASS 36 minutes
  - PASS 32 minutes
- 2025-06-12 PASS 32 minutes
- 2025-06-13 PASS 36 minutes
- 2025-06-14 PASS 50 minutes
- 2025-06-15 PASS 30 minutes
- 2025-06-16 PASS 58 minutes
- 2025-06-17 PASS 33 minutes
- 2025-06-18
  - PASS 35 minutes
  - PASS 31 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 32 minutes
- 2025-06-21 PASS 32 minutes
- 2025-06-22 PASS 32 minutes
- 2025-06-23 PASS 30 minutes
- 2025-06-24 PASS 36 minutes
- 2025-06-25 PASS 29 minutes
- 2025-06-26
  - PASS 34 minutes
  - PASS 28 minutes
- 2025-06-27 PASS 33 minutes
- 2025-06-28 PASS 33 minutes
- 2025-06-29 PASS 35 minutes
- 2025-06-30 PASS 35 minutes
- 2025-07-01
  - PASS 32 minutes
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 30 minutes
- 2025-07-02 PASS 30 minutes
- 2025-07-03 PASS 48 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 31 minutes
- 2025-07-06 PASS 30 minutes
- 2025-07-07 PASS 30 minutes
- 2025-07-08 PASS 39 minutes
- 2025-07-09 PASS 31 minutes
- 2025-07-10 PASS 29 minutes