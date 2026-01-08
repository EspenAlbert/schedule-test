# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters/test-acc-tf-c-1644806420507329911 | dev | flaky_500 | 12.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a minute
  - PASS a minute
- 2025-12-11 PASS a minute
- 2025-12-12 PASS a minute
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS a minute
- 2025-12-17 PASS a minute
- 2025-12-18 PASS a minute
- 2025-12-19 PASS a minute
- 2025-12-20 PASS a minute
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS a minute
- 2025-12-24 PASS a minute
- 2025-12-25 PASS a minute
- 2025-12-26 PASS a minute
- 2025-12-27 PASS a minute
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a minute
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS a minute
- 2026-01-03 PASS a minute
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06 PASS a minute
- 2026-01-07

### Error 2026-01-07T00:31:04+00:00
```
2026-01-07T00:31:04.5134684Z === RUN   TestAccClusterFlexCluster_basic
2026-01-07T00:31:15.6345402Z   
2026-01-07T00:31:15.6345881Z     resource_test.go:2928: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:31:15.6346229Z         
2026-01-07T00:31:15.6347892Z         Error: error reading flex cluster (test-acc-tf-c-1644806420507329911): https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters/test-acc-tf-c-1644806420507329911 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:31:15.6349055Z         
2026-01-07T00:31:15.6349385Z           with data.mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:15.6349949Z           on terraform_plugin_test.tf line 31, in data "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:15.6350461Z           31: 	data "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:15.6351024Z         
2026-01-07T00:31:15.6351409Z         cluster name: test-acc-tf-c-1644806420507329911, API error details:
2026-01-07T00:31:15.6352201Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters/test-acc-tf-c-1644806420507329911
2026-01-07T00:31:15.6353466Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:15.6354016Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:15.6354389Z         BadRequestDetail: 
2026-01-07T00:31:15.6354627Z         
2026-01-07T00:31:15.6354919Z         Error: error reading plural data source
2026-01-07T00:31:15.6355188Z         
2026-01-07T00:31:15.6355509Z           with data.mongodbatlas_flex_clusters.test,
2026-01-07T00:31:15.6356055Z           on terraform_plugin_test.tf line 47, in data "mongodbatlas_flex_clusters" "test":
2026-01-07T00:31:15.6356549Z           47: 	data "mongodbatlas_flex_clusters" "test" {
2026-01-07T00:31:15.6356827Z         
2026-01-07T00:31:15.6357307Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters
2026-01-07T00:31:15.6357938Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:15.6358461Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:15.6358832Z         BadRequestDetail: 
2026-01-07T00:31:16.8330902Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/c3449c42-367b-4643-b3d9-335cf3ea8ac8/terraform test_working_directory=/tmp/plugintest3806353376
2026-01-07T00:31:16.8332330Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:31:16.8333138Z         
2026-01-07T00:31:16.8333547Z         Error: Error in flex delete
2026-01-07T00:31:16.8333998Z         
2026-01-07T00:31:16.8334761Z         cluster name: test-acc-tf-c-1644806420507329911, API error details:
2026-01-07T00:31:16.8336403Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters/test-acc-tf-c-1644806420507329911
2026-01-07T00:31:16.8337705Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:16.8338622Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:16.8339200Z         BadRequestDetail: 
2026-01-07T00:31:16.8340036Z --- FAIL: TestAccClusterFlexCluster_basic (12.32s)
```

- 2026-01-08 PASS a minute

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a minute
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a minute
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS a minute
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
