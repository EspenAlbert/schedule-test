# backup/cloudbackupschedule/TestMigBackupRSCloudBackupSchedule_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.02s
2025-06-05 00:33 | dev | 190.02s

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
#### PASS 13 minutes
### 2025-04-12
#### PASS 14 minutes
### 2025-04-13
#### PASS 20 minutes
### 2025-04-14
#### PASS 13 minutes
### 2025-04-15
#### PASS 14 minutes
### 2025-04-16
#### PASS 14 minutes
#### PASS 19 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 13 minutes
### 2025-04-19
#### PASS 14 minutes
### 2025-04-20
#### PASS 14 minutes
### 2025-04-21
#### PASS 12 minutes
### 2025-04-22
#### PASS 15 minutes
### 2025-04-23
#### PASS 13 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 14 minutes
### 2025-04-26
#### PASS 14 minutes
### 2025-04-27
#### PASS 14 minutes
### 2025-04-28
#### PASS 12 minutes
### 2025-04-29
#### PASS 12 minutes
### 2025-04-30
#### PASS 14 minutes
### 2025-05-01
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 11 minutes
#### PASS 13 minutes
### 2025-05-02
#### PASS 15 minutes
### 2025-05-03
#### PASS 11 minutes
### 2025-05-04
#### PASS 12 minutes
### 2025-05-05
#### PASS 13 minutes
### 2025-05-06
#### PASS 13 minutes
### 2025-05-07
#### PASS 12 minutes
### 2025-05-08
#### PASS 16 minutes
### 2025-05-09
#### PASS 16 minutes
### 2025-05-10
#### PASS 13 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:42.3473595Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-05-11T00:29:42.3510342Z     resource_cloud_backup_schedule_migration_test.go:15: Creating execution project: test-acc-tf-p-787185076774602790
2025-05-11T00:29:42.3511671Z     resource_cloud_backup_schedule_migration_test.go:15: 
2025-05-11T00:29:42.3513199Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:42.3515935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:42.3518513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:42.3522073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_migration_test.go:15
2025-05-11T00:29:42.3523524Z         	Error:      	Received unexpected error:
2025-05-11T00:29:42.3524904Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:42.3525839Z         	Test:       	TestMigBackupRSCloudBackupSchedule_basic
2025-05-11T00:29:42.3527491Z         	Messages:   	Project creation failed: test-acc-tf-p-787185076774602790, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:42.3528869Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (0.24s)
```
### 2025-05-12
#### PASS 13 minutes
### 2025-05-13
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-05-14
#### PASS 12 minutes
### 2025-05-15
#### PASS 12 minutes
### 2025-05-16
#### PASS 14 minutes
### 2025-05-17
#### PASS 13 minutes
### 2025-05-18
#### PASS 14 minutes
### 2025-05-19
#### PASS 14 minutes
### 2025-05-20
#### PASS 14 minutes
### 2025-05-21
#### PASS 13 minutes
### 2025-05-22
#### PASS 11 minutes
### 2025-05-23
#### PASS 19 minutes
### 2025-05-24
#### PASS 13 minutes
### 2025-05-25
#### PASS 14 minutes
### 2025-05-26
#### PASS 13 minutes
### 2025-05-27
#### PASS 14 minutes
### 2025-05-28
#### PASS 19 minutes
#### PASS 14 minutes
### 2025-05-29
#### PASS 11 minutes
### 2025-05-30
#### PASS 26 minutes
#### PASS 12 minutes
### 2025-05-31
#### PASS 13 minutes
### 2025-06-01
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 13 minutes
#### PASS 11 minutes
#### PASS 12 minutes
#### PASS 12 minutes
### 2025-06-02
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-06-03
#### PASS 13 minutes
### 2025-06-04
#### PASS 13 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:33:00.5033167Z === RUN   TestMigBackupRSCloudBackupSchedule_basic
2025-06-05T00:33:00.5034833Z     resource_cloud_backup_schedule_migration_test.go:15: Creating execution project: test-acc-tf-p-372601488148708874
2025-06-05T00:33:00.5045527Z === CONT  TestMigBackupRSCloudBackupSchedule_basic
2025-06-05T00:33:00.5095236Z === NAME  TestMigBackupRSCloudBackupSchedule_basic
2025-06-05T00:33:00.5095898Z     resource_cloud_backup_schedule_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:33:00.5096373Z         
2025-06-05T00:33:00.5098090Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bac939f27413250567/clusters/test-acc-tf-c-5403081960702669774 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:33:00.5099260Z         
2025-06-05T00:33:00.5099629Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:33:00.5100355Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:33:00.5101017Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:33:00.5101363Z         
2025-06-05T00:33:00.5101669Z --- FAIL: TestMigBackupRSCloudBackupSchedule_basic (190.17s)
```
### 2025-06-06
#### PASS 10 minutes
### 2025-06-07
#### PASS 13 minutes
### 2025-06-08
#### PASS 14 minutes
### 2025-06-09
#### PASS 12 minutes
### 2025-06-10
#### PASS 22 minutes
### 2025-06-11
#### PASS 12 minutes
#### PASS 12 minutes
### 2025-06-12
#### PASS 13 minutes
### 2025-06-13
#### PASS 13 minutes
### 2025-06-14
#### PASS 14 minutes
### 2025-06-15
#### PASS 11 minutes
### 2025-06-16
#### PASS 13 minutes
### 2025-06-17
#### PASS 14 minutes
### 2025-06-18
#### PASS 13 minutes
### 2025-06-19
#### PASS 27 minutes
### 2025-06-20
#### PASS 14 minutes
### 2025-06-21
#### PASS 14 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 13 minutes
### 2025-06-24
#### PASS 11 minutes
### 2025-06-25
#### PASS 13 minutes
### 2025-06-26
#### PASS 12 minutes
### 2025-06-27
#### PASS 12 minutes
### 2025-06-28
#### PASS 12 minutes
### 2025-06-29
#### PASS 17 minutes
### 2025-06-30
#### PASS 13 minutes
### 2025-07-01
#### PASS 11 minutes
#### PASS 13 minutes
#### PASS 11 minutes
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 13 minutes
### 2025-07-02
#### PASS 13 minutes
### 2025-07-03
#### PASS 14 minutes
### 2025-07-04
#### PASS 13 minutes
### 2025-07-05
#### PASS 14 minutes
### 2025-07-06
#### PASS 13 minutes
### 2025-07-07
#### PASS 13 minutes
### 2025-07-08
#### PASS 12 minutes
### 2025-07-09
#### PASS 22 minutes