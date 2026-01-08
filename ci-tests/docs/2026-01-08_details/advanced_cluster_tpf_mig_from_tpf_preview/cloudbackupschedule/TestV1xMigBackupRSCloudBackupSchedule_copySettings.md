# advanced_cluster_tpf_mig_from_tpf_preview/cloudbackupschedule/TestV1xMigBackupRSCloudBackupSchedule_copySettings Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL(x 2)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-05 01:02](#error-2026-01-05t0102480000) |  | dev | flaky_client | 228.00s
[2026-01-07 00:34](#error-2026-01-07t0034240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932d59b8466ea7255c3/clusters/test-acc-tf-c-2951319036829133497 | dev | flaky_500 | 101.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 16 minutes
  - PASS 11 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 13 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 13 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 18 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 18 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 15 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 14 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
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

- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:34:24+00:00
```
2026-01-07T00:34:24.3132942Z === RUN   TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-01-07T00:34:24.3133779Z     resource_cloud_backup_schedule_migration_v1x_test.go:20: Creating execution project (1): test-acc-tf-p-5114648708198379653
2026-01-07T00:34:24.3134958Z === CONT  TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-01-07T00:34:24.3143952Z    test_name=TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-01-07T00:34:24.3144732Z     resource_cloud_backup_schedule_migration_v1x_test.go:80: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:34:24.3145486Z         
2026-01-07T00:34:24.3145996Z         Error: Error in create
2026-01-07T00:34:24.3146369Z         
2026-01-07T00:34:24.3146728Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:34:24.3147565Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:34:24.3148345Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:34:24.3148680Z         
2026-01-07T00:34:24.3149123Z         cluster=test-acc-tf-c-2951319036829133497 didn't reach desired state: IDLE,
2026-01-07T00:34:24.3149632Z         error:
2026-01-07T00:34:24.3150344Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932d59b8466ea7255c3/clusters/test-acc-tf-c-2951319036829133497
2026-01-07T00:34:24.3151189Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:24.3151878Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:24.3152275Z         BadRequestDetail: 
2026-01-07T00:34:24.3152645Z --- FAIL: TestV1xMigBackupRSCloudBackupSchedule_copySettings (101.69s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09 PASS 12 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 14 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 12 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 12 minutes
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
