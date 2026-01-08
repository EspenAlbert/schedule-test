# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-8953869630821099371 | dev | flaky_500 | 95.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 24 minutes
  - PASS 18 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 25 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 19 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 26 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 25 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 24 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 24 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 21 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 23 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 22 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 24 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6471511Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-01-07T00:41:24.6472193Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-881409242784068764
2026-01-07T00:41:24.6477034Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-01-07T00:41:24.6633729Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-01-07T00:41:24.6634952Z     resource_migration_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:41:24.6635661Z         
2026-01-07T00:41:24.6636118Z         Error: Error in create
2026-01-07T00:41:24.6636565Z         
2026-01-07T00:41:24.6637212Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6638489Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6639678Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6640277Z         
2026-01-07T00:41:24.6641105Z         cluster=test-acc-tf-c-8953869630821099371 didn't reach desired state: IDLE,
2026-01-07T00:41:24.6641817Z         error:
2026-01-07T00:41:24.6643108Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b9af4f6cc389e946b2/clusters/test-acc-tf-c-8953869630821099371
2026-01-07T00:41:24.6644709Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6645765Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6646460Z         BadRequestDetail: 
2026-01-07T00:41:24.6647171Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (95.08s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09 PASS 18 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 23 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 19 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 18 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 19 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
