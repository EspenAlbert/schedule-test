# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_onePolicy Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:56](#error-2026-02-24t0056260000) |  | dev | flaky_500 | 1162.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 17 minutes
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10 PASS 17 minutes
- 2026-02-11 PASS 16 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 16 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 19 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 21 minutes
- 2026-02-19 PASS 22 minutes
- 2026-02-20 PASS 19 minutes
- 2026-02-21 PASS 17 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 18 minutes
- 2026-02-24

### Error 2026-02-24T00:56:26+00:00
```
2026-02-24T00:56:26.6812367Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-02-24T00:56:26.6821785Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-02-24T00:56:26.6871653Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-02-24T00:56:26.6873482Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:14.142669351Z, ProjectID: 699cf2a28dfec41eaa847838, Cluster name: test-acc-tf-c-5066905161278478157
2026-02-24T00:56:26.6959047Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-02-24T00:56:26.6960176Z     resource_cloud_backup_schedule_test.go:200: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:26.6960995Z         
2026-02-24T00:56:26.6962337Z         Error: error creating a Cloud Backup Schedule: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:26.6963352Z         
2026-02-24T00:56:26.6964080Z           with mongodbatlas_cloud_backup_schedule.schedule_test,
2026-02-24T00:56:26.6965697Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_schedule" "schedule_test":
2026-02-24T00:56:26.6967056Z           37: 		resource "mongodbatlas_cloud_backup_schedule" "schedule_test" {
2026-02-24T00:56:26.6967719Z         
2026-02-24T00:56:26.6984458Z    test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform
2026-02-24T00:56:26.6997854Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (1162.18s)
```

- 2026-02-25 PASS 19 minutes
- 2026-02-26 PASS 18 minutes
- 2026-02-27 PASS 19 minutes
- 2026-02-28 PASS 17 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 16 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 16 minutes
- 2026-03-05 PASS 25 minutes
- 2026-03-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 17 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 15 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 15 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 16 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 16 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
