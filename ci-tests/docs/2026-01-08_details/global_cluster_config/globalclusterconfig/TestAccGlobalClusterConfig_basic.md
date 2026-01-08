# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-3975513073454056754 | dev | flaky_500 | 46.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 16 minutes
- 2025-12-12 PASS 13 minutes
- 2025-12-13 PASS 15 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16 PASS 15 minutes
- 2025-12-17 PASS 14 minutes
- 2025-12-18 PASS 15 minutes
- 2025-12-19 PASS 16 minutes
- 2025-12-20 PASS 18 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 16 minutes
- 2025-12-23 PASS 17 minutes
- 2025-12-24 PASS 16 minutes
- 2025-12-25 PASS 18 minutes
- 2025-12-26 PASS 15 minutes
- 2025-12-27 PASS 14 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 minutes
- 2025-12-31 PASS 14 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 15 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 minutes
- 2026-01-06 PASS 17 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.0731691Z === RUN   TestAccGlobalClusterConfig_basic
2026-01-07T00:32:42.9310496Z === CONT  TestAccGlobalClusterConfig_basic
2026-01-07T00:32:57.9349233Z === NAME  TestAccGlobalClusterConfig_basic
2026-01-07T00:32:57.9353029Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:57.934588679Z, ProjectID: 695da929af4f6cc389e798c2, Cluster name: test-acc-tf-c-3975513073454056754
2026-01-07T00:33:29.1370137Z === NAME  TestAccGlobalClusterConfig_basic
2026-01-07T00:33:29.1371102Z     resource_global_cluster_config_test.go:30: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:33:29.1371845Z         
2026-01-07T00:33:29.1372182Z         Error: Error in create
2026-01-07T00:33:29.1372507Z         
2026-01-07T00:33:29.1372954Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:33:29.1373901Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:33:29.1374730Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:33:29.1375314Z         
2026-01-07T00:33:29.1375846Z         cluster=test-acc-tf-c-3975513073454056754 didn't reach desired state: IDLE,
2026-01-07T00:33:29.1376571Z         error:
2026-01-07T00:33:29.1377343Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-3975513073454056754
2026-01-07T00:33:29.1378220Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:29.1379017Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:29.1379491Z         BadRequestDetail: 
2026-01-07T00:33:29.1829039Z --- FAIL: TestAccGlobalClusterConfig_basic (46.25s)
```

- 2026-01-08 PASS 14 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 12 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 14 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
