# backup/cloudbackupschedule/TestAccBackupRSCloudBackupScheduleImport_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters | dev | flaky_500 | 25.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 14 minutes
- 2025-12-12 PASS 12 minutes
- 2025-12-13 PASS 15 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 minutes
- 2025-12-16 PASS 11 minutes
- 2025-12-17 PASS 14 minutes
- 2025-12-18 PASS 16 minutes
- 2025-12-19 PASS 18 minutes
- 2025-12-20 PASS 17 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 minutes
- 2025-12-23 PASS 17 minutes
- 2025-12-24 PASS 14 minutes
- 2025-12-25 PASS 23 minutes
- 2025-12-26 PASS 13 minutes
- 2025-12-27 PASS 15 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 15 minutes
- 2025-12-31 PASS 17 minutes
- 2026-01-01 PASS 14 minutes
- 2026-01-02 PASS 14 minutes
- 2026-01-03 PASS 14 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 minutes
- 2026-01-06 PASS 14 minutes
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8153565Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2026-01-07T00:35:52.8157226Z === CONT  TestAccBackupRSCloudBackupScheduleImport_basic
2026-01-07T00:35:52.8182516Z === NAME  TestAccBackupRSCloudBackupScheduleImport_basic
2026-01-07T00:35:52.8183413Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:00.567539113Z, ProjectID: 695da928af4f6cc389e793f3, Cluster name: test-acc-tf-c-6854248447013963662
2026-01-07T00:35:52.8196232Z   
2026-01-07T00:35:52.8196702Z     resource_cloud_backup_schedule_test.go:355: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:52.8197142Z         
2026-01-07T00:35:52.8197398Z         Error: Error in create
2026-01-07T00:35:52.8197651Z         
2026-01-07T00:35:52.8198014Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8198723Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8199379Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8199719Z         
2026-01-07T00:35:52.8200138Z         cluster name: test-acc-tf-c-6854248447013963662, API error details:
2026-01-07T00:35:52.8200813Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters
2026-01-07T00:35:52.8201505Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8202093Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8202485Z         BadRequestDetail: 
2026-01-07T00:35:52.8202847Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (25.87s)
```

- 2026-01-08 PASS 14 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 11 minutes
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
- 2025-12-28 PASS 11 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 10 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
