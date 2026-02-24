# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveAnalyticsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10807.03s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10808.04s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143beb2e54ee995907df2/clusters | dev | out_of_capacity | 8.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 26 minutes
- 2026-01-27 PASS 30 minutes
- 2026-01-28 PASS 30 minutes
- 2026-01-29 PASS 38 minutes
- 2026-01-30 PASS 42 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5984867Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-01-31T00:36:56.2146492Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-01-31T03:37:01.3759206Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-01-31T03:37:01.3760281Z     effective_fields_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.3761076Z         
2026-01-31T03:37:01.3761498Z         Error: Error in create
2026-01-31T03:37:01.3761916Z         
2026-01-31T03:37:01.3762476Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.3763894Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.3765073Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.3765640Z         
2026-01-31T03:37:01.3766582Z         cluster=test-acc-tf-c-6396520722860891768 didn't reach desired state: IDLE,
2026-01-31T03:37:01.3767438Z         error: context deadline exceeded
2026-01-31T03:37:01.3882988Z    test_name=TestAccAdvancedCluster_effectiveReadOnlyAutoScaling test_terraform_path=/home/runner/work/_temp/a98837fb-4834-47ae-962e-ff5640ce5c32/terraform
2026-01-31T03:37:01.5092139Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (10807.30s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9990388Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-02-02T00:40:19.9094300Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-02-02T03:40:25.9683838Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-02-02T03:40:25.9684959Z     effective_fields_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:25.9685737Z         
2026-02-02T03:40:25.9686182Z         Error: Error in create
2026-02-02T03:40:25.9686621Z         
2026-02-02T03:40:25.9687218Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:25.9688503Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:25.9689720Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:25.9690319Z         
2026-02-02T03:40:25.9691170Z         cluster=test-acc-tf-c-8942360170541602034 didn't reach desired state: IDLE,
2026-02-02T03:40:25.9692282Z         error: context deadline exceeded
2026-02-02T03:40:25.9899021Z    test_working_directory=/tmp/plugintest3543424084 test_name=TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-02T03:40:26.0584792Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (10808.44s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8832407Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-02-03T00:42:03.6232383Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-02-03T00:42:09.6904785Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-02-03T00:42:09.6905883Z     effective_fields_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.6906554Z         
2026-02-03T00:42:09.6907015Z         Error: Error in create
2026-02-03T00:42:09.6907485Z         
2026-02-03T00:42:09.6908119Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.6909525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.6910753Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.6911356Z         
2026-02-03T00:42:09.6912165Z         cluster name: test-acc-tf-c-185717117332280005, API error details:
2026-02-03T00:42:09.6913460Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143beb2e54ee995907df2/clusters
2026-02-03T00:42:09.6914789Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.6916012Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.6916952Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.7183992Z   
2026-02-03T00:42:10.0990511Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (8.55s)
```

- 2026-02-04 PASS 32 minutes
- 2026-02-05 PASS 32 minutes
- 2026-02-06 PASS 29 minutes
- 2026-02-07 PASS 31 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 29 minutes
- 2026-02-10 PASS 29 minutes
- 2026-02-11 PASS 32 minutes
- 2026-02-12 PASS 29 minutes
- 2026-02-13 PASS 33 minutes
- 2026-02-14 PASS 30 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 31 minutes
- 2026-02-17 PASS 30 minutes
- 2026-02-18 PASS 31 minutes
- 2026-02-19 PASS 42 minutes
- 2026-02-20 PASS 33 minutes
- 2026-02-21 PASS 29 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 30 minutes
- 2026-02-24 PASS 32 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 25 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 28 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 32 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 27 minutes
  - PASS 24 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 26 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
