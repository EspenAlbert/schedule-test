# backup/cloudbackupschedule/TestAccBackupRSCloudBackupScheduleImport_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10825.09s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters | dev | out_of_capacity | 15.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 14 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 17 minutes
- 2026-01-13 PASS 23 minutes
- 2026-01-14 PASS 16 minutes
- 2026-01-15 PASS 20 minutes
- 2026-01-16 PASS 16 minutes
- 2026-01-17 PASS 15 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 14 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 15 minutes
- 2026-01-23 PASS 18 minutes
- 2026-01-24 PASS 16 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27 PASS 16 minutes
- 2026-01-28 PASS 17 minutes
- 2026-01-29 PASS 20 minutes
- 2026-01-30 PASS 25 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6486259Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2026-01-31T03:36:47.6492273Z === CONT  TestAccBackupRSCloudBackupScheduleImport_basic
2026-01-31T03:36:47.6532005Z === NAME  TestAccBackupRSCloudBackupScheduleImport_basic
2026-01-31T03:36:47.6533992Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:39.894312445Z, ProjectID: 697d4e3f7d00588dcf9eccf6, Cluster name: test-acc-tf-c-8234166673866000369
2026-01-31T03:36:47.6599856Z === NAME  TestAccBackupRSCloudBackupScheduleImport_basic
2026-01-31T03:36:47.6600960Z     resource_cloud_backup_schedule_test.go:355: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:47.6601853Z         
2026-01-31T03:36:47.6602121Z         Error: Error in create
2026-01-31T03:36:47.6602385Z         
2026-01-31T03:36:47.6602983Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6603755Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6604481Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6604851Z         
2026-01-31T03:36:47.6605329Z         cluster=test-acc-tf-c-8234166673866000369 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6605828Z         error: context deadline exceeded
2026-01-31T03:36:47.6606248Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (10825.91s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9656935Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2026-02-03T00:40:22.9662212Z === CONT  TestAccBackupRSCloudBackupScheduleImport_basic
2026-02-03T00:40:22.9759453Z === NAME  TestAccBackupRSCloudBackupScheduleImport_basic
2026-02-03T00:40:22.9760439Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:35.191469957Z, ProjectID: 698143b5e3c7fce2317dd5f6, Cluster name: test-acc-tf-c-7084916029677303978
2026-02-03T00:40:22.9774252Z   
2026-02-03T00:40:22.9774859Z     resource_cloud_backup_schedule_test.go:355: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:22.9775449Z         
2026-02-03T00:40:22.9775722Z         Error: Error in create
2026-02-03T00:40:22.9775986Z         
2026-02-03T00:40:22.9776366Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9777117Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9777818Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9778175Z         
2026-02-03T00:40:22.9778609Z         cluster name: test-acc-tf-c-7084916029677303978, API error details:
2026-02-03T00:40:22.9779312Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters
2026-02-03T00:40:22.9780030Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9780708Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9781244Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9781674Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (15.79s)
```

- 2026-02-04 PASS 29 minutes
- 2026-02-05 PASS 17 minutes
- 2026-02-06 PASS 17 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 15 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 13 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 12 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 15 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 16 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
