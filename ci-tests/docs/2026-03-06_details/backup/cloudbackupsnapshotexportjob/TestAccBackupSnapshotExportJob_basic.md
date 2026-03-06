# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:20](#error-2026-02-24t0120270000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699cf2a3ae2412ce62115a79/cloudProviderAccess/699cf2afae2412ce6211e79f | dev | flaky_500 | 1179.09s
[2026-03-04 01:24](#error-2026-03-04t0124250000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a77edaa0aca1fefeeae91a/cloudProviderAccess/69a78486c7d3cdfdfb65e46e | dev |  | 1352.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 21 minutes
- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 39 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 23 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2778587Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-02-24T01:20:27.2779867Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-5346933650452277769
2026-02-24T01:20:27.2783835Z 2026/02/24 00:37:04 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a3ae2412ce62115a79/cloudProviderAccess/699cf2afae2412ce6211e79f PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3136396865944024748). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3136396865944024748], BadRequestDetail:  
2026-02-24T01:20:27.2787191Z 2026/02/24 00:37:04 retrying
2026-02-24T01:20:27.2803313Z    test_name=TestAccBackupSnapshotExportJob_basic
2026-02-24T01:20:27.2804499Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:20:27.2805547Z         
2026-02-24T01:20:27.2806772Z         Error: error taking a snapshot: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2807731Z         
2026-02-24T01:20:27.2808390Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-02-24T01:20:27.2809714Z           on terraform_plugin_test.tf line 104, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-02-24T01:20:27.2810947Z          104: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-02-24T01:20:27.2811576Z         
2026-02-24T01:20:27.2812064Z --- FAIL: TestAccBackupSnapshotExportJob_basic (1179.89s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 27 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 24 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 21 minutes
- 2026-03-03 PASS 28 minutes
- 2026-03-04

### Error 2026-03-04T01:24:25+00:00
```
2026-03-04T01:24:25.0195222Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-03-04T01:24:25.0198164Z 2026/03/04 01:01:59 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77edaa0aca1fefeeae91a/cloudProviderAccess/69a78486c7d3cdfdfb65e46e PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1841082060610671845). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1841082060610671845], BadRequestDetail:  
2026-03-04T01:24:25.0200401Z 2026/03/04 01:01:59 retrying
2026-03-04T01:24:25.0215521Z   
2026-03-04T01:24:25.0216260Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-03-04T01:24:25.0216785Z         
2026-03-04T01:24:25.0218851Z         Error: error creating snapshot export bucket: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77edaa0aca1fefeeae91a/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (69a78486c7d3cdfdfb65e46e). Reason: Bad Request. Params: [69a78486c7d3cdfdfb65e46e], BadRequestDetail: 
2026-03-04T01:24:25.0220256Z         
2026-03-04T01:24:25.0220705Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2026-03-04T01:24:25.0221593Z           on terraform_plugin_test.tf line 111, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2026-03-04T01:24:25.0222413Z          111: resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2026-03-04T01:24:25.0223030Z         
2026-03-04T01:24:25.0223379Z --- FAIL: TestAccBackupSnapshotExportJob_basic (1352.76s)
```

- 2026-03-05 PASS 34 minutes
- 2026-03-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 18 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 18 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 20 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 17 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 19 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
