# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_withBackup Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-5969536764821210386 | dev | flaky_500 | 41.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 16 minutes
- 2025-12-12 PASS 15 minutes
- 2025-12-13 PASS 15 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16 PASS 15 minutes
- 2025-12-17 PASS 16 minutes
- 2025-12-18 PASS 17 minutes
- 2025-12-19 PASS 17 minutes
- 2025-12-20 PASS 17 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 16 minutes
- 2025-12-23 PASS 18 minutes
- 2025-12-24 PASS 19 minutes
- 2025-12-25 PASS 18 minutes
- 2025-12-26 PASS 18 minutes
- 2025-12-27 PASS 17 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 16 minutes
- 2025-12-31 PASS 16 minutes
- 2026-01-01 PASS 17 minutes
- 2026-01-02 PASS 18 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 minutes
- 2026-01-06 PASS 17 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.0733208Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-01-07T00:32:42.9309811Z === CONT  TestAccGlobalClusterConfig_withBackup
2026-01-07T00:32:52.9322813Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-01-07T00:32:52.9324675Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:52.931146451Z, ProjectID: 695da929af4f6cc389e798c2, Cluster name: test-acc-tf-c-5969536764821210386
2026-01-07T00:33:24.0839046Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-01-07T00:33:24.0839828Z     resource_global_cluster_config_test.go:34: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:33:24.0840392Z         
2026-01-07T00:33:24.0840751Z         Error: Error in create
2026-01-07T00:33:24.0841450Z         
2026-01-07T00:33:24.0841908Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:33:24.0842680Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:33:24.0843389Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:33:24.0843808Z         
2026-01-07T00:33:24.0844611Z         cluster=test-acc-tf-c-5969536764821210386 didn't reach desired state: IDLE,
2026-01-07T00:33:24.0845314Z         error:
2026-01-07T00:33:24.0846119Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-5969536764821210386
2026-01-07T00:33:24.0847000Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:24.0847649Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:24.0848118Z         BadRequestDetail: 
2026-01-07T00:33:24.1300337Z --- FAIL: TestAccGlobalClusterConfig_withBackup (41.20s)
```

- 2026-01-08 PASS 16 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 15 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 15 minutes
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
- 2026-01-04 PASS 16 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
