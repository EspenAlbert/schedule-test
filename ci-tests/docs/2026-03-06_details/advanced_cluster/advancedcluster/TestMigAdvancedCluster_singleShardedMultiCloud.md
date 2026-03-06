# advanced_cluster/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 21) FAIL(x 2)
Success rate: 91.30%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-16 00:39](#error-2026-02-16t0039350000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69926747fca6e0756f2bf84c/clusters | dev | out_of_capacity | 9.04s
[2026-03-04 00:38](#error-2026-03-04t0038000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a77ee8c7d3cdfdfb63c5e0/clusters | dev | out_of_capacity | 9.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 33 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 33 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 33 minutes
- 2026-02-12: MISSING
- 2026-02-13 PASS 32 minutes
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:39:35+00:00
```
2026-02-16T00:39:35.1491547Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-02-16T00:41:04.8797649Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-02-16T00:41:11.4705070Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-02-16T00:41:11.4706302Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-02-16T00:41:11.4707024Z         
2026-02-16T00:41:11.4707477Z         Error: Error in create
2026-02-16T00:41:11.4707911Z         
2026-02-16T00:41:11.4708481Z           with mongodbatlas_advanced_cluster.test,
2026-02-16T00:41:11.4709725Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-16T00:41:11.4710882Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-16T00:41:11.4711483Z         
2026-02-16T00:41:11.4712239Z         cluster name: test-acc-tf-c-3358251548119306051, API error details:
2026-02-16T00:41:11.4713505Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69926747fca6e0756f2bf84c/clusters
2026-02-16T00:41:11.4714773Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-16T00:41:11.4715985Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-16T00:41:11.4737557Z         Conflict. Params: [], BadRequestDetail: 
2026-02-16T00:41:11.5529653Z    test_name=TestAccMockableAdvancedCluster_symmetricSharded test_terraform_path=/home/runner/work/_temp/a4ba89fb-7d72-4bb8-8e07-e90c01d6b6c0/terraform test_working_directory=/tmp/plugintest1613423151
2026-02-16T00:41:11.8057012Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (9.40s)
```

- 2026-02-17: MISSING
- 2026-02-18 PASS 34 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 36 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 32 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 31 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 33 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 31 minutes
  - PASS 34 minutes
- 2026-03-03: MISSING
- 2026-03-04

### Error 2026-03-04T00:38:00+00:00
```
2026-03-04T00:38:00.8810571Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-03-04T00:39:33.1314381Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-03-04T00:39:39.2727028Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-03-04T00:39:39.2728088Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-03-04T00:39:39.2728853Z         
2026-03-04T00:39:39.2729317Z         Error: Error in create
2026-03-04T00:39:39.2730687Z         
2026-03-04T00:39:39.2731307Z           with mongodbatlas_advanced_cluster.test,
2026-03-04T00:39:39.2732554Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-04T00:39:39.2733874Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-04T00:39:39.2734479Z         
2026-03-04T00:39:39.2735267Z         cluster name: test-acc-tf-c-5529606372113099807, API error details:
2026-03-04T00:39:39.2736613Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77ee8c7d3cdfdfb63c5e0/clusters
2026-03-04T00:39:39.2737939Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-03-04T00:39:39.2739193Z         region is currently out of capacity for the requested instance size. Reason:
2026-03-04T00:39:39.2740190Z         Conflict. Params: [], BadRequestDetail: 
2026-03-04T00:39:39.6210118Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (9.04s)
```

- 2026-03-05: MISSING
- 2026-03-06 PASS 43 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 28 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 25 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 22 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 minutes
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
