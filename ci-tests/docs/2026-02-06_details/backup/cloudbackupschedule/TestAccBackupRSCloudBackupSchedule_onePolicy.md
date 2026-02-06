# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_onePolicy Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10820.09s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters | dev | out_of_capacity | 26.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 15 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 15 minutes
- 2026-01-13 PASS 23 minutes
- 2026-01-14 PASS 18 minutes
- 2026-01-15 PASS 19 minutes
- 2026-01-16 PASS 19 minutes
- 2026-01-17 PASS 16 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 16 minutes
- 2026-01-23 PASS 18 minutes
- 2026-01-24 PASS 14 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27 PASS 15 minutes
- 2026-01-28 PASS 14 minutes
- 2026-01-29 PASS 19 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6483508Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-01-31T03:36:47.6493394Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-01-31T03:36:47.6528922Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-01-31T03:36:47.6530495Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:34.89099459Z, ProjectID: 697d4e3f7d00588dcf9eccf6, Cluster name: test-acc-tf-c-929608260184904640
2026-01-31T03:36:47.6581481Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-01-31T03:36:47.6582115Z     resource_cloud_backup_schedule_test.go:200: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:47.6582580Z         
2026-01-31T03:36:47.6582990Z         Error: Error in create
2026-01-31T03:36:47.6583247Z         
2026-01-31T03:36:47.6584099Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6585871Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6586667Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6587048Z         
2026-01-31T03:36:47.6587529Z         cluster=test-acc-tf-c-929608260184904640 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6588035Z         error: context deadline exceeded
2026-01-31T03:36:47.6588455Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (10820.91s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9653312Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-02-03T00:40:22.9662952Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-02-03T00:40:22.9804919Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-02-03T00:40:22.9805833Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:45.198578871Z, ProjectID: 698143b5e3c7fce2317dd5f6, Cluster name: test-acc-tf-c-812115879959321659
2026-02-03T00:40:22.9819328Z   
2026-02-03T00:40:22.9819821Z     resource_cloud_backup_schedule_test.go:200: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:22.9820283Z         
2026-02-03T00:40:22.9820546Z         Error: Error in create
2026-02-03T00:40:22.9820801Z         
2026-02-03T00:40:22.9821179Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9821922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9822627Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9822983Z         
2026-02-03T00:40:22.9823409Z         cluster name: test-acc-tf-c-812115879959321659, API error details:
2026-02-03T00:40:22.9824107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters
2026-02-03T00:40:22.9825044Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9825726Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9826249Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9826657Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (26.25s)
```

- 2026-02-04 PASS 28 minutes
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 17 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 13 minutes
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
- 2026-01-22 PASS 13 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 14 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
