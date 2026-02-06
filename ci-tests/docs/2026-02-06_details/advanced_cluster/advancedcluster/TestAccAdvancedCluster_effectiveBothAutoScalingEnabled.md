# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBothAutoScalingEnabled Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.05s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.09s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 5.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
- 2026-01-09 PASS 23 minutes
- 2026-01-10 PASS 16 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 17 minutes
- 2026-01-13 PASS 25 minutes
- 2026-01-14 PASS 19 minutes
- 2026-01-15 PASS 22 minutes
- 2026-01-16 PASS 23 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 17 minutes
- 2026-01-22 PASS 21 minutes
- 2026-01-23 PASS 28 minutes
- 2026-01-24 PASS 18 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 20 minutes
- 2026-01-28 PASS 18 minutes
- 2026-01-29 PASS 23 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5980368Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-01-31T00:36:56.1549498Z === CONT  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-01-31T03:37:01.4874808Z === NAME  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-01-31T03:37:01.4875880Z     effective_fields_test.go:193: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.4876628Z         
2026-01-31T03:37:01.4877074Z         Error: Error in create
2026-01-31T03:37:01.4877490Z         
2026-01-31T03:37:01.4878060Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.4879289Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.4900816Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.4901408Z         
2026-01-31T03:37:01.4902225Z         cluster=test-acc-tf-c-8654253074948572337 didn't reach desired state: IDLE,
2026-01-31T03:37:01.4903066Z         error: context deadline exceeded
2026-01-31T03:37:01.5041812Z    test_step_number=1 test_name=TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize test_working_directory=/tmp/plugintest1321439248
2026-01-31T03:37:01.6927030Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (10805.54s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9983575Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-02T00:40:19.9282538Z === CONT  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-02T03:40:26.6158584Z === NAME  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-02T03:40:26.6159717Z     effective_fields_test.go:193: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.6160468Z         
2026-02-02T03:40:26.6160922Z         Error: Error in create
2026-02-02T03:40:26.6161372Z         
2026-02-02T03:40:26.6161964Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.6164620Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.6165833Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.6166412Z         
2026-02-02T03:40:26.6167258Z         cluster=test-acc-tf-c-8961966724424434128 didn't reach desired state: IDLE,
2026-02-02T03:40:26.6168157Z         error: context deadline exceeded
2026-02-02T03:40:26.6225754Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard test_terraform_path=/home/runner/work/_temp/88686103-8137-4ab0-af0d-786a02dc3665/terraform
2026-02-02T03:40:26.8278877Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (10806.90s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8829482Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-03T00:42:03.6357151Z === CONT  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-03T00:42:09.1139009Z === NAME  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-02-03T00:42:09.1140209Z     effective_fields_test.go:193: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.1140974Z         
2026-02-03T00:42:09.1141431Z         Error: Error in create
2026-02-03T00:42:09.1141892Z         
2026-02-03T00:42:09.1142456Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.1143493Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.1144743Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.1146312Z         
2026-02-03T00:42:09.1148668Z         cluster name: test-acc-tf-c-9197236376218861875, API error details:
2026-02-03T00:42:09.1150599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.1151869Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.1153622Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.1154535Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.1436123Z   
2026-02-03T00:42:09.3205308Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (5.69s)
```

- 2026-02-04 PASS 17 minutes
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 17 minutes
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
- 2026-02-01 PASS 20 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
