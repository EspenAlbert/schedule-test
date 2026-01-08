# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-4700142568830168802 | dev | flaky_500 | 36.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 minutes
  - PASS 16 minutes
- 2025-12-11 PASS 25 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 20 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 17 minutes
- 2025-12-16 PASS 20 minutes
- 2025-12-17 PASS 25 minutes
- 2025-12-18 PASS 20 minutes
- 2025-12-19 PASS 25 minutes
- 2025-12-20 PASS 16 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 23 minutes
- 2025-12-23 PASS 20 minutes
- 2025-12-24 PASS 22 minutes
- 2025-12-25 PASS 32 minutes
- 2025-12-26 PASS 21 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 20 minutes
- 2025-12-31 PASS 20 minutes
- 2026-01-01 PASS 17 minutes
- 2026-01-02 PASS 23 minutes
- 2026-01-03 PASS 17 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 23 minutes
- 2026-01-06 PASS 18 minutes
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6474734Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-01-07T00:41:24.6477485Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-01-07T00:41:24.6479236Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-01-07T00:41:24.6480109Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:33:05.148983172Z, ProjectID: 695da9b9af4f6cc389e946b2, Cluster name: test-acc-tf-c-4700142568830168802
2026-01-07T00:41:24.6559187Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-01-07T00:41:24.6560134Z     resource_test.go:178: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:41:24.6560797Z         
2026-01-07T00:41:24.6561241Z         Error: Error in create
2026-01-07T00:41:24.6561673Z         
2026-01-07T00:41:24.6562317Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6563603Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6564956Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6565564Z         
2026-01-07T00:41:24.6566380Z         cluster=test-acc-tf-c-4700142568830168802 didn't reach desired state: IDLE,
2026-01-07T00:41:24.6567105Z         error:
2026-01-07T00:41:24.6568410Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-4700142568830168802
2026-01-07T00:41:24.6569886Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6570926Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6571621Z         BadRequestDetail: 
2026-01-07T00:41:24.6581538Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (36.45s)
```

- 2026-01-08 PASS 19 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 19 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 22 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 17 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 19 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 21 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
