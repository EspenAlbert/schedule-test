# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 43 minutes
- 2025-12-05 PASS 2 hours
- 2025-12-06 PASS 37 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 36 minutes
- 2025-12-09 PASS 36 minutes
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

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-07 00:33](#error-2025-12-07t0033450000) |  | qa | timeout | 11569.03s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07

### Error 2025-12-07T00:33:45+00:00
```
2025-12-07T00:33:45.1362451Z === RUN   TestAccCluster_MultiRegion
2025-12-07T00:33:47.1353363Z === CONT  TestAccCluster_MultiRegion
2025-12-07T03:43:43.4769032Z === NAME  TestAccCluster_MultiRegion
2025-12-07T03:43:43.4769910Z     resource_cluster_test.go:480: Step 2/2 error: Error running apply: exit status 1
2025-12-07T03:43:43.4770380Z         
2025-12-07T03:43:43.4771902Z         Error: error updating MongoDB Cluster (test-acc-tf-c-348584721952108075): error updating MongoDB Cluster (test-acc-tf-c-348584721952108075): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-12-07T03:43:43.4773006Z         
2025-12-07T03:43:43.4773330Z           with mongodbatlas_cluster.multi_region,
2025-12-07T03:43:43.4773960Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-12-07T03:43:43.4774542Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-12-07T03:43:43.4774841Z         
2025-12-07T03:46:36.3843899Z --- FAIL: TestAccCluster_MultiRegion (11569.26s)
```

- 2025-12-08: MISSING
- 2025-12-09 PASS 35 minutes
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
