# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters | dev | flaky_500 | 15.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-12-11 PASS 22 minutes
- 2025-12-12 PASS 23 minutes
- 2025-12-13 PASS 17 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 16 minutes
- 2025-12-16 PASS 19 minutes
- 2025-12-17 PASS 22 minutes
- 2025-12-18 PASS 19 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 17 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 21 minutes
- 2025-12-23 PASS 15 minutes
- 2025-12-24 PASS 21 minutes
- 2025-12-25 PASS 30 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 15 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 16 minutes
- 2025-12-31 PASS 20 minutes
- 2026-01-01 PASS 17 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 21 minutes
- 2026-01-06 PASS 15 minutes
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6476259Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-01-07T00:41:24.6478199Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-01-07T00:41:24.6482257Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-01-07T00:41:24.6483090Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:33:15.156022994Z, ProjectID: 695da9b9af4f6cc389e946b2, Cluster name: test-acc-tf-c-6776939988707308144
2026-01-07T00:41:24.6495858Z   
2026-01-07T00:41:24.6496252Z     resource_test.go:536: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:41:24.6496616Z         
2026-01-07T00:41:24.6496878Z         Error: Error in create
2026-01-07T00:41:24.6497126Z         
2026-01-07T00:41:24.6497496Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6498202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6498861Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6499196Z         
2026-01-07T00:41:24.6499616Z         cluster name: test-acc-tf-c-6776939988707308144, API error details:
2026-01-07T00:41:24.6500287Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters
2026-01-07T00:41:24.6500994Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6501580Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6501978Z         BadRequestDetail: 
2026-01-07T00:41:24.6502319Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (15.94s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 15 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 21 minutes
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
- 2026-01-04 PASS 18 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
