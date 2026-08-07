# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAzure Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.09s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 34 seconds
- 2026-07-10 PASS 8 seconds
- 2026-07-11 PASS 18 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 19 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 16 seconds
- 2026-07-17 PASS 10 seconds
- 2026-07-18 PASS 17 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4737818Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-07-21T00:53:51.4738607Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Creating execution project (1): test-acc-tf-p-7520521406655951012
2026-07-21T00:53:51.4739332Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: 
2026-07-21T00:53:51.4740474Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4742395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4744206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4746580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:85
2026-07-21T00:53:51.4749173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:27
2026-07-21T00:53:51.4750585Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4751133Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4753220Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4754318Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAzure
2026-07-21T00:53:51.4756131Z         	Messages:   	Project creation failed: test-acc-tf-p-7520521406655951012, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4757352Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (107.86s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8764859Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-07-23T00:50:22.8765637Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Creating execution project (1): test-acc-tf-p-4203857860099859928
2026-07-23T00:50:22.8766361Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: 
2026-07-23T00:50:22.8767517Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8769309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8771105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8773462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:85
2026-07-23T00:50:22.8776070Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:27
2026-07-23T00:50:22.8777732Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8778261Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8780183Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8781433Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAzure
2026-07-23T00:50:22.8783224Z         	Messages:   	Project creation failed: test-acc-tf-p-4203857860099859928, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8784468Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (61.56s)
```

- 2026-07-24 PASS 8 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 14 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 9 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 11 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 10 seconds
- 2026-08-04 PASS 9 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 10 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 10 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
