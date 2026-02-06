# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-21 00:56](#error-2026-01-21t0056520000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69701eed1e49afa1819d1084/clusters | dev | out_of_capacity | 0.09s
[2026-01-31 03:37](#error-2026-01-31t0337040000) |  | dev | timeout | 10802.01s
[2026-02-02 03:41](#error-2026-02-02t0341080000) |  | dev | timeout | 10801.05s
[2026-02-03 00:41](#error-2026-02-03t0041160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814426b2e54ee99592392f/clusters | dev | out_of_capacity | 1.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
- 2026-01-09 PASS 32 minutes
- 2026-01-10 PASS 25 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 28 minutes
- 2026-01-13 PASS 33 minutes
- 2026-01-14 PASS 28 minutes
- 2026-01-15 PASS 28 minutes
- 2026-01-16 PASS 34 minutes
- 2026-01-17 PASS 27 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 27 minutes
- 2026-01-20 PASS 26 minutes
- 2026-01-21

### Error 2026-01-21T00:56:52+00:00
```
2026-01-21T00:56:52.8964696Z === RUN   TestAccClusterAPI_basic
2026-01-21T00:56:52.8966312Z === CONT  TestAccClusterAPI_basic
2026-01-21T00:56:52.8979995Z === NAME  TestAccClusterAPI_basic
2026-01-21T00:56:52.8980539Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-01-21T00:56:52.8980918Z         
2026-01-21T00:56:52.8981205Z         Error: Error calling API in Create
2026-01-21T00:56:52.8981480Z         
2026-01-21T00:56:52.8981793Z           with mongodbatlas_cluster_api.test,
2026-01-21T00:56:52.8982533Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-01-21T00:56:52.8983139Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-01-21T00:56:52.8983455Z         
2026-01-21T00:56:52.8983971Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69701eed1e49afa1819d1084/clusters
2026-01-21T00:56:52.8984678Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-21T00:56:52.8985350Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-21T00:56:52.8985864Z         Conflict. Params: [], BadRequestDetail: 
2026-01-21T00:56:52.8986196Z --- FAIL: TestAccClusterAPI_basic (0.94s)
```

- 2026-01-22 PASS 32 minutes
- 2026-01-23 PASS 29 minutes
- 2026-01-24 PASS 27 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27 PASS 30 minutes
- 2026-01-28 PASS 30 minutes
- 2026-01-29 PASS 33 minutes
- 2026-01-30 PASS 40 minutes
- 2026-01-31

### Error 2026-01-31T03:37:04+00:00
```
2026-01-31T03:37:04.0914696Z === RUN   TestAccClusterAPI_basic
2026-01-31T03:37:04.0916813Z === CONT  TestAccClusterAPI_basic
2026-01-31T03:37:04.0944555Z === NAME  TestAccClusterAPI_basic
2026-01-31T03:37:04.0945074Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:04.0945466Z         
2026-01-31T03:37:04.0952235Z         Error: Error waiting for changes in Create
2026-01-31T03:37:04.0952619Z         
2026-01-31T03:37:04.0952964Z           with mongodbatlas_cluster_api.test,
2026-01-31T03:37:04.0953654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-01-31T03:37:04.0954279Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-01-31T03:37:04.0954792Z         
2026-01-31T03:37:04.0955274Z         timeout while waiting for state to become 'IDLE' (last state: 'CREATING',
2026-01-31T03:37:04.0955715Z         timeout: 3h0m0s)
2026-01-31T03:37:04.0956240Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-31T03:37:04.0956939Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-31T03:37:04.0960277Z   diagnostic_detail=
2026-01-31T03:37:04.0962278Z   
2026-01-31T03:37:04.0968583Z    test_working_directory=/tmp/plugintest1749689051 test_name=TestAccClusterAPI_moveBasic test_terraform_path=/home/runner/work/_temp/9378ac7f-7e37-49ee-9955-9552c7039016/terraform test_step_number=1
2026-01-31T03:37:04.0975669Z --- FAIL: TestAccClusterAPI_basic (10802.15s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:41:08+00:00
```
2026-02-02T03:41:08.5624657Z === RUN   TestAccClusterAPI_basic
2026-02-02T03:41:08.5626271Z === CONT  TestAccClusterAPI_basic
2026-02-02T03:41:08.5653289Z === NAME  TestAccClusterAPI_basic
2026-02-02T03:41:08.5653794Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:41:08.5654179Z         
2026-02-02T03:41:08.5654519Z         Error: Error waiting for changes in Create
2026-02-02T03:41:08.5654816Z         
2026-02-02T03:41:08.5655142Z           with mongodbatlas_cluster_api.test,
2026-02-02T03:41:08.5655805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-02-02T03:41:08.5656433Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-02-02T03:41:08.5656960Z         
2026-02-02T03:41:08.5657455Z         timeout while waiting for state to become 'IDLE' (last state: 'CREATING',
2026-02-02T03:41:08.5657892Z         timeout: 3h0m0s)
2026-02-02T03:41:08.5658541Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-02-02T03:41:08.5659235Z         transient error, wait before retrying to allow resource deletion to finish
2026-02-02T03:41:08.5662251Z   diagnostic_detail=
2026-02-02T03:41:08.5664245Z   
2026-02-02T03:41:08.5684588Z --- FAIL: TestAccClusterAPI_basic (10801.50s)
```

- 2026-02-03

### Error 2026-02-03T00:41:16+00:00
```
2026-02-03T00:41:16.8080183Z === RUN   TestAccClusterAPI_basic
2026-02-03T00:41:16.8082973Z === CONT  TestAccClusterAPI_basic
2026-02-03T00:41:16.8201509Z === NAME  TestAccClusterAPI_basic
2026-02-03T00:41:16.8202314Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:41:16.8202960Z         
2026-02-03T00:41:16.8203440Z         Error: Error calling API in Create
2026-02-03T00:41:16.8203910Z         
2026-02-03T00:41:16.8227877Z           with mongodbatlas_cluster_api.test,
2026-02-03T00:41:16.8229280Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-02-03T00:41:16.8230589Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-02-03T00:41:16.8231147Z         
2026-02-03T00:41:16.8232068Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814426b2e54ee99592392f/clusters
2026-02-03T00:41:16.8235549Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:41:16.8236817Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:41:16.8237798Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:41:16.8239992Z --- FAIL: TestAccClusterAPI_basic (1.20s)
```

- 2026-02-04 PASS 32 minutes
- 2026-02-05 PASS 33 minutes
- 2026-02-06 PASS 34 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-18 00:52](#error-2026-01-18t0052490000) | OUT_OF_CAPACITY /api/atlas/v2/groups/696c2adaed3ba1d446f10f60/clusters | qa | out_of_capacity | 1.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 26 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 30 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18

### Error 2026-01-18T00:52:49+00:00
```
2026-01-18T00:52:49.4684215Z === RUN   TestAccClusterAPI_basic
2026-01-18T00:52:49.4686911Z === CONT  TestAccClusterAPI_basic
2026-01-18T00:52:49.4703792Z   
2026-01-18T00:52:49.4704491Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-01-18T00:52:49.4705177Z         
2026-01-18T00:52:49.4705701Z         Error: Error calling API in Create
2026-01-18T00:52:49.4706191Z         
2026-01-18T00:52:49.4706518Z           with mongodbatlas_cluster_api.test,
2026-01-18T00:52:49.4707206Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-01-18T00:52:49.4707808Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-01-18T00:52:49.4708132Z         
2026-01-18T00:52:49.4708779Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/696c2adaed3ba1d446f10f60/clusters
2026-01-18T00:52:49.4710021Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-18T00:52:49.4710850Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-18T00:52:49.4711738Z         Conflict. Params: [], BadRequestDetail: 
2026-01-18T00:52:49.4712176Z --- FAIL: TestAccClusterAPI_basic (1.06s)
```

- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 25 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 28 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 25 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
