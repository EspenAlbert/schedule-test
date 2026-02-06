# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10841.05s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10842.09s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814461e3c7fce231805af6/clusters | dev | out_of_capacity | 11.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 24 minutes
- 2026-01-10 PASS 15 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 22 minutes
- 2026-01-13 PASS 25 minutes
- 2026-01-14 PASS 18 minutes
- 2026-01-15 PASS 26 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 15 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 13 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 22 minutes
- 2026-01-22 PASS 21 minutes
- 2026-01-23 PASS 24 minutes
- 2026-01-24 PASS 16 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 14 minutes
- 2026-01-27 PASS 20 minutes
- 2026-01-28 PASS 20 minutes
- 2026-01-29 PASS 33 minutes
- 2026-01-30 PASS 31 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.7115492Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-31T00:36:56.1521799Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-31T03:37:06.3970922Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-31T03:37:06.3971844Z     resource_test.go:676: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:06.3972478Z         
2026-01-31T03:37:06.3972924Z         Error: Error in create
2026-01-31T03:37:06.3973358Z         
2026-01-31T03:37:06.3974162Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:06.3975623Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:06.3976887Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:06.3977487Z         
2026-01-31T03:37:06.3978348Z         cluster=test-acc-tf-c-6826950583070333973 didn't reach desired state: IDLE,
2026-01-31T03:37:06.3979230Z         error: context deadline exceeded
2026-01-31T03:37:06.7752219Z   
2026-01-31T03:37:37.6130897Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (10841.46s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.5402902Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-02T00:40:19.8901974Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-02T03:40:31.8103439Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-02T03:40:31.8104592Z     resource_test.go:676: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:31.8105345Z         
2026-02-02T03:40:31.8105807Z         Error: Error in create
2026-02-02T03:40:31.8106268Z         
2026-02-02T03:40:31.8106843Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:31.8107643Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:31.8108376Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:31.8108852Z         
2026-02-02T03:40:31.8109384Z         cluster=test-acc-tf-c-4736270398462088472 didn't reach desired state: IDLE,
2026-02-02T03:40:31.8110122Z         error: context deadline exceeded
2026-02-02T03:40:35.4616923Z   
2026-02-02T03:41:02.8154315Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (10842.93s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.2434992Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-03T00:42:03.6681574Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-03T00:42:13.8350826Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-03T00:42:13.8351847Z     resource_test.go:676: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:13.8352500Z         
2026-02-03T00:42:13.8352929Z         Error: Error in create
2026-02-03T00:42:13.8353342Z         
2026-02-03T00:42:13.8353916Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:13.8355097Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:13.8356218Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:13.8356778Z         
2026-02-03T00:42:13.8357541Z         cluster name: test-acc-tf-c-3274380255292931476, API error details:
2026-02-03T00:42:13.8358738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814461e3c7fce231805af6/clusters
2026-02-03T00:42:13.8360098Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:13.8361219Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:13.8362012Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:13.8959184Z   
2026-02-03T00:42:14.6640323Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11.00s)
```

- 2026-02-04 PASS 25 minutes
- 2026-02-05 PASS 29 minutes
- 2026-02-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 20 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 12 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 19 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 20 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
