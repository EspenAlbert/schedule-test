# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBothAutoScalingEnabled Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.05s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.09s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 5.07s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1328.05s

### Timeline
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


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-17 15:23](#error-2026-02-17t1523100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699487dc17482212e3301717/clusters | qa | out_of_capacity | 6.03s

### Timeline
- 2026-01-25: MISSING
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
