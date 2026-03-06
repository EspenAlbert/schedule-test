# autogen_slow/clusterapi/TestAccClusterAPI_deleteOnCreateTimeout Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-02 01:04](#error-2026-03-02t0104310000) | VERSION_GONE /api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters | dev | 0.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 11 seconds
- 2026-02-06 PASS 11 seconds
- 2026-02-07 PASS 11 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 12 seconds
- 2026-02-10 PASS 11 seconds
- 2026-02-11 PASS 11 seconds
- 2026-02-12 PASS 11 seconds
- 2026-02-13 PASS 12 seconds
- 2026-02-14 PASS 11 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 12 seconds
- 2026-02-17 PASS 11 seconds
- 2026-02-18 PASS 12 seconds
- 2026-02-19 PASS 11 seconds
- 2026-02-20 PASS 11 seconds
- 2026-02-21 PASS 12 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 11 seconds
- 2026-02-24 PASS 11 seconds
- 2026-02-25 PASS 12 seconds
- 2026-02-26 PASS 14 seconds
- 2026-02-27 PASS 11 seconds
- 2026-02-28 PASS 12 seconds
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL a moment

### Error 2026-03-02T01:04:31+00:00
```
2026-03-02T01:04:31.6486118Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-03-02T01:04:31.6487886Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-03-02T01:04:31.6503607Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-03-02T01:04:31.6504668Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-03-02T01:04:31.6505558Z         
2026-03-02T01:04:31.6506108Z         Error: Error calling API in Create
2026-03-02T01:04:31.6506489Z         
2026-03-02T01:04:31.6506809Z           with mongodbatlas_cluster_api.test,
2026-03-02T01:04:31.6507653Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-03-02T01:04:31.6508514Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-03-02T01:04:31.6508839Z         
2026-03-02T01:04:31.6509382Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters
2026-03-02T01:04:31.6510094Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T01:04:31.6510735Z         of api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters is no longer
2026-03-02T01:04:31.6511249Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T01:04:31.6511833Z         api/atlas/v2/groups/69a4dc24756ae9983e96ff1e/clusters], BadRequestDetail: 
2026-03-02T01:04:31.6525163Z   
2026-03-02T01:04:31.6532208Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (0.90s)
```

  - PASS 11 seconds
- 2026-03-03 PASS 12 seconds
- 2026-03-04 PASS 15 seconds
- 2026-03-05 PASS 12 seconds
- 2026-03-06 PASS 11 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-02 12:13](#error-2026-03-02t1213350000) | VERSION_GONE /api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters | qa |  | 0.08s
[2026-03-03 10:00](#error-2026-03-03t1000030000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a6aa6d61f800e9358a4845/clusters | qa | out_of_capacity | 1.01s

### Timeline
- 2026-02-04 PASS 11 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 11 seconds
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 12 seconds
  - PASS 11 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 11 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 11 seconds
- 2026-03-02

### Error 2026-03-02T12:13:35+00:00
```
2026-03-02T12:13:35.6730719Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-03-02T12:13:35.6732496Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-03-02T12:13:35.6771217Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-03-02T12:13:35.6771905Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-03-02T12:13:35.6772423Z         
2026-03-02T12:13:35.6772715Z         Error: Error calling API in Create
2026-03-02T12:13:35.6772996Z         
2026-03-02T12:13:35.6789435Z           with mongodbatlas_cluster_api.test,
2026-03-02T12:13:35.6790542Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-03-02T12:13:35.6791194Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-03-02T12:13:35.6791532Z         
2026-03-02T12:13:35.6792072Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters
2026-03-02T12:13:35.6792794Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T12:13:35.6793445Z         of api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters is no longer
2026-03-02T12:13:35.6793971Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T12:13:35.6794552Z         api/atlas/v2/groups/69a57b2f0b79a8d7dc99dc13/clusters], BadRequestDetail: 
2026-03-02T12:13:35.6795421Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (0.78s)
```

- 2026-03-03

### Error 2026-03-03T10:00:03+00:00
```
2026-03-03T10:00:03.7217665Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-03-03T10:00:03.7219483Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-03-03T10:00:03.7231921Z    test_name=TestAccClusterAPI_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/228f187b-7826-4871-b05b-924e2bf263b5/terraform test_working_directory=/tmp/plugintest138375947 test_step_number=1
2026-03-03T10:00:03.7233256Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-03-03T10:00:03.7233802Z         
2026-03-03T10:00:03.7234101Z         Error: Error calling API in Create
2026-03-03T10:00:03.7234404Z         
2026-03-03T10:00:03.7234741Z           with mongodbatlas_cluster_api.test,
2026-03-03T10:00:03.7235383Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-03-03T10:00:03.7235994Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-03-03T10:00:03.7236317Z         
2026-03-03T10:00:03.7237044Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a6aa6d61f800e9358a4845/clusters
2026-03-03T10:00:03.7237928Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-03-03T10:00:03.7238887Z         region is currently out of capacity for the requested instance size. Reason:
2026-03-03T10:00:03.7239422Z         Conflict. Params: [], BadRequestDetail: 
2026-03-03T10:00:03.7239821Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (1.10s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
