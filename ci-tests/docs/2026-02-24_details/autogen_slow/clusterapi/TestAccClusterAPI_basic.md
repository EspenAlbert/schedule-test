# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:37](#error-2026-01-31t0337040000) |  | dev | timeout | 10802.01s
[2026-02-02 03:41](#error-2026-02-02t0341080000) |  | dev | timeout | 10801.05s
[2026-02-03 00:41](#error-2026-02-03t0041160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814426b2e54ee99592392f/clusters | dev | out_of_capacity | 1.02s
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 1605.04s

### Timeline
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
- 2026-02-07 PASS 31 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 31 minutes
- 2026-02-10 PASS 34 minutes
- 2026-02-11 PASS 32 minutes
- 2026-02-12 PASS 32 minutes
- 2026-02-13 PASS 33 minutes
- 2026-02-14 PASS 34 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 34 minutes
- 2026-02-17 PASS 31 minutes
- 2026-02-18 PASS 32 minutes
- 2026-02-19 PASS 43 minutes
- 2026-02-20 PASS 34 minutes
- 2026-02-21 PASS 32 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 34 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3673195Z === RUN   TestAccClusterAPI_basic
2026-02-24T01:07:11.3676527Z === CONT  TestAccClusterAPI_basic
2026-02-24T01:07:11.3701447Z === NAME  TestAccClusterAPI_basic
2026-02-24T01:07:11.3701954Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2026-02-24T01:07:11.3702345Z         
2026-02-24T01:07:11.3702644Z         Error: Error calling API in Update
2026-02-24T01:07:11.3702929Z         
2026-02-24T01:07:11.3703249Z           with mongodbatlas_cluster_api.test,
2026-02-24T01:07:11.3703880Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-02-24T01:07:11.3704487Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-02-24T01:07:11.3704817Z         
2026-02-24T01:07:11.3705284Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:07:11.3705704Z         type
2026-02-24T01:07:11.3706167Z --- FAIL: TestAccClusterAPI_basic (1605.35s)
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
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 25 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 28 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 32 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 27 minutes
  - PASS 22 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 27 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
