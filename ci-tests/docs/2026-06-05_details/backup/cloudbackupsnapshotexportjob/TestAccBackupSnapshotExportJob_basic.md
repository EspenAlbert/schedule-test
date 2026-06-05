# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s
[2026-05-23 01:25](#error-2026-05-23t0125370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-06-02 01:24](#error-2026-06-02t0124480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 46 minutes
- 2026-05-08 PASS 36 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1162482Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-05-09T01:25:50.1163241Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-2056243272016644020
2026-05-09T01:25:50.1163953Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-05-09T01:25:50.1165248Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1167124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1168994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1170783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1173321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-05-09T01:25:50.1176274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-05-09T01:25:50.1177484Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1179473Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1180575Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-05-09T01:25:50.1182412Z         	Messages:   	Project creation failed: test-acc-tf-p-2056243272016644020, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1183683Z --- FAIL: TestAccBackupSnapshotExportJob_basic (65.87s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 27 minutes
- 2026-05-12 PASS 21 minutes
- 2026-05-13 PASS 24 minutes
- 2026-05-14 PASS 37 minutes
- 2026-05-15 PASS 23 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 44 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.7032889Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-05-19T01:23:22.7033636Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-8321633574853120508
2026-05-19T01:23:22.7034331Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-05-19T01:23:22.7035332Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.7037167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.7039267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.7041023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.7043476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-05-19T01:23:22.7046100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-05-19T01:23:22.7047082Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.7049372Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7050455Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-05-19T01:23:22.7052248Z         	Messages:   	Project creation failed: test-acc-tf-p-8321633574853120508, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.7053452Z --- FAIL: TestAccBackupSnapshotExportJob_basic (69.72s)
```

- 2026-05-20 PASS 24 minutes
- 2026-05-21 PASS 31 minutes
- 2026-05-22 PASS an hour
- 2026-05-23

### Error 2026-05-23T01:25:37+00:00
```
2026-05-23T01:25:37.7657336Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-05-23T01:25:37.7658063Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-8691613030569482373
2026-05-23T01:25:37.7658740Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-05-23T01:25:37.7659822Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:37.7661548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:37.7663258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:37.7664881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-23T01:25:37.7667046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-05-23T01:25:37.7669428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-05-23T01:25:37.7670631Z         	Error:      	Received unexpected error:
2026-05-23T01:25:37.7672515Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7673503Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-05-23T01:25:37.7675225Z         	Messages:   	Project creation failed: test-acc-tf-p-8691613030569482373, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:37.7676329Z --- FAIL: TestAccBackupSnapshotExportJob_basic (63.00s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 26 minutes
- 2026-05-26 PASS 25 minutes
- 2026-05-27 PASS an hour
- 2026-05-28 PASS 21 minutes
- 2026-05-29 PASS 29 minutes
- 2026-05-30 PASS 19 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 48 minutes
- 2026-06-02

### Error 2026-06-02T01:24:48+00:00
```
2026-06-02T01:24:48.0814350Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-06-02T01:24:48.0815415Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-8708824952727232132
2026-06-02T01:24:48.0816187Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-06-02T01:24:48.0817229Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:48.0819080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:48.0820942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:48.0822724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-06-02T01:24:48.0825245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-06-02T01:24:48.0827850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-06-02T01:24:48.0828858Z         	Error:      	Received unexpected error:
2026-06-02T01:24:48.0830850Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0831940Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-06-02T01:24:48.0833770Z         	Messages:   	Project creation failed: test-acc-tf-p-8708824952727232132, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:48.0835017Z --- FAIL: TestAccBackupSnapshotExportJob_basic (63.29s)
```

- 2026-06-03 PASS 38 minutes
- 2026-06-04 PASS 52 minutes
- 2026-06-05 PASS 23 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 18 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 20 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
