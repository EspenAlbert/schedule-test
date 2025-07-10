# advanced_cluster/advancedcluster/TestMigAdvancedCluster_geoShardedOldSchemaUpdate Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030090000) |  | qa |  | 0.01s
[2025-05-30 00:38](#error-2025-05-30t0038140000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v2/groups/6838fdf43a84470fe9d508ff/clusters/test-acc-tf-c-6198209048350752173 | dev |  | 5470.02s
[2025-06-05 00:29](#error-2025-06-05t0029090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d3161ca93c1f052ea0/clusters/test-acc-tf-c-3858242294755027937 | dev | flaky_500 | 187.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 25 minutes
- 2025-04-13 PASS 28 minutes
- 2025-04-14 PASS 24 minutes
- 2025-04-15 PASS 38 minutes
- 2025-04-16
  - PASS 26 minutes
  - PASS 27 minutes
- 2025-04-17 PASS 28 minutes
- 2025-04-18 PASS 28 minutes
- 2025-04-19 PASS 26 minutes
- 2025-04-20 PASS 24 minutes
- 2025-04-21 PASS 32 minutes
- 2025-04-22 PASS 26 minutes
- 2025-04-23 PASS 29 minutes
- 2025-04-24 PASS 26 minutes
- 2025-04-25 PASS 27 minutes
- 2025-04-26 PASS 26 minutes
- 2025-04-27 PASS 29 minutes
- 2025-04-28 PASS 27 minutes
- 2025-04-29 PASS 35 minutes
- 2025-04-30 PASS 36 minutes
- 2025-05-01
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 29 minutes
  - PASS 24 minutes
  - PASS 21 minutes
  - PASS 24 minutes
- 2025-05-02 PASS 32 minutes
- 2025-05-03 PASS 28 minutes
- 2025-05-04 PASS 33 minutes
- 2025-05-05 PASS 25 minutes
- 2025-05-06 PASS 33 minutes
- 2025-05-07 PASS 24 minutes
- 2025-05-08 PASS 29 minutes
- 2025-05-09 PASS 32 minutes
- 2025-05-10 PASS 33 minutes
- 2025-05-11

### Error 2025-05-11T00:30:09+00:00
```
2025-05-11T00:30:09.1795188Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-11T00:30:09.2409684Z     shared_resource.go:84: 
2025-05-11T00:30:09.2411607Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.2413938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.2416223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.2418413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.2420843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:79
2025-05-11T00:30:09.2421727Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.2422587Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.2423197Z         	Test:       	TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-11T00:30:09.2424229Z         	Messages:   	Project creation failed: test-acc-tf-p-8814405397950178825, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.2424969Z --- FAIL: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (0.06s)
```

- 2025-05-12 PASS 27 minutes
- 2025-05-13
  - PASS 28 minutes
  - PASS 23 minutes
- 2025-05-14 PASS 29 minutes
- 2025-05-15 PASS 30 minutes
- 2025-05-16 PASS 27 minutes
- 2025-05-17 PASS 29 minutes
- 2025-05-18 PASS 23 minutes
- 2025-05-19 PASS 27 minutes
- 2025-05-20 PASS 31 minutes
- 2025-05-21 PASS 28 minutes
- 2025-05-22 PASS 28 minutes
- 2025-05-23 PASS 39 minutes
- 2025-05-24 PASS 25 minutes
- 2025-05-25 PASS 34 minutes
- 2025-05-26 PASS 27 minutes
- 2025-05-27 PASS 28 minutes
- 2025-05-28
  - PASS 25 minutes
  - PASS 28 minutes
  - PASS 25 minutes
- 2025-05-29
  - PASS 40 minutes
  - PASS 21 minutes
- 2025-05-30
  - FAIL an hour

### Error 2025-05-30T00:38:14+00:00
```
2025-05-30T00:38:14.8050969Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T01:07:54.5611628Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T02:32:52.2926033Z === NAME  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T02:32:52.2926881Z     resource_advanced_cluster_migration_test.go:81: Step 2/2 error: Error running apply: exit status 1
2025-05-30T02:32:52.2927512Z         
2025-05-30T02:32:52.2930393Z         Error: error updating advanced cluster (test-acc-tf-c-6198209048350752173): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838fdf43a84470fe9d508ff/clusters/test-acc-tf-c-6198209048350752173 PATCH: HTTP 400 Bad Request (Error code: "INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS") Detail: One or more shards are being removed that consume more disk space than that available on the remaining shards. Reason: Bad Request. Params: []
2025-05-30T02:32:52.2932220Z         
2025-05-30T02:32:52.2932556Z           with mongodbatlas_advanced_cluster.test,
2025-05-30T02:32:52.2933205Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-30T02:32:52.2933817Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-30T02:32:52.2934137Z         
2025-05-30T02:39:04.7739594Z --- FAIL: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (5470.22s)
```

  - PASS 26 minutes
- 2025-05-31 PASS 28 minutes
- 2025-06-01
  - PASS 28 minutes
  - PASS 25 minutes
  - PASS 29 minutes
  - PASS 26 minutes
  - PASS 24 minutes
  - PASS 23 minutes
- 2025-06-02
  - PASS 27 minutes
  - PASS 23 minutes
  - PASS 25 minutes
- 2025-06-03 PASS 27 minutes
- 2025-06-04 PASS 28 minutes
- 2025-06-05

### Error 2025-06-05T00:29:09+00:00
```
2025-06-05T00:29:09.5478336Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-05T00:35:42.8406151Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-05T00:38:50.2673902Z === NAME  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-05T00:38:50.2675971Z     resource_advanced_cluster_migration_test.go:81: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:38:50.2676759Z         
2025-06-05T00:38:50.2679798Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d3161ca93c1f052ea0/clusters/test-acc-tf-c-3858242294755027937 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: []
2025-06-05T00:38:50.2681878Z         
2025-06-05T00:38:50.2682526Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:50.2684140Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:50.2685533Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:50.2686107Z         
2025-06-05T00:38:50.4222083Z --- FAIL: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (187.60s)
```

- 2025-06-06 PASS 32 minutes
- 2025-06-07 PASS 30 minutes
- 2025-06-08 PASS 24 minutes
- 2025-06-09 PASS 43 minutes
- 2025-06-10 PASS 27 minutes
- 2025-06-11
  - PASS 29 minutes
  - PASS 35 minutes
- 2025-06-12 PASS 33 minutes
- 2025-06-13 PASS 29 minutes
- 2025-06-14 PASS 40 minutes
- 2025-06-15 PASS 25 minutes
- 2025-06-16 PASS 37 minutes
- 2025-06-17 PASS 35 minutes
- 2025-06-18
  - PASS 29 minutes
  - PASS 25 minutes
- 2025-06-19 PASS 53 minutes
- 2025-06-20 PASS 28 minutes
- 2025-06-21 PASS 27 minutes
- 2025-06-22 PASS 30 minutes
- 2025-06-23 PASS 25 minutes
- 2025-06-24 PASS 35 minutes
- 2025-06-25 PASS 25 minutes
- 2025-06-26 PASS 28 minutes
- 2025-06-27 PASS 27 minutes
- 2025-06-28 PASS 28 minutes
- 2025-06-29 PASS 30 minutes
- 2025-06-30 PASS 30 minutes
- 2025-07-01
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 35 minutes
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 27 minutes
- 2025-07-04 PASS 26 minutes
- 2025-07-05 PASS 28 minutes
- 2025-07-06 PASS 24 minutes
- 2025-07-07 PASS 26 minutes
- 2025-07-08 PASS 38 minutes
- 2025-07-09 PASS 25 minutes
- 2025-07-10 PASS 24 minutes