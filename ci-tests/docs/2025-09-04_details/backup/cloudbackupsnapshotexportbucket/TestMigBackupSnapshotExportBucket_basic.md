# backup/cloudbackupsnapshotexportbucket/TestMigBackupSnapshotExportBucket_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 01:07](#error-2025-08-27t0107270000) |  | dev | dangling_resource | 18.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12
  - PASS a minute
  - PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17 PASS a minute
- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24 PASS a minute
- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27

### Error 2025-08-27T01:07:27+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-08-27T01:07:27.917000+00:00-TestMigBackupSnapshotExportBucket_basic',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:07:27.0917715Z === RUN   TestMigBackupSnapshotExportBucket_basic
2025-08-27T01:07:27.0918447Z     resource_cloud_backup_snapshot_export_bucket_migration_test.go:10: Creating execution project: test-acc-tf-p-1003828709223668317
2025-08-27T01:07:27.0924665Z   
2025-08-27T01:07:27.0925227Z     resource_cloud_backup_snapshot_export_bucket_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:07:27.0925729Z         
2025-08-27T01:07:27.0926500Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-7799889963784203730): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T01:07:27.0927310Z         	status code: 409, request id: 26bee8c5-a5ed-454b-bca1-426165d0e4ce
2025-08-27T01:07:27.0927665Z         
2025-08-27T01:07:27.0927948Z           with aws_iam_role.test_role,
2025-08-27T01:07:27.0928518Z           on terraform_plugin_test.tf line 41, in resource "aws_iam_role" "test_role":
2025-08-27T01:07:27.0929049Z           41:       resource "aws_iam_role" "test_role" {
2025-08-27T01:07:27.0929335Z         
2025-08-27T01:07:27.0929621Z --- FAIL: TestMigBackupSnapshotExportBucket_basic (18.34s)
```

- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute