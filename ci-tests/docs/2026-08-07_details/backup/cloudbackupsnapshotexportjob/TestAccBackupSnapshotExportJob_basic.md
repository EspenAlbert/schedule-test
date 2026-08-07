# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.07s
[2026-07-10 02:25](#error-2026-07-10t0225410000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6a504196e2d93fff09dc1bda/cloudProviderAccess/6a504e88aea6151790a7eceb | dev | flaky_500 | 2437.05s
[2026-07-21 00:53](#error-2026-07-21t0053510000) |  | dev | flaky_500 | 41.01s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8656016Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-07-09T01:39:31.8656803Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-4221068743114280366
2026-07-09T01:39:31.8657878Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-07-09T01:39:31.8659061Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8660926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8662782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8664551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8667114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-07-09T01:39:31.8669769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-07-09T01:39:31.8670808Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8672800Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8673932Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-07-09T01:39:31.8675752Z         	Messages:   	Project creation failed: test-acc-tf-p-4221068743114280366, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8677209Z --- FAIL: TestAccBackupSnapshotExportJob_basic (74.67s)
```

- 2026-07-10

### Error 2026-07-10T02:25:41+00:00
```
2026-07-10T02:25:41.8072609Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-07-10T02:25:41.8076246Z 2026/07/10 01:44:41 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504196e2d93fff09dc1bda/cloudProviderAccess/6a504e88aea6151790a7eceb PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8306238734946966382). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8306238734946966382], BadRequestDetail:  
2026-07-10T02:25:41.8079600Z 2026/07/10 01:44:41 retrying
2026-07-10T02:25:41.8101750Z   
2026-07-10T02:25:41.8102996Z     resource_cloud_backup_snapshot_export_job_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:25:41.8104101Z         
2026-07-10T02:25:41.8104579Z         Error: Error in delete
2026-07-10T02:25:41.8105048Z         
2026-07-10T02:25:41.8105861Z         cluster name: test-acc-tf-c-8707822428967577919, API error details:
2026-07-10T02:25:41.8107528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504196e2d93fff09dc1bda/clusters/test-acc-tf-c-8707822428967577919
2026-07-10T02:25:41.8109255Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:25:41.8110462Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:25:41.8111811Z         BadRequestDetail: 
2026-07-10T02:25:41.8112437Z --- FAIL: TestAccBackupSnapshotExportJob_basic (2437.47s)
```

- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 28 minutes
- 2026-07-14 PASS 23 minutes
- 2026-07-15 PASS 21 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 22 minutes
- 2026-07-18 PASS 22 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4758937Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-07-21T00:53:51.4759708Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-7660409412450874229
2026-07-21T00:53:51.4760439Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-07-21T00:53:51.4761451Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4763491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4765303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4767030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4769309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-07-21T00:53:51.4771975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-07-21T00:53:51.4773002Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4773953Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:51.4774666Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-07-21T00:53:51.4775930Z         	Messages:   	Project creation failed: test-acc-tf-p-7660409412450874229, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:51.4776730Z --- FAIL: TestAccBackupSnapshotExportJob_basic (41.10s)
```

- 2026-07-22 PASS 48 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8786009Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-07-23T00:50:22.8786888Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-8582402756049169752
2026-07-23T00:50:22.8787600Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-07-23T00:50:22.8788591Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8790389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8792305Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8794031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8796316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-07-23T00:50:22.8799132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-07-23T00:50:22.8800124Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8802040Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8803109Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-07-23T00:50:22.8804872Z         	Messages:   	Project creation failed: test-acc-tf-p-8582402756049169752, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8806090Z --- FAIL: TestAccBackupSnapshotExportJob_basic (62.38s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 31 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS 52 minutes
- 2026-07-29 PASS 29 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 19 minutes
- 2026-08-01 PASS 21 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 22 minutes
- 2026-08-04 PASS 22 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 21 minutes
- 2026-08-07 PASS 21 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 20 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 23 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 24 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 21 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 23 minutes
  - PASS 21 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
