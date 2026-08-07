# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 114.01s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10 PASS 40 seconds
- 2026-07-11 PASS 56 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 43 seconds
- 2026-07-14 PASS 47 seconds
- 2026-07-15 PASS 42 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 41 seconds
- 2026-07-18 PASS 59 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4717639Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-07-21T00:53:51.4718435Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-6724537914641847625
2026-07-21T00:53:51.4719174Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-07-21T00:53:51.4720198Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4722105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4723922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4726296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-07-21T00:53:51.4728881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-07-21T00:53:51.4730523Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4731071Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4733280Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4734361Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-07-21T00:53:51.4736153Z         	Messages:   	Project creation failed: test-acc-tf-p-6724537914641847625, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4737352Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (114.08s)
```

- 2026-07-22 PASS 39 seconds
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8744785Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-07-23T00:50:22.8745568Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-5583314557505027831
2026-07-23T00:50:22.8746299Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-07-23T00:50:22.8747471Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8749271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8751061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8753419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-07-23T00:50:22.8756002Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-07-23T00:50:22.8757683Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8758349Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8760291Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8761382Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-07-23T00:50:22.8763171Z         	Messages:   	Project creation failed: test-acc-tf-p-5583314557505027831, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8764404Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (62.66s)
```

- 2026-07-24 PASS 41 seconds
- 2026-07-25 PASS 45 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 47 seconds
- 2026-07-28 PASS 45 seconds
- 2026-07-29 PASS 41 seconds
- 2026-07-30 PASS 48 seconds
- 2026-07-31 PASS 44 seconds
- 2026-08-01 PASS 44 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 43 seconds
- 2026-08-04 PASS 44 seconds
- 2026-08-05 PASS 40 seconds
- 2026-08-06 PASS 44 seconds
- 2026-08-07 PASS 39 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-19 01:29](#error-2026-07-19t0129050000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6a5c1e6719caae8c5b408adf/cloudProviderAccess/6a5c1eb919caae8c5b40e585 | qa | 23.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 41 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 42 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19

### Error 2026-07-19T01:29:05+00:00
```
2026-07-19T01:29:05.2630910Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-07-19T01:29:05.2633260Z 2026/07/19 00:47:54 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5c1e6719caae8c5b408adf/cloudProviderAccess/6a5c1eb919caae8c5b40e585 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5645235065952144131). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5645235065952144131], BadRequestDetail:  
2026-07-19T01:29:05.2635154Z 2026/07/19 00:47:54 retrying
2026-07-19T01:29:05.2648501Z    test_name=TestAccBackupSnapshotExportBucket_basicAWS
2026-07-19T01:29:05.2649256Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Step 1/2 error: Error running apply: exit status 1
2026-07-19T01:29:05.2649798Z         
2026-07-19T01:29:05.2651914Z         Error: error creating snapshot export bucket: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5c1e6719caae8c5b408adf/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (6a5c1eb919caae8c5b40e585). Reason: Bad Request. Params: [6a5c1eb919caae8c5b40e585], BadRequestDetail: 
2026-07-19T01:29:05.2653312Z         
2026-07-19T01:29:05.2653782Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2026-07-19T01:29:05.2654665Z           on terraform_plugin_test.tf line 78, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2026-07-19T01:29:05.2655533Z           78:         resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2026-07-19T01:29:05.2655969Z         
2026-07-19T01:29:05.2656323Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (23.88s)
```

- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 43 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 46 seconds
  - PASS 43 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 43 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
