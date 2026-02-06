# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10840.07s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10815.06s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters | dev | out_of_capacity | 50.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 39 minutes
- 2026-01-09 PASS 48 minutes
- 2026-01-10 PASS 39 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 47 minutes
- 2026-01-13 PASS 58 minutes
- 2026-01-14 PASS 44 minutes
- 2026-01-15 PASS 53 minutes
- 2026-01-16 PASS 50 minutes
- 2026-01-17 PASS 52 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 41 minutes
- 2026-01-20 PASS 47 minutes
- 2026-01-21 PASS 49 minutes
- 2026-01-22 PASS 48 minutes
- 2026-01-23 PASS 50 minutes
- 2026-01-24 PASS 39 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 39 minutes
- 2026-01-27 PASS 47 minutes
- 2026-01-28 PASS 44 minutes
- 2026-01-29 PASS 53 minutes
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.6406831Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-31T00:36:56.1881756Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-31T00:37:36.1499466Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-31T00:37:36.1501647Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:36.149678848Z, ProjectID: 697d4e4a7d00588dcf9f5262, Cluster name: test-acc-tf-c-5894099897973984505
2026-01-31T03:37:36.8394982Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-31T03:37:36.8396186Z     resource_test.go:460: Step 1/5 error: Error running apply: exit status 1
2026-01-31T03:37:36.8396821Z         
2026-01-31T03:37:36.8397096Z         Error: Error in create
2026-01-31T03:37:36.8397360Z         
2026-01-31T03:37:36.8397700Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:36.8398534Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:36.8399182Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:36.8399683Z         
2026-01-31T03:37:36.8400235Z         cluster=test-acc-tf-c-5894099897973984505 didn't reach desired state: IDLE,
2026-01-31T03:37:36.8400728Z         error: context deadline exceeded
2026-01-31T03:37:36.8962774Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10840.71s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.4564722Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-02T00:40:19.9007678Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-02T00:40:34.9138454Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-02T00:40:34.9142819Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:40:34.913473996Z, ProjectID: 697ff21c71768356d7f8c603, Cluster name: test-acc-tf-c-8667157914308105762
2026-02-02T03:40:35.4617414Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-02T03:40:35.4618469Z     resource_test.go:460: Step 1/5 error: Error running apply: exit status 1
2026-02-02T03:40:35.4619024Z         
2026-02-02T03:40:35.4619438Z         Error: Error in create
2026-02-02T03:40:35.4619760Z         
2026-02-02T03:40:35.4620281Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:35.4621299Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:35.4622355Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:35.4622701Z         
2026-02-02T03:40:35.4623195Z         cluster=test-acc-tf-c-8667157914308105762 didn't reach desired state: IDLE,
2026-02-02T03:40:35.4623717Z         error: context deadline exceeded
2026-02-02T03:40:35.5107176Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10815.62s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.1555768Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-03T00:42:03.6654785Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-03T00:42:53.6609124Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-03T00:42:53.6611133Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:53.660514226Z, ProjectID: 698143c5b2e54ee99590d5b0, Cluster name: test-acc-tf-c-6919331460015708891
2026-02-03T00:42:54.3773432Z    test_name=TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-03T00:42:54.3774290Z     resource_test.go:460: Step 1/5 error: Error running apply: exit status 1
2026-02-03T00:42:54.3774754Z         
2026-02-03T00:42:54.3775033Z         Error: Error in create
2026-02-03T00:42:54.3775370Z         
2026-02-03T00:42:54.3775823Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:54.3776524Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:54.3777234Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:54.3777570Z         
2026-02-03T00:42:54.3778066Z         cluster name: test-acc-tf-c-6919331460015708891, API error details:
2026-02-03T00:42:54.3779152Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters
2026-02-03T00:42:54.3780097Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:54.3780755Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:54.3781249Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:54.4320831Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (50.78s)
```

- 2026-02-04 PASS an hour
- 2026-02-05 PASS 53 minutes
- 2026-02-06 PASS 55 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 38 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 45 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 38 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 38 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 42 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 44 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 38 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
