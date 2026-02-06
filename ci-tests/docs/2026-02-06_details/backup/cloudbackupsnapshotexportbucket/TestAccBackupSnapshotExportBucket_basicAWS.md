# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-10 00:57](#error-2026-01-10t0057210000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69619dd1a6d3974abfe15990/cloudProviderAccess/69619ddca60ed1a0cc29503e | dev | 30.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 51 seconds
- 2026-01-09 PASS 43 seconds
- 2026-01-10

### Error 2026-01-10T00:57:21+00:00
```
2026-01-10T00:57:21.2669187Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-01-10T00:57:21.2669940Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-4230907617824580360
2026-01-10T00:57:21.2672168Z 2026/01/10 00:31:26 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69619dd1a6d3974abfe15990/cloudProviderAccess/69619ddca60ed1a0cc29503e PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1417320505271133003). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1417320505271133003], BadRequestDetail:  
2026-01-10T00:57:21.2673975Z 2026/01/10 00:31:26 retrying
2026-01-10T00:57:21.2687118Z   
2026-01-10T00:57:21.2688010Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Step 1/2 error: Error running apply: exit status 1
2026-01-10T00:57:21.2689197Z         
2026-01-10T00:57:21.2692051Z         Error: error creating snapshot export bucket: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69619dd1a6d3974abfe15990/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (69619ddca60ed1a0cc29503e). Reason: Bad Request. Params: [69619ddca60ed1a0cc29503e], BadRequestDetail: 
2026-01-10T00:57:21.2693442Z         
2026-01-10T00:57:21.2693894Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2026-01-10T00:57:21.2695021Z           on terraform_plugin_test.tf line 78, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2026-01-10T00:57:21.2695856Z           78:         resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2026-01-10T00:57:21.2696351Z         
2026-01-10T00:57:21.2696655Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (30.07s)
```

- 2026-01-11: MISSING
- 2026-01-12 PASS 40 seconds
- 2026-01-13 PASS 47 seconds
- 2026-01-14 PASS 44 seconds
- 2026-01-15 PASS 51 seconds
- 2026-01-16 PASS 40 seconds
- 2026-01-17 PASS 59 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 41 seconds
- 2026-01-20 PASS 51 seconds
- 2026-01-21 PASS 45 seconds
- 2026-01-22 PASS 52 seconds
- 2026-01-23 PASS 46 seconds
- 2026-01-24 PASS 48 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 41 seconds
- 2026-01-27 PASS 52 seconds
- 2026-01-28 PASS 42 seconds
- 2026-01-29 PASS 47 seconds
- 2026-01-30 PASS 44 seconds
- 2026-01-31 PASS 52 seconds
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03 PASS 53 seconds
- 2026-02-04 PASS 43 seconds
- 2026-02-05 PASS 51 seconds
- 2026-02-06 PASS 40 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 40 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 40 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 39 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 43 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 41 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 40 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 46 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
