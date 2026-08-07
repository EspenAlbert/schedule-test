# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-07-11 01:10](#error-2026-07-11t0110170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.08s
[2026-07-14 01:21](#error-2026-07-14t0121010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-18 01:13](#error-2026-07-18t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.03s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8701396Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-09T01:39:31.8702245Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-7540196143769658374
2026-07-09T01:39:31.8702987Z     resource_cloud_backup_snapshot_restore_job_test.go:38: 
2026-07-09T01:39:31.8704020Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8705854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8707999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8709763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8712105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:38
2026-07-09T01:39:31.8713528Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:39:31.8714073Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8716051Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8717448Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-09T01:39:31.8719295Z         	Messages:   	Project creation failed: test-acc-tf-p-7540196143769658374, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8720576Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (64.74s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11

### Error 2026-07-11T01:10:17+00:00
```
2026-07-11T01:10:17.0043152Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-11T01:10:17.0043969Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-8552630749224494698
2026-07-11T01:10:17.0044683Z     resource_cloud_backup_snapshot_restore_job_test.go:38: 
2026-07-11T01:10:17.0045857Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:17.0047872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:17.0049673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:17.0051381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T01:10:17.0053857Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:38
2026-07-11T01:10:17.0055295Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:10:17.0055850Z         	Error:      	Received unexpected error:
2026-07-11T01:10:17.0058022Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0059136Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-11T01:10:17.0060960Z         	Messages:   	Project creation failed: test-acc-tf-p-8552630749224494698, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0062177Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (83.75s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14

### Error 2026-07-14T01:21:01+00:00
```
2026-07-14T01:21:01.6044982Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-14T01:21:01.6045695Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-7928466676196021273
2026-07-14T01:21:01.6046161Z     resource_cloud_backup_snapshot_restore_job_test.go:38: 
2026-07-14T01:21:01.6046806Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T01:21:01.6047945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T01:21:01.6049413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T01:21:01.6051045Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-14T01:21:01.6053192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:38
2026-07-14T01:21:01.6054107Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-14T01:21:01.6054474Z         	Error:      	Received unexpected error:
2026-07-14T01:21:01.6055835Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:21:01.6056581Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-14T01:21:01.6057751Z         	Messages:   	Project creation failed: test-acc-tf-p-7928466676196021273, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:21:01.6058569Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (61.92s)
```

- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18

### Error 2026-07-18T01:13:23+00:00
```
2026-07-18T01:13:23.7937479Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-18T01:13:23.7938268Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-4852111922220028674
2026-07-18T01:13:23.7938976Z     resource_cloud_backup_snapshot_restore_job_test.go:38: 
2026-07-18T01:13:23.7940253Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:13:23.7942149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:13:23.7943950Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:13:23.7945696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-18T01:13:23.7948031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:38
2026-07-18T01:13:23.7949432Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:13:23.7950229Z         	Error:      	Received unexpected error:
2026-07-18T01:13:23.7952187Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:13:23.7953516Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-18T01:13:23.7955346Z         	Messages:   	Project creation failed: test-acc-tf-p-4852111922220028674, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:13:23.7956607Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (70.26s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 21 minutes
- 2026-07-22 PASS 38 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8828635Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-23T00:50:22.8829426Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-2492228738346959979
2026-07-23T00:50:22.8830125Z     resource_cloud_backup_snapshot_restore_job_test.go:38: 
2026-07-23T00:50:22.8831117Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8832914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8834718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8836432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8839017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:38
2026-07-23T00:50:22.8840426Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8840961Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8842881Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8844005Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-07-23T00:50:22.8845817Z         	Messages:   	Project creation failed: test-acc-tf-p-2492228738346959979, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8847216Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (61.49s)
```

- 2026-07-24 PASS 46 minutes
- 2026-07-25 PASS 31 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 32 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 24 minutes
- 2026-08-01 PASS 20 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 20 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 28 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 26 minutes
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
- 2026-07-26 PASS 30 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 23 minutes
  - PASS 26 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
