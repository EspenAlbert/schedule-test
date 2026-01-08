# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters/test-acc-tf-c-6162398522968835155 | dev | flaky_500 | 65.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 14 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 15 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 17 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 17 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 15 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 14 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 17 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 14 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8146245Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2026-01-07T00:35:52.8147635Z     resource_cloud_backup_schedule_migration_test.go:19: Creating execution project (1): test-acc-tf-p-2079534791355257895
2026-01-07T00:35:52.8155352Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2026-01-07T00:35:52.8256476Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2026-01-07T00:35:52.8257109Z     resource_cloud_backup_schedule_migration_test.go:28: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:52.8257569Z         
2026-01-07T00:35:52.8257832Z         Error: Error in create
2026-01-07T00:35:52.8258081Z         
2026-01-07T00:35:52.8258446Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8259144Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8259926Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8260268Z         
2026-01-07T00:35:52.8260724Z         cluster=test-acc-tf-c-6162398522968835155 didn't reach desired state: IDLE,
2026-01-07T00:35:52.8261131Z         error:
2026-01-07T00:35:52.8261960Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters/test-acc-tf-c-6162398522968835155
2026-01-07T00:35:52.8262777Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8263352Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8263746Z         BadRequestDetail: 
2026-01-07T00:35:52.8264179Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (65.90s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 14 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 11 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 12 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
