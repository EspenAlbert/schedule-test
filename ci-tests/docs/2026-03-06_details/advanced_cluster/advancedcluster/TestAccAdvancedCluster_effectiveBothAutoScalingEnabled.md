# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBothAutoScalingEnabled Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1328.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 16 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 16 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 21 minutes
- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 25 minutes
- 2026-02-20 PASS 20 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5622757Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-24T00:40:00.6196754Z === CONT  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-24T00:58:00.7323088Z === NAME  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-24T00:58:00.7324052Z     effective_fields_test.go:193: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2026-02-24T00:58:00.7324574Z         
2026-02-24T00:58:00.7325068Z         Error: error reading Advanced Configuration
2026-02-24T00:58:00.7325372Z         
2026-02-24T00:58:00.7325734Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:58:00.7326721Z           on terraform_plugin_test.tf line 52, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:58:00.7327403Z           52: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:58:00.7327858Z         
2026-02-24T00:58:00.7328304Z         cluster name: test-acc-tf-c-2562109235208182520, API error details: (503
2026-02-24T00:58:00.7329007Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:02:09.0436497Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (1328.46s)
```

- 2026-02-25 PASS 23 minutes
- 2026-02-26 PASS 31 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 17 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 18 minutes
  - PASS 17 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 29 minutes
- 2026-03-06 PASS 23 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-17 15:23](#error-2026-02-17t1523100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699487dc17482212e3301717/clusters | qa | out_of_capacity | 6.03s

### Timeline
- 2026-02-04 PASS 15 minutes
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
- 2026-02-15 PASS 23 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 6 seconds

### Error 2026-02-17T15:23:10+00:00
```
2026-02-17T15:23:10.5464247Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-17T15:24:44.4005344Z === CONT  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-17T15:24:50.5216456Z === NAME  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-17T15:24:50.5217955Z     effective_fields_test.go:193: Step 1/2 error: Error running apply: exit status 1
2026-02-17T15:24:50.5219064Z         
2026-02-17T15:24:50.5219725Z         Error: Error in create
2026-02-17T15:24:50.5220374Z         
2026-02-17T15:24:50.5221301Z           with mongodbatlas_advanced_cluster.test,
2026-02-17T15:24:50.5222975Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-17T15:24:50.5224567Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-17T15:24:50.5225478Z         
2026-02-17T15:24:50.5226508Z         cluster name: test-acc-tf-c-3531970034496034454, API error details:
2026-02-17T15:24:50.5228276Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/699487dc17482212e3301717/clusters
2026-02-17T15:24:50.5229996Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-17T15:24:50.5231688Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-17T15:24:50.5233200Z         Conflict. Params: [], BadRequestDetail: 
2026-02-17T15:24:50.6598178Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (6.27s)
```

  - PASS 13 minutes
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
- 2026-03-01 PASS 25 minutes
- 2026-03-02 PASS 18 minutes
- 2026-03-03 PASS 20 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
