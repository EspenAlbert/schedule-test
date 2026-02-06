# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingAll Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.06s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10805.05s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 24 minutes
- 2026-01-10 PASS 17 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 26 minutes
- 2026-01-14 PASS 23 minutes
- 2026-01-15 PASS 22 minutes
- 2026-01-16 PASS 23 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20 PASS 19 minutes
- 2026-01-21 PASS 18 minutes
- 2026-01-22 PASS 21 minutes
- 2026-01-23 PASS 20 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30 PASS 28 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5974332Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-01-31T00:36:56.2025656Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-01-31T03:37:01.5104176Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-01-31T03:37:01.5105291Z     effective_fields_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.5106040Z         
2026-01-31T03:37:01.5106484Z         Error: Error in create
2026-01-31T03:37:01.5106916Z         
2026-01-31T03:37:01.5107482Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.5108648Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.5109782Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.5110791Z         
2026-01-31T03:37:01.5111647Z         cluster=test-acc-tf-c-8517677721203479750 didn't reach desired state: IDLE,
2026-01-31T03:37:01.5112530Z         error: context deadline exceeded
2026-01-31T03:37:01.5275829Z   
2026-01-31T03:37:01.7599010Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (10805.56s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9975475Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-02T00:40:19.9287844Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-02T03:40:25.3477341Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-02T03:40:25.3478509Z     effective_fields_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:25.3479188Z         
2026-02-02T03:40:25.3479493Z         Error: Error in create
2026-02-02T03:40:25.3479793Z         
2026-02-02T03:40:25.3480192Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:25.3481142Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:25.3481944Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:25.3482591Z         
2026-02-02T03:40:25.3483266Z         cluster=test-acc-tf-c-5880839421441370467 didn't reach desired state: IDLE,
2026-02-02T03:40:25.3483768Z         error: context deadline exceeded
2026-02-02T03:40:25.3944928Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (10805.47s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8824742Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-03T00:42:03.6362041Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-03T00:42:09.6864874Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-03T00:42:09.6865781Z     effective_fields_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.6866428Z         
2026-02-03T00:42:09.6866849Z         Error: Error in create
2026-02-03T00:42:09.6867243Z         
2026-02-03T00:42:09.6867780Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.6869160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.6870139Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.6870686Z         
2026-02-03T00:42:09.6871356Z         cluster name: test-acc-tf-c-5385060521564115621, API error details:
2026-02-03T00:42:09.6872450Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.6873640Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.6889278Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.6890236Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.6902916Z    test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform test_step_number=1 test_working_directory=/tmp/plugintest2068821020 test_name=TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-02-03T00:42:10.1592820Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (6.53s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 16 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 14 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 15 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 19 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 18 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
