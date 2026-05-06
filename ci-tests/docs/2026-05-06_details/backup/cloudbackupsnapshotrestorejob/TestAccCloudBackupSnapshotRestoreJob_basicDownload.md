# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:19](#error-2026-04-09t0119070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b281002038a8a09bbe/clusters | dev | out_of_capacity | 56.01s
[2026-04-30 01:26](#error-2026-04-30t0126500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 55 minutes
- 2026-04-08 PASS 25 minutes
- 2026-04-09

### Error 2026-04-09T01:19:07+00:00
```
2026-04-09T01:19:07.1121560Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-04-09T01:19:07.1122940Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-5147887164403740675
2026-04-09T01:19:07.1124155Z     resource_cloud_backup_snapshot_restore_job_test.go:38: 
2026-04-09T01:19:07.1125946Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:19:07.1129444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:19:07.1132808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:19:07.1135994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-09T01:19:07.1140631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:38
2026-04-09T01:19:07.1143188Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T01:19:07.1144086Z         	Error:      	Received unexpected error:
2026-04-09T01:19:07.1147679Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1149848Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-04-09T01:19:07.1153128Z         	Messages:   	Project creation failed: test-acc-tf-p-5147887164403740675, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:19:07.1155315Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (67.19s)
```

- 2026-04-10 PASS 32 minutes
- 2026-04-11 PASS 20 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 26 minutes
- 2026-04-14 PASS 23 minutes
- 2026-04-15 PASS 25 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8239202Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-04-16T01:05:00.8239966Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-5331222823718529521
2026-04-16T01:05:00.8241046Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-04-16T01:05:00.8241971Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:52:57.542919513Z, ProjectID: 69e032b281002038a8a09bbe, Cluster name: test-acc-tf-c-3489466604194580756
2026-04-16T01:05:00.8255848Z   
2026-04-16T01:05:00.8256518Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:05:00.8257029Z         
2026-04-16T01:05:00.8257308Z         Error: Error in create
2026-04-16T01:05:00.8257583Z         
2026-04-16T01:05:00.8257969Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8258714Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8259410Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8259783Z         
2026-04-16T01:05:00.8260225Z         cluster name: test-acc-tf-c-3489466604194580756, API error details:
2026-04-16T01:05:00.8260926Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b281002038a8a09bbe/clusters
2026-04-16T01:05:00.8261634Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8262311Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8262838Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8263282Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (56.12s)
```

- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 28 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 20 minutes
- 2026-04-21 PASS 22 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 29 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25 PASS 20 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 23 minutes
- 2026-04-28 PASS 23 minutes
- 2026-04-29 PASS 24 minutes
- 2026-04-30

### Error 2026-04-30T01:26:50+00:00
```
2026-04-30T01:26:50.5030451Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-04-30T01:26:50.5031248Z     resource_cloud_backup_snapshot_restore_job_test.go:38: Creating execution project (1): test-acc-tf-p-6970802883894668673
2026-04-30T01:26:50.5031962Z     resource_cloud_backup_snapshot_restore_job_test.go:38: 
2026-04-30T01:26:50.5033135Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:26:50.5034973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:26:50.5036805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:26:50.5038579Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T01:26:50.5040935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotrestorejob/resource_cloud_backup_snapshot_restore_job_test.go:38
2026-04-30T01:26:50.5042534Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:26:50.5043070Z         	Error:      	Received unexpected error:
2026-04-30T01:26:50.5045042Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.5046200Z         	Test:       	TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-04-30T01:26:50.5048056Z         	Messages:   	Project creation failed: test-acc-tf-p-6970802883894668673, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.5049364Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (64.84s)
```

- 2026-05-01 PASS 23 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 26 minutes
- 2026-05-05 PASS 28 minutes
- 2026-05-06 PASS 38 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 23 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 23 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 21 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 21 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 22 minutes
- 2026-05-04 PASS 45 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 21 minutes
