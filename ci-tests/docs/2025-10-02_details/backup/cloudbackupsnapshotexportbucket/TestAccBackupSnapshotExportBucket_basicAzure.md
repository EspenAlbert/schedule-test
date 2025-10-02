# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAzure Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-25 01:09](#error-2025-09-25t0109350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68d48c49ac285026f1fc98c0/cloudProviderAccess | dev | flaky_500 | 0.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 8 seconds
- 2025-09-05 PASS 7 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07 PASS 9 seconds
- 2025-09-08
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-09-09 PASS 8 seconds
- 2025-09-10 PASS 10 seconds
- 2025-09-11 PASS 8 seconds
- 2025-09-12 PASS 10 seconds
- 2025-09-13 PASS 8 seconds
- 2025-09-14 PASS 7 seconds
- 2025-09-15
  - PASS 8 seconds
  - PASS 13 seconds
  - PASS 7 seconds
- 2025-09-16 PASS 7 seconds
- 2025-09-17 PASS 9 seconds
- 2025-09-18 PASS 9 seconds
- 2025-09-19 PASS 7 seconds
- 2025-09-20 PASS 9 seconds
- 2025-09-21 PASS 8 seconds
- 2025-09-22 PASS 10 seconds
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 8 seconds
- 2025-09-25

### Error 2025-09-25T01:09:35+00:00
```
2025-09-25T01:09:35.4471916Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2025-09-25T01:09:35.4482963Z    test_name=TestAccBackupSnapshotExportBucket_basicAzure test_terraform_path=/home/runner/work/_temp/c2b72842-8e64-4e62-b864-90a16e34f480/terraform test_working_directory=/tmp/plugintest111588160 test_step_number=1
2025-09-25T01:09:35.4484173Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Step 1/2 error: Error running apply: exit status 1
2025-09-25T01:09:35.4484646Z         
2025-09-25T01:09:35.4486257Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c49ac285026f1fc98c0/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-25T01:09:35.4487577Z         
2025-09-25T01:09:35.4487995Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2025-09-25T01:09:35.4488775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2025-09-25T01:09:35.4489508Z           12: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2025-09-25T01:09:35.4489872Z         
2025-09-25T01:09:35.4490164Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (0.48s)
```

- 2025-09-26 PASS 7 seconds
- 2025-09-27 PASS 7 seconds
- 2025-09-28 PASS 10 seconds
- 2025-09-29
  - PASS 8 seconds
  - PASS 15 seconds
- 2025-09-30
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-10-02 PASS 9 seconds