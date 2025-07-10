# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_symmetricGeoShardedOldSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters | dev | flaky_500 | 8.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 19 minutes
- 2025-04-13 PASS 20 minutes
- 2025-04-14 PASS 16 minutes
- 2025-04-15 PASS 16 minutes
- 2025-04-16
  - PASS 18 minutes
  - PASS 25 minutes
- 2025-04-17 PASS 17 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 23 minutes
- 2025-04-20 PASS 18 minutes
- 2025-04-21 PASS 24 minutes
- 2025-04-22 PASS 18 minutes
- 2025-04-23 PASS 19 minutes
- 2025-04-24 PASS 15 minutes
- 2025-04-25 PASS 17 minutes
- 2025-04-26 PASS 16 minutes
- 2025-04-27 PASS 20 minutes
- 2025-04-28 PASS 16 minutes
- 2025-04-29 PASS 21 minutes
- 2025-04-30 PASS 17 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-05-02 PASS 26 minutes
- 2025-05-03 PASS 16 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 26 minutes
- 2025-05-07 PASS 18 minutes
- 2025-05-08 PASS 18 minutes
- 2025-05-09 PASS 19 minutes
- 2025-05-10 PASS 26 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7669565Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-05-11T00:30:01.7669948Z     shared_resource.go:84: 
2025-05-11T00:30:01.7671091Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7673133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7674892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7676631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7678715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:807
2025-05-11T00:30:01.7680912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-05-11T00:30:01.7683471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:30
2025-05-11T00:30:01.7684328Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7685189Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7685808Z         	Test:       	TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-05-11T00:30:01.7686865Z         	Messages:   	Project creation failed: test-acc-tf-p-8263910542515085147, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7687621Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (0.02s)
```

- 2025-05-12 PASS 17 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 24 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 20 minutes
- 2025-05-17 PASS 18 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 23 minutes
- 2025-05-20 PASS 17 minutes
- 2025-05-21
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-05-22 PASS 18 minutes
- 2025-05-23 PASS 16 minutes
- 2025-05-24 PASS 25 minutes
- 2025-05-25 PASS 24 minutes
- 2025-05-26 PASS 21 minutes
- 2025-05-27 PASS 21 minutes
- 2025-05-28
  - PASS 17 minutes
  - PASS 54 minutes
  - PASS 19 minutes
- 2025-05-29 PASS 23 minutes
- 2025-05-30
  - PASS 47 minutes
  - PASS 23 minutes
- 2025-05-31 PASS 18 minutes
- 2025-06-01
  - PASS 28 minutes
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 20 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 22 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5806863Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-06-05T00:35:38.5948389Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-06-05T00:35:38.6473174Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-06-05T00:35:38.6474297Z     resource_advanced_cluster_migration_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6475059Z         
2025-06-05T00:35:38.6475522Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6476171Z         
2025-06-05T00:35:38.6476734Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6477875Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6479053Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6479579Z         
2025-06-05T00:35:38.6480308Z         cluster name: test-acc-tf-c-7925678108051916545, API error details:
2025-06-05T00:35:38.6481494Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters
2025-06-05T00:35:38.6482716Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6483776Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6484483Z         BadRequestDetail: 
2025-06-05T00:35:38.6511075Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (8.36s)
```

- 2025-06-06 PASS 20 minutes
- 2025-06-07 PASS 18 minutes
- 2025-06-08 PASS 17 minutes
- 2025-06-09 PASS 21 minutes
- 2025-06-10 PASS 21 minutes
- 2025-06-11
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-06-12 PASS 24 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 44 minutes
- 2025-06-15 PASS 16 minutes
- 2025-06-16 PASS 29 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18
  - PASS 25 minutes
  - PASS 16 minutes
- 2025-06-19 PASS 50 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 17 minutes
- 2025-06-22 PASS 17 minutes
- 2025-06-23 PASS 16 minutes
- 2025-06-24 PASS 23 minutes
- 2025-06-25 PASS 15 minutes
- 2025-06-26
  - PASS 21 minutes
  - PASS 14 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 23 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 15 minutes
  - PASS 20 minutes
  - PASS 16 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 15 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10 PASS 17 minutes