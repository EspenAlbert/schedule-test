# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-02 00:53](#error-2026-01-02t0053360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6957123317360a81236c8e38/clusters | dev | out_of_capacity | 1.00s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 34 minutes
- 2025-12-05 PASS an hour
- 2025-12-06 PASS 27 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 27 minutes
- 2025-12-09 PASS 28 minutes
- 2025-12-10
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-12-11 PASS 29 minutes
- 2025-12-12 PASS 29 minutes
- 2025-12-13 PASS 29 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 26 minutes
- 2025-12-16 PASS 28 minutes
- 2025-12-17 PASS 28 minutes
- 2025-12-18 PASS 29 minutes
- 2025-12-19 PASS 29 minutes
- 2025-12-20 PASS 27 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 30 minutes
- 2025-12-23 PASS 25 minutes
- 2025-12-24 PASS 31 minutes
- 2025-12-25 PASS 39 minutes
- 2025-12-26 PASS 26 minutes
- 2025-12-27 PASS 25 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 27 minutes
- 2025-12-31 PASS 29 minutes
- 2026-01-01 PASS 25 minutes
- 2026-01-02

### Error 2026-01-02T00:53:36+00:00
```
2026-01-02T00:53:36.8895674Z === RUN   TestAccClusterAPI_basic
2026-01-02T00:53:36.8897302Z === CONT  TestAccClusterAPI_basic
2026-01-02T00:53:36.8910035Z === NAME  TestAccClusterAPI_basic
2026-01-02T00:53:36.8910532Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-01-02T00:53:36.8910921Z         
2026-01-02T00:53:36.8911221Z         Error: Error calling API in Create
2026-01-02T00:53:36.8911514Z         
2026-01-02T00:53:36.8911832Z           with mongodbatlas_cluster_api.test,
2026-01-02T00:53:36.8912466Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-01-02T00:53:36.8913042Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-01-02T00:53:36.8913350Z         
2026-01-02T00:53:36.8913983Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6957123317360a81236c8e38/clusters
2026-01-02T00:53:36.8914979Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-02T00:53:36.8915808Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-02T00:53:36.8916312Z         Conflict. Params: [], BadRequestDetail: 
2026-01-02T00:53:36.8916641Z --- FAIL: TestAccClusterAPI_basic (1.01s)
```


## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 25 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 25 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 29 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 24 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 24 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
