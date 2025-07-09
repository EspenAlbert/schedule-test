# backup/cloudbackupsnapshotexportjob/TestMigBackupSnapshotExportJob_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.01s
2025-06-05 00:36 | dev | 207.07s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 19 minutes
### 2025-04-12
#### PASS 19 minutes
### 2025-04-13
#### PASS 34 minutes
### 2025-04-14
#### PASS 35 minutes
### 2025-04-15
#### PASS 22 minutes
### 2025-04-16
#### PASS 19 minutes
#### PASS 36 minutes
### 2025-04-17
#### PASS 19 minutes
### 2025-04-18
#### PASS 19 minutes
### 2025-04-19
#### PASS 20 minutes
### 2025-04-20
#### PASS 28 minutes
### 2025-04-21
#### PASS 19 minutes
### 2025-04-22
#### PASS 18 minutes
### 2025-04-23
#### PASS 19 minutes
### 2025-04-24
#### PASS 20 minutes
### 2025-04-25
#### PASS 19 minutes
### 2025-04-26
#### PASS 21 minutes
### 2025-04-27
#### PASS 30 minutes
### 2025-04-28
#### PASS 18 minutes
### 2025-04-29
#### PASS 18 minutes
### 2025-04-30
#### PASS 20 minutes
### 2025-05-01
#### PASS 20 minutes
#### PASS 19 minutes
#### PASS 19 minutes
#### PASS 18 minutes
#### PASS 20 minutes
#### PASS 17 minutes
#### PASS 18 minutes
### 2025-05-02
#### PASS 19 minutes
### 2025-05-03
#### PASS 19 minutes
### 2025-05-04
#### PASS 29 minutes
### 2025-05-05
#### PASS 18 minutes
### 2025-05-06
#### PASS 20 minutes
### 2025-05-07
#### PASS 18 minutes
### 2025-05-08
#### PASS 20 minutes
### 2025-05-09
#### PASS 21 minutes
### 2025-05-10
#### PASS 18 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:43.8234343Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-05-11T00:29:43.8239469Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-9031926596713692003
2025-05-11T00:29:43.8244689Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: 
2025-05-11T00:29:43.8248942Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.8254083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.8257189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:43.8261735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_test.go:27
2025-05-11T00:29:43.8266544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportjob/resource_cloud_backup_snapshot_export_job_migration_test.go:11
2025-05-11T00:29:43.8268405Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.8269986Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.8271246Z         	Test:       	TestMigBackupSnapshotExportJob_basic
2025-05-11T00:29:43.8273116Z         	Messages:   	Project creation failed: test-acc-tf-p-9031926596713692003, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.8274405Z --- FAIL: TestMigBackupSnapshotExportJob_basic (0.12s)
```
### 2025-05-12
#### PASS 19 minutes
### 2025-05-13
#### PASS 19 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 20 minutes
### 2025-05-15
#### PASS 21 minutes
### 2025-05-16
#### PASS 20 minutes
### 2025-05-17
#### PASS 18 minutes
### 2025-05-18
#### PASS 29 minutes
### 2025-05-19
#### PASS 19 minutes
### 2025-05-20
#### PASS 20 minutes
### 2025-05-21
#### PASS 19 minutes
### 2025-05-22
#### PASS 20 minutes
### 2025-05-23
#### PASS 19 minutes
### 2025-05-24
#### PASS 21 minutes
### 2025-05-25
#### PASS 29 minutes
### 2025-05-26
#### PASS 19 minutes
### 2025-05-27
#### PASS 19 minutes
### 2025-05-28
#### PASS 27 minutes
#### PASS 27 minutes
### 2025-05-29
#### PASS 19 minutes
### 2025-05-30
#### PASS 19 minutes
#### PASS 18 minutes
### 2025-05-31
#### PASS 19 minutes
### 2025-06-01
#### PASS 18 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 20 minutes
#### PASS 19 minutes
#### PASS 18 minutes
### 2025-06-02
#### PASS 17 minutes
#### PASS 20 minutes
#### PASS 20 minutes
### 2025-06-03
#### PASS 18 minutes
### 2025-06-04
#### PASS 20 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:36:03.3177151Z === RUN   TestMigBackupSnapshotExportJob_basic
2025-06-05T00:36:03.3179082Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Creating execution project: test-acc-tf-p-2985326820767504160
2025-06-05T00:36:03.3181023Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:51.62655194Z, ProjectID: 6840e4bcc939f2741325062c, Cluster name: test-acc-tf-c-2167582931832138429
2025-06-05T00:36:03.3194813Z   
2025-06-05T00:36:03.3195845Z     resource_cloud_backup_snapshot_export_job_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:36:03.3196771Z         
2025-06-05T00:36:03.3199896Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f2741325062c/clusters/test-acc-tf-c-2167582931832138429 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3202011Z         
2025-06-05T00:36:03.3202691Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3203979Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3205377Z           19: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3205998Z         
2025-06-05T00:36:03.3216568Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T00:36:03.3217420Z         
2025-06-05T00:36:03.3220426Z         Error: error deleting snapshot export bucket 6840e4bcc939f2741325062c https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f2741325062c/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3222523Z         
2025-06-05T00:36:03.3223006Z --- FAIL: TestMigBackupSnapshotExportJob_basic (207.71s)
```
### 2025-06-06
#### PASS 18 minutes
### 2025-06-07
#### PASS 20 minutes
### 2025-06-08
#### PASS 28 minutes
### 2025-06-09
#### PASS 20 minutes
### 2025-06-10
#### PASS 26 minutes
### 2025-06-11
#### PASS 19 minutes
#### PASS 28 minutes
### 2025-06-12
#### PASS 20 minutes
### 2025-06-13
#### PASS 19 minutes
### 2025-06-14
#### PASS 21 minutes
### 2025-06-15
#### PASS 28 minutes
### 2025-06-16
#### PASS 18 minutes
### 2025-06-17
#### PASS 19 minutes
### 2025-06-18
#### PASS 20 minutes
### 2025-06-19
#### PASS 22 minutes
### 2025-06-20
#### PASS 18 minutes
### 2025-06-21
#### PASS 19 minutes
### 2025-06-22
#### PASS 29 minutes
### 2025-06-23
#### PASS 18 minutes
### 2025-06-24
#### PASS 20 minutes
### 2025-06-25
#### PASS 20 minutes
### 2025-06-26
#### PASS 21 minutes
### 2025-06-27
#### PASS 19 minutes
### 2025-06-28
#### PASS 18 minutes
### 2025-06-29
#### PASS 32 minutes
### 2025-06-30
#### PASS 18 minutes
### 2025-07-01
#### PASS 19 minutes
#### PASS 18 minutes
#### PASS 19 minutes
#### PASS 18 minutes
#### PASS 19 minutes
#### PASS 18 minutes
### 2025-07-02
#### PASS 19 minutes
### 2025-07-03
#### PASS 20 minutes
### 2025-07-04
#### PASS 18 minutes
### 2025-07-05
#### PASS 19 minutes
### 2025-07-06
#### PASS 29 minutes
### 2025-07-07
#### PASS 17 minutes
### 2025-07-08
#### PASS 20 minutes
### 2025-07-09
#### PASS 22 minutes