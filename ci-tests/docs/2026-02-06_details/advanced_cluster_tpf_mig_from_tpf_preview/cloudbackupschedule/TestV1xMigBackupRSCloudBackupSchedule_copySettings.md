# advanced_cluster_tpf_mig_from_tpf_preview/cloudbackupschedule/TestV1xMigBackupRSCloudBackupSchedule_copySettings Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 18) FAIL(x 2)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 03:40](#error-2026-02-02t0340220000) |  | dev | timeout | 10811.05s
[2026-02-04 03:36](#error-2026-02-04t0336250000) |  | dev | timeout | 10812.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 19 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 16 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 16 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 19 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 16 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 15 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 12 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 15 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 20 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:40:22+00:00
```
2026-02-02T03:40:22.1469212Z === RUN   TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-02-02T03:40:22.1471128Z     resource_cloud_backup_schedule_migration_v1x_test.go:20: Creating execution project (1): test-acc-tf-p-4654685224084861423
2026-02-02T03:40:22.1472383Z === CONT  TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-02-02T03:40:22.1478809Z    test_name=TestV1xMigBackupRSCloudBackupSchedule_copySettings test_terraform_path=/home/runner/work/_temp/f4f344d0-0c4f-45f9-aa0e-ebb3fac5a975/terraform test_working_directory=/tmp/plugintest4230495488 test_step_number=1
2026-02-02T03:40:22.1480394Z     resource_cloud_backup_schedule_migration_v1x_test.go:80: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:22.1480914Z         
2026-02-02T03:40:22.1481178Z         Error: Error in create
2026-02-02T03:40:22.1481423Z         
2026-02-02T03:40:22.1481851Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:40:22.1482634Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:40:22.1483364Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:40:22.1483713Z         
2026-02-02T03:40:22.1484213Z         cluster=test-acc-tf-c-6117763058278559091 didn't reach desired state: IDLE,
2026-02-02T03:40:22.1484919Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-02T03:40:22.1485366Z         'CREATING', timeout: 3h0m0s)
2026-02-02T03:40:22.1485773Z --- FAIL: TestV1xMigBackupRSCloudBackupSchedule_copySettings (10811.51s)
```

- 2026-02-03: MISSING
- 2026-02-04

### Error 2026-02-04T03:36:25+00:00
```
2026-02-04T03:36:25.9765271Z === RUN   TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-02-04T03:36:25.9767924Z     resource_cloud_backup_schedule_migration_v1x_test.go:20: Creating execution project (1): test-acc-tf-p-4305251703968200892
2026-02-04T03:36:25.9769795Z === CONT  TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-02-04T03:36:25.9776888Z    test_name=TestV1xMigBackupRSCloudBackupSchedule_copySettings
2026-02-04T03:36:25.9777628Z     resource_cloud_backup_schedule_migration_v1x_test.go:80: Step 1/3 error: Error running apply: exit status 1
2026-02-04T03:36:25.9778135Z         
2026-02-04T03:36:25.9778384Z         Error: Error in create
2026-02-04T03:36:25.9778628Z         
2026-02-04T03:36:25.9778990Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-04T03:36:25.9779938Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-04T03:36:25.9780639Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-04T03:36:25.9780996Z         
2026-02-04T03:36:25.9781455Z         cluster=test-acc-tf-c-7978352519835383032 didn't reach desired state: IDLE,
2026-02-04T03:36:25.9782085Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-04T03:36:25.9782523Z         'CREATING', timeout: 3h0m0s)
2026-02-04T03:36:25.9782925Z --- FAIL: TestV1xMigBackupRSCloudBackupSchedule_copySettings (10812.04s)
```

- 2026-02-05: MISSING
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
- 2026-01-18 PASS 12 minutes
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
- 2026-02-01 PASS 15 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
