# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters | dev | flaky_500 | 20.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-12-11 PASS 14 minutes
- 2025-12-12 PASS 15 minutes
- 2025-12-13 PASS 13 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 minutes
- 2025-12-16 PASS 14 minutes
- 2025-12-17 PASS 15 minutes
- 2025-12-18 PASS 20 minutes
- 2025-12-19 PASS 15 minutes
- 2025-12-20 PASS 15 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 16 minutes
- 2025-12-23 PASS 15 minutes
- 2025-12-24 PASS 18 minutes
- 2025-12-25 PASS 21 minutes
- 2025-12-26 PASS 13 minutes
- 2025-12-27 PASS 16 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 minutes
- 2025-12-31 PASS 16 minutes
- 2026-01-01 PASS 13 minutes
- 2026-01-02 PASS 16 minutes
- 2026-01-03 PASS 12 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 13 minutes
- 2026-01-06 PASS 18 minutes
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8150302Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-01-07T00:35:52.8156104Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2026-01-07T00:35:52.8161539Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2026-01-07T00:35:52.8162369Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:55.564198877Z, ProjectID: 695da928af4f6cc389e793f3, Cluster name: test-acc-tf-c-127406117536210560
2026-01-07T00:35:52.8175410Z   
2026-01-07T00:35:52.8175889Z     resource_cloud_backup_schedule_test.go:28: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:35:52.8176350Z         
2026-01-07T00:35:52.8176629Z         Error: Error in create
2026-01-07T00:35:52.8176881Z         
2026-01-07T00:35:52.8177250Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8177958Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8178613Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8178956Z         
2026-01-07T00:35:52.8179366Z         cluster name: test-acc-tf-c-127406117536210560, API error details:
2026-01-07T00:35:52.8180040Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters
2026-01-07T00:35:52.8180743Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8181333Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8181725Z         BadRequestDetail: 
2026-01-07T00:35:52.8182064Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (20.89s)
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
- 2025-12-21 PASS 15 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 11 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
