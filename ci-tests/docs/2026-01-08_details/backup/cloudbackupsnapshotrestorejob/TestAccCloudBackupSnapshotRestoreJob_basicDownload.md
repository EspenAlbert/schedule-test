# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:41](#error-2026-01-07t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da9b1d59b8466ea738345/clusters | dev | flaky_500 | 5.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 26 minutes
  - PASS 22 minutes
- 2025-12-11 PASS 22 minutes
- 2025-12-12 PASS 25 minutes
- 2025-12-13 PASS 22 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 minutes
- 2025-12-16 PASS 21 minutes
- 2025-12-17 PASS 24 minutes
- 2025-12-18 PASS 22 minutes
- 2025-12-19 PASS 24 minutes
- 2025-12-20 PASS 21 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 28 minutes
- 2025-12-23 PASS 20 minutes
- 2025-12-24 PASS 27 minutes
- 2025-12-25 PASS 29 minutes
- 2025-12-26 PASS 22 minutes
- 2025-12-27 PASS 20 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 22 minutes
- 2025-12-31 PASS 24 minutes
- 2026-01-01 PASS 18 minutes
- 2026-01-02 PASS 23 minutes
- 2026-01-03 PASS 21 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 26 minutes
- 2026-01-06 PASS 22 minutes
- 2026-01-07

### Error 2026-01-07T00:41:24+00:00
```
2026-01-07T00:41:24.6387461Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-01-07T00:41:24.6389659Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-01-07T00:41:24.6419422Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-01-07T00:41:24.6421112Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:55.986333145Z, ProjectID: 695da9b1d59b8466ea738345, Cluster name: test-acc-tf-c-3457949383448685993
2026-01-07T00:41:24.6435155Z   
2026-01-07T00:41:24.6435685Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:41:24.6436151Z         
2026-01-07T00:41:24.6436420Z         Error: Error in create
2026-01-07T00:41:24.6436675Z         
2026-01-07T00:41:24.6437055Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:41:24.6437761Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:41:24.6438426Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:41:24.6438762Z         
2026-01-07T00:41:24.6439186Z         cluster name: test-acc-tf-c-3457949383448685993, API error details:
2026-01-07T00:41:24.6439860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da9b1d59b8466ea738345/clusters
2026-01-07T00:41:24.6440553Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:41:24.6441138Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:41:24.6441722Z         BadRequestDetail: 
2026-01-07T00:41:24.6442107Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (5.95s)
```

- 2026-01-08 PASS 23 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 20 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 25 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 20 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
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
- 2026-01-08 PASS 19 minutes
