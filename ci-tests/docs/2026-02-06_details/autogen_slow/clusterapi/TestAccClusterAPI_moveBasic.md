# autogen_slow/clusterapi/TestAccClusterAPI_moveBasic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-15 00:59](#error-2026-01-15t0059380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6968354108bf68c1c096cbae/clusters | dev | out_of_capacity | 4.03s
[2026-01-31 03:37](#error-2026-01-31t0337040000) |  | dev | timeout | 10805.05s
[2026-02-02 03:41](#error-2026-02-02t0341080000) |  | dev | timeout | 10803.09s
[2026-02-03 00:41](#error-2026-02-03t0041160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814426b2e54ee99592392f/clusters | dev | out_of_capacity | 4.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 24 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 20 minutes
- 2026-01-13 PASS 26 minutes
- 2026-01-14 PASS 21 minutes
- 2026-01-15

### Error 2026-01-15T00:59:38+00:00
```
2026-01-15T00:59:38.7338014Z === RUN   TestAccClusterAPI_moveBasic
2026-01-15T00:59:38.7339169Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-1888241666026946281
2026-01-15T00:59:38.7344051Z === CONT  TestAccClusterAPI_moveBasic
2026-01-15T00:59:38.7360994Z === NAME  TestAccClusterAPI_moveBasic
2026-01-15T00:59:38.7361489Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-15T00:59:38.7361855Z         
2026-01-15T00:59:38.7362150Z         Error: Error calling API in Create
2026-01-15T00:59:38.7362441Z         
2026-01-15T00:59:38.7362792Z           with mongodbatlas_cluster_old_api.old,
2026-01-15T00:59:38.7363490Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-01-15T00:59:38.7364139Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-01-15T00:59:38.7364465Z         
2026-01-15T00:59:38.7364991Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6968354108bf68c1c096cbae/clusters
2026-01-15T00:59:38.7365723Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-15T00:59:38.7366399Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-15T00:59:38.7366920Z         Conflict. Params: [], BadRequestDetail: 
2026-01-15T00:59:38.7367259Z --- FAIL: TestAccClusterAPI_moveBasic (4.25s)
```

- 2026-01-16 PASS 24 minutes
- 2026-01-17 PASS 21 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 18 minutes
- 2026-01-20 PASS 23 minutes
- 2026-01-21 PASS 23 minutes
- 2026-01-22 PASS 23 minutes
- 2026-01-23 PASS 22 minutes
- 2026-01-24 PASS 19 minutes
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

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-25 01:05](#error-2026-01-25t0105160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69756596aff53e81ac7afcec/clusters | qa | out_of_capacity | 2.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 23 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 17 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 20 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25

### Error 2026-01-25T01:05:16+00:00
```
2026-01-25T01:05:16.1895052Z === RUN   TestAccClusterAPI_moveBasic
2026-01-25T01:05:16.1895976Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-7402307579523022984
2026-01-25T01:05:16.1899147Z === CONT  TestAccClusterAPI_moveBasic
2026-01-25T01:05:16.1912360Z === NAME  TestAccClusterAPI_moveBasic
2026-01-25T01:05:16.1913121Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-25T01:05:16.1913516Z         
2026-01-25T01:05:16.1913812Z         Error: Error calling API in Create
2026-01-25T01:05:16.1914099Z         
2026-01-25T01:05:16.1914419Z           with mongodbatlas_cluster_old_api.old,
2026-01-25T01:05:16.1915080Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-01-25T01:05:16.1915701Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-01-25T01:05:16.1916020Z         
2026-01-25T01:05:16.1916531Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69756596aff53e81ac7afcec/clusters
2026-01-25T01:05:16.1917230Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-25T01:05:16.1917901Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-25T01:05:16.1918420Z         Conflict. Params: [], BadRequestDetail: 
2026-01-25T01:05:16.1918767Z --- FAIL: TestAccClusterAPI_moveBasic (2.89s)
```

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
