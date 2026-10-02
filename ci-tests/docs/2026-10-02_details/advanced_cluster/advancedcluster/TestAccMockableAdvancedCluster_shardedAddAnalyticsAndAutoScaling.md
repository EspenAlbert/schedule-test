# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-16 00:41](#error-2026-09-16t0041500000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa9e5ccbb07cf48935e471a/clusters | dev | flaky_500 | 4.05s
[2026-09-17 00:42](#error-2026-09-17t0042100000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aab375fb6db1071b94eccff/clusters | dev | flaky_500 | 4.02s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 30 minutes
- 2026-09-03
  - PASS 24 minutes
  - PASS 25 minutes
- 2026-09-04 PASS 37 minutes
- 2026-09-05 PASS 25 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 24 minutes
- 2026-09-08 PASS 25 minutes
- 2026-09-09 PASS 24 minutes
- 2026-09-10 PASS 42 minutes
- 2026-09-11
  - PASS an hour
  - PASS 28 minutes
- 2026-09-12 PASS 25 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 25 minutes
- 2026-09-15 PASS 26 minutes
- 2026-09-16

### Error 2026-09-16T00:41:50+00:00
```
2026-09-16T00:41:50.3018524Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-16T00:41:50.3705565Z     resource_test.go:1039: Adding variable groupId=6aa9e5ccbb07cf48935e471a
2026-09-16T00:41:50.3706033Z     resource_test.go:1039: Adding variable clusterName=test-acc-tf-c-2828192854668287192
2026-09-16T00:43:14.2057319Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-16T00:43:18.1043489Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-16T00:43:18.1044055Z     resource_test.go:1039: Step 1/4 error: Error running apply: exit status 1
2026-09-16T00:43:18.1044381Z         
2026-09-16T00:43:18.1044626Z         Error: Error in create
2026-09-16T00:43:18.1044782Z         
2026-09-16T00:43:18.1044980Z           with mongodbatlas_advanced_cluster.test,
2026-09-16T00:43:18.1045463Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-16T00:43:18.1045845Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-09-16T00:43:18.1046117Z         
2026-09-16T00:43:18.1046423Z         cluster name: test-acc-tf-c-2828192854668287192, API error details:
2026-09-16T00:43:18.1046890Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5ccbb07cf48935e471a/clusters
2026-09-16T00:43:18.1047333Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-16T00:43:18.1047828Z         attribute Disk IOPS. Configured IOPS of 2000 must be equal to or below the
2026-09-16T00:43:18.1048195Z         maximum of 500 for instance size M30. specified. Reason: Bad Request. Params:
2026-09-16T00:43:18.1048639Z         [Disk IOPS. Configured IOPS of 2000 must be equal to or below the maximum of
2026-09-16T00:43:18.1048937Z         500 for instance size M30.], BadRequestDetail: 
2026-09-16T00:43:18.1385648Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (4.47s)
```

- 2026-09-17

### Error 2026-09-17T00:42:10+00:00
```
2026-09-17T00:42:10.1416854Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-17T00:42:10.2082538Z     resource_test.go:1039: Adding variable groupId=6aab375fb6db1071b94eccff
2026-09-17T00:42:10.2083272Z     resource_test.go:1039: Adding variable clusterName=test-acc-tf-c-1364175863144786292
2026-09-17T00:43:41.3527527Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-17T00:43:45.4320209Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-17T00:43:45.4320968Z     resource_test.go:1039: Step 1/4 error: Error running apply: exit status 1
2026-09-17T00:43:45.4321263Z         
2026-09-17T00:43:45.4321475Z         Error: Error in create
2026-09-17T00:43:45.4321678Z         
2026-09-17T00:43:45.4321938Z           with mongodbatlas_advanced_cluster.test,
2026-09-17T00:43:45.4322421Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-17T00:43:45.4322900Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-09-17T00:43:45.4323156Z         
2026-09-17T00:43:45.4323479Z         cluster name: test-acc-tf-c-1364175863144786292, API error details:
2026-09-17T00:43:45.4323972Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab375fb6db1071b94eccff/clusters
2026-09-17T00:43:45.4324464Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-17T00:43:45.4324994Z         attribute Disk IOPS. Configured IOPS of 2000 must be equal to or below the
2026-09-17T00:43:45.4325523Z         maximum of 500 for instance size M30. specified. Reason: Bad Request. Params:
2026-09-17T00:43:45.4326137Z         [Disk IOPS. Configured IOPS of 2000 must be equal to or below the maximum of
2026-09-17T00:43:45.4326526Z         500 for instance size M30.], BadRequestDetail: 
2026-09-17T00:43:45.4769602Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (4.19s)
```

- 2026-09-18 PASS 26 minutes
- 2026-09-19 PASS 24 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 26 minutes
- 2026-09-22
  - PASS 25 minutes
  - PASS 25 minutes
- 2026-09-23
  - PASS 25 minutes
  - PASS 29 minutes
- 2026-09-24 PASS 25 minutes
- 2026-09-25 PASS 25 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 25 minutes
- 2026-09-30 PASS 22 minutes
- 2026-10-01 PASS 22 minutes
- 2026-10-02 PASS 22 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-27 00:49](#error-2026-09-27t0049200000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6ab8680df0f03c0942ef8577/clusters | qa | flaky_500 | 5.08s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 25 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 27 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 26 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 26 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27

### Error 2026-09-27T00:49:20+00:00
```
2026-09-27T00:49:20.3741692Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-27T00:49:20.4440168Z     resource_test.go:1039: Adding variable groupId=6ab8680df0f03c0942ef8577
2026-09-27T00:49:20.4440814Z     resource_test.go:1039: Adding variable clusterName=test-acc-tf-c-6552258980587103829
2026-09-27T00:51:18.4140046Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-27T00:51:23.2132522Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-09-27T00:51:23.2133267Z     resource_test.go:1039: Step 1/4 error: Error running apply: exit status 1
2026-09-27T00:51:23.2133996Z         
2026-09-27T00:51:23.2134396Z         Error: Error in create
2026-09-27T00:51:23.2134764Z         
2026-09-27T00:51:23.2135222Z           with mongodbatlas_advanced_cluster.test,
2026-09-27T00:51:23.2136021Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-27T00:51:23.2137052Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-09-27T00:51:23.2137539Z         
2026-09-27T00:51:23.2138081Z         cluster name: test-acc-tf-c-6552258980587103829, API error details:
2026-09-27T00:51:23.2138977Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6ab8680df0f03c0942ef8577/clusters
2026-09-27T00:51:23.2139650Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-27T00:51:23.2140322Z         attribute Disk IOPS. Configured IOPS of 2000 must be equal to or below the
2026-09-27T00:51:23.2140973Z         maximum of 500 for instance size M30. specified. Reason: Bad Request. Params:
2026-09-27T00:51:23.2142120Z         [Disk IOPS. Configured IOPS of 2000 must be equal to or below the maximum of
2026-09-27T00:51:23.2142884Z         500 for instance size M30.], BadRequestDetail: 
2026-09-27T00:51:23.2935189Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (5.76s)
```

- 2026-09-28: MISSING
- 2026-09-29 PASS 28 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
