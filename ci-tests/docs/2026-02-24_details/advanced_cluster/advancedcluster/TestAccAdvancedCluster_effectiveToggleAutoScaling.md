# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.05s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.00s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1347.08s

### Timeline
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
- 2026-02-07 PASS 19 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13 PASS 20 minutes
- 2026-02-14 PASS 25 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 18 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5624920Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-24T00:40:00.6672849Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-24T00:40:02.5824818Z   diagnostic_detail=
2026-02-24T00:40:02.5910025Z    diagnostic_severity=ERROR tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_advanced_cluster diagnostic_summary="Missing Configuration for Required Attribute" diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")"
2026-02-24T00:59:24.8342176Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-24T00:59:24.8343567Z     effective_fields_test.go:216: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:59:24.8344306Z         
2026-02-24T00:59:24.8344841Z         Error: error resolving container IDs
2026-02-24T00:59:24.8345134Z         
2026-02-24T00:59:24.8345496Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:59:24.8346361Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:59:24.8347346Z           39: 		data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:59:24.8347863Z         
2026-02-24T00:59:24.8348482Z         cluster name = test-acc-tf-c-7618719524180082981, error details: (503 Service
2026-02-24T00:59:24.8349250Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T01:02:28.4425264Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (1347.80s)
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
- 2026-02-01 PASS 25 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
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
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 19 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
