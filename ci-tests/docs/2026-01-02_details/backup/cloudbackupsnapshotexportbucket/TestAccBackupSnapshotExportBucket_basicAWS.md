# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-09 00:55](#error-2025-12-09t0055150000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69376db93c12b02ea31767ac/cloudProviderAccess/69376dc634dc5f47bd0402b5 | dev | 31.05s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 50 seconds
- 2025-12-05 PASS 45 seconds
- 2025-12-06 PASS 48 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 41 seconds
- 2025-12-09

### Error 2025-12-09T00:55:15+00:00
```
2025-12-09T00:55:15.5749747Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2025-12-09T00:55:15.5750447Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project: test-acc-tf-p-6214912310274144688
2025-12-09T00:55:15.5752618Z 2025/12/09 00:31:04 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376db93c12b02ea31767ac/cloudProviderAccess/69376dc634dc5f47bd0402b5 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1169540593534826046). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1169540593534826046], BadRequestDetail:  
2025-12-09T00:55:15.5754367Z 2025/12/09 00:31:04 retrying
2025-12-09T00:55:15.5766876Z   
2025-12-09T00:55:15.5767497Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-12-09T00:55:15.5767975Z         
2025-12-09T00:55:15.5769976Z         Error: error creating snapshot export bucket: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376db93c12b02ea31767ac/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (69376dc634dc5f47bd0402b5). Reason: Bad Request. Params: [69376dc634dc5f47bd0402b5], BadRequestDetail: 
2025-12-09T00:55:15.5771250Z         
2025-12-09T00:55:15.5771675Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2025-12-09T00:55:15.5772473Z           on terraform_plugin_test.tf line 78, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2025-12-09T00:55:15.5773243Z           78:         resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2025-12-09T00:55:15.5773618Z         
2025-12-09T00:55:15.5773908Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (31.45s)
```

- 2025-12-10
  - PASS 46 seconds
  - PASS 45 seconds
- 2025-12-11 PASS 48 seconds
- 2025-12-12 PASS 45 seconds
- 2025-12-13 PASS 46 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 41 seconds
- 2025-12-16 PASS 46 seconds
- 2025-12-17 PASS 43 seconds
- 2025-12-18 PASS 48 seconds
- 2025-12-19 PASS 41 seconds
- 2025-12-20 PASS 49 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 45 seconds
- 2025-12-23 PASS 50 seconds
- 2025-12-24 PASS 46 seconds
- 2025-12-25 PASS 47 seconds
- 2025-12-26 PASS 45 seconds
- 2025-12-27 PASS 49 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 48 seconds
- 2025-12-31 PASS 40 seconds
- 2026-01-01 PASS 50 seconds
- 2026-01-02 PASS 46 seconds

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 40 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 40 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 47 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 40 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 41 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
