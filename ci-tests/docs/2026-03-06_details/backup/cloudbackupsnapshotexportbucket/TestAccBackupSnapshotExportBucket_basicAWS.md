# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 01:26](#error-2026-03-03t0126580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 51 seconds
- 2026-02-06 PASS 40 seconds
- 2026-02-07 PASS 52 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 42 seconds
- 2026-02-10 PASS 49 seconds
- 2026-02-11 PASS 41 seconds
- 2026-02-12 PASS 47 seconds
- 2026-02-13 PASS 44 seconds
- 2026-02-14 PASS 45 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 45 seconds
- 2026-02-17 PASS 47 seconds
- 2026-02-18 PASS 44 seconds
- 2026-02-19 PASS 52 seconds
- 2026-02-20 PASS 40 seconds
- 2026-02-21 PASS 48 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 46 seconds
- 2026-02-24 PASS 51 seconds
- 2026-02-25 PASS 42 seconds
- 2026-02-26 PASS 50 seconds
- 2026-02-27 PASS 40 seconds
- 2026-02-28 PASS 52 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 41 seconds
- 2026-03-03

### Error 2026-03-03T01:26:58+00:00
```
2026-03-03T01:26:58.9916758Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2026-03-03T01:26:58.9917519Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: Creating execution project (1): test-acc-tf-p-7236818481632628965
2026-03-03T01:26:58.9918248Z     resource_cloud_backup_snapshot_export_bucket_test.go:23: 
2026-03-03T01:26:58.9919258Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-03T01:26:58.9921179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-03T01:26:58.9922957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-03T01:26:58.9925299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:34
2026-03-03T01:26:58.9927874Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:23
2026-03-03T01:26:58.9929269Z         	            				/opt/hostedtoolcache/go/1.26.0/x64/src/runtime/asm_amd64.s:1771
2026-03-03T01:26:58.9929886Z         	Error:      	Received unexpected error:
2026-03-03T01:26:58.9931833Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T01:26:58.9933112Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2026-03-03T01:26:58.9934887Z         	Messages:   	Project creation failed: test-acc-tf-p-7236818481632628965, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T01:26:58.9936094Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (65.93s)
```

- 2026-03-04 PASS 40 seconds
- 2026-03-05 PASS a minute
- 2026-03-06 PASS 40 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 46 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 46 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 44 seconds
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 42 seconds
  - PASS 45 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 44 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 39 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 44 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
