# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAzure Test Details
# Found 35 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-09 01:04](#error-2026-01-09t0104300000) | API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess | dev | real_test_failure | 4.10s
[2026-01-09 10:58](#error-2026-01-09t1058470000) | CLOUD_PROVIDER_ACCESS_ROLE_NOT_AUTHORIZED /api/atlas/v2/groups/6960df5defcca9cc750b6349/backup/exportBuckets | dev |  | 9.02s
[2026-01-09 11:03](#error-2026-01-09t1103480000) | CLOUD_PROVIDER_ACCESS_AZURE_SERVICE_PRINCIPAL_INVALID /api/atlas/v2/groups/6960e08ce073ed7d381960e9/cloudProviderAccess | dev |  | 7.09s
[2026-01-31 03:36](#error-2026-01-31t0336470000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697d4e40ff188f1e45c48095/cloudProviderAccess | dev |  | 7.03s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/698143b6b2e54ee995902a69/cloudProviderAccess | dev |  | 4.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
- 2026-01-09
  - FAIL 4 seconds

### Error 2026-01-09T01:04:30+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2026-01-09T01:04:30.630000+00:00-TestAccBackupSnapshotExportBucket_basicAzure',confidence=1.0,ts_when='28 days ago')
API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess
```
2026-01-09T01:04:30.6303128Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-01-09T01:04:30.6316972Z    test_working_directory=/tmp/plugintest692493930 test_name=TestAccBackupSnapshotExportBucket_basicAzure test_terraform_path=/home/runner/work/_temp/dfdcc1b7-4a38-49e6-822a-7c170a52efe6/terraform
2026-01-09T01:04:30.6318195Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Step 1/2 error: Error running apply: exit status 1
2026-01-09T01:04:30.6318727Z         
2026-01-09T01:04:30.6321279Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69604c8df15fa9f1d48cffad/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-09T01:04:30.6322882Z         
2026-01-09T01:04:30.6323332Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-01-09T01:04:30.6324177Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-01-09T01:04:30.6324989Z           12: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-01-09T01:04:30.6325395Z         
2026-01-09T01:04:30.6325719Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (4.98s)
```

  - FAIL 9 seconds

### Error 2026-01-09T10:58:47+00:00
```
2026-01-09T10:58:47.3327602Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-01-09T10:58:47.3329403Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Creating execution project (1): test-acc-tf-p-5984407800769555957
2026-01-09T10:58:47.3355540Z   
2026-01-09T10:58:47.3356554Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Step 1/2 error: Error running apply: exit status 1
2026-01-09T10:58:47.3357829Z         
2026-01-09T10:58:47.3362242Z         Error: error creating snapshot export bucket: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6960df5defcca9cc750b6349/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CLOUD_PROVIDER_ACCESS_ROLE_NOT_AUTHORIZED") Detail: The specified Cloud Provider Access role (6960df64e073ed7d38190a74) has not been authorized. Reason: Bad Request. Params: [6960df64e073ed7d38190a74], BadRequestDetail: 
2026-01-09T10:58:47.3365024Z         
2026-01-09T10:58:47.3365822Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2026-01-09T10:58:47.3367364Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2026-01-09T10:58:47.3368865Z           34:         resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2026-01-09T10:58:47.3369605Z         
2026-01-09T10:58:47.3370156Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (9.18s)
```

  - FAIL 7 seconds

### Error 2026-01-09T11:03:48+00:00
```
2026-01-09T11:03:48.2703617Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-01-09T11:03:48.2705167Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Creating execution project (1): test-acc-tf-p-2829055138499336557
2026-01-09T11:03:48.2731450Z    test_working_directory=/tmp/plugintest2938337187 test_name=TestAccBackupSnapshotExportBucket_basicAzure test_terraform_path=/home/runner/work/_temp/a48449ae-caec-4c22-9c57-b979a4ef4d55/terraform
2026-01-09T11:03:48.2734104Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Step 1/2 error: Error running apply: exit status 1
2026-01-09T11:03:48.2735040Z         
2026-01-09T11:03:48.2739859Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/6960e08ce073ed7d381960e9/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CLOUD_PROVIDER_ACCESS_AZURE_SERVICE_PRINCIPAL_INVALID") Detail: The specified Azure Service Principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1) contains invalid tenant id or service principal id. Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-09T11:03:48.2743130Z         
2026-01-09T11:03:48.2743913Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-01-09T11:03:48.2745401Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-01-09T11:03:48.2746829Z           12: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-01-09T11:03:48.2747522Z         
2026-01-09T11:03:48.2748061Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (7.86s)
```

  - PASS 11 seconds
- 2026-01-10 PASS 9 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 7 seconds
- 2026-01-13 PASS 9 seconds
- 2026-01-14 PASS 8 seconds
- 2026-01-15 PASS 11 seconds
- 2026-01-16 PASS 7 seconds
- 2026-01-17 PASS 9 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 8 seconds
- 2026-01-20 PASS 12 seconds
- 2026-01-21 PASS 10 seconds
- 2026-01-22 PASS 10 seconds
- 2026-01-23 PASS 9 seconds
- 2026-01-24 PASS 9 seconds
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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 8 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 7 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 8 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 8 seconds
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
