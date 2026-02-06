# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10809.02s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters | dev | out_of_capacity | 8.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 16 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 21 minutes
- 2026-01-14 PASS 13 minutes
- 2026-01-15 PASS 20 minutes
- 2026-01-16 PASS 16 minutes
- 2026-01-17 PASS 17 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 19 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 17 minutes
- 2026-01-23 PASS 18 minutes
- 2026-01-24 PASS 14 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 19 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29 PASS 22 minutes
- 2026-01-30 PASS 22 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6477873Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-01-31T03:36:47.6479491Z     resource_cloud_backup_schedule_test.go:25: Creating execution project (1): test-acc-tf-p-3878931415885054757
2026-01-31T03:36:47.6489584Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2026-01-31T03:36:47.6494987Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2026-01-31T03:36:47.6496789Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:19.886900582Z, ProjectID: 697d4e3f7d00588dcf9eccf6, Cluster name: test-acc-tf-c-5605347908340170562
2026-01-31T03:36:47.6550242Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2026-01-31T03:36:47.6550876Z     resource_cloud_backup_schedule_test.go:28: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:36:47.6551346Z         
2026-01-31T03:36:47.6551614Z         Error: Error in create
2026-01-31T03:36:47.6551869Z         
2026-01-31T03:36:47.6552249Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6553184Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6553903Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6554274Z         
2026-01-31T03:36:47.6554751Z         cluster=test-acc-tf-c-5605347908340170562 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6555251Z         error: context deadline exceeded
2026-01-31T03:36:47.6555637Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (10809.21s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9649024Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-02-03T00:40:22.9649963Z     resource_cloud_backup_schedule_test.go:25: Creating execution project (1): test-acc-tf-p-2653710221435339728
2026-02-03T00:40:22.9659909Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2026-02-03T00:40:22.9664324Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2026-02-03T00:40:22.9665993Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:25.182982772Z, ProjectID: 698143b5e3c7fce2317dd5f6, Cluster name: test-acc-tf-c-1798141762680132859
2026-02-03T00:40:22.9679705Z    test_terraform_path=/home/runner/work/_temp/94eb3854-7c8a-40ca-953b-807f8c063dbc/terraform test_working_directory=/tmp/plugintest2933503378 test_name=TestAccBackupRSCloudBackupSchedule_basic
2026-02-03T00:40:22.9680820Z     resource_cloud_backup_schedule_test.go:28: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:40:22.9681288Z         
2026-02-03T00:40:22.9681560Z         Error: Error in create
2026-02-03T00:40:22.9681833Z         
2026-02-03T00:40:22.9682216Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9682971Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9683683Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9684044Z         
2026-02-03T00:40:22.9684725Z         cluster name: test-acc-tf-c-1798141762680132859, API error details:
2026-02-03T00:40:22.9685476Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters
2026-02-03T00:40:22.9686244Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9686934Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9687463Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9687867Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (8.87s)
```

- 2026-02-04 PASS 28 minutes
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
- 2026-01-25 PASS 13 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 17 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
