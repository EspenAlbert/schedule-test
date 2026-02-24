# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingAll Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.06s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10805.05s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.05s
[2026-02-23 00:39](#error-2026-02-23t0039180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699ba1b38decccf9757d0e4e/clusters | dev | out_of_capacity | 6.07s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 986.00s

### Timeline
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
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 17 minutes
- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 20 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 25 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T00:39:18+00:00
```
2026-02-23T00:39:18.7402235Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-23T00:40:58.0944402Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-23T00:41:04.7815767Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-23T00:41:04.7816926Z     effective_fields_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-02-23T00:41:04.7817731Z         
2026-02-23T00:41:04.7818232Z         Error: Error in create
2026-02-23T00:41:04.7818697Z         
2026-02-23T00:41:04.7819326Z           with mongodbatlas_advanced_cluster.test,
2026-02-23T00:41:04.7820607Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-23T00:41:04.7822040Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-23T00:41:04.7822670Z         
2026-02-23T00:41:04.7823473Z         cluster name: test-acc-tf-c-8105041575048301105, API error details:
2026-02-23T00:41:04.7824794Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699ba1b38decccf9757d0e4e/clusters
2026-02-23T00:41:04.7826372Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-23T00:41:04.7827661Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-23T00:41:04.7828632Z         Conflict. Params: [], BadRequestDetail: 
2026-02-23T00:41:04.7850198Z   
2026-02-23T00:41:04.8420114Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (6.72s)
```

- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5616420Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-24T00:40:00.6222759Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-24T00:56:26.5981377Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-24T00:56:26.5982665Z     effective_fields_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:26.5983133Z         
2026-02-24T00:56:26.5983444Z         Error: error resolving container IDs
2026-02-24T00:56:26.5983730Z         
2026-02-24T00:56:26.5984067Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:56:26.5984922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:56:26.5985584Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:56:26.5985962Z         
2026-02-24T00:56:26.5986713Z         cluster name = test-acc-tf-c-5528087053154990444, error details: (503 Service
2026-02-24T00:56:26.5987371Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:26.6436308Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (986.02s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-17 15:23](#error-2026-02-17t1523100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699487dc17482212e3301717/clusters | qa | out_of_capacity | 6.02s

### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 18 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 6 seconds

### Error 2026-02-17T15:23:10+00:00
```
2026-02-17T15:23:10.5460917Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-17T15:24:44.4275577Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-17T15:24:50.5181069Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-02-17T15:24:50.5182163Z     effective_fields_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-02-17T15:24:50.5182921Z         
2026-02-17T15:24:50.5183372Z         Error: Error in create
2026-02-17T15:24:50.5183824Z         
2026-02-17T15:24:50.5184676Z           with mongodbatlas_advanced_cluster.test,
2026-02-17T15:24:50.5186156Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-17T15:24:50.5187553Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-17T15:24:50.5188326Z         
2026-02-17T15:24:50.5189248Z         cluster name: test-acc-tf-c-8056813515601615223, API error details:
2026-02-17T15:24:50.5190803Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/699487dc17482212e3301717/clusters
2026-02-17T15:24:50.5192364Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-17T15:24:50.5194043Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-17T15:24:50.5195448Z         Conflict. Params: [], BadRequestDetail: 
2026-02-17T15:24:50.5215854Z   
2026-02-17T15:24:50.6160989Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (6.17s)
```

  - PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 21 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
