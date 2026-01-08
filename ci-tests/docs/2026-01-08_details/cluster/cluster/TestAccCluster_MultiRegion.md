# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ad40/clusters/test-acc-tf-c-6431705917648160018 | dev | flaky_500 | 526.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 37 minutes
  - PASS 37 minutes
- 2025-12-11 PASS 38 minutes
- 2025-12-12 PASS 36 minutes
- 2025-12-13 PASS 37 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 36 minutes
- 2025-12-16 PASS 38 minutes
- 2025-12-17 PASS 38 minutes
- 2025-12-18 PASS 42 minutes
- 2025-12-19 PASS 37 minutes
- 2025-12-20 PASS 38 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 38 minutes
- 2025-12-23 PASS 38 minutes
- 2025-12-24 PASS 37 minutes
- 2025-12-25 PASS 45 minutes
- 2025-12-26 PASS 36 minutes
- 2025-12-27 PASS 36 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 35 minutes
- 2025-12-31 PASS 38 minutes
- 2026-01-01 PASS 35 minutes
- 2026-01-02 PASS 38 minutes
- 2026-01-03 PASS 36 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 36 minutes
- 2026-01-06 PASS 38 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.6590448Z === RUN   TestAccCluster_MultiRegion
2026-01-07T00:30:39.8823780Z === CONT  TestAccCluster_MultiRegion
2026-01-07T00:39:26.2109794Z === NAME  TestAccCluster_MultiRegion
2026-01-07T00:39:26.2110696Z     resource_cluster_test.go:479: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:39:26.2111309Z         
2026-01-07T00:39:26.2114845Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ad40/clusters/test-acc-tf-c-6431705917648160018 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:39:26.2116876Z         
2026-01-07T00:39:26.2117439Z           with mongodbatlas_cluster.multi_region,
2026-01-07T00:39:26.2118586Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-01-07T00:39:26.2119722Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-01-07T00:39:26.2120353Z         
2026-01-07T00:39:26.2616518Z --- FAIL: TestAccCluster_MultiRegion (526.38s)
```

- 2026-01-08 PASS 36 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 35 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 34 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 35 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 36 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 40 minutes
