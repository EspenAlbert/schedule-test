# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_export Test Details
# Found 21 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 19 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 16 minutes
- 2026-02-12: MISSING
- 2026-02-13 PASS 18 minutes
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 35 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 19 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 22 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 19 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 17 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02 PASS 17 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 19 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 25 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-17 15:39](#error-2026-02-17t1539260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/699487cfc64c45bf0bba544d/clusters/test-acc-tf-c-6710316418903725213 | qa | flaky_500 | 495.09s

### Timeline
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 17 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 19 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 8 minutes

### Error 2026-02-17T15:39:26+00:00
```
2026-02-17T15:39:26.2891123Z === RUN   TestMigBackupRSCloudBackupSchedule_export
2026-02-17T15:39:26.2905961Z === CONT  TestMigBackupRSCloudBackupSchedule_export
2026-02-17T15:39:26.2951369Z === NAME  TestMigBackupRSCloudBackupSchedule_export
2026-02-17T15:39:26.2952588Z     resource_cloud_backup_schedule_migration_test.go:64: Step 1/3 error: Error running apply: exit status 1
2026-02-17T15:39:26.2953501Z         
2026-02-17T15:39:26.2953940Z         Error: Error in create
2026-02-17T15:39:26.2954395Z         
2026-02-17T15:39:26.2955061Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-17T15:39:26.2956567Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-17T15:39:26.2957897Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-17T15:39:26.2958562Z         
2026-02-17T15:39:26.2959372Z         cluster=test-acc-tf-c-6710316418903725213 didn't reach desired state: IDLE,
2026-02-17T15:39:26.2960111Z         error:
2026-02-17T15:39:26.2961360Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/699487cfc64c45bf0bba544d/clusters/test-acc-tf-c-6710316418903725213
2026-02-17T15:39:26.2962931Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-17T15:39:26.2964030Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-17T15:39:26.2965068Z         BadRequestDetail: 
2026-02-17T15:39:26.2965668Z --- FAIL: TestMigBackupRSCloudBackupSchedule_export (495.92s)
```

  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 20 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 15 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
