# advanced_cluster_tpf_mig_from_tpf_preview/cloudbackupschedule/TestV1xMigBackupRSCloudBackupSchedule_copySettings Test Details
# Found 4 TestRuns in dev, qa from 2025-12-31 to 2026-01-05 from master branch: 1 unique tests, PASS(x 3) FAIL
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-05 01:02](#error-2026-01-05t0102480000) |  | dev | flaky_client | 228.00s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 13 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 14 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T01:02:48+00:00
```
2026-01-05T01:02:48.1986662Z === RUN   TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-01-05T01:02:48.1988021Z     resource_cloud_backup_schedule_migration_v1x_test.go:20: Creating execution project (1): test-acc-tf-p-6944443104048185991
2026-01-05T01:02:48.1989828Z === CONT  TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-01-05T01:02:48.2026232Z    test_name=TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-01-05T01:02:48.2027439Z     resource_cloud_backup_schedule_migration_v1x_test.go:80: Step 1/3 error: Error running apply: exit status 1
2026-01-05T01:02:48.2028256Z         
2026-01-05T01:02:48.2028680Z         Error: Error in create
2026-01-05T01:02:48.2029096Z         
2026-01-05T01:02:48.2029709Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-05T01:02:48.2030917Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-05T01:02:48.2032082Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-05T01:02:48.2032878Z         
2026-01-05T01:02:48.2033681Z         cluster=test-acc-tf-c-4187727301380912639 didn't reach desired state: IDLE,
2026-01-05T01:02:48.2034368Z         error: Get
2026-01-05T01:02:48.2035638Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/695b0706e49bce65ea119007/clusters/test-acc-tf-c-4187727301380912639":
2026-01-05T01:02:48.2036861Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-01-05T01:02:48.2037612Z --- FAIL: TestV1xMigBackupRSCloudBackupSchedule_copySettings (228.02s)
```


## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 11 minutes
- 2026-01-05: MISSING
