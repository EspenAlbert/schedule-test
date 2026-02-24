# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBasic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 10807.08s
[2026-02-02 00:38](#error-2026-02-02t0038410000) |  | dev | timeout | 10809.03s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 9.02s
[2026-02-24 00:36](#error-2026-02-24t0036570000) |  | dev | flaky_500 | 1238.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29 PASS 27 minutes
- 2026-01-30 PASS 33 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2645715Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-01-31T00:36:56.1441462Z === CONT  TestAccAdvancedCluster_effectiveBasic
2026-01-31T03:37:01.4623198Z === NAME  TestAccAdvancedCluster_effectiveBasic
2026-01-31T03:37:01.4624414Z     effective_fields_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.4625144Z         
2026-01-31T03:37:01.4625577Z         Error: Error in create
2026-01-31T03:37:01.4625935Z         
2026-01-31T03:37:01.4626467Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.4627575Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.4628769Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.4629366Z         
2026-01-31T03:37:01.4630189Z         cluster=test-acc-tf-c-6770766540017444512 didn't reach desired state: IDLE,
2026-01-31T03:37:01.4631054Z         error: context deadline exceeded
2026-01-31T03:37:01.4698636Z   
2026-01-31T03:37:01.6095878Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (10807.80s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:41+00:00
```
2026-02-02T00:38:41.6238214Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-02-02T00:40:19.8839659Z === CONT  TestAccAdvancedCluster_effectiveBasic
2026-02-02T03:40:26.7017791Z === NAME  TestAccAdvancedCluster_effectiveBasic
2026-02-02T03:40:26.7018976Z     effective_fields_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.7019962Z         
2026-02-02T03:40:26.7020620Z         Error: Error in create
2026-02-02T03:40:26.7021280Z         
2026-02-02T03:40:26.7022546Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.7024230Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.7026082Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.7026910Z         
2026-02-02T03:40:26.7045161Z         cluster=test-acc-tf-c-497146886881559493 didn't reach desired state: IDLE,
2026-02-02T03:40:26.7046008Z         error: context deadline exceeded
2026-02-02T03:40:26.7102035Z   
2026-02-02T03:40:26.8569198Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (10809.34s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.2648356Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-02-03T00:42:03.6083517Z === CONT  TestAccAdvancedCluster_effectiveBasic
2026-02-03T00:42:09.6760839Z === NAME  TestAccAdvancedCluster_effectiveBasic
2026-02-03T00:42:09.6761796Z     effective_fields_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.6762619Z         
2026-02-03T00:42:09.6763147Z         Error: Error in create
2026-02-03T00:42:09.6763681Z         
2026-02-03T00:42:09.6764373Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.6765656Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.6766911Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.6767598Z         
2026-02-03T00:42:09.6768429Z         cluster name: test-acc-tf-c-1877086699160267982, API error details:
2026-02-03T00:42:09.6770107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.6772435Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.6774248Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.6775104Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.6863304Z    test_name=TestAccAdvancedCluster_effectiveComputeAutoScalingAll test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform test_working_directory=/tmp/plugintest3465107402 test_step_number=1
2026-02-03T00:42:10.1387398Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (9.15s)
```

- 2026-02-04 PASS 16 minutes
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 20 minutes
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 17 minutes
- 2026-02-11 PASS 17 minutes
- 2026-02-12 PASS 16 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 15 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T00:36:57+00:00
```
2026-02-24T00:36:57.4931677Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-02-24T00:40:00.5453455Z === CONT  TestAccAdvancedCluster_effectiveBasic
2026-02-24T00:57:33.0976966Z === NAME  TestAccAdvancedCluster_effectiveBasic
2026-02-24T00:57:33.0978137Z     effective_fields_test.go:16: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2026-02-24T00:57:33.0978960Z         
2026-02-24T00:57:33.0979289Z         Error: error reading advanced cluster list
2026-02-24T00:57:33.0979719Z         
2026-02-24T00:57:33.0980094Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:33.0980977Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:33.0981719Z           45: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:33.0982246Z         
2026-02-24T00:57:33.0983034Z         project ID 699cf2a9ae2412ce6211a607. Error (503 Service Unavailable) failed
2026-02-24T00:57:33.0983984Z         to decode response body: undefined response type
2026-02-24T00:57:33.1477526Z   
2026-02-24T01:00:37.2626224Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (1238.79s)
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
- 2026-02-01 PASS 18 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 12 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 16 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
