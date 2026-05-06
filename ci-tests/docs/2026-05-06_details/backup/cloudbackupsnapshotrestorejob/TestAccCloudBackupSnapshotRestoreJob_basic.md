# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:19](#error-2026-04-09t0119070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.09s
[2026-04-11 01:10](#error-2026-04-11t0110550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.10s
[2026-04-16 01:05](#error-2026-04-16t0105000000) |  | dev | flaky_500 | 69.00s
[2026-04-18 01:20](#error-2026-04-18t0120330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.02s
[2026-04-30 01:26](#error-2026-04-30t0126500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.02s
[2026-05-05 01:30](#error-2026-05-05t0130340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 56 minutes
- 2026-04-08 PASS 23 minutes
- 2026-04-09

### Error 2026-04-09T01:19:07+00:00
```
2026-04-09T01:19:07.1083855Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-09T01:19:07.1085179Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-1677346274757474099
2026-04-09T01:19:07.1086401Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-04-09T01:19:07.1088193Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:19:07.1091743Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:19:07.1095093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:19:07.1098459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-09T01:19:07.1102802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-04-09T01:19:07.1107539Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-04-09T01:19:07.1109477Z         	Error:      	Received unexpected error:
2026-04-09T01:19:07.1113074Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1115164Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-09T01:19:07.1118602Z         	Messages:   	Project creation failed: test-acc-tf-p-1677346274757474099, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1120764Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (78.87s)
```

- 2026-04-10 PASS 34 minutes
- 2026-04-11

### Error 2026-04-11T01:10:55+00:00
```
2026-04-11T01:10:55.5256937Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-11T01:10:55.5257623Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-8460530756595117002
2026-04-11T01:10:55.5258278Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-04-11T01:10:55.5259179Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:10:55.5260803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:10:55.5262401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:10:55.5263926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-11T01:10:55.5265968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-04-11T01:10:55.5268294Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-04-11T01:10:55.5269276Z         	Error:      	Received unexpected error:
2026-04-11T01:10:55.5270965Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:10:55.5271959Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-11T01:10:55.5273536Z         	Messages:   	Project creation failed: test-acc-tf-p-8460530756595117002, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:10:55.5274659Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (93.97s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 32 minutes
- 2026-04-14 PASS 21 minutes
- 2026-04-15 PASS 28 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8221465Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-16T01:05:00.8222276Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-2269989078964367414
2026-04-16T01:05:00.8222995Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-04-16T01:05:00.8224220Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T01:05:00.8225983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T01:05:00.8227878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T01:05:00.8229583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-16T01:05:00.8231804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-04-16T01:05:00.8234220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-04-16T01:05:00.8235179Z         	Error:      	Received unexpected error:
2026-04-16T01:05:00.8236083Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T01:05:00.8236849Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-16T01:05:00.8237943Z         	Messages:   	Project creation failed: test-acc-tf-p-2269989078964367414, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T01:05:00.8238729Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (69.00s)
```

- 2026-04-17 PASS 23 minutes
- 2026-04-18

### Error 2026-04-18T01:20:33+00:00
```
2026-04-18T01:20:33.7561530Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-18T01:20:33.7562292Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-6669556311324280948
2026-04-18T01:20:33.7562992Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-04-18T01:20:33.7564000Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T01:20:33.7566298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T01:20:33.7568108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T01:20:33.7569834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-18T01:20:33.7572672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-04-18T01:20:33.7575847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-04-18T01:20:33.7576851Z         	Error:      	Received unexpected error:
2026-04-18T01:20:33.7578799Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:20:33.7579907Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-18T01:20:33.7581698Z         	Messages:   	Project creation failed: test-acc-tf-p-6669556311324280948, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:20:33.7582920Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (74.24s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 20 minutes
- 2026-04-21 PASS 28 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 40 minutes
- 2026-04-24 PASS 25 minutes
- 2026-04-25 PASS 26 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 25 minutes
- 2026-04-28 PASS 23 minutes
- 2026-04-29 PASS 26 minutes
- 2026-04-30

### Error 2026-04-30T01:26:50+00:00
```
2026-04-30T01:26:50.5008495Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-30T01:26:50.5009282Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-5863792625037993252
2026-04-30T01:26:50.5010280Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-04-30T01:26:50.5011322Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:26:50.5013502Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:26:50.5015380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:26:50.5017222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T01:26:50.5019578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-04-30T01:26:50.5022388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-04-30T01:26:50.5023557Z         	Error:      	Received unexpected error:
2026-04-30T01:26:50.5025562Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.5026682Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-04-30T01:26:50.5028526Z         	Messages:   	Project creation failed: test-acc-tf-p-5863792625037993252, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.5029968Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (84.17s)
```

- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 21 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 26 minutes
- 2026-05-05

### Error 2026-05-05T01:30:34+00:00
```
2026-05-05T01:30:34.0828846Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-05T01:30:34.0829597Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-4685493552027126203
2026-05-05T01:30:34.0830293Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-05T01:30:34.0831283Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:30:34.0833331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:30:34.0835127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:30:34.0837080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-05T01:30:34.0839406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-05T01:30:34.0841963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-05T01:30:34.0842944Z         	Error:      	Received unexpected error:
2026-05-05T01:30:34.0844882Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:30:34.0845963Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-05T01:30:34.0848282Z         	Messages:   	Project creation failed: test-acc-tf-p-4685493552027126203, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:30:34.0849535Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (65.20s)
```

- 2026-05-06 PASS 33 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 23 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 22 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 22 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 24 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 24 minutes
- 2026-05-04 PASS 47 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 22 minutes
