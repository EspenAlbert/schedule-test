# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:19](#error-2026-04-09t0119070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-04-16 01:05](#error-2026-04-16t0105000000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69e032561ec945fedc7176e4/cloudProviderAccess/69e032611ec945fedc71cc12 | dev | out_of_capacity | 32.09s
[2026-04-30 01:26](#error-2026-04-30t0126500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 59 minutes
- 2026-04-08 PASS 22 minutes
- 2026-04-09

### Error 2026-04-09T01:19:07+00:00
```
2026-04-09T01:19:07.1042352Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-04-09T01:19:07.1045615Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-6027704225449350323
2026-04-09T01:19:07.1046855Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-04-09T01:19:07.1048852Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:19:07.1052219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:19:07.1055545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:19:07.1058914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-09T01:19:07.1063198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-04-09T01:19:07.1067925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-04-09T01:19:07.1069868Z         	Error:      	Received unexpected error:
2026-04-09T01:19:07.1073442Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1075285Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-04-09T01:19:07.1079178Z         	Messages:   	Project creation failed: test-acc-tf-p-6027704225449350323, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1081336Z --- FAIL: TestAccBackupSnapshotExportJob_basic (62.94s)
```

- 2026-04-10 PASS 34 minutes
- 2026-04-11 PASS 21 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 23 minutes
- 2026-04-14 PASS 21 minutes
- 2026-04-15 PASS 22 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8181960Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-04-16T01:05:00.8182680Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-49652125535885866
2026-04-16T01:05:00.8189877Z 2026/04/16 00:50:42 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032561ec945fedc7176e4/cloudProviderAccess/69e032611ec945fedc71cc12 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5650781329312220709). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5650781329312220709], BadRequestDetail:  
2026-04-16T01:05:00.8191601Z 2026/04/16 00:50:42 retrying
2026-04-16T01:05:00.8199722Z   
2026-04-16T01:05:00.8200273Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:05:00.8200776Z         
2026-04-16T01:05:00.8201055Z         Error: Error in create
2026-04-16T01:05:00.8201325Z         
2026-04-16T01:05:00.8201857Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8202605Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8203322Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8204061Z         
2026-04-16T01:05:00.8204672Z         cluster name: test-acc-tf-c-1884122146999606136, API error details:
2026-04-16T01:05:00.8205622Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032561ec945fedc7176e4/clusters
2026-04-16T01:05:00.8206788Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8207717Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8218628Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8219246Z --- FAIL: TestAccBackupSnapshotExportJob_basic (32.93s)
```

- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 29 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 19 minutes
- 2026-04-21 PASS 25 minutes
- 2026-04-22 PASS 38 minutes
- 2026-04-23 PASS 29 minutes
- 2026-04-24 PASS 23 minutes
- 2026-04-25 PASS 21 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 21 minutes
- 2026-04-28 PASS 24 minutes
- 2026-04-29 PASS 22 minutes
- 2026-04-30

### Error 2026-04-30T01:26:50+00:00
```
2026-04-30T01:26:50.4986403Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-04-30T01:26:50.4987163Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-6615599696250689012
2026-04-30T01:26:50.4987872Z     resource_cloud_backup_snapshot_export_job_test.go:22: 
2026-04-30T01:26:50.4988894Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:26:50.4990742Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:26:50.4992931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:26:50.4994692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T01:26:50.4997036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:29
2026-04-30T01:26:50.4999634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:22
2026-04-30T01:26:50.5000636Z         	Error:      	Received unexpected error:
2026-04-30T01:26:50.5002776Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.5003879Z         	Test:       	TestAccBackupSnapshotExportJob_basic
2026-04-30T01:26:50.5005718Z         	Messages:   	Project creation failed: test-acc-tf-p-6615599696250689012, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.5006979Z --- FAIL: TestAccBackupSnapshotExportJob_basic (63.36s)
```

- 2026-05-01 PASS 22 minutes
- 2026-05-02 PASS 19 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 minutes
- 2026-05-05 PASS 30 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 19 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 20 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes
