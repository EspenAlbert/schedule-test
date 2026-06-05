# advanced_cluster_tpf_mig_from_tpf_preview/cloudbackupschedule/TestV1xMigBackupRSCloudBackupSchedule_copySettings Test Details
# Found 18 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL(x 2)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 01:25](#error-2026-05-15t0125030000) |  | dev |  | 255.10s
[2026-06-05 02:38](#error-2026-06-05t0238590000) |  | dev | flaky_client | 45.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 16 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 16 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 14 minutes
- 2026-05-14: MISSING
- 2026-05-15

### Error 2026-05-15T01:25:03+00:00
```
2026-05-15T01:25:03.8785149Z === RUN   TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-05-15T01:25:03.8786539Z     resource_cloud_backup_schedule_migration_v1x_test.go:19: Creating execution project (1): test-acc-tf-p-2402557862545394308
2026-05-15T01:25:03.8788408Z === CONT  TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-05-15T01:25:03.8800830Z    test_terraform_path=/home/runner/work/_temp/788c54e2-ec20-4130-b4e2-b3720ead7efd/terraform test_working_directory=/tmp/plugintest1003774537 test_name=TestV1xMigBackupRSCloudBackupSchedule_copySettings test_step_number=1
2026-05-15T01:25:03.8803190Z     resource_cloud_backup_schedule_migration_v1x_test.go:79: Step 1/3 error: Error running apply: exit status 1
2026-05-15T01:25:03.8804274Z         
2026-05-15T01:25:03.8804702Z         Error: Error in create
2026-05-15T01:25:03.8805123Z         
2026-05-15T01:25:03.8805825Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-15T01:25:03.8807142Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-15T01:25:03.8808367Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-15T01:25:03.8808978Z         
2026-05-15T01:25:03.8809801Z         cluster=test-acc-tf-c-7144131692295701565 didn't reach desired state: IDLE,
2026-05-15T01:25:03.8810504Z         error:
2026-05-15T01:25:03.8811781Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f5dbf5881c97de615ba/clusters/test-acc-tf-c-7144131692295701565
2026-05-15T01:25:03.8813204Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:25:03.8814123Z         BadRequestDetail: 
2026-05-15T01:25:03.8814752Z --- FAIL: TestV1xMigBackupRSCloudBackupSchedule_copySettings (255.99s)
```

- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19: MISSING
- 2026-05-20 PASS 15 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS 22 minutes
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 17 minutes
- 2026-05-26: MISSING
- 2026-05-27 PASS 45 minutes
- 2026-05-28: MISSING
- 2026-05-29 PASS 15 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 17 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 24 minutes
- 2026-06-04: MISSING
- 2026-06-05

### Error 2026-06-05T02:38:59+00:00
```
2026-06-05T02:38:59.8114064Z === RUN   TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-06-05T02:38:59.8114912Z     resource_cloud_backup_schedule_migration_v1x_test.go:19: Creating execution project (1): test-acc-tf-p-3815571457304631069
2026-06-05T02:38:59.8116062Z === CONT  TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-06-05T02:38:59.8124236Z   
2026-06-05T02:38:59.8124895Z     resource_cloud_backup_schedule_migration_v1x_test.go:79: Step 1/3 error: Error running apply: exit status 1
2026-06-05T02:38:59.8125420Z         
2026-06-05T02:38:59.8125689Z         Error: Error in create
2026-06-05T02:38:59.8125955Z         
2026-06-05T02:38:59.8126585Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-06-05T02:38:59.8127360Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-06-05T02:38:59.8128078Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-06-05T02:38:59.8128445Z         
2026-06-05T02:38:59.8128927Z         cluster=test-acc-tf-c-1915166456813435509 didn't reach desired state: IDLE,
2026-06-05T02:38:59.8129376Z         error: Get
2026-06-05T02:38:59.8130134Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220e9770de8903f194162/clusters/test-acc-tf-c-1915166456813435509":
2026-06-05T02:38:59.8130881Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-06-05T02:38:59.8131349Z --- FAIL: TestV1xMigBackupRSCloudBackupSchedule_copySettings (45.53s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 19 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20 PASS 13 minutes
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 15 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 15 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
