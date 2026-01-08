# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters/test-acc-tf-c-3536971326167203996 | dev | flaky_500 | 71.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-12-11 PASS 11 minutes
- 2025-12-12 PASS 12 minutes
- 2025-12-13 PASS 13 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 minutes
- 2025-12-16 PASS 13 minutes
- 2025-12-17 PASS 15 minutes
- 2025-12-18 PASS 16 minutes
- 2025-12-19 PASS 13 minutes
- 2025-12-20 PASS 14 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 minutes
- 2025-12-23 PASS 12 minutes
- 2025-12-24 PASS 14 minutes
- 2025-12-25 PASS 23 minutes
- 2025-12-26 PASS 12 minutes
- 2025-12-27 PASS 13 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 minutes
- 2025-12-31 PASS 15 minutes
- 2026-01-01 PASS 11 minutes
- 2026-01-02 PASS 15 minutes
- 2026-01-03 PASS 13 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 13 minutes
- 2026-01-06 PASS 12 minutes
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8154632Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-01-07T00:35:52.8156837Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-01-07T00:35:52.8158434Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-01-07T00:35:52.8159305Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:45.560151186Z, ProjectID: 695da928af4f6cc389e793f3, Cluster name: test-acc-tf-c-3536971326167203996
2026-01-07T00:35:52.8277144Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-01-07T00:35:52.8277765Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:35:52.8278190Z         
2026-01-07T00:35:52.8278447Z         Error: Error in create
2026-01-07T00:35:52.8278697Z         
2026-01-07T00:35:52.8279062Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8279759Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8280420Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8280759Z         
2026-01-07T00:35:52.8281219Z         cluster=test-acc-tf-c-3536971326167203996 didn't reach desired state: IDLE,
2026-01-07T00:35:52.8281617Z         error:
2026-01-07T00:35:52.8282331Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters/test-acc-tf-c-3536971326167203996
2026-01-07T00:35:52.8283133Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8283929Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8284325Z         BadRequestDetail: 
2026-01-07T00:35:52.8284768Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (71.60s)
```

- 2026-01-08 PASS 14 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
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
