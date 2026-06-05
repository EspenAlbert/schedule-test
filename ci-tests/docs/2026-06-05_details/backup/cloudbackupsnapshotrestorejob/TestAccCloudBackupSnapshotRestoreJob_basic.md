# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.07s
[2026-05-16 01:20](#error-2026-05-16t0120190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.05s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.04s
[2026-05-21 01:33](#error-2026-05-21t0133420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 110.00s
[2026-05-23 01:25](#error-2026-05-23t0125370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-05-28 01:18](#error-2026-05-28t0118420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.02s
[2026-05-30 01:25](#error-2026-05-30t0125170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-06-02 01:24](#error-2026-06-02t0124480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 39 minutes
- 2026-05-08 PASS 28 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1185584Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-09T01:25:50.1186365Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-409836491572580655
2026-05-09T01:25:50.1187087Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-09T01:25:50.1188107Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1189976Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1191889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1193672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1196304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-09T01:25:50.1198983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-09T01:25:50.1200018Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1202004Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1203130Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-09T01:25:50.1205195Z         	Messages:   	Project creation failed: test-acc-tf-p-409836491572580655, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1206489Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (72.66s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 30 minutes
- 2026-05-12 PASS 23 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 44 minutes
- 2026-05-15 PASS 30 minutes
- 2026-05-16

### Error 2026-05-16T01:20:19+00:00
```
2026-05-16T01:20:19.5321185Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-16T01:20:19.5321948Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-8886443225835649413
2026-05-16T01:20:19.5322648Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-16T01:20:19.5323655Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:20:19.5326429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:20:19.5328290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:20:19.5330042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-16T01:20:19.5332326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-16T01:20:19.5335049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-16T01:20:19.5336047Z         	Error:      	Received unexpected error:
2026-05-16T01:20:19.5338023Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:19.5339276Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-16T01:20:19.5341055Z         	Messages:   	Project creation failed: test-acc-tf-p-8886443225835649413, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:19.5342283Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (105.48s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 47 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.7054911Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-19T01:23:22.7055662Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-3849516756323900314
2026-05-19T01:23:22.7056371Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-19T01:23:22.7057363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.7059480Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.7061333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.7063078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.7065431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-19T01:23:22.7068340Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-19T01:23:22.7069331Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.7071311Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7072397Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-19T01:23:22.7074207Z         	Messages:   	Project creation failed: test-acc-tf-p-3849516756323900314, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7075433Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (99.36s)
```

- 2026-05-20 PASS 30 minutes
- 2026-05-21

### Error 2026-05-21T01:33:42+00:00
```
2026-05-21T01:33:42.6738811Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-21T01:33:42.6739877Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-993814462200460235
2026-05-21T01:33:42.6794268Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-21T01:33:42.6795924Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:33:42.6799225Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:33:42.6802405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:33:42.6804521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-21T01:33:42.6806844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-21T01:33:42.6809735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-21T01:33:42.6810758Z         	Error:      	Received unexpected error:
2026-05-21T01:33:42.6812772Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:33:42.6813886Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-21T01:33:42.6815672Z         	Messages:   	Project creation failed: test-acc-tf-p-993814462200460235, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:33:42.6817185Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (110.01s)
```

- 2026-05-22 PASS 42 minutes
- 2026-05-23

### Error 2026-05-23T01:25:37+00:00
```
2026-05-23T01:25:37.7677745Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-23T01:25:37.7678593Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-4637772460923136352
2026-05-23T01:25:37.7679274Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-23T01:25:37.7680340Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:37.7682063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:37.7683771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:37.7685393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-23T01:25:37.7687586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-23T01:25:37.7690297Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-23T01:25:37.7691246Z         	Error:      	Received unexpected error:
2026-05-23T01:25:37.7693117Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7694149Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-23T01:25:37.7695859Z         	Messages:   	Project creation failed: test-acc-tf-p-4637772460923136352, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7697030Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (62.58s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 26 minutes
- 2026-05-26 PASS 29 minutes
- 2026-05-27 PASS 45 minutes
- 2026-05-28

### Error 2026-05-28T01:18:42+00:00
```
2026-05-28T01:18:42.4211564Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-28T01:18:42.4212425Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-4730244107387608807
2026-05-28T01:18:42.4213219Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-28T01:18:42.4214348Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:18:42.4218759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:18:42.4222226Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:18:42.4225047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:18:42.4227487Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-28T01:18:42.4230185Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-28T01:18:42.4231510Z         	Error:      	Received unexpected error:
2026-05-28T01:18:42.4233544Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:18:42.4234697Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-28T01:18:42.4236566Z         	Messages:   	Project creation failed: test-acc-tf-p-4730244107387608807, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:18:42.4237832Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (90.22s)
```

- 2026-05-29 PASS 29 minutes
- 2026-05-30

### Error 2026-05-30T01:25:17+00:00
```
2026-05-30T01:25:17.6664234Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-30T01:25:17.6665021Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-4634822265521036819
2026-05-30T01:25:17.6665753Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-05-30T01:25:17.6666793Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:25:17.6668638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:25:17.6670477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:25:17.6672234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:25:17.6675344Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-05-30T01:25:17.6677967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-05-30T01:25:17.6678990Z         	Error:      	Received unexpected error:
2026-05-30T01:25:17.6680975Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:25:17.6682106Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-05-30T01:25:17.6684075Z         	Messages:   	Project creation failed: test-acc-tf-p-4634822265521036819, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:25:17.6685343Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (62.83s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 29 minutes
- 2026-06-02

### Error 2026-06-02T01:24:48+00:00
```
2026-06-02T01:24:48.0836731Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-06-02T01:24:48.0837507Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-6397502093514880384
2026-06-02T01:24:48.0838306Z     resource_cloud_backup_snapshot_restore_job_test.go:33: 
2026-06-02T01:24:48.0839369Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:48.0841369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:48.0843230Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:48.0845000Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-06-02T01:24:48.0847523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:73
2026-06-02T01:24:48.0850141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:33
2026-06-02T01:24:48.0851166Z         	Error:      	Received unexpected error:
2026-06-02T01:24:48.0853267Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0854389Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basic
2026-06-02T01:24:48.0856563Z         	Messages:   	Project creation failed: test-acc-tf-p-6397502093514880384, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0857831Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (73.44s)
```

- 2026-06-03 PASS 32 minutes
- 2026-06-04 PASS 50 minutes
- 2026-06-05 PASS 35 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 27 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 32 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 24 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
