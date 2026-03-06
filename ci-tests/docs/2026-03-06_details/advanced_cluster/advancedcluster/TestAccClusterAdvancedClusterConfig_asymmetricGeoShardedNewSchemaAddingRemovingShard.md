# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 00:41](#error-2026-02-13t0041270000) |  | dev | timeout | 10803.03s
[2026-02-24 00:37](#error-2026-02-24t0037120000) |  | dev | flaky_500 | 1059.07s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-25 PASS 36 minutes
- 2026-02-26 PASS 43 minutes
- 2026-02-27 PASS 36 minutes
- 2026-02-28 PASS 53 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 35 minutes
  - PASS 50 minutes
- 2026-03-03 PASS 42 minutes
- 2026-03-04 PASS 35 minutes
- 2026-03-05 PASS 51 minutes
- 2026-03-06 PASS 35 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-17 15:23](#error-2026-02-17t1523210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699487e9c64c45bf0bba96a8/clusters | qa | out_of_capacity | 9.01s

### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 41 minutes
- 2026-03-02 PASS 31 minutes
- 2026-03-03 PASS 35 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
