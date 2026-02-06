# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_copySettings_zoneId Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10815.09s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters | dev | out_of_capacity | 20.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 20 minutes
- 2026-01-10 PASS 13 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 14 minutes
- 2026-01-13 PASS 23 minutes
- 2026-01-14 PASS 16 minutes
- 2026-01-15 PASS 18 minutes
- 2026-01-16 PASS 14 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 16 minutes
- 2026-01-22 PASS 16 minutes
- 2026-01-23 PASS 14 minutes
- 2026-01-24 PASS 14 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27 PASS 15 minutes
- 2026-01-28 PASS 17 minutes
- 2026-01-29 PASS 18 minutes
- 2026-01-30 PASS 22 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6484516Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-01-31T03:36:47.6490504Z === CONT  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-01-31T03:36:47.6527189Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-01-31T03:36:47.6528159Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:29.890782206Z, ProjectID: 697d4e3f7d00588dcf9eccf6, Cluster name: test-acc-tf-c-1406034380686456406
2026-01-31T03:36:47.6565995Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-01-31T03:36:47.6566778Z     resource_cloud_backup_schedule_test.go:325: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:47.6567251Z         
2026-01-31T03:36:47.6567508Z         Error: Error in create
2026-01-31T03:36:47.6567765Z         
2026-01-31T03:36:47.6568139Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6568888Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6569589Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6569952Z         
2026-01-31T03:36:47.6570421Z         cluster=test-acc-tf-c-1406034380686456406 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6570915Z         error: context deadline exceeded
2026-01-31T03:36:47.6571351Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (10815.94s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9655122Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-02-03T00:40:22.9661394Z === CONT  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-02-03T00:40:22.9782172Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-02-03T00:40:22.9783119Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:40.195143326Z, ProjectID: 698143b5e3c7fce2317dd5f6, Cluster name: test-acc-tf-c-4213465479364471623
2026-02-03T00:40:22.9796819Z    test_working_directory=/tmp/plugintest220200193
2026-02-03T00:40:22.9797420Z     resource_cloud_backup_schedule_test.go:325: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:22.9797884Z         
2026-02-03T00:40:22.9798146Z         Error: Error in create
2026-02-03T00:40:22.9798407Z         
2026-02-03T00:40:22.9798787Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9799546Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9800379Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9800761Z         
2026-02-03T00:40:22.9801194Z         cluster name: test-acc-tf-c-4213465479364471623, API error details:
2026-02-03T00:40:22.9801894Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters
2026-02-03T00:40:22.9802614Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9803293Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9803818Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9804266Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (20.85s)
```

- 2026-02-04 PASS 2 hours
- 2026-02-05 PASS 2 hours
- 2026-02-06 PASS 18 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 12 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 14 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 13 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 13 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 15 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
