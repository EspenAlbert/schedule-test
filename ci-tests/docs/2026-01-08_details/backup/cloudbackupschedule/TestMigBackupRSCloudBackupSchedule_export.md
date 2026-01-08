# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_export Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters/test-acc-tf-c-83149678637877689 | dev | flaky_500 | 287.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 15 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 15 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 17 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 17 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 16 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 17 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 18 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8149367Z === RUN   TestMigBackupRSCloudBackupSchedule_export
2026-01-07T00:35:52.8156476Z === CONT  TestMigBackupRSCloudBackupSchedule_export
2026-01-07T00:35:52.8313470Z === NAME  TestMigBackupRSCloudBackupSchedule_export
2026-01-07T00:35:52.8314230Z     resource_cloud_backup_schedule_migration_test.go:64: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:35:52.8314690Z         
2026-01-07T00:35:52.8314948Z         Error: Error in create
2026-01-07T00:35:52.8315196Z         
2026-01-07T00:35:52.8315564Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8316264Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8316915Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8317253Z         
2026-01-07T00:35:52.8317701Z         cluster=test-acc-tf-c-83149678637877689 didn't reach desired state: IDLE,
2026-01-07T00:35:52.8318093Z         error:
2026-01-07T00:35:52.8318793Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters/test-acc-tf-c-83149678637877689
2026-01-07T00:35:52.8319598Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8320169Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8320563Z         BadRequestDetail: 
2026-01-07T00:35:52.8326069Z   
2026-01-07T00:35:52.8326535Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:35:52.8326965Z         
2026-01-07T00:35:52.8328609Z         Error: error deleting snapshot export bucket 695da928af4f6cc389e793f3 https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:35:52.8329756Z         
2026-01-07T00:35:52.8330050Z --- FAIL: TestMigBackupRSCloudBackupSchedule_export (287.05s)
```

- 2026-01-08: MISSING

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
- 2026-01-08 PASS 15 minutes
