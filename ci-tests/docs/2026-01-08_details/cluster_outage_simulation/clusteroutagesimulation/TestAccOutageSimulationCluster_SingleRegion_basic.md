# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters | dev | flaky_500 | 20.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 43 minutes
  - PASS 41 minutes
- 2025-12-11 PASS 42 minutes
- 2025-12-12 PASS 42 minutes
- 2025-12-13 PASS 43 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 41 minutes
- 2025-12-16 PASS 43 minutes
- 2025-12-17 PASS 43 minutes
- 2025-12-18 PASS 43 minutes
- 2025-12-19 PASS 44 minutes
- 2025-12-20 PASS 45 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 44 minutes
- 2025-12-23 PASS 45 minutes
- 2025-12-24
  - PASS 40 minutes
  - PASS 43 minutes
- 2025-12-25 PASS 48 minutes
- 2025-12-26 PASS 42 minutes
- 2025-12-27 PASS 42 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 44 minutes
- 2025-12-31 PASS 42 minutes
- 2026-01-01 PASS 41 minutes
- 2026-01-02 PASS 43 minutes
- 2026-01-03 PASS 42 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 43 minutes
- 2026-01-06 PASS 44 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.1359500Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-01-07T00:30:35.1377642Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-01-07T00:30:55.1461901Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-01-07T00:30:55.1463678Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:55.145923939Z, ProjectID: 695da928d59b8466ea71ab9b, Cluster name: test-acc-tf-c-8761982275055241223
2026-01-07T00:30:56.0643330Z   
2026-01-07T00:30:56.0644193Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:30:56.0645079Z         
2026-01-07T00:30:56.0645602Z         Error: Error in create
2026-01-07T00:30:56.0646044Z         
2026-01-07T00:30:56.0647082Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:30:56.0648446Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:30:56.0649679Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:30:56.0650288Z         
2026-01-07T00:30:56.0651381Z         cluster name: test-acc-tf-c-8761982275055241223, API error details:
2026-01-07T00:30:56.0652659Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters
2026-01-07T00:30:56.0654024Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:30:56.0655339Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:30:56.0656036Z         BadRequestDetail: 
2026-01-07T00:30:56.1108426Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (20.97s)
```

- 2026-01-08 PASS 41 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 41 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 40 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 40 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 41 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 40 minutes
