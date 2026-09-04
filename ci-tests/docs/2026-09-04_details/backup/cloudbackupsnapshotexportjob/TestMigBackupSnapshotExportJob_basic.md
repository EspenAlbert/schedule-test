# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 21 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 21 minutes
- 2026-08-11: MISSING
- 2026-08-12 PASS 22 minutes
- 2026-08-13: MISSING
- 2026-08-14 PASS 26 minutes
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 21 minutes
- 2026-08-18: MISSING
- 2026-08-19 PASS 22 minutes
- 2026-08-20: MISSING
- 2026-08-21 PASS 21 minutes
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 20 minutes
- 2026-08-25: MISSING
- 2026-08-26 PASS 21 minutes
- 2026-08-27: MISSING
- 2026-08-28 PASS 32 minutes
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 39 minutes
- 2026-09-01: MISSING
- 2026-09-02 PASS 22 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 31 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 08:00](#error-2026-08-13t0800120000) |  | qa | flaky_client | 177.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 23 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T08:00:12+00:00
```
2026-08-13T08:00:12.8114771Z === RUN   TestMigBackupSnapshotExportJob_basic
2026-08-13T08:00:12.8116095Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project (1): test-acc-tf-p-513452492538290501
2026-08-13T08:00:12.8125460Z   
2026-08-13T08:00:12.8126143Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-08-13T08:00:12.8126709Z         
2026-08-13T08:00:12.8127010Z         Error: Error in create
2026-08-13T08:00:12.8127514Z         
2026-08-13T08:00:12.8136027Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-08-13T08:00:12.8136922Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-08-13T08:00:12.8137938Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-08-13T08:00:12.8138348Z         
2026-08-13T08:00:12.8138876Z         cluster=test-acc-tf-c-5873862742347327889 didn't reach desired state: IDLE,
2026-08-13T08:00:12.8139344Z         error: Get
2026-08-13T08:00:12.8140157Z         "https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a7d7387aa8ab270caa693ac/clusters/test-acc-tf-c-5873862742347327889":
2026-08-13T08:00:12.8140922Z         dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2026-08-13T08:00:12.8141368Z --- FAIL: TestMigBackupSnapshotExportJob_basic (177.06s)
```

- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 22 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 23 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 21 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 23 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
