# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.06s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 24 minutes
- 2026-01-10 PASS 17 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 26 minutes
- 2026-01-14 PASS 19 minutes
- 2026-01-15 PASS 23 minutes
- 2026-01-16 PASS 23 minutes
- 2026-01-17 PASS 16 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20 PASS 19 minutes
- 2026-01-21 PASS 21 minutes
- 2026-01-22 PASS 24 minutes
- 2026-01-23 PASS 21 minutes
- 2026-01-24 PASS 14 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 20 minutes
- 2026-01-29 PASS 24 minutes
- 2026-01-30 PASS 37 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5967592Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-01-31T00:36:56.2125156Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-01-31T03:37:01.5043280Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-01-31T03:37:01.5044607Z     effective_fields_test.go:105: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.5045356Z         
2026-01-31T03:37:01.5045789Z         Error: Error in create
2026-01-31T03:37:01.5046225Z         
2026-01-31T03:37:01.5046811Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.5048010Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.5049154Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.5049753Z         
2026-01-31T03:37:01.5050580Z         cluster=test-acc-tf-c-4311909227161246911 didn't reach desired state: IDLE,
2026-01-31T03:37:01.5091253Z         error: context deadline exceeded
2026-01-31T03:37:01.7680231Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (10805.56s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9972935Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-02T00:40:19.9284325Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-02T03:40:26.8039686Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-02T03:40:26.8040857Z     effective_fields_test.go:105: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.8041595Z         
2026-02-02T03:40:26.8042033Z         Error: Error in create
2026-02-02T03:40:26.8042645Z         
2026-02-02T03:40:26.8043235Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.8044499Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.8045660Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.8076079Z         
2026-02-02T03:40:26.8077011Z         cluster=test-acc-tf-c-1760411063606957147 didn't reach desired state: IDLE,
2026-02-02T03:40:26.8094521Z         error: context deadline exceeded
2026-02-02T03:40:26.9981876Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (10807.08s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8823028Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-03T00:42:03.6362926Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-03T00:42:09.8184027Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-02-03T00:42:09.8184988Z     effective_fields_test.go:105: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.8185596Z         
2026-02-03T00:42:09.8185962Z         Error: Error in create
2026-02-03T00:42:09.8186352Z         
2026-02-03T00:42:09.8329701Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.8331524Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.8343321Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.8343916Z         
2026-02-03T00:42:09.8344609Z         cluster name: test-acc-tf-c-7526097269065206550, API error details:
2026-02-03T00:42:09.8345702Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.8347221Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.8348379Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.8349371Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.8406245Z    test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform test_working_directory=/tmp/plugintest2145740992
2026-02-03T00:42:10.1843834Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (6.55s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 17 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 16 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 16 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 20 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
