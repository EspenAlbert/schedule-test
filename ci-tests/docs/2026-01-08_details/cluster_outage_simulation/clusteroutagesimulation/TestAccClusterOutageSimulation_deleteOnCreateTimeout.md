# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters | dev | flaky_500 | 10.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 59 minutes
  - PASS 56 minutes
- 2025-12-11 PASS 59 minutes
- 2025-12-12 PASS an hour
- 2025-12-13 PASS an hour
- 2025-12-14: MISSING
- 2025-12-15 PASS 56 minutes
- 2025-12-16 PASS 57 minutes
- 2025-12-17 PASS 56 minutes
- 2025-12-18 PASS 59 minutes
- 2025-12-19 PASS 59 minutes
- 2025-12-20 PASS 57 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 59 minutes
- 2025-12-23 PASS 59 minutes
- 2025-12-24
  - PASS 57 minutes
  - PASS 57 minutes
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 57 minutes
- 2025-12-27 PASS 58 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 57 minutes
- 2025-12-31 PASS 57 minutes
- 2026-01-01 PASS 56 minutes
- 2026-01-02 PASS 58 minutes
- 2026-01-03 PASS 58 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 58 minutes
- 2026-01-06 PASS 59 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.1371923Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-01-07T00:30:35.1376048Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-01-07T00:30:45.1419836Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-01-07T00:30:45.1421604Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:45.141701615Z, ProjectID: 695da928d59b8466ea71ab9b, Cluster name: test-acc-tf-c-661157936511733717
2026-01-07T00:30:46.0104822Z   
2026-01-07T00:30:46.0105495Z     resource_test.go:168: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-07T00:30:46.0106232Z         
2026-01-07T00:30:46.0106511Z         Error: Error in create
2026-01-07T00:30:46.0106763Z         
2026-01-07T00:30:46.0107156Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:30:46.0108061Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:30:46.0108761Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:30:46.0109106Z         
2026-01-07T00:30:46.0109551Z         cluster name: test-acc-tf-c-661157936511733717, API error details:
2026-01-07T00:30:46.0110262Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters
2026-01-07T00:30:46.0110988Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:30:46.0111600Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:30:46.0112014Z         BadRequestDetail: 
2026-01-07T00:30:46.0571184Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (10.92s)
```

- 2026-01-08 PASS an hour

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 56 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 56 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 56 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 57 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 56 minutes
