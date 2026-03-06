# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 1605.04s
[2026-02-27 00:40](#error-2026-02-27t0040370000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a0e7d9f16f089968abeaee/clusters | dev | out_of_capacity | 1.01s
[2026-03-02 01:04](#error-2026-03-02t0104310000) | VERSION_GONE /api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters | dev |  | 0.09s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-25 PASS 38 minutes
- 2026-02-26 PASS 37 minutes
- 2026-02-27

### Error 2026-02-27T00:40:37+00:00
```
2026-02-27T00:40:37.9229941Z === RUN   TestAccClusterAPI_basic
2026-02-27T00:40:37.9232686Z === CONT  TestAccClusterAPI_basic
2026-02-27T00:40:37.9265694Z === NAME  TestAccClusterAPI_basic
2026-02-27T00:40:37.9266821Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-02-27T00:40:37.9267796Z         
2026-02-27T00:40:37.9268327Z         Error: Error calling API in Create
2026-02-27T00:40:37.9268822Z         
2026-02-27T00:40:37.9269372Z           with mongodbatlas_cluster_api.test,
2026-02-27T00:40:37.9270518Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-02-27T00:40:37.9271606Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-02-27T00:40:37.9272136Z         
2026-02-27T00:40:37.9273083Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a0e7d9f16f089968abeaee/clusters
2026-02-27T00:40:37.9286740Z   
2026-02-27T00:40:37.9287862Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-27T00:40:37.9289142Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-27T00:40:37.9290056Z         Conflict. Params: [], BadRequestDetail: 
2026-02-27T00:40:37.9302375Z --- FAIL: TestAccClusterAPI_basic (1.11s)
```

- 2026-02-28 PASS 39 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL a moment

### Error 2026-03-02T01:04:31+00:00
```
2026-03-02T01:04:31.6485147Z === RUN   TestAccClusterAPI_basic
2026-03-02T01:04:31.6488252Z === CONT  TestAccClusterAPI_basic
2026-03-02T01:04:31.6503353Z   
2026-03-02T01:04:31.6525377Z === NAME  TestAccClusterAPI_basic
2026-03-02T01:04:31.6525861Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-03-02T01:04:31.6526242Z         
2026-03-02T01:04:31.6526528Z         Error: Error calling API in Create
2026-03-02T01:04:31.6526887Z         
2026-03-02T01:04:31.6527234Z           with mongodbatlas_cluster_api.test,
2026-03-02T01:04:31.6527867Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-03-02T01:04:31.6528461Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-03-02T01:04:31.6528778Z         
2026-03-02T01:04:31.6529291Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters
2026-03-02T01:04:31.6529990Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T01:04:31.6530631Z         of api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters is no longer
2026-03-02T01:04:31.6531147Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T01:04:31.6531718Z         api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters], BadRequestDetail: 
2026-03-02T01:04:31.6533441Z --- FAIL: TestAccClusterAPI_basic (0.94s)
```

  - PASS 30 minutes
- 2026-03-03 PASS 30 minutes
- 2026-03-04 PASS 32 minutes
- 2026-03-05 PASS 43 minutes
- 2026-03-06 PASS 41 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-02 12:13](#error-2026-03-02t1213350000) | VERSION_GONE /api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters | qa | flaky_500 | 0.08s

### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 33 minutes
- 2026-03-02

### Error 2026-03-02T12:13:35+00:00
```
2026-03-02T12:13:35.6729212Z === RUN   TestAccClusterAPI_basic
2026-03-02T12:13:35.6733448Z === CONT  TestAccClusterAPI_basic
2026-03-02T12:13:35.6748874Z    test_working_directory=/tmp/plugintest1664156071 test_step_number=1 test_name=TestAccClusterAPI_basic
2026-03-02T12:13:35.6749863Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-03-02T12:13:35.6750731Z         
2026-03-02T12:13:35.6751251Z         Error: Error calling API in Create
2026-03-02T12:13:35.6751790Z         
2026-03-02T12:13:35.6752124Z           with mongodbatlas_cluster_api.test,
2026-03-02T12:13:35.6752780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-03-02T12:13:35.6753398Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-03-02T12:13:35.6753727Z         
2026-03-02T12:13:35.6754254Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters
2026-03-02T12:13:35.6755204Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T12:13:35.6755854Z         of api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters is no longer
2026-03-02T12:13:35.6756381Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T12:13:35.6756966Z         api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters], BadRequestDetail: 
2026-03-02T12:13:35.6770518Z    test_terraform_path=/home/runner/work/_temp/7e335a9f-3a41-4819-a12b-d04715a98d17/terraform test_working_directory=/tmp/plugintest1318054855
2026-03-02T12:13:35.6795008Z --- FAIL: TestAccClusterAPI_basic (0.77s)
```

- 2026-03-03 PASS 28 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
