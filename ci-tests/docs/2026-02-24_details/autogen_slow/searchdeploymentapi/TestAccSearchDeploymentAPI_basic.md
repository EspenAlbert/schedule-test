# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:37](#error-2026-01-31t0337070000) |  | dev | timeout | 10838.02s
[2026-02-02 03:41](#error-2026-02-02t0341100000) |  | dev | timeout | 10834.04s
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800d6f/clusters | dev | out_of_capacity | 6.01s
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 1244.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 36 minutes
- 2026-01-27 PASS 48 minutes
- 2026-01-28 PASS 41 minutes
- 2026-01-29 PASS 48 minutes
- 2026-01-30 PASS 57 minutes
- 2026-01-31

### Error 2026-01-31T03:37:07+00:00
```
2026-01-31T03:37:07.9938858Z === RUN   TestAccSearchDeploymentAPI_basic
2026-01-31T03:37:07.9939635Z === CONT  TestAccSearchDeploymentAPI_basic
2026-01-31T03:37:07.9949592Z   
2026-01-31T03:37:07.9950037Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:37:07.9950430Z         
2026-01-31T03:37:07.9950691Z         Error: Error in create
2026-01-31T03:37:07.9950940Z         
2026-01-31T03:37:07.9951277Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:07.9951967Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:07.9952779Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:07.9953116Z         
2026-01-31T03:37:07.9953599Z         cluster=test-acc-tf-c-2463510639325159266 didn't reach desired state: IDLE,
2026-01-31T03:37:07.9954090Z         error: context deadline exceeded
2026-01-31T03:37:07.9954440Z --- FAIL: TestAccSearchDeploymentAPI_basic (10838.22s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:41:10+00:00
```
2026-02-02T03:41:10.3241538Z === RUN   TestAccSearchDeploymentAPI_basic
2026-02-02T03:41:10.3242665Z === CONT  TestAccSearchDeploymentAPI_basic
2026-02-02T03:41:10.3255992Z   
2026-02-02T03:41:10.3256556Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:41:10.3257078Z         
2026-02-02T03:41:10.3257407Z         Error: Error in create
2026-02-02T03:41:10.3257731Z         
2026-02-02T03:41:10.3258402Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:41:10.3259332Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:41:10.3260356Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:41:10.3260799Z         
2026-02-02T03:41:10.3261429Z         cluster=test-acc-tf-c-3526328988467686361 didn't reach desired state: IDLE,
2026-02-02T03:41:10.3262009Z         error: context deadline exceeded
2026-02-02T03:41:10.3262375Z --- FAIL: TestAccSearchDeploymentAPI_basic (10834.44s)
```

- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4360252Z === RUN   TestAccSearchDeploymentAPI_basic
2026-02-03T00:42:45.4361355Z === CONT  TestAccSearchDeploymentAPI_basic
2026-02-03T00:42:45.4383464Z   
2026-02-03T00:42:45.4384257Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:45.4384905Z         
2026-02-03T00:42:45.4385334Z         Error: Error in create
2026-02-03T00:42:45.4385751Z         
2026-02-03T00:42:45.4386336Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:45.4387529Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:45.4388801Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:45.4389352Z         
2026-02-03T00:42:45.4390094Z         cluster name: test-acc-tf-c-2602495418397279259, API error details:
2026-02-03T00:42:45.4391296Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800d6f/clusters
2026-02-03T00:42:45.4392527Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:45.4393911Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:45.4394804Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4395399Z --- FAIL: TestAccSearchDeploymentAPI_basic (6.13s)
```

- 2026-02-04 PASS 40 minutes
- 2026-02-05 PASS 40 minutes
- 2026-02-06 PASS 42 minutes
- 2026-02-07 PASS 39 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 43 minutes
- 2026-02-10 PASS 39 minutes
- 2026-02-11 PASS 42 minutes
- 2026-02-12 PASS 40 minutes
- 2026-02-13 PASS 41 minutes
- 2026-02-14 PASS 57 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 42 minutes
- 2026-02-17 PASS 41 minutes
- 2026-02-18 PASS 45 minutes
- 2026-02-19 PASS 58 minutes
- 2026-02-20 PASS 40 minutes
- 2026-02-21 PASS 57 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 41 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3715652Z === RUN   TestAccSearchDeploymentAPI_basic
2026-02-24T01:07:11.3716593Z === CONT  TestAccSearchDeploymentAPI_basic
2026-02-24T01:07:11.3725430Z    test_terraform_path=/home/runner/work/_temp/cac00275-aef5-443b-ac5b-c1f29c969ce5/terraform test_working_directory=/tmp/plugintest2701736687
2026-02-24T01:07:11.3726488Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:07:11.3726877Z         
2026-02-24T01:07:11.3727164Z         Error: Error calling API in Create
2026-02-24T01:07:11.3727463Z         
2026-02-24T01:07:11.3727825Z           with mongodbatlas_search_deployment_api.test,
2026-02-24T01:07:11.3728535Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-02-24T01:07:11.3729217Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-02-24T01:07:11.3729560Z         
2026-02-24T01:07:11.3730030Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:07:11.3730451Z         type
2026-02-24T01:07:11.3730730Z --- FAIL: TestAccSearchDeploymentAPI_basic (1244.47s)
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
- 2026-02-01 PASS 42 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 34 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 40 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 42 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 39 minutes
  - PASS 34 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 37 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
