# autogen_slow/clusterapi/TestAccClusterAPI_moveBasic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:37](#error-2026-01-31t0337040000) |  | dev | timeout | 10805.05s
[2026-02-02 03:41](#error-2026-02-02t0341080000) |  | dev | timeout | 10803.09s
[2026-02-03 00:41](#error-2026-02-03t0041160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814426b2e54ee99592392f/clusters | dev | out_of_capacity | 4.00s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 18 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 23 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T03:37:04+00:00
```
2026-01-31T03:37:04.0910478Z === RUN   TestAccClusterAPI_moveBasic
2026-01-31T03:37:04.0912235Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-4082203001960677475
2026-01-31T03:37:04.0916431Z === CONT  TestAccClusterAPI_moveBasic
2026-01-31T03:37:04.0969431Z === NAME  TestAccClusterAPI_moveBasic
2026-01-31T03:37:04.0970079Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:04.0970472Z         
2026-01-31T03:37:04.0970807Z         Error: Error waiting for changes in Create
2026-01-31T03:37:04.0971114Z         
2026-01-31T03:37:04.0971456Z           with mongodbatlas_cluster_old_api.old,
2026-01-31T03:37:04.0972130Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-01-31T03:37:04.0972775Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-01-31T03:37:04.0973118Z         
2026-01-31T03:37:04.0973578Z         timeout while waiting for state to become 'IDLE' (last state: 'CREATING',
2026-01-31T03:37:04.0974019Z         timeout: 3h0m0s)
2026-01-31T03:37:04.0974541Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-31T03:37:04.0975221Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-31T03:37:04.0976034Z --- FAIL: TestAccClusterAPI_moveBasic (10805.47s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:41:08+00:00
```
2026-02-02T03:41:08.5621466Z === RUN   TestAccClusterAPI_moveBasic
2026-02-02T03:41:08.5622687Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-5914691471466944484
2026-02-02T03:41:08.5625977Z === CONT  TestAccClusterAPI_moveBasic
2026-02-02T03:41:08.5677972Z === NAME  TestAccClusterAPI_moveBasic
2026-02-02T03:41:08.5678651Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:41:08.5679226Z         
2026-02-02T03:41:08.5679578Z         Error: Error waiting for changes in Create
2026-02-02T03:41:08.5679889Z         
2026-02-02T03:41:08.5680252Z           with mongodbatlas_cluster_old_api.old,
2026-02-02T03:41:08.5680972Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-02-02T03:41:08.5681640Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-02-02T03:41:08.5681968Z         
2026-02-02T03:41:08.5682458Z         timeout while waiting for state to become 'IDLE' (last state: 'CREATING',
2026-02-02T03:41:08.5682899Z         timeout: 3h0m0s)
2026-02-02T03:41:08.5683442Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-02-02T03:41:08.5684149Z         transient error, wait before retrying to allow resource deletion to finish
2026-02-02T03:41:08.5684941Z --- FAIL: TestAccClusterAPI_moveBasic (10803.89s)
```

- 2026-02-03

### Error 2026-02-03T00:41:16+00:00
```
2026-02-03T00:41:16.8075763Z === RUN   TestAccClusterAPI_moveBasic
2026-02-03T00:41:16.8077267Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-1103048099712342881
2026-02-03T00:41:16.8082453Z === CONT  TestAccClusterAPI_moveBasic
2026-02-03T00:41:16.8170611Z === NAME  TestAccClusterAPI_moveBasic
2026-02-03T00:41:16.8171427Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:41:16.8172039Z         
2026-02-03T00:41:16.8172522Z         Error: Error calling API in Create
2026-02-03T00:41:16.8172997Z         
2026-02-03T00:41:16.8173546Z           with mongodbatlas_cluster_old_api.old,
2026-02-03T00:41:16.8174713Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-02-03T00:41:16.8175800Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-02-03T00:41:16.8176341Z         
2026-02-03T00:41:16.8177238Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814426b2e54ee99592392f/clusters
2026-02-03T00:41:16.8178612Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:41:16.8179778Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:41:16.8180663Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:41:16.8200055Z    test_name=TestAccClusterAPI_basic test_terraform_path=/home/runner/work/_temp/9bff2f4d-3ab0-4ed2-a3ad-79c6ae1f590f/terraform test_working_directory=/tmp/plugintest2931532308 test_step_number=1
2026-02-03T00:41:16.8239396Z --- FAIL: TestAccClusterAPI_moveBasic (4.00s)
```

- 2026-02-04 PASS 29 minutes
- 2026-02-05 PASS 30 minutes
- 2026-02-06 PASS 32 minutes
- 2026-02-07 PASS 25 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 25 minutes
- 2026-02-11 PASS 29 minutes
- 2026-02-12 PASS 26 minutes
- 2026-02-13 PASS 26 minutes
- 2026-02-14 PASS 25 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 26 minutes
- 2026-02-17 PASS 25 minutes
- 2026-02-18 PASS 29 minutes
- 2026-02-19 PASS 45 minutes
- 2026-02-20 PASS 33 minutes
- 2026-02-21 PASS 27 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24 PASS 29 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 19 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 20 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 25 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
