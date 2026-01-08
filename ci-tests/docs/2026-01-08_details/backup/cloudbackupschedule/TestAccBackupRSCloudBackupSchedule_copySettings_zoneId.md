# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_copySettings_zoneId Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:35](#error-2026-01-07t0035520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters | dev | flaky_500 | 30.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 18 minutes
  - PASS 12 minutes
- 2025-12-11 PASS 13 minutes
- 2025-12-12 PASS 15 minutes
- 2025-12-13 PASS 13 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 minutes
- 2025-12-16 PASS 12 minutes
- 2025-12-17 PASS 13 minutes
- 2025-12-18 PASS 18 minutes
- 2025-12-19 PASS 16 minutes
- 2025-12-20 PASS 14 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 minutes
- 2025-12-23 PASS 16 minutes
- 2025-12-24 PASS 17 minutes
- 2025-12-25 PASS 21 minutes
- 2025-12-26 PASS 13 minutes
- 2025-12-27 PASS 12 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 minutes
- 2025-12-31 PASS 14 minutes
- 2026-01-01 PASS 12 minutes
- 2026-01-02 PASS 18 minutes
- 2026-01-03 PASS 16 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 14 minutes
- 2026-01-06 PASS 15 minutes
- 2026-01-07

### Error 2026-01-07T00:35:52+00:00
```
2026-01-07T00:35:52.8152666Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-01-07T00:35:52.8157655Z === CONT  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-01-07T00:35:52.8203318Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-01-07T00:35:52.8204462Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:05.570277505Z, ProjectID: 695da928af4f6cc389e793f3, Cluster name: test-acc-tf-c-8424508306510917285
2026-01-07T00:35:52.8217117Z   
2026-01-07T00:35:52.8217589Z     resource_cloud_backup_schedule_test.go:325: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:52.8218032Z         
2026-01-07T00:35:52.8218286Z         Error: Error in create
2026-01-07T00:35:52.8218536Z         
2026-01-07T00:35:52.8218902Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:52.8219612Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:52.8220271Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:52.8220606Z         
2026-01-07T00:35:52.8221028Z         cluster name: test-acc-tf-c-8424508306510917285, API error details:
2026-01-07T00:35:52.8221697Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e793f3/clusters
2026-01-07T00:35:52.8222387Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:52.8222969Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:52.8223362Z         BadRequestDetail: 
2026-01-07T00:35:52.8223751Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (30.94s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 12 minutes
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
