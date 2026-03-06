# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 00:41](#error-2026-02-13t0041270000) |  | dev | timeout | 10807.07s
[2026-02-24 00:37](#error-2026-02-24t0037120000) |  | dev | flaky_500 | 1182.10s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 19 minutes
- 2026-02-13

### Error 2026-02-13T00:41:27+00:00
```
2026-02-13T00:41:27.1219562Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-13T00:42:51.2900033Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-13T03:42:58.8761965Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-13T03:42:58.8762987Z     resource_test.go:586: Step 1/3 error: Error running apply: exit status 1
2026-02-13T03:42:58.8763644Z         
2026-02-13T03:42:58.8764077Z         Error: Error in create
2026-02-13T03:42:58.8764506Z         
2026-02-13T03:42:58.8765096Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:42:58.8766307Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:42:58.8767758Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:42:58.8768336Z         
2026-02-13T03:42:58.8769141Z         cluster=test-acc-tf-c-5465976574984342203 didn't reach desired state: IDLE,
2026-02-13T03:42:58.8769966Z         error: context deadline exceeded
2026-02-13T03:42:58.9322544Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (10807.65s)
```

- 2026-02-14 PASS 27 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 24 minutes
- 2026-02-19 PASS 25 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0241204Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-24T00:40:00.5579745Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-24T00:56:01.5427552Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-24T00:56:01.5428252Z     resource_test.go:585: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:56:01.5428823Z         
2026-02-24T00:56:01.5429125Z         Error: error resolving container IDs
2026-02-24T00:56:01.5430152Z         
2026-02-24T00:56:01.5430700Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:56:01.5431905Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:56:01.5433234Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:56:01.5433782Z         
2026-02-24T00:56:01.5434597Z         cluster name = test-acc-tf-c-5723205910361399045, error details: (503 Service
2026-02-24T00:56:01.5435529Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:26.5980514Z    test_working_directory=/tmp/plugintest3647021574 test_step_number=1
2026-02-24T00:59:43.5166551Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1182.96s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 24 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 18 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 17 minutes
  - PASS 18 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 29 minutes
- 2026-03-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 20 minutes
  - PASS 17 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 26 minutes
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 21 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
