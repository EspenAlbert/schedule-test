# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10807.06s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10809.07s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters | dev | out_of_capacity | 9.01s
[2026-02-13 00:41](#error-2026-02-13t0041270000) |  | dev | timeout | 10803.03s
[2026-02-24 00:37](#error-2026-02-24t0037120000) |  | dev | flaky_500 | 1059.07s

### Timeline
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
- 2026-02-07 PASS 42 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 36 minutes
- 2026-02-10 PASS 43 minutes
- 2026-02-11 PASS 38 minutes
- 2026-02-12 PASS 35 minutes
- 2026-02-13

### Error 2026-02-13T00:41:27+00:00
```
2026-02-13T00:41:27.1991870Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-13T00:42:59.1456770Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-13T03:43:00.0344860Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-13T03:43:00.0346020Z     resource_test.go:727: Step 1/4 error: Error running apply: exit status 1
2026-02-13T03:43:00.0346418Z         
2026-02-13T03:43:00.0346674Z         Error: Error in create
2026-02-13T03:43:00.0347086Z         
2026-02-13T03:43:00.0347931Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:43:00.0348623Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:43:00.0349250Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:43:00.0349573Z         
2026-02-13T03:43:00.0350015Z         cluster=test-acc-tf-c-814399864262150099 didn't reach desired state: IDLE,
2026-02-13T03:43:00.0350482Z         error: context deadline exceeded
2026-02-13T03:43:00.0814567Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (10803.27s)
```

- 2026-02-14 PASS 37 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 37 minutes
- 2026-02-17 PASS 38 minutes
- 2026-02-18 PASS 39 minutes
- 2026-02-19 PASS 50 minutes
- 2026-02-20 PASS 37 minutes
- 2026-02-21 PASS 35 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 48 minutes
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0969610Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-24T00:40:00.5487779Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-24T00:57:37.4522982Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-24T00:57:37.4523904Z     resource_test.go:726: Step 1/4 error: Error running apply: exit status 1
2026-02-24T00:57:37.4524412Z         
2026-02-24T00:57:37.4524742Z         Error: error reading Advanced Configuration
2026-02-24T00:57:37.4525161Z         
2026-02-24T00:57:37.4525493Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:37.4526299Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:37.4527444Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:37.4528011Z         
2026-02-24T00:57:37.4528627Z         cluster name: test-acc-tf-c-6594804766817030615, API error details: (503
2026-02-24T00:57:37.4529428Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:37.5106944Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (1059.74s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-17 15:23](#error-2026-02-17t1523210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699487e9c64c45bf0bba96a8/clusters | qa | out_of_capacity | 9.01s

### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 36 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 40 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 9 seconds

### Error 2026-02-17T15:23:21+00:00
```
2026-02-17T15:23:21.1849480Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-17T15:24:44.3846697Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-17T15:24:50.6374839Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2026-02-17T15:24:50.6384186Z     resource_test.go:727: Step 1/4 error: Error running apply: exit status 1
2026-02-17T15:24:50.6386117Z         
2026-02-17T15:24:50.6387494Z         Error: Error in create
2026-02-17T15:24:50.6388900Z         
2026-02-17T15:24:50.6391179Z           with mongodbatlas_advanced_cluster.test,
2026-02-17T15:24:50.6392502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-17T15:24:50.6393767Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-17T15:24:50.6394381Z         
2026-02-17T15:24:50.6398280Z         cluster name: test-acc-tf-c-730648051375417468, API error details:
2026-02-17T15:24:50.6399660Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/699487e9c64c45bf0bba96a8/clusters
2026-02-17T15:24:50.6401037Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-17T15:24:50.6402357Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-17T15:24:50.6403401Z         Conflict. Params: [], BadRequestDetail: 
2026-02-17T15:24:50.7281174Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (9.12s)
```

  - PASS 32 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 37 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
