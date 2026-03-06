# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-23 00:39](#error-2026-02-23t0039180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699ba1b38decccf9757d0e4e/clusters | dev | out_of_capacity | 6.07s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 994.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 19 minutes
- 2026-02-13 PASS 19 minutes
- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 20 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T00:39:18+00:00
```
2026-02-23T00:39:18.7399894Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-23T00:40:58.0945319Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-23T00:41:04.7850781Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-23T00:41:04.7852135Z     effective_fields_test.go:105: Step 1/2 error: Error running apply: exit status 1
2026-02-23T00:41:04.7852884Z         
2026-02-23T00:41:04.7853327Z         Error: Error in create
2026-02-23T00:41:04.7853763Z         
2026-02-23T00:41:04.7854333Z           with mongodbatlas_advanced_cluster.test,
2026-02-23T00:41:04.7855597Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-23T00:41:04.7856792Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-23T00:41:04.7857398Z         
2026-02-23T00:41:04.7858181Z         cluster name: test-acc-tf-c-6032133785863650946, API error details:
2026-02-23T00:41:04.7859481Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699ba1b38decccf9757d0e4e/clusters
2026-02-23T00:41:04.7860820Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-23T00:41:04.7862229Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-23T00:41:04.7863190Z         Conflict. Params: [], BadRequestDetail: 
2026-02-23T00:41:04.8401336Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (6.72s)
```

- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5614250Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-24T00:40:00.6006959Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-24T00:56:33.1114358Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-24T00:56:33.1115116Z     effective_fields_test.go:105: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:56:33.1115591Z         
2026-02-24T00:56:33.1115922Z         Error: error reading Advanced Configuration
2026-02-24T00:56:33.1116224Z         
2026-02-24T00:56:33.1116585Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:56:33.1117249Z           on terraform_plugin_test.tf line 49, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:56:33.1117882Z           49: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:56:33.1118196Z         
2026-02-24T00:56:33.1118639Z         cluster name: test-acc-tf-c-5528087053154990444, API error details: (503
2026-02-24T00:56:33.1119308Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:35.2972681Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-24T00:56:35.2973458Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-24T00:56:35.2973922Z         
2026-02-24T00:56:35.2974174Z         Error: Error in delete
2026-02-24T00:56:35.2974421Z         
2026-02-24T00:56:35.2974995Z         cluster name: test-acc-tf-c-5389614620042120700, API error details: (503
2026-02-24T00:56:35.2975909Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:35.2976497Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (994.72s)
```

- 2026-02-25 PASS 23 minutes
- 2026-02-26 PASS 25 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 17 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 16 minutes
  - PASS 20 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 29 minutes
- 2026-03-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 22 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
