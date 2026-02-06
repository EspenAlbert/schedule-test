# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10804.09s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters | dev | out_of_capacity | 5.10s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
- 2026-01-09 PASS 27 minutes
- 2026-01-10 PASS 20 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 26 minutes
- 2026-01-13 PASS 27 minutes
- 2026-01-14 PASS 22 minutes
- 2026-01-15 PASS 26 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 21 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20 PASS 23 minutes
- 2026-01-21 PASS 25 minutes
- 2026-01-22 PASS 25 minutes
- 2026-01-23 PASS 28 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 23 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 30 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.6413401Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-01-31T00:36:56.1580029Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-01-31T03:37:00.9907828Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-01-31T03:37:00.9908628Z     resource_test.go:586: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:37:00.9909325Z         
2026-01-31T03:37:00.9909753Z         Error: Error in create
2026-01-31T03:37:00.9910191Z         
2026-01-31T03:37:00.9910732Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:00.9911422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:00.9912240Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:00.9912568Z         
2026-01-31T03:37:00.9913026Z         cluster=test-acc-tf-c-142434029662315927 didn't reach desired state: IDLE,
2026-01-31T03:37:00.9913505Z         error: context deadline exceeded
2026-01-31T03:37:01.0471225Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (10804.89s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.4578722Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-02T00:40:19.8907335Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-02T03:40:26.8437246Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-02T03:40:26.8438300Z     resource_test.go:586: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:26.8438983Z         
2026-02-02T03:40:26.8439416Z         Error: Error in create
2026-02-02T03:40:26.8439837Z         
2026-02-02T03:40:26.8440413Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.8441684Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.8442997Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.8443558Z         
2026-02-02T03:40:26.8444393Z         cluster=test-acc-tf-c-6659893167852194716 didn't reach desired state: IDLE,
2026-02-02T03:40:26.8445280Z         error: context deadline exceeded
2026-02-02T03:40:26.9901927Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (10807.10s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.1561202Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-03T00:42:03.6102037Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-03T00:42:09.4550192Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-03T00:42:09.4551503Z     resource_test.go:586: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:09.4552269Z         
2026-02-03T00:42:09.4552757Z         Error: Error in create
2026-02-03T00:42:09.4553296Z         
2026-02-03T00:42:09.4553969Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.4560372Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.4561415Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.4561983Z         
2026-02-03T00:42:09.4562707Z         cluster name: test-acc-tf-c-8050256379090857628, API error details:
2026-02-03T00:42:09.4563846Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters
2026-02-03T00:42:09.4565044Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.4566158Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.4567093Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.4843443Z   
2026-02-03T00:42:09.5945433Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.98s)
```

- 2026-02-04 PASS 29 minutes
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 28 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 20 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 18 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 24 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
