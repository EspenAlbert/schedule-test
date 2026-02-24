# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAzure Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697d4e40ff188f1e45c48095/cloudProviderAccess | dev | 7.03s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/698143b6b2e54ee995902a69/cloudProviderAccess | dev | 4.09s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 10 seconds
- 2026-01-28 PASS 8 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30 PASS 9 seconds
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6697704Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-01-31T03:36:47.6711344Z    test_terraform_path=/home/runner/work/_temp/3033667c-f882-4c6a-a87f-335c44830a1c/terraform
2026-01-31T03:36:47.6712164Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:47.6712766Z         
2026-01-31T03:36:47.6715033Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e40ff188f1e45c48095/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-31T03:36:47.6716732Z         
2026-01-31T03:36:47.6717161Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-01-31T03:36:47.6718001Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-01-31T03:36:47.6718798Z           12: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-01-31T03:36:47.6719198Z         
2026-01-31T03:36:47.6719504Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (7.25s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9935417Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-02-03T00:40:22.9948911Z    test_working_directory=/tmp/plugintest716718087 test_name=TestAccBackupSnapshotExportBucket_basicAzure
2026-02-03T00:40:22.9949931Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:22.9950451Z         
2026-02-03T00:40:22.9952685Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b6b2e54ee995902a69/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-02-03T00:40:22.9954227Z         
2026-02-03T00:40:22.9954759Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-02-03T00:40:22.9955596Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-02-03T00:40:22.9956400Z           12: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-02-03T00:40:22.9956800Z         
2026-02-03T00:40:22.9957114Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (4.92s)
```

- 2026-02-04 PASS 11 seconds
- 2026-02-05 PASS 9 seconds
- 2026-02-06 PASS 8 seconds
- 2026-02-07 PASS 9 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 9 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12 PASS 9 seconds
- 2026-02-13 PASS 10 seconds
- 2026-02-14 PASS 9 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 11 seconds
- 2026-02-17 PASS 10 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19 PASS 13 seconds
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 8 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 10 seconds
- 2026-02-24 PASS 10 seconds

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 7 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 10 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 9 seconds
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 7 seconds
  - PASS 12 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 9 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
