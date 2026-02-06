# advanced_cluster/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 18) FAIL(x 2)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-14 00:32](#error-2026-01-14t0032540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6966e436dec294f0362bba73/clusters | dev | out_of_capacity | 8.07s
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10808.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 24 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 24 minutes
- 2026-01-13: MISSING
- 2026-01-14

### Error 2026-01-14T00:32:54+00:00
```
2026-01-14T00:32:54.5492145Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-01-14T00:34:44.5355410Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-01-14T00:34:51.0958113Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-01-14T00:34:51.0959014Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-14T00:34:51.0959691Z         
2026-01-14T00:34:51.0960095Z         Error: Error in create
2026-01-14T00:34:51.0960498Z         
2026-01-14T00:34:51.0961067Z           with mongodbatlas_advanced_cluster.test,
2026-01-14T00:34:51.0962343Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-14T00:34:51.0963332Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-14T00:34:51.0963882Z         
2026-01-14T00:34:51.0964555Z         cluster name: test-acc-tf-c-870099703471589891, API error details:
2026-01-14T00:34:51.0965700Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6966e436dec294f0362bba73/clusters
2026-01-14T00:34:51.0967194Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-14T00:34:51.0968378Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-14T00:34:51.0969256Z         Conflict. Params: [], BadRequestDetail: 
2026-01-14T00:34:51.1193894Z   diagnostic_detail=
2026-01-14T00:34:51.1207658Z    tf_req_id=d3969298-8b34-cdff-8344-e5f82093a363 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=MoveResourceState tf_resource_type=mongodbatlas_advanced_cluster
2026-01-14T00:34:51.2786656Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (8.69s)
```

- 2026-01-15: MISSING
- 2026-01-16 PASS 26 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 24 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 28 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 25 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 38 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:46+00:00
```
2026-02-02T00:38:46.2858237Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-02-02T00:40:19.9761666Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-02-02T03:40:25.9547874Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-02-02T03:40:25.9549190Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:25.9550327Z         
2026-02-02T03:40:25.9550793Z         Error: Error in create
2026-02-02T03:40:25.9551399Z         
2026-02-02T03:40:25.9552227Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:25.9553523Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:25.9554767Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:25.9555389Z         
2026-02-02T03:40:25.9556277Z         cluster=test-acc-tf-c-1471289383812214799 didn't reach desired state: IDLE,
2026-02-02T03:40:25.9557203Z         error: context deadline exceeded
2026-02-02T03:40:25.9608688Z    test_working_directory=/tmp/plugintest1337202365
2026-02-02T03:40:26.1556090Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (10808.78s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 43 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 33 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 28 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 18 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 20 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 25 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
