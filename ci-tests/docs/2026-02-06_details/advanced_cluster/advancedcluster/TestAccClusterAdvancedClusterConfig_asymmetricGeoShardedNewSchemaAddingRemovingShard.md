# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10807.06s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10809.07s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters | dev | out_of_capacity | 9.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 35 minutes
- 2026-01-09 PASS 42 minutes
- 2026-01-10 PASS 36 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 38 minutes
- 2026-01-13 PASS 44 minutes
- 2026-01-14 PASS 38 minutes
- 2026-01-15 PASS 45 minutes
- 2026-01-16 PASS 46 minutes
- 2026-01-17 PASS 45 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 34 minutes
- 2026-01-20 PASS 38 minutes
- 2026-01-21 PASS 41 minutes
- 2026-01-22 PASS 44 minutes
- 2026-01-23 PASS 39 minutes
- 2026-01-24 PASS 34 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 36 minutes
- 2026-01-27 PASS 42 minutes
- 2026-01-28 PASS 38 minutes
- 2026-01-29 PASS 47 minutes
- 2026-01-30 PASS 54 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.7118915Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-01-31T00:36:56.1581110Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-01-31T03:37:01.5276787Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-01-31T03:37:01.5278461Z     resource_test.go:727: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:01.5279264Z         
2026-01-31T03:37:01.5280797Z         Error: Error in create
2026-01-31T03:37:01.5282330Z         
2026-01-31T03:37:01.5284147Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.5286849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.5288903Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.5292022Z         
2026-01-31T03:37:01.5292940Z         cluster=test-acc-tf-c-2965552326456707768 didn't reach desired state: IDLE,
2026-01-31T03:37:01.5299599Z         error: context deadline exceeded
2026-01-31T03:37:01.5310390Z   
2026-01-31T03:37:01.7183722Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (10807.58s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.5406514Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-02T00:40:19.8844919Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-02T03:40:26.6228359Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-02T03:40:26.6230295Z     resource_test.go:727: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:26.6231369Z         
2026-02-02T03:40:26.6231836Z         Error: Error in create
2026-02-02T03:40:26.6232439Z         
2026-02-02T03:40:26.6233061Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.6234362Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.6235501Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.6236047Z         
2026-02-02T03:40:26.6236898Z         cluster=test-acc-tf-c-3615181132935649932 didn't reach desired state: IDLE,
2026-02-02T03:40:26.6237752Z         error: context deadline exceeded
2026-02-02T03:40:26.8154985Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (10809.71s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.2438347Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-03T00:42:03.6097586Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-03T00:42:09.6369598Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-03T00:42:09.6371213Z     resource_test.go:727: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:09.6371901Z         
2026-02-03T00:42:09.6372440Z         Error: Error in create
2026-02-03T00:42:09.6372883Z         
2026-02-03T00:42:09.6373645Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.6375034Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.6376334Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.6377048Z         
2026-02-03T00:42:09.6377904Z         cluster name: test-acc-tf-c-4330411564393719145, API error details:
2026-02-03T00:42:09.6379559Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters
2026-02-03T00:42:09.6381037Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.6382872Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.6384519Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.6398334Z   
2026-02-03T00:42:10.1231259Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (9.09s)
```

- 2026-02-04 PASS 46 minutes
- 2026-02-05 PASS 38 minutes
- 2026-02-06 PASS 46 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 33 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 39 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 32 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 37 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 38 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 39 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 34 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
