# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAzure Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 01:25](#error-2026-05-23t0125370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.08s
[2026-05-27 02:09](#error-2026-05-27t0209270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a16429ee9f4601a99027696/clusters | dev | flaky_500 | 11.00s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 11 seconds
- 2026-05-08 PASS 10 seconds
- 2026-05-09 PASS 19 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 10 seconds
- 2026-05-12 PASS 13 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 16 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16 PASS 14 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS 17 seconds
- 2026-05-20 PASS 10 seconds
- 2026-05-21 PASS 13 seconds
- 2026-05-22 PASS 11 seconds
- 2026-05-23

### Error 2026-05-23T01:25:37+00:00
```
2026-05-23T01:25:37.7583603Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-05-23T01:25:37.7584580Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Creating execution project (1): test-acc-tf-p-6142075852083034736
2026-05-23T01:25:37.7585549Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: 
2026-05-23T01:25:37.7586672Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:37.7588634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:37.7590718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:37.7643571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:85
2026-05-23T01:25:37.7646168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:27
2026-05-23T01:25:37.7647537Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:25:37.7648066Z         	Error:      	Received unexpected error:
2026-05-23T01:25:37.7651902Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7652973Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAzure
2026-05-23T01:25:37.7654699Z         	Messages:   	Project creation failed: test-acc-tf-p-6142075852083034736, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7655839Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (79.81s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 14 seconds
- 2026-05-27

### Error 2026-05-27T02:09:27+00:00
```
2026-05-27T02:09:27.0770161Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-05-27T02:09:27.0780902Z   
2026-05-27T02:09:27.0781627Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-27T02:09:27.0782263Z         
2026-05-27T02:09:27.0783971Z         Error: error deleting snapshot export bucket 6a16429ee9f4601a99027696 https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a16429ee9f4601a99027696/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-27T02:09:27.0785523Z         
2026-05-27T02:09:27.0785874Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (11.04s)
```

- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9305060Z === RUN   TestAccBackupSnapshotExportBucket_basicAzure
2026-05-28T01:00:34.9305850Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: Creating execution project (1): test-acc-tf-p-4971425723963716224
2026-05-28T01:00:34.9306585Z     resource_cloud_backup_snapshot_export_bucket_test.go:27: 
2026-05-28T01:00:34.9307618Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9309471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9311464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9313888Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:85
2026-05-28T01:00:34.9316554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:27
2026-05-28T01:00:34.9317992Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9318534Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9320533Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9321778Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAzure
2026-05-28T01:00:34.9323628Z         	Messages:   	Project creation failed: test-acc-tf-p-4971425723963716224, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9324885Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAzure (73.72s)
```

- 2026-05-29 PASS 9 seconds
- 2026-05-30 PASS 21 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 11 seconds
- 2026-06-02 PASS 34 seconds
- 2026-06-03 PASS 10 seconds
- 2026-06-04 PASS 13 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 12 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 10 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 11 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
