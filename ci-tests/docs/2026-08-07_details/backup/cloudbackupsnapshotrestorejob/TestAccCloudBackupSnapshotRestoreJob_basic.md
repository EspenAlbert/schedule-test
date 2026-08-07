# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.01s
[2026-07-11 01:10](#error-2026-07-11t0110170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-07-14 01:21](#error-2026-07-14t0121010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.06s
[2026-07-18 01:13](#error-2026-07-18t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.03s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8678839Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-09T01:39:31.8679642Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-6212483852445424469
2026-07-09T01:39:31.8680381Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-07-09T01:39:31.8681414Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8683259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8685106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8686868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8689460Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-07-09T01:39:31.8692074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-07-09T01:39:31.8693244Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8695227Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8696345Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-09T01:39:31.8698750Z         	Messages:   	Project creation failed: test-acc-tf-p-6212483852445424469, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8700867Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (89.12s)
```

- 2026-07-10 PASS 53 minutes
- 2026-07-11

### Error 2026-07-11T01:10:17+00:00
```
2026-07-11T01:10:17.0022519Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-11T01:10:17.0023314Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-1725063315652360349
2026-07-11T01:10:17.0024027Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-07-11T01:10:17.0025049Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:17.0027107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:17.0028935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:17.0030650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T01:10:17.0032930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-07-11T01:10:17.0035438Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-07-11T01:10:17.0036586Z         	Error:      	Received unexpected error:
2026-07-11T01:10:17.0038574Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0039656Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-11T01:10:17.0041434Z         	Messages:   	Project creation failed: test-acc-tf-p-1725063315652360349, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0042670Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (65.54s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 35 minutes
- 2026-07-14

### Error 2026-07-14T01:21:01+00:00
```
2026-07-14T01:21:01.6031449Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-14T01:21:01.6031941Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-322522635230809327
2026-07-14T01:21:01.6032407Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-07-14T01:21:01.6033049Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T01:21:01.6034187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T01:21:01.6035445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T01:21:01.6036557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-14T01:21:01.6038012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-07-14T01:21:01.6039629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-07-14T01:21:01.6040292Z         	Error:      	Received unexpected error:
2026-07-14T01:21:01.6041501Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:21:01.6042207Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-14T01:21:01.6043332Z         	Messages:   	Project creation failed: test-acc-tf-p-322522635230809327, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:21:01.6044543Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (74.63s)
```

- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS 59 minutes
- 2026-07-17 PASS 38 minutes
- 2026-07-18

### Error 2026-07-18T01:13:23+00:00
```
2026-07-18T01:13:23.7916573Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-18T01:13:23.7917337Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-7750272803179581060
2026-07-18T01:13:23.7918049Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-07-18T01:13:23.7919055Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:13:23.7921110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:13:23.7922927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:13:23.7924657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-18T01:13:23.7926970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-07-18T01:13:23.7929533Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-07-18T01:13:23.7930780Z         	Error:      	Received unexpected error:
2026-07-18T01:13:23.7932852Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:13:23.7933971Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-18T01:13:23.7935771Z         	Messages:   	Project creation failed: test-acc-tf-p-7750272803179581060, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:13:23.7937003Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (89.28s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 22 minutes
- 2026-07-22 PASS 35 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8807736Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-23T00:50:22.8808495Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-9108459789963642637
2026-07-23T00:50:22.8809204Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-07-23T00:50:22.8810203Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8812007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8813954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8815677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8818260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-07-23T00:50:22.8820829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-07-23T00:50:22.8821822Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8823775Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8824890Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-07-23T00:50:22.8826673Z         	Messages:   	Project creation failed: test-acc-tf-p-9108459789963642637, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8828032Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (67.09s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 39 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 31 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 25 minutes
- 2026-08-01 PASS 23 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 23 minutes
- 2026-08-04 PASS 22 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 31 minutes
- 2026-08-07 PASS 22 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 38 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 29 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 34 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 25 minutes
  - PASS 31 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 22 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
