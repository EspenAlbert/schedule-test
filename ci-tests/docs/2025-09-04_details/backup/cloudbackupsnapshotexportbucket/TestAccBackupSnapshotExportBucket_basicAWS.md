# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-07 01:07](#error-2025-08-07t0107210000) | CheckFailure for cloud_backup_snapshot_export_buckets.test at Step: 1 Checks: 10,11,13,14 | dev | flaky_check | 50.06s
[2025-08-27 01:07](#error-2025-08-27t0107270000) |  | dev | dangling_resource | 12.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07

### Error 2025-08-07T01:07:21+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-08-07T01:07:21.443000+00:00-TestAccBackupSnapshotExportBucket_basicAWS',confidence=1.0,ts_when='28 days ago')
CheckFailure for cloud_backup_snapshot_export_buckets.test at Step: 1 Checks: 10,11,13,14
```
2025-08-07T01:07:21.0443996Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2025-08-07T01:07:21.0445585Z === CONT  TestAccBackupSnapshotExportBucket_basicAWS
2025-08-07T01:07:21.0457417Z === NAME  TestAccBackupSnapshotExportBucket_basicAWS
2025-08-07T01:07:21.0458495Z     resource_cloud_backup_snapshot_export_bucket_test.go:22: Step 1/2 error: Check failed: Check 10/14 error: data.mongodbatlas_cloud_backup_snapshot_export_buckets.test: Attribute 'results.#' expected "1", got "2"
2025-08-07T01:07:21.0459876Z         Check 11/14 error: data.mongodbatlas_cloud_backup_snapshot_export_buckets.test: Attribute 'results.0.cloud_provider' expected "AWS", got "AZURE"
2025-08-07T01:07:21.0461499Z         Check 13/14 error: data.mongodbatlas_cloud_backup_snapshot_export_buckets.test: Attribute 'results.0.bucket_name' expected "***", got "***"
2025-08-07T01:07:21.0462716Z         Check 14/14 error: data.mongodbatlas_cloud_backup_snapshot_export_buckets.test: Attribute 'results.0.iam_role_id' expected to be set
2025-08-07T01:07:21.0463996Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (50.60s)
```

- 2025-08-08 PASS 40 seconds
- 2025-08-09 PASS 40 seconds
- 2025-08-10 PASS 39 seconds
- 2025-08-11 PASS 40 seconds
- 2025-08-12
  - PASS 40 seconds
  - PASS 40 seconds
- 2025-08-13 PASS 45 seconds
- 2025-08-14 PASS 45 seconds
- 2025-08-15 PASS 45 seconds
- 2025-08-16 PASS 41 seconds
- 2025-08-17 PASS 45 seconds
- 2025-08-18 PASS 45 seconds
- 2025-08-19 PASS 46 seconds
- 2025-08-20
  - PASS 45 seconds
  - PASS 43 seconds
- 2025-08-21 PASS 44 seconds
- 2025-08-22 PASS 41 seconds
- 2025-08-23 PASS 42 seconds
- 2025-08-24 PASS 39 seconds
- 2025-08-25 PASS 46 seconds
- 2025-08-26 PASS 42 seconds
- 2025-08-27

### Error 2025-08-27T01:07:27+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-08-27T01:07:27.930000+00:00-TestAccBackupSnapshotExportBucket_basicAWS',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:07:27.0930022Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2025-08-27T01:07:27.0931675Z === CONT  TestAccBackupSnapshotExportBucket_basicAWS
2025-08-27T01:07:27.0938696Z === NAME  TestAccBackupSnapshotExportBucket_basicAWS
2025-08-27T01:07:27.0939372Z     resource_cloud_backup_snapshot_export_bucket_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:07:27.0939846Z         
2025-08-27T01:07:27.0940615Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-8598739805211660065): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T01:07:27.0941427Z         	status code: 409, request id: c32af124-c282-47aa-a137-965f71ef8e32
2025-08-27T01:07:27.0941778Z         
2025-08-27T01:07:27.0942063Z           with aws_iam_role.test_role,
2025-08-27T01:07:27.0942618Z           on terraform_plugin_test.tf line 39, in resource "aws_iam_role" "test_role":
2025-08-27T01:07:27.0943153Z           39:       resource "aws_iam_role" "test_role" {
2025-08-27T01:07:27.0943452Z         
2025-08-27T01:07:27.0944344Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (12.90s)
```

- 2025-08-28 PASS 45 seconds
- 2025-08-29 PASS 43 seconds
- 2025-08-30 PASS 45 seconds
- 2025-08-31 PASS 41 seconds
- 2025-09-01
  - PASS 40 seconds
  - PASS 41 seconds
  - PASS 42 seconds
  - PASS 45 seconds
  - PASS 40 seconds
  - PASS 41 seconds
  - PASS 41 seconds
  - PASS 46 seconds
- 2025-09-02 PASS 41 seconds
- 2025-09-03 PASS 41 seconds
- 2025-09-04 PASS 44 seconds