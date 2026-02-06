# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.05s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 27 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 20 minutes
- 2026-01-13 PASS 26 minutes
- 2026-01-14 PASS 19 minutes
- 2026-01-15 PASS 22 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 20 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 19 minutes
- 2026-01-20 PASS 20 minutes
- 2026-01-21 PASS 21 minutes
- 2026-01-22 PASS 23 minutes
- 2026-01-23 PASS 28 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 23 minutes
- 2026-01-28 PASS 22 minutes
- 2026-01-29 PASS 27 minutes
- 2026-01-30 PASS 37 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5982105Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-01-31T00:36:56.1520590Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-01-31T03:37:01.4457201Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-01-31T03:37:01.4458585Z     effective_fields_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:37:01.4459475Z         
2026-01-31T03:37:01.4460142Z         Error: Error in create
2026-01-31T03:37:01.4460755Z         
2026-01-31T03:37:01.4461612Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.4463293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.4464864Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.4466691Z         
2026-01-31T03:37:01.4467643Z         cluster=test-acc-tf-c-8482339486152871102 didn't reach desired state: IDLE,
2026-01-31T03:37:01.4468530Z         error: context deadline exceeded
2026-01-31T03:37:01.4621576Z    test_name=TestAccAdvancedCluster_effectiveBasic test_terraform_path=/home/runner/work/_temp/a98837fb-4834-47ae-962e-ff5640ce5c32/terraform test_working_directory=/tmp/plugintest4292244516
2026-01-31T03:37:01.6441949Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (10805.50s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9985992Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-02T00:40:19.9280737Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-02T03:40:26.9430935Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-02T03:40:26.9432492Z     effective_fields_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:26.9433998Z         
2026-02-02T03:40:26.9434676Z         Error: Error in create
2026-02-02T03:40:26.9435400Z         
2026-02-02T03:40:26.9436208Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.9437916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.9439633Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.9440548Z         
2026-02-02T03:40:26.9441836Z         cluster=test-acc-tf-c-3820812128289603688 didn't reach desired state: IDLE,
2026-02-02T03:40:26.9443253Z         error: context deadline exceeded
2026-02-02T03:40:27.0381043Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (10807.12s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8830663Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-03T00:42:03.6318789Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-03T00:42:09.4843913Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-03T00:42:09.4844979Z     effective_fields_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:09.4845721Z         
2026-02-03T00:42:09.4846162Z         Error: Error in create
2026-02-03T00:42:09.4846595Z         
2026-02-03T00:42:09.4847212Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.4848367Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.4849557Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.4850097Z         
2026-02-03T00:42:09.4850819Z         cluster name: test-acc-tf-c-493204646739149282, API error details:
2026-02-03T00:42:09.4851971Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.4853142Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.4854205Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.4855449Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.5315852Z   
2026-02-03T00:42:09.6173627Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (6.00s)
```

- 2026-02-04 PASS 16 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 18 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 15 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 19 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 25 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
