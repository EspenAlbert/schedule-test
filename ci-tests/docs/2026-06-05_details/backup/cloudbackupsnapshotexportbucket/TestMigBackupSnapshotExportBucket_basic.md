# backup/cloudbackupsnapshotexportbucket/TestMigBackupSnapshotExportBucket_basic Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-27 02:09](#error-2026-05-27t0209270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a16429ee9f4601a99027696/clusters | dev | flaky_500 | 60.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS a minute
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12: MISSING
- 2026-05-13 PASS 58 seconds
- 2026-05-14: MISSING
- 2026-05-15 PASS 57 seconds
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19: MISSING
- 2026-05-20 PASS 58 seconds
- 2026-05-21: MISSING
- 2026-05-22 PASS a minute
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 57 seconds
- 2026-05-26: MISSING
- 2026-05-27

### Error 2026-05-27T02:09:27+00:00
```
2026-05-27T02:09:27.0731020Z === RUN   TestMigBackupSnapshotExportBucket_basic
2026-05-27T02:09:27.0733725Z     resource_cloud_backup_snapshot_export_bucket_migration_test.go:10: Creating execution project (1): test-acc-tf-p-5368452080095905968
2026-05-27T02:09:27.0744657Z    test_working_directory=/tmp/plugintest2478713898 test_step_number=2 test_name=TestMigBackupSnapshotExportBucket_basic
2026-05-27T02:09:27.0745763Z     resource_cloud_backup_snapshot_export_bucket_migration_test.go:10: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-27T02:09:27.0746432Z         
2026-05-27T02:09:27.0748127Z         Error: error deleting snapshot export bucket 6a16429ee9f4601a99027696 https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a16429ee9f4601a99027696/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-27T02:09:27.0749563Z         
2026-05-27T02:09:27.0749901Z --- FAIL: TestMigBackupSnapshotExportBucket_basic (60.41s)
```

- 2026-05-28: MISSING
- 2026-05-29 PASS 59 seconds
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02: MISSING
- 2026-06-03 PASS 56 seconds
- 2026-06-04: MISSING
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 52 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
