# autogen_slow/clusterapi/TestAccClusterAPI_deleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 01:11](#error-2026-01-29t0111200000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697aabcef4a2a16d1a6a03b5/clusters | dev | out_of_capacity | 0.10s
[2026-02-03 00:41](#error-2026-02-03t0041160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814426b2e54ee99592392f/clusters | dev | out_of_capacity | 1.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds
- 2026-01-09 PASS 11 seconds
- 2026-01-10 PASS 11 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 11 seconds
- 2026-01-13 PASS 11 seconds
- 2026-01-14 PASS 11 seconds
- 2026-01-15 PASS 11 seconds
- 2026-01-16 PASS 11 seconds
- 2026-01-17 PASS 11 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 seconds
- 2026-01-20 PASS 11 seconds
- 2026-01-21 PASS 11 seconds
- 2026-01-22 PASS 12 seconds
- 2026-01-23 PASS 11 seconds
- 2026-01-24 PASS 11 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 11 seconds
- 2026-01-27 PASS 11 seconds
- 2026-01-28 PASS 11 seconds
- 2026-01-29

### Error 2026-01-29T01:11:20+00:00
```
2026-01-29T01:11:20.1404270Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-01-29T01:11:20.1405915Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-01-29T01:11:20.1420315Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-01-29T01:11:20.1421346Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-29T01:11:20.1422269Z         
2026-01-29T01:11:20.1422846Z         Error: Error calling API in Create
2026-01-29T01:11:20.1423163Z         
2026-01-29T01:11:20.1423486Z           with mongodbatlas_cluster_api.test,
2026-01-29T01:11:20.1424127Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-01-29T01:11:20.1424755Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-01-29T01:11:20.1425084Z         
2026-01-29T01:11:20.1425934Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aabcef4a2a16d1a6a03b5/clusters
2026-01-29T01:11:20.1426813Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-29T01:11:20.1427626Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-29T01:11:20.1428151Z         Conflict. Params: [], BadRequestDetail: 
2026-01-29T01:11:20.1428549Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (0.99s)
```

- 2026-01-30 PASS 11 seconds
- 2026-01-31 PASS 11 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 11 seconds
- 2026-02-03

### Error 2026-02-03T00:41:16+00:00
```
2026-02-03T00:41:16.8081211Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-02-03T00:41:16.8083515Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-02-03T00:41:16.8143312Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-02-03T00:41:16.8146987Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:41:16.8147931Z         
2026-02-03T00:41:16.8148847Z         Error: Error calling API in Create
2026-02-03T00:41:16.8149351Z         
2026-02-03T00:41:16.8149895Z           with mongodbatlas_cluster_api.test,
2026-02-03T00:41:16.8151654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-02-03T00:41:16.8152713Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-02-03T00:41:16.8153263Z         
2026-02-03T00:41:16.8154213Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814426b2e54ee99592392f/clusters
2026-02-03T00:41:16.8155453Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:41:16.8156623Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:41:16.8157517Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:41:16.8170250Z   
2026-02-03T00:41:16.8238694Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (1.19s)
```

- 2026-02-04 PASS 12 seconds
- 2026-02-05 PASS 11 seconds
- 2026-02-06 PASS 11 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-01 01:13](#error-2026-02-01t0113110000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697ea1f3c799a1e8eed09aa8/clusters | qa | out_of_capacity | 0.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 11 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 11 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 11 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01

### Error 2026-02-01T01:13:11+00:00
```
2026-02-01T01:13:11.0649459Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-02-01T01:13:11.0651177Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-02-01T01:13:11.0667131Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-02-01T01:13:11.0667836Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-01T01:13:11.0668361Z         
2026-02-01T01:13:11.0668661Z         Error: Error calling API in Create
2026-02-01T01:13:11.0668949Z         
2026-02-01T01:13:11.0669273Z           with mongodbatlas_cluster_api.test,
2026-02-01T01:13:11.0669939Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-02-01T01:13:11.0670560Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-02-01T01:13:11.0670872Z         
2026-02-01T01:13:11.0671408Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/697ea1f3c799a1e8eed09aa8/clusters
2026-02-01T01:13:11.0672476Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-01T01:13:11.0673169Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-01T01:13:11.0673701Z         Conflict. Params: [], BadRequestDetail: 
2026-02-01T01:13:11.0674084Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (0.94s)
```

- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
