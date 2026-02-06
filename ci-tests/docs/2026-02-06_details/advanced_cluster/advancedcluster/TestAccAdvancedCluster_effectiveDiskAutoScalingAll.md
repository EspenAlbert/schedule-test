# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskAutoScalingAll Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.02s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.09s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 5.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 23 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 17 minutes
- 2026-01-13 PASS 26 minutes
- 2026-01-14 PASS 18 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 21 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 18 minutes
- 2026-01-21 PASS 21 minutes
- 2026-01-22 PASS 21 minutes
- 2026-01-23 PASS 20 minutes
- 2026-01-24 PASS 18 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 17 minutes
- 2026-01-29 PASS 31 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5976817Z === RUN   TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-01-31T00:36:56.1941596Z === CONT  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-01-31T03:37:01.2905295Z === NAME  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-01-31T03:37:01.2906508Z     effective_fields_test.go:149: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.2907283Z         
2026-01-31T03:37:01.2907652Z         Error: Error in create
2026-01-31T03:37:01.2907939Z         
2026-01-31T03:37:01.2908317Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.2909385Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.2910128Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.2910931Z         
2026-01-31T03:37:01.2911463Z         cluster=test-acc-tf-c-583933298299243929 didn't reach desired state: IDLE,
2026-01-31T03:37:01.2912012Z         error: context deadline exceeded
2026-01-31T03:37:01.3020439Z    test_step_number=1
2026-01-31T03:37:01.3641964Z --- FAIL: TestAccAdvancedCluster_effectiveDiskAutoScalingAll (10805.17s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9977722Z === RUN   TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-02T00:40:19.9286150Z === CONT  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-02T03:40:26.6594543Z === NAME  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-02T03:40:26.6603710Z     effective_fields_test.go:149: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.6614176Z         
2026-02-02T03:40:26.6614646Z         Error: Error in create
2026-02-02T03:40:26.6615078Z         
2026-02-02T03:40:26.6615667Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.6616916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.6618091Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.6618658Z         
2026-02-02T03:40:26.6619491Z         cluster=test-acc-tf-c-1781265282179789089 didn't reach desired state: IDLE,
2026-02-02T03:40:26.6620354Z         error: context deadline exceeded
2026-02-02T03:40:26.7017202Z   
2026-02-02T03:40:26.8398583Z --- FAIL: TestAccAdvancedCluster_effectiveDiskAutoScalingAll (10806.92s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8826209Z === RUN   TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-03T00:42:03.6361218Z === CONT  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-03T00:42:09.2774007Z === NAME  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-03T00:42:09.2775181Z     effective_fields_test.go:149: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.2776028Z         
2026-02-03T00:42:09.2776525Z         Error: Error in create
2026-02-03T00:42:09.2777031Z         
2026-02-03T00:42:09.2777635Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.2779149Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.2780223Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.2781827Z         
2026-02-03T00:42:09.2782509Z         cluster name: test-acc-tf-c-9048780939423147306, API error details:
2026-02-03T00:42:09.2783517Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.2784647Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.2785837Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.2786752Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.4243727Z --- FAIL: TestAccAdvancedCluster_effectiveDiskAutoScalingAll (5.80s)
```

- 2026-02-04 PASS 17 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 17 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 19 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 18 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 15 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 16 minutes
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
