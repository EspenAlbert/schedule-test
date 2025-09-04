# backup/cloudbackupschedule/TestAccBackupRSCloudBackupScheduleImport_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 03:31](#error-2025-09-01t0331330000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68b4e91546ef690a79d6bd03/cloudProviderAccess/68b4e9337af6b0372e944701 | dev | timeout | 10826.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 14 minutes
- 2025-08-07 PASS 23 minutes
- 2025-08-08 PASS 15 minutes
- 2025-08-09 PASS 20 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 16 minutes
- 2025-08-15 PASS 13 minutes
- 2025-08-16 PASS 40 minutes
- 2025-08-17 PASS 30 minutes
- 2025-08-18 PASS 14 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - PASS 16 minutes
  - PASS 20 minutes
- 2025-08-21 PASS 19 minutes
- 2025-08-22 PASS 11 minutes
- 2025-08-23 PASS 21 minutes
- 2025-08-24 PASS 11 minutes
- 2025-08-25 PASS 12 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 22 minutes
- 2025-08-28 PASS 17 minutes
- 2025-08-29 PASS 25 minutes
- 2025-08-30 PASS 15 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2910056Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2025-09-01T03:31:33.2913794Z === CONT  TestAccBackupRSCloudBackupScheduleImport_basic
2025-09-01T03:31:33.2920391Z === NAME  TestAccBackupRSCloudBackupScheduleImport_basic
2025-09-01T03:31:33.2921462Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:39.802195469Z, ProjectID: 68b4e91546ef690a79d6bd03, Cluster name: test-acc-tf-c-5248867112398253975
2025-09-01T03:31:33.2923701Z 2025/09/01 00:30:43 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e91546ef690a79d6bd03/cloudProviderAccess/68b4e9337af6b0372e944701 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2591566588238198457). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2591566588238198457], BadRequestDetail:  
2025-09-01T03:31:33.2925665Z 2025/09/01 00:30:43 retrying
2025-09-01T03:31:33.2985487Z === NAME  TestAccBackupRSCloudBackupScheduleImport_basic
2025-09-01T03:31:33.2986088Z     resource_cloud_backup_schedule_test.go:431: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:33.2986649Z         
2025-09-01T03:31:33.2987365Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.2987905Z         
2025-09-01T03:31:33.2988259Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.2988952Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.2989593Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.2990003Z         
2025-09-01T03:31:33.2990348Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (10826.03s)
```

  - PASS an hour
  - PASS an hour
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-09-02 PASS 19 minutes
- 2025-09-03 PASS 19 minutes
- 2025-09-04 PASS 19 minutes