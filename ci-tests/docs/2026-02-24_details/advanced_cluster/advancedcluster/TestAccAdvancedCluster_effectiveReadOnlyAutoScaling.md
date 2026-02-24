# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveReadOnlyAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.03s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.05s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 5.08s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1052.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 20 minutes
- 2026-01-29 PASS 30 minutes
- 2026-01-30 PASS 37 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5983917Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-01-31T00:36:56.2147605Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-01-31T00:36:58.2112760Z   diagnostic_detail=
2026-01-31T00:36:58.2118555Z    tf_rpc=ValidateResourceConfig diagnostic_summary="Missing Configuration for Required Attribute"
2026-01-31T03:37:01.3888302Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-01-31T03:37:01.3890749Z     effective_fields_test.go:242: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.3894989Z         
2026-01-31T03:37:01.3898028Z         Error: Error in create
2026-01-31T03:37:01.3898565Z         
2026-01-31T03:37:01.3901388Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.3906170Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.3907462Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.3908067Z         
2026-01-31T03:37:01.3908888Z         cluster=test-acc-tf-c-3041718523539442023 didn't reach desired state: IDLE,
2026-01-31T03:37:01.3910095Z         error: context deadline exceeded
2026-01-31T03:37:01.5366297Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (10805.30s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9988329Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-02T00:40:19.9279107Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-02T03:40:26.3816318Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-02T03:40:26.3817573Z     effective_fields_test.go:242: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.3818269Z         
2026-02-02T03:40:26.3818676Z         Error: Error in create
2026-02-02T03:40:26.3819070Z         
2026-02-02T03:40:26.3819627Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.3821245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.3822645Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.3823246Z         
2026-02-02T03:40:26.3824145Z         cluster=test-acc-tf-c-8512639328473023166 didn't reach desired state: IDLE,
2026-02-02T03:40:26.3825042Z         error: context deadline exceeded
2026-02-02T03:40:26.4329703Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (10806.52s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8831585Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-03T00:42:03.6233213Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-03T00:42:09.2702074Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-03T00:42:09.2703129Z     effective_fields_test.go:242: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.2703803Z         
2026-02-03T00:42:09.2704199Z         Error: Error in create
2026-02-03T00:42:09.2704602Z         
2026-02-03T00:42:09.2705152Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.2706239Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.2707222Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.2707706Z         
2026-02-03T00:42:09.2708322Z         cluster name: test-acc-tf-c-2532315265190204028, API error details:
2026-02-03T00:42:09.2709499Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.2710546Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.2711637Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.2712630Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.2773334Z    test_step_number=1
2026-02-03T00:42:09.4146480Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (5.79s)
```

- 2026-02-04 PASS 20 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 22 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 20 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5626690Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-24T00:40:00.6221020Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-24T00:57:33.1478046Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-24T00:57:33.1479098Z     effective_fields_test.go:242: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:57:33.1479810Z         
2026-02-24T00:57:33.1480620Z         Error: error resolving container IDs
2026-02-24T00:57:33.1481105Z         
2026-02-24T00:57:33.1481677Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:33.1482775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:33.1483429Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:33.1483757Z         
2026-02-24T00:57:33.1484245Z         cluster name = test-acc-tf-c-3772589217570876626, error details: (503 Service
2026-02-24T00:57:33.1484882Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:33.2157829Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (1052.60s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 21 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 16 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
