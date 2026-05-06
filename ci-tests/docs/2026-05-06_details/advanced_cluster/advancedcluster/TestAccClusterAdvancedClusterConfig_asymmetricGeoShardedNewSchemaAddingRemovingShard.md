# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047080000) |  | dev | timeout | 12998.04s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032ee81002038a8a0f411/clusters | dev | out_of_capacity | 5.09s
[2026-04-18 00:47](#error-2026-04-18t0047060000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e2d48bfecf67ff0b47beb4/clusters | dev | out_of_capacity | 7.09s
[2026-04-22 00:46](#error-2026-04-22t0046190000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e81a5b632b92cc72e4be63/clusters | dev | out_of_capacity | 8.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:08+00:00
```
2026-04-07T00:47:08.2818630Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-07T00:48:53.7990605Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-07T04:25:29.2605052Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-07T04:25:29.2605895Z     resource_test.go:728: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:25:29.2606382Z         
2026-04-07T04:25:29.2606631Z         Error: Error in delete
2026-04-07T04:25:29.2606890Z         
2026-04-07T04:25:29.2607314Z         cluster=test-acc-tf-c-6414909710159049758 didn't reach desired state:
2026-04-07T04:25:29.2607939Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:25:29.2608409Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:25:29.2609210Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (12998.41s)
```

- 2026-04-08 PASS 55 minutes
- 2026-04-09 PASS 57 minutes
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 35 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 46 minutes
- 2026-04-14 PASS 39 minutes
- 2026-04-15 PASS 52 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.8577086Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-16T00:54:54.1755841Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-16T00:54:59.6876829Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-16T00:54:59.6878236Z     resource_test.go:728: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:59.6878913Z         
2026-04-16T00:54:59.6879375Z         Error: Error in create
2026-04-16T00:54:59.6879802Z         
2026-04-16T00:54:59.6880397Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.6881642Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.6882814Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.6883371Z         
2026-04-16T00:54:59.6904251Z         cluster name: test-acc-tf-c-6006654921813654835, API error details:
2026-04-16T00:54:59.6905852Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032ee81002038a8a0f411/clusters
2026-04-16T00:54:59.6907244Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.6908715Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.6909700Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.6933305Z    test_name=TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-04-16T00:54:59.8735608Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (5.89s)
```

- 2026-04-17 PASS 39 minutes
- 2026-04-18

### Error 2026-04-18T00:47:06+00:00
```
2026-04-18T00:47:06.9222676Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-18T00:48:27.4251627Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-18T00:48:32.8957161Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-18T00:48:32.8957986Z     resource_test.go:728: Step 1/4 error: Error running apply: exit status 1
2026-04-18T00:48:32.8958490Z         
2026-04-18T00:48:32.8958742Z         Error: Error in create
2026-04-18T00:48:32.8959071Z         
2026-04-18T00:48:32.8959415Z           with mongodbatlas_advanced_cluster.test,
2026-04-18T00:48:32.8960248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-18T00:48:32.8960834Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-18T00:48:32.8961135Z         
2026-04-18T00:48:32.8961523Z         cluster name: test-acc-tf-c-9003537380199454508, API error details:
2026-04-18T00:48:32.8962149Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e2d48bfecf67ff0b47beb4/clusters
2026-04-18T00:48:32.8963360Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-18T00:48:32.8963977Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-18T00:48:32.8964451Z         Conflict. Params: [], BadRequestDetail: 
2026-04-18T00:48:32.9384662Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (7.87s)
```

- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 49 minutes
- 2026-04-22

### Error 2026-04-22T00:46:19+00:00
```
2026-04-22T00:46:19.0746271Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-22T01:18:58.0910855Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-22T01:19:03.7495717Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-04-22T01:19:03.7497596Z     resource_test.go:728: Step 1/4 error: Error running apply: exit status 1
2026-04-22T01:19:03.7498433Z         
2026-04-22T01:19:03.7498843Z         Error: Error in create
2026-04-22T01:19:03.7499234Z         
2026-04-22T01:19:03.7499813Z           with mongodbatlas_advanced_cluster.test,
2026-04-22T01:19:03.7501053Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-22T01:19:03.7502215Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-22T01:19:03.7502766Z         
2026-04-22T01:19:03.7503507Z         cluster name: test-acc-tf-c-3841282564828844227, API error details:
2026-04-22T01:19:03.7504692Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a5b632b92cc72e4be63/clusters
2026-04-22T01:19:03.7506087Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-22T01:19:03.7507441Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-22T01:19:03.7508665Z         Conflict. Params: [], BadRequestDetail: 
2026-04-22T01:19:03.8419503Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (8.59s)
```

- 2026-04-23 PASS an hour
- 2026-04-24 PASS 42 minutes
- 2026-04-25 PASS 50 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 42 minutes
- 2026-04-28 PASS 47 minutes
- 2026-04-29 PASS 47 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 44 minutes
- 2026-05-02 PASS 36 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 55 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 52 minutes
  - PASS 36 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 50 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 40 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 41 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 40 minutes
- 2026-05-04 PASS 38 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 50 minutes
